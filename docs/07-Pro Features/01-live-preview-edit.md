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
