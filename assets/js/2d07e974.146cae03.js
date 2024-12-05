"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8717],{65071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"API-Reference/utils/TokenUtils","title":"TokenUtils","description":"Import :","source":"@site/api/API-Reference/utils/TokenUtils.md","sourceDirName":"API-Reference/utils","slug":"/API-Reference/utils/TokenUtils","permalink":"/api/API-Reference/utils/TokenUtils","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"StringUtils","permalink":"/api/API-Reference/utils/StringUtils"},"next":{"title":"ValidationUtils","permalink":"/api/API-Reference/utils/ValidationUtils"}}');var c=t(74848),r=t(28453);const i={},d=void 0,o={},l=[{value:"Import :",id:"import-",level:3},{value:"_",id:"_",level:2},{value:"getTokenAt(cm, pos, precise) \u21d2 <code>Object</code>",id:"gettokenatcm-pos-precise--object",level:2},{value:"getInitialContext(cm, pos) \u21d2 <code>Object</code>",id:"getinitialcontextcm-pos--object",level:2},{value:"movePrevToken(ctx, [precise]) \u21d2 <code>boolean</code>",id:"moveprevtokenctx-precise--boolean",level:2},{value:"isAtStart(ctx) \u21d2 <code>boolean</code>",id:"isatstartctx--boolean",level:2},{value:"moveNextToken(ctx, [precise]) \u21d2 <code>boolean</code>",id:"movenexttokenctx-precise--boolean",level:2},{value:"isAtEnd(ctx) \u21d2 <code>boolean</code>",id:"isatendctx--boolean",level:2},{value:"moveSkippingWhitespace(moveFxn, ctx) \u21d2 <code>boolean</code>",id:"moveskippingwhitespacemovefxn-ctx--boolean",level:2},{value:"offsetInToken(context) \u21d2 <code>number</code>",id:"offsetintokencontext--number",level:2},{value:"getModeAt(cm, pos, precise) \u21d2 <code>Object</code>",id:"getmodeatcm-pos-precise--object",level:2}];function h(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'const TokenUtils = brackets.getModule("utils/TokenUtils")\n'})}),"\n",(0,c.jsx)("a",{name:"_"}),"\n",(0,c.jsx)(n.h2,{id:"_",children:"_"}),"\n",(0,c.jsx)(n.p,{children:"Functions for iterating through tokens in the current editor buffer. Useful for doing\nlight parsing that can rely purely on information gathered by the code coloring mechanism."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Kind"}),": global variable"]}),"\n",(0,c.jsx)("a",{name:"getTokenAt"}),"\n",(0,c.jsxs)(n.h2,{id:"gettokenatcm-pos-precise--object",children:["getTokenAt(cm, pos, precise) \u21d2 ",(0,c.jsx)("code",{children:"Object"})]}),"\n",(0,c.jsx)(n.p,{children:"Like cm.getTokenAt, but with caching. Way more performant for long lines."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Kind"}),": global function",(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.strong,{children:"Returns"}),": ",(0,c.jsx)("code",{children:"Object"})," - Token for position"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"cm"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"CodeMirror"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"pos"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"Object"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"precise"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"boolean"})}),(0,c.jsx)(n.td,{children:"If given, results in more current results. Suppresses caching."})]})]})]}),"\n",(0,c.jsx)("a",{name:"getInitialContext"}),"\n",(0,c.jsxs)(n.h2,{id:"getinitialcontextcm-pos--object",children:["getInitialContext(cm, pos) \u21d2 ",(0,c.jsx)("code",{children:"Object"})]}),"\n",(0,c.jsx)(n.p,{children:"Creates a context object for the given editor and position, suitable for passing to the\nmove functions."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param"}),(0,c.jsx)(n.th,{children:"Type"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"cm"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"CodeMirror"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"pos"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"Object"})})]})]})]}),"\n",(0,c.jsx)("a",{name:"movePrevToken"}),"\n",(0,c.jsxs)(n.h2,{id:"moveprevtokenctx-precise--boolean",children:["movePrevToken(ctx, [precise]) \u21d2 ",(0,c.jsx)("code",{children:"boolean"})]}),"\n",(0,c.jsx)(n.p,{children:"Moves the given context backwards by one token."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Kind"}),": global function",(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.strong,{children:"Returns"}),": ",(0,c.jsx)("code",{children:"boolean"})," - whether the context changed"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ctx"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"Object"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"[precise]"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"boolean"})}),(0,c.jsx)(n.td,{children:"If code is being edited, use true (default) for accuracy.      If parsing unchanging code, use false to use cache for performance."})]})]})]}),"\n",(0,c.jsx)("a",{name:"isAtStart"}),"\n",(0,c.jsxs)(n.h2,{id:"isatstartctx--boolean",children:["isAtStart(ctx) \u21d2 ",(0,c.jsx)("code",{children:"boolean"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Kind"}),": global function",(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.strong,{children:"Returns"}),": ",(0,c.jsx)("code",{children:"boolean"})," - true if movePrevToken() would return false without changing pos"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param"}),(0,c.jsx)(n.th,{children:"Type"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ctx"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"Object"})})]})})]}),"\n",(0,c.jsx)("a",{name:"moveNextToken"}),"\n",(0,c.jsxs)(n.h2,{id:"movenexttokenctx-precise--boolean",children:["moveNextToken(ctx, [precise]) \u21d2 ",(0,c.jsx)("code",{children:"boolean"})]}),"\n",(0,c.jsx)(n.p,{children:"Moves the given context forward by one token."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Kind"}),": global function",(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.strong,{children:"Returns"}),": ",(0,c.jsx)("code",{children:"boolean"})," - whether the context changed"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ctx"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"Object"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"[precise]"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"boolean"})}),(0,c.jsx)(n.td,{children:"If code is being edited, use true (default) for accuracy.      If parsing unchanging code, use false to use cache for performance."})]})]})]}),"\n",(0,c.jsx)("a",{name:"isAtEnd"}),"\n",(0,c.jsxs)(n.h2,{id:"isatendctx--boolean",children:["isAtEnd(ctx) \u21d2 ",(0,c.jsx)("code",{children:"boolean"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Kind"}),": global function",(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.strong,{children:"Returns"}),": ",(0,c.jsx)("code",{children:"boolean"})," - true if moveNextToken() would return false without changing pos"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param"}),(0,c.jsx)(n.th,{children:"Type"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ctx"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"Object"})})]})})]}),"\n",(0,c.jsx)("a",{name:"moveSkippingWhitespace"}),"\n",(0,c.jsxs)(n.h2,{id:"moveskippingwhitespacemovefxn-ctx--boolean",children:["moveSkippingWhitespace(moveFxn, ctx) \u21d2 ",(0,c.jsx)("code",{children:"boolean"})]}),"\n",(0,c.jsx)(n.p,{children:"Moves the given context in the given direction, skipping any whitespace it hits."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Kind"}),": global function",(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.strong,{children:"Returns"}),": ",(0,c.jsx)("code",{children:"boolean"})," - whether the context changed"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"moveFxn"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"function"})}),(0,c.jsx)(n.td,{children:"the function to move the context"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ctx"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"Object"})}),(0,c.jsx)(n.td,{})]})]})]}),"\n",(0,c.jsx)("a",{name:"offsetInToken"}),"\n",(0,c.jsxs)(n.h2,{id:"offsetintokencontext--number",children:["offsetInToken(context) \u21d2 ",(0,c.jsx)("code",{children:"number"})]}),"\n",(0,c.jsx)(n.p,{children:"In the given context, get the character offset of pos from the start of the token."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param"}),(0,c.jsx)(n.th,{children:"Type"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"context"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"Object"})})]})})]}),"\n",(0,c.jsx)("a",{name:"getModeAt"}),"\n",(0,c.jsxs)(n.h2,{id:"getmodeatcm-pos-precise--object",children:["getModeAt(cm, pos, precise) \u21d2 ",(0,c.jsx)("code",{children:"Object"})]}),"\n",(0,c.jsx)(n.p,{children:"Returns the mode object and mode name string at a given position"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"cm"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"CodeMirror"})}),(0,c.jsx)(n.td,{children:"CodeMirror instance"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"pos"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"Object"})}),(0,c.jsx)(n.td,{children:"Position to query for mode"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"precise"}),(0,c.jsx)(n.td,{children:(0,c.jsx)("code",{children:"boolean"})}),(0,c.jsx)(n.td,{children:"If given, results in more current results. Suppresses caching."})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(96540);const c={},r=s.createContext(c);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);