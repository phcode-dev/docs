"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1950],{12862:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"API-Reference/filesystem/File","title":"File","description":"Import :","source":"@site/api/API-Reference/filesystem/File.md","sourceDirName":"API-Reference/filesystem","slug":"/API-Reference/filesystem/File","permalink":"/api/API-Reference/filesystem/File","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Directory","permalink":"/api/API-Reference/filesystem/Directory"},"next":{"title":"FileIndex","permalink":"/api/API-Reference/filesystem/FileIndex"}}');var t=l(74848),n=l(28453);const r={},d=void 0,c={},a=[{value:"Import :",id:"import-",level:3},{value:"File",id:"file",level:2},{value:"new File(fullPath, fileSystem)",id:"new-filefullpath-filesystem",level:3},{value:"file.read([options], callback)",id:"filereadoptions-callback",level:3},{value:"file.write(data, [options], [callback])",id:"filewritedata-options-callback",level:3}];function o(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h3,{id:"import-",children:"Import :"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'const File = brackets.getModule("filesystem/File")\n'})}),"\n",(0,t.jsx)("a",{name:"File"}),"\n",(0,t.jsx)(i.h2,{id:"file",children:"File"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global class"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#File",children:"File"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#new_File_new",children:"new File(fullPath, fileSystem)"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#File+read",children:".read([options], callback)"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#File+write",children:".write(data, [options], [callback])"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("a",{name:"new_File_new"}),"\n",(0,t.jsx)(i.h3,{id:"new-filefullpath-filesystem",children:"new File(fullPath, fileSystem)"}),"\n",(0,t.jsx)(i.p,{children:"Model for a File."}),"\n",(0,t.jsxs)(i.p,{children:["This class should ",(0,t.jsx)(i.em,{children:"not"})," be instantiated directly. Use FileSystem.getFileForPath,\rFileSystem.resolve, or Directory.getContents to create an instance of this class."]}),"\n",(0,t.jsx)(i.p,{children:"See the FileSystem class for more details."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Param"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"fullPath"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(i.td,{children:"The full path for this File."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"fileSystem"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"FileSystem"})}),(0,t.jsx)(i.td,{children:"The file system associated with this File."})]})]})]}),"\n",(0,t.jsx)("a",{name:"File+read"}),"\n",(0,t.jsx)(i.h3,{id:"filereadoptions-callback",children:"file.read([options], callback)"}),"\n",(0,t.jsx)(i.p,{children:"Read a file."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": instance method of ",(0,t.jsx)(i.a,{href:"#File",children:(0,t.jsx)("code",{children:"File"})})]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Param"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[options]"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"Object"})}),(0,t.jsxs)(i.td,{children:["properties {encoding: 'one of format supported here: ",(0,t.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/encoding'%7D",children:"https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/encoding'}"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"callback"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"function"})}),(0,t.jsx)(i.td,{children:"Callback that is passed the              FileSystemError string or the file's contents and its stats."})]})]})]}),"\n",(0,t.jsx)("a",{name:"File+write"}),"\n",(0,t.jsx)(i.h3,{id:"filewritedata-options-callback",children:"file.write(data, [options], [callback])"}),"\n",(0,t.jsx)(i.p,{children:"Write a file."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": instance method of ",(0,t.jsx)(i.a,{href:"#File",children:(0,t.jsx)("code",{children:"File"})})]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Param"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"data"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(i.td,{children:"Data to write."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[options]"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"Object"})}),(0,t.jsxs)(i.td,{children:["properties {encoding: 'one of format supported here: ",(0,t.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/encoding'%7D",children:"https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/encoding'}"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[callback]"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"function"})}),(0,t.jsx)(i.td,{children:"Callback that is passed the              FileSystemError string or the file's new stats."})]})]})]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,i,l)=>{l.d(i,{R:()=>r,x:()=>d});var s=l(96540);const t={},n=s.createContext(t);function r(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);