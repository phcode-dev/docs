---
title: Git
---

**Phoenix Code** includes built-in Git support, allowing you to manage version control directly within the editor. Git can be accessed from the toolbar icon or the File menu in the menu bar.

![Git Overview](./images/git-images/git-overview.png "Git Overview")

> To use Git features inside Phoenix Code, ensure Git is installed on your computer. [Download Git](https://git-scm.com/downloads)

Note: *For projects without an existing Git repository, the Git icon won’t appear by default. To initialize or connect a Git repository, use the File menu to set up Git for your project.*

The Git Panel in **Phoenix Code** provides a simple interface for managing version control. It allows you to track changes, commit updates, interact with remote repositories and many more without leaving the editor.

![Git Panel](./images/git-images/git-panel.png "Git Panel")


## Initializing a Git repository

To initialize a Git repository in a project that doesn’t already have one, click on `File > Git > Init`. This will set up Git for your current project. After initialization, the Git icon will appear in the toolbar, indicating that version control is active.

![Git Init](./images/git-images/git-init.png "Git Init")


## Cloning a Git repository

If you want to clone an existing project, you can do so directly within the editor. To clone a repository, go to `File > Git > Clone`. A dialog will appear, prompting you to enter the URL of the repository you wish to clone.

![Git Clone](./images/git-images/git-clone-dialog.png "Git Clone")

### More Options

In the Clone Repository dialog, clicking on `More Options` expands additional settings for authentication.

![Git Clone More options](./images/git-images/git-clone-more-options.png "Git Clone more options")

**Credentials**: This section allows you to enter your *username* and *password* for repositories that require authentication. Typically, if your credentials are already stored in a credential manager (like SSH keys or a Git credential manager), you don't need to fill in these fields.

**Save Credentials to Remote URL**: If enabled, the provided credentials (username and password) will be stored in plain text within the remote URL.

*If cloning fails due to authentication issues (e.g., timeout errors), you might need to manually provide your credentials.*


## File status

All files with changes are displayed in the Git panel along with their status, such as *Modified*, *Untracked*, and *Deleted*. For modified files, a Git diff button is available.

![Git diff Icon](./images/git-images/git-diff-icon.png "Git diff icon")

*Git diff is used to display the changes made to a file — green lines indicate added content, while red lines show removed content.*
Clicking on the Git diff icon opens up the Git diff dialog page.

![Git diff Dialog](./images/git-images/git-diff-dialog.png "Git diff dialog")

### Discard changes

For *Modified* and *Deleted* file statuses, a `Discard Changes...` button is shown. Clicking it will reset the changes for *Modified* files and restore *Deleted* files.

For *Untracked* files, a `Delete File...` button is available. Clicking it will delete the file.

![Discard changes or Delete file](./images/git-images/discard-changes.png "Discard changes or Delete file")



## Commit

To stage/unstage the files, click the checkbox icon at the top-left of the Git panel. This will affect all the files in the working tree. 

![Stage all files](./images/git-images/stage-files.png "Stage all files")

You can also stage/unstage individual files by selecting or deselecting the checkbox next to each file.

Once you get all your required files to the staging area, click on the `Commit` button.

![Commit the files](./images/git-images/git-commit.png "Commit the files")
 
This will open up Git commit dialog box, which will display all the changes made to the files that are to be commited.
You can enter your commit message in the input box provided. 

![Git Commit dialog](./images/git-images/commit-dialog.png "Git commit dialog box")

> The commit input box also displays the number of characters in the commit message. 

*If your commit message is longer, you can use the `Extended` button at the top-right of the dialog. This expands the input area, making it easier to write detailed commit messages.*

The commit dialog box also provides options to :-
* **Amend Last Commit**: Selecting this option allows you to modify the most recent commit instead of creating a new one.
* **Skip Pre-Commit Checks**: Enabling this option bypasses any pre-commit hooks or validation steps.