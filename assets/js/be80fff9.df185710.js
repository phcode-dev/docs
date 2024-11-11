"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4679],{78923:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(74848),t=n(28453);const l={},a=void 0,s={id:"API-Reference/widgets/ModalBar",title:"ModalBar",description:"Import :",source:"@site/api/API-Reference/widgets/ModalBar.md",sourceDirName:"API-Reference/widgets",slug:"/API-Reference/widgets/ModalBar",permalink:"/api/API-Reference/widgets/ModalBar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DropdownButton",permalink:"/api/API-Reference/widgets/DropdownButton"},next:{title:"NotificationUI",permalink:"/api/API-Reference/widgets/NotificationUI"}},i={},d=[{value:"Import :",id:"import-",level:3},{value:"ModalBar",id:"modalbar",level:2},{value:"new ModalBar(template, autoClose, animate)",id:"new-modalbartemplate-autoclose-animate",level:3},{value:"modalBar.isLockedOpen : <code>function</code>",id:"modalbarislockedopen--function",level:3},{value:"modalBar.height() \u21d2 <code>number</code>",id:"modalbarheight--number",level:3},{value:"modalBar.prepareClose([restoreScrollPos])",id:"modalbarpreparecloserestorescrollpos",level:3},{value:"modalBar.close([restoreScrollPos], [animate], [_reason]) \u21d2 <code>$.Promise</code>",id:"modalbarcloserestorescrollpos-animate-_reason--promise",level:3},{value:"modalBar.getRoot() \u21d2 <code>jQueryObject</code>",id:"modalbargetroot--jqueryobject",level:3},{value:"MainViewManager",id:"mainviewmanager",level:2}];function c(e){const r={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h3,{id:"import-",children:"Import :"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'const ModalBar = brackets.getModule("widgets/ModalBar")\n'})}),"\n",(0,o.jsx)("a",{name:"ModalBar"}),"\n",(0,o.jsx)(r.h2,{id:"modalbar",children:"ModalBar"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Kind"}),": global class"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"#ModalBar",children:"ModalBar"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"#new_ModalBar_new",children:"new ModalBar(template, autoClose, animate)"})}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"#ModalBar+isLockedOpen",children:".isLockedOpen"})," : ",(0,o.jsx)("code",{children:"function"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"#ModalBar+height",children:".height()"})," \u21d2 ",(0,o.jsx)("code",{children:"number"})]}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"#ModalBar+prepareClose",children:".prepareClose([restoreScrollPos])"})}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"#ModalBar+close",children:".close([restoreScrollPos], [animate], [_reason])"})," \u21d2 ",(0,o.jsx)("code",{children:"$.Promise"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"#ModalBar+getRoot",children:".getRoot()"})," \u21d2 ",(0,o.jsx)("code",{children:"jQueryObject"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)("a",{name:"new_ModalBar_new"}),"\n",(0,o.jsx)(r.h3,{id:"new-modalbartemplate-autoclose-animate",children:"new ModalBar(template, autoClose, animate)"}),"\n",(0,o.jsx)(r.p,{children:"Creates a modal bar whose contents are the given template."}),"\n",(0,o.jsx)(r.p,{children:"Dispatches one event:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:'close - When the bar is closed, either via close() or via autoClose. After this event, the\nbar may remain visible and in the DOM while its closing animation is playing. However,\nby the time "close" is fired, the bar has been "popped out" of the layout and the\neditor scroll position has already been restored.\nSecond argument is the reason for closing (one of ModalBar.CLOSE_*).\nThird argument is the Promise that close() will be returning.'}),"\n"]}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Param"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"template"}),(0,o.jsx)(r.td,{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)(r.td,{children:"The HTML contents of the modal bar."})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"autoClose"}),(0,o.jsx)(r.td,{children:(0,o.jsx)("code",{children:"boolean"})}),(0,o.jsx)(r.td,{children:"If true, then close the dialog if the user hits Esc      or if the bar loses focus."})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"animate"}),(0,o.jsx)(r.td,{children:(0,o.jsx)("code",{children:"boolean"})}),(0,o.jsx)(r.td,{children:"If true (the default), animate the dialog closed, otherwise      close it immediately."})]})]})]}),"\n",(0,o.jsx)("a",{name:"ModalBar+isLockedOpen"}),"\n",(0,o.jsxs)(r.h3,{id:"modalbarislockedopen--function",children:["modalBar.isLockedOpen : ",(0,o.jsx)("code",{children:"function"})]}),"\n",(0,o.jsx)(r.p,{children:"Allows client code to block autoClose from closing the ModalBar: if set, this function is called whenever\nautoClose would normally close the ModalBar. Returning true prevents the close from occurring. Programmatically\ncalling close() will still close the bar, however."}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Kind"}),": instance property of ",(0,o.jsx)(r.a,{href:"#ModalBar",children:(0,o.jsx)("code",{children:"ModalBar"})})]}),"\n",(0,o.jsx)("a",{name:"ModalBar+height"}),"\n",(0,o.jsxs)(r.h3,{id:"modalbarheight--number",children:["modalBar.height() \u21d2 ",(0,o.jsx)("code",{children:"number"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,o.jsx)(r.a,{href:"#ModalBar",children:(0,o.jsx)("code",{children:"ModalBar"})}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.strong,{children:"Returns"}),": ",(0,o.jsx)("code",{children:"number"})," - Height of the modal bar in pixels, if open."]}),"\n",(0,o.jsx)("a",{name:"ModalBar+prepareClose"}),"\n",(0,o.jsx)(r.h3,{id:"modalbarpreparecloserestorescrollpos",children:"modalBar.prepareClose([restoreScrollPos])"}),"\n",(0,o.jsxs)(r.p,{children:["Prepares the ModalBar for closing by popping it out of the main flow and resizing/\nrescrolling the Editor to maintain its current apparent code position. Useful if\nyou want to do that as a separate operation from actually animating the ModalBar\nclosed and removing it (for example, if you need to switch full editors in between).\nIf you don't call this explicitly, it will get called at the beginning of ",(0,o.jsx)(r.code,{children:"close()"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,o.jsx)(r.a,{href:"#ModalBar",children:(0,o.jsx)("code",{children:"ModalBar"})})]}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Param"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"[restoreScrollPos]"}),(0,o.jsx)(r.td,{children:(0,o.jsx)("code",{children:"boolean"})}),(0,o.jsx)(r.td,{children:"If true (the default), adjust the scroll position     of the editor to account for the ModalBar disappearing. If not set, the caller     should do it immediately on return of this function (before the animation completes),     because the editor will already have been resized."})]})})]}),"\n",(0,o.jsx)("a",{name:"ModalBar+close"}),"\n",(0,o.jsxs)(r.h3,{id:"modalbarcloserestorescrollpos-animate-_reason--promise",children:["modalBar.close([restoreScrollPos], [animate], [_reason]) \u21d2 ",(0,o.jsx)("code",{children:"$.Promise"})]}),"\n",(0,o.jsx)(r.p,{children:"Closes the modal bar and returns focus to the active editor. Returns a promise that is\nresolved when the bar is fully closed and the container is removed from the DOM."}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,o.jsx)(r.a,{href:"#ModalBar",children:(0,o.jsx)("code",{children:"ModalBar"})}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.strong,{children:"Returns"}),": ",(0,o.jsx)("code",{children:"$.Promise"})," - promise resolved when close is finished"]}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Param"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"[restoreScrollPos]"}),(0,o.jsx)(r.td,{children:(0,o.jsx)("code",{children:"boolean"})}),(0,o.jsxs)(r.td,{children:["If true (the default), adjust the scroll position     of the editor to account for the ModalBar disappearing. If not set, the caller     should do it immediately on return of this function (before the animation completes),     because the editor will already have been resized. Note that this is ignored if     ",(0,o.jsx)(r.code,{children:"prepareClose()"})," was already called (you need to pass the parameter to that     function if you call it first)."]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"[animate]"}),(0,o.jsx)(r.td,{children:(0,o.jsx)("code",{children:"boolean"})}),(0,o.jsx)(r.td,{children:"If true (the default), animate the closing of the ModalBar,     otherwise close it immediately."})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"[_reason]"}),(0,o.jsx)(r.td,{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)(r.td,{children:"For internal use only."})]})]})]}),"\n",(0,o.jsx)("a",{name:"ModalBar+getRoot"}),"\n",(0,o.jsxs)(r.h3,{id:"modalbargetroot--jqueryobject",children:["modalBar.getRoot() \u21d2 ",(0,o.jsx)("code",{children:"jQueryObject"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Kind"}),": instance method of ",(0,o.jsx)(r.a,{href:"#ModalBar",children:(0,o.jsx)("code",{children:"ModalBar"})}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.strong,{children:"Returns"}),": ",(0,o.jsx)("code",{children:"jQueryObject"})," - A jQuery object representing the root of the ModalBar."]}),"\n",(0,o.jsx)("a",{name:"MainViewManager"}),"\n",(0,o.jsx)(r.h2,{id:"mainviewmanager",children:"MainViewManager"}),"\n",(0,o.jsx)(r.p,{children:'A "modal bar" component. This is a lightweight replacement for modal dialogs that\nappears at the top of the editor area for operations like Find and Quick Open.'}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Kind"}),": global variable"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>s});var o=n(96540);const t={},l=o.createContext(t);function a(e){const r=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(l.Provider,{value:r},e.children)}}}]);