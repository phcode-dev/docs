"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5300],{71119:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(74848),s=r(28453);const i={},d=void 0,o={id:"API-Reference/utils/DragAndDrop",title:"DragAndDrop",description:"Import :",source:"@site/api/API-Reference/utils/DragAndDrop.md",sourceDirName:"API-Reference/utils",slug:"/API-Reference/utils/DragAndDrop",permalink:"/api/API-Reference/utils/DragAndDrop",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DeprecationWarning",permalink:"/api/API-Reference/utils/DeprecationWarning"},next:{title:"DropdownEventHandler",permalink:"/api/API-Reference/utils/DropdownEventHandler"}},a={},l=[{value:"Import :",id:"import-",level:3},{value:"isValidDrop(items) \u21d2 <code>boolean</code>",id:"isvaliddropitems--boolean",level:2},{value:"stopURIListPropagation(files, event)",id:"stopurilistpropagationfiles-event",level:2},{value:"openDroppedFiles(files) \u21d2 <code>Promise</code>",id:"opendroppedfilesfiles--promise",level:2},{value:"attachHandlers()",id:"attachhandlers",level:2}];function c(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const DragAndDrop = brackets.getModule("utils/DragAndDrop")\n'})}),"\n",(0,t.jsx)("a",{name:"isValidDrop"}),"\n",(0,t.jsxs)(n.h2,{id:"isvaliddropitems--boolean",children:["isValidDrop(items) \u21d2 ",(0,t.jsx)("code",{children:"boolean"})]}),"\n",(0,t.jsx)(n.p,{children:"Returns true if the drag and drop items contains valid drop objects."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"boolean"})," - True if one or more items can be dropped."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"items"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"Array.<DataTransferItem>"})}),(0,t.jsx)(n.td,{children:"Array of items being dragged"})]})})]}),"\n",(0,t.jsx)("a",{name:"stopURIListPropagation"}),"\n",(0,t.jsx)(n.h2,{id:"stopurilistpropagationfiles-event",children:"stopURIListPropagation(files, event)"}),"\n",(0,t.jsx)(n.p,{children:"Determines if the event contains a type list that has a URI-list.\rIf it does and contains an empty file list, then what is being dropped is a URL.\rIf that is true then we stop the event propagation and default behavior to save Brackets editor from the browser taking over."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"files"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"Array.<File>"})}),(0,t.jsx)(n.td,{children:"Array of File objects from the event datastructure. URLs are the only drop item that would contain a URI-list."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"event"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"event"})}),(0,t.jsx)(n.td,{children:"The event datastucture containing datatransfer information about the drag/drop event. Contains a type list which may or may not hold a URI-list depending on what was dragged/dropped. Interested if it does."})]})]})]}),"\n",(0,t.jsx)("a",{name:"openDroppedFiles"}),"\n",(0,t.jsxs)(n.h2,{id:"opendroppedfilesfiles--promise",children:["openDroppedFiles(files) \u21d2 ",(0,t.jsx)("code",{children:"Promise"})]}),"\n",(0,t.jsx)(n.p,{children:"Open dropped files"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Returns"}),": ",(0,t.jsx)("code",{children:"Promise"})," - Promise that is resolved if all files are opened, or rejected\rif there was an error."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"files"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("code",{children:"Array.<string>"})}),(0,t.jsx)(n.td,{children:"Array of files dropped on the application."})]})})]}),"\n",(0,t.jsx)("a",{name:"attachHandlers"}),"\n",(0,t.jsx)(n.h2,{id:"attachhandlers",children:"attachHandlers()"}),"\n",(0,t.jsx)(n.p,{children:"Attaches global drag & drop handlers to this window. This enables dropping files/folders to open them, and also\rprotects the Brackets app from being replaced by the browser trying to load the dropped file in its place."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Kind"}),": global function"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);