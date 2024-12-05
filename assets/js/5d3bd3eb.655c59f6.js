"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3741],{54860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"API-Reference/project/FileSyncManager","title":"FileSyncManager","description":"Import :","source":"@site/api/API-Reference/project/FileSyncManager.md","sourceDirName":"API-Reference/project","slug":"/API-Reference/project/FileSyncManager","permalink":"/api/API-Reference/project/FileSyncManager","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"StateManager","permalink":"/api/API-Reference/preferences/StateManager"},"next":{"title":"FileTreeView","permalink":"/api/API-Reference/project/FileTreeView"}}');var c=n(74848),s=n(28453);const i={},o=void 0,a={},l=[{value:"Import :",id:"import-",level:3},{value:"syncOpenDocuments(title)",id:"syncopendocumentstitle",level:2}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:"import-",children:"Import :"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:'const FileSyncManager = brackets.getModule("project/FileSyncManager")\n'})}),"\n",(0,c.jsx)("a",{name:"syncOpenDocuments"}),"\n",(0,c.jsx)(t.h2,{id:"syncopendocumentstitle",children:"syncOpenDocuments(title)"}),"\n",(0,c.jsx)(t.p,{children:"Check to see whether any open files have been modified by an external app since the last time\nBrackets synced up with the copy on disk (either by loading or saving the file). For clean\nfiles, we silently upate the editor automatically. For files with unsaved changes, we prompt\nthe user."}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Param"}),(0,c.jsx)(t.th,{children:"Type"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"title"}),(0,c.jsx)(t.td,{children:(0,c.jsx)("code",{children:"string"})}),(0,c.jsx)(t.td,{children:'Title to use for document. Default is "External Changes".'})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const c={},s=r.createContext(c);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);