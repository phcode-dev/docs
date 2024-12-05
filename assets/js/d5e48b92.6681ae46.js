"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3282],{79873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"API-Reference/preferences/PreferencesManager","title":"PreferencesManager","description":"Import :","source":"@site/api/API-Reference/preferences/PreferencesManager.md","sourceDirName":"API-Reference/preferences","slug":"/API-Reference/preferences/PreferencesManager","permalink":"/api/API-Reference/preferences/PreferencesManager","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"XMLUtils","permalink":"/api/API-Reference/language/XMLUtils"},"next":{"title":"StateManager","permalink":"/api/API-Reference/preferences/StateManager"}}');var s=t(74848),i=t(28453);const c={},d=void 0,l={},o=[{value:"Import :",id:"import-",level:3},{value:"AppInit",id:"appinit",level:2},{value:"CURRENT_PROJECT : <code>Object</code>",id:"current_project--object",level:2},{value:"scopeOrderWithProject",id:"scopeorderwithproject",level:2},{value:"scopeOrderWithoutProject",id:"scopeorderwithoutproject",level:2},{value:"STATE_PROJECT_CONTEXT : <code>string</code>",id:"state_project_context--string",level:2},{value:"STATE_GLOBAL_CONTEXT : <code>string</code>",id:"state_global_context--string",level:2},{value:"STATE_PROJECT_THEN_GLOBAL_CONTEXT : <code>string</code>",id:"state_project_then_global_context--string",level:2},{value:"PROJECT_SCOPE : <code>Object</code>",id:"project_scope--object",level:2},{value:"getUserPrefFile() \u21d2 <code>string</code>",id:"getuserpreffile--string",level:2},{value:"getExtensionPrefs(prefix)",id:"getextensionprefsprefix",level:2},{value:"getViewState(id, [context])",id:"getviewstateid-context",level:2},{value:"setViewState(id, value, [context])",id:"setviewstateid-value-context",level:2}];function a(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const PreferencesManager = brackets.getModule("preferences/PreferencesManager")\n'})}),"\n",(0,s.jsx)("a",{name:"AppInit"}),"\n",(0,s.jsx)(n.h2,{id:"appinit",children:"AppInit"}),"\n",(0,s.jsx)(n.p,{children:"PreferencesManager"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,s.jsx)("a",{name:"CURRENT_PROJECT"}),"\n",(0,s.jsxs)(n.h2,{id:"current_project--object",children:["CURRENT_PROJECT : ",(0,s.jsx)("code",{children:"Object"})]}),"\n",(0,s.jsx)(n.p,{children:"Context to look up preferences in the current project."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,s.jsx)("a",{name:"scopeOrderWithProject"}),"\n",(0,s.jsx)(n.h2,{id:"scopeorderwithproject",children:"scopeOrderWithProject"}),"\n",(0,s.jsx)(n.p,{children:"Cached copy of the scopeOrder with the project Scope"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,s.jsx)("a",{name:"scopeOrderWithoutProject"}),"\n",(0,s.jsx)(n.h2,{id:"scopeorderwithoutproject",children:"scopeOrderWithoutProject"}),"\n",(0,s.jsx)(n.p,{children:"Cached copy of the scopeOrder without the project Scope"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,s.jsx)("a",{name:"STATE_PROJECT_CONTEXT"}),"\n",(0,s.jsxs)(n.h2,{id:"state_project_context--string",children:["STATE_PROJECT_CONTEXT : ",(0,s.jsx)("code",{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"State project context"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,s.jsx)("a",{name:"STATE_GLOBAL_CONTEXT"}),"\n",(0,s.jsxs)(n.h2,{id:"state_global_context--string",children:["STATE_GLOBAL_CONTEXT : ",(0,s.jsx)("code",{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"State global context"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,s.jsx)("a",{name:"STATE_PROJECT_THEN_GLOBAL_CONTEXT"}),"\n",(0,s.jsxs)(n.h2,{id:"state_project_then_global_context--string",children:["STATE_PROJECT_THEN_GLOBAL_CONTEXT : ",(0,s.jsx)("code",{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Project then global context"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,s.jsx)("a",{name:"PROJECT_SCOPE"}),"\n",(0,s.jsxs)(n.h2,{id:"project_scope--object",children:["PROJECT_SCOPE : ",(0,s.jsx)("code",{children:"Object"})]}),"\n",(0,s.jsx)(n.p,{children:"Project scope"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,s.jsx)("a",{name:"getUserPrefFile"}),"\n",(0,s.jsxs)(n.h2,{id:"getuserpreffile--string",children:["getUserPrefFile() \u21d2 ",(0,s.jsx)("code",{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Get the full path to the user-level preferences file."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"string"})," - Path to the preferences file"]}),"\n",(0,s.jsx)("a",{name:"getExtensionPrefs"}),"\n",(0,s.jsx)(n.h2,{id:"getextensionprefsprefix",children:"getExtensionPrefs(prefix)"}),"\n",(0,s.jsxs)(n.p,{children:["Creates an extension-specific preferences manager using the prefix given.\nA ",(0,s.jsx)(n.code,{children:"."})," character will be appended to the prefix. So, a preference named ",(0,s.jsx)(n.code,{children:"foo"}),"\nwith a prefix of ",(0,s.jsx)(n.code,{children:"myExtension"})," will be stored as ",(0,s.jsx)(n.code,{children:"myExtension.foo"})," in the\npreferences files."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"prefix"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)(n.td,{children:"Prefix to be applied"})]})})]}),"\n",(0,s.jsx)("a",{name:"getViewState"}),"\n",(0,s.jsx)(n.h2,{id:"getviewstateid-context",children:"getViewState(id, [context])"}),"\n",(0,s.jsx)(n.p,{children:"Convenience function that gets a view state"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"id"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)(n.td,{children:"preference to get"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[context]"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"Object"})}),(0,s.jsx)(n.td,{children:"Optional additional information about the request"})]})]})]}),"\n",(0,s.jsx)("a",{name:"setViewState"}),"\n",(0,s.jsx)(n.h2,{id:"setviewstateid-value-context",children:"setViewState(id, value, [context])"}),"\n",(0,s.jsx)(n.p,{children:"Convenience function that sets a view state and then saves the file"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"id"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)(n.td,{children:"preference to set"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"*"})}),(0,s.jsx)(n.td,{children:"new value for the preference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[context]"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"Object"})}),(0,s.jsx)(n.td,{children:"Optional additional information about the request"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);