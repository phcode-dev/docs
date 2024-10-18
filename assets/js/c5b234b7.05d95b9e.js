"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3551],{13424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(74848),s=n(28453);const i={},l=void 0,c={id:"API-Reference/language/CSSUtils",title:"CSSUtils",description:"Import :",source:"@site/api/API-Reference/language/CSSUtils.md",sourceDirName:"API-Reference/language",slug:"/API-Reference/language/CSSUtils",permalink:"/api/API-Reference/language/CSSUtils",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FileSystemEntry",permalink:"/api/API-Reference/filesystem/FileSystemEntry"},next:{title:"CodeInspection",permalink:"/api/API-Reference/language/CodeInspection"}},o={},d=[{value:"Import :",id:"import-",level:3},{value:"CodeMirror",id:"codemirror",level:2},{value:"_bracketPairs : <code>Object</code>",id:"_bracketpairs--object",level:2},{value:"isCSSPreprocessorFile(filePath) \u21d2 <code>boolean</code>",id:"iscsspreprocessorfilefilepath--boolean",level:2},{value:"getInfoAtPos(editor, constPos) \u21d2 <code>Object</code>",id:"getinfoatposeditor-constpos--object",level:2},{value:"getInfoAtPos._contextCM",id:"getinfoatpos_contextcm",level:3},{value:"getCompleteSelectors(info, [useGroup]) \u21d2 <code>string</code>",id:"getcompleteselectorsinfo-usegroup--string",level:2},{value:"extractAllSelectors(text, documentMode) \u21d2 <code>Array.&lt;SelectorInfo&gt;</code>",id:"extractallselectorstext-documentmode--arrayselectorinfo",level:2},{value:"_stripAtRules(selector) \u21d2 <code>string</code>",id:"_stripatrulesselector--string",level:2},{value:"_getSelectorInFinalCSSForm(selectorArray) \u21d2 <code>string</code>",id:"_getselectorinfinalcssformselectorarray--string",level:2},{value:"_findAllMatchingSelectorsInText(text, selector, mode) \u21d2 <code>Object</code>",id:"_findallmatchingselectorsintexttext-selector-mode--object",level:2},{value:"_addSelectorsToResults(resultSelectors, selectorsToAdd, sourceDoc, lineOffset)",id:"_addselectorstoresultsresultselectors-selectorstoadd-sourcedoc-lineoffset",level:2},{value:"_findMatchingRulesInCSSFiles()",id:"_findmatchingrulesincssfiles",level:2},{value:"_findMatchingRulesInStyleBlocks()",id:"_findmatchingrulesinstyleblocks",level:2},{value:"findMatchingRules(selector, htmlDocument) \u21d2 <code>$.Promise</code>",id:"findmatchingrulesselector-htmldocument--promise",level:2},{value:"findSelectorAtDocumentPos(editor, pos) \u21d2 <code>string</code>",id:"findselectoratdocumentposeditor-pos--string",level:2},{value:"_removeComments(content) \u21d2 <code>string</code>",id:"_removecommentscontent--string",level:2},{value:"_removeStrings(content) \u21d2 <code>string</code>",id:"_removestringscontent--string",level:2},{value:"reduceStyleSheetForRegExParsing(content) \u21d2 <code>string</code>",id:"reducestylesheetforregexparsingcontent--string",level:2},{value:"addRuleToDocument(doc, selector, useTabChar, indentUnit) \u21d2 <code>Object</code>",id:"addruletodocumentdoc-selector-usetabchar-indentunit--object",level:2},{value:"consolidateRules()",id:"consolidaterules",level:2},{value:"getRangeSelectors(range) \u21d2 <code>string</code>",id:"getrangeselectorsrange--string",level:2},{value:"SelectorInfo : <code>Object</code>",id:"selectorinfo--object",level:2}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"import-",children:"Import :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const CSSUtils = brackets.getModule("language/CSSUtils")\n'})}),"\n",(0,r.jsx)("a",{name:"CodeMirror"}),"\n",(0,r.jsx)(t.h2,{id:"codemirror",children:"CodeMirror"}),"\n",(0,r.jsx)(t.p,{children:"Set of utilities for simple parsing of CSS text."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global variable"]}),"\n",(0,r.jsx)("a",{name:"_bracketPairs"}),"\n",(0,r.jsxs)(t.h2,{id:"_bracketpairs--object",children:["_bracketPairs : ",(0,r.jsx)("code",{children:"Object"})]}),"\n",(0,r.jsx)(t.p,{children:"List of all bracket pairs that is keyed by opening brackets, and the inverted list\rthat is keyed by closing brackets."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global variable"]}),"\n",(0,r.jsx)("a",{name:"isCSSPreprocessorFile"}),"\n",(0,r.jsxs)(t.h2,{id:"iscsspreprocessorfilefilepath--boolean",children:["isCSSPreprocessorFile(filePath) \u21d2 ",(0,r.jsx)("code",{children:"boolean"})]}),"\n",(0,r.jsx)(t.p,{children:"Determines if the given path is a CSS preprocessor file that CSSUtils supports."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"boolean"})," - true if LanguageManager identifies filePath as less or scss language."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filePath"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"Absolute path to the file."})]})})]}),"\n",(0,r.jsx)("a",{name:"getInfoAtPos"}),"\n",(0,r.jsxs)(t.h2,{id:"getinfoatposeditor-constpos--object",children:["getInfoAtPos(editor, constPos) \u21d2 ",(0,r.jsx)("code",{children:"Object"})]}),"\n",(0,r.jsx)(t.p,{children:"Returns a context info object for the given cursor position"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"Object"})," - A CSS context info object."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"editor"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Editor"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"constPos"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Object"})}),(0,r.jsx)(t.td,{children:"A CM pos (likely from editor.getCursorPos())"})]})]})]}),"\n",(0,r.jsx)("a",{name:"getInfoAtPos.._contextCM"}),"\n",(0,r.jsx)(t.h3,{id:"getinfoatpos_contextcm",children:"getInfoAtPos._contextCM"}),"\n",(0,r.jsx)(t.p,{children:"We will use this CM to cook css context in case of style attribute value\ras CM in htmlmixed mode doesn't yet identify this as css context. We provide\ra no-op display function to run CM without a DOM head."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": inner property of ",(0,r.jsx)(t.a,{href:"#getInfoAtPos",children:(0,r.jsx)("code",{children:"getInfoAtPos"})})]}),"\n",(0,r.jsx)("a",{name:"getCompleteSelectors"}),"\n",(0,r.jsxs)(t.h2,{id:"getcompleteselectorsinfo-usegroup--string",children:["getCompleteSelectors(info, [useGroup]) \u21d2 ",(0,r.jsx)("code",{children:"string"})]}),"\n",(0,r.jsx)(t.p,{children:"Return a string that shows the literal parent hierarchy of the selector\rin info."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"string"})," - the literal parent hierarchy of the selector"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"info"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#SelectorInfo",children:(0,r.jsx)("code",{children:"SelectorInfo"})})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[useGroup]"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"boolean"})}),(0,r.jsx)(t.td,{children:"true to append selectorGroup instead of selector"})]})]})]}),"\n",(0,r.jsx)("a",{name:"extractAllSelectors"}),"\n",(0,r.jsxs)(t.h2,{id:"extractallselectorstext-documentmode--arrayselectorinfo",children:["extractAllSelectors(text, documentMode) \u21d2 ",(0,r.jsx)(t.a,{href:"#SelectorInfo",children:(0,r.jsx)("code",{children:"Array.<SelectorInfo>"})})]}),"\n",(0,r.jsx)(t.p,{children:"Extracts all CSS selectors from the given text\rReturns an array of SelectorInfo. Each SelectorInfo is an object with the following properties:\r\nselector:                 the text of the selector (note: comma separated selector groups like\r\n\"h1, h2\" are broken into separate selectors)\r\nruleStartLine:            line in the text where the rule (including preceding comment) appears\r\nruleStartChar:            column in the line where the rule (including preceding comment) starts\r\nselectorStartLine:        line in the text where the selector appears\r\nselectorStartChar:        column in the line where the selector starts\r\nselectorEndLine:          line where the selector ends\r\nselectorEndChar:          column where the selector ends\r\nselectorGroupStartLine:   line where the comma-separated selector group (e.g. .foo, .bar, .baz)\r\nstarts that this selector (e.g. .baz) is part of. Particularly relevant for\r\ngroups that are on multiple lines.\r\nselectorGroupStartChar:   column in line where the selector group starts.\r\nselectorGroup:            the entire selector group containing this selector, or undefined if there\r\nis only one selector in the rule.\r\ndeclListStartLine:        line where the declaration list for the rule starts\r\ndeclListStartChar:        column in line where the declaration list for the rule starts\r\ndeclListEndLine:          line where the declaration list for the rule ends\r\ndeclListEndChar:          column in the line where the declaration list for the rule ends\r\nlevel:                    the level of the current selector including any containing @media block in the\r\nnesting level count. Use this property with caution since it is primarily for internal\r\nparsing use. For example, two sibling selectors may have different levels if one\r\nof them is nested inside an @media block and it should not be used for sibling info.\r\nparentSelectors:          all ancestor selectors separated with '/' if the current selector is a nested one"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)(t.a,{href:"#SelectorInfo",children:(0,r.jsx)("code",{children:"Array.<SelectorInfo>"})})," - Array with objects specifying selectors."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"CSS text to extract from"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"documentMode"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"language mode of the document that text belongs to, default to css if undefined."})]})]})]}),"\n",(0,r.jsx)("a",{name:"_stripAtRules"}),"\n",(0,r.jsxs)(t.h2,{id:"_stripatrulesselector--string",children:["_stripAtRules(selector) \u21d2 ",(0,r.jsx)("code",{children:"string"})]}),"\n",(0,r.jsx)(t.p,{children:"Helper function to remove whitespaces before and after a selector\rReturns trimmed selector if it is not an at-rule, or null if it starts with @."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"selector"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})})]})})]}),"\n",(0,r.jsx)("a",{name:"_getSelectorInFinalCSSForm"}),"\n",(0,r.jsxs)(t.h2,{id:"_getselectorinfinalcssformselectorarray--string",children:["_getSelectorInFinalCSSForm(selectorArray) \u21d2 ",(0,r.jsx)("code",{children:"string"})]}),"\n",(0,r.jsx)(t.p,{children:"Converts the given selector array into the actual CSS selectors similar to\rthose generated by a CSS preprocessor."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"selectorArray"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Array.<string>"})})]})})]}),"\n",(0,r.jsx)("a",{name:"_findAllMatchingSelectorsInText"}),"\n",(0,r.jsxs)(t.h2,{id:"_findallmatchingselectorsintexttext-selector-mode--object",children:["_findAllMatchingSelectorsInText(text, selector, mode) \u21d2 ",(0,r.jsx)("code",{children:"Object"})]}),"\n",(0,r.jsx)(t.p,{children:'Finds all instances of the specified selector in "text".\rReturns an Array of Objects with start and end properties.'}),"\n",(0,r.jsx)(t.p,{children:"For now, we only support simple selectors. This function will need to change\rdramatically to support full selectors."}),"\n",(0,r.jsx)(t.p,{children:"FUTURE: (JRB) It would be nice to eventually use the browser/jquery to do the selector evaluation.\rOne way to do this would be to take the user's HTML, add a special attribute to every tag with a UID,\rand then construct a DOM (using the commented out code above). Then, give this DOM and the selector to\rjquery and ask what matches. If the node that the user's cursor is in comes back from jquery, then\rwe know the selector applies."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"Object"})," - Array of objects containing the start and end line numbers (0-based, inclusive range) for each\rmatched selector."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"CSS text to search"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"selector"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"selector to search for"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mode"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"language mode of the document that text belongs to"})]})]})]}),"\n",(0,r.jsx)("a",{name:"_addSelectorsToResults"}),"\n",(0,r.jsx)(t.h2,{id:"_addselectorstoresultsresultselectors-selectorstoadd-sourcedoc-lineoffset",children:"_addSelectorsToResults(resultSelectors, selectorsToAdd, sourceDoc, lineOffset)"}),"\n",(0,r.jsx)(t.p,{children:"Converts the results of _findAllMatchingSelectorsInText() into a simpler bag of data and\rappends those new objects to the given 'resultSelectors' Array."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"resultSelectors"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Object"})}),(0,r.jsx)(t.td,{children:"Array"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"selectorsToAdd"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#SelectorInfo",children:(0,r.jsx)("code",{children:"Array.<SelectorInfo>"})})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sourceDoc"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Document"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lineOffset"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"number"})}),(0,r.jsx)(t.td,{children:"Amount to offset all line number info by. Used if the first line          of the parsed CSS text is not the first line of the sourceDoc."})]})]})]}),"\n",(0,r.jsx)("a",{name:"_findMatchingRulesInCSSFiles"}),"\n",(0,r.jsx)(t.h2,{id:"_findmatchingrulesincssfiles",children:"_findMatchingRulesInCSSFiles()"}),"\n",(0,r.jsx)(t.p,{children:"Finds matching selectors in CSS files; adds them to 'resultSelectors'"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsx)("a",{name:"_findMatchingRulesInStyleBlocks"}),"\n",(0,r.jsx)(t.h2,{id:"_findmatchingrulesinstyleblocks",children:"_findMatchingRulesInStyleBlocks()"}),"\n",(0,r.jsx)(t.p,{children:"Finds matching selectors in the 'style' block of a single HTML file; adds them to 'resultSelectors'"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsx)("a",{name:"findMatchingRules"}),"\n",(0,r.jsxs)(t.h2,{id:"findmatchingrulesselector-htmldocument--promise",children:["findMatchingRules(selector, htmlDocument) \u21d2 ",(0,r.jsx)("code",{children:"$.Promise"})]}),"\n",(0,r.jsxs)(t.p,{children:['Return all rules matching the specified selector.\rFor now, we only look at the rightmost simple selector. For example, searching for ".foo" will\rmatch these rules:\r.foo ',"\rdiv .foo ","\rdiv.foo ",'\rdiv .foo[bar="42"] ',"\rdiv .foo",":hovered"," ","\rdiv .foo::first-child\rbut will ",(0,r.jsx)(t.em,{children:"not"})," match these rules:\r.foobar ","\r.foo .bar ","\rdiv .foo .bar ","\r.foo.bar "]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"$.Promise"})," - that will be resolved with an Array of objects containing the\rsource document, start line, and end line (0-based, inclusive range) for each matching declaration list.\rDoes not addRef() the documents returned in the array."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"selector"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"The selector to match. This can be a tag selector, class selector or id selector"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"htmlDocument"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Document"})}),(0,r.jsx)(t.td,{children:"An HTML file for context (so we can search 'style' blocks)"})]})]})]}),"\n",(0,r.jsx)("a",{name:"findSelectorAtDocumentPos"}),"\n",(0,r.jsxs)(t.h2,{id:"findselectoratdocumentposeditor-pos--string",children:["findSelectorAtDocumentPos(editor, pos) \u21d2 ",(0,r.jsx)("code",{children:"string"})]}),"\n",(0,r.jsx)(t.p,{children:'Returns the selector(s) of the rule at the specified document pos, or "" if the position is\ris not within a style rule.'}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"string"}),' - Selector(s) for the rule at the specified position, or "" if the position\ris not within a style rule. If the rule has multiple selectors, a comma-separated\rselector string is returned.']}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"editor"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Editor"})}),(0,r.jsx)(t.td,{children:"Editor to search"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pos"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Object"})}),(0,r.jsx)(t.td,{children:"Position to search"})]})]})]}),"\n",(0,r.jsx)("a",{name:"_removeComments"}),"\n",(0,r.jsxs)(t.h2,{id:"_removecommentscontent--string",children:["_removeComments(content) \u21d2 ",(0,r.jsx)("code",{children:"string"})]}),"\n",(0,r.jsx)(t.p,{children:"removes CSS comments from the content"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"string"})," - reduced content"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"content"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"to reduce"})]})})]}),"\n",(0,r.jsx)("a",{name:"_removeStrings"}),"\n",(0,r.jsxs)(t.h2,{id:"_removestringscontent--string",children:["_removeStrings(content) \u21d2 ",(0,r.jsx)("code",{children:"string"})]}),"\n",(0,r.jsx)(t.p,{children:"removes strings from the content"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"string"})," - reduced content"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"content"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"to reduce"})]})})]}),"\n",(0,r.jsx)("a",{name:"reduceStyleSheetForRegExParsing"}),"\n",(0,r.jsxs)(t.h2,{id:"reducestylesheetforregexparsingcontent--string",children:["reduceStyleSheetForRegExParsing(content) \u21d2 ",(0,r.jsx)("code",{children:"string"})]}),"\n",(0,r.jsx)(t.p,{children:"Reduces the style sheet by removing comments and strings\rso that the content can be parsed using a regular expression"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"string"})," - reduced content"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"content"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"to reduce"})]})})]}),"\n",(0,r.jsx)("a",{name:"addRuleToDocument"}),"\n",(0,r.jsxs)(t.h2,{id:"addruletodocumentdoc-selector-usetabchar-indentunit--object",children:["addRuleToDocument(doc, selector, useTabChar, indentUnit) \u21d2 ",(0,r.jsx)("code",{children:"Object"})]}),"\n",(0,r.jsx)(t.p,{children:"Adds a new rule to the end of the given document, and returns the range of the added rule\rand the position of the cursor on the indented blank line within it. Note that the range will\rnot include all the inserted text (we insert extra newlines before and after the rule)."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"Object"})," - The range of the inserted rule and the location where the cursor should be placed."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"doc"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"Document"})}),(0,r.jsx)(t.td,{children:"The document to insert the rule into."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"selector"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(t.td,{children:"The selector to use for the given rule."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"useTabChar"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"boolean"})}),(0,r.jsx)(t.td,{children:"Whether to indent with a tab."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"indentUnit"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"number"})}),(0,r.jsx)(t.td,{children:"If useTabChar is false, how many spaces to indent with."})]})]})]}),"\n",(0,r.jsx)("a",{name:"consolidateRules"}),"\n",(0,r.jsx)(t.h2,{id:"consolidaterules",children:"consolidateRules()"}),"\n",(0,r.jsxs)(t.p,{children:["In the given rule array (as returned by ",(0,r.jsx)(t.code,{children:"findMatchingRules()"}),"), if multiple rules in a row\rrefer to the same rule (because there were multiple matching selectors), eliminate the redundant\rrules. Also, always use the selector group if available instead of the original matching selector."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsx)("a",{name:"getRangeSelectors"}),"\n",(0,r.jsxs)(t.h2,{id:"getrangeselectorsrange--string",children:["getRangeSelectors(range) \u21d2 ",(0,r.jsx)("code",{children:"string"})]}),"\n",(0,r.jsx)(t.p,{children:"Given a TextRange, extracts the selector(s) for the rule in the range and returns it.\rAssumes the range only contains one rule; if there's more than one, it will return the\rselector(s) for the first rule."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global function",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"string"})," - The selector(s) for the rule in the range."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"range"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"TextRange"})}),(0,r.jsx)(t.td,{children:"The range to extract the selector(s) from."})]})})]}),"\n",(0,r.jsx)("a",{name:"SelectorInfo"}),"\n",(0,r.jsxs)(t.h2,{id:"selectorinfo--object",children:["SelectorInfo : ",(0,r.jsx)("code",{children:"Object"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kind"}),": global typedef"]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);