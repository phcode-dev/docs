---
slug: release-6.0
title: Phoenix Design + AI Release (May 2026, V-5.1) is now Live
description: "Phoenix Code 5.1 introduces an AI assistant powered by Claude Code, a brand new Design Mode, a rich Markdown editor, an integrated terminal, and Phoenix Neo themes."
authors: [arun, charly, devvaannsh, electrofist, ansu, phoenixBot]
tags: [AI, Claude Code, Design Mode, Markdown Editor, Terminal, Live Preview Edit, Phoenix Pro, Phoenix Neo, Windows, Linux, Mac, Release]
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

The May 2026 release (5.1) of Phoenix Code is now available for download at [phcode.io](https://phcode.io).

This release focuses on making Phoenix Code a true all-in-one web development environment, bringing AI directly into the editor along with an upgraded [Live Preview Edit](#live-preview-edit-upgrades), a rich [Markdown editor](#rich-markdown-editor), a built-in [terminal](#built-in-terminal), [device previews](#view-your-page-at-any-device-size), and a lot more.

Phoenix Code also gets a fresh new look with the [Phoenix Neo](#phoenix-neo-themes) themes, and a new [Design Mode](#design-mode) that lets you edit content visually while keeping your code out of the way.

## Try ideas, build pages, and fix issues with AI

*Included with Phoenix Pro.*

Phoenix Code now includes an AI assistant powered by Claude Code. It can write code, fix bugs, design your page, and a lot more. You can also attach images, files, and folders to your prompt. Switch between different modes: Plan, Edit, and Full Auto, based on your needs. [Read More...](https://docs.phcode.dev/app-links/ai-chat)

<VideoPlayer
  src="https://docs-images.phcode.dev/website/videos/ai-pro-dialog.mp4"
/>

## Design Mode

Focus fully on your content while your code stays out of the way. Work side by side with AI and Live Preview. Edit content visually, whether you're building web pages or Markdown documents. [Read More...](https://docs.phcode.dev/app-links/design-mode)

![Design Mode](https://docs-images.phcode.dev/in-app/pro-designMode.png)

## Rich Markdown Editor

*Included with Phoenix Pro.*

Edit Markdown like a document in Live Preview. Format text, edit tables, and it’s easy to add images - just paste or pick one from your device, like in Google Docs or Word.

An easier way to create Markdown files that you can share with others. [Read More...](https://docs.phcode.dev/app-links/markdown-editor)

<VideoPlayer
  src="https://docs-images.phcode.dev/website/videos/markdown-pro-dialog.mp4"
/>

## Live Preview Edit Upgrades

*Included with Phoenix Pro.*

Live Preview Edit just got a major upgrade. You can format text with bold, italics, and more. Add new elements and update tags, classes, and attributes, all directly in Live Preview. [Read More...](https://docs.phcode.dev/app-links/live-preview-edit)

![Live Preview Edit](https://docs-images.phcode.dev/in-app/pro-controlBox.png)

## View your page at any device size

*Included with Phoenix Pro.*

Now you can quickly see how your page looks at different device sizes right inside Phoenix Code with a single click.

Phoenix Code also picks up your CSS `@media` breakpoints so you can jump straight to where your layout switches. [Read More...](https://docs.phcode.dev/app-links/resize-ruler)

<VideoPlayer
  src="https://docs-images.phcode.dev/website/videos/device-size-pro-dialog.mp4"
/>

## Built-in Terminal

Phoenix Code now has a built-in tabbed terminal, so you can run commands right next to your code without switching windows. It supports your preferred shell and works across all supported platforms. [Read More...](https://docs.phcode.dev/app-links/terminal)

![Built-in Terminal](https://docs-images.phcode.dev/in-app/terminal.png)

## All Your Tools, One Place

We've changed how the Bottom Panel works to make it easier to access all your tools with a new tools drawer interface. Git, Terminal, Problems, and more are now all in one place. You can switch between them instantly or open multiple tools at once. [Read More...](https://docs.phcode.dev/app-links/git)

![Bottom Panel](https://docs-images.phcode.dev/in-app/bottom-panel.png)

## Phoenix Neo Themes

Meet `Phoenix Dark Neo` and `Phoenix Light Neo`, the redesigned default themes with a cleaner, modernized look.

Switch between them anytime from `View > Themes...`. [Read More...](https://docs.phcode.dev/app-links/themes)

![Themes](https://docs-images.phcode.dev/in-app/themes-settings.png)

## Notable changes and fixes

- Prevented an out-of-memory crash that could occur while indexing very large projects — Phoenix now detects binary files and caps its index cache so big repos stay smooth. ([#2801](https://github.com/phcode-dev/phoenix/pull/2801))
- Phoenix now recovers gracefully from a corrupted local database instead of crashing on startup. ([#2782](https://github.com/phcode-dev/phoenix/pull/2782))
- Fixed a reflected XSS issue on the "browser not supported" page. ([#2851](https://github.com/phcode-dev/phoenix/pull/2851))
- Fixed `File > Quit` not closing multi-window sessions on the desktop app. ([#2639](https://github.com/phcode-dev/phoenix/pull/2639))
- Fixed a thin white line at the edges of Live Preview. ([#2855](https://github.com/phcode-dev/phoenix/pull/2855))
- Fixed a modal overlay that could remain on screen when dialogs opened in quick succession. ([#2789](https://github.com/phcode-dev/phoenix/pull/2789))
- Fixed Find in Files button placement when the input boxes were empty. ([#2680](https://github.com/phcode-dev/phoenix/pull/2680))
- Fixed an issue where some pro trial users were being signed out early. ([#2658](https://github.com/phcode-dev/phoenix/pull/2658))

## Performance & Stability

- Sidebar layout is now preserved across hide and show, making expansion feel near-instant. ([#2834](https://github.com/phcode-dev/phoenix/pull/2834))
- Fixed a race condition during Live Preview load that could cause a stale page to overwrite a fresh one. ([#2668](https://github.com/phcode-dev/phoenix/pull/2668))
- Tightened Live Preview document handling and reduced editor event leaks. ([#2671](https://github.com/phcode-dev/phoenix/pull/2671))
- Improved Live Preview edit performance for larger pages. ([#2793](https://github.com/phcode-dev/phoenix/pull/2793))
- Smoother scrollbar behavior in the sidebar. ([#2726](https://github.com/phcode-dev/phoenix/pull/2726), [#2727](https://github.com/phcode-dev/phoenix/pull/2727))

## Platform Notes

### Linux

- The desktop app is now built on a **Chromium-based renderer**, replacing the previous WebKit2GTK build (which was painfully slow). It ships as a **single AppImage** that runs across most major distributions, and now supports **auto-update**, bringing it to parity with macOS and Windows. ([#2635](https://github.com/phcode-dev/phoenix/pull/2635), [#2637](https://github.com/phcode-dev/phoenix/pull/2637), [#2651](https://github.com/phcode-dev/phoenix/pull/2651))

### macOS

- Avoided the Xcode "git install" dialog popping up at startup on Macs without git. ([#2662](https://github.com/phcode-dev/phoenix/pull/2662))
- Fixed new-window dimensions being slightly off due to inner/outer measurement mix-up. ([#2720](https://github.com/phcode-dev/phoenix/pull/2720))

### Windows

- Fixed window size jumping when opening a new window from `File > New Window`. ([#2723](https://github.com/phcode-dev/phoenix/pull/2723))

## All changes

Please see [this link](https://github.com/phcode-dev/phoenix/commits/main/?since=2026-01-18&until=2026-05-22) for a full list of changes in GitHub.

## A Request from the Phoenix Team:

- **Share your feedback:** https://github.com/orgs/phcode-dev/discussions
- **Spread the word** about Phoenix to friends and colleagues.

With gratitude,

The Phoenix Team
