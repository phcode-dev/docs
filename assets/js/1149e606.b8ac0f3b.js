"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3199],{92657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"API-Reference/widgets/PopUpManager","title":"PopUpManager","description":"Import :","source":"@site/api/API-Reference/widgets/PopUpManager.md","sourceDirName":"API-Reference/widgets","slug":"/API-Reference/widgets/PopUpManager","permalink":"/api/API-Reference/widgets/PopUpManager","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"NotificationUI","permalink":"/api/API-Reference/widgets/NotificationUI"},"next":{"title":"StatusBar","permalink":"/api/API-Reference/widgets/StatusBar"}}');var r=t(74848),s=t(28453);const i={},d=void 0,p={},l=[{value:"Import :",id:"import-",level:3},{value:"AppInit",id:"appinit",level:2},{value:"addPopUp($popUp, removeHandler, autoRemove, options)",id:"addpopuppopup-removehandler-autoremove-options",level:2},{value:"removePopUp($popUp)",id:"removepopuppopup",level:2},{value:"listenToContextMenu(contextMenu)",id:"listentocontextmenucontextmenu",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const PopUpManager = brackets.getModule("widgets/PopUpManager")\n'})}),"\n",(0,r.jsx)("a",{name:"AppInit"}),"\n",(0,r.jsx)(n.h2,{id:"appinit",children:"AppInit"}),"\n",(0,r.jsx)(n.p,{children:"Utilities for managing pop-ups."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,r.jsx)("a",{name:"addPopUp"}),"\n",(0,r.jsx)(n.h2,{id:"addpopuppopup-removehandler-autoremove-options",children:"addPopUp($popUp, removeHandler, autoRemove, options)"}),"\n",(0,r.jsx)(n.p,{children:"Add Esc key handling for a popup DOM element."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$popUp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"jQuery"})}),(0,r.jsx)(n.td,{children:"jQuery object for the DOM element pop-up"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"removeHandler"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"function"})}),(0,r.jsxs)(n.td,{children:["Pop-up specific remove (e.g. display",":none"," or DOM removal)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"autoRemove"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Boolean"})}),(0,r.jsx)(n.td,{children:"Specify true to indicate the PopUpManager should      remove the popup from the _popUps array when the popup is closed. Specify false      when the popup is always persistant in the _popUps array."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options.popupManagesFocus"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"boolean"})}),(0,r.jsx)(n.td,{children:"set to true if the popup manages focus restore on close"})]})]})]}),"\n",(0,r.jsx)("a",{name:"removePopUp"}),"\n",(0,r.jsx)(n.h2,{id:"removepopuppopup",children:"removePopUp($popUp)"}),"\n",(0,r.jsx)(n.p,{children:"Remove Esc key handling for a pop-up. Removes the pop-up from the DOM\nif the pop-up is currently visible and was not originally attached."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$popUp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"jQuery"})})]})})]}),"\n",(0,r.jsx)("a",{name:"listenToContextMenu"}),"\n",(0,r.jsx)(n.h2,{id:"listentocontextmenucontextmenu",children:"listenToContextMenu(contextMenu)"}),"\n",(0,r.jsx)(n.p,{children:"Context menus are also created in AppInit.htmlReady(), so they may not\nyet have been created when we get our AppInit.htmlReady() callback, so\nwe provide this method to tell us when to start listening for their events"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"contextMenu"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"ContextMenu"})})]})})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);