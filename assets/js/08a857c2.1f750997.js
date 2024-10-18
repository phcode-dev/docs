"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1711],{25064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var r=t(74848),i=t(28453);const c={},d=void 0,s={id:"API-Reference/preferences/StateManager",title:"StateManager",description:"Import :",source:"@site/api/API-Reference/preferences/StateManager.md",sourceDirName:"API-Reference/preferences",slug:"/API-Reference/preferences/StateManager",permalink:"/api/API-Reference/preferences/StateManager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PreferencesDialogs",permalink:"/api/API-Reference/preferences/PreferencesDialogs"},next:{title:"FileSyncManager",permalink:"/api/API-Reference/project/FileSyncManager"}},l={},a=[{value:"Import :",id:"import-",level:3},{value:"_",id:"_",level:2},{value:"getVal(id, [context])",id:"getvalid-context",level:2},{value:"setVal(id, value, [context])",id:"setvalid-value-context",level:2},{value:"definePreferenceInternal(id, type, initial, options) \u21d2 <code>Object</code>",id:"definepreferenceinternalid-type-initial-options--object",level:2}];function o(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const StateManager = brackets.getModule("preferences/StateManager")\n'})}),"\n",(0,r.jsx)("a",{name:"_"}),"\n",(0,r.jsx)(n.h2,{id:"_",children:"_"}),"\n",(0,r.jsx)(n.p,{children:"StateManager"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global constant"]}),"\n",(0,r.jsx)("a",{name:"getVal"}),"\n",(0,r.jsx)(n.h2,{id:"getvalid-context",children:"getVal(id, [context])"}),"\n",(0,r.jsx)(n.p,{children:"Convenience function that gets a view state"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"preference to get"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[context]"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("code",{children:"Object"})," | ",(0,r.jsx)("code",{children:"string"})]}),(0,r.jsx)(n.td,{children:"Optional additional information about the request, can be:  - ScopeManager.PROJECT_CONTEXT  if you want to get project specific value  or  - ScopeManager.GLOBAL_CONTEXT if you want to get it from global context and not the project context.  - null/undefined if you want to get from project context first, and then global context if not found in project context."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[context.scope]"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"Eg. user - deprecated, do not use"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[context.layer]"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"Eg. project - deprecated, do not use"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[context.layerID]"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"Eg. /tauri/path/to/project - deprecated, do not use"})]})]})]}),"\n",(0,r.jsx)("a",{name:"setVal"}),"\n",(0,r.jsx)(n.h2,{id:"setvalid-value-context",children:"setVal(id, value, [context])"}),"\n",(0,r.jsx)(n.p,{children:"Convenience function that sets a view state and then saves the file"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"preference to set"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"*"})}),(0,r.jsx)(n.td,{children:"new value for the preference"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[context]"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("code",{children:"Object"})," | ",(0,r.jsx)("code",{children:"string"})]}),(0,r.jsx)(n.td,{children:"Optional additional information about the request, can be:  ScopeManager.PROJECT_CONTEXT  if you want to get project specific value  or  ScopeManager.GLOBAL_CONTEXT or null if you want to set globally."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[context.scope]"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"Eg. user - deprecated, do not use"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[context.layer]"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"Eg. project - deprecated, do not use"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[context.layerID]"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"Eg. /tauri/path/to/project - deprecated, do not use"})]})]})]}),"\n",(0,r.jsx)("a",{name:"definePreferenceInternal"}),"\n",(0,r.jsxs)(n.h2,{id:"definepreferenceinternalid-type-initial-options--object",children:["definePreferenceInternal(id, type, initial, options) \u21d2 ",(0,r.jsx)("code",{children:"Object"})]}),"\n",(0,r.jsxs)(n.p,{children:["returns a preference instance that can be listened ",(0,r.jsx)(n.code,{children:'.on("change", cbfn(changeType))'})," . The callback fucntion will be called\rwhenever there is a change in the supplied id with a changeType argument. The change type can be one of the two:\rCHANGE_TYPE_INTERNAL - if change is made within the current app window/browser tap\rCHANGE_TYPE_EXTERNAL - if change is made in a different app window/browser tab"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Param"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"id"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"type"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"initial"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"options"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var r=t(96540);const i={},c=r.createContext(i);function d(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);