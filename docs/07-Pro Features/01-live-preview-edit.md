---
title: Live Preview Edit Mode
---

import React from 'react';
import VideoPlayer from '@site/src/components/Video/player';

:::info Pro Feature
[Upgrade to Phoenix Code Pro](https://phcode.io/pricing) to access this feature.
:::

**Edit Mode** turns the Live Preview interface into a full-fledged editing environment. It lets you modify elements directly in the preview.
You can edit text, drag and drop elements, change images and links, inspect elements with precise measurements, and a lot more, right in the Live Preview.   
**Phoenix Code** automatically updates the source code.

**Edit Mode** also has all the capabilities of **Highlight Mode**, such as moving your cursor in the editor when an element is clicked, and highlighting the corresponding element in Live Preview. It also works in reverse: moving your cursor in the editor highlights the corresponding element in Live Preview.

---

## Enabling Edit Mode

To switch to Edit Mode, click the **mode selector dropdown** in the Live Preview toolbar and select **Edit Mode**.

<!-- TODO: add image showing the mode selector dropdown with Edit Mode selected -->

Alternatively, you can switch to Edit Mode by updating the `livePreviewMode` setting in the preferences file. See [Editing Preferences](../editing-text#editing-preferences) to learn how to edit the preferences file.

---

## Info Box

The **Info Box** displays information about an element.
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

The **Tool Box** displays a set of tools you can use to modify elements in the Live Preview.
> The Tool Box appears only when you click an element or select it through the source code.

<!-- TODO: add image showing Tool Box -->

### Tool Box Options

The Tool Box displays different options depending on the selected element type. Some buttons are available for all elements, while others are specific to certain element types.

- **Select Parent** *(up-arrow icon)*: Selects the parent of the currently selected element.  
  *This button appears only when a valid parent exists (it is not shown when the parent is `body`, `html`, or a JavaScript-rendered element).*

- **Edit Text** *(pencil icon)*: Opens inline text editing for the selected element. You can edit text directly in the Live Preview, and Phoenix Code automatically updates the source code.  
  See the [Inline Text Editing](#inline-text-editing) section for more details.  
  *This button appears only for elements that can contain text (it is not available for `<img>`, `<video>`, `<br>`, etc.).*

- **Edit Hyperlink** *(link icon)*: Opens a floating input box that lets you edit the element's `href` attribute.  
  *This button appears only for `<a>` elements.*

- **Image Gallery** *(image icon)*: Opens an image gallery at the bottom of the Live Preview, where you can browse and select an image. You can also choose an image from your computer. Phoenix Code automatically saves the image to your project folder and updates the src attribute of the element.  
  See [Image Gallery](./02-image-gallery.md) for more details.  
  *This button appears only for `<img>` elements.*

- **Duplicate** *(copy icon)*: Copies the selected element and places it below. You can also duplicate elements using `Ctrl/Cmd + D` after clicking an element.  
  *This option is available for all elements.*

- **Delete** *(trash icon)*: Deletes the selected element. You can also delete elements using the `Delete` key after clicking an element.  
  *This option is available for all elements.*

- **More Options** *(three-dots icon)*: Opens a menu with additional actions.  
  See [Cut, Copy, and Paste](#cut-copy-and-paste) and [Measurements](./03-measurements.md) for more details.  
  *This option is available for all elements.*

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

## Inline Text Editing

The **Inline Text Editing** feature lets you modify text content directly in the Live Preview, with all changes automatically synced to the source code.

To start editing, **double-click** an element in the Live Preview or click the **Edit Text** button *(pen icon)* in the Tool Box.  
Edit the text as needed, then press `Enter` to save or `Esc` to cancel.  
To insert a line break, press `Shift + Enter`.

> Text editing is available only for elements that can contain text. It is not supported for elements such as `<img>`, `<video>`, `<br>`, and similar non-text elements.  

### Text Formatting

You can apply formatting to selected text using standard keyboard shortcuts:
- **Ctrl/Cmd + B**: Bold; wraps selected text in `<b>` tags
- **Ctrl/Cmd + I**: Italic; wraps selected text in `<i>` tags
- **Ctrl/Cmd + U**: Underline; wraps selected text in `<u>` tags
> If the text is already formatted, the formatting will be removed.

<!-- TODO: add video showing the edit text workflow -->

---

## Image Gallery

The **Image Gallery** lets you browse and select images from online image providers or your device and use them in your project directly.

[Read More](./image-gallery)

---

## Drag and Drop

The **Drag and Drop** feature lets you reposition elements in the Live Preview by dragging them to a new location. The source code is automatically updated with the new structure when you drop the element.

To drag an element: click and hold the element, then move your mouse to the desired location. The element becomes semi-transparent while dragging. As you hover over potential drop targets, Phoenix Code displays visual indicators showing where the element will be placed.

#### Visual Indicators
- **Arrow markers** to indicate the drop position:
    - **Up (↑) or Down (↓) arrows**: Places the element before or after the target element
    - **Left (←) or Right (→) arrows**: Places the element before or after the target element (appears for flex row layouts)
    - **⊕ symbol with a dashed border**: Places the element inside the target as a child

- **Target label**: A small box next to the marker displays the target element's tag name, ID, and classes

> When multiple drop targets overlap *(for example, an `img` inside a `div` with aligned edges)*, you can scroll slightly to cycle through targets and drop the element when the correct label appears.

Phoenix Code validates drops to prevent invalid HTML structure. *For example, list items can only be placed inside list containers, and block elements cannot be placed inside inline elements*. If a drop location is invalid, Phoenix Code shows the marker for the closest valid drop target. In some cases, when no valid drop target is found, Phoenix Code won't show any indicators.

To cancel a drag, press `Esc`.

> When you drag an element near the top or bottom edge of the viewport, the Live Preview automatically scrolls in that direction.

<!-- TODO: add video showing drag and drop workflow with visual feedback -->

---

## Measurements

The **Measurements** feature displays ruler lines from the edges of a selected element to the document edges, showing exact pixel positions.

[Read More](./measurements)

---

## Cut, Copy, and Paste

You can cut, copy, and paste elements in Edit Mode using standard keyboard shortcuts or the Tool Box **More Options** menu *(three-dots icon)*.

### Using Keyboard Shortcuts

When you click an element in the Live Preview, keyboard focus moves to the Live Preview. You can then use:
- **Ctrl/Cmd + X**: Cut the selected element
- **Ctrl/Cmd + C**: Copy the selected element
- **Ctrl/Cmd + V**: Paste the copied or cut element below the currently selected element

### Using the More Options Menu
<!-- TODO: add image showing the More Options menu -->

Click the **More Options** button *(three-dots icon)* in the Tool Box and select **Cut**, **Copy**, or **Paste** from the dropdown menu.

> Keyboard shortcuts apply to elements only when focus is in the Live Preview. When editing source code, the shortcuts affect the code instead.

---

## Undo and Redo

You can undo and redo changes made in Edit Mode using keyboard shortcuts:

- **Ctrl/Cmd + Z**: Undo the last change
- **Ctrl/Cmd + Y** or **Ctrl/Cmd + Shift + Z**: Redo the last undone change

These shortcuts work for all Edit Mode operations, including text edits, element moves, deletions, and other modifications.

---

## Quick Preview Toggle

A **Quick Preview Toggle** button is available at the top center of the Live Preview. It lets you quickly switch to Preview Mode and back to the previously selected mode (Highlight Mode or Edit Mode). This is especially useful when working with a popped-out Live Preview window. You can also use the `F8` keyboard shortcut to toggle Preview Mode.

<!-- TODO: add a video showing its workflow -->

The button is partially visible as a thin strip at the top edge of the Live Preview. Moving your cursor over this strip reveals the full button, which you can click to toggle Preview Mode.

---

