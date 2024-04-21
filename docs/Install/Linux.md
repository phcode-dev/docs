---
title: Installing Phoenix Code on Linux
---

## Overview
This guide details how to install Phoenix Code on Linux systems. Our installer works with major Linux distributions(Ubuntu, Debian, Fedora, and Arch-based systems).

## Automatic Installation
To install Phoenix Code automatically, execute the following command in your terminal:

```bash
wget -qO- https://updates.phcode.io/linux/installer.sh | bash
```

This script automatically installs Phoenix Code and all required dependencies.
It will also setup app drawer shortcuts and file associations.

## Manual Installation
If automatic installation fails or manual installation is preferred, follow these steps:

1. **Check GLIBC Version**:
   Determine your system's GLIBC version using:
   ```bash
   ldd --version | awk '/ldd/{print $NF}'
   ```

2. **Download the Package**:
   Visit the [Phoenix Code Releases Page](https://github.com/phcode-dev/phoenix-desktop/releases) and download a version compatible with your GLIBC.

3. **Extract the Package**:
   Unpack the downloaded file with:
   ```bash
   tar -xvf phoenix_code_version.tar.gz
   ```

4. **Read Installation Instructions**:
   Read the detailed instructions contained within the package:
   ```bash
   cat extracted_folder/ReadMe.txt
   ```

5. **Execute Installation Steps**:
   Follow the instructions in `readme.txt` to complete the installation.

## Desktop Environment Compatibility
Phoenix Code is tested with both `Gnome` and `KDE` desktop environments.
Other desktop environments may be compatible with [Manual Installation](#manual-installation).

## FAQ
**Q: How can I verify if my distribution is supported?**
A: Run the [Automatic Installation](#automatic-installation). If it completes successfully, your distribution is supported.

**Q: How do I upgrade Phoenix Code?**
A: For automatic installations, you will receive an update notification in the app itself.
For [Manual Installations](#manual-installation), follow the section again.

**Q: How do I uninstall Phoenix Code?**
A: For automatic installations, use the command:
   ```bash
   wget -qO- https://updates.phcode.io/linux/installer.sh | bash -s -- --uninstall
   ```
For manual installations, delete the folder where you placed Phoenix Code App and remove any related files.