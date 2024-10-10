"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2805],{54707:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(74848),n=t(28453);const s={},o="Custom Live Preview Server",l={id:"Features/live-preview-settings",title:"Custom Live Preview Server",description:"Phoenix Code now allows you to integrate your custom development server directly into the editor, enabling a live preview of your project as it would appear when served by your server. This is especially useful for dynamic projects that rely on server-side languages like PHP or frameworks like React that supports hot reloading.",source:"@site/docs/05-Features/02-live-preview-settings.md",sourceDirName:"05-Features",slug:"/Features/live-preview-settings",permalink:"/docs/Features/live-preview-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/phcode-dev/docs/blob/main/docs/05-Features/02-live-preview-settings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Live Preview",permalink:"/docs/Features/live-preview"},next:{title:"PHP Live Preview Setup",permalink:"/docs/Features/php-live-preview"}},a={},c=[{value:"Accessing Live Preview Settings",id:"accessing-live-preview-settings",level:2},{value:"Configuring Your Server",id:"configuring-your-server",level:2},{value:"Hot Reloading",id:"hot-reloading",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"custom-live-preview-server",children:"Custom Live Preview Server"})}),"\n",(0,i.jsx)(r.p,{children:"Phoenix Code now allows you to integrate your custom development server directly into the editor, enabling a live preview of your project as it would appear when served by your server. This is especially useful for dynamic projects that rely on server-side languages like PHP or frameworks like React that supports hot reloading."}),"\n",(0,i.jsx)(r.h2,{id:"accessing-live-preview-settings",children:"Accessing Live Preview Settings"}),"\n",(0,i.jsx)(r.p,{children:"There are two ways to access the Live Preview Settings dialog:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"From the File Menu"}),":","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Navigate to the 'File' menu at the top left of the editor."}),"\n",(0,i.jsxs)(r.li,{children:["Select 'Live Preview Settings' from the dropdown.\n",(0,i.jsx)(r.img,{alt:"live-preview-settings",src:t(73411).A+"",width:"278",height:"435"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"From the Live Preview Panel"}),":","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Locate the live preview panel, typically found at the right side of the editor."}),"\n",(0,i.jsxs)(r.li,{children:["Hover over the live preview panel title bar and click the gear icon (\u2699\ufe0f) located at the top right of the panel title bar.\n",(0,i.jsx)(r.img,{alt:"live-preview-settings",src:t(8915).A+"",width:"1354",height:"351"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"configuring-your-server",children:"Configuring Your Server"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"settings-dialog",src:t(5714).A+"",width:"617",height:"418"})}),"\n",(0,i.jsx)(r.p,{children:"Within the Live Preview Settings dialog, you can configure the following options:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Show Live Preview Panel at Startup"}),": Check this option if you want the live preview panel to open automatically when you launch Phoenix Code."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Use Custom Development Server for This Project"}),": Enable this option to use your custom server for the live preview."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Server URL"}),": Enter the full URL where your server is running, including the port number (e.g., ",(0,i.jsx)(r.code,{children:"http://localhost:8000"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Serving Folder in Project"}),": Specify the path to the folder in your project that your server serves (e.g., ",(0,i.jsx)(r.code,{children:"www/"}),", default is ",(0,i.jsx)(r.code,{children:"/"}),", ie the full project is assumed to be served by the given server)."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Server Framework"}),": Choose the framework or environment your server uses from the dropdown menu. If your server supports hot reloading, check the corresponding box to enable this feature. Currently 2 options are supported- ",(0,i.jsx)(r.a,{href:"https://docusaurus.io/",children:"Docusaurus"})," and ",(0,i.jsx)(r.code,{children:"Custom"}),". Select ",(0,i.jsx)(r.code,{children:"Custom"})," for all frameworks that are not ",(0,i.jsx)(r.code,{children:"Docusaurus"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"After configuring these settings, click 'Done' to save and apply your settings. The live preview will now use your custom server."}),"\n",(0,i.jsx)(r.h2,{id:"hot-reloading",children:"Hot Reloading"}),"\n",(0,i.jsx)(r.p,{children:"Hot reloading is a feature that automatically updates a web application during development whenever code changes are made, without requiring a manual refresh or losing state. Servers like Webpack Dev Server for JavaScript applications, Flask with Flask-Webpack for Python, and Rails with Webpacker for Ruby on Rails support hot reloading."}),"\n",(0,i.jsx)(r.p,{children:"In Phoenix Code, if your server supports hot reloading, check the 'Server supports hot reload' checkbox. This lets Phoenix Code update changed components only and prevent full page reloads on code changes. Unchecked, it refreshes the whole page on every save."})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5714:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/settings-dialog-554a5e9f6affb5c9839b1256d102ad76.png"},8915:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/settings-gear-d0b90a53f60d63b819f0aec125b63add.png"},73411:(e,r,t)=>{t.d(r,{A:()=>i});const i=t.p+"assets/images/settings-menu-d4bab271b048a441dc67e56418769ded.png"},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>l});var i=t(96540);const n={},s=i.createContext(n);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);