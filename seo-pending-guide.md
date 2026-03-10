# SEO Pending Items Guide

Items that could not be automated and require manual action.

## 1. Social Card Image (High Priority)

**Problem:** Current `static/img/socialcard.png` is 478x277px. The optimal size for Open Graph previews (Facebook, Twitter/X, LinkedIn, Discord) is **1200x630px**.

**Impact:** Small images render poorly or get cropped in social previews, reducing click-through from shared links.

**Action:** Re-export or redesign `static/img/socialcard.png` at 1200x630px. Keep the same filename so no config changes are needed.

**Validation:** After deploying, paste a page URL into:
- https://cards-dev.twitter.com/validator (Twitter/X)
- https://developers.facebook.com/tools/debug/ (Facebook)

---

## 2. Doc Page Meta Descriptions (High Priority)

**Problem:** All 40+ documentation pages under `/docs/` are missing `description` in their frontmatter. Without it, Google auto-generates snippets from random page content.

**Impact:** +5.8% CTR per page with an optimized description (Yoast/HubSpot study). Google uses the provided description 37% of the time (Ahrefs study of 20k keywords).

**Action:** Add a `description` field to the frontmatter of each doc page. Example:

```yaml
---
title: Live Preview
description: "Use Phoenix Code's live preview to see HTML and CSS changes in real time. Supports browser sync, custom servers, and visual editing."
---
```

**Guidelines:**
- 150-160 characters (Google truncates beyond ~160)
- Include the primary keyword for that page naturally
- Describe what the reader will learn or accomplish
- Use active language

**Pages needing descriptions (prioritize by traffic):**
- `docs/01-intro.md`
- `docs/08-Features/06-Live Preview/01-live-preview.md`
- `docs/08-Features/beautify-code.md`
- `docs/08-Features/05-keyboard-shortcuts.md`
- `docs/04-editing-colors.md`
- `docs/02-Linux.md`, `docs/03-Mac.md`
- All remaining doc pages under `docs/`

---

## 3. Google Search Console Setup (High Priority)

**Problem:** The sitemap at `https://docs.phcode.dev/sitemap.xml` should be explicitly submitted to Google Search Console for fastest indexing.

**Action:**
1. Go to https://search.google.com/search-console
2. Add property `https://docs.phcode.dev` (if not already added)
3. Go to Sitemaps > Add a new sitemap
4. Enter `sitemap.xml` and submit
5. After `robots.txt` is deployed, Google will also discover it automatically

---

## 4. Blog Post Cover Images (Medium Priority)

**Problem:** No blog post has a custom `image` field in frontmatter. All posts fall back to the global social card (which is also undersized).

**Impact:** Custom images per post make social shares more visually distinct and clickable. Posts with images get 2-3x higher engagement on social platforms.

**Action:** For each blog post, create a 1200x630px cover image and add to frontmatter:

```yaml
---
image: /img/blog/release-5.0-cover.png
---
```

Store images in `static/img/blog/`.

---

## 5. Category Page Metadata (Low Priority)

**Problem:** `_category_.json` files under `docs/` only set `collapsible` and `collapsed`. They lack `label` and `description` fields.

**Action:** Update each `_category_.json`:

```json
{
  "label": "Features",
  "description": "Phoenix Code editor features — live preview, Git, extensions, visual editing, and more.",
  "collapsible": true,
  "collapsed": false
}
```

**Files:**
- `docs/08-Features/_category_.json`
- `docs/07-Pro Features/_category_.json`
- `api/API-Reference/_category_.json`

---

## 6. Monitor Core Web Vitals (Ongoing)

**Action:** After deployment, check performance at:
- https://pagespeed.web.dev/?url=https://docs.phcode.dev
- Google Search Console > Core Web Vitals report

**Targets:** LCP < 2.5s, INP < 200ms, CLS < 0.1

---

## What Was Already Done (This PR)

| Change | File(s) |
|--------|---------|
| Fixed homepage title + description | `src/pages/index.js` |
| Added `robots.txt` | `static/robots.txt` |
| Added global OG + Twitter meta tags | `docusaurus.config.js` |
| Added JSON-LD Organization + WebSite schemas | `docusaurus.config.js` |
| Enhanced sitemap with lastmod + custom priorities | `docusaurus.config.js` |
| Fixed `anonymizeIP: true` for GDPR | `docusaurus.config.js` |
| Added aria-label to homepage SVGs | `src/components/HomepageFeatures/index.js` |
| Added meta descriptions to 10 blog posts | All `blog/*/index.md` files |
