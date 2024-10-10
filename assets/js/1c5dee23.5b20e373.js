"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[539],{31431:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(74848),n=s(28453);const r={},l=void 0,d={id:"API-Reference/utils/StringUtils",title:"StringUtils",description:"Import :",source:"@site/api/API-Reference/utils/StringUtils.md",sourceDirName:"API-Reference/utils",slug:"/API-Reference/utils/StringUtils",permalink:"/api/API-Reference/utils/StringUtils",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/api/API-Reference/utils/Metrics"},next:{title:"NotificationUI",permalink:"/api/API-Reference/widgets/NotificationUI"}},h={},c=[{value:"Import :",id:"import-",level:3},{value:"utils/StringUtils",id:"utilsstringutils",level:2},{value:"utils/StringUtils.format(str, Arguments) \u21d2 <code>string</code>",id:"utilsstringutilsformatstr-arguments--string",level:3},{value:"utils/StringUtils.getLines(text) \u21d2 <code>Array.&lt;string&gt;</code>",id:"utilsstringutilsgetlinestext--arraystring",level:3},{value:"utils/StringUtils.offsetToLineNum(textOrLines, offset) \u21d2 <code>number</code>",id:"utilsstringutilsoffsettolinenumtextorlines-offset--number",level:3},{value:"utils/StringUtils.startsWith(str, prefix) \u21d2 <code>Boolean</code>",id:"utilsstringutilsstartswithstr-prefix--boolean",level:3},{value:"utils/StringUtils.endsWith(str, suffix)",id:"utilsstringutilsendswithstr-suffix",level:3},{value:"utils/StringUtils.breakableUrl(url) \u21d2 <code>string</code>",id:"utilsstringutilsbreakableurlurl--string",level:3},{value:"utils/StringUtils.prettyPrintBytes(bytes, precision) \u21d2 <code>string</code>",id:"utilsstringutilsprettyprintbytesbytes-precision--string",level:3},{value:"utils/StringUtils.truncate(str, len) \u21d2 <code>string</code>",id:"utilsstringutilstruncatestr-len--string",level:3},{value:"utils/StringUtils.hashCode(str) \u21d2 <code>number</code>",id:"utilsstringutilshashcodestr--number",level:3},{value:"utils/StringUtils.randomString(stringLength, [prefix]) \u21d2 <code>string</code>",id:"utilsstringutilsrandomstringstringlength-prefix--string",level:3}];function o(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"import-",children:"Import :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'brackets.getModule("utils/StringUtils")\n'})}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils"}),"\n",(0,i.jsx)(t.h2,{id:"utilsstringutils",children:"utils/StringUtils"}),"\n",(0,i.jsx)(t.p,{children:"Utilities functions related to string manipulation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:"utils/StringUtils"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#module_utils/StringUtils..format",children:".format(str, Arguments)"})," \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#module_utils/StringUtils..getLines",children:".getLines(text)"})," \u21d2 ",(0,i.jsx)("code",{children:"Array.<string>"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#module_utils/StringUtils..offsetToLineNum",children:".offsetToLineNum(textOrLines, offset)"})," \u21d2 ",(0,i.jsx)("code",{children:"number"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#module_utils/StringUtils..startsWith",children:".startsWith(str, prefix)"})," \u21d2 ",(0,i.jsx)("code",{children:"Boolean"})]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#module_utils/StringUtils..endsWith",children:".endsWith(str, suffix)"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#module_utils/StringUtils..breakableUrl",children:".breakableUrl(url)"})," \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#module_utils/StringUtils..prettyPrintBytes",children:".prettyPrintBytes(bytes, precision)"})," \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#module_utils/StringUtils..truncate",children:".truncate(str, len)"})," \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#module_utils/StringUtils..hashCode",children:".hashCode(str)"})," \u21d2 ",(0,i.jsx)("code",{children:"number"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#module_utils/StringUtils..randomString",children:".randomString(stringLength, [prefix])"})," \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..format"}),"\n",(0,i.jsxs)(t.h3,{id:"utilsstringutilsformatstr-arguments--string",children:["utils/StringUtils.format(str, Arguments) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"Format a string by replacing placeholder symbols with passed in arguments."}),"\n",(0,i.jsxs)(t.p,{children:['Example: var formatted = StringUtils.format("Hello ',0,'", "World");']}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - Formatted string"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(t.td,{children:"The base string"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Arguments"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"rest"})}),(0,i.jsx)(t.td,{children:"to be substituted into the string"})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..getLines"}),"\n",(0,i.jsxs)(t.h3,{id:"utilsstringutilsgetlinestext--arraystring",children:["utils/StringUtils.getLines(text) \u21d2 ",(0,i.jsx)("code",{children:"Array.<string>"})]}),"\n",(0,i.jsx)(t.p,{children:"Splits the text by new line characters and returns an array of lines"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"Array.<string>"})," - lines"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"text"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"string"})})]})})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..offsetToLineNum"}),"\n",(0,i.jsxs)(t.h3,{id:"utilsstringutilsoffsettolinenumtextorlines-offset--number",children:["utils/StringUtils.offsetToLineNum(textOrLines, offset) \u21d2 ",(0,i.jsx)("code",{children:"number"})]}),"\n",(0,i.jsx)(t.p,{children:"Returns a line number corresponding to an offset in some text. The text can\nbe specified as a single string or as an array of strings that correspond to\nthe lines of the string."}),"\n",(0,i.jsx)(t.p,{children:"Specify the text in lines when repeatedly calling the function on the same\ntext in a loop. Use getLines() to divide the text into lines, then repeatedly call\nthis function to compute a line number from the offset."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"number"})," - line number"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"textOrLines"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("code",{children:"string"})," | ",(0,i.jsx)("code",{children:"Array.<string>"})]}),(0,i.jsx)(t.td,{children:"string or array of lines from which      to compute the line number from the offset"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"offset"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"number"})}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..startsWith"}),"\n",(0,i.jsxs)(t.h3,{id:"utilsstringutilsstartswithstr-prefix--boolean",children:["utils/StringUtils.startsWith(str, prefix) \u21d2 ",(0,i.jsx)("code",{children:"Boolean"})]}),"\n",(0,i.jsx)(t.p,{children:"Returns true if the given string starts with the given prefix."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"String"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prefix"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"String"})})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..endsWith"}),"\n",(0,i.jsx)(t.h3,{id:"utilsstringutilsendswithstr-suffix",children:"utils/StringUtils.endsWith(str, suffix)"}),"\n",(0,i.jsx)(t.p,{children:"Returns true if the given string ends with the given suffix."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"suffix"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"string"})})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..breakableUrl"}),"\n",(0,i.jsxs)(t.h3,{id:"utilsstringutilsbreakableurlurl--string",children:["utils/StringUtils.breakableUrl(url) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"Return an escaped path or URL string that can be broken near path separators."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - the formatted path or URL"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"url"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(t.td,{children:"the path or URL to format"})]})})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..prettyPrintBytes"}),"\n",(0,i.jsxs)(t.h3,{id:"utilsstringutilsprettyprintbytesbytes-precision--string",children:["utils/StringUtils.prettyPrintBytes(bytes, precision) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"Converts number of bytes into human readable format.\nIf param bytes is negative it returns the number without any changes."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bytes"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"number"})}),(0,i.jsx)(t.td,{children:"Number of bytes to convert"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"precision"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"number"})}),(0,i.jsx)(t.td,{children:"Number of digits after the decimal separator"})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..truncate"}),"\n",(0,i.jsxs)(t.h3,{id:"utilsstringutilstruncatestr-len--string",children:["utils/StringUtils.truncate(str, len) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"Truncate text to specified length."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - Returns truncated text only if it was changed"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(t.td,{children:"Text to be truncated."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"len"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"number"})}),(0,i.jsx)(t.td,{children:"Length to which text should be truncated"})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..hashCode"}),"\n",(0,i.jsxs)(t.h3,{id:"utilsstringutilshashcodestr--number",children:["utils/StringUtils.hashCode(str) \u21d2 ",(0,i.jsx)("code",{children:"number"})]}),"\n",(0,i.jsxs)(t.p,{children:["Computes a 32bit hash from the given string\nTaken from ",(0,i.jsx)(t.a,{href:"http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery",children:"http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"number"})," - The 32-bit hash",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Cc"}),": wiki attribution: esmiralha"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(t.td,{children:"The string for which hash is to be computed"})]})})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..randomString"}),"\n",(0,i.jsxs)(t.h3,{id:"utilsstringutilsrandomstringstringlength-prefix--string",children:["utils/StringUtils.randomString(stringLength, [prefix]) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"Generates a random nonce string of the specified length."}),"\n",(0,i.jsx)(t.p,{children:"!!!Should not be used for crypto secure workflows.!!!"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(t.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - - The randomly generated nonce."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"stringLength"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"number"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"10"})}),(0,i.jsx)(t.td,{children:"The length of the nonce in bytes. default 10."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"[prefix]"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"optional prefix"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>d});var i=s(96540);const n={},r=i.createContext(n);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);