"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5582],{88481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"How-To/StatusBar","title":"Add an indicator icon on the status bar","description":"This document outlines the basic features of working with Status Bar, including:","source":"@site/api/07-How-To/StatusBar.md","sourceDirName":"07-How-To","slug":"/How-To/StatusBar","permalink":"/api/How-To/StatusBar","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Add an indicator icon on the status bar"},"sidebar":"tutorialSidebar","previous":{"title":"How to create Panels","permalink":"/api/How-To/Panels"},"next":{"title":"Preferences","permalink":"/api/API-Reference/JSUtils/Preferences"}}');var s=n(74848),i=n(28453);const d={title:"Add an indicator icon on the status bar"},o=void 0,a={},c=[{value:"Adding a button on Status Bar",id:"adding-a-button-on-status-bar",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This document outlines the basic features of working with Status Bar, including:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#adding-a-button-on-status-bar",children:"How to add a button on Status Bar"})}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"adding-a-button-on-status-bar",children:"Adding a button on Status Bar"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Import the ",(0,s.jsx)(t.code,{children:"StatusBar"})," module."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'const StatusBar = brackets.getModule("widgets/StatusBar");\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Register the command."}),"\n",(0,s.jsx)(t.p,{children:"Register the command that will trigger the clicking."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'var MY_COMMAND_ID = "helloworld_sayhello";\nCommandManager.register("Hello World", MY_COMMAND_ID, handleHelloWorld);\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Add the button to the StatusBar."}),"\n",(0,s.jsxs)(t.p,{children:["To add the button to StatusBar, use ",(0,s.jsx)(t.code,{children:"addIndicator()"})," :-"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'StatusBar.addIndicator(\n    MY_COMMAND_ID, // unique ID for this indicator\n    $("<div>Test</div>").click(handleHelloWorld), // Optional DOMNode for the indicator\n    true, // show the indicator\n    "hello-world-status", // CSS class\n    "tooltip", // tooltip text\n);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\u2192 The parameters of the ",(0,s.jsx)(t.code,{children:"addIndicator()"})," method :-"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"Registration id of the indicator to be updated."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[indicator]"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"DOMNode"})," or ",(0,s.jsx)(t.code,{children:"jQueryObject"})]}),(0,s.jsx)(t.td,{children:"Optional DOMNode for the indicator"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[visible]"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:"Shows or hides the indicator over the statusbar."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[style]"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:'Sets the attribute "class" of the indicator.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[tooltip]"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:'Sets the attribute "title" of the indicator.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[insertBefore]"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"An id of an existing status bar indicator. The new indicator will be inserted before (i.e. to the left of)          the indicator specified by this parameter."})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["For a detailed description, refer to ",(0,s.jsx)(t.a,{href:"https://docs.phcode.dev/api/API-Reference/widgets/StatusBar",children:"this link"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);