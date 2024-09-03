"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1876],{71966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453),r=(n(96540),n(56399));const o={title:"Beautify Code"},a=void 0,l={id:"Features/beautify-code",title:"Beautify Code",description:"The Beautify Code feature ensures your code is consistently formatted, improving readability and maintainability. It automatically aligns your code with your preferred style, taking into account indentation, spacing, and other formatting rules.",source:"@site/docs/04-Features/06-beautify-code.md",sourceDirName:"04-Features",slug:"/Features/beautify-code",permalink:"/docs/Features/beautify-code",draft:!1,unlisted:!1,editUrl:"https://github.com/phcode-dev/docs/blob/main/docs/04-Features/06-beautify-code.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Beautify Code"},sidebar:"tutorialSidebar",previous:{title:"Change Keyboard Shortcuts",permalink:"/docs/Features/keyboard-shortcuts"},next:{title:"Editor Rulers",permalink:"/docs/Features/editor-rulers"}},d={},c=[{value:"How to Use",id:"how-to-use",level:2},{value:"Context Menu :",id:"context-menu-",level:3},{value:"Keyboard Shortcut :",id:"keyboard-shortcut-",level:3},{value:"Automatic Formatting on Save",id:"automatic-formatting-on-save",level:2},{value:"Customizing Beautify Code",id:"customizing-beautify-code",level:2},{value:"Modifying Indentation with Beautify Code",id:"modifying-indentation-with-beautify-code",level:2},{value:"Visual Demonstration",id:"visual-demonstration",level:2}];function h(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Beautify Code"})," feature ensures your code is consistently formatted, improving readability and maintainability. It automatically aligns your code with your preferred style, taking into account indentation, spacing, and other formatting rules."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,i.jsx)(t.p,{children:"You can format your code using Beautify Code through the following methods:"}),"\n",(0,i.jsx)(t.h3,{id:"context-menu-",children:"Context Menu :"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Right-click in the editor."}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.strong,{children:"Beautify Code"})," from the context menu."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Beautify Code Context Menu Image",src:n(45152).A+"",title:"Click on Beautify Code option",width:"907",height:"911"})}),"\n",(0,i.jsx)(t.h3,{id:"keyboard-shortcut-",children:"Keyboard Shortcut :"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Press ",(0,i.jsx)(t.code,{children:"Ctrl+B"})," to format your code. (",(0,i.jsx)(t.code,{children:"Cmd+B"})," in MacOS)"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": ",(0,i.jsx)(t.em,{children:"You can also format just a selected part of your code using the Beautify Code feature. However, this option will only work if the selected code is syntactically valid."})]}),"\n",(0,i.jsx)(t.h2,{id:"automatic-formatting-on-save",children:"Automatic Formatting on Save"}),"\n",(0,i.jsx)(t.p,{children:"To automatically format your code every time you save :"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.code,{children:"Edit"})," > ",(0,i.jsx)(t.code,{children:"Beautify Code After Save"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Toggle this option on.\n",(0,i.jsx)(t.img,{alt:"Beautify Code after Save Image",src:n(18675).A+"",title:"Click on Beautify Code After Save",width:"1184",height:"986"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"customizing-beautify-code",children:"Customizing Beautify Code"}),"\n",(0,i.jsx)(t.p,{children:"You can adjust the settings for Beautify Code to match your coding preferences:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.code,{children:"File"})," > ",(0,i.jsx)(t.code,{children:"Open Preferences File"}),".\nWhen you open the preferences, two files will appear:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"defaultPreferences.json"})," on the left pane: This file contains the default settings and is not editable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"phcode.json"})," on the right pane: This is the file you should edit to customize your settings."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Look for the section named ",(0,i.jsx)(t.code,{children:"beautify.options"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "beautify.options": {\n        "bracketSameLine": true,\n        "printWidth": 120,\n        "proseWrap": "preserve",\n        "quoteProps": "as-needed",\n        "semi": true,\n        "singleAttributePerLine": false,\n        "singleQuote": false,\n        "trailingComma": "none"\n    }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Modify the options as needed to control aspects like :"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"bracketSameLine"})," :- This option controls the placement of the closing > bracket in multi-line HTML, JSX, Vue, or Angular elements. When set to ",(0,i.jsx)(t.code,{children:"false"}),", the closing bracket is placed on its own line. Setting this option to ",(0,i.jsx)(t.code,{children:"true"})," positions the closing bracket at the end of the last line, aligning it with the content for a more compact and readable format, but this does not apply to self-closing elements."]}),"\n",(0,i.jsxs)(t.p,{children:["Default value of bracketSameLine is ",(0,i.jsx)(t.em,{children:"True"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["When set to ",(0,i.jsx)(t.em,{children:"True"})," :\n",(0,i.jsx)(t.img,{alt:"Bracket Same Line Image",src:n(5278).A+"",title:"bracketSameLine = true",width:"1091",height:"429"})]}),"\n",(0,i.jsxs)(t.p,{children:["When set to ",(0,i.jsx)(t.em,{children:"False"})," :\n",(0,i.jsx)(t.img,{alt:"Bracket Same Line Image",src:n(31581).A+"",title:"bracketSameLine = false",width:"1154",height:"494"})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"printWidth"}),": Sets the maximum line length for code formatting. The beautifier will wrap lines that exceed the number of characters specified by the ",(0,i.jsx)(t.code,{children:"printWidth"})," value."]}),"\n",(0,i.jsxs)(t.p,{children:["Default value of printWidth is ",(0,i.jsx)(t.em,{children:"120"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"proseWrap"}),": Determines how text in Markdown files is wrapped. The different values of ",(0,i.jsx)(t.code,{children:"proseWrap"})," are :\n",(0,i.jsx)(t.strong,{children:'"always"'}),": Automatically wraps prose to fit within the printWidth, regardless of original formatting.\n",(0,i.jsx)(t.strong,{children:'"never"'}),": Prevents any automatic wrapping, keeping prose as-is even if it exceeds the printWidth.\n",(0,i.jsx)(t.strong,{children:'"preserve"'}),": Maintains the original formatting of prose, wrapping text only where line breaks are already present."]}),"\n",(0,i.jsxs)(t.p,{children:["Default value of proseWrap is ",(0,i.jsx)(t.em,{children:"preserve"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"quoteProps"}),": Determines when properties in objects should be quoted:\n",(0,i.jsx)(t.strong,{children:'"as-needed"'}),": Quotes properties only when necessary, such as when a property name contains special characters or conflicts with reserved keywords.\n",(0,i.jsx)(t.strong,{children:'"consistent"'}),": Quotes all properties consistently based on the first property's quoting style. If the first property is quoted, all properties will be quoted, and vice versa.\n",(0,i.jsx)(t.strong,{children:'"preserve"'}),": Maintains the existing quoting style of properties, leaving them quoted or unquoted as they are in the original code."]}),"\n",(0,i.jsxs)(t.p,{children:["Default value of quoteProps is ",(0,i.jsx)(t.em,{children:"as-needed"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"semi"}),":  Determines whether to add a semicolon at the end of every statement. When set to ",(0,i.jsx)(t.code,{children:"true"}),", a semicolon is automatically inserted at the end of each statement. If set to ",(0,i.jsx)(t.code,{children:"false"}),", semicolons are omitted."]}),"\n",(0,i.jsxs)(t.p,{children:["Default value of semi is ",(0,i.jsx)(t.em,{children:"true"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"singleAttributePerLine"}),": Controls whether to enforce placing each attribute on a new line in HTML, Vue, and JSX elements. When set to ",(0,i.jsx)(t.code,{children:"false"}),", multiple attributes can be on the same line. If set to ",(0,i.jsx)(t.code,{children:"true"}),", each attribute will be placed on its own line."]}),"\n",(0,i.jsxs)(t.p,{children:["Default value of singleAttributePerLine is ",(0,i.jsx)(t.em,{children:"false"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["When set to ",(0,i.jsx)(t.em,{children:"True"})," :\n",(0,i.jsx)(t.img,{alt:"Single Attribute Per Line Image",src:n(58883).A+"",title:"singleAttributePerLine = true",width:"1322",height:"406"})]}),"\n",(0,i.jsxs)(t.p,{children:["When set to ",(0,i.jsx)(t.em,{children:"False"})," :\n",(0,i.jsx)(t.img,{alt:"Single Attribute Per Line Image",src:n(29146).A+"",title:"singleAttributePerLine = false",width:"1595",height:"108"})]}),"\n",(0,i.jsx)(t.hr,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"singleQuote"}),": Determines whether to use single quotes instead of double quotes in your code. When set to ",(0,i.jsx)(t.code,{children:"false"}),", double quotes are used for strings. If set to ",(0,i.jsx)(t.code,{children:"true"}),", single quotes are used instead."]}),"\n",(0,i.jsxs)(t.p,{children:["Default value of singleQuote is ",(0,i.jsx)(t.em,{children:"false"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["When set to ",(0,i.jsx)(t.em,{children:"True"})," :\n",(0,i.jsx)(t.img,{alt:"Single Quote Image",src:n(42331).A+"",title:"singleQuote = true",width:"1353",height:"123"})]}),"\n",(0,i.jsxs)(t.p,{children:["When set to ",(0,i.jsx)(t.em,{children:"False"})," :\n",(0,i.jsx)(t.img,{alt:"Single Quote Image",src:n(90130).A+"",title:"singleQuote = false",width:"1370",height:"129"})]}),"\n",(0,i.jsx)(t.hr,{}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"trailingComma"}),": Controls the use of trailing commas in multi-line comma-separated structures.\n",(0,i.jsx)(t.strong,{children:'"none"'}),":  No trailing commas are added.\n",(0,i.jsx)(t.strong,{children:'"es5"'}),":  Adds trailing commas where valid in ES5 (e.g., in objects, arrays, etc., but not in function parameters).\n",(0,i.jsx)(t.strong,{children:'"all"'}),":  Adds trailing commas in all possible places, including function parameters and imports."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": ",(0,i.jsx)(t.code,{children:"All JavaScript environments does not support trailing commas in function parameters, and including them could cause compatibility issues."})]}),"\n",(0,i.jsxs)(t.p,{children:["Default value of trailingComma is ",(0,i.jsx)(t.em,{children:"none"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["When set to ",(0,i.jsx)(t.em,{children:"none"}),":\n",(0,i.jsx)(t.img,{alt:"Trailing Comma Image",src:n(45651).A+"",title:"trailingComma = none",width:"901",height:"344"})]}),"\n",(0,i.jsxs)(t.p,{children:["When set to ",(0,i.jsx)(t.em,{children:"es5"}),":\n",(0,i.jsx)(t.img,{alt:"Trailing Comma Image",src:n(11172).A+"",title:"trailingComma = es5",width:"967",height:"334"})]}),"\n",(0,i.jsxs)(t.p,{children:["When set to ",(0,i.jsx)(t.em,{children:"all"}),":\n",(0,i.jsx)(t.img,{alt:"Trailing Comma Image",src:n(93336).A+"",title:"trailingComma = all",width:"1550",height:"288"})]}),"\n",(0,i.jsx)(t.hr,{}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"modifying-indentation-with-beautify-code",children:"Modifying Indentation with Beautify Code"}),"\n",(0,i.jsx)(t.p,{children:"To adjust the indentation style or size in your code, use the Spaces/Tabs button in the status bar."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Toggle between spaces and tabs"}),": Click on the button to switch between ",(0,i.jsx)(t.code,{children:"spaces"})," or ",(0,i.jsx)(t.code,{children:"tabs"})," for indentation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Adjust the number of spaces or tabs"}),": Click on the value in the status bar beside ",(0,i.jsx)(t.code,{children:"spaces"}),"/",(0,i.jsx)(t.code,{children:"tabs"})," and modify it as required to select your desired indentation size."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["After you change the indentation style or size, use ",(0,i.jsx)(t.strong,{children:"Beautify Code"})," to reformat the entire file."]}),"\n",(0,i.jsx)(t.h2,{id:"visual-demonstration",children:"Visual Demonstration"}),"\n",(0,i.jsx)(r.A,{src:"https://docs-images.phcode.dev/videos/editing-text/beautify_format.mp4",winLinuxTitle:"Beautify Code: Ctrl + B",macTitle:"Beautify Code: Cmd + B"})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},56399:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(96540),s=n(74848);const r=e=>{let{src:t,winLinuxTitle:n,macTitle:r}=e;const[o,a]=(0,i.useState)("");(0,i.useEffect)((()=>{navigator.platform.toLowerCase().includes("mac")?a(r):a(n)}),[n,r]);return(0,s.jsxs)("div",{style:{maxHeight:"68vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,s.jsxs)("video",{style:{height:"90%",width:"100%"},controls:!0,autoPlay:!0,muted:!0,loop:!0,children:[(0,s.jsx)("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,s.jsx)("div",{style:{width:"100%",textAlign:"center",fontSize:"1em",marginTop:"10px"},children:o})]})}},18675:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Beautify-Code-after-save-82acb2723da86a54d9302d0874831c2b.png"},45152:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Context-Menu-8173aa5d559f358ddc3fd6054581e178.png"},31581:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/bracketSameLine-false-5cddd00f353ce49fe53bc4a15e92a4d8.png"},5278:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/bracketSameLine-true-49e7c4cffaa9809a9cd50a55cedf707f.png"},29146:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/singleAttributePerLine-false-2813438e4f99ec944ceb3f903ba7dd9f.png"},58883:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/singleAttributePerLine-true-16ca7e6cae6aa418a6a57e214175630b.png"},90130:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/singleQuotes-false-2ebb32c4c58a77cd4ef3e8a9f7c06cf7.png"},42331:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/singleQuotes-true-cfa5db909f6d80e807c8b75697db6c45.png"},93336:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/trailingComma-all-d7612732831ca0714af8ed936c6aa2fb.png"},11172:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/trailingComma-es5-bab95c16817f40598bc90a5d50ae0e2e.png"},45651:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/trailingComma-none-8968557a47087024c5a4121896440004.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);