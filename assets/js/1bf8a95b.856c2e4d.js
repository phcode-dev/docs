"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[159],{11730:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"API-Reference/JSUtils/Preferences","title":"Preferences","description":"Import :","source":"@site/api/API-Reference/JSUtils/Preferences.md","sourceDirName":"API-Reference/JSUtils","slug":"/API-Reference/JSUtils/Preferences","permalink":"/api/API-Reference/JSUtils/Preferences","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Add an indicator icon on the status bar","permalink":"/api/How-To/StatusBar"},"next":{"title":"ScopeManager","permalink":"/api/API-Reference/JSUtils/ScopeManager"}}');var c=n(74848),i=n(28453);const t={},l=void 0,d={},o=[{value:"Import :",id:"import-",level:3},{value:"Preferences",id:"preferences",level:2},{value:"new Preferences([prefs])",id:"new-preferencesprefs",level:3},{value:"preferences.getExcludedDirectories() \u21d2 <code>RegExp</code>",id:"preferencesgetexcludeddirectories--regexp",level:3},{value:"preferences.getExcludedFiles() \u21d2 <code>RegExp</code>",id:"preferencesgetexcludedfiles--regexp",level:3},{value:"preferences.getMaxFileCount() \u21d2 <code>number</code>",id:"preferencesgetmaxfilecount--number",level:3},{value:"preferences.getMaxFileSize() \u21d2 <code>number</code>",id:"preferencesgetmaxfilesize--number",level:3}];function x(e){const r={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h3,{id:"import-",children:"Import :"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-js",children:'const Preferences = brackets.getModule("JSUtils/Preferences")\n'})}),"\n",(0,c.jsx)("a",{name:"Preferences"}),"\n",(0,c.jsx)(r.h2,{id:"preferences",children:"Preferences"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"Kind"}),": global class"]}),"\n",(0,c.jsxs)(r.ul,{children:["\n",(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.a,{href:"#Preferences",children:"Preferences"}),"\n",(0,c.jsxs)(r.ul,{children:["\n",(0,c.jsx)(r.li,{children:(0,c.jsx)(r.a,{href:"#new_Preferences_new",children:"new Preferences([prefs])"})}),"\n",(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.a,{href:"#Preferences+getExcludedDirectories",children:".getExcludedDirectories()"})," \u21d2 ",(0,c.jsx)("code",{children:"RegExp"})]}),"\n",(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.a,{href:"#Preferences+getExcludedFiles",children:".getExcludedFiles()"})," \u21d2 ",(0,c.jsx)("code",{children:"RegExp"})]}),"\n",(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.a,{href:"#Preferences+getMaxFileCount",children:".getMaxFileCount()"})," \u21d2 ",(0,c.jsx)("code",{children:"number"})]}),"\n",(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.a,{href:"#Preferences+getMaxFileSize",children:".getMaxFileSize()"})," \u21d2 ",(0,c.jsx)("code",{children:"number"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)("a",{name:"new_Preferences_new"}),"\n",(0,c.jsx)(r.h3,{id:"new-preferencesprefs",children:"new Preferences([prefs])"}),"\n",(0,c.jsx)(r.p,{children:"Constructor to create a default preference object."}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:"Param"}),(0,c.jsx)(r.th,{children:"Type"}),(0,c.jsx)(r.th,{children:"Description"})]})}),(0,c.jsx)(r.tbody,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:"[prefs]"}),(0,c.jsx)(r.td,{children:(0,c.jsx)("code",{children:"Object"})}),(0,c.jsx)(r.td,{children:"preference object"})]})})]}),"\n",(0,c.jsx)("a",{name:"Preferences+getExcludedDirectories"}),"\n",(0,c.jsxs)(r.h3,{id:"preferencesgetexcludeddirectories--regexp",children:["preferences.getExcludedDirectories() \u21d2 ",(0,c.jsx)("code",{children:"RegExp"})]}),"\n",(0,c.jsx)(r.p,{children:"Get the regular expression for excluded directories."}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,c.jsx)(r.a,{href:"#Preferences",children:(0,c.jsx)("code",{children:"Preferences"})}),(0,c.jsx)(r.br,{}),"\n",(0,c.jsx)(r.strong,{children:"Returns"}),": ",(0,c.jsx)("code",{children:"RegExp"})," - Regular expression matching the directories that should\nbe excluded. Returns null if no directories are excluded."]}),"\n",(0,c.jsx)("a",{name:"Preferences+getExcludedFiles"}),"\n",(0,c.jsxs)(r.h3,{id:"preferencesgetexcludedfiles--regexp",children:["preferences.getExcludedFiles() \u21d2 ",(0,c.jsx)("code",{children:"RegExp"})]}),"\n",(0,c.jsx)(r.p,{children:"Get the regular expression for excluded files."}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,c.jsx)(r.a,{href:"#Preferences",children:(0,c.jsx)("code",{children:"Preferences"})}),(0,c.jsx)(r.br,{}),"\n",(0,c.jsx)(r.strong,{children:"Returns"}),": ",(0,c.jsx)("code",{children:"RegExp"})," - Regular expression matching the files that should\nbe excluded. Returns null if no files are excluded."]}),"\n",(0,c.jsx)("a",{name:"Preferences+getMaxFileCount"}),"\n",(0,c.jsxs)(r.h3,{id:"preferencesgetmaxfilecount--number",children:["preferences.getMaxFileCount() \u21d2 ",(0,c.jsx)("code",{children:"number"})]}),"\n",(0,c.jsx)(r.p,{children:"Get the maximum number of files that will be analyzed."}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,c.jsx)(r.a,{href:"#Preferences",children:(0,c.jsx)("code",{children:"Preferences"})})]}),"\n",(0,c.jsx)("a",{name:"Preferences+getMaxFileSize"}),"\n",(0,c.jsxs)(r.h3,{id:"preferencesgetmaxfilesize--number",children:["preferences.getMaxFileSize() \u21d2 ",(0,c.jsx)("code",{children:"number"})]}),"\n",(0,c.jsx)(r.p,{children:"Get the maximum size of a file that will be analyzed. Files that are\nlarger will be ignored."}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,c.jsx)(r.a,{href:"#Preferences",children:(0,c.jsx)("code",{children:"Preferences"})})]})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>l});var s=n(96540);const c={},i=s.createContext(c);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);