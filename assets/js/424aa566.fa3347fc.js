"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5094],{87029:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var t=n(74848),s=n(28453),o=(n(96540),n(56399));const d={title:"Editing Text"},r=void 0,a={id:"editing-text",title:"Editing Text",description:"This section provides an overview of the core text and code editing features in Phoenix Code.",source:"@site/docs/03-editing-text.md",sourceDirName:".",slug:"/editing-text",permalink:"/docs/editing-text",draft:!1,unlisted:!1,editUrl:"https://github.com/phcode-dev/docs/blob/main/docs/03-editing-text.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Editing Text"},sidebar:"tutorialSidebar",previous:{title:"Install/Uninstall in Linux",permalink:"/docs/Linux"},next:{title:"Live Preview",permalink:"/docs/Features/live-preview"}},l={},c=[{value:"Multi Cursor",id:"multi-cursor",level:2},{value:"Creating multiple cursors",id:"creating-multiple-cursors",level:3},{value:"<strong>Using Mouse</strong> :",id:"using-mouse-",level:4},{value:"<strong>Using Keyboard</strong> :",id:"using-keyboard-",level:4},{value:"Switching back to single cursor",id:"switching-back-to-single-cursor",level:3},{value:"Quick Edit",id:"quick-edit",level:2},{value:"Quick Docs",id:"quick-docs",level:2},{value:"Accessing Quick Docs",id:"accessing-quick-docs",level:3},{value:"Find in Files",id:"find-in-files",level:2},{value:"Auto Rename Tag",id:"auto-rename-tag",level:2},{value:"How It Works",id:"how-it-works",level:3},{value:"Enabling/Disabling Auto Rename Tag feature",id:"enablingdisabling-auto-rename-tag-feature",level:3},{value:"Toggle the Feature",id:"toggle-the-feature",level:4},{value:"Temporary Disabling",id:"temporary-disabling",level:4},{value:"File Encoding",id:"file-encoding",level:2},{value:"Set Encoding of a file",id:"set-encoding-of-a-file",level:3},{value:"File Type Associations",id:"file-type-associations",level:2},{value:"Associate a new file type with a language",id:"associate-a-new-file-type-with-a-language",level:3},{value:"Beautify Code",id:"beautify-code",level:2},{value:"Insert and Overwrite Mode",id:"insert-and-overwrite-mode",level:2},{value:"Understanding Insert Mode",id:"understanding-insert-mode",level:3},{value:"Understanding Overwrite Mode",id:"understanding-overwrite-mode",level:3},{value:"Toggle between Insert Mode &amp; Overwrite Mode",id:"toggle-between-insert-mode--overwrite-mode",level:3},{value:"<strong>Using Editor Interface</strong>",id:"using-editor-interface",level:4},{value:"<strong>Using Keyboard</strong>",id:"using-keyboard",level:4},{value:"Auto Space Detection",id:"auto-space-detection",level:2},{value:"Automatic and Fixed Modes",id:"automatic-and-fixed-modes",level:3},{value:"Toggle between Auto Mode &amp; Fixed Mode",id:"toggle-between-auto-mode--fixed-mode",level:3},{value:"Quick Tips",id:"quick-tips",level:3},{value:"No-Distractions Mode",id:"no-distractions-mode",level:2},{value:"Activating No-Distractions Mode",id:"activating-no-distractions-mode",level:3},{value:"<strong>Using Editor Interface</strong> :",id:"using-editor-interface-",level:4},{value:"<strong>Using Keyboard</strong> :",id:"using-keyboard--1",level:4},{value:"File Recovery",id:"file-recovery",level:2},{value:"Recovering Files after a crash",id:"recovering-files-after-a-crash",level:3}];function h(e){const i={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["This section provides an overview of the core text and code editing features in ",(0,t.jsx)(i.strong,{children:"Phoenix Code"}),"."]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"multi-cursor",children:"Multi Cursor"}),"\n",(0,t.jsxs)(i.p,{children:["Using ",(0,t.jsx)(i.strong,{children:"Multi-Cursor"}),", you can place multiple cursors in different locations, allowing you to edit text simultaneously. This feature is especially useful for making quick, consistent changes across multiple lines or sections of a file."]}),"\n",(0,t.jsx)(i.h3,{id:"creating-multiple-cursors",children:"Creating multiple cursors"}),"\n",(0,t.jsxs)(i.h4,{id:"using-mouse-",children:[(0,t.jsx)(i.strong,{children:"Using Mouse"})," :"]}),"\n",(0,t.jsxs)(i.p,{children:["Hold the ",(0,t.jsx)(i.code,{children:"Alt"})," key on Windows/Linux (",(0,t.jsx)(i.code,{children:"Option"})," key on macOS) and ",(0,t.jsx)(i.code,{children:"Click"})," on the desired locations to place additional cursors. To quickly place cursors across multiple lines, drag the mouse while holding the same key."]}),"\n",(0,t.jsx)(o.A,{src:"https://docs-images.phcode.dev/videos/editing-text/multi_cursor.mp4",winLinuxTitle:"Multi Cursors: Alt + Click",macTitle:"Multi Cursors: Option + Click"}),"\n",(0,t.jsxs)(i.h4,{id:"using-keyboard-",children:[(0,t.jsx)(i.strong,{children:"Using Keyboard"})," :"]}),"\n",(0,t.jsxs)(i.p,{children:["If you want the cursor to be placed in the line above, use ",(0,t.jsx)(i.code,{children:"Alt + Shift + Up Arrow"})," on Windows/Linux and ",(0,t.jsx)(i.code,{children:"Option + Shift + Up Arrow"})," on MacOS.\nIf you want the cursor to be placed in the line below, use ",(0,t.jsx)(i.code,{children:"Alt + Shift + Down Arrow"})," on Windows/Linux and ",(0,t.jsx)(i.code,{children:"Option + Shift + Down Arrow"})," on MacOS."]}),"\n",(0,t.jsx)(i.h3,{id:"switching-back-to-single-cursor",children:"Switching back to single cursor"}),"\n",(0,t.jsxs)(i.p,{children:["To revert back to a single cursor, just press the ",(0,t.jsx)(i.code,{children:"Esc"})," key."]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"quick-edit",children:"Quick Edit"}),"\n",(0,t.jsxs)(i.p,{children:["With ",(0,t.jsx)(i.strong,{children:"Quick Edit"}),", you can edit your CSS file directly within HTML files."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/Features/quick-edit",children:"Read More"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"quick-docs",children:"Quick Docs"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Quick Docs"})," provides immediate access to documentation for code elements directly within the editor."]}),"\n",(0,t.jsx)(i.h3,{id:"accessing-quick-docs",children:"Accessing Quick Docs"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Right click on the element you want details about."}),"\n",(0,t.jsxs)(i.li,{children:["A context menu will appear, click on ",(0,t.jsx)(i.strong,{children:"Quick Docs"})," or simply press ",(0,t.jsx)(i.code,{children:"F1"})," to bring up Quick Docs directly."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Quick Docs Image",src:n(28772).A+"",title:"Right click on the element and select Quick Docs option",width:"508",height:"506"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"find-in-files",children:"Find in Files"}),"\n",(0,t.jsxs)(i.p,{children:["With ",(0,t.jsx)(i.strong,{children:"Find in Files"}),", you can search for specific text across multiple files within a project."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/Features/find-in-files",children:"Read More"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"auto-rename-tag",children:"Auto Rename Tag"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.strong,{children:"Auto Rename Tag"})," feature updates matching tags automatically when you rename one. It works with HTML, XHTML, HTM, XML, SVG, PHP, and JSP files."]}),"\n",(0,t.jsx)(i.h3,{id:"how-it-works",children:"How It Works"}),"\n",(0,t.jsx)(i.p,{children:"When you rename an opening or closing tag, the corresponding tag updates instantly."}),"\n",(0,t.jsx)(o.A,{src:"https://docs-images.phcode.dev/videos/editing-text/auto-rename-tag.mp4"}),"\n",(0,t.jsx)(i.h3,{id:"enablingdisabling-auto-rename-tag-feature",children:"Enabling/Disabling Auto Rename Tag feature"}),"\n",(0,t.jsx)(i.h4,{id:"toggle-the-feature",children:"Toggle the Feature"}),"\n",(0,t.jsxs)(i.p,{children:["To enable or disable the ",(0,t.jsx)(i.strong,{children:"Auto Rename Tag"})," feature, go to ",(0,t.jsx)(i.code,{children:"Edit"})," > ",(0,t.jsx)(i.code,{children:"Auto Rename HTML Tags"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Auto Rename Tag Disable Image",src:n(96448).A+"",title:"Click on Edit &amp; toggle Auto Rename HTML Tags option",width:"1787",height:"925"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.em,{children:["The ",(0,t.jsx)(i.strong,{children:"Auto Rename HTML Tags"})," feature is enabled by default."]})}),"\n",(0,t.jsx)(i.h4,{id:"temporary-disabling",children:"Temporary Disabling"}),"\n",(0,t.jsxs)(i.p,{children:["To temporarily disable tag synchronization for the current tag:\nPress ",(0,t.jsx)(i.code,{children:"ESC"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"To re-enable synchronization:\nMove your cursor out of the tag and then back into the tag."}),"\n",(0,t.jsx)(o.A,{src:"https://docs-images.phcode.dev/videos/editing-text/auto-rename-temp-disable.mp4"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"file-encoding",children:"File Encoding"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"File encoding"})," is the method used to represent text in a file by converting characters into bytes. We need it to ensure that text is displayed correctly across different platforms and to handle special characters or symbols. Phoenix Code Editor supports multiple file encoding formats."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:(0,t.jsx)(i.code,{children:"UTF-8"})})," is the default encoding format in Phoenix."]}),"\n",(0,t.jsx)(i.h3,{id:"set-encoding-of-a-file",children:"Set Encoding of a file"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Click on the ",(0,t.jsx)(i.code,{children:"utf8"})," button on the status bar. (UTF-8 represents the default encoding format)."]}),"\n",(0,t.jsx)(i.li,{children:"A list of available encoding formats will appear. Select your desired format, or start typing to filter and find matching options in the drop-down menu."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"File Encoding Image",src:n(49067).A+"",title:"Click on utf8 button on status bar and select the encoding format",width:"910",height:"1003"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"file-type-associations",children:"File Type Associations"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"File Type Associations"})," ",(0,t.jsx)(i.em,{children:"(Associating a file type with a language)"})," allows Phoenix Code Editor to provide language-specific features, such as syntax highlighting, code completion, and error checking, based on the file extension. This ensures that your files are treated according to their intended programming or markup language."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"When you create a new file, if the file extension is recognized, it is associated with the default language. If the extension is unknown, a generic text file is opened."})}),"\n",(0,t.jsx)(i.h3,{id:"associate-a-new-file-type-with-a-language",children:"Associate a new file type with a language"}),"\n",(0,t.jsxs)(i.p,{children:["To associate a new file type with a specific language in Phoenix Code Editor, use the Language dropdown button in the status bar. For example, if you want files with ",(0,t.jsx)(i.code,{children:".myjs"})," extension to be treated as JavaScript files, follow these steps:"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Create a new file with the desired extension. For our example, we create (newfile.myjs). By default, it will be associated with a Text file."}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.code,{children:"Text"})," button on the status bar."]}),"\n",(0,t.jsxs)(i.li,{children:["A list of all the supported languages will appear. Select the language you want to associate with the file type. For our example, we select ",(0,t.jsx)(i.code,{children:"JavaScript"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"File Association Image",src:n(12847).A+"",title:"Click on Text button on status bar and select the language",width:"930",height:"1011"})}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsxs)(i.li,{children:["At the top of the popup box, you\u2019ll find an option labeled ",(0,t.jsx)(i.code,{children:"Set as default for .myjs files"}),". Click on it."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Now, files with ",(0,t.jsx)(i.code,{children:".myjs"})," extension will be treated as JavaScript files."]}),"\n",(0,t.jsx)(o.A,{src:"https://docs-images.phcode.dev/videos/editing-text/file_association.mp4"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"beautify-code",children:"Beautify Code"}),"\n",(0,t.jsxs)(i.p,{children:["With ",(0,t.jsx)(i.strong,{children:"Beautify Code"}),", you can format your code to follow consistent styling rules, improving readability and making it easier to maintain."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/docs/Features/beautify-code",children:"Read More"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"insert-and-overwrite-mode",children:"Insert and Overwrite Mode"}),"\n",(0,t.jsxs)(i.p,{children:["Users can toggle between ",(0,t.jsx)(i.strong,{children:"Insert Mode"})," and ",(0,t.jsx)(i.strong,{children:"Overwrite Mode"})," for different text input behaviors."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"Insert Mode is enabled by default when you begin typing in a file."})}),"\n",(0,t.jsx)(i.h3,{id:"understanding-insert-mode",children:"Understanding Insert Mode"}),"\n",(0,t.jsxs)(i.p,{children:["When in ",(0,t.jsx)(i.strong,{children:"Insert Mode"}),", any text you type is inserted at the current cursor position, pushing the existing text to the right."]}),"\n",(0,t.jsx)(o.A,{src:"https://docs-images.phcode.dev/videos/editing-text/insert-mode-video.mp4"}),"\n",(0,t.jsx)(i.h3,{id:"understanding-overwrite-mode",children:"Understanding Overwrite Mode"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Overwrite Mode"})," replaces the existing text at the cursor position with the new text you type. Instead of pushing text to the right, it overwrites the characters directly under the cursor."]}),"\n",(0,t.jsx)(o.A,{src:"https://docs-images.phcode.dev/videos/editing-text/overwrite-mode-video.mp4"}),"\n",(0,t.jsx)(i.h3,{id:"toggle-between-insert-mode--overwrite-mode",children:"Toggle between Insert Mode & Overwrite Mode"}),"\n",(0,t.jsx)(i.h4,{id:"using-editor-interface",children:(0,t.jsx)(i.strong,{children:"Using Editor Interface"})}),"\n",(0,t.jsxs)(i.p,{children:["Click on the ",(0,t.jsx)(i.code,{children:"INS(OVR)"})," button on the status bar to toggle between Insert Mode and Overwrite Mode. ",(0,t.jsx)(i.code,{children:"INS"})," represents Insert Mode. ",(0,t.jsx)(i.code,{children:"OVR"})," represents Overwrite Mode."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Insert/Overwrite Mode Image",src:n(15464).A+"",title:"Click on INS/OVR button on status bar to toggle between Insert and Overwrite Mode",width:"443",height:"39"})}),"\n",(0,t.jsx)(i.h4,{id:"using-keyboard",children:(0,t.jsx)(i.strong,{children:"Using Keyboard"})}),"\n",(0,t.jsxs)(i.p,{children:["Press the ",(0,t.jsx)(i.code,{children:"Ins"})," or the Insert key to toggle between Insert Mode and Overwrite Mode."]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"auto-space-detection",children:"Auto Space Detection"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.strong,{children:"Auto Space Detection"})," feature in Phoenix Code Editor is designed to automatically detect and adapt to the indentation style used in your files, whether it\u2019s tabs or spaces."]}),"\n",(0,t.jsx)(i.h3,{id:"automatic-and-fixed-modes",children:"Automatic and Fixed Modes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Auto mode"}),": Automatically detects and applies the indentation style (tabs or spaces) based on the existing code in the file."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Fixed mode"}),": Locks the editor to use a specific indentation style, regardless of the existing formatting in the file."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"toggle-between-auto-mode--fixed-mode",children:"Toggle between Auto Mode & Fixed Mode"}),"\n",(0,t.jsxs)(i.p,{children:["When you open a new file, by default it is set to ",(0,t.jsx)(i.code,{children:"Auto"})," mode, but you can easily switch to ",(0,t.jsx)(i.code,{children:"Fixed"})," mode."]}),"\n",(0,t.jsxs)(i.p,{children:["In the editor's status bar, you\u2019ll find the ",(0,t.jsx)(i.code,{children:"Auto"})," button. When clicked, it toggles between ",(0,t.jsx)(i.code,{children:"Auto"})," and ",(0,t.jsx)(i.code,{children:"Fixed"})," modes."]}),"\n",(0,t.jsxs)(i.p,{children:["You can toggle between spaces and tab size by clicking the ",(0,t.jsx)(i.code,{children:"Tab Size"})," or ",(0,t.jsx)(i.code,{children:"Spaces"})," button in the status bar."]}),"\n",(0,t.jsx)(i.p,{children:"You can adjust the tab size width or number of spaces by clicking the value in the status bar and modifying it as needed."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Auto Space Detection Image",src:n(85926).A+"",title:"Auto mode automatically detects and adapts to the indentation style",width:"906",height:"87"})}),"\n",(0,t.jsx)(i.h3,{id:"quick-tips",children:"Quick Tips"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["If you need to recompute the tab spacing configuration for a file, toggle the ",(0,t.jsx)(i.code,{children:"Auto"})," button twice (switch to Fixed mode and back to Auto). This will refresh the spacing settings for the current file."]}),"\n",(0,t.jsxs)(i.li,{children:["Switching to ",(0,t.jsx)(i.code,{children:"Fixed"})," mode will apply a fixed spacing across the system."]}),"\n",(0,t.jsxs)(i.li,{children:["You can use the ",(0,t.jsx)(i.code,{children:"Beautify Code"})," feature to reformat the file according to the new tab size or spacing settings after making changes(use ",(0,t.jsx)(i.code,{children:"Ctrl-B"})," in Windows/Linux, ",(0,t.jsx)(i.code,{children:"Cmd-B"})," in macOS or ",(0,t.jsx)(i.code,{children:"right-click"})," and select ",(0,t.jsx)(i.code,{children:"Beautify Code"}),")."]}),"\n"]}),"\n",(0,t.jsx)(o.A,{src:"https://docs-images.phcode.dev/videos/editing-text/beautify_format.mp4",winLinuxTitle:"Beautify Code: Ctrl + B",macTitle:"Beautify Code: Cmd + B"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"no-distractions-mode",children:"No-Distractions Mode"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"No-Distractions Mode"})," helps you focus by minimizing visual clutter and hiding non-essential interface elements, creating a clean, minimalist editing environment."]}),"\n",(0,t.jsx)(i.h3,{id:"activating-no-distractions-mode",children:"Activating No-Distractions Mode"}),"\n",(0,t.jsxs)(i.h4,{id:"using-editor-interface-",children:[(0,t.jsx)(i.strong,{children:"Using Editor Interface"})," :"]}),"\n",(0,t.jsxs)(i.p,{children:["Toggle between ",(0,t.jsx)(i.code,{children:"No-Distractions"})," Mode and ",(0,t.jsx)(i.code,{children:"Normal"})," Mode through ",(0,t.jsx)(i.code,{children:"View > Menu"})," option."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"No Distractions Mode Image",src:n(48246).A+"",title:"Click on View tab in menu bar and select No Distractions",width:"753",height:"517"})}),"\n",(0,t.jsxs)(i.h4,{id:"using-keyboard--1",children:[(0,t.jsx)(i.strong,{children:"Using Keyboard"})," :"]}),"\n",(0,t.jsxs)(i.p,{children:["Press ",(0,t.jsx)(i.code,{children:"Shift + F11"})," to toggle between ",(0,t.jsx)(i.code,{children:"No-Distractions"})," Mode and ",(0,t.jsx)(i.code,{children:"Normal"})," Mode."]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"file-recovery",children:"File Recovery"}),"\n",(0,t.jsx)(i.p,{children:"Phoenix Code Editor has a built-in file recovery feature to help you retrieve unsaved changes after unexpected events like crashes or accidental closures."}),"\n",(0,t.jsx)(i.h3,{id:"recovering-files-after-a-crash",children:"Recovering Files after a crash"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Reopen the Editor"}),": If there are any unsaved changes from the previous session, a dialog box will appear, with two options ",(0,t.jsx)(i.code,{children:"Discard"})," and ",(0,t.jsx)(i.code,{children:"Restore"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"File Recovery Dialog Box Image",src:n(67257).A+"",title:"Click Restore to recover all the unsaved changes",width:"400",height:"221"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Restore Changes"}),": To recover your unsaved files, simply click the ",(0,t.jsx)(i.code,{children:"Restore"})," button. This action will reinstate all the changes you made to the files before the last save."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Discard Changes"}),": To remove the unsaved changes, click ",(0,t.jsx)(i.code,{children:"Discard"}),".",(0,t.jsx)(i.br,{}),"\n",(0,t.jsx)(i.em,{children:"Note: This will permanently delete the data."})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},56399:(e,i,n)=>{n.d(i,{A:()=>o});var t=n(96540),s=n(74848);const o=e=>{let{src:i,winLinuxTitle:n,macTitle:o}=e;const[d,r]=(0,t.useState)("");(0,t.useEffect)((()=>{navigator.platform.toLowerCase().includes("mac")?r(o):r(n)}),[n,o]);return(0,s.jsxs)("div",{style:{maxHeight:"68vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,s.jsxs)("video",{style:{height:"90%",width:"100%"},controls:!0,autoPlay:!0,muted:!0,loop:!0,children:[(0,s.jsx)("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,s.jsx)("div",{style:{width:"100%",textAlign:"center",fontSize:"1em",marginTop:"10px"},children:d})]})}},96448:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/auto-rename-tag-be192184dd67f581688f906ca00eddaf.png"},85926:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/auto-spacing-f95f4ad94872c5fbbee504a125215035.png"},12847:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/file-association-fe9fbd627e34eaad9b5f0add2c39e169.png"},49067:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/file-encoding-c19da2809b2fa0272b04962466b77ea1.png"},67257:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/file-recovery-a5ab330c0d12c63cfc0aede20a218422.png"},48246:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/no-distractions-55a29450d30f7cd7c911ef741ee35278.png"},28772:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/quick-docs-f23cc8636c9a7f8aaec899a6196ed91d.png"},15464:(e,i,n)=>{n.d(i,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>r});var t=n(96540);const s={},o=t.createContext(s);function d(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);