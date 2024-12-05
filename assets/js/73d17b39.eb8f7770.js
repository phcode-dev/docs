"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[339],{73413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"API-Reference/language/JSUtils","title":"JSUtils","description":"Import :","source":"@site/api/API-Reference/language/JSUtils.md","sourceDirName":"API-Reference/language","slug":"/API-Reference/language/JSUtils","permalink":"/api/API-Reference/language/JSUtils","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"JSONUtils","permalink":"/api/API-Reference/language/JSONUtils"},"next":{"title":"LanguageManager","permalink":"/api/API-Reference/language/LanguageManager"}}');var s=t(74848),r=t(28453);const c={},l=void 0,a={},d=[{value:"Import :",id:"import-",level:3},{value:"_",id:"_",level:2},{value:"findMatchingFunctions(functionName, fileInfos, [keepAllFiles]) \u21d2 <code>$.Promise</code>",id:"findmatchingfunctionsfunctionname-fileinfos-keepallfiles--promise",level:2},{value:"findAllMatchingFunctionsInText(text, searchName) \u21d2 <code>Object</code>",id:"findallmatchingfunctionsintexttext-searchname--object",level:2}];function o(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const JSUtils = brackets.getModule("language/JSUtils")\n'})}),"\n",(0,s.jsx)("a",{name:"_"}),"\n",(0,s.jsx)(n.h2,{id:"_",children:"_"}),"\n",(0,s.jsx)(n.p,{children:"Set of utilities for simple parsing of JS text."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,s.jsx)("a",{name:"findMatchingFunctions"}),"\n",(0,s.jsxs)(n.h2,{id:"findmatchingfunctionsfunctionname-fileinfos-keepallfiles--promise",children:["findMatchingFunctions(functionName, fileInfos, [keepAllFiles]) \u21d2 ",(0,s.jsx)("code",{children:"$.Promise"})]}),"\n",(0,s.jsx)(n.p,{children:"Return all functions that have the specified name, searching across all the given files."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"$.Promise"})," - that will be resolved with an Array of objects containing the\nsource document, start line, and end line (0-based, inclusive range) for each matching function list.\nDoes not addRef() the documents returned in the array."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"functionName"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"String"})}),(0,s.jsx)(n.td,{children:"The name to match."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileInfos"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"Array.<File>"})}),(0,s.jsx)(n.td,{children:"The array of files to search."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[keepAllFiles]"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)(n.td,{children:"If true, don't ignore non-javascript files."})]})]})]}),"\n",(0,s.jsx)("a",{name:"findAllMatchingFunctionsInText"}),"\n",(0,s.jsxs)(n.h2,{id:"findallmatchingfunctionsintexttext-searchname--object",children:["findAllMatchingFunctionsInText(text, searchName) \u21d2 ",(0,s.jsx)("code",{children:"Object"})]}),"\n",(0,s.jsx)(n.p,{children:'Finds all instances of the specified searchName in "text".\nReturns an Array of Objects with start and end properties.'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"Object"})," - Array of objects containing the start offset for each matched function name."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"String"})}),(0,s.jsx)(n.td,{children:"JS text to search"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"searchName"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"String"})}),(0,s.jsx)(n.td,{children:"function name to search for"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);