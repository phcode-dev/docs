"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7860],{64698:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"API-Reference/search/FindInFiles","title":"FindInFiles","description":"Import :","source":"@site/api/API-Reference/search/FindInFiles.md","sourceDirName":"API-Reference/search","slug":"/API-Reference/search/FindInFiles","permalink":"/api/API-Reference/search/FindInFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"FindBar","permalink":"/api/API-Reference/search/FindBar"},"next":{"title":"FindUtils","permalink":"/api/API-Reference/search/FindUtils"}}');var n=r(74848),i=r(28453);const c={},d=void 0,l={},o=[{value:"Import :",id:"import-",level:3},{value:"searchModel : <code>SearchModel</code>",id:"searchmodel--searchmodel",level:2},{value:"@type : <code>Object</code>",id:"type--object",level:2},{value:"getCandidateFiles(scope) \u21d2 <code>$.Promise</code>",id:"getcandidatefilesscope--promise",level:2},{value:"doSearchInScope(queryInfo, scope, filter, replaceText, candidateFilesPromise) \u21d2 <code>$.Promise</code>",id:"dosearchinscopequeryinfo-scope-filter-replacetext-candidatefilespromise--promise",level:2},{value:"doReplace(results, replaceText, options, item, error) \u21d2 <code>$.Promise</code>",id:"doreplaceresults-replacetext-options-item-error--promise",level:2},{value:"getNextPageofSearchResults() \u21d2 <code>object</code>",id:"getnextpageofsearchresults--object",level:2},{value:"getAllSearchResults() \u21d2 <code>object</code>",id:"getallsearchresults--object",level:2}];function h(e){const s={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h3,{id:"import-",children:"Import :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:'const FindInFiles = brackets.getModule("search/FindInFiles")\n'})}),"\n",(0,n.jsx)("a",{name:"searchModel"}),"\n",(0,n.jsxs)(s.h2,{id:"searchmodel--searchmodel",children:["searchModel : ",(0,n.jsx)("code",{children:"SearchModel"})]}),"\n",(0,n.jsx)(s.p,{children:"The search query and results model."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Kind"}),": global variable"]}),"\n",(0,n.jsx)("a",{name:"@type"}),"\n",(0,n.jsxs)(s.h2,{id:"type--object",children:["@type : ",(0,n.jsx)("code",{children:"Object"})]}),"\n",(0,n.jsx)(s.p,{children:"Token used to indicate a specific reason for zero search results"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Kind"}),": global constant"]}),"\n",(0,n.jsx)("a",{name:"getCandidateFiles"}),"\n",(0,n.jsxs)(s.h2,{id:"getcandidatefilesscope--promise",children:["getCandidateFiles(scope) \u21d2 ",(0,n.jsx)("code",{children:"$.Promise"})]}),"\n",(0,n.jsx)(s.p,{children:"Finds all candidate files to search in the given scope's subtree that are not binary content. Does NOT apply\nthe current filter yet."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Kind"}),": global function",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Returns"}),": ",(0,n.jsx)("code",{children:"$.Promise"})," - A promise that will be resolved with the list of files in the scope. Never rejected."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"scope"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"FileSystemEntry"})}),(0,n.jsx)(s.td,{children:"Search scope, or null if whole project"})]})})]}),"\n",(0,n.jsx)("a",{name:"doSearchInScope"}),"\n",(0,n.jsxs)(s.h2,{id:"dosearchinscopequeryinfo-scope-filter-replacetext-candidatefilespromise--promise",children:["doSearchInScope(queryInfo, scope, filter, replaceText, candidateFilesPromise) \u21d2 ",(0,n.jsx)("code",{children:"$.Promise"})]}),"\n",(0,n.jsx)(s.p,{children:"Does a search in the given scope with the given filter. Used when you want to start a search\nprogrammatically. Make sure that project indexing is complete by calling isProjectIndexingComplete()\nElse, an empty result will be returned if search is invoked before any files are indexed."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Kind"}),": global function",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Returns"}),": ",(0,n.jsx)("code",{children:"$.Promise"})," - A promise that's resolved with the search results or rejected when the find competes."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"queryInfo"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"Object"})}),(0,n.jsx)(s.td,{children:"Query info object"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"scope"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"Entry"})}),(0,n.jsx)(s.td,{children:"Project file/subfolder to search within; else searches whole project."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"filter"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(s.td,{children:'A "compiled" filter as returned by FileFilters.compile(), or null for no filter'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"replaceText"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(s.td,{children:"If this is a replacement, the text to replace matches with. This is just      stored in the model for later use - the replacement is not actually performed right now."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"candidateFilesPromise"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"$.Promise"})}),(0,n.jsx)(s.td,{children:"If specified, a promise that should resolve with the same set of files that      getCandidateFiles(scope) would return."})]})]})]}),"\n",(0,n.jsx)("a",{name:"doReplace"}),"\n",(0,n.jsxs)(s.h2,{id:"doreplaceresults-replacetext-options-item-error--promise",children:["doReplace(results, replaceText, options, item, error) \u21d2 ",(0,n.jsx)("code",{children:"$.Promise"})]}),"\n",(0,n.jsxs)(s.p,{children:["Replaces a set of search results with the specified ",(0,n.jsx)(s.code,{children:"replaceText"}),", either on disk or in memory."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Kind"}),": global function",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Returns"}),": ",(0,n.jsx)("code",{children:"$.Promise"})," - A promise that resolves when the replacement is finished or is rejected with an array of errors if any occur.\nEach item in the array will be an object containing:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"results"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"Object"})}),(0,n.jsxs)(s.td,{children:["- The list of results to replace, as returned from ",(0,n.jsx)(s.code,{children:"_doSearch"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"replaceText"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(s.td,{children:"The text to replace each result with."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"options"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"Object"})}),(0,n.jsx)(s.td,{children:"An options object:"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"options.forceFilesOpen"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"boolean"})}),(0,n.jsx)(s.td,{children:"Whether to open all files in editors and perform replacements there instead of on disk.          Note that even if this is false, replacements will still occur in memory for files already open in editors."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"options.isRegexp"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"boolean"})}),(0,n.jsxs)(s.td,{children:["Indicates if the original query was a regular expression. If true, $-substitution is applied to the ",(0,n.jsx)(s.code,{children:"replaceText"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"item"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(s.td,{children:"The full path to the file that could not be updated."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"error"}),(0,n.jsx)(s.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)(s.td,{children:["Either a FileSystem error or one of the ",(0,n.jsx)(s.code,{children:"FindInFiles.ERROR_*"})," constants."]})]})]})]}),"\n",(0,n.jsx)("a",{name:"getNextPageofSearchResults"}),"\n",(0,n.jsxs)(s.h2,{id:"getnextpageofsearchresults--object",children:["getNextPageofSearchResults() \u21d2 ",(0,n.jsx)("code",{children:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"Gets the next page of search results to append to the result set."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Kind"}),": global function",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Returns"}),": ",(0,n.jsx)("code",{children:"object"})," - A promise that's resolved with the search results or rejected when the find competes."]}),"\n",(0,n.jsx)("a",{name:"getAllSearchResults"}),"\n",(0,n.jsxs)(s.h2,{id:"getallsearchresults--object",children:["getAllSearchResults() \u21d2 ",(0,n.jsx)("code",{children:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"Get all the search results."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Kind"}),": global function",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Returns"}),": ",(0,n.jsx)("code",{children:"object"})," - A promise that's resolved with the search results or rejected when the find competes."]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>d});var t=r(96540);const n={},i=t.createContext(n);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);