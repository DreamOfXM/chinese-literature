// Progressive enhancement only: every table, tree and leaf page is fully present
// in the shipped HTML. This file adds search, group filtering, tree toggling,
// roster-row navigation and the swipeable portrait lightbox.
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

$$("input[data-filter-table]").forEach((inp) => {
  const sel = inp.dataset.filterTable;
  const table = $(sel);
  if (!table) return;
  const rows = $$("tbody tr", table);
  const count = $(`[data-count="${sel}"]`);
  const groupBtns = $$(`[data-group-filter="${sel}"]`);
  let group = "all";
  const apply = () => {
    const q = inp.value.trim().toLowerCase();
    let n = 0;
    for (const tr of rows) {
      const show = (group === "all" || tr.dataset.group === group) &&
        (!q || tr.textContent.toLowerCase().includes(q));
      tr.hidden = !show;
      if (show) n += 1;
    }
    if (count) count.textContent = `${n} / ${rows.length}`;
  };
  inp.addEventListener("input", apply);
  groupBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      group = btn.dataset.group;
      groupBtns.forEach((b) => b.classList.toggle("on", b === btn));
      apply();
    })
  );
  apply();
});

// A roster row whose character has a leaf page navigates to it. Clicks that land
// on the row's own link are left to the browser.
$$("tr[data-leaf]").forEach((tr) =>
  tr.addEventListener("click", (ev) => {
    if (ev.target.closest("a")) return;
    location.assign(tr.dataset.leaf);
  })
);

$$(".tree li.has-kids > .tw").forEach((btn) =>
  btn.addEventListener("click", () => {
    const li = btn.parentElement;
    li.classList.toggle("open");
    btn.textContent = li.classList.contains("open") ? "−" : "+";
  })
);

// ---------- portrait lightbox ----------
// The rail on the roster page and every leaf page carry the same gallery as JSON,
// so one overlay serves the whole site and arrows walk all 45 characters.
const payload = $("script.lb-data");
const GALLERY = payload ? JSON.parse(payload.textContent) : [];

if (GALLERY.length) {
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  const box = el("div", "lb");
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Character portrait viewer");

  const img = el("img");
  const zh = el("span", "lb-zh");
  const en = el("span", "lb-en");
  const go = el("a", "lb-go");
  go.textContent = "Read the leaf →";
  const cap = el("figcaption");
  cap.append(zh, en, go);
  const fig = el("figure", "lb-fig");
  fig.append(img, cap);

  const count = el("span", "lb-count");
  const prev = el("button", "lb-nav lb-prev", "‹");
  const next = el("button", "lb-nav lb-next", "›");
  const close = el("button", "lb-close", "✕");
  close.setAttribute("aria-label", "Close the viewer");
  prev.setAttribute("aria-label", "Previous character");
  next.setAttribute("aria-label", "Next character");
  box.append(el("div", "lb-scrim"), prev, fig, next, close, count);
  document.body.append(box);

  let at = 0;
  let opener = null;

  const show = (i) => {
    at = (i + GALLERY.length) % GALLERY.length;
    const it = GALLERY[at];
    img.src = it.webp;
    img.alt = `Ink leaf portrait of ${it.en}, ${it.nn}.`;
    zh.textContent = it.zh;
    zh.lang = "zh";
    en.textContent = `${it.en} · ${it.nn} · ${it.tag}`;
    go.href = it.href;
    count.textContent = `${at + 1} / ${GALLERY.length}`;
    for (const d of [1, -1]) {
      const nb = GALLERY[(at + d + GALLERY.length) % GALLERY.length];
      const pre = new Image();
      pre.src = nb.webp;
    }
  };

  const open = (i, trigger) => {
    opener = trigger || null;
    show(i);
    box.hidden = false;
    document.body.classList.add("lb-on");
    close.focus();
    if (typeof window.gtag === "function") {
      window.gtag("event", "leaf_open", { leaf: GALLERY[i].en, tag: GALLERY[i].tag });
    }
  };

  const shut = () => {
    box.hidden = true;
    document.body.classList.remove("lb-on");
    if (opener) opener.focus();
  };

  prev.addEventListener("click", () => show(at - 1));
  next.addEventListener("click", () => show(at + 1));
  close.addEventListener("click", shut);
  $(".lb-scrim", box).addEventListener("click", shut);
  box.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") shut();
    else if (ev.key === "ArrowLeft") show(at - 1);
    else if (ev.key === "ArrowRight") show(at + 1);
  });

  // Swipe (or drag) sideways to walk the gallery.
  let x0 = null;
  fig.addEventListener("pointerdown", (ev) => { x0 = ev.clientX; });
  fig.addEventListener("pointerup", (ev) => {
    if (x0 == null) return;
    const dx = ev.clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 44) show(dx < 0 ? at + 1 : at - 1);
  });
  fig.addEventListener("pointercancel", () => { x0 = null; });

  $$("[data-lb]").forEach((btn) =>
    btn.addEventListener("click", () => open(Number(btn.dataset.lb) || 0, btn))
  );
}
