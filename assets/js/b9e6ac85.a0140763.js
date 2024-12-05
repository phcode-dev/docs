"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[524],{21990:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"API-Reference/filesystem/RemoteFile","title":"RemoteFile","description":"Import :","source":"@site/api/API-Reference/filesystem/RemoteFile.md","sourceDirName":"API-Reference/filesystem","slug":"/API-Reference/filesystem/RemoteFile","permalink":"/api/API-Reference/filesystem/RemoteFile","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"FileSystemStats","permalink":"/api/API-Reference/filesystem/FileSystemStats"},"next":{"title":"WatchedRoot","permalink":"/api/API-Reference/filesystem/WatchedRoot"}}');var n=i(74848),s=i(28453);const r={},c=void 0,d={},h=[{value:"Import :",id:"import-",level:3},{value:"RemoteFile",id:"remotefile",level:2},{value:"new RemoteFile(fullPath, fileSystem)",id:"new-remotefilefullpath-filesystem",level:3},{value:"remoteFile.toString()",id:"remotefiletostring",level:3},{value:"remoteFile.stat(callback)",id:"remotefilestatcallback",level:3},{value:"remoteFile.read([options], callback)",id:"remotefilereadoptions-callback",level:3},{value:"remoteFile.write(data, [options], [callback])",id:"remotefilewritedata-options-callback",level:3},{value:"remoteFile.exists(callback)",id:"remotefileexistscallback",level:3},{value:"remoteFile.unlink(callback)",id:"remotefileunlinkcallback",level:3},{value:"remoteFile.rename(callback)",id:"remotefilerenamecallback",level:3},{value:"remoteFile.moveToTrash(callback)",id:"remotefilemovetotrashcallback",level:3}];function a(e){const l={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h3,{id:"import-",children:"Import :"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-js",children:'const RemoteFile = brackets.getModule("filesystem/RemoteFile")\n'})}),"\n",(0,n.jsx)("a",{name:"RemoteFile"}),"\n",(0,n.jsx)(l.h2,{id:"remotefile",children:"RemoteFile"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Kind"}),": global class"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"#RemoteFile",children:"RemoteFile"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"#new_RemoteFile_new",children:"new RemoteFile(fullPath, fileSystem)"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"#RemoteFile+toString",children:".toString()"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"#RemoteFile+stat",children:".stat(callback)"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"#RemoteFile+read",children:".read([options], callback)"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"#RemoteFile+write",children:".write(data, [options], [callback])"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"#RemoteFile+exists",children:".exists(callback)"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"#RemoteFile+unlink",children:".unlink(callback)"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"#RemoteFile+rename",children:".rename(callback)"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"#RemoteFile+moveToTrash",children:".moveToTrash(callback)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("a",{name:"new_RemoteFile_new"}),"\n",(0,n.jsx)(l.h3,{id:"new-remotefilefullpath-filesystem",children:"new RemoteFile(fullPath, fileSystem)"}),"\n",(0,n.jsx)(l.p,{children:"Model for a RemoteFile."}),"\n",(0,n.jsxs)(l.p,{children:["This class should ",(0,n.jsx)(l.em,{children:"not"})," be instantiated directly. Use FileSystem.getFileForPath"]}),"\n",(0,n.jsx)(l.p,{children:"See the FileSystem class for more details."}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Param"}),(0,n.jsx)(l.th,{children:"Type"}),(0,n.jsx)(l.th,{children:"Description"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"fullPath"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(l.td,{children:"The full path for this File."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"fileSystem"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"FileSystem"})}),(0,n.jsx)(l.td,{children:"The file system associated with this File."})]})]})]}),"\n",(0,n.jsx)("a",{name:"RemoteFile+toString"}),"\n",(0,n.jsx)(l.h3,{id:"remotefiletostring",children:"remoteFile.toString()"}),"\n",(0,n.jsx)(l.p,{children:"Helpful toString for debugging and equality check purposes"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Kind"}),": instance method of ",(0,n.jsx)(l.a,{href:"#RemoteFile",children:(0,n.jsx)("code",{children:"RemoteFile"})})]}),"\n",(0,n.jsx)("a",{name:"RemoteFile+stat"}),"\n",(0,n.jsx)(l.h3,{id:"remotefilestatcallback",children:"remoteFile.stat(callback)"}),"\n",(0,n.jsx)(l.p,{children:"Returns the stats for the remote entry."}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Kind"}),": instance method of ",(0,n.jsx)(l.a,{href:"#RemoteFile",children:(0,n.jsx)("code",{children:"RemoteFile"})})]}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Param"}),(0,n.jsx)(l.th,{children:"Type"}),(0,n.jsx)(l.th,{children:"Description"})]})}),(0,n.jsx)(l.tbody,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"callback"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"function"})}),(0,n.jsx)(l.td,{children:"Callback with a      FileSystemError string or FileSystemStats object."})]})})]}),"\n",(0,n.jsx)("a",{name:"RemoteFile+read"}),"\n",(0,n.jsx)(l.h3,{id:"remotefilereadoptions-callback",children:"remoteFile.read([options], callback)"}),"\n",(0,n.jsx)(l.p,{children:"Reads a remote file."}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Kind"}),": instance method of ",(0,n.jsx)(l.a,{href:"#RemoteFile",children:(0,n.jsx)("code",{children:"RemoteFile"})})]}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Param"}),(0,n.jsx)(l.th,{children:"Type"}),(0,n.jsx)(l.th,{children:"Description"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"[options]"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"Object"})}),(0,n.jsx)(l.td,{children:"Currently unused."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"callback"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"function"})}),(0,n.jsx)(l.td,{children:"Callback that is passed the              FileSystemError string or the file's contents and its stats."})]})]})]}),"\n",(0,n.jsx)("a",{name:"RemoteFile+write"}),"\n",(0,n.jsx)(l.h3,{id:"remotefilewritedata-options-callback",children:"remoteFile.write(data, [options], [callback])"}),"\n",(0,n.jsx)(l.p,{children:"Write a file."}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Kind"}),": instance method of ",(0,n.jsx)(l.a,{href:"#RemoteFile",children:(0,n.jsx)("code",{children:"RemoteFile"})})]}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Param"}),(0,n.jsx)(l.th,{children:"Type"}),(0,n.jsx)(l.th,{children:"Description"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"data"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(l.td,{children:"Data to write."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"[options]"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)(l.td,{children:"Currently unused."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"[callback]"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"function"})}),(0,n.jsx)(l.td,{children:"Callback that is passed the              FileSystemError string or the file's new stats."})]})]})]}),"\n",(0,n.jsx)("a",{name:"RemoteFile+exists"}),"\n",(0,n.jsx)(l.h3,{id:"remotefileexistscallback",children:"remoteFile.exists(callback)"}),"\n",(0,n.jsx)(l.p,{children:"Check if the remote file exists or not"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Kind"}),": instance method of ",(0,n.jsx)(l.a,{href:"#RemoteFile",children:(0,n.jsx)("code",{children:"RemoteFile"})})]}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Param"}),(0,n.jsx)(l.th,{children:"Type"})]})}),(0,n.jsx)(l.tbody,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"callback"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"function"})})]})})]}),"\n",(0,n.jsx)("a",{name:"RemoteFile+unlink"}),"\n",(0,n.jsx)(l.h3,{id:"remotefileunlinkcallback",children:"remoteFile.unlink(callback)"}),"\n",(0,n.jsx)(l.p,{children:"Unlink the remote file"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Kind"}),": instance method of ",(0,n.jsx)(l.a,{href:"#RemoteFile",children:(0,n.jsx)("code",{children:"RemoteFile"})})]}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Param"}),(0,n.jsx)(l.th,{children:"Type"})]})}),(0,n.jsx)(l.tbody,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"callback"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"function"})})]})})]}),"\n",(0,n.jsx)("a",{name:"RemoteFile+rename"}),"\n",(0,n.jsx)(l.h3,{id:"remotefilerenamecallback",children:"remoteFile.rename(callback)"}),"\n",(0,n.jsx)(l.p,{children:"Rename the remote file"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Kind"}),": instance method of ",(0,n.jsx)(l.a,{href:"#RemoteFile",children:(0,n.jsx)("code",{children:"RemoteFile"})})]}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Param"}),(0,n.jsx)(l.th,{children:"Type"})]})}),(0,n.jsx)(l.tbody,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"callback"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"function"})})]})})]}),"\n",(0,n.jsx)("a",{name:"RemoteFile+moveToTrash"}),"\n",(0,n.jsx)(l.h3,{id:"remotefilemovetotrashcallback",children:"remoteFile.moveToTrash(callback)"}),"\n",(0,n.jsx)(l.p,{children:"Move the remote file to trash"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Kind"}),": instance method of ",(0,n.jsx)(l.a,{href:"#RemoteFile",children:(0,n.jsx)("code",{children:"RemoteFile"})})]}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Param"}),(0,n.jsx)(l.th,{children:"Type"})]})}),(0,n.jsx)(l.tbody,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"callback"}),(0,n.jsx)(l.td,{children:(0,n.jsx)("code",{children:"function"})})]})})]})]})}function o(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,l,i)=>{i.d(l,{R:()=>r,x:()=>c});var t=i(96540);const n={},s=t.createContext(n);function r(e){const l=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:l},e.children)}}}]);