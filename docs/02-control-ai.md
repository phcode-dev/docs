---
title: AI Control For School And Work
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AI Control For School And Work

🔐 Disable or manage AI features in Phoenix Code for educational and enterprise environments.

:::info Important Timeline
Phoenix Code AI will be rolled out after May 20, 2025. AI features will require both a Phoenix Code account login with a free/pro AI plan and explicit user opt-in.

Educational institutions should configure AI controls campus-wide before this date to disable AI.
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
   - [setup_phoenix_ai_control_win.bat](https://github.com/phcode-dev/phoenix-code-ai-control/releases/latest/)

2. Open Command Prompt as Administrator:
   - Press Win+X and select "Command Prompt (Admin)"
   - Navigate to the download location using `cd` command

3. Execute with parameters, for example:
   ```batch
   setup_phoenix_ai_control_win.bat --managedByEmail school.admin@example.edu --disableAI
   ```

:::note
The `--managedByEmail` parameter is optional but recommended. It provides an administrative contact for managing access to AI and educational features in the future. This email will be linked to your institution's AI management if given.
:::

</TabItem>

<TabItem value="macos">

#### macOS Installation

1. Download the macOS script:
   - [setup_phoenix_ai_control_mac.sh](https://github.com/phcode-dev/phoenix-code-ai-control/releases/latest/)

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
The `--managedByEmail` parameter is optional but recommended. It provides an administrative contact for managing access to AI and educational features in the future. This email will be linked to your institution's AI management if given.
:::

</TabItem>

<TabItem value="linux">

#### Linux Installation

1. Download the Linux script:
   - [setup_phoenix_ai_control_linux.sh](https://github.com/phcode-dev/phoenix-code-ai-control/releases/latest/)

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
The `--managedByEmail` parameter is optional but recommended. It provides an administrative contact for managing access to AI and educational features in the future. This email will be linked to your institution's AI management if given.
:::

</TabItem>
</Tabs>

## Script Command-Line Options

All installation scripts support the same command-line options:

| Option | Description |
|--------|-------------|
| `--help` | Display help |
| `--managedByEmail <email>` | Optional but recommended. Admin email who manages AI policy. Can be used in your Phoenix managed AI dashboard to selectively enable features and manage usage quotas in the future.|
| `--allowedUsers "<user1,user2,...>"` | Comma-separated list of usernames allowed to use AI even when disabled for others |
| `--disableAI` | If present, AI will be disabled by default for all users except those specified in `allowedUsers` |

:::important
Always enclose the `--allowedUsers` list in quotes to prevent parsing errors (e.g., `--allowedUsers "alice,bob"`)
:::

## Common Configuration Examples

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
2. Install the extension (File → Extension Manager → "Phoenix Code AI Control")
   - ![Image](https://github.com/user-attachments/assets/ff282d9d-19dc-4fa2-9d39-a81eb2c59a62)
2. Navigate to View → AI Control Status.
   - ![Image](https://github.com/user-attachments/assets/afa63f23-adc1-4f07-bdeb-70883c3abbd9)
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

1. Open https://phcode.dev in your web browser
2. Install the extension (File → Extension Manager → "Phoenix Code AI Control")
   - ![Image](https://github.com/user-attachments/assets/ff282d9d-19dc-4fa2-9d39-a81eb2c59a62)
3. Navigate to View → AI Control Status
   - ![Image](https://github.com/user-attachments/assets/afa63f23-adc1-4f07-bdeb-70883c3abbd9)
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

**Q: When will AI be enabled in Phoenix Code?**

Phoenix Code AI will be rolled out after **`May 20, 2025`**. Educational institutions should configure AI controls campus-wide before this date.

**Q: How do I know if AI control is working?**

In both the desktop and browser versions, install "Phoenix Code AI Control" extension.
Then, go to View → AI Control Status to see a detailed report.

**Q: Can I disable AI for some users but enable it for others?**

Yes, use the `--disableAI` flag to disable AI globally, then use the `--allowedUsers` parameter to specify which users should still have access. Example:

```bash
sudo ./setup_phoenix_ai_control_linux.sh --disableAI --allowedUsers "teacher1,admin2"
```

**Q: Is AI control mandatory?**

No, AI control is optional and meant for educational institutions or enterprises that need to regulate AI usage. By default, all users have access to AI features.

**Q: Will blocking AI affect other Phoenix Code features?**

No, all other features of Phoenix Code will continue to work normally. Only the AI-powered features like code generation and explanations will be affected.

**Q: How can I update the AI control configuration?**

Simply run the installation script again with the new parameters. The script will overwrite the existing configuration file with your new settings.

**Q: How do I re-enable AI after it has been disabled?**

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

**Q: What's the difference between browser and desktop control?**
- **Browser Version**: Only supports network-level blocking of `ai.phcode.dev` through your firewall
- **Desktop Version**: Provides comprehensive control with user-specific permissions

**Q: Does this completely prevent AI usage?**
- **Desktop Version**: Yes, the control is comprehensive when properly configured using the installation scripts
- **Browser Version**: Only if you implement network-level blocking of the `ai.phcode.dev` domain

**Q: How can I verify that the firewall is properly blocking AI access?**

In the browser app at https://phcode.dev, install the `Phoenix Code AI Control`extension. Use the `View → AI Control Status` option. It will report whether AI is accessible or blocked.

**Q: Is there a way to monitor AI usage in my organization?**

When you set the `--managedByEmail` parameter, this information is used for administration purposes. Future versions will provide a dashboard for administrators to monitor and manage AI usage across their organization.
However, this is currently not implemented.

## Additional Resources

For any special requests or technical issues, please reach out through our discussions forum at https://github.com/orgs/phcode-dev/discussions/new/choose.
We're committed to supporting a smooth rollout of AI controls for educational or organizational needs.
