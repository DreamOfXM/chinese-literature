# Chinese Literature

Lookup tools for the Ming–Qing classical novels — tables, trees, indexes and painted
leaves, not essays.

**Live site: <https://dreamofxm.github.io/chinese-literature/>**

Every page answers one question with a row or a branch: who held which rank in the 108,
which demon carried which treasure and how the fight ended, who is whose mother in the Jia
house.

| Section | What is in it |
|---|---|
| [Water Margin](https://dreamofxm.github.io/chinese-literature/water-margin/) | The 108 Stars in rank order — heavenly or earthly, nickname in Chinese and English, name, condensed fate. Stars with a leaf of their own open into a painted portrait and their deeds in chapter order. |
| [Journey to the West](https://dreamofxm.github.io/chinese-literature/journey-west/) | Each named antagonist episode: place, demon, magic treasure or ability, how it was resolved, chapter range. Pilgrim, god and monster alike. |
| [Red Chamber](https://dreamofxm.github.io/chinese-literature/red-chamber/) | The Jia house as an expandable tree, plus the Jinling register with its verses, glosses and fates. |
| Three Kingdoms | Booth reserved. Its tables ship when they can beat an essay. |

## How it is built

Plain HTML, no framework, no runtime data fetch. `render.mjs` holds pure string builders
and `build.mjs` calls them at build time, so the file that ships already contains the
content — a crawler gets the full page without executing JavaScript.

```bash
node build.mjs          # writes every page, robots.txt and sitemap.xml
python3 -m http.server 8790   # preview at /chinese-literature/
```

The texts are public domain. English nicknames and verse glosses are interpretive, not
official translations.

## Corrections

Open an issue. Every claim here points at a chapter, so a mistake is checkable, and a good
correction goes into the page.

## Licence

No licence file, which means **all rights reserved**. The rankings, notes and ink
illustrations are original to this site; the paintings are modern interpretations made for
it, in the Ming drinking-leaf tradition — no scan, studio still or game asset appears
anywhere on the site. Republication requires attribution and a link back.
