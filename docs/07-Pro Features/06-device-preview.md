---
title: Device Preview
---

:::info Pro Feature
[Upgrade to Phoenix Code Pro](https://phcode.io/pricing) to access this feature.
:::

**Device Preview** lets you check how your page looks at different screen widths without leaving Phoenix Code. Resize the Live Preview to common device sizes, snap to the CSS breakpoints from your stylesheets, or drag the panel edge to see a width ruler with tick marks and breakpoint bands.

<!-- Add an image here showing the Live Preview toolbar with the device-size button on the right and the width ruler visible during a resize -->

## Choosing a device size

The right end of the Live Preview toolbar has a device-size button.

- Click the **device icon** to cycle through phone, tablet, and desktop widths.
- Click the **chevron** beside it to open the full device list.

<!-- Add an image here showing the device-size dropdown with the list of devices and CSS breakpoint entries -->

The dropdown lists predefined devices grouped by category (iPhone SE, iPhone 14, Galaxy S24, iPad Mini, iPad Air, iPad Pro, HD Desktop, Laptop, Desktop, Full HD), plus a **Fit** option in design mode that fills the available space. A check mark shows next to the size that matches the current width.

> Free users see the device list, but selecting any size opens a Pro upgrade prompt. Device Preview is a Phoenix Pro feature.

## CSS breakpoints

Phoenix Code reads your page's stylesheets and picks up any `min-width` or `max-width` media-query breakpoints. These show up in two places:

- In the **device dropdown**, listed at the bottom as `@media 768px` (etc.). Clicking one snaps the Live Preview to that exact width.
- On the **width ruler**, as colored bands between breakpoints, each labelled with its pixel value.

Breakpoints update automatically as you edit your CSS.

<!-- Add an image here showing CSS breakpoint entries (@media labels) at the bottom of the device dropdown -->

## Width ruler

When you drag the edge of the Live Preview panel to resize it, a ruler appears across the toolbar showing:

- **Tick marks** every 10px, with numbers every 100px.
- **Colored bands** for each CSS breakpoint range (see [CSS breakpoints](#css-breakpoints) above).
- **A blue line** at the right edge marking the current width.

A small black label floats above the preview showing the current width and the closest matching device, like `iPad Mini — 768px`. The label also flashes briefly when you pick a size from the device dropdown.

The ruler disappears as soon as you stop resizing.

<!-- Add an image here showing the width ruler with tick marks, colored breakpoint bands, the blue right-edge marker, and the floating device label -->
