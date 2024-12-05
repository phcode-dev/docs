"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7371],{77556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"API-Reference/utils/ExtensionInterface","title":"ExtensionInterface","description":"Import :","source":"@site/api/API-Reference/utils/ExtensionInterface.md","sourceDirName":"API-Reference/utils","slug":"/API-Reference/utils/ExtensionInterface","permalink":"/api/API-Reference/utils/ExtensionInterface","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"EventManager","permalink":"/api/API-Reference/utils/EventManager"},"next":{"title":"ExtensionLoader","permalink":"/api/API-Reference/utils/ExtensionLoader"}}');var s=t(74848),r=t(28453);const a={},c=void 0,l={},o=[{value:"Import :",id:"import-",level:3},{value:"utils/ExtensionInterface",id:"utilsextensioninterface",level:2},{value:"Usage",id:"usage",level:2},{value:"utils/ExtensionInterface.EVENT_EXTENSION_INTERFACE_REGISTERED : <code>string</code>",id:"utilsextensioninterfaceevent_extension_interface_registered--string",level:3},{value:"utils/ExtensionInterface.registerExtensionInterface(extensionInterfaceName, interfaceObject) : <code>function</code>",id:"utilsextensioninterfaceregisterextensioninterfaceextensioninterfacename-interfaceobject--function",level:3},{value:"utils/ExtensionInterface.isExistsExtensionInterface(extensionInterfaceName) \u21d2 <code>boolean</code>",id:"utilsextensioninterfaceisexistsextensioninterfaceextensioninterfacename--boolean",level:3},{value:"utils/ExtensionInterface.waitAndGetExtensionInterface(extensionInterfaceName) \u21d2 <code>Promise</code>",id:"utilsextensioninterfacewaitandgetextensioninterfaceextensioninterfacename--promise",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const ExtensionInterface = brackets.getModule("utils/ExtensionInterface")\n'})}),"\n",(0,s.jsx)("a",{name:"module_utils/ExtensionInterface"}),"\n",(0,s.jsx)(n.h2,{id:"utilsextensioninterface",children:"utils/ExtensionInterface"}),"\n",(0,s.jsxs)(n.p,{children:["ExtensionInterface defines utility methods for communicating between extensions safely.\nA global ",(0,s.jsx)(n.code,{children:"window.ExtensionInterface"})," object is made available in phoenix that can be called anytime after AppStart."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["For Eg. You may have two extensions installed say ",(0,s.jsx)(n.code,{children:"angular"})," extension which has to call functions made available by\n",(0,s.jsx)(n.code,{children:"angular-cli"})," Extension."]}),"\n",(0,s.jsxs)(n.p,{children:["For Making this possible, the ",(0,s.jsx)(n.code,{children:"angular-cli"})," extension makes a named interface available with the ExtensionInterface\nmodule and ",(0,s.jsx)(n.code,{children:"angular"})," extension can get hold of the interface as and when the extension gets loaded."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// in angular-cli extension, make a file say cli-interface.js module within the extension, do the following:\nconst ExtensionInterface = brackets.getModule("utils/ExtensionInterface"),\n// You can replace exports with any object you want to expose outside the extension really.\nExtensionInterface.registerExtensionInterface("angularCli", exports);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Once the interface is registered, the angular extension can get hold of the interface with the following code\n(inside or outside the extension) by using:\n",(0,s.jsx)(n.strong,{children:"Example"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'let angularCli;\nExtensionInterface.waitAndGetExtensionInterface("angularCli").then(interfaceObj=> angularCli = interfaceObj);\nif(angularCli){ // check if angular cli is avilable\nangularCli.callSomeFunction();\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," that the ",(0,s.jsx)(n.code,{children:"angularCli"})," interface is async populated as and when the cli extension is loaded and the\ninterface made available."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NBB:"})," Do Not use ",(0,s.jsx)(n.code,{children:"await waitAndGetExtensionInterface"})," on tol level require as the module loading might fail."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#module_utils/ExtensionInterface",children:"utils/ExtensionInterface"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#module_utils/ExtensionInterface..EVENT_EXTENSION_INTERFACE_REGISTERED",children:".EVENT_EXTENSION_INTERFACE_REGISTERED"})," : ",(0,s.jsx)("code",{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#module_utils/ExtensionInterface..registerExtensionInterface",children:".registerExtensionInterface(extensionInterfaceName, interfaceObject)"})," : ",(0,s.jsx)("code",{children:"function"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#module_utils/ExtensionInterface..isExistsExtensionInterface",children:".isExistsExtensionInterface(extensionInterfaceName)"})," \u21d2 ",(0,s.jsx)("code",{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#module_utils/ExtensionInterface..waitAndGetExtensionInterface",children:".waitAndGetExtensionInterface(extensionInterfaceName)"})," \u21d2 ",(0,s.jsx)("code",{children:"Promise"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"module_utils/ExtensionInterface..EVENT_EXTENSION_INTERFACE_REGISTERED"}),"\n",(0,s.jsxs)(n.h3,{id:"utilsextensioninterfaceevent_extension_interface_registered--string",children:["utils/ExtensionInterface.EVENT_EXTENSION_INTERFACE_REGISTERED : ",(0,s.jsx)("code",{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Extension interface registered event"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": inner constant of ",(0,s.jsx)(n.a,{href:"#module_utils/ExtensionInterface",children:(0,s.jsx)("code",{children:"utils/ExtensionInterface"})})]}),"\n",(0,s.jsx)("a",{name:"module_utils/ExtensionInterface..registerExtensionInterface"}),"\n",(0,s.jsxs)(n.h3,{id:"utilsextensioninterfaceregisterextensioninterfaceextensioninterfacename-interfaceobject--function",children:["utils/ExtensionInterface.registerExtensionInterface(extensionInterfaceName, interfaceObject) : ",(0,s.jsx)("code",{children:"function"})]}),"\n",(0,s.jsx)(n.p,{children:"Registers a named extension interface. Will overwrite if an interface of the same name is already present."}),"\n",(0,s.jsxs)(n.p,{children:["To register an interface ",(0,s.jsx)(n.code,{children:"angularCli"}),'\nExtensionInterface.registerExtensionInterface("angularCli", exports);']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,s.jsx)(n.a,{href:"#module_utils/ExtensionInterface",children:(0,s.jsx)("code",{children:"utils/ExtensionInterface"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"extensionInterfaceName"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"interfaceObject"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"Object"})})]})]})]}),"\n",(0,s.jsx)("a",{name:"module_utils/ExtensionInterface..isExistsExtensionInterface"}),"\n",(0,s.jsxs)(n.h3,{id:"utilsextensioninterfaceisexistsextensioninterfaceextensioninterfacename--boolean",children:["utils/ExtensionInterface.isExistsExtensionInterface(extensionInterfaceName) \u21d2 ",(0,s.jsx)("code",{children:"boolean"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns true is an interface of the given name exists."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,s.jsx)(n.a,{href:"#module_utils/ExtensionInterface",children:(0,s.jsx)("code",{children:"utils/ExtensionInterface"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"extensionInterfaceName"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string"})})]})})]}),"\n",(0,s.jsx)("a",{name:"module_utils/ExtensionInterface..waitAndGetExtensionInterface"}),"\n",(0,s.jsxs)(n.h3,{id:"utilsextensioninterfacewaitandgetextensioninterfaceextensioninterfacename--promise",children:["utils/ExtensionInterface.waitAndGetExtensionInterface(extensionInterfaceName) \u21d2 ",(0,s.jsx)("code",{children:"Promise"})]}),"\n",(0,s.jsx)(n.p,{children:"Returns a promise that gets resolved only when an ExtensionInterface of the given name is registered. Use this\ngetter to get hold of extensions interface predictably."}),"\n",(0,s.jsxs)(n.p,{children:["To get a registered interface ",(0,s.jsx)(n.code,{children:"angularCli"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'let angularCli;\nExtensionInterface.waitAndGetExtensionInterface("angularCli").then(interfaceObj=> angularCli = interfaceObj);\nif(angularCli){ // check if angular cli is avilable\nangularCli.callSomeFunction();\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,s.jsx)(n.a,{href:"#module_utils/ExtensionInterface",children:(0,s.jsx)("code",{children:"utils/ExtensionInterface"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Param"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"extensionInterfaceName"})})})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);