"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6245],{30526:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"control-ai","title":"AI Control for school and work","description":"\ud83d\udd10 Disable or manage AI features in Phoenix Code for educational and enterprise environments.","source":"@site/docs/02-control-ai.md","sourceDirName":".","slug":"/control-ai","permalink":"/docs/control-ai","draft":false,"unlisted":false,"editUrl":"https://github.com/phcode-dev/docs/blob/main/docs/02-control-ai.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"AI Control for school and work"},"sidebar":"tutorialSidebar","previous":{"title":"Install/Uninstall in Linux","permalink":"/docs/Linux"},"next":{"title":"Editing Text","permalink":"/docs/editing-text"}}');var l=s(74848),a=s(28453),o=s(65537),t=s(79329);const r={title:"AI Control for school and work"},d="AI Control for school and work",c={},h=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Installing Configuration Scripts",id:"installing-configuration-scripts",level:3},{value:"Windows Installation",id:"windows-installation",level:4},{value:"macOS Installation",id:"macos-installation",level:4},{value:"Linux Installation",id:"linux-installation",level:4},{value:"Script Command-Line Options",id:"script-command-line-options",level:2},{value:"Common Configuration Examples",id:"common-configuration-examples",level:2},{value:"Disabling AI for All Users",id:"disabling-ai-for-all-users",level:3},{value:"Enabling AI for All Users",id:"enabling-ai-for-all-users",level:3},{value:"Enabling AI for Specific Users Only",id:"enabling-ai-for-specific-users-only",level:3},{value:"Verifying AI Control Status",id:"verifying-ai-control-status",level:2},{value:"Installing the Extension",id:"installing-the-extension",level:3},{value:"Checking Status",id:"checking-status",level:3},{value:"Desktop App Status Check",id:"desktop-app-status-check",level:4},{value:"Example: When AI is disabled",id:"example-when-ai-is-disabled",level:5},{value:"Example: AI enabled for selected users only",id:"example-ai-enabled-for-selected-users-only",level:5},{value:"Browser Version Status Check",id:"browser-version-status-check",level:4},{value:"Example: AI enabled/not firewalled",id:"example-ai-enablednot-firewalled",level:5},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Desktop Applications (Recommended Method)",id:"desktop-applications-recommended-method",level:3},{value:"Network Blocking (For Browser Version)",id:"network-blocking-for-browser-version",level:3},{value:"FAQ",id:"faq",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"ai-control-for-school-and-work",children:"AI Control for school and work"})}),"\n",(0,l.jsx)(n.p,{children:"\ud83d\udd10 Disable or manage AI features in Phoenix Code for educational and enterprise environments."}),"\n",(0,l.jsx)(n.admonition,{title:"Important Timeline",type:"info",children:(0,l.jsx)(n.p,{children:"Phoenix Code AI will be rolled out after May 20, 2025. Educational institutions should configure AI controls campus-wide before this date to disable AI."})}),"\n",(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(n.p,{children:"Phoenix Code AI Control provides system administrators with tools to manage AI functionality in educational and enterprise settings. This feature helps schools and organizations to:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Disable AI features system-wide"}),"\n",(0,l.jsx)(n.li,{children:"Enable AI selectively for specific users"}),"\n",(0,l.jsx)(n.li,{children:"Configure administrative contacts for AI management"}),"\n",(0,l.jsx)(n.li,{children:"Verify AI control status on end-user devices"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.h3,{id:"system-requirements",children:"System Requirements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Windows 10/11, macOS 10.15+, or Ubuntu/Debian-based Linux"}),"\n",(0,l.jsx)(n.li,{children:"Administrative access for system-wide installation"}),"\n",(0,l.jsx)(n.li,{children:"Phoenix Code Desktop or Browser version"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"installing-configuration-scripts",children:"Installing Configuration Scripts"}),"\n",(0,l.jsxs)(n.p,{children:["Download the appropriate script for your platform from ",(0,l.jsx)(n.a,{href:"https://github.com/phcode-dev/phoenix-code-ai-control/releases/latest/",children:"this link"}),"."]}),"\n",(0,l.jsxs)(o.A,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],children:[(0,l.jsxs)(t.A,{value:"windows",children:[(0,l.jsx)(n.h4,{id:"windows-installation",children:"Windows Installation"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Download the Windows Batch script:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/phcode-dev/phoenix-code-ai-control/releases/latest/",children:"setup_phoenix_ai_control_win.bat"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Open Command Prompt as Administrator:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'Press Win+X and select "Command Prompt (Admin)"'}),"\n",(0,l.jsxs)(n.li,{children:["Navigate to the download location using ",(0,l.jsx)(n.code,{children:"cd"})," command"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Execute with parameters, for example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:"setup_phoenix_ai_control_win.bat --managedByEmail school.admin@example.edu --disableAI\n"})}),"\n"]}),"\n"]}),(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"--managedByEmail"})," parameter is optional but recommended. It provides an administrative contact for managing access to AI and educational features in the future. This email will be linked to your institution's AI management if given."]})})]}),(0,l.jsxs)(t.A,{value:"macos",children:[(0,l.jsx)(n.h4,{id:"macos-installation",children:"macOS Installation"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Download the macOS script:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/phcode-dev/phoenix-code-ai-control/releases/latest/",children:"setup_phoenix_ai_control_mac.sh"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Open Terminal and navigate to your download location"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Make the script executable:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"chmod +x setup_phoenix_ai_control_mac.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Execute with parameters:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ./setup_phoenix_ai_control_mac.sh --managedByEmail school.admin@example.edu --disableAI\n"})}),"\n"]}),"\n"]}),(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"--managedByEmail"})," parameter is optional but recommended. It provides an administrative contact for managing access to AI and educational features in the future. This email will be linked to your institution's AI management if given."]})})]}),(0,l.jsxs)(t.A,{value:"linux",children:[(0,l.jsx)(n.h4,{id:"linux-installation",children:"Linux Installation"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Download the Linux script:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/phcode-dev/phoenix-code-ai-control/releases/latest/",children:"setup_phoenix_ai_control_linux.sh"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Open Terminal and navigate to your download location"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Make the script executable:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"chmod +x setup_phoenix_ai_control_linux.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Execute with parameters:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ./setup_phoenix_ai_control_linux.sh --managedByEmail school.admin@example.edu --disableAI\n"})}),"\n"]}),"\n"]}),(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"--managedByEmail"})," parameter is optional but recommended. It provides an administrative contact for managing access to AI and educational features in the future. This email will be linked to your institution's AI management if given."]})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"script-command-line-options",children:"Script Command-Line Options"}),"\n",(0,l.jsx)(n.p,{children:"All installation scripts support the same command-line options:"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Option"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"--help"})}),(0,l.jsx)(n.td,{children:"Display help"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"--managedByEmail <email>"})}),(0,l.jsx)(n.td,{children:"Optional but recommended. Admin email who manages AI policy. Can be used in your Phoenix managed AI dashboard to selectively enable features and manage usage quotas in the future."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:'--allowedUsers "<user1,user2,...>"'})}),(0,l.jsx)(n.td,{children:"Comma-separated list of usernames allowed to use AI even when disabled for others"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"--disableAI"})}),(0,l.jsxs)(n.td,{children:["If present, AI will be disabled by default for all users except those specified in ",(0,l.jsx)(n.code,{children:"allowedUsers"})]})]})]})]}),"\n",(0,l.jsx)(n.admonition,{type:"important",children:(0,l.jsxs)(n.p,{children:["Always enclose the ",(0,l.jsx)(n.code,{children:"--allowedUsers"})," list in quotes to prevent parsing errors (e.g., ",(0,l.jsx)(n.code,{children:'--allowedUsers "alice,bob"'}),")"]})}),"\n",(0,l.jsx)(n.h2,{id:"common-configuration-examples",children:"Common Configuration Examples"}),"\n",(0,l.jsx)(n.h3,{id:"disabling-ai-for-all-users",children:"Disabling AI for All Users"}),"\n",(0,l.jsx)(n.p,{children:"To disable AI features system-wide:"}),"\n",(0,l.jsxs)(o.A,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],children:[(0,l.jsx)(t.A,{value:"windows",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:"setup_phoenix_ai_control_win.bat --disableAI --managedByEmail school.admin@example.edu\n"})})}),(0,l.jsx)(t.A,{value:"macos",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ./setup_phoenix_ai_control_mac.sh --disableAI --managedByEmail school.admin@example.edu\n"})})}),(0,l.jsx)(t.A,{value:"linux",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ./setup_phoenix_ai_control_linux.sh --disableAI --managedByEmail school.admin@example.edu\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"enabling-ai-for-all-users",children:"Enabling AI for All Users"}),"\n",(0,l.jsx)(n.p,{children:"To enable AI features system-wide:"}),"\n",(0,l.jsxs)(o.A,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],children:[(0,l.jsx)(t.A,{value:"windows",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:"setup_phoenix_ai_control_win.bat --managedByEmail school.admin@example.edu\n"})})}),(0,l.jsx)(t.A,{value:"macos",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ./setup_phoenix_ai_control_mac.sh --managedByEmail school.admin@example.edu\n"})})}),(0,l.jsx)(t.A,{value:"linux",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ./setup_phoenix_ai_control_linux.sh --managedByEmail school.admin@example.edu\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"enabling-ai-for-specific-users-only",children:"Enabling AI for Specific Users Only"}),"\n",(0,l.jsx)(n.p,{children:"To disable AI globally but allow specific users to access it:"}),"\n",(0,l.jsxs)(o.A,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],children:[(0,l.jsx)(t.A,{value:"windows",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:'setup_phoenix_ai_control_win.bat --disableAI --allowedUsers "teacher1,admin2" --managedByEmail school.admin@example.edu\n'})})}),(0,l.jsx)(t.A,{value:"macos",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'sudo ./setup_phoenix_ai_control_mac.sh --disableAI --allowedUsers "teacher1,admin2" --managedByEmail school.admin@example.edu\n'})})}),(0,l.jsx)(t.A,{value:"linux",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'sudo ./setup_phoenix_ai_control_linux.sh --disableAI --allowedUsers "teacher1,admin2" --managedByEmail school.admin@example.edu\n'})})})]}),"\n",(0,l.jsx)(n.admonition,{type:"important",children:(0,l.jsx)(n.p,{children:"Always enclose the list of users in quotes to prevent parsing errors"})}),"\n",(0,l.jsx)(n.h2,{id:"verifying-ai-control-status",children:"Verifying AI Control Status"}),"\n",(0,l.jsx)(n.p,{children:"The Phoenix Code AI Control extension provides a visual interface to verify the current status of AI controls on end-user machines."}),"\n",(0,l.jsx)(n.h3,{id:"installing-the-extension",children:"Installing the Extension"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Open Phoenix Code"}),"\n",(0,l.jsx)(n.li,{children:"Navigate to File \u2192 Extension Manager"}),"\n",(0,l.jsx)(n.li,{children:'Search for "Phoenix Code AI Control"'}),"\n",(0,l.jsx)(n.li,{children:"Click the Install button"}),"\n",(0,l.jsx)(n.li,{children:"Restart Phoenix Code when prompted"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"checking-status",children:"Checking Status"}),"\n",(0,l.jsxs)(o.A,{defaultValue:"desktop",values:[{label:"Desktop App",value:"desktop"},{label:"Browser Version",value:"browser"}],children:[(0,l.jsxs)(t.A,{value:"desktop",children:[(0,l.jsx)(n.h4,{id:"desktop-app-status-check",children:"Desktop App Status Check"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Open Phoenix Code"}),"\n",(0,l.jsxs)(n.li,{children:['Install the extension (File \u2192 Extension Manager \u2192 "Phoenix Code AI Control")',"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.img,{src:"https://github.com/user-attachments/assets/ff282d9d-19dc-4fa2-9d39-a81eb2c59a62",alt:"Image"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Navigate to View \u2192 AI Control Status.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.img,{src:"https://github.com/user-attachments/assets/afa63f23-adc1-4f07-bdeb-70883c3abbd9",alt:"Image"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["A dialog will appear showing your current configuration:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"AI Status (Enabled/Disabled)"}),"\n",(0,l.jsx)(n.li,{children:"Platform information"}),"\n",(0,l.jsx)(n.li,{children:"Current user"}),"\n",(0,l.jsx)(n.li,{children:"Managed by (administrative contact)"}),"\n",(0,l.jsx)(n.li,{children:"List of allowed users (if configured)"}),"\n"]}),"\n"]}),"\n"]}),(0,l.jsx)(n.h5,{id:"example-when-ai-is-disabled",children:"Example: When AI is disabled"}),(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://github.com/user-attachments/assets/6a066f62-a079-4ec9-bb93-9165fbf9bc99",alt:"AI Disabled"})}),(0,l.jsx)(n.h5,{id:"example-ai-enabled-for-selected-users-only",children:"Example: AI enabled for selected users only"}),(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://github.com/user-attachments/assets/5f230107-854a-437f-952c-2712188f8ef2",alt:"AI Selective Access"})})]}),(0,l.jsxs)(t.A,{value:"browser",children:[(0,l.jsx)(n.h4,{id:"browser-version-status-check",children:"Browser Version Status Check"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Open ",(0,l.jsx)(n.a,{href:"https://phcode.dev",children:"https://phcode.dev"})," in your web browser"]}),"\n",(0,l.jsxs)(n.li,{children:['Install the extension (File \u2192 Extension Manager \u2192 "Phoenix Code AI Control")',"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.img,{src:"https://github.com/user-attachments/assets/ff282d9d-19dc-4fa2-9d39-a81eb2c59a62",alt:"Image"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Navigate to View \u2192 AI Control Status","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.img,{src:"https://github.com/user-attachments/assets/afa63f23-adc1-4f07-bdeb-70883c3abbd9",alt:"Image"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["The browser will check if ",(0,l.jsx)(n.code,{children:"ai.phcode.dev"})," is accessible:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'First shows "Checking if AI is disabled..."'}),"\n",(0,l.jsx)(n.li,{children:"Then displays whether AI is available or blocked"}),"\n"]}),"\n"]}),"\n"]}),(0,l.jsx)(n.h5,{id:"example-ai-enablednot-firewalled",children:"Example: AI enabled/not firewalled"}),(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://github.com/user-attachments/assets/2aeae802-ca91-48e1-96ac-7506fa13e47e",alt:"Image"})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,l.jsx)(n.h3,{id:"desktop-applications-recommended-method",children:"Desktop Applications (Recommended Method)"}),"\n",(0,l.jsx)(n.p,{children:"For desktop installations of Phoenix Code, we strongly recommend using the installation scripts described above. This approach provides:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"System-wide configuration via protected config files"}),"\n",(0,l.jsx)(n.li,{children:"Granular control with user-level permissions"}),"\n",(0,l.jsx)(n.li,{children:"Ability to selectively enable AI for specific users"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Only administrative users can modify this configuration."}),"\n",(0,l.jsx)(n.h3,{id:"network-blocking-for-browser-version",children:"Network Blocking (For Browser Version)"}),"\n",(0,l.jsxs)(n.p,{children:["For schools using the browser version of Phoenix Code at ",(0,l.jsx)(n.a,{href:"https://phcode.dev",children:"https://phcode.dev"}),", network-level blocking is the recommended approach:"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Block access to: ",(0,l.jsx)(n.code,{children:"ai.phcode.dev"})]}),"\n",(0,l.jsx)(n.li,{children:"Add this domain to your firewall or content filtering system"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The browser version of Phoenix Code will automatically detect if the domain is unreachable and display appropriate status messages."}),"\n",(0,l.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: When will AI be enabled in Phoenix Code?"})}),"\n",(0,l.jsxs)(n.p,{children:["Phoenix Code AI will be rolled out after ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"May 20, 2025"})}),". Educational institutions should configure AI controls campus-wide before this date."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: How do I know if AI control is working?"})}),"\n",(0,l.jsx)(n.p,{children:"In both the desktop and browser versions, go to View \u2192 AI Control Status to see a detailed report."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: Can I disable AI for some users but enable it for others?"})}),"\n",(0,l.jsxs)(n.p,{children:["Yes, use the ",(0,l.jsx)(n.code,{children:"--disableAI"})," flag to disable AI globally, then use the ",(0,l.jsx)(n.code,{children:"--allowedUsers"})," parameter to specify which users should still have access. Example:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'sudo ./setup_phoenix_ai_control_linux.sh --disableAI --allowedUsers "teacher1,admin2"\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: Is AI control mandatory?"})}),"\n",(0,l.jsx)(n.p,{children:"No, AI control is optional and meant for educational institutions or enterprises that need to regulate AI usage. By default, all users have access to AI features."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: Will blocking AI affect other Phoenix Code features?"})}),"\n",(0,l.jsx)(n.p,{children:"No, all other features of Phoenix Code will continue to work normally. Only the AI-powered features like code generation and explanations will be affected."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: How can I update the AI control configuration?"})}),"\n",(0,l.jsx)(n.p,{children:"Simply run the installation script again with the new parameters. The script will overwrite the existing configuration file with your new settings."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: How do I re-enable AI after it has been disabled?"})}),"\n",(0,l.jsx)(n.p,{children:"To re-enable AI that was previously disabled:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Run the installation script again without the ",(0,l.jsx)(n.code,{children:"--disableAI"})," flag:"]}),"\n"]}),"\n",(0,l.jsxs)(o.A,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],children:[(0,l.jsx)(t.A,{value:"windows",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:"setup_phoenix_ai_control_win.bat --managedByEmail school.admin@example.edu\n"})})}),(0,l.jsx)(t.A,{value:"macos",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ./setup_phoenix_ai_control_mac.sh --managedByEmail school.admin@example.edu\n"})})}),(0,l.jsx)(t.A,{value:"linux",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ./setup_phoenix_ai_control_linux.sh --managedByEmail school.admin@example.edu\n"})})})]}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:["For browser version, remove any firewall rules blocking ",(0,l.jsx)(n.code,{children:"ai.phcode.dev"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: What's the difference between browser and desktop control?"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Browser Version"}),": Only supports network-level blocking of ",(0,l.jsx)(n.code,{children:"ai.phcode.dev"})," through your firewall"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Desktop Version"}),": Provides comprehensive control with user-specific permissions"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: Does this completely prevent AI usage?"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Desktop Version"}),": Yes, the control is comprehensive when properly configured using the installation scripts"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Browser Version"}),": Only if you implement network-level blocking of the ",(0,l.jsx)(n.code,{children:"ai.phcode.dev"})," domain"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: How can I verify that the firewall is properly blocking AI access?"})}),"\n",(0,l.jsxs)(n.p,{children:["In the browser app at ",(0,l.jsx)(n.a,{href:"https://phcode.dev",children:"https://phcode.dev"}),", install the ",(0,l.jsx)(n.code,{children:"Phoenix Code AI Control"}),"extension. Use the ",(0,l.jsx)(n.code,{children:"View \u2192 AI Control Status"})," option. It will report whether AI is accessible or blocked."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Q: Is there a way to monitor AI usage in my organization?"})}),"\n",(0,l.jsxs)(n.p,{children:["When you set the ",(0,l.jsx)(n.code,{children:"--managedByEmail"})," parameter, this information is used for administration purposes. Future versions will provide a dashboard for administrators to monitor and manage AI usage across their organization.\nHowever, this is currently not implemented."]}),"\n",(0,l.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,l.jsxs)(n.p,{children:["For any special requests or technical issues, please reach out through our discussions forum at ",(0,l.jsx)(n.a,{href:"https://github.com/orgs/phcode-dev/discussions/new/choose",children:"https://github.com/orgs/phcode-dev/discussions/new/choose"}),".\nWe're committed to supporting a smooth rollout of AI controls for educational or organizational needs."]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},79329:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var i=s(34164);const l={tabItem:"tabItem_Ymn6"};var a=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(l.tabItem,o),hidden:s,children:n})}},65537:(e,n,s)=>{s.d(n,{A:()=>A});var i=s(96540),l=s(34164),a=s(65627),o=s(56347),t=s(50372),r=s(30604),d=s(11861),c=s(78749);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:l}}=e;return{value:n,label:s,attributes:i,default:l}}))}(s);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const l=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,r.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:l}=e,a=u(e),[o,r]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[d,h]=p({queryString:s,groupId:l}),[m,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,c.Dv)(s);return[l,(0,i.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:l}),b=(()=>{const e=d??m;return x({value:e,tabValues:a})?e:null})();(0,t.A)((()=>{b&&r(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=s(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function g(e){let{className:n,block:s,selectedValue:i,selectValue:o,tabValues:t}=e;const r=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,s=r.indexOf(n),l=t[s].value;l!==i&&(d(n),o(l))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=r.indexOf(e.currentTarget)+1;n=r[s]??r[0];break}case"ArrowLeft":{const s=r.indexOf(e.currentTarget)-1;n=r[s]??r[r.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{r.push(e)},onKeyDown:h,onClick:c,...a,className:(0,l.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:a}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function A(e){const n=(0,j.A)();return(0,f.jsx)(w,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var i=s(96540);const l={},a=i.createContext(l);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);