"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[159],{33850:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>x});var s=n(74848),i=n(28453);const t={},c=void 0,d={id:"API-Reference/JSUtils/Preferences",title:"Preferences",description:"Import :",source:"@site/api/API-Reference/JSUtils/Preferences.md",sourceDirName:"API-Reference/JSUtils",slug:"/API-Reference/JSUtils/Preferences",permalink:"/api/API-Reference/JSUtils/Preferences",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Available Standard Libraries",permalink:"/api/available-standard-libs"},next:{title:"ScopeManager",permalink:"/api/API-Reference/JSUtils/ScopeManager"}},l={},x=[{value:"Import :",id:"import-",level:3},{value:"Preferences",id:"preferences",level:2},{value:"new Preferences([prefs])",id:"new-preferencesprefs",level:3},{value:"preferences.getExcludedDirectories() \u21d2 <code>RegExp</code>",id:"preferencesgetexcludeddirectories--regexp",level:3},{value:"preferences.getExcludedFiles() \u21d2 <code>RegExp</code>",id:"preferencesgetexcludedfiles--regexp",level:3},{value:"preferences.getMaxFileCount() \u21d2 <code>number</code>",id:"preferencesgetmaxfilecount--number",level:3},{value:"preferences.getMaxFileSize() \u21d2 <code>number</code>",id:"preferencesgetmaxfilesize--number",level:3},{value:"settingsToRegExp(settings, baseRegExp, defaultRegExp) \u21d2 <code>RegExp</code>",id:"settingstoregexpsettings-baseregexp-defaultregexp--regexp",level:2}];function a(e){const r={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h3,{id:"import-",children:"Import :"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'const Preferences = brackets.getModule("JSUtils/Preferences")\n'})}),"\n",(0,s.jsx)("a",{name:"Preferences"}),"\n",(0,s.jsx)(r.h2,{id:"preferences",children:"Preferences"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Kind"}),": global class"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#Preferences",children:"Preferences"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#new_Preferences_new",children:"new Preferences([prefs])"})}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#Preferences+getExcludedDirectories",children:".getExcludedDirectories()"})," \u21d2 ",(0,s.jsx)("code",{children:"RegExp"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#Preferences+getExcludedFiles",children:".getExcludedFiles()"})," \u21d2 ",(0,s.jsx)("code",{children:"RegExp"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#Preferences+getMaxFileCount",children:".getMaxFileCount()"})," \u21d2 ",(0,s.jsx)("code",{children:"number"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#Preferences+getMaxFileSize",children:".getMaxFileSize()"})," \u21d2 ",(0,s.jsx)("code",{children:"number"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"new_Preferences_new"}),"\n",(0,s.jsx)(r.h3,{id:"new-preferencesprefs",children:"new Preferences([prefs])"}),"\n",(0,s.jsx)(r.p,{children:"Constructor to create a default preference object."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Param"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"[prefs]"}),(0,s.jsx)(r.td,{children:(0,s.jsx)("code",{children:"Object"})}),(0,s.jsx)(r.td,{children:"preference object"})]})})]}),"\n",(0,s.jsx)("a",{name:"Preferences+getExcludedDirectories"}),"\n",(0,s.jsxs)(r.h3,{id:"preferencesgetexcludeddirectories--regexp",children:["preferences.getExcludedDirectories() \u21d2 ",(0,s.jsx)("code",{children:"RegExp"})]}),"\n",(0,s.jsx)(r.p,{children:"Get the regular expression for excluded directories."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(r.a,{href:"#Preferences",children:(0,s.jsx)("code",{children:"Preferences"})}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"RegExp"})," - Regular expression matching the directories that should\rbe excluded. Returns null if no directories are excluded."]}),"\n",(0,s.jsx)("a",{name:"Preferences+getExcludedFiles"}),"\n",(0,s.jsxs)(r.h3,{id:"preferencesgetexcludedfiles--regexp",children:["preferences.getExcludedFiles() \u21d2 ",(0,s.jsx)("code",{children:"RegExp"})]}),"\n",(0,s.jsx)(r.p,{children:"Get the regular expression for excluded files."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(r.a,{href:"#Preferences",children:(0,s.jsx)("code",{children:"Preferences"})}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"RegExp"})," - Regular expression matching the files that should\rbe excluded. Returns null if no files are excluded."]}),"\n",(0,s.jsx)("a",{name:"Preferences+getMaxFileCount"}),"\n",(0,s.jsxs)(r.h3,{id:"preferencesgetmaxfilecount--number",children:["preferences.getMaxFileCount() \u21d2 ",(0,s.jsx)("code",{children:"number"})]}),"\n",(0,s.jsx)(r.p,{children:"Get the maximum number of files that will be analyzed."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(r.a,{href:"#Preferences",children:(0,s.jsx)("code",{children:"Preferences"})})]}),"\n",(0,s.jsx)("a",{name:"Preferences+getMaxFileSize"}),"\n",(0,s.jsxs)(r.h3,{id:"preferencesgetmaxfilesize--number",children:["preferences.getMaxFileSize() \u21d2 ",(0,s.jsx)("code",{children:"number"})]}),"\n",(0,s.jsx)(r.p,{children:"Get the maximum size of a file that will be analyzed. Files that are\rlarger will be ignored."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(r.a,{href:"#Preferences",children:(0,s.jsx)("code",{children:"Preferences"})})]}),"\n",(0,s.jsx)("a",{name:"settingsToRegExp"}),"\n",(0,s.jsxs)(r.h2,{id:"settingstoregexpsettings-baseregexp-defaultregexp--regexp",children:["settingsToRegExp(settings, baseRegExp, defaultRegExp) \u21d2 ",(0,s.jsx)("code",{children:"RegExp"})]}),"\n",(0,s.jsx)(r.p,{children:"Convert an array of strings with optional wildcards, to an equivalent\rregular expression."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Kind"}),": global function",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"RegExp"})," - Regular expression that captures the array of string\rwith optional wildcards."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Param"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"settings"}),(0,s.jsx)(r.td,{children:(0,s.jsx)("code",{children:"Array.<(string|RegExp)>"})}),(0,s.jsx)(r.td,{children:"from the file (note: this may be mutated by this function)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"baseRegExp"}),(0,s.jsx)(r.td,{children:(0,s.jsx)("code",{children:"RegExp"})}),(0,s.jsx)(r.td,{children:"base regular expression that is always used"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"defaultRegExp"}),(0,s.jsx)(r.td,{children:(0,s.jsx)("code",{children:"RegExp"})}),(0,s.jsx)(r.td,{children:"additional regular expression that is only used if the user has not configured settings"})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>d});var s=n(96540);const i={},t=s.createContext(i);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);