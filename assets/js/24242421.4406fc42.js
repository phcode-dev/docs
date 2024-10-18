"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[114],{6322:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var r=i(74848),t=i(28453);const s={},d=void 0,l={id:"API-Reference/editor/CodeHintManager",title:"CodeHintManager",description:"Import :",source:"@site/api/API-Reference/editor/CodeHintManager.md",sourceDirName:"API-Reference/editor",slug:"/API-Reference/editor/CodeHintManager",permalink:"/api/API-Reference/editor/CodeHintManager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Editor",permalink:"/api/API-Reference/editor/"},next:{title:"EditorCommandHandlers",permalink:"/api/API-Reference/editor/EditorCommandHandlers"}},o={},h=[{value:"Import :",id:"import-",level:3},{value:"_providerSort()",id:"_providersort",level:2},{value:"registerHintProvider(provider, languageIds, priority)",id:"registerhintproviderprovider-languageids-priority",level:2},{value:"_getProvidersForLanguageId(languageId) \u21d2 <code>Object</code>",id:"_getprovidersforlanguageidlanguageid--object",level:2},{value:"_endSession()",id:"_endsession",level:2},{value:"_inSession(editor) \u21d2",id:"_insessioneditor-",level:2},{value:"_updateHintList()",id:"_updatehintlist",level:2},{value:"_beginSession(editor)",id:"_beginsessioneditor",level:2},{value:"_handleKeydownEvent(jqEvent, editor, event)",id:"_handlekeydowneventjqevent-editor-event",level:2},{value:"_handleCursorActivity(event, editor)",id:"_handlecursoractivityevent-editor",level:2},{value:"_handleChange(event, editor, changeList)",id:"_handlechangeevent-editor-changelist",level:2},{value:"hasValidExclusion(exclusion, textAfterCursor) \u21d2 <code>boolean</code>",id:"hasvalidexclusionexclusion-textaftercursor--boolean",level:2},{value:"isOpen() \u21d2 <code>boolean</code>",id:"isopen--boolean",level:2},{value:"_startNewSession(editor)",id:"_startnewsessioneditor",level:2},{value:"_getCodeHintList()",id:"_getcodehintlist",level:2}];function c(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const CodeHintManager = brackets.getModule("editor/CodeHintManager")\n'})}),"\n",(0,r.jsx)("a",{name:"_providerSort"}),"\n",(0,r.jsx)(n.h2,{id:"_providersort",children:"_providerSort()"}),"\n",(0,r.jsx)(n.p,{children:"Comparator to sort providers from high to low priority"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsx)("a",{name:"registerHintProvider"}),"\n",(0,r.jsx)(n.h2,{id:"registerhintproviderprovider-languageids-priority",children:"registerHintProvider(provider, languageIds, priority)"}),"\n",(0,r.jsx)(n.p,{children:"The method by which a CodeHintProvider registers its willingness to\rproviding hints for editors in a given language."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"provider"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"CodeHintProvider"})}),(0,r.jsx)(n.td,{children:"The hint provider to be registered, described below."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"languageIds"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Array.<string>"})}),(0,r.jsx)(n.td,{children:'The set of language ids for which the provider is capable of providing hints. If the special language id name "all" is included then the provider may be called for any language.'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"priority"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"number"})}),(0,r.jsx)(n.td,{children:"Used to break ties among hint providers for a particular language. Providers with a higher number will be asked for hints before those with a lower priority value. Defaults to zero."})]})]})]}),"\n",(0,r.jsx)("a",{name:"_getProvidersForLanguageId"}),"\n",(0,r.jsxs)(n.h2,{id:"_getprovidersforlanguageidlanguageid--object",children:["_getProvidersForLanguageId(languageId) \u21d2 ",(0,r.jsx)("code",{children:"Object"})]}),"\n",(0,r.jsx)(n.p,{children:"Return the array of hint providers for the given language id.\rThis gets called (potentially) on every keypress. So, it should be fast."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"languageId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})})]})})]}),"\n",(0,r.jsx)("a",{name:"_endSession"}),"\n",(0,r.jsx)(n.h2,{id:"_endsession",children:"_endSession()"}),"\n",(0,r.jsx)(n.p,{children:"End the current hinting session"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsx)("a",{name:"_inSession"}),"\n",(0,r.jsx)(n.h2,{id:"_insessioneditor-",children:"_inSession(editor) \u21d2"}),"\n",(0,r.jsx)(n.p,{children:"Is there a hinting session active for a given editor?"}),"\n",(0,r.jsx)(n.p,{children:"NOTE: the sessionEditor, sessionProvider and hintList objects are\ronly guaranteed to be initialized during an active session."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Returns"}),": boolean"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"editor"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Editor"})})]})})]}),"\n",(0,r.jsx)("a",{name:"_updateHintList"}),"\n",(0,r.jsx)(n.h2,{id:"_updatehintlist",children:"_updateHintList()"}),"\n",(0,r.jsx)(n.p,{children:"From an active hinting session, get hints from the current provider and\rrender the hint list window."}),"\n",(0,r.jsx)(n.p,{children:"Assumes that it is called when a session is active (i.e. sessionProvider is not null)."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsx)("a",{name:"_beginSession"}),"\n",(0,r.jsx)(n.h2,{id:"_beginsessioneditor",children:"_beginSession(editor)"}),"\n",(0,r.jsx)(n.p,{children:"Try to begin a new hinting session."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"editor"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Editor"})})]})})]}),"\n",(0,r.jsx)("a",{name:"_handleKeydownEvent"}),"\n",(0,r.jsx)(n.h2,{id:"_handlekeydowneventjqevent-editor-event",children:"_handleKeydownEvent(jqEvent, editor, event)"}),"\n",(0,r.jsx)(n.p,{children:"Handles keys related to displaying, searching, and navigating the hint list.\rThis gets called before handleChange."}),"\n",(0,r.jsx)(n.p,{children:"TODO: Ideally, we'd get a more semantic event from the editor that told us\rwhat changed so that we could do all of this logic without looking at\rkey events. Then, the purposes of handleKeyEvent and handleChange could be\rcombined. Doing this well requires changing CodeMirror."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jqEvent"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Event"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"editor"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Editor"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"event"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"KeyboardEvent"})})]})]})]}),"\n",(0,r.jsx)("a",{name:"_handleCursorActivity"}),"\n",(0,r.jsx)(n.h2,{id:"_handlecursoractivityevent-editor",children:"_handleCursorActivity(event, editor)"}),"\n",(0,r.jsx)(n.p,{children:"Handle a selection change event in the editor. If the selection becomes a\rmultiple selection, end our current session."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"event"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"BracketsEvent"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"editor"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Editor"})})]})]})]}),"\n",(0,r.jsx)("a",{name:"_handleChange"}),"\n",(0,r.jsx)(n.h2,{id:"_handlechangeevent-editor-changelist",children:"_handleChange(event, editor, changeList)"}),"\n",(0,r.jsx)(n.p,{children:"Start a new implicit hinting session, or update the existing hint list.\rCalled by the editor after handleKeyEvent, which is responsible for setting\rthe lastChar."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"event"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Event"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"editor"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Editor"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"changeList"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Object"})})]})]})]}),"\n",(0,r.jsx)("a",{name:"hasValidExclusion"}),"\n",(0,r.jsxs)(n.h2,{id:"hasvalidexclusionexclusion-textaftercursor--boolean",children:["hasValidExclusion(exclusion, textAfterCursor) \u21d2 ",(0,r.jsx)("code",{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"Test whether the provider has an exclusion that is still the same as text after the cursor."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"boolean"})," - true if the exclusion is not null and is exactly the same as textAfterCursor,\rfalse otherwise."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exclusion"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"Text not to be overwritten when the provider inserts the selected hint."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"textAfterCursor"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"Text that is immediately after the cursor position."})]})]})]}),"\n",(0,r.jsx)("a",{name:"isOpen"}),"\n",(0,r.jsxs)(n.h2,{id:"isopen--boolean",children:["isOpen() \u21d2 ",(0,r.jsx)("code",{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"Test if a hint popup is open."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Returns"}),": ",(0,r.jsx)("code",{children:"boolean"})," - - true if the hints are open, false otherwise."]}),"\n",(0,r.jsx)("a",{name:"_startNewSession"}),"\n",(0,r.jsx)(n.h2,{id:"_startnewsessioneditor",children:"_startNewSession(editor)"}),"\n",(0,r.jsx)(n.p,{children:"Explicitly start a new session. If we have an existing session,\rthen close the current one and restart a new one."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"editor"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"Editor"})})]})})]}),"\n",(0,r.jsx)("a",{name:"_getCodeHintList"}),"\n",(0,r.jsx)(n.h2,{id:"_getcodehintlist",children:"_getCodeHintList()"}),"\n",(0,r.jsx)(n.p,{children:"Expose CodeHintList for unit testing"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": global function"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);