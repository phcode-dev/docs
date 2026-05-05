---
title: Resize Ruler
---

:::info Pro Feature
[Upgrade to Phoenix Code Pro](https://phcode.io/pricing) to access this feature.
:::

The **Resize Ruler** is a ruler that appears on the Live Preview toolbar when you resize the Live Preview panel. It helps you see exactly how wide your preview is and where your page's CSS breakpoints fall.

<!-- Add an image here showing the Resize Ruler on the Live Preview toolbar with tick marks, colored segments, and the width info badge -->

## How It Works

Drag the edge of the Live Preview panel to resize it. A ruler appears on the toolbar showing:

- **Tick marks** with pixel numbers every 100px
- **Colored segments** that show the CSS breakpoint ranges from your page's stylesheets (see [CSS Breakpoint Detection](#css-breakpoint-detection))
- **A blue line** at the right edge marking the current width
- **Width and device info** in the top-right corner, showing the width in pixels along with the closest matching device name (for example, "iPad Mini - 768px")

The ruler disappears on its own once you stop resizing.

> The Resize Ruler also appears briefly when you select a device from the Device Size Presets dropdown in the [Live Preview Toolbar](../Features/Live%20Preview#live-preview-toolbar).

## CSS Breakpoint Detection

Phoenix Code reads your page's stylesheets and picks up any CSS media query breakpoints (like `min-width` and `max-width` rules). These breakpoints show up in two places:

- **On the Resize Ruler**: as colored segments between breakpoints, each labeled with its pixel value.
- **In the Device Size dropdown**: as extra entries at the bottom of the list, shown as `@media Xpx`. Clicking one resizes the Live Preview panel to that width.

> Breakpoints update automatically as you edit your CSS.

<!-- Add an image here showing CSS breakpoint entries in the Device Size dropdown, with the @media labels and the crown icon for free users -->

> CSS breakpoint detection and the breakpoint entries in the Device Size dropdown are available only for Pro users. Free users can still use the predefined device presets.

