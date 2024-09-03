---
slug: release-3.9
title: HTML Workflows and stability Release (September-2024, V-3.9) is now Live 
authors: [arun, charly, kiran, devvaannsh, jozsefk9, acemi1, phoenixBot]
tags: [Live Preview, Live Code Hints, Windows, Linux, Mac, Release]
---

September release(3.9) of Phoenix Code is now available for download at
[phcode.io](https://phcode.io).

This month's core theme is `App robustness` and `stability` improvements.
We have also added several `HTML and Text Editing` workflow improvements.

## Now Available on ChromeOS

All new native ChromeOS app is now available on the Google Play Store.
The ChromeOS app is a highly requested feature and is specially made for education and student use.

[![google play icon (1)](https://github.com/user-attachments/assets/0a7f20ce-653c-43a8-ac3e-3875ea74df5b)](https://play.google.com/store/apps/details?id=prod.phcode.twa)

## Auto rename start and end of HTML/XML/SVG tags

Automatically rename paired HTML/XML/SVG tags as you type at the start or end of the tag. [Read more...](https://docs.phcode.dev/docs/editing-text/#auto-rename-tag)

![tag sync](https://github.com/user-attachments/assets/ad82db8c-df1c-4c83-a5db-145caab539ec)

## Auto Tab and Spacing detection

Phoenix Code can now automatically detect and apply the indentation style (tabs or spaces) based on the existing code in the file.
[Read more...](https://docs.phcode.dev/docs/editing-text/#auto-space-detection)

![image](https://github.com/user-attachments/assets/0adc47c5-a561-4002-bffb-d7bcde999b9d)

## UX Improvements

- `Reopen closed files` option added to `File` menu. Shortcut: `Ctrl-Shift-T`, or (`Cmd-Shift-T` on Mac).
- `Go to Next Problem` and `Go to Previous Problem` option added to [`Navigate` menu.](https://github.com/phcode-dev/phoenix/pull/1732)
- [Tab key press to insert code hints](https://github.com/orgs/phcode-dev/discussions/1809)
- `window.alert`, `window.confirm` and `window.prompt` APIs [will work in live preview](https://github.com/phcode-dev/phoenix/pull/1814)
- Clicking on live preview no longer automatically switches from your [current unrelated file to the main HTML file.](https://github.com/phcode-dev/phoenix/pull/1800)
- Live preview usability and navigation improvements - ([1](https://github.com/phcode-dev/phoenix/pull/1741), [2](https://github.com/phcode-dev/phoenix/pull/1760))
- Increase/Decrease font size will [change the Editor Font size Only](https://github.com/phcode-dev/phoenix/pull/1799).
- Fixed issue where code folding markers disappear when hovering over gutter in dark theme.
- `.cjs` and `.mjs` files support as javascript files.
- Support for `shtml` custom server live preview.

## Stability Improvements

- [Fixes node crashes after wakeup from sleep in Windows/Mac.](https://github.com/phcode-dev/phoenix/issues/1791) 
- [Kaspersky AV trojan horse false positive mitigation.](https://github.com/phcode-dev/phoenix/issues/1821)
- [Corrupt preferences auto reset.](https://github.com/phcode-dev/phoenix/pull/1818)
- [Boot time crash recovery.](https://github.com/phcode-dev/phoenix/pull/1812)
- Phoenix Code won't start in [some Fedora/other Linux distros.](https://github.com/phcode-dev/phoenix/pull/1740)

## Update on Release Schedule

In the past, we've released Phoenix Code updates on a monthly basis. However, last month we encountered an issue with our release that led to stability problems for our users.

To address this, we've taken a step back to reevaluate our release process and make improvements to ensure greater robustness and reliability going forward.

As a result, we've decided to slow down the desktop release schedule to once every two months. This will allow us to thoroughly test each update and deliver a more stable experience.

We apologize for any inconvenience caused by the previous release and appreciate your patience and understanding as we work to improve the quality of Phoenix Code.

We look forward to bringing you new features and improvements in a more controlled and reliable manner.

## A Request from the Phoenix Team:

-   **Share your feedback:** https://github.com/orgs/phcode-dev/discussions
-   **Spread the word** about Phoenix to friends and colleagues.
-   [**Consider supporting us** on GitHub Sponsors](https://github.com/sponsors/phcode-dev).
    Every contribution helps us to keep improving Phoenix Code.

With gratitude,

The Phoenix Team
