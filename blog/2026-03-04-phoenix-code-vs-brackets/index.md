---
title: "Phoenix Code vs Brackets: What Changed and Why It Matters"
description: "Brackets hasn't been updated since 2021. Phoenix Code picked up where it left off — and went a lot further. Here's what's different and how to switch."
authors: [charly]
tags:
  - brackets
  - comparison
  - migration
  - code-editor
  - live-preview
  - open-source
---

Remember hitting Save and watching the browser just... update? No build step, no terminal incantation, no waiting. You'd nudge a `margin-left` by two pixels and *there it was*, already moved, already right. That was Brackets. And if you felt a little pang reading that sentence, this post is for you.

<!-- truncate -->

Nobody expected to be reading a eulogy for an editor in 2026. But here it is. Brackets is dead, and that lands with the same tone as hearing your favourite dive bar finally closed. Not shocked. Still sad.

The thing is, 85,000 people *still* open Brackets every month. Every month! Nobody's fixing bugs. Extensions are rotting. The community forums have that particular silence of a website that's technically online but spiritually gone. And yet people keep coming back. You don't do that for software you merely tolerate. You do that for software that understood you.

---

## What Happened to Brackets

Adobe released Brackets 1.0 back in 2014 — a web-native editor built on web standards, with live preview baked right in. Genuinely ahead of its time.

