"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5435],{54345:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"API-Reference/utils/NodeUtils","title":"NodeUtils","description":"Import :","source":"@site/api/API-Reference/utils/NodeUtils.md","sourceDirName":"API-Reference/utils","slug":"/API-Reference/utils/NodeUtils","permalink":"/api/API-Reference/utils/NodeUtils","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"NativeApp","permalink":"/api/API-Reference/utils/NativeApp"},"next":{"title":"PerfUtils","permalink":"/api/API-Reference/utils/PerfUtils"}}');var s=i(74848),t=i(28453);const l={},d=void 0,o={},c=[{value:"Import :",id:"import-",level:3},{value:"isNodeReady \u21d2 <code>boolean</code>",id:"isnodeready--boolean",level:2},{value:"Strings",id:"strings",level:2},{value:"fetchURLText(url, encoding) \u21d2 <code>Promise.&lt;string&gt;</code>",id:"fetchurltexturl-encoding--promisestring",level:2},{value:"getPhoenixBinaryVersion() \u21d2 <code>Promise.&lt;string&gt;</code>",id:"getphoenixbinaryversion--promisestring",level:2},{value:"getLinuxOSFlavorName() \u21d2 <code>Promise.&lt;(string|null)&gt;</code>",id:"getlinuxosflavorname--promisestringnull",level:2},{value:"openUrlInBrowser(url, browserName)",id:"openurlinbrowserurl-browsername",level:2},{value:"getEnvironmentVariable(varName) \u21d2 <code>Promise.&lt;string&gt;</code>",id:"getenvironmentvariablevarname--promisestring",level:2},{value:"ESLintFile(text, fullFilePath, projectFullPath)",id:"eslintfiletext-fullfilepath-projectfullpath",level:2}];function a(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const NodeUtils = brackets.getModule("utils/NodeUtils")\n'})}),"\n",(0,s.jsx)("a",{name:"isNodeReady"}),"\n",(0,s.jsxs)(n.h2,{id:"isnodeready--boolean",children:["isNodeReady \u21d2 ",(0,s.jsx)("code",{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"checks if Node connector is ready"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global variable",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"boolean"})," - returns true if it's ready, otherwise false"]}),"\n",(0,s.jsx)("a",{name:"Strings"}),"\n",(0,s.jsx)(n.h2,{id:"strings",children:"Strings"}),"\n",(0,s.jsxs)(n.p,{children:["Generic node util APIs connector. see ",(0,s.jsx)(n.code,{children:"src-node/utils.js"})," for node peer"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global constant"]}),"\n",(0,s.jsx)("a",{name:"fetchURLText"}),"\n",(0,s.jsxs)(n.h2,{id:"fetchurltexturl-encoding--promisestring",children:["fetchURLText(url, encoding) \u21d2 ",(0,s.jsx)("code",{children:"Promise.<string>"})]}),"\n",(0,s.jsx)(n.p,{children:"Fetches text content from a URL\nThis is only available in the native app"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"url"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"encoding"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})})]})]})]}),"\n",(0,s.jsx)("a",{name:"getPhoenixBinaryVersion"}),"\n",(0,s.jsxs)(n.h2,{id:"getphoenixbinaryversion--promisestring",children:["getPhoenixBinaryVersion() \u21d2 ",(0,s.jsx)("code",{children:"Promise.<string>"})]}),"\n",(0,s.jsx)(n.p,{children:"Gets the version of the Phoenix binary\nThis is only available in the native app"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsx)("a",{name:"getLinuxOSFlavorName"}),"\n",(0,s.jsxs)(n.h2,{id:"getlinuxosflavorname--promisestringnull",children:["getLinuxOSFlavorName() \u21d2 ",(0,s.jsx)("code",{children:"Promise.<(string|null)>"})]}),"\n",(0,s.jsx)(n.p,{children:"Retrieves the Linux OS flavor name\nThis is only available in the native app on Linux"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsx)("a",{name:"openUrlInBrowser"}),"\n",(0,s.jsx)(n.h2,{id:"openurlinbrowserurl-browsername",children:"openUrlInBrowser(url, browserName)"}),"\n",(0,s.jsx)(n.p,{children:"Opens a URL in the default browser.\nThis is only available in the native app."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"url"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"browserName"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})})]})]})]}),"\n",(0,s.jsx)("a",{name:"getEnvironmentVariable"}),"\n",(0,s.jsxs)(n.h2,{id:"getenvironmentvariablevarname--promisestring",children:["getEnvironmentVariable(varName) \u21d2 ",(0,s.jsx)("code",{children:"Promise.<string>"})]}),"\n",(0,s.jsx)(n.p,{children:"Gets an environment variable's value\nThis is only available in the native app"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"varName"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})})]})})]}),"\n",(0,s.jsx)("a",{name:"ESLintFile"}),"\n",(0,s.jsx)(n.h2,{id:"eslintfiletext-fullfilepath-projectfullpath",children:"ESLintFile(text, fullFilePath, projectFullPath)"}),"\n",(0,s.jsx)(n.p,{children:"Runs ESLint on a file\nThis is only available in the native app"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fullFilePath"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"projectFullPath"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var r=i(96540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);