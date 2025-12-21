---
title: Emmet
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

**Emmet** helps you quickly expand shorthand abbreviations into full code blocks. When you type an Emmet-compatible abbreviation, **Phoenix Code Editor** displays a code hint with the abbreviation text and a small `Emmet` icon on the right, indicating that the hint comes from Emmet. Selecting the hint expands it into a complete code snippet.

**Phoenix Code Editor** includes smart cursor positioning. After expanding an Emmet abbreviation, it automatically places the cursor at the most relevant position so you can start typing immediately. It also adjusts the indentation of the expanded code automatically.
> See the [complete Emmet abbreviations cheat sheet](https://docs.emmet.io/cheat-sheet/).

### Emmet in Markup Languages
**Emmet** works in **HTML**, **PHP** or HTML-like files such as **JSP**.
**Examples:**
* `ul>li*2` expands to:
    ```html
    <ul>
        <li></li>
        <li></li>
    </ul>
    ```

* `!` expands to:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>

    </body>
    </html>
    ```


> Refer to [this link](https://docs.emmet.io/abbreviations/) to read more about Emmet abbreviations for markup languages.

**Visual Reference**
<VideoPlayer
  src="https://docs-images.phcode.dev/videos/editing-text/emmet-html.mp4"
/>

### Emmet in Stylesheet Languages
**Emmet** also works in stylesheets (**CSS**, **SCSS**, **Less**). In stylesheets, the Emmet icon acts as a clickable link that opens the corresponding MDN documentation for that property (if available).
![Emmet MDN link](./images/Emmet/emmet-link-mdn.png "Emmet MDN link")

**Examples:**
* `bgc` expands to:
    ```css
    background-color:
    ```

* `mt10` expands to:
    ```css
    margin-top: 10px;
    ```


> Refer to [this link](https://docs.emmet.io/css-abbreviations/) to read more about Emmet abbreviations for stylesheets.

**Visual Reference**
<VideoPlayer
  src="https://docs-images.phcode.dev/videos/editing-text/emmet-css.mp4"
/>

### Enabling/Disabling Emmet
To enable or disable the **Emmet** feature, go to `Edit` > `Emmet`.

![Toggle Emmet feature](./images/Emmet/toggle-emmet.png "Toggle Emmet")

You can also toggle Emmet by updating the `emmet` property in the preferences file.
See [Editing Preferences](../03-editing-text.md#editing-preferences) for more details.

## FAQ

#### Q. What happens if I try to expand a very large abbreviation?

**Phoenix Code Editor** supports large Emmet expansions but applies limits to keep the app stable.

- **Maximum word expansion:** 100,000 words
  Example: `lorem*100000000` expands only to **100,000** words.

- **Maximum repeat count:** 400
  Example: `ul>li*10000` creates **400** list items at most.
