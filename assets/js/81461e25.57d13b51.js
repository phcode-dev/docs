"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8513],{48850:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var t=n(74848),s=n(28453);const d={},r=void 0,l={id:"API-Reference/widgets/StatusBar",title:"StatusBar",description:"Import :",source:"@site/api/API-Reference/widgets/StatusBar.md",sourceDirName:"API-Reference/widgets",slug:"/API-Reference/widgets/StatusBar",permalink:"/api/API-Reference/widgets/StatusBar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PopUpManager",permalink:"/api/API-Reference/widgets/PopUpManager"},next:{title:"IndexingWorker",permalink:"/api/API-Reference/worker/IndexingWorker"}},o={},a=[{value:"Import :",id:"import-",level:3},{value:"AppInit",id:"appinit",level:2},{value:"showBusyIndicator(updateCursor)",id:"showbusyindicatorupdatecursor",level:2},{value:"hideBusyIndicator()",id:"hidebusyindicator",level:2},{value:"addIndicator(id, [indicator], [visible], [style], [tooltip], [insertBefore])",id:"addindicatorid-indicator-visible-style-tooltip-insertbefore",level:2},{value:"updateIndicator(id, visible, [style], [tooltip])",id:"updateindicatorid-visible-style-tooltip",level:2},{value:"hideInformation()",id:"hideinformation",level:2},{value:"showInformation()",id:"showinformation",level:2},{value:"hideIndicators()",id:"hideindicators",level:2},{value:"showIndicators()",id:"showindicators",level:2},{value:"hideAllPanes()",id:"hideallpanes",level:2},{value:"showAllPanes()",id:"showallpanes",level:2},{value:"hide()",id:"hide",level:2},{value:"show()",id:"show",level:2}];function c(e){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h3,{id:"import-",children:"Import :"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'const StatusBar = brackets.getModule("widgets/StatusBar")\n'})}),"\n",(0,t.jsx)("a",{name:"AppInit"}),"\n",(0,t.jsx)(i.h2,{id:"appinit",children:"AppInit"}),"\n",(0,t.jsx)(i.p,{children:"A status bar with support for file information and busy and status indicators. This is a semi-generic\rcontainer; for the code that decides what content appears in the status bar, see client modules like\rEditorStatusBar. (Although in practice StatusBar's HTML structure and initialization\rassume it's only used for this one purpose, and all the APIs are on a singleton)."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global variable"]}),"\n",(0,t.jsx)("a",{name:"showBusyIndicator"}),"\n",(0,t.jsx)(i.h2,{id:"showbusyindicatorupdatecursor",children:"showBusyIndicator(updateCursor)"}),"\n",(0,t.jsx)(i.p,{children:"Shows the 'busy' indicator"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Param"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"updateCursor"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"boolean"})}),(0,t.jsx)(i.td,{children:'Sets the cursor to "wait"'})]})})]}),"\n",(0,t.jsx)("a",{name:"hideBusyIndicator"}),"\n",(0,t.jsx)(i.h2,{id:"hidebusyindicator",children:"hideBusyIndicator()"}),"\n",(0,t.jsx)(i.p,{children:"Hides the 'busy' indicator"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsx)("a",{name:"addIndicator"}),"\n",(0,t.jsx)(i.h2,{id:"addindicatorid-indicator-visible-style-tooltip-insertbefore",children:"addIndicator(id, [indicator], [visible], [style], [tooltip], [insertBefore])"}),"\n",(0,t.jsx)(i.p,{children:"Registers a new status indicator"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Param"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"id"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(i.td,{children:"Registration id of the indicator to be updated."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[indicator]"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)("code",{children:"DOMNode"})," | ",(0,t.jsx)("code",{children:"jQueryObject"})]}),(0,t.jsx)(i.td,{children:"Optional DOMNode for the indicator"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[visible]"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"boolean"})}),(0,t.jsx)(i.td,{children:"Shows or hides the indicator over the statusbar."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[style]"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(i.td,{children:'Sets the attribute "class" of the indicator.'})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[tooltip]"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(i.td,{children:'Sets the attribute "title" of the indicator.'})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[insertBefore]"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(i.td,{children:"An id of an existing status bar indicator.          The new indicator will be inserted before (i.e. to the left of)          the indicator specified by this parameter."})]})]})]}),"\n",(0,t.jsx)("a",{name:"updateIndicator"}),"\n",(0,t.jsx)(i.h2,{id:"updateindicatorid-visible-style-tooltip",children:"updateIndicator(id, visible, [style], [tooltip])"}),"\n",(0,t.jsx)(i.p,{children:"Updates a status indicator"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Param"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"id"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(i.td,{children:"Registration id of the indicator to be updated."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"visible"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"boolean"})}),(0,t.jsx)(i.td,{children:"Shows or hides the indicator over the statusbar."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[style]"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(i.td,{children:'Sets the attribute "class" of the indicator.'})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[tooltip]"}),(0,t.jsx)(i.td,{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)(i.td,{children:'Sets the attribute "title" of the indicator.'})]})]})]}),"\n",(0,t.jsx)("a",{name:"hideInformation"}),"\n",(0,t.jsx)(i.h2,{id:"hideinformation",children:"hideInformation()"}),"\n",(0,t.jsx)(i.p,{children:"Hide the statusbar Information Panel"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsx)("a",{name:"showInformation"}),"\n",(0,t.jsx)(i.h2,{id:"showinformation",children:"showInformation()"}),"\n",(0,t.jsx)(i.p,{children:"Show the statusbar Information Panel"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsx)("a",{name:"hideIndicators"}),"\n",(0,t.jsx)(i.h2,{id:"hideindicators",children:"hideIndicators()"}),"\n",(0,t.jsx)(i.p,{children:"Hide the statusbar Indicators"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsx)("a",{name:"showIndicators"}),"\n",(0,t.jsx)(i.h2,{id:"showindicators",children:"showIndicators()"}),"\n",(0,t.jsx)(i.p,{children:"Show the statusbar Indicators"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsx)("a",{name:"hideAllPanes"}),"\n",(0,t.jsx)(i.h2,{id:"hideallpanes",children:"hideAllPanes()"}),"\n",(0,t.jsx)(i.p,{children:"Hides all panels but not the status bar"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsx)("a",{name:"showAllPanes"}),"\n",(0,t.jsx)(i.h2,{id:"showallpanes",children:"showAllPanes()"}),"\n",(0,t.jsx)(i.p,{children:"Shows all panels (will not show a hidden statusbar)"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsx)("a",{name:"hide"}),"\n",(0,t.jsx)(i.h2,{id:"hide",children:"hide()"}),"\n",(0,t.jsx)(i.p,{children:"Hide the statusbar"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]}),"\n",(0,t.jsx)("a",{name:"show"}),"\n",(0,t.jsx)(i.h2,{id:"show",children:"show()"}),"\n",(0,t.jsx)(i.p,{children:"Show the statusbar"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Kind"}),": global function"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var t=n(96540);const s={},d=t.createContext(s);function r(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);