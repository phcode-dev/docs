"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3134],{99817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>h,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"API-Reference/utils/StringMatch","title":"StringMatch","description":"Import :","source":"@site/api/API-Reference/utils/StringMatch.md","sourceDirName":"API-Reference/utils","slug":"/API-Reference/utils/StringMatch","permalink":"/api/API-Reference/utils/StringMatch","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Resizer","permalink":"/api/API-Reference/utils/Resizer"},"next":{"title":"StringUtils","permalink":"/api/API-Reference/utils/StringUtils"}}');var n=r(74848),i=r(28453);const c={},h=void 0,d={},l=[{value:"Import :",id:"import-",level:3},{value:"SearchResult()",id:"searchresult",level:2},{value:"stringMatch(str, query, options, special) \u21d2 <code>Object</code>",id:"stringmatchstr-query-options-special--object",level:2},{value:"multiFieldSort(searchResults, fieldSpec)",id:"multifieldsortsearchresults-fieldspec",level:2},{value:"basicMatchSort()",id:"basicmatchsort",level:2},{value:"codeHintsSort(query, choices, [options]) \u21d2 <code>Array.&lt;string&gt;</code>",id:"codehintssortquery-choices-options--arraystring",level:2},{value:"StringMatcher(options)",id:"stringmatcheroptions",level:2},{value:"stringMatcher.reset()",id:"stringmatcherreset",level:3},{value:"stringMatcher.match(str, query) \u21d2 <code>Object</code>",id:"stringmatchermatchstr-query--object",level:3}];function a(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"import-",children:"Import :"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'const StringMatch = brackets.getModule("utils/StringMatch")\n'})}),"\n",(0,n.jsx)("a",{name:"SearchResult"}),"\n",(0,n.jsx)(t.h2,{id:"searchresult",children:"SearchResult()"}),"\n",(0,n.jsx)(t.p,{children:"Object representing a search result with associated metadata (added as extra ad hoc fields)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,n.jsx)("a",{name:"stringMatch"}),"\n",(0,n.jsxs)(t.h2,{id:"stringmatchstr-query-options-special--object",children:["stringMatch(str, query, options, special) \u21d2 ",(0,n.jsx)("code",{children:"Object"})]}),"\n",(0,n.jsx)(t.p,{children:'Match str against the query using the QuickOpen algorithm provided by\nthe functions above. The general idea is to prefer matches of "special" characters and,\noptionally, matches that occur in the "last segment" (generally, the filename). stringMatch\nwill try to provide the best match and produces a "matchGoodness" score\nto allow for relative ranking.'}),"\n",(0,n.jsx)(t.p,{children:'The result object returned includes "stringRanges" which can be used to highlight\nthe matched portions of the string, in addition to the "matchGoodness"\nmentioned above. If DEBUG_SCORES is true, scoreDebug is set on the result\nto provide insight into the score.'}),"\n",(0,n.jsx)(t.p,{children:"The matching is done in a case-insensitive manner."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": global function",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Returns"}),": ",(0,n.jsx)("code",{children:"Object"})," - matched ranges and score"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(t.td,{children:"The string to search"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(t.td,{children:"The query string to find in string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"Object"})}),(0,n.jsx)(t.td,{children:'to control search behavior.                  preferPrefixMatches puts an exact case-insensitive prefix match ahead of all other matches,                  even short-circuiting the match logic. This option implies segmentedSearch=false.                  When segmentedSearch is true, the string is broken into segments by "/" characters                  and the last segment is searched first and matches there are scored higher.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"special"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"Object"})}),(0,n.jsx)(t.td,{children:"(optional) the specials data from findSpecialCharacters, if already known                  This is generally just used by StringMatcher for optimization."})]})]})]}),"\n",(0,n.jsx)("a",{name:"multiFieldSort"}),"\n",(0,n.jsx)(t.h2,{id:"multifieldsortsearchresults-fieldspec",children:"multiFieldSort(searchResults, fieldSpec)"}),"\n",(0,n.jsx)(t.p,{children:'Sorts an array of SearchResult objects on a primary field, followed by secondary fields\nin case of ties. \'fieldSpec\' provides the priority order for fields, where the first entry is the primary field, for example:\nmultiFieldSort(bugList, [ "milestone", "severity" ]);\nWould sort a bug list by milestone, and within each milestone sort bugs by severity.'}),"\n",(0,n.jsx)(t.p,{children:"fieldSpec can also include comparator functions of the form normally used by the sort()\nfunction."}),"\n",(0,n.jsx)(t.p,{children:"Any fields that have a string value are compared case-insensitively. Fields used should be\npresent on all SearchResult objects (no optional/undefined fields)."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"searchResults"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"#SearchResult",children:(0,n.jsx)("code",{children:"Array.<SearchResult>"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fieldSpec"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"Array.<string, function()>"})})]})]})]}),"\n",(0,n.jsx)("a",{name:"basicMatchSort"}),"\n",(0,n.jsx)(t.h2,{id:"basicmatchsort",children:"basicMatchSort()"}),"\n",(0,n.jsx)(t.p,{children:"Sorts search results generated by stringMatch(): results are sorted into several\ntiers based on how well they matched the search query, then sorted alphabetically\nwithin each tier."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,n.jsx)("a",{name:"codeHintsSort"}),"\n",(0,n.jsxs)(t.h2,{id:"codehintssortquery-choices-options--arraystring",children:["codeHintsSort(query, choices, [options]) \u21d2 ",(0,n.jsx)("code",{children:"Array.<string>"})]}),"\n",(0,n.jsx)(t.p,{children:"Retrieves the matching code hints based on the given query and choices array."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": global function",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Returns"}),": ",(0,n.jsx)("code",{children:"Array.<string>"})," - - An array of matching code hints."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(t.td,{children:"The search query to match against choices."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"choices"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"Array.<string>"})}),(0,n.jsx)(t.td,{children:"The list of possible code hints."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[options]"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)(t.td,{children:"An optional object to specify additional search options."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options.limit"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"number"})}),(0,n.jsx)(t.td,{children:"Maximum number of results to return"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options.boostPrefixList"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"Array.<string>"})}),(0,n.jsx)(t.td,{children:'Optional, Will rank matching items in the choices to top          if query starts with the array. EG: on typing b, we have to show background-color          to top. So we pass in ["background-color"] as boost prefix option along with other          css properties that we want to boost.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options.onlyContiguous"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"boolean"})}),(0,n.jsx)(t.td,{children:"is set, will only include contiguous results."})]})]})]}),"\n",(0,n.jsx)("a",{name:"StringMatcher"}),"\n",(0,n.jsx)(t.h2,{id:"stringmatcheroptions",children:"StringMatcher(options)"}),"\n",(0,n.jsx)(t.p,{children:"A StringMatcher provides an interface to the stringMatch function with built-in\ncaching. You should use a StringMatcher for the lifetime of queries over a\nsingle data set."}),"\n",(0,n.jsx)(t.p,{children:'You are free to store other data on this object to assist in higher-level caching.\n(This object\'s caches are all stored in "_" prefixed properties.)'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"Object"})}),(0,n.jsx)(t.td,{children:"to control search behavior.                  preferPrefixMatches puts an exact case-insensitive prefix match ahead of all other matches,                  even short-circuiting the match logic. This option implies segmentedSearch=false.                  segmentedSearch treats segments of the string specially."})]})})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#StringMatcher",children:"StringMatcher(options)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#StringMatcher+reset",children:".reset()"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#StringMatcher+match",children:".match(str, query)"})," \u21d2 ",(0,n.jsx)("code",{children:"Object"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("a",{name:"StringMatcher+reset"}),"\n",(0,n.jsx)(t.h3,{id:"stringmatcherreset",children:"stringMatcher.reset()"}),"\n",(0,n.jsx)(t.p,{children:"Clears the caches. Use this in the event that the caches may be invalid."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": instance method of ",(0,n.jsx)(t.a,{href:"#StringMatcher",children:(0,n.jsx)("code",{children:"StringMatcher"})})]}),"\n",(0,n.jsx)("a",{name:"StringMatcher+match"}),"\n",(0,n.jsxs)(t.h3,{id:"stringmatchermatchstr-query--object",children:["stringMatcher.match(str, query) \u21d2 ",(0,n.jsx)("code",{children:"Object"})]}),"\n",(0,n.jsx)(t.p,{children:"Performs a single match using the stringMatch function. See stringMatch for full documentation."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": instance method of ",(0,n.jsx)(t.a,{href:"#StringMatcher",children:(0,n.jsx)("code",{children:"StringMatcher"})}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Returns"}),": ",(0,n.jsx)("code",{children:"Object"})," - matched ranges and score"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(t.td,{children:"The string to search"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(t.td,{children:"The query string to find in string"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>h});var s=r(96540);const n={},i=s.createContext(n);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);