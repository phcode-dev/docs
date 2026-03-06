---
title: "Phoenix Code Is Brackets — Rebuilt for 2026"
description: "Phoenix Code is the next generation of Brackets, built by the same team. Same philosophy, same live preview DNA, massively upgraded. Here's everything that's new."
authors: [charly]
tags:
  - brackets
  - comparison
  - migration
  - code-editor
  - live-preview
  - open-source
---

If you've used Brackets, you already know us. Phoenix Code is built by the same team that created Brackets — same philosophy, same live preview DNA, same obsession with keeping front-end development fast and visual. Think of it as Brackets with five years of upgrades that we couldn't ship under the old architecture.

<!-- truncate -->

This isn't a "spiritual successor" or a tribute project. We're the same people. Phoenix Code is what Brackets becomes when you rebuild it on a modern foundation and finally deliver on the features the community has been requesting for years.

If you're still using Brackets, everything below is for you.

---

## Brackets vs Phoenix Code: What's New

Here's the quick comparison. The left column is what you know. The right column is where we are now.

| Feature | Brackets | Phoenix Code |
|---------|----------|-------------|
| Live Preview | Basic (view only) | Full live preview + direct editing in preview |
| Visual Editing | Limited | Color pickers, number dials, gradient editors, drag-and-drop |
| Git Integration | Required third-party extension | Built-in |
| Browser Version | No | Yes — [phcode.dev](https://phcode.dev), no install needed |
| Chromebook / Tablet Support | No | Yes |
| Extension Marketplace | No longer maintained | Active and growing |
| Active Development | Last release in 2021 | Regular releases, active team |
| Open Source | Yes | Yes (AGPL-3.0) |
| Built-in Image Library | No | Yes — stock photos you can drag into projects |
| Price | Free | Free (Pro tier from $9/mo for advanced features) |

The free version of Phoenix Code covers everything Brackets did, plus Git, the browser edition, and visual editing tools. The Pro tier adds measurement tools, direct preview editing, and the stock image library.

---

## Why We Rebuilt Brackets

Brackets was built on CEF (Chromium Embedded Framework) — a technology choice that made sense in 2014 but became increasingly difficult to maintain. Security patches, OS compatibility, performance work — it all got harder every year. We hit a ceiling.

Rather than keep patching an aging foundation, we rebuilt from the ground up using modern web standards. The result is an editor that runs natively on desktop *and* directly in the browser at [phcode.dev](https://phcode.dev) — same codebase, same features, zero install.

The architecture changed. The team didn't. The design philosophy didn't.

---

## What Carried Over from Brackets

If you're wondering whether Phoenix Code will feel familiar — it will.

**Live Preview** is still the core of the experience. Edit HTML or CSS and watch the browser update in real time, no manual refresh. This is the feature that defined Brackets, and it's still front and center.

**The lightweight workflow** is intact. Open a folder, start editing. No massive install, no mandatory plugins, no project configuration files to set up first.

**Web-first focus.** HTML, CSS, JavaScript — that's the sweet spot. Phoenix Code is purpose-built for front-end work, not trying to be a general-purpose IDE.

**Keyboard shortcuts and UI layout** are familiar. If you had muscle memory in Brackets, most of it still applies.

---

## What's New in Phoenix Code

These are the features the Brackets community asked for — and we finally built them.

### Edit Directly in the Live Preview

Brackets' live preview was view-only. You could see changes reflected in real time, but you always had to make edits in the code. Phoenix Code lets you click on any element in the live preview and edit it right there — change text, swap images by dragging, rearrange elements visually. The source code updates automatically.

![Live Preview modes](../../docs/08-Features/images/livePreview/lp-mode.png)

### Visual CSS Editing

Inline color pickers, number dials you can scrub to adjust values, gradient editors — all built in. No more typing hex codes, saving, checking, adjusting, repeat. Select a color value and pick it visually. Grab a number and drag to adjust.

![Color picker](../../docs/images/editingColors/colorPicker.png)

### Built-in Git

No more hunting for a third-party Git extension and hoping it stays maintained. Phoenix Code ships with Git integration — commit, push, pull, diff, branch management, all in the editor.

![Git integration](../../docs/08-Features/images/git-images/git-commit.png)

### Runs in Your Browser

Open [phcode.dev](https://phcode.dev) and you have the full editor — no install, no admin privileges. Works on Chromebooks, tablets, shared computers, anywhere you have a browser. This is the same editor, not a stripped-down web version.

### Measurement and Inspection Tools

Inspect spacing between elements, measure distances, and check alignment directly in the live preview. If you work from design mockups, this replaces the constant back-and-forth between your editor and a separate design tool.

![Measurements](../../docs/07-Pro%20Features/images/measurements.png)

---

## How to Switch from Brackets

Short version: open your project folder in Phoenix Code. That's it.

**No migration needed.** Your project files work as-is. No config conversion, no import wizard. Just open the folder.

**Extensions.** Some Brackets extensions have Phoenix Code equivalents in the marketplace. The ecosystem is actively growing, and extensions are maintained alongside the editor — so they don't break silently after an update.

**Learning curve.** Minimal. The UI layout is familiar, the shortcuts are similar, and all the new features are additive — nothing you relied on was removed. You'll be productive in minutes.

---

## Try Phoenix Code

We built this for the Brackets community — because we *are* the Brackets community. If you've been waiting for Brackets to get the update it deserved, this is it.

- **[Open Phoenix Code in your browser](https://phcode.dev)** — no install, start immediately
- [Download the desktop app](https://phcode.dev/download)
- [Live Preview documentation](/docs/Features/Live%20Preview/live-preview)
- [Edit Mode (Pro)](/docs/Pro%20Features/live-preview-edit)
- [Read more about the Brackets legacy](/blog/Blog-Legacy)
