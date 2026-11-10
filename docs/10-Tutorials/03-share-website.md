---
title: Share your website
slug: /tutorials/share-website
description: Send someone a link to your website or a ZIP of its files. Step-by-step instructions for Community and Phoenix Pro.
toc_max_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TutorialIcon from '@site/src/components/TutorialIcon';

Let someone else see the website you've made. You can send a link they open in a browser, or a ZIP they can keep and edit.

These steps are the same in Community (free) and Phoenix Pro. They work for websites made from HTML, CSS, JavaScript, and images.

## 1. Save and check your website

1. Open your project in Phoenix Code.
2. Choose **File > Save All**.
3. Open `index.html` and show Live Preview with the <TutorialIcon name="preview" label="lightning bolt" />.
4. Check that the home page and its pictures appear.

If you're using the practice website, you should see **Trail Notes** and the Home, About, and Contact links.

## 2. Choose what to send

Choose **Send a link** for a quick preview, **Send a ZIP** for editable files, or **Keep it online** for a permanent website address.

<Tabs queryString="share" defaultValue="link">
<TabItem value="link" label="Send a link">

### Publish a temporary preview

This makes your website public for **three days**. Keep only files you want to share in this project.

1. Select `index.html` in the file list.
2. Find the <TutorialIcon name="share" label="publish button" /> (three connected dots) in Phoenix Code's right-hand toolbar. Hover over it: the tooltip says **Click to publish and share this site**.
3. Click it to open **Publish and Share Website?**.
4. Check the destination shown in the dialog, then choose **Publish**.
5. Wait for the published page to open in your browser.
6. Copy the address from that browser window and send it to the person who should view your site.

**They should be able to open your website without opening Phoenix Code.** Send this new address, rather than the address of your editor or a local preview.

To show a later change, save it in Phoenix Code. While the publishing session is active, the editor syncs the changes. Reload the published page to check them. If you have restarted the editor, follow the publishing steps again.

</TabItem>
<TabItem value="zip" label="Send a ZIP">

### Package your website files

A ZIP puts the whole website into one file. Send all the pages and pictures together so the website still works after extraction.

**If you opened a folder from your computer:**

1. Open that project folder's location in your computer's file manager.
2. Right-click the folder. On Windows, choose **Compress to ZIP file**. On macOS, choose **Compress**.
3. Send the resulting `.zip` file.

For the practice website, compress the `first-website` folder. The archive should include `index.html`, the other pages, `styles.css`, and `images`.

**If your project is stored inside the browser:**

1. In Phoenix Code, choose **File > Download Project**.
2. Save the `.zip` file when your browser asks.
3. Send that file.

If **Download Project** isn't in the menu, your project is already in a local folder. Use the file-manager steps above.

**Tell the recipient to extract the ZIP first.** They can open `index.html` to view the website, or open the extracted folder in Phoenix Code to edit it.

</TabItem>
<TabItem value="online" label="Keep it online">

### Publish with GitHub Pages

Use this when the website needs to stay online beyond a temporary preview. You'll need a GitHub account. This method makes the website and its source files public.

1. Create a new **public repository** on GitHub for your website.
2. Upload your website's files into it. Put `index.html` at the top level, next to your CSS file and image folder. Upload the extracted files, not the ZIP.
3. Open the repository's **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose the branch containing your files, usually `main`, and the **/(root)** folder.
7. Click **Save**.
8. Wait for deployment to finish, then open the website address shown in Pages settings.

**You should see your home page at its new public address.** Open About and Contact to check that those pages were uploaded too.

GitHub's [publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) show the current settings. You can also use [Git in Phoenix Code](/docs/Features/git) to push later changes.

</TabItem>
</Tabs>

## 3. Check what the other person receives

For a link, open it on another device. For a ZIP, extract it into a new folder and open its `index.html`.

Check these three things:

- The home page appears.
- Every picture loads.
- The page links open the right pages and let you get back to Home.

**Your website is ready to share.**

## Need help?

<details>
<summary>I already have Hostinger or another web host</summary>

Use your host's **File Manager** to upload the website files. On Hostinger web hosting, open the site's `public_html` folder and put `index.html` directly inside it, next to the other pages, CSS, and images.

If you upload a ZIP, extract it there. Check that it hasn't left `index.html` inside an extra `first-website` folder. Keep a backup before replacing an existing website.

See Hostinger's [File Manager instructions](https://www.hostinger.com/support/1869114-how-to-upload-backups-with-file-manager-in-hostinger/) for the upload steps. This method is for hosting that accepts your own files; a site managed by its AI Website Builder uses a different workflow.

If your host gives you FTP or SFTP details, you can use a transfer client to upload the same files. After editing in Phoenix Code, upload the changed files again.

</details>

<details>
<summary>The website opens, but its pictures or styles are missing</summary>

Check that you sent the image folders and CSS files as well as the HTML pages. Keep the same folder arrangement as in your project. Match capital letters in filenames exactly.

</details>

<details>
<summary>The other person can't open the link</summary>

Copy the address of the published page. An address containing `localhost` only points to the device opening it. A Phoenix Code editor address opens the editor.

The built-in shared preview lasts three days. If it has expired, publish again or choose **Keep it online** above.

</details>

<details>
<summary>Publishing says my project is too large</summary>

The built-in preview supports up to 500 files. Make a folder containing only the website files you want visitors to see. Leave dependency folders such as `node_modules` out of that copy, then open and publish it.

</details>

A PHP application or a Python web server needs hosting that can run that program. The static-site steps here are for HTML websites.
