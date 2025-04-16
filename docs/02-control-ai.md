---
title: Phoenix Code AI Control
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Phoenix Code AI Control

🔐 Disable or manage AI features in Phoenix Code for educational and enterprise environments.

:::info Important Timeline
Phoenix Code AI will be rolled out after May 20, 2025. Educational institutions should configure AI controls campus-wide before this date to disable AI.
:::

## Overview

Phoenix Code AI Control provides system administrators with tools to manage AI functionality in educational and enterprise settings. This feature helps schools and organizations to:

- Disable AI features system-wide
- Enable AI selectively for specific users
- Configure administrative contacts for AI management
- Verify AI control status on end-user devices


## Installation

### System Requirements

- Windows 10/11, macOS 10.15+, or Ubuntu/Debian-based Linux
- Administrative access for system-wide installation
- Phoenix Code Desktop or Browser version

### Installing Configuration Scripts

Download the appropriate script for your platform from [this link](https://github.com/phcode-dev/phoenix-code-ai-control/releases/latest/).

<Tabs
  defaultValue="windows"
  values={[
    { label: 'Windows', value: 'windows' },
    { label: 'macOS', value: 'macos' },
    { label: 'Linux', value: 'linux' },
  ]}>

<TabItem value="windows">

#### Windows Installation

1. Download the Windows Batch script:
   - `setup_phoenix_ai_control_win.bat`

2. Open Command Prompt as Administrator:
   - Press Win+X and select "Command Prompt (Admin)"
   - Navigate to the download location using `cd` command

3. Execute with parameters, for example:
   ```batch
   setup_phoenix_ai_control_win.bat --managedByEmail school.admin@example.edu --disableAI
   ```

:::note
The `--managedByEmail` parameter is optional but recommended. It provides an administrative contact for managing access to AI and educational features in the future. This email will be linked to your institution’s AI management if given.
:::

</TabItem>

<TabItem value="macos">

#### macOS Installation

1. Download the macOS script:
   - `setup_phoenix_ai_control_mac.sh`

2. Open Terminal and navigate to your download location

3. Make the script executable:
   ```bash
   chmod +x setup_phoenix_ai_control_mac.sh
   ```

4. Execute with parameters:
   ```bash
   sudo ./setup_phoenix_ai_control_mac.sh --managedByEmail school.admin@example.edu --disableAI
   ```

:::note
The `--managedByEmail` parameter is optional but recommended for administrative contact information.
:::

</TabItem>

<TabItem value="linux">

#### Linux Installation

1. Download the Linux script:
   - `setup_phoenix_ai_control_linux.sh`

2. Open Terminal and navigate to your download location

3. Make the script executable:
   ```bash
   chmod +x setup_phoenix_ai_control_linux.sh
   ```

4. Execute with parameters:
   ```bash
   sudo ./setup_phoenix_ai_control_linux.sh --managedByEmail school.admin@example.edu --disableAI
   ```

:::note
The `--managedByEmail` parameter is optional but recommended for administrative contact information.
:::

</TabItem>
</Tabs>

## Script Command-Line Options

All installation scripts support the same command-line options:

| Option | Description |
|--------|-------------|
| `--help` | Display usage information and help text |
| `--managedByEmail <email>` | Optional but recommended. Admin email who manages AI policy. Can be used in your Phoenix managed AI dashboard to selectively enable features and manage usage quotas |
| `--allowedUsers "<user1,user2,...>"` | Comma-separated list of usernames allowed to use AI even when disabled for others |
| `--disableAI` | If present, AI will be disabled by default for all users except those specified in `allowedUsers` |

:::important
Always enclose the `--allowedUsers` list in quotes to prevent parsing errors (e.g., `--allowedUsers "alice,bob"`)
:::

## Common Configuration Examples

<Tabs
  defaultValue="disable"
  values={[
    { label: 'Disable AI', value: 'disable' },
    { label: 'Enable AI', value: 'enable' },
    { label: 'Selective Access', value: 'selective' },
  ]}>

<TabItem value="disable">

### Disabling AI for All Users

To disable AI features system-wide:

<Tabs
  defaultValue="windows"
  values={[
    { label: 'Windows', value: 'windows' },
    { label: 'macOS', value: 'macos' },
    { label: 'Linux', value: 'linux' },
  ]}>

<TabItem value="windows">

```batch
setup_phoenix_ai_control_win.bat --disableAI --managedByEmail school.admin@example.edu
```

</TabItem>

<TabItem value="macos">

```bash
sudo ./setup_phoenix_ai_control_mac.sh --disableAI --managedByEmail school.admin@example.edu
```

</TabItem>

<TabItem value="linux">

```bash
sudo ./setup_phoenix_ai_control_linux.sh --disableAI --managedByEmail school.admin@example.edu
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="enable">

### Enabling AI for All Users

To enable AI features system-wide:

<Tabs
  defaultValue="windows"
  values={[
    { label: 'Windows', value: 'windows' },
    { label: 'macOS', value: 'macos' },
    { label: 'Linux', value: 'linux' },
  ]}>

<TabItem value="windows">

```batch
setup_phoenix_ai_control_win.bat --managedByEmail school.admin@example.edu
```

</TabItem>

<TabItem value="macos">

```bash
sudo ./setup_phoenix_ai_control_mac.sh --managedByEmail school.admin@example.edu
```

</TabItem>

<TabItem value="linux">

```bash
sudo ./setup_phoenix_ai_control_linux.sh --managedByEmail school.admin@example.edu
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="selective">

### Enabling AI for Specific Users Only

To disable AI globally but allow specific users to access it:

<Tabs
  defaultValue="windows"
  values={[
    { label: 'Windows', value: 'windows' },
    { label: 'macOS', value: 'macos' },
    { label: 'Linux', value: 'linux' },
  ]}>

<TabItem value="windows">

```batch
setup_phoenix_ai_control_win.bat --disableAI --allowedUsers "teacher1,admin2" --managedByEmail school.admin@example.edu
```

</TabItem>

<TabItem value="macos">

```bash
sudo ./setup_phoenix_ai_control_mac.sh --disableAI --allowedUsers "teacher1,admin2" --managedByEmail school.admin@example.edu
```

</TabItem>

<TabItem value="linux">

```bash
sudo ./setup_phoenix_ai_control_linux.sh --disableAI --allowedUsers "teacher1,admin2" --managedByEmail school.admin@example.edu
```

</TabItem>
</Tabs>

:::important
Always enclose the list of users in quotes to prevent parsing errors
:::

</TabItem>
</Tabs>

## Verifying AI Control Status

The Phoenix Code AI Control extension provides a visual interface to verify the current status of AI controls on end-user machines.

### Installing the Extension

1. Open Phoenix Code
2. Navigate to File → Extension Manager
3. Search for "Phoenix Code AI Control"
4. Click the Install button
5. Restart Phoenix Code when prompted

### Checking Status

<Tabs
  defaultValue="desktop"
  values={[
    { label: 'Desktop App', value: 'desktop' },
    { label: 'Browser Version', value: 'browser' },
  ]}>

<TabItem value="desktop">

#### Desktop App Status Check

1. Open Phoenix Code
2. Navigate to View → AI Control Status
3. A dialog will appear showing your current configuration:
   - AI Status (Enabled/Disabled)
   - Platform information
   - Current user
   - Managed by (administrative contact)
   - List of allowed users (if configured)

##### Example: When AI is disabled
![AI Disabled](https://github.com/user-attachments/assets/6a066f62-a079-4ec9-bb93-9165fbf9bc99)

##### Example: AI enabled for selected users only
![AI Selective Access](https://github.com/user-attachments/assets/5f230107-854a-437f-952c-2712188f8ef2)

</TabItem>

<TabItem value="browser">

#### Browser Version Status Check

1. Open Phoenix Code in your web browser
2. Install the extension (File → Extension Manager → "Phoenix Code AI Control")
3. Navigate to View → AI Control Status
4. The browser will check if `ai.phcode.dev` is accessible:
   - First shows "Checking if AI is disabled..."
   - Then displays whether AI is available or blocked
##### Example: AI enabled/not firewalled
  ![Image](https://github.com/user-attachments/assets/2aeae802-ca91-48e1-96ac-7506fa13e47e)

</TabItem>
</Tabs>

## Configuration Options

### Desktop Applications (Recommended Method)

For desktop installations of Phoenix Code, we strongly recommend using the installation scripts described above. This approach provides:

1. System-wide configuration via protected config files
2. Granular control with user-level permissions
3. Ability to selectively enable AI for specific users

Only administrative users can modify this configuration.

### Network Blocking (For Browser Version)

For schools using the browser version of Phoenix Code at https://phcode.dev, network-level blocking is the recommended approach:

1. Block access to: `ai.phcode.dev`
2. Add this domain to your firewall or content filtering system

The browser version of Phoenix Code will automatically detect if the domain is unreachable and display appropriate status messages.

## FAQ

<details>
<summary>When will AI be enabled in Phoenix Code?</summary>
Phoenix Code AI will be rolled out after May 20, 2025. Educational institutions should configure AI controls campus-wide before this date.
</details>

<details>
<summary>How do I know if AI control is working?</summary>
In both the desktop and browser versions, go to View → AI Control Status to see a detailed report.
</details>

<details>
<summary>Can I allow specific users to access AI features?</summary>
Yes, but only in the desktop version. Use the `--allowedUsers` parameter with a comma-separated list of usernames when running the installation script. These users will be able to access AI features even when disabled system-wide with the `--disableAI` flag.
</details>

<details>
<summary>Is AI control mandatory?</summary>
No, AI control is optional and meant for educational institutions or enterprises that need to regulate AI usage. By default, all users have access to AI features.
</details>

<details>
<summary>Will blocking AI affect other Phoenix Code features?</summary>
No, all other features of Phoenix Code will continue to work normally. Only the AI-powered features like code generation and explanations will be affected.
</details>

<details>
<summary>How can I update the AI control configuration?</summary>
Simply run the installation script again with the new parameters. The script will overwrite the existing configuration file with your new settings.
</details>

<details>
<summary>How do I re-enable AI after it has been disabled?</summary>

To re-enable AI that was previously disabled:

1. Run the installation script again without the `--disableAI` flag:

<Tabs
  defaultValue="windows"
  values={[
    { label: 'Windows', value: 'windows' },
    { label: 'macOS', value: 'macos' },
    { label: 'Linux', value: 'linux' },
  ]}>

<TabItem value="windows">

```batch
setup_phoenix_ai_control_win.bat --managedByEmail school.admin@example.edu
```

</TabItem>

<TabItem value="macos">

```bash
sudo ./setup_phoenix_ai_control_mac.sh --managedByEmail school.admin@example.edu
```

</TabItem>

<TabItem value="linux">

```bash
sudo ./setup_phoenix_ai_control_linux.sh --managedByEmail school.admin@example.edu
```

</TabItem>
</Tabs>

2. For browser version, remove any firewall rules blocking `ai.phcode.dev`
</details>

<details>
<summary>What's the difference between browser and desktop control?</summary>

- **Browser Version**: Only supports network-level blocking of `ai.phcode.dev` through your firewall
- **Desktop Version**: Provides comprehensive control through configuration files with user-specific permissions
</details>

<details>
<summary>Does this completely prevent AI usage?</summary>

- **Desktop Version**: Yes, the control is comprehensive when properly configured using the installation scripts
- **Browser Version**: Only if you implement network-level blocking of the `ai.phcode.dev` domain
</details>

<details>
<summary>How can I verify that the firewall is properly blocking AI access?</summary>
In the browser version, use the View → AI Control Status option which will attempt to connect to the AI service and report whether it's accessible or blocked.
</details>

<details>
<summary>Can I disable AI for some users but enable it for others?</summary>
Yes, use the `--disableAI` flag to disable AI globally, then use the `--allowedUsers` parameter to specify which users should still have access. Example:

```bash
sudo ./setup_phoenix_ai_control_linux.sh --disableAI --allowedUsers "teacher1,admin2"
```
</details>

<details>
<summary>Is there a way to monitor AI usage in my organization?</summary>
When you set the `--managedByEmail` parameter, this information is used for administration purposes. Future versions will provide a dashboard for administrators to monitor and manage AI usage across their organization.
</details>

## Additional Resources

AI complete: if someone wants to reach out for any special cases or this script doesnt work for you
or any other special request, we will be more than happy to assist you. please reach out using https://github.com/orgs/phcode-dev/discussions/new/choose
