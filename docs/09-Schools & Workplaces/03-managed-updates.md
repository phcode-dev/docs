---
title: Managing App Updates
slug: "/managed-updates"
---

# Managing App Updates

🔄 Point the Phoenix Code desktop app at your own update server.

## Overview

By default, the Phoenix Code desktop app checks the official Phoenix Code update server for new versions. System administrators can point it at their own server with a config file. This lets you decide which build your devices install and when.

This applies to the desktop app only.

## Config File

Create the folder as an administrator, then place a file named `phoenix_override_config.json` in it:

- Windows: `C:\Program Files\Phoenix Code Control\phoenix_override_config.json`
- macOS: `/Library/Application Support/Phoenix Code Control/phoenix_override_config.json`
- Linux: `/etc/phoenix-code-control/phoenix_override_config.json`

Only administrators can write to these folders. That is what lets the app trust the file.

## Keys

| Key | Description |
|-----|-------------|
| `app_update_url` | URL of the update manifest the app checks for new versions. |
| `app_update_linux_installer_url` | Linux only. URL of the installer script that performs the update. Default: `https://updates.phcode.io/linux/installer.sh` |

Example:

```json
{
  "app_update_url": "https://updates.example.com/phoenix-code/update.json",
  "app_update_linux_installer_url": "https://updates.example.com/phoenix-code/installer.sh"
}
```

The manifest at `app_update_url` is a JSON file in the same format as the official Phoenix Code update manifest.

## How It Works

- The file is read once when the app starts. After editing it, restart Phoenix Code.
- If the file is missing or not valid JSON, the app uses the official update server.
- Keys you leave out keep their default values.
- The app offers an update when the version in the manifest is newer than the installed version.
- On Windows and macOS, the app downloads and runs the installer named in the manifest.
- On Linux, the manifest only tells the app that an update exists. The script at `app_update_linux_installer_url` does the install, so point it at your own script to control which build Linux devices get.

## Additional Resources

To disable or manage AI features on managed devices, see [AI Control For School And Work](./02-ai-control.md).

For any special requests or technical issues, please reach out through our discussions forum at https://github.com/orgs/phcode-dev/discussions/new/choose.
