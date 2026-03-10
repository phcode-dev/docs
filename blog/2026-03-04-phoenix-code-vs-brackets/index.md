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

If you've used Brackets, Phoenix Code will feel immediately familiar.

Built by the same team behind Brackets, Phoenix Code keeps Live Preview and fast visual front-end development at its core — now rebuilt on a modern foundation.

Phoenix Code isn’t a tribute or a spiritual successor. It’s the natural continuation of the ideas that started with Brackets.

Here’s what’s changed — and how to switch.

---

## Brackets vs Phoenix Code: What's New

Here's the quick comparison. The left column is what you know. The right column is where we are now.

| Feature | Brackets | Phoenix Code |
|---------|----------|-------------|
| Live Preview | Basic (view only) | Full live preview (editing in preview with [Pro](/docs/Pro%20Features/live-preview-edit)) |
| Visual Editing | Limited | Color pickers, number dials, gradient editors, drag-and-drop |
| Git Integration | Required third-party extension | Built-in |
| Browser Version | No | Yes — [phcode.dev](https://phcode.dev), no install needed |
| Chromebook / Tablet Support | No | Yes |
| Extension Marketplace | No longer maintained | Active and growing |
| Active Development | In maintenance mode since 2021 | Regular releases, active team |
| Open Source | Yes | Yes (AGPL-3.0) |
| Built-in Image Library | No | Yes — stock photos you can drag into projects |
| Price | Free | Free ([Pro](https://phcode.dev/pricing) from $9/mo for Live Preview Edit) |

The free version of Phoenix Code covers everything Brackets did and more — Git, the browser edition, visual editing tools, all included. [Phoenix Pro](/docs/Pro%20Features/live-preview-edit) adds Live Preview Edit, and exists to help sustain full-time development by a small indie team.

---

## Why We Rebuilt Brackets

Brackets was built on CEF (Chromium Embedded Framework) — a technology choice that made sense in 2014 but became increasingly difficult to maintain. Security patches, OS compatibility, performance work — it all got harder every year. We hit a ceiling.

Rather than keep patching an aging foundation, we modernized the platform so it can run anywhere — in browsers, on desktop with Electron or Tauri, pretty much any modern system. One codebase that works everywhere, from [phcode.dev](https://phcode.dev) in your browser to a native desktop app.

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

### Edit Directly in the Live Preview (Pro)

Brackets' live preview was view-only. You could see changes reflected in real time, but you always had to make edits in the code. With [Phoenix Pro](/docs/Pro%20Features/live-preview-edit), you can click on any element in the live preview and edit it right there — change text, swap images by dragging, rearrange elements visually. The source code updates automatically.

![Live Preview modes](../../docs/08-Features/images/livePreview/lp-mode.png)

### Visual CSS Editing

Brackets had inline color pickers — Phoenix Code keeps those and adds number dials you can scrub to adjust CSS values like margins, padding, font sizes, and more. Hover over a number, drag to adjust, and see the result update in live preview instantly.

![Number dial](https://user-images.githubusercontent.com/5336369/208715497-781e8dfc-1939-4dac-82e8-c7e517be4d9c.gif)

### Built-in Git

Phoenix Code ships with native Git support based on the familiar Brackets Git extension, addressing many of its earlier limitations with a simpler UX and improved reliability. Commit, push, pull, diff, and branch management, all built in.

![Git integration](../../docs/08-Features/images/git-images/git-commit.png)

### Runs in Your Browser

Open [phcode.dev](https://phcode.dev) and start editing — no install or admin privileges needed. Works on Chromebooks, tablets, shared computers, anywhere you have a browser. The web app runs the same core as the desktop app, so for website editing and live preview it's just as capable. For Git, AI features, and the full experience, grab the [native app](https://phcode.dev/download).

### Measurement and Inspection Tools

Inspect spacing between elements, measure distances, and check alignment directly in the live preview. If you work from design mockups, this replaces the constant back-and-forth between your editor and a separate design tool.

![Measurements](../../docs/07-Pro%20Features/images/measurements.png)

---

## How to Switch from Brackets

Short version: open your project folder in Phoenix Code. That's it.

**No migration needed.** Your project files work as-is. No config conversion, no import wizard. Just open the folder.

**Extensions.** Most heavily used Brackets extensions — Emmet, Git, Beautify/Prettier, editor tabs — are now built in and actively supported. The extension marketplace is also growing for anything else you need.

**Learning curve.** Minimal. The UI layout is familiar, the shortcuts are similar, and all the new features are additive — nothing you relied on was removed. You'll be productive in minutes.

---

## Try Phoenix Code

Phoenix Code was built for the Brackets community by the team behind Brackets.
If you've been waiting for the update Brackets deserved, this is it.

- **[Open Phoenix Code in your browser](https://phcode.dev)** — no install, start immediately
- [Download the desktop app](https://phcode.dev/download)
- [Live Preview documentation](/docs/Features/Live%20Preview/live-preview)
- [Edit Mode (Pro)](/docs/Pro%20Features/live-preview-edit)
- [Read more about the Brackets legacy](/blog/Blog-Legacy)
