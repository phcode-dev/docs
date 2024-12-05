"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7370],{16491:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"API-Reference/search/FindBar","title":"FindBar","description":"Import :","source":"@site/api/API-Reference/search/FindBar.md","sourceDirName":"API-Reference/search","slug":"/API-Reference/search/FindBar","permalink":"/api/API-Reference/search/FindBar","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"FileFilters","permalink":"/api/API-Reference/search/FileFilters"},"next":{"title":"FindInFiles","permalink":"/api/API-Reference/search/FindInFiles"}}');var s=r(74848),d=r(28453);const l={},a=void 0,t={},c=[{value:"Import :",id:"import-",level:3},{value:"FindBar",id:"findbar",level:2},{value:"new FindBar([scopeLabel])",id:"new-findbarscopelabel",level:3},{value:"findBar.open()",id:"findbaropen",level:3},{value:"findBar.close(suppressAnimation)",id:"findbarclosesuppressanimation",level:3},{value:"findBar.isClosed() \u21d2 <code>boolean</code>",id:"findbarisclosed--boolean",level:3},{value:"findBar.getOptions() \u21d2 <code>Object</code>",id:"findbargetoptions--object",level:3},{value:"findBar.getQueryInfo() \u21d2 <code>Object</code>",id:"findbargetqueryinfo--object",level:3},{value:"findBar.showError(error, [isHTML], [isFilterError])",id:"findbarshowerrorerror-ishtml-isfiltererror",level:3},{value:"findBar.showFindCount(count)",id:"findbarshowfindcountcount",level:3},{value:"findBar.showNoResults(showIndicator, showMessage)",id:"findbarshownoresultsshowindicator-showmessage",level:3},{value:"findBar.getReplaceText() \u21d2 <code>string</code>",id:"findbargetreplacetext--string",level:3},{value:"findBar.enable(enable)",id:"findbarenableenable",level:3},{value:"findBar.isEnabled() \u21d2 <code>boolean</code>",id:"findbarisenabled--boolean",level:3},{value:"findBar.isReplaceEnabled() \u21d2 <code>boolean</code>",id:"findbarisreplaceenabled--boolean",level:3},{value:"findBar.enableNavigation(enable)",id:"findbarenablenavigationenable",level:3},{value:"findBar.enableReplace(enable)",id:"findbarenablereplaceenable",level:3},{value:"findBar.focusQuery()",id:"findbarfocusquery",level:3},{value:"findBar.focusReplace()",id:"findbarfocusreplace",level:3},{value:"findBar.showIndexingSpinner()",id:"findbarshowindexingspinner",level:3},{value:"findBar.redoInstantSearch()",id:"findbarredoinstantsearch",level:3}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const FindBar = brackets.getModule("search/FindBar")\n'})}),"\n",(0,s.jsx)("a",{name:"FindBar"}),"\n",(0,s.jsx)(n.h2,{id:"findbar",children:"FindBar"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": global class"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#FindBar",children:"FindBar"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#new_FindBar_new",children:"new FindBar([scopeLabel])"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+open",children:".open()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+close",children:".close(suppressAnimation)"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#FindBar+isClosed",children:".isClosed()"})," \u21d2 ",(0,s.jsx)("code",{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#FindBar+getOptions",children:".getOptions()"})," \u21d2 ",(0,s.jsx)("code",{children:"Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#FindBar+getQueryInfo",children:".getQueryInfo()"})," \u21d2 ",(0,s.jsx)("code",{children:"Object"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+showError",children:".showError(error, [isHTML], [isFilterError])"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+showFindCount",children:".showFindCount(count)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+showNoResults",children:".showNoResults(showIndicator, showMessage)"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#FindBar+getReplaceText",children:".getReplaceText()"})," \u21d2 ",(0,s.jsx)("code",{children:"string"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+enable",children:".enable(enable)"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#FindBar+isEnabled",children:".isEnabled()"})," \u21d2 ",(0,s.jsx)("code",{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#FindBar+isReplaceEnabled",children:".isReplaceEnabled()"})," \u21d2 ",(0,s.jsx)("code",{children:"boolean"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+enableNavigation",children:".enableNavigation(enable)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+enableReplace",children:".enableReplace(enable)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+focusQuery",children:".focusQuery()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+focusReplace",children:".focusReplace()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+showIndexingSpinner",children:".showIndexingSpinner()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#FindBar+redoInstantSearch",children:".redoInstantSearch()"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"new_FindBar_new"}),"\n",(0,s.jsx)(n.h3,{id:"new-findbarscopelabel",children:"new FindBar([scopeLabel])"}),"\n",(0,s.jsx)(n.p,{children:"Find Bar UI component, used for both single- and multi-file find/replace. This doesn't actually\ncreate and add the FindBar to the DOM - for that, call open()."}),"\n",(0,s.jsx)(n.p,{children:"Dispatches these events:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"queryChange - when the user types in the input field or sets a query option. Use getQueryInfo()\nto get the current query state."}),"\n",(0,s.jsx)(n.li,{children:"doFind - when the user chooses to do a Find Previous or Find Next.\nParameters are:\nshiftKey - boolean, false for Find Next, true for Find Previous"}),"\n",(0,s.jsx)(n.li,{children:"doReplace - when the user chooses to do a single replace. Use getReplaceText() to get the current replacement text."}),"\n",(0,s.jsx)(n.li,{children:"doReplaceBatch - when the user chooses to initiate a Replace All. Use getReplaceText() to get the current replacement text."}),"\n",(0,s.jsx)(n.li,{children:"doReplaceAll - when the user chooses to perform a Replace All. Use getReplaceText() to get the current replacement text."}),"\n",(0,s.jsx)(n.li,{children:"close - when the find bar is closed"}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[options.multifile]"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)(n.td,{children:"true if this is a Find/Replace in Files (changes the behavior of Enter in      the fields, hides the navigator controls, shows the scope/filter controls, and if in replace mode, hides the      Replace button (so there's only Replace All)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[options.replace]"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)(n.td,{children:"true to show the Replace controls - default false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[options.queryPlaceholder]"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)(n.td,{children:"label to show in the Find field - default empty string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[options.initialQuery]"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)(n.td,{children:"query to populate in the Find field on open - default empty string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[scopeLabel]"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)(n.td,{children:"HTML label to show for the scope of the search, expected to be already escaped - default empty string"})]})]})]}),"\n",(0,s.jsx)("a",{name:"FindBar+open"}),"\n",(0,s.jsx)(n.h3,{id:"findbaropen",children:"findBar.open()"}),"\n",(0,s.jsx)(n.p,{children:"Opens the Find bar, closing any other existing Find bars."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+close"}),"\n",(0,s.jsx)(n.h3,{id:"findbarclosesuppressanimation",children:"findBar.close(suppressAnimation)"}),"\n",(0,s.jsx)(n.p,{children:"Closes this Find bar. If already closed, does nothing."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"suppressAnimation"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)(n.td,{children:"If true, don't do the standard closing animation. Default false."})]})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+isClosed"}),"\n",(0,s.jsxs)(n.h3,{id:"findbarisclosed--boolean",children:["findBar.isClosed() \u21d2 ",(0,s.jsx)("code",{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"boolean"})," - true if this FindBar has been closed."]}),"\n",(0,s.jsx)("a",{name:"FindBar+getOptions"}),"\n",(0,s.jsxs)(n.h3,{id:"findbargetoptions--object",children:["findBar.getOptions() \u21d2 ",(0,s.jsx)("code",{children:"Object"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"Object"})," - The options passed into the FindBar."]}),"\n",(0,s.jsx)("a",{name:"FindBar+getQueryInfo"}),"\n",(0,s.jsxs)(n.h3,{id:"findbargetqueryinfo--object",children:["findBar.getQueryInfo() \u21d2 ",(0,s.jsx)("code",{children:"Object"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the current query and parameters."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+showError"}),"\n",(0,s.jsx)(n.h3,{id:"findbarshowerrorerror-ishtml-isfiltererror",children:"findBar.showError(error, [isHTML], [isFilterError])"}),"\n",(0,s.jsx)(n.p,{children:"Show or clear an error message related to the query."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"error"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)(n.td,{children:"The error message to show, or null to hide the error display."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[isHTML]"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)(n.td,{children:"Whether the error message is HTML that should remain unescaped."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[isFilterError]"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)(n.td,{children:"Whether the error related to file filters"})]})]})]}),"\n",(0,s.jsx)("a",{name:"FindBar+showFindCount"}),"\n",(0,s.jsx)(n.h3,{id:"findbarshowfindcountcount",children:"findBar.showFindCount(count)"}),"\n",(0,s.jsx)(n.p,{children:"Set the find count."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"count"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)(n.td,{children:"The find count message to show. Can be the empty string to hide it."})]})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+showNoResults"}),"\n",(0,s.jsx)(n.h3,{id:"findbarshownoresultsshowindicator-showmessage",children:"findBar.showNoResults(showIndicator, showMessage)"}),"\n",(0,s.jsx)(n.p,{children:"Show or hide the no-results indicator and optional message. This is also used to\nindicate regular expression errors."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"showIndicator"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"showMessage"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})})]})]})]}),"\n",(0,s.jsx)("a",{name:"FindBar+getReplaceText"}),"\n",(0,s.jsxs)(n.h3,{id:"findbargetreplacetext--string",children:["findBar.getReplaceText() \u21d2 ",(0,s.jsx)("code",{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the current replace text."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+enable"}),"\n",(0,s.jsx)(n.h3,{id:"findbarenableenable",children:"findBar.enable(enable)"}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables the controls in the Find bar. Note that if enable is true, ",(0,s.jsx)(n.em,{children:"all"})," controls will be\nre-enabled, even if some were previously disabled using enableNavigation() or enableReplace(), so you\nwill need to refresh their enable state after calling this."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"enable"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)(n.td,{children:"Whether to enable or disable the controls."})]})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+isEnabled"}),"\n",(0,s.jsxs)(n.h3,{id:"findbarisenabled--boolean",children:["findBar.isEnabled() \u21d2 ",(0,s.jsx)("code",{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"boolean"})," - true if the FindBar is enabled."]}),"\n",(0,s.jsx)("a",{name:"FindBar+isReplaceEnabled"}),"\n",(0,s.jsxs)(n.h3,{id:"findbarisreplaceenabled--boolean",children:["findBar.isReplaceEnabled() \u21d2 ",(0,s.jsx)("code",{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"boolean"})," - true if the Replace button is enabled."]}),"\n",(0,s.jsx)("a",{name:"FindBar+enableNavigation"}),"\n",(0,s.jsx)(n.h3,{id:"findbarenablenavigationenable",children:"findBar.enableNavigation(enable)"}),"\n",(0,s.jsx)(n.p,{children:"Enable or disable the navigation controls if present. Note that if the Find bar is currently disabled\n(i.e. isEnabled() returns false), this will have no effect."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"enable"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)(n.td,{children:"Whether to enable the controls."})]})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+enableReplace"}),"\n",(0,s.jsx)(n.h3,{id:"findbarenablereplaceenable",children:"findBar.enableReplace(enable)"}),"\n",(0,s.jsx)(n.p,{children:"Enable or disable the replace controls if present. Note that if the Find bar is currently disabled\n(i.e. isEnabled() returns false), this will have no effect."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"enable"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"boolean"})}),(0,s.jsx)(n.td,{children:"Whether to enable the controls."})]})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+focusQuery"}),"\n",(0,s.jsx)(n.h3,{id:"findbarfocusquery",children:"findBar.focusQuery()"}),"\n",(0,s.jsx)(n.p,{children:"Sets focus to the query field and selects its text."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+focusReplace"}),"\n",(0,s.jsx)(n.h3,{id:"findbarfocusreplace",children:"findBar.focusReplace()"}),"\n",(0,s.jsx)(n.p,{children:"Sets focus to the replace field and selects its text."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+showIndexingSpinner"}),"\n",(0,s.jsx)(n.h3,{id:"findbarshowindexingspinner",children:"findBar.showIndexingSpinner()"}),"\n",(0,s.jsx)(n.p,{children:"The indexing spinner is usually shown when node is indexing files"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]}),"\n",(0,s.jsx)("a",{name:"FindBar+redoInstantSearch"}),"\n",(0,s.jsx)(n.h3,{id:"findbarredoinstantsearch",children:"findBar.redoInstantSearch()"}),"\n",(0,s.jsx)(n.p,{children:"Force a search again"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,s.jsx)(n.a,{href:"#FindBar",children:(0,s.jsx)("code",{children:"FindBar"})})]})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(96540);const s={},d=i.createContext(s);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);