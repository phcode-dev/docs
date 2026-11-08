---
slug: how-to-convert-png-to-pdf-free-online
title: "How to Convert PNG to PDF for Free Online"
description: "Combine PNG images into one PDF in your browser. Arrange pages, choose paper settings and download without uploading your images or creating an account."
date: 2026-11-08T06:00:00+05:30
authors: [charly]
tags: [Tools, PDF]
---

import '@site/src/css/png-pdf-guides.css';

<span className="png-pdf-guide-marker" hidden />

You can turn a PNG screenshot, scanned page or diagram into a PDF without installing software. The [Phoenix Code PNG to PDF converter](https://phcode.dev/tools/png-to-pdf.html) combines still PNG images into one file, with one image per page. Conversion runs locally in your browser, and the downloaded PDF has no watermark. No account or subscription is required.

This guide walks through choosing images, arranging pages and saving the result. For color, resolution and printing details, see [what PNG-to-PDF conversion preserves](./../2026-11-08-png-to-pdf-quality/index.md).

<!-- truncate -->

## 1. Choose your PNG images

Open the [PNG to PDF converter](https://phcode.dev/tools/png-to-pdf.html), select **Choose PNG files**, and pick one or more still PNG images from your device. On a computer, you can also drop PNG files into the converter or paste PNG images from the clipboard.

On a phone, use the file picker to choose your images. If your phone saved a photo in another format, first obtain a PNG version: this converter does not accept every image format, and renaming a file's extension does not convert it.

The tool checks each image before it can be included. If a file has an error, read its message and remove or replace it. Every remaining image must be ready before **Create PDF** becomes available.

Damaged or unsupported color information, including unsupported HDR data, produces a specific error. Export a copy as a standard sRGB PNG and try again, keeping your original file.

## 2. Put the pages in order

Each image becomes one PDF page. The order of the cards is the order of the pages in the finished file.

- With a mouse, drag from the image preview, filename or empty space on a card.
- On a touch screen, press and hold a card briefly, then drag it. A normal swipe still scrolls the page.
- Use **Move up** and **Move down** when you prefer buttons.
- With a keyboard, focus a card and press Enter or Space. Choose its position with the arrow keys, Home or End, then press Enter or Space again. Escape cancels the move.

The card's action buttons retain their own actions. You can remove an unwanted image without restarting the whole batch.

## 3. Choose paper and background settings

The settings affect every page, with automatic orientation determined separately for each image when a paper size is selected.

| Setting | What to choose |
| --- | --- |
| Page size | **Fit to image** for a page based on each image's dimensions and stored print resolution; **A4** or **US Letter** for standard paper. |
| Orientation | With A4 or US Letter, choose **Automatic**, **Portrait** or **Landscape**. Fit to image determines the page shape from the image. |
| Margins | Choose none, 5 mm, 10 mm or 20 mm. Images fit inside the available area without cropping or stretching. |
| Transparent areas | Choose **White** to give transparent image areas a white background, or **Transparent** to retain transparency. |

Fit to image uses the PNG's stored print resolution and adds the selected margins. If no resolution is stored, it uses 96 pixels per inch. For example, a 2400-pixel-wide PNG stored at 300 pixels per inch occupies 8 inches before margins. A4 and US Letter fit the image to the chosen paper, changing its printed size while keeping the original pixel dimensions.

Stored image orientation and pixel aspect ratios are respected. If the stored resolution would make an image-sized PDF page too large or too small, choose A4 or US Letter and create the PDF again.

## 4. Check the layout, create the PDF and save it

The page previews show orientation, margins and image placement. They use smaller preview images, so use them to check the layout rather than fine detail or final color.

Select **Create PDF** and keep the browser tab open while it works. When the PDF is ready, select **Download PDF** to save it to your device. Open that downloaded file to check page order, readability and appearance before printing or sharing it.

Changing the page order or settings after creation requires creating the PDF again. Your original PNG files stay on your device.

## How many images can you combine?

All of these limits apply together:

| Limit | Maximum |
| --- | --- |
| Images | 100 still PNG files |
| Individual file | 50 MB |
| Total input files | 200 MB |
| Pixels in one image | 24 megapixels |
| Pixels across the batch | 48 megapixels |
| Either image dimension | 16,384 pixels |
| Finished PDF | 128 MB |

A batch of large scans may reach the pixel or output limit before it reaches 100 images. Available device memory can also limit a conversion. If a batch fails, try fewer or smaller images and keep the tab open.

## What happens to your files?

The tool uses browser memory to process the images and generate the PDF. It does not upload your images or PDF to a conversion server or save them in persistent browser storage. The page still loads website code and other assets.

Your original PNG files and downloaded PDF remain on your device. Closing the tab does not delete them. If you are sharing a sensitive document, check the contents of the downloaded PDF and the destination before sending it.

## Can the PDF text be searched or copied?

This tool creates image-based PDF pages. Text in a screenshot remains part of the image; the converter does not perform optical character recognition (OCR). Use an OCR tool if you need a searchable or selectable text layer.

When your images are ready, [open the PNG to PDF converter](https://phcode.dev/tools/png-to-pdf.html) and create your file. If you plan to print it, first read [how pixel dimensions, color and paper size affect the result](./../2026-11-08-png-to-pdf-quality/index.md).