For a few years, things were good. Designers loved it. Front-end devs loved it. Adobe... well, Adobe had other things going on. The commits slowed. The roadmap went quiet. Then in January 2022, Adobe officially [handed Brackets over](https://x.com/brackets/status/1480581149604782080) to the open source community. Corporate-speak for "we're done here." No more updates followed. The last meaningful release was already a year old by then.

And that could've been the end. Probably should've been, statistically. Most orphaned projects just... fade.

Here's a stat that tells you everything: 52% of Phoenix Code's website traffic comes from brackets.io redirects. Half the people finding Phoenix Code went looking for Brackets first — typed the old URL out of muscle memory or clicked a dusty bookmark. That redirect traffic drops 43% every year, though. Eventually there won't be anyone left to redirect.

The writing's on the wall. Brackets had a good run.

---

## What Phoenix Code Inherited

Phoenix Code isn't some unrelated editor that slapped "Brackets successor" on its marketing page. It grew directly out of the Brackets community. Not "community" in the vague corporate sense — the actual people. The ones who'd been filing issues, writing extensions, hanging out in the IRC channel back when that was still a thing.

Same DNA, same instincts, different name. Same book, new chapter. What carried over:

**Live Preview DNA.** The thing that made Brackets special. Edit your HTML/CSS, see it update in real time. Phoenix Code kept this and cranked it way, way up — but more on that in a minute.

**The lightweight feel.** No 2GB install. No fifteen "recommended extensions" before you can actually write code. Open a folder, start working. That philosophy hasn't changed.

**Web-focused and opinionated.** HTML, CSS, JavaScript — that's the sweet spot. Phoenix Code doesn't try to be an IDE for everything. It knows what it's good at, and it stays there.

**The community itself.** The people who cared enough to keep Brackets alive are the same ones building Phoenix Code now. That continuity matters — it means the people who understood your workflow are still the ones making decisions.

---

## Feature Comparison

So what do you actually get if you switch? Here's the side-by-side:

| Feature | Brackets | Phoenix Code |
|---------|----------|-------------|
| Live Preview | Yes (basic) | Yes + edit directly in preview |
| Visual Editing | Limited | Full: color pickers, number dials, drag-and-drop |
| Git Integration | No (extension needed) | Built-in |
| Browser Version | No | Yes ([phcode.dev](https://phcode.dev)) |
| Chromebook Support | No | Yes |
| Extension Marketplace | Dying | Active + growing |
| Active Development | No (since 2021) | Yes (regular releases) |
| Open Source | Yes | Yes (AGPL-3.0) |
| Image Gallery | No | Built-in stock images |
| Price | Free | Free (Pro from $9/mo) |

The free tier of Phoenix Code already does more than Brackets ever did. That's not a knock on Brackets — it's just what happens when a project gets five years of active development poured into it.

---

## What Phoenix Code Added

Phoenix Code didn't just keep Brackets on life support. Years of GitHub issues, forum threads, and feature requests finally got answered — the things Brackets users had been wishing for are showing up now.

### Edit Directly in the Preview

Remember wishing you could just *click* on something in the live preview and change it right there? That live preview was magic, but you always had to work backwards — see the thing you want to change, go *find it in the code*, edit, then check. Every single time.

You can skip all that now. Click text in the preview, type your changes, and the source code updates automatically. Swap images by dragging new ones in. Rearrange elements visually. It's what live preview always wanted to be when it grew up.

![Live Preview modes](../../docs/08-Features/images/livePreview/lp-mode.png)

### Visual Editing Tools

You spent hours in Brackets typing hex codes, squinting at the result, nudging one character, squinting again. Like tuning a guitar by ear — except with bad pitch.

Color pickers that work inline. Number dials you can scrub to adjust values. Gradient editors. Not groundbreaking individually, but together they make CSS tweaking *way* faster than guessing hex codes and refreshing.

![Color picker](../../docs/images/editingColors/colorPicker.png)

### Built-in Git

The Brackets Git extension ecosystem was... fragile. You'd find one that mostly worked, pray it kept getting updated, and then one day it didn't. Classic.

Phoenix Code ships with Git integration out of the box — commit, push, pull, diff, all right there. No hunting, no compatibility roulette. It just works. That phrase gets overused. But it just works.

![Git integration](../../docs/08-Features/images/git-images/git-commit.png)

### Runs in Your Browser

Go to [phcode.dev](https://phcode.dev). That's the whole editor. In your browser. No install, no admin privileges, no "sorry, Chromebooks aren't supported." School computer? Fine. Tablet in a coffee shop? Sure. Your friend's laptop where you definitely shouldn't be installing software? Also fine.

Try doing that with Brackets.

### Stock Image Gallery

Niche one, sure. But if you've ever built a client website and done the alt-tab-to-Unsplash-search-something-download-rename-import shuffle fourteen times in an afternoon, you'll appreciate having a built-in library of stock photos you can drag straight into your project.

![Image gallery](../../docs/07-Pro%20Features/images/image-gallery.png)

### Measurement Tools

Spacing. Alignment. "Is that 16 pixels or 18?" You'd have Brackets on one screen and a design tool on the other, squinting back and forth. Now you can inspect spacing, measure distances between elements, and check alignment — all inside the preview. If you used Brackets for design work, this'll feel like home, minus the extra tool cluttering your taskbar.

![Measurements](../../docs/07-Pro%20Features/images/measurements.png)

---

## How to Switch

If you know Brackets, you basically already know Phoenix Code.

**Your workflow stays the same.** Open a folder, edit files, live preview — identical flow. The keyboard shortcuts are familiar. The UI layout will feel like Tuesday.

**Extensions.** Some Brackets extensions have Phoenix Code equivalents. Some work directly. The marketplace is smaller than what Brackets had at its peak, but it's actively growing — and more importantly, the extensions actually *work* because someone's maintaining them.

**Project files.** Just open your existing project folder in Phoenix Code. No migration wizard. No config file conversion. No ceremony. It just works.

**The learning curve?** Almost flat. You'll spend maybe ten minutes going "oh, that's where they put that" and then you're productive again. The new features — visual editing, Git, the browser version — are all additive. Nothing you relied on was taken away. Your muscle memory still counts.

The hardest part of switching is the emotional one. Brackets was *your* editor. You had your setup, your extensions, your rhythm. That's real. Nothing will be exactly the same — but the things that made Brackets feel like yours are still there in the DNA.

---

## Come Home

Phoenix Code was built for Brackets people. By Brackets people. If you loved that editor, this was made for you. The community that kept Brackets alive is the same one that built something better when keeping it going wasn't enough anymore.

Your old bookmarks redirect here for a reason.

- [Try Phoenix Code](https://phcode.dev)
- [Live Preview Documentation](/docs/Features/Live%20Preview/live-preview)
- [Edit Mode (Pro)](/docs/Pro%20Features/live-preview-edit)
- [The Legacy of Brackets — Continued](/blog/Blog-Legacy)
