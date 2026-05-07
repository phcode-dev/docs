---
title: Install/Uninstall in Linux
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
This guide details how to install Phoenix Code on Linux systems. Our installer works with major
Linux distributions(Ubuntu, Debian, Fedora, and Arch-based systems).

## Automatic Installation
To install Phoenix Code automatically, execute the following command in your terminal:

```bash
wget -qO- https://updates.phcode.io/linux/installer.sh | bash
```

This script automatically installs Phoenix Code and all required dependencies.
It will also setup app drawer shortcuts and file associations.

**Uninstall**

Execute the following command in your terminal.
```bash
wget -qO- https://updates.phcode.io/linux/installer.sh | bash -s -- --uninstall
```

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

Run the [Automatic Installation](#automatic-installation). If it completes successfully,
your distribution is supported.

**Q: How do I upgrade Phoenix Code?**

For automatic installations, you will receive an update notification in the app itself.
For [Manual Installations](#manual-installation), follow the section again.

**Q: How do I uninstall Phoenix Code?**

For automatic installations, use the command:
   ```bash
   wget -qO- https://updates.phcode.io/linux/installer.sh | bash -s -- --uninstall
   ```
For manual installations, delete the folder where you placed Phoenix Code App and remove any related files.

**Q: Phoenix is not starting up after install. What can I do?**

 Restart your system. Confirm that the required dependencies listed below in your Linux distribution are installed.


<Tabs
  defaultValue="ubuntu"
  values={[
    { label: 'Ubuntu/Debian', value: 'ubuntu' },
    { label: 'Fedora/Red Hat', value: 'fedora' },
    { label: 'Arch Linux', value: 'arch' },
  ]}>

<TabItem value="ubuntu">

Update your package list:
```bash
sudo apt update
```

Install WebKitGTK and GTK:
```bash
sudo apt install libgtk-3-0 libwebkit2gtk-4.0-37
```
*Note: In Ubuntu 22+ versions, WebKitGTK may be pre-installed.*

Install optional GStreamer plugins for media playback:
```bash
sudo apt install gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-tools gstreamer1.0-libav
```

</TabItem>
<TabItem value="fedora">

Update your package list:
```bash
sudo dnf update
```

Install WebKitGTK and GTK:
```bash
sudo dnf install webkit2gtk3 gtk3
```

Install optional GStreamer plugins for media playback:
```bash
sudo dnf install gstreamer1-plugins-base gstreamer1-plugins-good gstreamer1-plugins-bad-free gstreamer1-plugins-bad-freeworld gstreamer1-plugins-ugly gstreamer1-libav
```

</TabItem>
<TabItem value="arch">

Ensure your system is up to date:
```bash
sudo pacman -Syu
```

Install WebKitGTK and GTK:
```bash
sudo pacman -S webkit2gtk gtk3
```

Install optional GStreamer plugins for media playback:
```bash
sudo pacman -S gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly gst-libav
```

</TabItem>
</Tabs>