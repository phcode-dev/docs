---
title: Extensions
slug: "/extensions"
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

Phoenix Pro and Community (free) use the same **Extension Manager** to add features, themes, and language support.

To open the Extension Manager, click the extension icon on the right-hand toolbar, as shown below.

![Extension Manager icon location on the right toolbar](../images/extensions/extension-manager-button.png "Click the Extension Manager icon on the right toolbar")

The dialog has four tabs:

| Tab | Contents |
| --- | --- |
| **Available** | Marketplace extensions. A search box at the top filters the list. |
| **Themes** | Marketplace themes. |
| **Installed** | Everything you've installed. Apply, update, or remove from here. |
| **Default** | Built-in extensions that ship with Phoenix Code. |

A **Sort** dropdown at the top of the dialog orders the list by **Last Updated** (most recently published first), **Downloads** (most-installed first), **Star Rating** (highest GitHub stars), or **Verified** (Phoenix-verified extensions first).

<VideoPlayer src="https://docs-images.phcode.dev/videos/extensions/extension-manager.mp4" />

- **Install**: pick an item from **Available** or **Themes** and click **Install**.
- **Update**: when a newer version is available, an **Update** button appears on the extension's card in **Installed**.
- **Remove**: click **Remove** on the card in **Installed**, then confirm with **Remove Extensions and Reload**.

## Why won't my extension install? {#extension-wont-install}

Open the **Extension Manager** on the right. Choose **Available** for features or **Themes** for color themes, then type the name in **Search**. Look at the message on the matching item. Click or tap the screenshots below to see them full size.

### I found the extension, but there’s no Install button

Check the note beside its name. For example, the **Code Folding** listing says it works only with older versions of Phoenix Code. Choose another compatible item with an **Install** button. Some features already come with the editor, including [Beautify Code](/docs/Features/beautify-code).

[![The Code Folding listing in Available says it only works with older versions of Phoenix Code. There is no Install button on its row.](/tutorials/media/extension-older-version.png)](pathname:///tutorials/media/extension-older-version.png)

### I clicked Install and saw “Installation failed.”

1. Read the second line of the message and click **Close**. An interrupted download can show **Unknown internal error**. If your connection dropped, reconnect and click **Install** on the same item again.

   [![The Install Extension dialog shows Installation failed, the detail Unknown internal error, and a Close button.](/tutorials/media/extension-download-failed.png)](pathname:///tutorials/media/extension-download-failed.png)

2. When you see **Installation successful!**, click **Close**. Choose **Installed** and search for the same name. Here the **Earth** theme has an **Apply** button. Click it if you want to switch to that theme, then click **Done**.

   [![Under Installed, searching for Earth shows the theme with Apply and Remove buttons.](/tutorials/media/extension-installed-theme.png)](pathname:///tutorials/media/extension-installed-theme.png)

If the next attempt also fails, choose **Help → Phoenix Code Support**. Include the extension name, the exact message, your operating system, and your Phoenix Code version.

## Themes

Themes use the same flow under the **Themes** tab.

![Themes tab in the Extension Manager](../images/extensions/themes-tab.png "Themes tab in the Extension Manager")

To switch to an installed theme, either pick it from `View > Themes...` (see [Customizing the Editor → Themes](./customizing-editor#themes)) or click **Apply** next to the theme in **Installed**.

## Create your own

For authoring extensions and themes, see the API section:

- [Creating Themes](/api/creating-themes)
- [Creating Extensions](/api/creating-extensions)
- [Creating Node Extensions](/api/creating-node-extensions)
- [Debugging Extensions](/api/debugging-extensions)
- [Publishing Extensions](/api/publishing-extensions)

## Popular Extensions

For a curated list of community extensions worth checking out, see [Popular Extensions](./popular-extensions).
