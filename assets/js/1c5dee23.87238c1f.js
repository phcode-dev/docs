"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[539],{31431:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var i=s(74848),r=s(28453);const n={},l=void 0,d={id:"API-Reference/utils/StringUtils",title:"StringUtils",description:"Import :",source:"@site/api/API-Reference/utils/StringUtils.md",sourceDirName:"API-Reference/utils",slug:"/API-Reference/utils/StringUtils",permalink:"/api/API-Reference/utils/StringUtils",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StringMatch",permalink:"/api/API-Reference/utils/StringMatch"},next:{title:"ValidationUtils",permalink:"/api/API-Reference/utils/ValidationUtils"}},h={},c=[{value:"Import :",id:"import-",level:3},{value:"utils/StringUtils",id:"utilsstringutils",level:2},{value:"utils/StringUtils.format(str, Arguments) \u21d2 <code>string</code>",id:"utilsstringutilsformatstr-arguments--string",level:3},{value:"utils/StringUtils.getLines(text) \u21d2 <code>Array.&lt;string&gt;</code>",id:"utilsstringutilsgetlinestext--arraystring",level:3},{value:"utils/StringUtils.offsetToLineNum(textOrLines, offset) \u21d2 <code>number</code>",id:"utilsstringutilsoffsettolinenumtextorlines-offset--number",level:3},{value:"utils/StringUtils.startsWith(str, prefix) \u21d2 <code>Boolean</code>",id:"utilsstringutilsstartswithstr-prefix--boolean",level:3},{value:"utils/StringUtils.endsWith(str, suffix)",id:"utilsstringutilsendswithstr-suffix",level:3},{value:"utils/StringUtils.breakableUrl(url) \u21d2 <code>string</code>",id:"utilsstringutilsbreakableurlurl--string",level:3},{value:"utils/StringUtils.prettyPrintBytes(bytes, precision) \u21d2 <code>string</code>",id:"utilsstringutilsprettyprintbytesbytes-precision--string",level:3},{value:"utils/StringUtils.truncate(str, len) \u21d2 <code>string</code>",id:"utilsstringutilstruncatestr-len--string",level:3},{value:"utils/StringUtils.hashCode(str) \u21d2 <code>number</code>",id:"utilsstringutilshashcodestr--number",level:3},{value:"utils/StringUtils.randomString(stringLength, [prefix]) \u21d2 <code>string</code>",id:"utilsstringutilsrandomstringstringlength-prefix--string",level:3}];function o(t){const e={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"import-",children:"Import :"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'const StringUtils = brackets.getModule("utils/StringUtils")\n'})}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils"}),"\n",(0,i.jsx)(e.h2,{id:"utilsstringutils",children:"utils/StringUtils"}),"\n",(0,i.jsx)(e.p,{children:"Utilities functions related to string manipulation"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:"utils/StringUtils"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#module_utils/StringUtils..format",children:".format(str, Arguments)"})," \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#module_utils/StringUtils..getLines",children:".getLines(text)"})," \u21d2 ",(0,i.jsx)("code",{children:"Array.<string>"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#module_utils/StringUtils..offsetToLineNum",children:".offsetToLineNum(textOrLines, offset)"})," \u21d2 ",(0,i.jsx)("code",{children:"number"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#module_utils/StringUtils..startsWith",children:".startsWith(str, prefix)"})," \u21d2 ",(0,i.jsx)("code",{children:"Boolean"})]}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#module_utils/StringUtils..endsWith",children:".endsWith(str, suffix)"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#module_utils/StringUtils..breakableUrl",children:".breakableUrl(url)"})," \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#module_utils/StringUtils..prettyPrintBytes",children:".prettyPrintBytes(bytes, precision)"})," \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#module_utils/StringUtils..truncate",children:".truncate(str, len)"})," \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#module_utils/StringUtils..hashCode",children:".hashCode(str)"})," \u21d2 ",(0,i.jsx)("code",{children:"number"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#module_utils/StringUtils..randomString",children:".randomString(stringLength, [prefix])"})," \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..format"}),"\n",(0,i.jsxs)(e.h3,{id:"utilsstringutilsformatstr-arguments--string",children:["utils/StringUtils.format(str, Arguments) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(e.p,{children:"Format a string by replacing placeholder symbols with passed in arguments."}),"\n",(0,i.jsxs)(e.p,{children:['Example: var formatted = StringUtils.format("Hello ',0,'", "World");']}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - Formatted string"]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"str"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(e.td,{children:"The base string"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Arguments"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"rest"})}),(0,i.jsx)(e.td,{children:"to be substituted into the string"})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..getLines"}),"\n",(0,i.jsxs)(e.h3,{id:"utilsstringutilsgetlinestext--arraystring",children:["utils/StringUtils.getLines(text) \u21d2 ",(0,i.jsx)("code",{children:"Array.<string>"})]}),"\n",(0,i.jsx)(e.p,{children:"Splits the text by new line characters and returns an array of lines"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"Array.<string>"})," - lines"]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"text"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"string"})})]})})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..offsetToLineNum"}),"\n",(0,i.jsxs)(e.h3,{id:"utilsstringutilsoffsettolinenumtextorlines-offset--number",children:["utils/StringUtils.offsetToLineNum(textOrLines, offset) \u21d2 ",(0,i.jsx)("code",{children:"number"})]}),"\n",(0,i.jsx)(e.p,{children:"Returns a line number corresponding to an offset in some text. The text can\rbe specified as a single string or as an array of strings that correspond to\rthe lines of the string."}),"\n",(0,i.jsx)(e.p,{children:"Specify the text in lines when repeatedly calling the function on the same\rtext in a loop. Use getLines() to divide the text into lines, then repeatedly call\rthis function to compute a line number from the offset."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"number"})," - line number"]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"textOrLines"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)("code",{children:"string"})," | ",(0,i.jsx)("code",{children:"Array.<string>"})]}),(0,i.jsx)(e.td,{children:"string or array of lines from which      to compute the line number from the offset"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"offset"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"number"})}),(0,i.jsx)(e.td,{})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..startsWith"}),"\n",(0,i.jsxs)(e.h3,{id:"utilsstringutilsstartswithstr-prefix--boolean",children:["utils/StringUtils.startsWith(str, prefix) \u21d2 ",(0,i.jsx)("code",{children:"Boolean"})]}),"\n",(0,i.jsx)(e.p,{children:"Returns true if the given string starts with the given prefix."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})})]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"str"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"String"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"prefix"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"String"})})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..endsWith"}),"\n",(0,i.jsx)(e.h3,{id:"utilsstringutilsendswithstr-suffix",children:"utils/StringUtils.endsWith(str, suffix)"}),"\n",(0,i.jsx)(e.p,{children:"Returns true if the given string ends with the given suffix."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})})]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"str"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"string"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"suffix"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"string"})})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..breakableUrl"}),"\n",(0,i.jsxs)(e.h3,{id:"utilsstringutilsbreakableurlurl--string",children:["utils/StringUtils.breakableUrl(url) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(e.p,{children:"Return an escaped path or URL string that can be broken near path separators."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - the formatted path or URL"]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"url"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(e.td,{children:"the path or URL to format"})]})})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..prettyPrintBytes"}),"\n",(0,i.jsxs)(e.h3,{id:"utilsstringutilsprettyprintbytesbytes-precision--string",children:["utils/StringUtils.prettyPrintBytes(bytes, precision) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(e.p,{children:"Converts number of bytes into human readable format.\rIf param bytes is negative it returns the number without any changes."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})})]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"bytes"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"number"})}),(0,i.jsx)(e.td,{children:"Number of bytes to convert"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"precision"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"number"})}),(0,i.jsx)(e.td,{children:"Number of digits after the decimal separator"})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..truncate"}),"\n",(0,i.jsxs)(e.h3,{id:"utilsstringutilstruncatestr-len--string",children:["utils/StringUtils.truncate(str, len) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(e.p,{children:"Truncate text to specified length."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - Returns truncated text only if it was changed"]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"str"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(e.td,{children:"Text to be truncated."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"len"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"number"})}),(0,i.jsx)(e.td,{children:"Length to which text should be truncated"})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..hashCode"}),"\n",(0,i.jsxs)(e.h3,{id:"utilsstringutilshashcodestr--number",children:["utils/StringUtils.hashCode(str) \u21d2 ",(0,i.jsx)("code",{children:"number"})]}),"\n",(0,i.jsxs)(e.p,{children:["Computes a 32bit hash from the given string\rTaken from ",(0,i.jsx)(e.a,{href:"http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery",children:"http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"number"})," - The 32-bit hash",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"Cc"}),": wiki attribution: esmiralha"]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"str"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(e.td,{children:"The string for which hash is to be computed"})]})})]}),"\n",(0,i.jsx)("a",{name:"module_utils/StringUtils..randomString"}),"\n",(0,i.jsxs)(e.h3,{id:"utilsstringutilsrandomstringstringlength-prefix--string",children:["utils/StringUtils.randomString(stringLength, [prefix]) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(e.p,{children:"Generates a random nonce string of the specified length."}),"\n",(0,i.jsx)(e.p,{children:"!!!Should not be used for crypto secure workflows.!!!"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Kind"}),": inner method of ",(0,i.jsx)(e.a,{href:"#module_utils/StringUtils",children:(0,i.jsx)("code",{children:"utils/StringUtils"})}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - - The randomly generated nonce."]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Default"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"stringLength"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"number"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"10"})}),(0,i.jsx)(e.td,{children:"The length of the nonce in bytes. default 10."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"[prefix]"}),(0,i.jsx)(e.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"optional prefix"})]})]})]})]})}function x(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(o,{...t})}):o(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>l,x:()=>d});var i=s(96540);const r={},n=i.createContext(r);function l(t){const e=i.useContext(n);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:l(t.components),i.createElement(n.Provider,{value:e},t.children)}}}]);