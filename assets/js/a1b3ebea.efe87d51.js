"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5403],{10109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var r=n(74848),o=n(28453);const c={},d=void 0,i={id:"API-Reference/filesystem/WatchedRoot",title:"WatchedRoot",description:"Import :",source:"@site/api/API-Reference/filesystem/WatchedRoot.md",sourceDirName:"API-Reference/filesystem",slug:"/API-Reference/filesystem/WatchedRoot",permalink:"/api/API-Reference/filesystem/WatchedRoot",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RemoteFile",permalink:"/api/API-Reference/filesystem/RemoteFile"},next:{title:"CSSUtils",permalink:"/api/API-Reference/language/CSSUtils"}},s={},h=[{value:"Import :",id:"import-",level:3},{value:"WatchedRoot",id:"watchedroot",level:2},{value:"new WatchedRoot(entry, filter, filterGitIgnore)",id:"new-watchedrootentry-filter-filtergitignore",level:3},{value:"watchedRoot.entry : <code>File</code> | <code>Directory</code>",id:"watchedrootentry--file--directory",level:3},{value:"watchedRoot.filter : <code>function</code>",id:"watchedrootfilter--function",level:3},{value:"watchedRoot.filterGitIgnore : <code>string</code> | <code>Array.&lt;string&gt;</code>",id:"watchedrootfiltergitignore--string--arraystring",level:3},{value:"watchedRoot.status : <code>number</code>",id:"watchedrootstatus--number",level:3},{value:"WatchedRoot.INACTIVE : <code>number</code>",id:"watchedrootinactive--number",level:3},{value:"WatchedRoot.STARTING : <code>number</code>",id:"watchedrootstarting--number",level:3},{value:"WatchedRoot.ACTIVE : <code>number</code>",id:"watchedrootactive--number",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"import-",children:"Import :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const WatchedRoot = brackets.getModule("filesystem/WatchedRoot")\n'})}),"\n",(0,r.jsx)("a",{name:"WatchedRoot"}),"\n",(0,r.jsx)(t.h2,{id:"watchedroot",children:"WatchedRoot"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global class"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#WatchedRoot",children:"WatchedRoot"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#new_WatchedRoot_new",children:"new WatchedRoot(entry, filter, filterGitIgnore)"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:"instance"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#WatchedRoot+entry",children:".entry"})," : ",(0,r.jsx)("code",{children:"File"})," | ",(0,r.jsx)("code",{children:"Directory"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#WatchedRoot+filter",children:".filter"})," : ",(0,r.jsx)("code",{children:"function"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#WatchedRoot+filterGitIgnore",children:".filterGitIgnore"})," : ",(0,r.jsx)("code",{children:"string"})," | ",(0,r.jsx)("code",{children:"Array.<string>"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#WatchedRoot+status",children:".status"})," : ",(0,r.jsx)("code",{children:"number"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:"static"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#WatchedRoot.INACTIVE",children:".INACTIVE"})," : ",(0,r.jsx)("code",{children:"number"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#WatchedRoot.STARTING",children:".STARTING"})," : ",(0,r.jsx)("code",{children:"number"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#WatchedRoot.ACTIVE",children:".ACTIVE"})," : ",(0,r.jsx)("code",{children:"number"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("a",{name:"new_WatchedRoot_new"}),"\n",(0,r.jsx)(t.h3,{id:"new-watchedrootentry-filter-filtergitignore",children:"new WatchedRoot(entry, filter, filterGitIgnore)"}),"\n",(0,r.jsx)(t.p,{children:"Represents file or directory structure watched by the FileSystem. If the\nentry is a directory, all children (that pass the supplied filter function)\nare also watched. A WatchedRoot object begins and ends its life in the\nINACTIVE state. While in the process of starting up watchers, the WatchedRoot\nis in the STARTING state. When watchers are ready, the WatchedRoot enters\nthe ACTIVE state."}),"\n",(0,r.jsx)(t.p,{children:"See the FileSystem class for more details."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"entry"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("code",{children:"File"})," | ",(0,r.jsx)("code",{children:"Directory"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filter"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"function"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filterGitIgnore"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("code",{children:"string"})," | ",(0,r.jsx)("code",{children:"Array.<string>"})]})]})]})]}),"\n",(0,r.jsx)("a",{name:"WatchedRoot+entry"}),"\n",(0,r.jsxs)(t.h3,{id:"watchedrootentry--file--directory",children:["watchedRoot.entry : ",(0,r.jsx)("code",{children:"File"})," | ",(0,r.jsx)("code",{children:"Directory"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": instance property of ",(0,r.jsx)(t.a,{href:"#WatchedRoot",children:(0,r.jsx)("code",{children:"WatchedRoot"})})]}),"\n",(0,r.jsx)("a",{name:"WatchedRoot+filter"}),"\n",(0,r.jsxs)(t.h3,{id:"watchedrootfilter--function",children:["watchedRoot.filter : ",(0,r.jsx)("code",{children:"function"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": instance property of ",(0,r.jsx)(t.a,{href:"#WatchedRoot",children:(0,r.jsx)("code",{children:"WatchedRoot"})})]}),"\n",(0,r.jsx)("a",{name:"WatchedRoot+filterGitIgnore"}),"\n",(0,r.jsxs)(t.h3,{id:"watchedrootfiltergitignore--string--arraystring",children:["watchedRoot.filterGitIgnore : ",(0,r.jsx)("code",{children:"string"})," | ",(0,r.jsx)("code",{children:"Array.<string>"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": instance property of ",(0,r.jsx)(t.a,{href:"#WatchedRoot",children:(0,r.jsx)("code",{children:"WatchedRoot"})})]}),"\n",(0,r.jsx)("a",{name:"WatchedRoot+status"}),"\n",(0,r.jsxs)(t.h3,{id:"watchedrootstatus--number",children:["watchedRoot.status : ",(0,r.jsx)("code",{children:"number"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": instance property of ",(0,r.jsx)(t.a,{href:"#WatchedRoot",children:(0,r.jsx)("code",{children:"WatchedRoot"})})]}),"\n",(0,r.jsx)("a",{name:"WatchedRoot.INACTIVE"}),"\n",(0,r.jsxs)(t.h3,{id:"watchedrootinactive--number",children:["WatchedRoot.INACTIVE : ",(0,r.jsx)("code",{children:"number"})]}),"\n",(0,r.jsx)(t.p,{children:"WatchedRoot inactive"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": static constant of ",(0,r.jsx)(t.a,{href:"#WatchedRoot",children:(0,r.jsx)("code",{children:"WatchedRoot"})})]}),"\n",(0,r.jsx)("a",{name:"WatchedRoot.STARTING"}),"\n",(0,r.jsxs)(t.h3,{id:"watchedrootstarting--number",children:["WatchedRoot.STARTING : ",(0,r.jsx)("code",{children:"number"})]}),"\n",(0,r.jsx)(t.p,{children:"WatchedRoot starting"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": static constant of ",(0,r.jsx)(t.a,{href:"#WatchedRoot",children:(0,r.jsx)("code",{children:"WatchedRoot"})})]}),"\n",(0,r.jsx)("a",{name:"WatchedRoot.ACTIVE"}),"\n",(0,r.jsxs)(t.h3,{id:"watchedrootactive--number",children:["WatchedRoot.ACTIVE : ",(0,r.jsx)("code",{children:"number"})]}),"\n",(0,r.jsx)(t.p,{children:"WatchedRoot active"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": static constant of ",(0,r.jsx)(t.a,{href:"#WatchedRoot",children:(0,r.jsx)("code",{children:"WatchedRoot"})})]})]})}function a(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var r=n(96540);const o={},c=r.createContext(o);function d(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);