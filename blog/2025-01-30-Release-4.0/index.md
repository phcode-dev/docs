---
slug: release-4.0
title:  Git It Release (January-2025, V-4.0) is now Live
authors: [arun, charly, devvaannsh, phoenixBot]
tags: [Git, Color previews, Version Control, open in terminal, Stability Improvements, Windows, Linux, Mac, Release]
---

2025 January release(4.0) of Phoenix Code is now available for download at [phcode.io](https://phcode.io).

This is the largest release we had in a while, and we are happy to announce the next phase of Phoenix Code with
a major version bump to 4.0.

## The legacy of Brackets - Continued
A decade-long journey of pushing web development forward: The Brackets story continues with Phoenix Code.
[Read more about the story of Brackets and the journey to build Phoenix Code and the Brackets community.](https://docs.phcode.dev/blog/Blog-Legacy)

This release's core theme is `Git, Color previews, UX imporovements and stability`.

## Git for Desktop

Git is finally here.  Integrated Git source control with a clean, intuitive interface.
Stage changes, commit, and sync with a single click while keeping your focus on the code.
Now available in the Windows, Mac and Linux desktop apps of Phoenix code. [Read More...](https://docs.phcode.dev/docs/Features/git)

Our Git integration is built upon the incredible work of the developers behind [Brackets-Git](https://github.com/brackets-userland/brackets-git),
whose contributions made this possible. Thank you!

![Image](https://github.com/user-attachments/assets/aeacc7c0-3ee3-4a80-9b05-f2b48140bcdd)

![Image](https://github.com/user-attachments/assets/6e7b9faf-d57b-448b-a5bb-a111c67489b5)

## Color Previews

Preview the color(s) used in the file in the gutter area. Hovering over a color box highlights the corresponding color
text in the editor to quickly jump to editing that color. [Read More...](https://docs.phcode.dev/docs/editing-colors#color-preview)

![image](https://github.com/user-attachments/assets/bedecc32-761b-448e-aced-61828ad3fec6)

## Open in Terminal and File Explorer

New "Open In" feature lets you instantly open directories and files in the system Terminal or File Explorer across
Windows, macOS, and Linux desktop apps!

![Image](https://github.com/user-attachments/assets/710330ae-8b34-4a51-a1f9-4c02736ed9bd)

## Better Translations

We've moved to an LLM-assisted translation framework, delivering higher-quality translations for non-English locales.

## Notable changes and fixes

- We've removed some inconsistent and rarely used keyboard shortcuts to free up more key combinations for customization.
  [Easily configure your own keyboard shortcuts through the UI.](https://docs.phcode.dev/docs/Features/keyboard-shortcuts)
- Fixed `Option-[shift]-left` and `option-[shift]-right` keyboard shortcuts not working in mac to select/move words.
- Survey popups are now less intrusive, appearing as notifications without disrupting your workflow.
- Moved back `line:ch` status to left of statusbar. Go to line will accept `:ln:col` format along with `:ln,col`. ![Image](https://github.com/user-attachments/assets/7429ae42-cb56-444c-8546-6d565bedaaf9)
- [Remove specific files from Recent Files](https://github.com/phcode-dev/phoenix/pull/2035)
- Fixes [holding ctrl key in windows should not ui overlay mode.](https://github.com/phcode-dev/phoenix/pull/2015)
- [fix: `cmd-click` in mac app and safari didn't open context menu.](https://github.com/phcode-dev/phoenix/pull/1994)
- [Switching between Ctrl+F and Ctrl+Shift+F now correctly updates the search box with the latest selection.](https://github.com/phcode-dev/phoenix/pull/1999)
- [fix: clicking on prevent defaulted A tags in desktop live preview opens browser tab.](https://github.com/phcode-dev/phoenix/pull/1997)
 
## Performance & Stability Tweaks

-   [Faster boot times with extension compression and load changes](https://github.com/phcode-dev/phoenix/pull/2055)
    consistency and performance, especially on Safari and macOS.
-   [File recovery should only be shown on crash, and fix some file recovery issues.](https://github.com/phcode-dev/phoenix/pull/2082)

## All changes

Please see [this link](https://github.com/phcode-dev/phoenix/commits/main/?since=2024-11-27&until=2025-01-30) for a full list of changes
in GitHub.

## A Request from the Phoenix Team:

-   **Share your feedback:** https://github.com/orgs/phcode-dev/discussions
-   **Spread the word** about Phoenix to friends and colleagues.
-   [**Consider supporting us** on GitHub Sponsors](https://github.com/sponsors/phcode-dev). Every contribution helps us
    to keep improving Phoenix Code.

With gratitude,

The Phoenix Team
