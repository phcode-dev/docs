"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7098],{30617:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var r=i(74848),l=i(28453);const n={},s=void 0,c={id:"API-Reference/search/FileFilters",title:"FileFilters",description:"Import :",source:"@site/api/API-Reference/search/FileFilters.md",sourceDirName:"API-Reference/search",slug:"/API-Reference/search/FileFilters",permalink:"/api/API-Reference/search/FileFilters",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WorkingSetView",permalink:"/api/API-Reference/project/WorkingSetView"},next:{title:"FindBar",permalink:"/api/API-Reference/search/FindBar"}},d={},o=[{value:"Import :",id:"import-",level:3},{value:"_picker : <code>DropdownButton</code>",id:"_picker--dropdownbutton",level:2},{value:"$filterContainer : <code>jQuery</code>",id:"filtercontainer--jquery",level:2},{value:"DropdownButton",id:"dropdownbutton",level:2},{value:"getActiveFilter() \u21d2 <code>Object</code>",id:"getactivefilter--object",level:2},{value:"setActiveFilter(filter, [filterType])",id:"setactivefilterfilter-filtertype",level:2},{value:"compile(userFilterString) \u21d2 <code>Object</code>",id:"compileuserfilterstring--object",level:2},{value:"filterPath(compiledFilter, fullPath) \u21d2 <code>boolean</code>",id:"filterpathcompiledfilter-fullpath--boolean",level:2},{value:"filterFileList(compiledFilter, files) \u21d2 <code>Array.&lt;File&gt;</code>",id:"filterfilelistcompiledfilter-files--arrayfile",level:2},{value:"getPathsMatchingFilter(compiledFilter, An) \u21d2 <code>Array.&lt;string&gt;</code>",id:"getpathsmatchingfiltercompiledfilter-an--arraystring",level:2},{value:"createFilterPicker() \u21d2 <code>jQueryObject</code>",id:"createfilterpicker--jqueryobject",level:2},{value:"showDropdown()",id:"showdropdown",level:2},{value:"closeDropdown()",id:"closedropdown",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"import-",children:"Import :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const FileFilters = brackets.getModule("search/FileFilters")\n'})}),"\n",(0,r.jsx)("a",{name:"_picker"}),"\n",(0,r.jsxs)(t.h2,{id:"_picker--dropdownbutton",children:["_picker : ",(0,r.jsx)(t.a,{href:"#DropdownButton",children:(0,r.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global variable"]}),"\n",(0,r.jsx)("a",{name:"$filterContainer"}),"\n",(0,r.jsxs)(t.h2,{id:"filtercontainer--jquery",children:["$filterContainer : ",(0,r.jsx)("code",{children:"jQuery"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global variable"]}),"\n",(0,r.jsx)("a",{name:"DropdownButton"}),"\n",(0,r.jsx)(t.h2,{id:"dropdownbutton",children:"DropdownButton"}),"\n",(0,r.jsx)(t.p,{children:"Utilities for managing file-set filters, as used in Find in Files.\rIncludes both UI for selecting/editing filters, as well as the actual file-filtering implementation."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global constant"]}),"\n",(0,r.jsx)("a",{name:"getActiveFilter"}),"\n",(0,r.jsxs)(t.h2,{id:"getactivefilter--object",children:["getActiveFilter() \u21d2 ",(0,r.jsx)("code",{children:"Object"})]}),"\n",(0,r.jsx)(t.p,{children:"A search filter is an array of one or more glob strings. The filter must be 'compiled' via compile()\rbefore passing to filterPath()/filterFileList()."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"Object"})," - a globeFilter filter that can be passed to filterPath()/filterFileList()."]}),"\n",(0,r.jsx)("a",{name:"setActiveFilter"}),"\n",(0,r.jsx)(t.h2,{id:"setactivefilterfilter-filtertype",children:"setActiveFilter(filter, [filterType])"}),"\n",(0,r.jsx)(t.p,{children:"Sets and save the index of the active filter. Automatically set when editFilter() is completed.\rIf no filter is passed in, then clear the last active filter index by setting it to -1."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filter"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("code",{children:"Object"})," | ",(0,r.jsx)("code",{children:"string"})]}),(0,r.jsx)(t.td,{children:"a globeFilter filter that can be passed to filterPath()/filterFileList()."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[filterType]"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"optional, one of FileFilters.FILTER_TYPE_*."})]})]})]}),"\n",(0,r.jsx)("a",{name:"compile"}),"\n",(0,r.jsxs)(t.h2,{id:"compileuserfilterstring--object",children:["compile(userFilterString) \u21d2 ",(0,r.jsx)("code",{children:"Object"})]}),"\n",(0,r.jsx)(t.p,{children:"Converts a user-specified filter object (as chosen in picker or retrieved from getFilters()) to a 'compiled' form\rthat can be used with filterPath()/filterFileList()."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"Object"})," - a globeFilter filter that can be passed to filterPath()/filterFileList()."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"userFilterString"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})})]})})]}),"\n",(0,r.jsx)("a",{name:"filterPath"}),"\n",(0,r.jsxs)(t.h2,{id:"filterpathcompiledfilter-fullpath--boolean",children:["filterPath(compiledFilter, fullPath) \u21d2 ",(0,r.jsx)("code",{children:"boolean"})]}),"\n",(0,r.jsx)(t.p,{children:"Returns false if the given path matches any of the exclusion globs in the given filter. Returns true\rif the path does not match any of the globs. If filtering many paths at once, use filterFileList()\rfor much better performance."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"compiledFilter"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)(t.td,{children:"'Compiled' filter object as returned by compile(), or null to no-op"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fullPath"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)("a",{name:"filterFileList"}),"\n",(0,r.jsxs)(t.h2,{id:"filterfilelistcompiledfilter-files--arrayfile",children:["filterFileList(compiledFilter, files) \u21d2 ",(0,r.jsx)("code",{children:"Array.<File>"})]}),"\n",(0,r.jsx)(t.p,{children:"Returns a copy of 'files' filtered to just those that don't match any of the exclusion globs in the filter."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"compiledFilter"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)(t.td,{children:"'Compiled' filter object as returned by compile(), or null to no-op"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"files"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Array.<File>"})}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)("a",{name:"getPathsMatchingFilter"}),"\n",(0,r.jsxs)(t.h2,{id:"getpathsmatchingfiltercompiledfilter-an--arraystring",children:["getPathsMatchingFilter(compiledFilter, An) \u21d2 ",(0,r.jsx)("code",{children:"Array.<string>"})]}),"\n",(0,r.jsx)(t.p,{children:"Returns a copy of 'file path' strings that match any of the exclusion globs in the filter."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"compiledFilter"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)(t.td,{children:"'Compiled' filter object as returned by compile(), or null to no-op"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"An"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Array.<string>"})}),(0,r.jsx)(t.td,{children:"array with a list of full file paths that matches atleast one of the filter."})]})]})]}),"\n",(0,r.jsx)("a",{name:"createFilterPicker"}),"\n",(0,r.jsxs)(t.h2,{id:"createfilterpicker--jqueryobject",children:["createFilterPicker() \u21d2 ",(0,r.jsx)("code",{children:"jQueryObject"})]}),"\n",(0,r.jsxs)(t.p,{children:["Creates a UI element for selecting a filter. The picker is populated with a list of recently used filters,\ran option to edit the selected filter, and another option to create a new filter. The client should call\r",(0,r.jsx)(t.code,{children:"commitDropdown()"})," when the UI containing the filter picker is confirmed, which updates the Most Recently\rUsed (MRU) order, and then use the returned filter object as needed."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"jQueryObject"})," - The Picker UI as a jQuery object."]}),"\n",(0,r.jsx)("a",{name:"showDropdown"}),"\n",(0,r.jsx)(t.h2,{id:"showdropdown",children:"showDropdown()"}),"\n",(0,r.jsx)(t.p,{children:"Allows unit tests to open the file filter dropdown list."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsx)("a",{name:"closeDropdown"}),"\n",(0,r.jsx)(t.h2,{id:"closedropdown",children:"closeDropdown()"}),"\n",(0,r.jsx)(t.p,{children:"Allows unit tests to close the file filter dropdown list."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var r=i(96540);const l={},n=r.createContext(l);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);