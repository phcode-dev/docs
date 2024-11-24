---
slug: release-3.10
title:  Editor Experience Release (November-2024, V-3.10) is now Live
authors: [arun, charly, devvaannsh, phoenixBot]
tags: [Editor Experience, UI Improvements, Windows, Linux, Mac, Release]
---

November release(3.10) of Phoenix Code is now available for download at [phcode.io](https://phcode.io).

This month's core theme is `Editor UI improvements`. We have fine-tuned the editing experience for better 
performance and visual feedback.
We've also made substantial improvements to [docs.phcode.dev](https://docs.phcode.dev) to better support extension
developers.

## Indent Guide Lines

Phoenix Code now supports indent guidelines to help you better visualize code structure. This feature can
be toggled via `View > Indent Guide Lines`. [Read more...](https://docs.phcode.dev/docs/editing-text#indent-guide-lines)

![image](https://github.com/user-attachments/assets/3d9d0c55-3c9e-4ab3-bbc0-53b563d19e39)

## Customizable Editor Line Height

Theme Settings (`View > Themes...`) now has a new `Line Height` slider. Adjust the editor line height between 1x and 3x to find your
perfect balance of readability and screen real estate.

Also added a `Get More...` button to the Themes dialog, linking directly to the themes section in Extension Manager.

![image](https://github.com/user-attachments/assets/97a46d9a-e971-401d-8a77-015afa6d5972)

## `Line:Col` Indicator Relocation

Moved to the right of the status bar, accommodating future status bar extensions. Click on the `line:col` section in the
statusbar to jump to specific lines.

![image](https://github.com/user-attachments/assets/540ea992-dda0-4a2c-8042-3c6228616636)

## Performance Tweaks

-   [Major improvements to editor rendering](https://github.com/phcode-dev/phoenix/pull/1943) with better editor scroll
    consistency and performance, especially on Safari and macOS.
-   [Faster startup of extension manager.](https://github.com/phcode-dev/phoenix/pull/1937)

## Stability Improvements

-   [File recovery now does integrity checks for more reliable crash recovery.](https://github.com/phcode-dev/phoenix/pull/1889)
-   [Fixed Markdown image link handling within href tags.](https://github.com/phcode-dev/phoenix/pull/1838)
-   [Improved extension registry management to prevent quota issues on Mac/Linux.](https://github.com/phcode-dev/phoenix/pull/1932)

## Documentation Updates
Our documentation site - [docs.phcode.dev](https://docs.phcode.dev) has received a major overhaul:

Updated user guide: docs.phcode.dev/docs/intro
New API documentation for extension developers: docs.phcode.dev/api/getting-started

## All changes

Please see [this link](https://github.com/phcode-dev/phoenix/commits/main/?since=2024-09-11&until=2024-11-24) for a full list of changes
in GitHub.

## A Request from the Phoenix Team:

-   **Share your feedback:** https://github.com/orgs/phcode-dev/discussions
-   **Spread the word** about Phoenix to friends and colleagues.
-   [**Consider supporting us** on GitHub Sponsors](https://github.com/sponsors/phcode-dev). Every contribution helps us
    to keep improving Phoenix Code.

With gratitude,

The Phoenix Team
