"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[661],{53238:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=t(74848),s=t(28453);const i={},a=void 0,d={id:"API-Reference/utils/EventManager",title:"EventManager",description:"Import :",source:"@site/api/API-Reference/utils/EventManager.md",sourceDirName:"API-Reference/utils",slug:"/API-Reference/utils/EventManager",permalink:"/api/API-Reference/utils/EventManager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventDispatcher",permalink:"/api/API-Reference/utils/EventDispatcher"},next:{title:"ExtensionInterface",permalink:"/api/API-Reference/utils/ExtensionInterface"}},l={},h=[{value:"Import :",id:"import-",level:3},{value:"utils/EventManager",id:"utilseventmanager",level:2},{value:"Usage",id:"usage",level:2},{value:"utils/EventManager.registerEventHandler(handlerName, eventDispatcher) \u21d2 <code>boolean</code>",id:"utilseventmanagerregistereventhandlerhandlername-eventdispatcher--boolean",level:3},{value:"utils/EventManager.isExistsEventHandler(handlerName) \u21d2 <code>boolean</code>",id:"utilseventmanagerisexistseventhandlerhandlername--boolean",level:3},{value:"utils/EventManager.triggerEvent(handlerName, eventName, ...eventParams) : <code>function</code>",id:"utilseventmanagertriggereventhandlername-eventname-eventparams--function",level:3},{value:"utils/EventManager.setTrustedOrigin(origin, isTrusted)",id:"utilseventmanagersettrustedoriginorigin-istrusted",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const EventManager = brackets.getModule("utils/EventManager")\n'})}),"\n",(0,r.jsx)("a",{name:"module_utils/EventManager"}),"\n",(0,r.jsx)(n.h2,{id:"utilseventmanager",children:"utils/EventManager"}),"\n",(0,r.jsxs)(n.p,{children:["The global EventManager can be used to register named EventDispatchers so that events\ncan be triggered from anywhere without using require context. This should also be used to handle custom\n",(0,r.jsx)(n.code,{children:"window.onmessage"})," handlers."]}),"\n",(0,r.jsxs)(n.p,{children:["A global ",(0,r.jsx)(n.code,{children:"window.EventManager"})," object is made available in phoenix that can be called anytime after AppStart."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["For Eg. Let's say we have an extension ",(0,r.jsx)(n.code,{children:"drawImage"})," installed that wants to expose custom functionality to phoenix.\nThe Extension will first register named EventHandler like this:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// in drawImage/someExtensionModule.js module within the extension, do the following:\nconst EventDispatcher = brackets.getModule("utils/EventDispatcher"),\nEventManager = brackets.getModule("utils/EventManager");\nEventDispatcher.makeEventDispatcher(exports);\n\nEventManager.registerEventHandler("drawImage-Handler", exports);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Once the event handler is registered, we can trigger events on the named handler anywhere in phoenix\n(inside or outside the extension) by using:\n",(0,r.jsx)(n.strong,{children:"Example"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'EventManager.triggerEvent("drawImage-Handler", "someEventName", "param1", "param2", ...);\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#module_utils/EventManager",children:"utils/EventManager"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#module_utils/EventManager..registerEventHandler",children:".registerEventHandler(handlerName, eventDispatcher)"})," \u21d2 ",(0,r.jsx)("code",{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#module_utils/EventManager..isExistsEventHandler",children:".isExistsEventHandler(handlerName)"})," \u21d2 ",(0,r.jsx)("code",{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#module_utils/EventManager..triggerEvent",children:".triggerEvent(handlerName, eventName, ...eventParams)"})," : ",(0,r.jsx)("code",{children:"function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#module_utils/EventManager..setTrustedOrigin",children:".setTrustedOrigin(origin, isTrusted)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("a",{name:"module_utils/EventManager..registerEventHandler"}),"\n",(0,r.jsxs)(n.h3,{id:"utilseventmanagerregistereventhandlerhandlername-eventdispatcher--boolean",children:["utils/EventManager.registerEventHandler(handlerName, eventDispatcher) \u21d2 ",(0,r.jsx)("code",{children:"boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["Registers a named EventHandler. Event handlers are created using the call:\n",(0,r.jsx)(n.code,{children:"EventDispatcher.makeEventDispatcher(Command.prototype);"})]}),"\n",(0,r.jsx)(n.p,{children:'To register a close dialogue event handler in an extension:\n// in close-dialogue.js module winthin the extension, do the following:\nconst EventDispatcher = brackets.getModule("utils/EventDispatcher"),\nEventDispatcher.makeEventDispatcher(exports);\nconst EventManager = brackets.getModule("utils/EventManager");'}),"\n",(0,r.jsxs)(n.p,{children:["// Note: for event handler names, please change the ",(0,r.jsx)(n.code,{children:"extensionName"})," to your extension name\n// to prevent collisions. EventHandlers starting with ",(0,r.jsx)(n.code,{children:"ph-"})," and ",(0,r.jsx)(n.code,{children:"br-"}),' are reserved as system handlers\n// and not available for use in extensions.\nEventManager.registerEventHandler("',(0,r.jsx)(n.code,{children:"extensionName"}),'-closeDialogueHandler", exports);\n// Once the event handler is registered, see triggerEvent API on how to raise events']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,r.jsx)(n.a,{href:"#module_utils/EventManager",children:(0,r.jsx)("code",{children:"utils/EventManager"})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"handlerName"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"a unique name of the handler."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"eventDispatcher"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)(n.td,{children:"An EventDispatcher that will be used to trigger events."})]})]})]}),"\n",(0,r.jsx)("a",{name:"module_utils/EventManager..isExistsEventHandler"}),"\n",(0,r.jsxs)(n.h3,{id:"utilseventmanagerisexistseventhandlerhandlername--boolean",children:["utils/EventManager.isExistsEventHandler(handlerName) \u21d2 ",(0,r.jsx)("code",{children:"boolean"})]}),"\n",(0,r.jsx)(n.p,{children:"Returns true is an EventHandler of the given name exists."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,r.jsx)(n.a,{href:"#module_utils/EventManager",children:(0,r.jsx)("code",{children:"utils/EventManager"})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"handlerName"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})})]})})]}),"\n",(0,r.jsx)("a",{name:"module_utils/EventManager..triggerEvent"}),"\n",(0,r.jsxs)(n.h3,{id:"utilseventmanagertriggereventhandlername-eventname-eventparams--function",children:["utils/EventManager.triggerEvent(handlerName, eventName, ...eventParams) : ",(0,r.jsx)("code",{children:"function"})]}),"\n",(0,r.jsx)(n.p,{children:"Triggers an event on the named event handler."}),"\n",(0,r.jsxs)(n.p,{children:["To trigger an event to the ",(0,r.jsx)(n.code,{children:"closeDialogue"}),' event handler registered above\n// anywhere in code, do the following:\nconst EventManager = brackets.getModule("utils/EventManager");\nEventManager.triggerEvent("closeDialogueHandler", "someEvent", "param1", "param2", ...);']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,r.jsx)(n.a,{href:"#module_utils/EventManager",children:(0,r.jsx)("code",{children:"utils/EventManager"})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"handlerName"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"eventName"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"the event name as recognised by the handler. this is usually a string."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"...eventParams"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Can be a comma seperated list of args or a single argument."})]})]})]}),"\n",(0,r.jsx)("a",{name:"module_utils/EventManager..setTrustedOrigin"}),"\n",(0,r.jsx)(n.h3,{id:"utilseventmanagersettrustedoriginorigin-istrusted",children:"utils/EventManager.setTrustedOrigin(origin, isTrusted)"}),"\n",(0,r.jsx)(n.p,{children:"add or remove a domain, in the list of trusted origin"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,r.jsx)(n.a,{href:"#module_utils/EventManager",children:(0,r.jsx)("code",{children:"utils/EventManager"})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"origin"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)(n.td,{children:"the origin to be added or removed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isTrusted"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"boolean"})}),(0,r.jsxs)(n.td,{children:["if ",(0,r.jsx)(n.code,{children:"true"})," adds the origin to the list, else removes it."]})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);