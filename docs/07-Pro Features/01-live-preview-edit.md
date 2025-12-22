---
title: Live Preview Edit Mode
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

**Edit Mode** turns the Live Preview interface into a full-fledged editing environment. It lets you modify elements directly in the preview.
You can edit text, drag and drop elements, change images and links, inspect elements with precise measurements, and a lot more, right in the Live Preview. **Phoenix Code** automatically updates the source code.

**Edit Mode** also has all the capabilities of **Highlight Mode**, such as moving your cursor in the editor when an element is clicked, and highlighting the corresponding element in Live Preview. It also works in reverse: moving your cursor in the editor highlights the corresponding element in Live Preview.

---

## Enabling Edit Mode

To switch to Edit Mode, click the **mode selector dropdown** in the Live Preview toolbar and select **Edit Mode**.

<!-- TODO: add image showing the mode selector dropdown with Edit Mode selected -->

Alternatively, you can switch to Edit Mode by updating the `livePreviewMode` setting in the preferences file. See [Editing Preferences](../editing-text#editing-preferences) to learn how to edit the preferences file.

---

## Info Box

The **Info Box** displays information about an element. It is normally shown at the top-left of the element, but if there is not enough space, Phoenix Code may display it on another side where sufficient space is available. Phoenix Code attempts to position the Info Box as close to the element as possible while keeping it visible.

> By default, the Info Box appears when you hover over an element in the Live Preview, but this behavior can be changed. See the [Edit Highlights on Hover](#edit-highlights-on-hover) section for more details.

<!-- TODO: add image showing Info Box -->

The Info Box displays:
- **Tag name and dimensions**: The element type (for example, `div`, `p`, `img`) and its size in pixels (width × height)
- **ID**: The element’s ID attribute (if present), shown with a `#` prefix
- **CSS classes**: The element’s classes, shown with a `.` prefix. If the element has more than three classes, only the first three are shown, followed by a “+N more” indicator
- **Link URL**: The element’s `href` attribute (if present). This is shown only for anchor (`<a>`) elements

#### Visual Indicators

The Info Box normally has a *blue* background for standard HTML elements (for example, `<div>`, `<p>`, `<img>`). For dynamically created (JavaScript-rendered) elements, it appears with a *gray* background, indicating that these elements cannot be edited.

<!-- TODO: add image showing the gray Info Box -->

---

## Tool Box

The **Tool Box** displays a set of tools you can use to modify elements in the Live Preview. It is normally shown at the top-right of the Live Preview, but Phoenix Code may adjust its position if there is not enough space, ensuring it remains visible.

> The Tool Box appears only when you click an element or select it through the source code.

<!-- TODO: add image showing Tool Box -->

### Tool Box Options

The Tool Box displays different options depending on the selected element type. Some buttons are available for all elements, while others are specific to certain element types.

- **Select Parent** *(up-arrow icon)*: Selects the parent of the currently selected element.  
  *This button appears only when a valid parent exists (it is not shown when the parent is `body`, `html`, or a JavaScript-rendered element).*

- **Edit Text** *(pencil icon)*: Opens inline text editing for the selected element. You can edit text directly in the Live Preview, and Phoenix Code automatically updates the source code. See the [Editing Text](#editing-text) section for more details.  
  *This button appears only for elements that can contain text (it is not available for `<img>`, `<video>`, `<br>`, etc.).*

- **Edit Hyperlink** *(link icon)*: Opens a floating input box that lets you edit the element’s `href` attribute.  
  *This button appears only for `<a>` elements.*

- **Image Gallery** *(image icon)*: Opens an image gallery at the bottom of the Live Preview, where you can browse and select an image. You can also choose an image from your computer. Phoenix Code automatically saves the image to your project folder and updates the src attribute of the element.   
  *This button appears only for `<img>` elements.* See the **Image Gallery** section for more details.

- **Duplicate** *(copy icon)*: Copies the selected element and places it below.  
  *This option is available for all elements.*

- **Delete** *(trash icon)*: Deletes the selected element.  
  *This option is available for all elements.*

- **More Options** *(three-dots icon)*: Opens a menu with additional actions such as `Cut`, `Copy`, `Paste`, and `Show Measurements`.  
  *This option is available for all elements.* See the **Tool Box More Options** section for more details.

> The Tool Box is never shown for non-editable elements that are dynamically created by JavaScript.

---

## Edit Highlights on Hover

By default, in Edit Mode, hovering over elements in the Live Preview highlights them and displays the Info Box. You can change this behavior to show highlights only when you click elements instead.

To toggle this setting, click the **mode selector dropdown** in the Live Preview toolbar and unselect **Edit Highlights on Hover**. By default, this option remains checked.

<!-- TODO: add image showing the Edit Highlights on Hover option in the mode dropdown -->

When **Edit Highlights on Hover** is checked (default):
- Hovering over elements shows highlights and the Info Box
- Clicking an element selects it and displays the Tool Box along with the Info Box

When **Edit Highlights on Hover** is unchecked:
- Hovering over elements has no effect
- Clicking an element shows highlights, the Info Box, and the Tool Box

Alternatively, you can change this setting by updating the `livePreviewElementHighlights` preference in the preferences file. Set it to `"hover"` (default) or `"click"`. See [Editing Preferences](../editing-text#editing-preferences) to learn how to edit the preferences file.

---

## Editing Text

The **Editing Text** feature lets you modify text content directly in the Live Preview, with all changes automatically synced to the source code.

To start editing, **double-click** an element in the Live Preview or click the **Edit Text** button *(pencil icon)* in the Tool Box.  
Edit the text as needed, then press `Enter` to save or `Esc` to cancel.  
To insert a line break, press `Shift + Enter`.

> Text editing is available only for elements that can contain text. It is not supported for elements such as `<img>`, `<video>`, `<br>`, and similar non-text elements.  

### Text Formatting

You can apply formatting to selected text using standard keyboard shortcuts:
- **Ctrl/Cmd + B** — Bold; wraps selected text in `<b>` tags
- **Ctrl/Cmd + I** — Italic; wraps selected text in `<i>` tags
- **Ctrl/Cmd + U** — Underline; wraps selected text in `<u>` tags
> If the text is already formatted, the formatting will be removed.

<!-- TODO: add video showing the edit text workflow -->

---
