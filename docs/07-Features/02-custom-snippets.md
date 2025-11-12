---
title: Custom Snippets
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

**Custom Snippets** let you create your own reusable code hints. You can define short abbreviations that expand into full code snippets when selected from the suggestions that appear as you type.

You can also specify which file types each snippet should work with, so they appear only where they’re relevant.

Additionally, you can define the cursor position within a snippet. After expansion, **Phoenix Code** automatically places your cursor exactly where you want it, allowing you to start typing right away.

The snippets you define are available globally, so you don’t need to recreate them for every folder. This helps you write code faster and stay consistent across projects.

---

### Custom Snippets Panel
You can manage all your snippets from the **Custom Snippets** panel.
To access it, navigate to `File` → `Custom Snippets...`.

![Custom Snippets Menu Item](./images/CustomSnippets/custom-snippets-menu-item.png "File > Custom Snippets...")

The panel appears at the bottom of the editor.

![Custom Snippets Panel](./images/CustomSnippets/custom-snippets-empty-panel.png "Custom Snippets panel")
If you haven’t added any snippets yet, the panel will be empty.

---

### Add Snippet
To add a snippet, click on the `'+'` button that appears on the panel header.
> Alternatively, if your snippets panel is empty, **Phoenix Code** shows a large `Add Snippet` button in the panel itself.

![Add Snippet](./images/CustomSnippets/add-snippet.png "Add Snippet")

Clicking on it opens the **Add Snippet** panel.

![Add Snippet Panel](./images/CustomSnippets/add-snippet-panel.png "Add Snippet Panel")

#### Understanding the Add Snippet Panel
The **Add Snippet** panel contains four input fields, each with placeholder examples to guide you:

| Field | Description |
|-------|--------------|
| **Abbreviation** *required* | The shorthand text that triggers your snippet. For example, typing `clg` could expand into a longer code block. |
| **Description** *optional* | A short explanation of what the snippet expands to. This appears in the code hint. Example: *console log shortcut*. |
| **File Extension** *optional* | Specifies which file types the snippet should be active in. For example, `.js, .ts` will make the snippet available in JavaScript and TypeScript files. <br />⚠️ Use file **extensions**, not file or language names, and separate multiple entries with commas. <br /> When left blank, the snippet works for **all** file types. |
| **Template Text** *required* | The actual code or content your snippet expands into. For example, typing `clg` could expand to `console.log();`. |

#### Example Snippet
The image below shows a complete snippet configuration:

![Snippet Example](./images/CustomSnippets/custom-snippet-example.png "Snippet Example")
After entering the values, click `Save`.
> Your snippet will be added to the list and can be used immediately in **Phoenix Code**.

![Snippets Count](./images/CustomSnippets/custom-snippets-count.png "Snippets Count")
In the panel header, you can see the total number of snippets you’ve added. You can create as many snippets as you like.
