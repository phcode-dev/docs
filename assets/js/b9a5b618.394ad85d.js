"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4581],{14608:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=i(74848),n=i(28453);const r={},a=void 0,d={id:"API-Reference/view/ViewStateManager",title:"ViewStateManager",description:"Import :",source:"@site/api/API-Reference/view/ViewStateManager.md",sourceDirName:"API-Reference/view",slug:"/API-Reference/view/ViewStateManager",permalink:"/api/API-Reference/view/ViewStateManager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ViewCommandHandlers",permalink:"/api/API-Reference/view/ViewCommandHandlers"},next:{title:"WorkspaceManager",permalink:"/api/API-Reference/view/WorkspaceManager"}},c={},l=[{value:"Import :",id:"import-",level:3},{value:"_",id:"_",level:2},{value:"reset()",id:"reset",level:2},{value:"updateViewState(view, viewState)",id:"updateviewstateview-viewstate",level:2},{value:"getViewState(file) \u21d2 <code>*</code>",id:"getviewstatefile--",level:2},{value:"addViewStates(viewStates)",id:"addviewstatesviewstates",level:2}];function h(e){const t={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"import-",children:"Import :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const ViewStateManager = brackets.getModule("view/ViewStateManager")\n'})}),"\n",(0,s.jsx)("a",{name:"_"}),"\n",(0,s.jsx)(t.h2,{id:"_",children:"_"}),"\n",(0,s.jsx)(t.p,{children:"ViewStateManager is a singleton for views to park their global viwe state. The state is saved\nwith project data but the View or View Factory is responsible for restoring the view state\nwhen the view is created."}),"\n",(0,s.jsxs)(t.p,{children:["Views should implement ",(0,s.jsx)(t.code,{children:"getViewState()"})," so that the view state can be saved and that data is cached\nfor later use."]}),"\n",(0,s.jsx)(t.p,{children:"Views or View Factories are responsible for restoring the view state when the view of that file is created\nby recalling the cached state.  Views determine what data is store in the view state and how to restore it."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Kind"}),": global variable"]}),"\n",(0,s.jsx)("a",{name:"reset"}),"\n",(0,s.jsx)(t.h2,{id:"reset",children:"reset()"}),"\n",(0,s.jsx)(t.p,{children:"resets the view state cache"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsx)("a",{name:"updateViewState"}),"\n",(0,s.jsx)(t.h2,{id:"updateviewstateview-viewstate",children:"updateViewState(view, viewState)"}),"\n",(0,s.jsx)(t.p,{children:"Updates the view state for the specified view"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"view"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"Object"})}),(0,s.jsx)(t.td,{children:"the to save state"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"viewState"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"*"})}),(0,s.jsx)(t.td,{children:"any data that the view needs to restore the view state."})]})]})]}),"\n",(0,s.jsx)("a",{name:"getViewState"}),"\n",(0,s.jsxs)(t.h2,{id:"getviewstatefile--",children:["getViewState(file) \u21d2 ",(0,s.jsx)("code",{children:"*"})]}),"\n",(0,s.jsx)(t.p,{children:"gets the view state for the specified file"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Kind"}),": global function",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"Returns"}),": ",(0,s.jsx)("code",{children:"*"})," - whatever data that was saved earlier with a call setViewState"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"file"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"File"})}),(0,s.jsx)(t.td,{children:"the file to record the view state for"})]})})]}),"\n",(0,s.jsx)("a",{name:"addViewStates"}),"\n",(0,s.jsx)(t.h2,{id:"addviewstatesviewstates",children:"addViewStates(viewStates)"}),"\n",(0,s.jsx)(t.p,{children:"adds an array of view states"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Kind"}),": global function"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"viewStates"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"object.<string, *>"})}),(0,s.jsx)(t.td,{children:"View State object to append to the current set of view states"})]})})]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>d});var s=i(96540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);