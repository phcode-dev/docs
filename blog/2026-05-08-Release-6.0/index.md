---
slug: release-6.0
title: Phoenix AI Release (May 2026, V-6.0) is now Live
description: "Phoenix Code 6.0 introduces an AI assistant powered by Claude Code, a brand new Design Mode, a rich Markdown editor, an integrated terminal, and Phoenix Neo themes."
authors: [arun, charly, devvaannsh, electrofist, phoenixBot]
tags: [AI, Claude Code, Design Mode, Markdown Editor, Terminal, Live Preview Edit, Phoenix Pro, Phoenix Neo, Windows, Linux, Mac, Release]
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

The May 2026 release (6.0) of Phoenix Code is now available for download at [phcode.io](https://phcode.io).

This release focuses on making Phoenix Code a true all-in-one web development environment, bringing AI directly into the editor along with an upgraded [Live Preview Edit](#live-preview-edit-upgrades), a rich [Markdown editor](#rich-markdown-editor), a built-in [terminal](#built-in-terminal), [device previews](#view-your-page-at-any-device-size), and a lot more.

Phoenix also gets a fresh new look with the [Phoenix Neo](#phoenix-neo-themes) themes, and a new [Design Mode](#design-mode) that lets you edit content visually while keeping your code out of the way.

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

Edit Markdown like a document in Live Preview. Format text, edit tables, and add images and diagrams, with the code syncing automatically in real time.

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

Phoenix Code now has a built-in terminal, so you can run commands right away without switching windows. It supports your preferred shell and works across all supported platforms. [Read More...](https://docs.phcode.dev/app-links/terminal)

![Built-in Terminal](https://docs-images.phcode.dev/in-app/terminal.png)

## All Your Tools, One Place

We've changed how the Bottom Panel works to make it easier to access all your tools with a new tools drawer interface. Git, Terminal, Problems, and more are now all in one place. You can switch between them instantly or open multiple tools at once. [Read More...](https://docs.phcode.dev/app-links/git)

![Bottom Panel](https://docs-images.phcode.dev/in-app/bottom-panel.png)

## Phoenix Neo Themes

Meet `Phoenix Dark Neo` and `Phoenix Light Neo`, the redesigned default themes with a cleaner, modernized look.

Switch between them anytime from `View > Themes...`. [Read More...](https://docs.phcode.dev/app-links/themes)

![Themes](https://docs-images.phcode.dev/in-app/themes-settings.png)

## Notable changes and fixes

- Prevented an out-of-memory crash that could occur while indexing very large projects, with binary file detection and a 1 GB cache cap.
- Phoenix now recovers gracefully from a corrupted local database instead of crashing on startup.
- Fixed a reflected XSS issue on the browser-not-supported page.
- Education licenses can now be activated on the Linux and macOS desktop apps.
- Fixed `File > Quit` not closing multi-window sessions on the desktop app.
- Fixed a thin white line at the edges of Live Preview and the divider disappearing at very narrow widths.
- Fixed a modal wrapper that could remain on screen when dialogs overlapped.
- Fixed Find in Files button placement when input boxes were empty.

## Performance & Stability

- Sidebar layout is preserved across hide and show, making expansion near-instant.
- Fixed a race condition in Live Preview load that could cause stale iframe overwrites.
- Tightened Live Preview document handling and editor event leak thresholds.

## Platform Notes

- **macOS**: Avoided the Xcode git install dialog at startup, fixed a missing scrollbar in Live Preview on Tauri, and corrected new-window dimensions.
- **Windows**: Fixed window size jumps when opening a new window from `File > New Window`.

## All changes

Please see [this link](https://github.com/phcode-dev/phoenix/commits/main/?since=2026-01-18&until=2026-05-08) for a full list of changes in GitHub.

## A Request from the Phoenix Team:

- **Share your feedback:** https://github.com/orgs/phcode-dev/discussions
- **Spread the word** about Phoenix to friends and colleagues.

With gratitude,

The Phoenix Team