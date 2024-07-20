"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[782],{6979:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(4848),i=n(8453);const o={},s="Editor Rulers",l={id:"Features/editor-rulers",title:"Editor Rulers",description:"Add vertical column rulers to the editor to keep track of line lengths. By",source:"@site/docs/03-Features/06-editor-rulers.md",sourceDirName:"03-Features",slug:"/Features/editor-rulers",permalink:"/docs/Features/editor-rulers",draft:!1,unlisted:!1,editUrl:"https://github.com/phcode-dev/docs/blob/main/docs/03-Features/06-editor-rulers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change Keyboard Shortcuts",permalink:"/docs/Features/keyboard-shortcuts"},next:{title:"Editor Rulers",permalink:"/docs/Features/editor-rulers"}},d={},c=[{value:"Enabling and Disabling Rulers",id:"enabling-and-disabling-rulers",level:3},{value:"Adding Multiple Rulers",id:"adding-multiple-rulers",level:2},{value:"Configuration Options",id:"configuration-options",level:4},{value:"FAQ",id:"faq",level:2},{value:"Q: How do I add different rulers for each project?",id:"q-how-do-i-add-different-rulers-for-each-project",level:4}];function a(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"editor-rulers",children:"Editor Rulers"}),"\n",(0,t.jsx)(r.p,{children:"Add vertical column rulers to the editor to keep track of line lengths. By\ndefault, a single ruler is set at the 120-character position."}),"\n",(0,t.jsx)(r.h3,{id:"enabling-and-disabling-rulers",children:"Enabling and Disabling Rulers"}),"\n",(0,t.jsxs)(r.p,{children:["Toggle the visibility of rulers through the ",(0,t.jsx)(r.code,{children:"View > Rulers"})," menu option."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/phcode-dev/phoenix/assets/5336369/bb68fafa-395c-4da6-8aa2-a617918286ce",alt:"Screenshot from 2024-04-27 12-42-50"})}),"\n",(0,t.jsx)(r.h2,{id:"adding-multiple-rulers",children:"Adding Multiple Rulers"}),"\n",(0,t.jsx)(r.p,{children:"To add multiple rulers, edit the preferences file:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Navigate to ",(0,t.jsx)(r.code,{children:"File > Open Preferences File"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"Add the following entries to the JSON configuration:"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'{\n    // existing json items\n    "editor.rulers": [40, 80],\n    "editor.rulerColors": ["green", "#f34d5a"],\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"These settings introduce two rulers at the 40th and 80th character positions,\ncolored green and red respectively."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/phcode-dev/phoenix/assets/5336369/71b8b04c-d2ca-47b8-84bb-53cd0fb4593c",alt:"image"})}),"\n",(0,t.jsx)(r.h4,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"editor.rulers"})," : Specifies an array of column numbers where vertical rulers\nwill appear."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"editor.rulerColors"})," : An optional array to set colors for each ruler,\ncorresponding to the positions listed in ",(0,t.jsx)(r.code,{children:"editor.rulers"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(r.h4,{id:"q-how-do-i-add-different-rulers-for-each-project",children:"Q: How do I add different rulers for each project?"}),"\n",(0,t.jsxs)(r.p,{children:["To set up different rulers for individual projects, create a ",(0,t.jsx)(r.code,{children:".phcode.json"})," file\nin the root directory of each project. Include the same ruler configurations as\nshown in the example above."]})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>l});var t=n(6540);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);