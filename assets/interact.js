// Client-side retention layer: the Star of the Day, the bookshelf, and the
// nickname quiz. Everything is deterministic from the visitor's local date and
// localStorage — the server ships data, this file ships the game.
(() => {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };
  const track = (name, params) => { if (window.gtag) gtag("event", name, params || {}); };

  // Whole local days since the epoch — the seed every feature shares, so the
  // same ten questions and the same star face everyone on the same date.
  const dayNumber = () => {
    const d = new Date();
    return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
  };

  // ---------- Star of the Day + quiz data ----------
  const starsData = () => {
    const el = document.getElementById("stars-data");
    return el ? JSON.parse(el.textContent) : null; // [rank, nickZh, nickEn, nameZh, pinyin, hasLeaf]
  };

  // mulberry32 — small, seedable, good enough to deal ten fixed questions.
  function rng(seed) {
    return () => {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function daily() {
    const slot = document.getElementById("daily-slot");
    const stars = starsData();
    if (!slot || !stars || !stars.length) return;
    const L = slot.dataset; // base, buster, rank, cta, ctaLeaf, kicker
    const star = stars[dayNumber() % stars.length];
    const [rank, nickZh, nickEn, nameZh, pinyin, hasLeaf] = star;
    const id = `wm-s${String(rank).padStart(3, "0")}`;
    const v = L.buster;
    const href = hasLeaf === 1
      ? `${L.base}/water-margin/${pinyin.toLowerCase().replace(/ü/g, "u").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}/`
      : `${L.base}/water-margin/`;
    slot.innerHTML = `
      <a class="daily-link" href="${href}">
        <picture>
          <source srcset="${L.base}/assets/img/${id}.avif?v=${v}" type="image/avif">
          <source srcset="${L.base}/assets/img/${id}.webp?v=${v}" type="image/webp">
          <img src="${L.base}/assets/img/${id}.jpg?v=${v}" alt="${nameZh}" width="180" height="225" loading="lazy">
        </picture>
        <div class="daily-body">
          <p class="daily-kicker">${L.kicker}</p>
          <p class="daily-name"><span lang="zh">${nameZh}</span> <span class="daily-py">${pinyin}</span></p>
          <p class="daily-nick"><span lang="zh">${nickZh}</span> “${nickEn}”</p>
          <p class="daily-cta">${hasLeaf === 1 ? L.ctaLeaf : L.cta} →</p>
        </div>
      </a>`;
    slot.closest("a,button")?.addEventListener?.("click", () => track("daily_open", { rank }));
  }

  // ---------- Bookshelf ----------
  const FAVS = "cl.favs", SEEN = "cl.seen";
  const favs = () => store.get(FAVS, []);
  const isFav = (slug) => favs().includes(slug);

  function markSeen() {
    const slug = document.querySelector("[data-leaf-slug]")?.dataset.leafSlug;
    if (!slug) return;
    const seen = store.get(SEEN, []);
    if (!seen.includes(slug)) { seen.push(slug); store.set(SEEN, seen); }
  }

  function favButton() {
    const btn = document.querySelector(".fav-btn[data-leaf-slug]");
    if (!btn) return;
    const slug = btn.dataset.leafSlug;
    const paint = () => {
      const on = isFav(slug);
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-pressed", String(on));
      btn.querySelector(".fav-t").textContent = on ? btn.dataset.on : btn.dataset.off;
    };
    paint();
    btn.addEventListener("click", () => {
      const list = favs();
      const at = list.indexOf(slug);
      if (at >= 0) { list.splice(at, 1); track("fav_remove", { slug }); }
      else { list.push(slug); track("fav_add", { slug }); }
      store.set(FAVS, list);
      paint();
    });
  }

  function shelf() {
    const list = document.getElementById("shelf-list");
    const progress = document.getElementById("shelf-progress");
    const indexEl = document.getElementById("leaf-index");
    if (!list || !progress || !indexEl) return;
    let index = {};
    try { index = JSON.parse(indexEl.textContent); } catch { return; }
    const saved = favs().filter((s) => index[s]);
    const seen = store.get(SEEN, []).filter((s) => index[s]);
    progress.textContent = `${progress.dataset.favs.replace("{n}", String(saved.length))} · ${progress.dataset.seen.replace("{n}", String(seen.length))}`;
    const empty = document.getElementById("shelf-empty");
    if (!saved.length) { empty.hidden = false; return; }
    empty.hidden = true;
    list.innerHTML = saved.map((slug) => {
      const [zh, en] = index[slug];
      return `<li><a class="rowlink shelf-item" href="${list.dataset.base}/${slug}/"><span class="zh" lang="zh">${zh}</span> ${en}</a></li>`;
    }).join("");
  }

  // ---------- Nickname quiz ----------
  function quiz() {
    const root = document.getElementById("quiz-root");
    const stars = starsData();
    if (!root || !stars) return;
    const L = root.dataset;
    const day = dayNumber();
    const rand = rng(day * 2654435761);
    // Deal ten: shuffle by the daily seed, take ten, three wrong names each.
    const pool = stars.map((s, i) => i).sort(() => rand() - 0.5).slice(0, 10);
    const questions = pool.map((idx) => {
      const wrong = new Set();
      while (wrong.size < 3) {
        const other = Math.floor(rand() * stars.length);
        if (other !== idx) wrong.add(other);
      }
      const options = [idx, ...wrong].sort(() => rand() - 0.5);
      return { star: stars[idx], options };
    });
    let at = 0, score = 0, locked = false;

    const head = () => L.q.replace("{n}", String(at + 1));
    function render() {
      const { star, options } = questions[at];
      locked = false;
      root.innerHTML = `
        <p class="quiz-count">${head()}</p>
        <div class="quiz-nick card">
          <p class="quiz-nick-zh" lang="zh">${star[1]}</p>
          <p class="quiz-nick-en">“${star[2]}”</p>
        </div>
        <div class="quiz-opts">
          ${options.map((oi) => `<button class="quiz-opt" data-oi="${oi}"><span lang="zh">${stars[oi][3]}</span> ${stars[oi][4]}</button>`).join("")}
        </div>`;
      root.querySelectorAll(".quiz-opt").forEach((b) => {
        b.addEventListener("click", () => {
          if (locked) return;
          locked = true;
          const isOk = stars[+b.dataset.oi][4] === star[4];
          if (isOk) score++;
          root.querySelectorAll(".quiz-opt").forEach((x) => {
            if (stars[+x.dataset.oi][4] === star[4]) x.classList.add("right");
            else if (x === b) x.classList.add("wrong");
            x.disabled = true;
          });
          track("quiz_answer", { ok: String(isOk), q: at + 1 });
          setTimeout(next, 900);
        });
      });
    }
    function next() {
      at++;
      if (at < questions.length) { render(); return; }
      const el = document.getElementById("quiz-title-t");
      root.innerHTML = `
        <div class="quiz-score card">
          <p class="quiz-big"><span lang="zh">${score}</span><span class="quiz-of">/10</span></p>
          <p class="quiz-rank">${score === 10 ? L.t10 : score >= 8 ? L.t8 : score >= 6 ? L.t6 : score >= 3 ? L.t3 : L.t0}</p>
          <p class="quiz-tomorrow">${L.tomorrow}</p>
          <div class="quiz-actions">
            <button class="quiz-copy" id="quiz-copy">${L.copy}</button>
            <a class="quiz-home rowlink" href="${L.base}/water-margin/">${L.roster}</a>
          </div>
        </div>`;
      document.getElementById("quiz-copy").addEventListener("click", (e) => {
        const text = `${L.share.replace("{n}", String(score))}${location.origin}${L.base}/quiz/`;
        navigator.clipboard?.writeText(text).then(() => { e.target.textContent = L.copied; });
        track("quiz_share", { score });
      });
      track("quiz_complete", { score });
    }
    render();
  }

  // One feature failing must never take the others down with it.
  for (const [name, fn] of [["seen", markSeen], ["fav", favButton], ["daily", daily], ["shelf", shelf], ["quiz", quiz]]) {
    try { fn(); } catch (e) { console.error(`interact.${name}:`, e); }
  }
})();
