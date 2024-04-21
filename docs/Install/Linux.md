---
title: Installing Phoenix Code on Linux
---

Welcome to the installation guide for **Phoenix Code on Linux**. This document provides instructions on how to install Phoenix Code across various Linux distributions. Our installer is compatible with **major Linux distributions**, including Ubuntu, Debian, Fedora, and Arch-based systems.

## Automatic Installation
To install Phoenix Code automatically, run the following command in your terminal from your desktop environment:
```
wget -qO- https://updates.phcode.io/linux/installer.sh | bash
```
This command will execute the installer script which automatically installs the application and any necessary dependencies, streamlining the setup process for your convenience.

## Manual Installation
If the automatic installation does not work for your distribution, or if you prefer to install Phoenix Code manually, please follow the steps below:
1. **Check your system's GLIBC version**:
   Before proceeding with the manual installation, you need to determine the version of GLIBC installed on your system. Run the following command in the terminal:
   ```
   ldd --version | grep "ldd" | awk '{print $NF}'
   ```
2. **Download the appropriate Phoenix Code package**:
   Visit the Phoenix Code releases page to select a suitable version for your system:
   ```
   https://github.com/phcode-dev/phoenix-desktop/releases
   ```
   Choose a Phoenix Code release that is compatible with your system's GLIBC version, specifically one that requires a GLIBC version equal to or lower than what is installed on your system but not higher.
3. **Unpack the downloaded package**:
   After downloading the appropriate version of Phoenix Code, extract the contents of the package:
   ```
   tar -xvf phoenix_code_version.tar.gz
   ```
   Replace `phoenix_code_version.tar.gz` with the actual filename of the downloaded package.
4. **Read the installation instructions**:
   Locate the `ReadMe.txt` file within the extracted folder and open it to read the detailed installation instructions:
   ```
   cat phoenix_code_directory/phoenix-code/readme.txt
   ```
   Replace `phoenix_code_directory` with the actual directory name where Phoenix Code was extracted.
5. **Follow the installation steps**:
   Follow the steps outlined in the `readme.txt` file to complete the manual installation of Phoenix Code on your Linux machine.
For any additional help or if you encounter issues during the manual installation, please visit our support page or contact our customer service team.

## Desktop Environment Compatibility
Our installer has been tested with common desktop environments such as **Gnome and KDE**. These environments are compatible with the Phoenix Code installer, which should function without issues.

## Dependencies
### Mandatory and Optional Dependencies
Phoenix Code requires certain dependencies to function properly. Below is a table outlining both mandatory and optional dependencies across different Linux distributions.

| Dependency               | Ubuntu / Debian              | Fedora                     | Arch Linux                 | Mandatory/Optional |
|--------------------------|------------------------------|----------------------------|----------------------------|--------------------|
| WebGTK (libwebkit2gtk)   | `libwebkit2gtk-4.0-37`       | `webkit2gtk3`              | `webkit2gtk`               | Mandatory          |
| GTK+ 3 (libgtk-3)        | `libgtk-3-0`                 | `gtk3`                     | `gtk3`                     | Mandatory          |
| GStreamer Base Plugins   | `gstreamer1.0-plugins-base`  | `gstreamer1-plugins-base`  | `gst-plugins-base`         | Optional           |
| GStreamer Good Plugins   | `gstreamer1.0-plugins-good`  | `gstreamer1-plugins-good`  | `gst-plugins-good`         | Optional           |
| GStreamer Tools          | `gstreamer1.0-tools`         | `gstreamer1-tools`         | `gst-plugins-base`         | Optional           |

### Notes
- **Mandatory**: These packages are required for Phoenix Code to operate correctly.
- **Optional**: These packages enhance functionality, particularly for multimedia content, but Phoenix Code can operate without them.

## FAQ
**1. How to check if your distribution is supported?**
To verify if your distribution is supported, run the following command in your terminal:
```
wget -qO- https://updates.phcode.io/linux/installer.sh | bash
```
If this command completes successfully, Phoenix Code will be installed on your machine. If it fails, you may need to proceed with a manual installation.

**2. How to upgrade Phoenix Code?**
Upgrading Phoenix Code depends on your initial installation method:
- **Automatic Installation**: If you installed Phoenix Code using the automatic installer, you will receive a notification in the Phoenix Code user interface when an update is available. Simply click on the notification to start the update process.
- **Manual Installation**: For those who installed Phoenix Code manually, you will also receive an update notification. However, you will need to manually upgrade by downloading the latest version from the releases page and following the manual installation steps provided earlier in this document.
   
**3. How to uninstall Phoenix Code?**
The uninstallation process will vary depending on your installation method:
- **Automatic Installation**: If you installed Phoenix Code using the automatic installer, uninstall by running the following command in your terminal:
```
wget -qO- https://updates.phcode.io/linux/installer.sh | bash -s -- --uninstall
```
- **Manual Installation**: If you installed Phoenix Code manually, you will need to remove the installed files and any additional changes you may have made following the same steps as the manual installation in reverse. This typically involves deleting the Phoenix Code files from your system.
