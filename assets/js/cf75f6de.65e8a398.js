"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7545],{65731:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var t=s(74848),d=s(28453);const r={},l=void 0,i={id:"API-Reference/utils/ExtensionUtils",title:"ExtensionUtils",description:"Import :",source:"@site/api/API-Reference/utils/ExtensionUtils.md",sourceDirName:"API-Reference/utils",slug:"/API-Reference/utils/ExtensionUtils",permalink:"/api/API-Reference/utils/ExtensionUtils",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ExtensionLoader",permalink:"/api/API-Reference/utils/ExtensionLoader"},next:{title:"FeatureGate",permalink:"/api/API-Reference/utils/FeatureGate"}},o={},h=[{value:"Import :",id:"import-",level:3},{value:"FileSystem",id:"filesystem",level:2},{value:"addEmbeddedStyleSheet(css) \u21d2 <code>HTMLStyleElement</code>",id:"addembeddedstylesheetcss--htmlstyleelement",level:2},{value:"addLinkedStyleSheet(url, [deferred]) \u21d2 <code>HTMLLinkElement</code>",id:"addlinkedstylesheeturl-deferred--htmllinkelement",level:2},{value:"isAbsolutePathOrUrl(pathOrUrl) \u21d2 <code>boolean</code>",id:"isabsolutepathorurlpathorurl--boolean",level:2},{value:"parseLessCode(code, url) \u21d2 <code>$.Promise</code>",id:"parselesscodecode-url--promise",level:2},{value:"getModulePath(module, path) \u21d2 <code>string</code>",id:"getmodulepathmodule-path--string",level:2},{value:"getModuleUrl(module, path) \u21d2 <code>string</code>",id:"getmoduleurlmodule-path--string",level:2},{value:"loadFile(module, path) \u21d2 <code>$.Promise</code>",id:"loadfilemodule-path--promise",level:2},{value:"loadStyleSheet(module, path) \u21d2 <code>$.Promise</code>",id:"loadstylesheetmodule-path--promise",level:2},{value:"_loadExtensionMetadata(baseExtensionUrl, extensionName) \u21d2 <code>$.Promise</code>",id:"_loadextensionmetadatabaseextensionurl-extensionname--promise",level:2},{value:"loadMetadata(metadataURL) \u21d2 <code>$.Promise</code>",id:"loadmetadatametadataurl--promise",level:2}];function c(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const ExtensionUtils = brackets.getModule("utils/ExtensionUtils")\n'})}),"\n",(0,t.jsx)("a",{name:"FileSystem"}),"\n",(0,t.jsx)(n.h2,{id:"filesystem",children:"FileSystem"}),"\n",(0,t.jsx)(n.p,{children:"ExtensionUtils defines utility methods for implementing extensions."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global constant"]}),"\n",(0,t.jsx)("a",{name:"addEmbeddedStyleSheet"}),"\n",(0,t.jsxs)(n.h2,{id:"addembeddedstylesheetcss--htmlstyleelement",children:["addEmbeddedStyleSheet(css) \u21d2 ",(0,t.jsx)("code",{children:"HTMLStyleElement"})]}),"\n",(0,t.jsx)(n.p,{children:'Appends a "style" tag to the document\'s head.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"HTMLStyleElement"})," - The generated HTML node"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"css"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"CSS code to use as the tag's content"})]})})]}),"\n",(0,t.jsx)("a",{name:"addLinkedStyleSheet"}),"\n",(0,t.jsxs)(n.h2,{id:"addlinkedstylesheeturl-deferred--htmllinkelement",children:["addLinkedStyleSheet(url, [deferred]) \u21d2 ",(0,t.jsx)("code",{children:"HTMLLinkElement"})]}),"\n",(0,t.jsx)(n.p,{children:'Appends a "link" tag to the document\'s head.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"HTMLLinkElement"})," - The generated HTML node"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"URL to a style sheet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[deferred]"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"$.Deferred"})}),(0,t.jsx)(n.td,{children:"Optionally check for load and error events"})]})]})]}),"\n",(0,t.jsx)("a",{name:"isAbsolutePathOrUrl"}),"\n",(0,t.jsxs)(n.h2,{id:"isabsolutepathorurlpathorurl--boolean",children:["isAbsolutePathOrUrl(pathOrUrl) \u21d2 ",(0,t.jsx)("code",{children:"boolean"})]}),"\n",(0,t.jsx)(n.p,{children:"getModuleUrl returns different urls for win platform\nso that's why we need a different check here"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"boolean"})," - returns true if pathOrUrl is absolute url on win platform\nor when it's absolute path on other platforms",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"See"}),": #getModuleUrl"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pathOrUrl"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"that should be checked if it's absolute"})]})})]}),"\n",(0,t.jsx)("a",{name:"parseLessCode"}),"\n",(0,t.jsxs)(n.h2,{id:"parselesscodecode-url--promise",children:["parseLessCode(code, url) \u21d2 ",(0,t.jsx)("code",{children:"$.Promise"})]}),"\n",(0,t.jsx)(n.p,{children:"Parses LESS code and returns a promise that resolves with plain CSS code."}),"\n",(0,t.jsx)(n.p,{children:'Pass the link url argument to resolve relative URLs contained in the code.\nMake sure URLs in the code are wrapped in quotes, like so:\nbackground-image: url("image.png");'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"$.Promise"})," - A promise object that is resolved with CSS code if the LESS code can be parsed"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"LESS code to parse"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"URL to the file containing the code"})]})]})]}),"\n",(0,t.jsx)("a",{name:"getModulePath"}),"\n",(0,t.jsxs)(n.h2,{id:"getmodulepathmodule-path--string",children:["getModulePath(module, path) \u21d2 ",(0,t.jsx)("code",{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"Returns a path to an extension module."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"string"})," - The path to the module's folder"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"module"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"module"})}),(0,t.jsx)(n.td,{children:"Module provided by RequireJS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"Relative path from the extension folder to a file"})]})]})]}),"\n",(0,t.jsx)("a",{name:"getModuleUrl"}),"\n",(0,t.jsxs)(n.h2,{id:"getmoduleurlmodule-path--string",children:["getModuleUrl(module, path) \u21d2 ",(0,t.jsx)("code",{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"Returns a URL to an extension module."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"string"})," - The URL to the module's folder"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"module"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"module"})}),(0,t.jsx)(n.td,{children:"Module provided by RequireJS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"Relative path from the extension folder to a file"})]})]})]}),"\n",(0,t.jsx)("a",{name:"loadFile"}),"\n",(0,t.jsxs)(n.h2,{id:"loadfilemodule-path--promise",children:["loadFile(module, path) \u21d2 ",(0,t.jsx)("code",{children:"$.Promise"})]}),"\n",(0,t.jsx)(n.p,{children:"Performs a GET request using a path relative to an extension module."}),"\n",(0,t.jsx)(n.p,{children:"The resulting URL can be retrieved in the resolve callback by accessing"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"$.Promise"})," - A promise object that is resolved with the contents of the requested file"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"module"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"module"})}),(0,t.jsx)(n.td,{children:"Module provided by RequireJS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"Relative path from the extension folder to a file"})]})]})]}),"\n",(0,t.jsx)("a",{name:"loadStyleSheet"}),"\n",(0,t.jsxs)(n.h2,{id:"loadstylesheetmodule-path--promise",children:["loadStyleSheet(module, path) \u21d2 ",(0,t.jsx)("code",{children:"$.Promise"})]}),"\n",(0,t.jsx)(n.p,{children:"Loads a style sheet (CSS or LESS) relative to the extension module."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"$.Promise"})," - A promise object that is resolved with an HTML node if the file can be loaded."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"module"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"module"})}),(0,t.jsx)(n.td,{children:"Module provided by RequireJS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"Relative path from the extension folder to a CSS or LESS file"})]})]})]}),"\n",(0,t.jsx)("a",{name:"_loadExtensionMetadata"}),"\n",(0,t.jsxs)(n.h2,{id:"_loadextensionmetadatabaseextensionurl-extensionname--promise",children:["_loadExtensionMetadata(baseExtensionUrl, extensionName) \u21d2 ",(0,t.jsx)("code",{children:"$.Promise"})]}),"\n",(0,t.jsx)(n.p,{children:"Loads the package.json file in the given extension folder as well as any additional\nmetadata."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"$.Promise"})," - A promise object that is resolved with the parsed contents of the package.json file,\nor rejected if there is no package.json with the boolean indicating whether .disabled file exists."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"baseExtensionUrl"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"The extension folder."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"extensionName"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"optional extension name"})]})]})]}),"\n",(0,t.jsx)("a",{name:"loadMetadata"}),"\n",(0,t.jsxs)(n.h2,{id:"loadmetadatametadataurl--promise",children:["loadMetadata(metadataURL) \u21d2 ",(0,t.jsx)("code",{children:"$.Promise"})]}),"\n",(0,t.jsx)(n.p,{children:"Loads the package.json file in the given extension folder as well as any additional\nmetadata for default extensions in the source directory."}),"\n",(0,t.jsx)(n.p,{children:"If there's a .disabled file in the extension directory, then the content of package.json\nwill be augmented with disabled property set to true. It will override whatever value of\ndisabled might be set."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"$.Promise"})," - A promise object that is resolved with the parsed contents of the package.json file,\nor rejected if there is no package.json with the boolean indicating whether .disabled file exists."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"metadataURL"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(n.td,{children:"The extension folder/base url for default extensions."})]})})]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const d={},r=t.createContext(d);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);