---
title: Git
---

**Phoenix Code** includes built-in Git support, allowing you to manage version control directly within the editor. Git can be accessed from the toolbar icon or the File menu in the menu bar.

![Git Overview](../images/git-images/git-overview.png "Git Overview")

> To use Git features inside Phoenix Code, ensure Git is installed on your computer. [Download Git](https://git-scm.com/downloads)

Note: *For projects without an existing Git repository, the Git icon won’t appear by default. To initialize or connect a Git repository, use the File menu to set up Git for your project.*

The Git Panel in **Phoenix Code** provides a simple interface for managing version control. It allows you to track changes, commit updates, interact with remote repositories and many more without leaving the editor.

![Git Panel](../images/git-images/git-panel.png "Git Panel")


## Initializing a Git repository

To initialize a Git repository in a project that doesn’t already have one, click on `File > Git > Init`. This will set up Git for your current project. After initialization, the Git icon will appear in the toolbar, indicating that version control is active.

![Git Init](../images/git-images/git-init.png "Git Init")


## Cloning a Git repository

If you want to clone an existing project, you can do so directly within the editor. To clone a repository, go to `File > Git > Clone`. A dialog will appear, prompting you to enter the URL of the repository you wish to clone.

![Git Clone](../images/git-images/git-clone-dialog.png "Git Clone")

### More Options

In the Clone Repository dialog, clicking on `More Options` expands additional settings for authentication.

![Git Clone More options](../images/git-images/git-clone-more-options.png "Git Clone more options")

**Credentials**: This section allows you to enter your *username* and *password* for repositories that require authentication. Typically, if your credentials are already stored in a credential manager (like SSH keys or a Git credential manager), you don't need to fill in these fields.

**Save Credentials to Remote URL**: If enabled, the provided credentials (username and password) will be stored in plain text within the remote URL.

*If cloning fails due to authentication issues (e.g., timeout errors), you might need to manually provide your credentials.*

