"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2042],{39411:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"API-Reference/NodeConnector","title":"NodeConnector","description":"Import :","source":"@site/api/API-Reference/NodeConnector.md","sourceDirName":"API-Reference","slug":"/API-Reference/NodeConnector","permalink":"/api/API-Reference/NodeConnector","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Session","permalink":"/api/API-Reference/JSUtils/Session"},"next":{"title":"CommandManager","permalink":"/api/API-Reference/command/CommandManager"}}');var d=o(74848),t=o(28453);const c={},s=void 0,i={},a=[{value:"Import :",id:"import-",level:3},{value:"NodeConnector",id:"nodeconnector",level:2},{value:"Setting Up a <code>NodeConnector</code>",id:"setting-up-a-nodeconnector",level:2},{value:"Create <code>NodeConnector</code> in Phoenix (<code>x.js</code>)",id:"create-nodeconnector-in-phoenix-xjs",level:3},{value:"Create <code>NodeConnector</code> in Node.js (<code>y.js</code>)",id:"create-nodeconnector-in-nodejs-yjs",level:3},{value:"Executing Functions",id:"executing-functions",level:2},{value:"Event Handling",id:"event-handling",level:2},{value:"Handling ArrayBuffer Data in Function Execution",id:"handling-arraybuffer-data-in-function-execution",level:3},{value:"Handling ArrayBuffer Data in Event Handling",id:"handling-arraybuffer-data-in-event-handling",level:3},{value:"Caveats",id:"caveats",level:2},{value:"NodeConnector.createNodeConnector(nodeConnectorID, moduleExports) \u21d2 <code>Object</code>",id:"nodeconnectorcreatenodeconnectornodeconnectorid-moduleexports--object",level:3},{value:"NodeConnector.isNodeAvailable() \u21d2 <code>boolean</code>",id:"nodeconnectorisnodeavailable--boolean",level:3},{value:"NodeConnector.isNodeReady() \u21d2 <code>boolean</code>",id:"nodeconnectorisnodeready--boolean",level:3},{value:"NodeConnector.terminateNode() \u21d2 <code>Promise</code>",id:"nodeconnectorterminatenode--promise",level:3},{value:"NodeConnector.setInspectEnabled(enabled)",id:"nodeconnectorsetinspectenabledenabled",level:3},{value:"NodeConnector.isInspectEnabled() \u21d2 <code>boolean</code>",id:"nodeconnectorisinspectenabled--boolean",level:3},{value:"NodeConnector.getInspectPort() \u21d2 <code>number</code>",id:"nodeconnectorgetinspectport--number",level:3}];function l(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:'const NodeConnector = brackets.getModule("NodeConnector")\n'})}),"\n",(0,d.jsx)("a",{name:"module_NodeConnector"}),"\n",(0,d.jsx)(n.h2,{id:"nodeconnector",children:"NodeConnector"}),"\n",(0,d.jsx)(n.p,{children:"Node Connector Communication Module"}),"\n",(0,d.jsxs)(n.p,{children:["This module simplifies communication between Node.js and Phoenix (phcode). A ",(0,d.jsx)(n.code,{children:"NodeConnector"})," acts as an intermediary,\rallowing you to execute functions in Node.js from Phoenix and vice versa. You can use the ",(0,d.jsx)(n.code,{children:"execPeer"})," method to call\rfunctions on the other side and handle communication seamlessly. Use ",(0,d.jsx)(n.code,{children:"triggerPeer"})," to trigger events\ron the other side."]}),"\n",(0,d.jsxs)(n.h2,{id:"setting-up-a-nodeconnector",children:["Setting Up a ",(0,d.jsx)(n.code,{children:"NodeConnector"})]}),"\n",(0,d.jsxs)(n.p,{children:["To establish communication between two modules, such as ",(0,d.jsx)(n.code,{children:"x.js"})," in Phoenix and ",(0,d.jsx)(n.code,{children:"y.js"})," in Node.js, follow these steps:"]}),"\n",(0,d.jsxs)(n.h3,{id:"create-nodeconnector-in-phoenix-xjs",children:["Create ",(0,d.jsx)(n.code,{children:"NodeConnector"})," in Phoenix (",(0,d.jsx)(n.code,{children:"x.js"}),")"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const NodeConnector = require('NodeConnector');\rconst XY_NODE_CONNECTOR_ID = 'ext_x_y'; // Use a unique ID\rlet nodeConnector = NodeConnector.createNodeConnector(XY_NODE_CONNECTOR_ID, exports);\r\rexports.modifyImage = async function(imageName, imageArrayBuffer) {\r  // Perform image operations with the imageArrayBuffer\r  // To return an ArrayBuffer, return an object with a `buffer` key.\r  return {\r    operationDone: 'colored, cropped',\r    buffer: imageArrayBuffer,\r  };\r};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"create-nodeconnector-in-nodejs-yjs",children:["Create ",(0,d.jsx)(n.code,{children:"NodeConnector"})," in Node.js (",(0,d.jsx)(n.code,{children:"y.js"}),")"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const XY_NODE_CONNECTOR_ID = 'ext_x_y'; // Use the same unique ID\rlet nodeConnector = global.createNodeConnector(XY_NODE_CONNECTOR_ID, exports);\r\rexports.getPWDRelative = async function(subPath) {\r  return process.cwd + '/' + subPath;\r};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["With these steps, a ",(0,d.jsx)(n.code,{children:"NodeConnector"})," is set up, enabling two-way communication."]}),"\n",(0,d.jsx)(n.h2,{id:"executing-functions",children:"Executing Functions"}),"\n",(0,d.jsxs)(n.p,{children:["To call a Node.js function from Phoenix, use the ",(0,d.jsx)(n.code,{children:"execPeer"})," method.\n",(0,d.jsx)(n.strong,{children:"Example"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"// In `x.js` (Phoenix)\rconst fullPath = await nodeConnector.execPeer('getPWDRelative', 'sub/path.html');\n"})}),"\n",(0,d.jsxs)(n.p,{children:["To execute a Phoenix function from Node.js and transfer binary data, pass an optional ArrayBuffer.\n",(0,d.jsx)(n.strong,{children:"Example"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"// In `y.js` (Node.js)\rconst { operationDone, buffer } = await nodeConnector.execPeer('modifyImage', {name:'theHills.png'}, imageAsArrayBuffer);\n"})}),"\n",(0,d.jsx)(n.h2,{id:"event-handling",children:"Event Handling"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"NodeConnector"})," object implements all the APIs supported by ",(0,d.jsx)(n.code,{children:"utils/EventDispatcher"}),". You can trigger and listen\rto events between Node.js and Phoenix using the ",(0,d.jsx)(n.code,{children:"triggerPeer"})," and (",(0,d.jsx)(n.code,{children:"on"}),", ",(0,d.jsx)(n.code,{children:"one"})," or ",(0,d.jsx)(n.code,{children:"off"}),") methods.\n",(0,d.jsx)(n.strong,{children:"Example"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"// In `y.js` (Node.js)\rnodeConnector.on('phoenixProjectOpened', (_event, projectPath) => {\r  console.log(projectPath);\r});\r\rnodeConnector.one('phoenixProjectOpened', (_event, projectPath) => {\r  console.log(projectPath + \"will be received only once\");\r});\n"})}),"\n",(0,d.jsxs)(n.p,{children:["To raise an event from Phoenix to Node.js:\n",(0,d.jsx)(n.strong,{children:"Example"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"// In `x.js` (Phoenix)\rnodeConnector.triggerPeer('phoenixProjectOpened', '/x/project/folder');\n"})}),"\n",(0,d.jsxs)(n.p,{children:["To Switch off events\n",(0,d.jsx)(n.strong,{children:"Example"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"nodeConnector.off('phoenixProjectOpened'); // will switch off all event handlers of that name.\n"})}),"\n",(0,d.jsxs)(n.p,{children:["By Default, all events handlers with the eventName is removed when you call ",(0,d.jsx)(n.code,{children:"nodeConnector.off(eventName)"})," fn.\rTo selectively switch off event handlers, please see reference for ",(0,d.jsx)(n.code,{children:"utils/EventDispatcher"})," module."]}),"\n",(0,d.jsx)(n.h3,{id:"handling-arraybuffer-data-in-function-execution",children:"Handling ArrayBuffer Data in Function Execution"}),"\n",(0,d.jsxs)(n.p,{children:["When executing functions that send or receive binary data, ensure that the functions are asynchronous and accept an\roptional ArrayBuffer as a parameter. To return binary data, use an object with a ",(0,d.jsx)(n.code,{children:"buffer"})," key."]}),"\n",(0,d.jsxs)(n.p,{children:["Example of calling a function in Node.js with binary data transfer:\n",(0,d.jsx)(n.strong,{children:"Example"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"// In `y.js` (Node.js)\rconst { operationDone, buffer } = await nodeConnector.execPeer('modifyImage', {name:'name.png'}, imageArrayBuffer);\n"})}),"\n",(0,d.jsx)(n.h3,{id:"handling-arraybuffer-data-in-event-handling",children:"Handling ArrayBuffer Data in Event Handling"}),"\n",(0,d.jsxs)(n.p,{children:["Use the ",(0,d.jsx)(n.code,{children:"triggerPeer"})," method to send binary data in events. Include the ArrayBuffer as an optional parameter."]}),"\n",(0,d.jsxs)(n.p,{children:["Example of sending binary data in an event from Phoenix to Node.js:\n",(0,d.jsx)(n.strong,{children:"Example"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"// In `x.js` (Phoenix)\rconst imageArrayBuffer = getSomeImageArrayBuffer(); // Get the ArrayBuffer\rnodeConnector.triggerPeer('imageEdited', 'name.png', imageArrayBuffer);\n"})}),"\n",(0,d.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Be cautious when sending large binary data, as it may affect performance and memory usage. Transferring large\rdata is fully supported, but be mindful of performance."}),"\n",(0,d.jsxs)(n.li,{children:["Functions called with ",(0,d.jsx)(n.code,{children:"execPeer"})," and ",(0,d.jsx)(n.code,{children:"triggerPeer"})," must be asynchronous and accept a single argument. An optional\rsecond argument can be used to transfer large binary data as an ArrayBuffer."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["For more event handling operations and details, refer to the documentation for the ",(0,d.jsx)(n.code,{children:"utils/EventDispatcher"})," module."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#module_NodeConnector",children:"NodeConnector"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#module_NodeConnector..createNodeConnector",children:".createNodeConnector(nodeConnectorID, moduleExports)"})," \u21d2 ",(0,d.jsx)("code",{children:"Object"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#module_NodeConnector..isNodeAvailable",children:".isNodeAvailable()"})," \u21d2 ",(0,d.jsx)("code",{children:"boolean"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#module_NodeConnector..isNodeReady",children:".isNodeReady()"})," \u21d2 ",(0,d.jsx)("code",{children:"boolean"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#module_NodeConnector..terminateNode",children:".terminateNode()"})," \u21d2 ",(0,d.jsx)("code",{children:"Promise"})]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#module_NodeConnector..setInspectEnabled",children:".setInspectEnabled(enabled)"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#module_NodeConnector..isInspectEnabled",children:".isInspectEnabled()"})," \u21d2 ",(0,d.jsx)("code",{children:"boolean"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#module_NodeConnector..getInspectPort",children:".getInspectPort()"})," \u21d2 ",(0,d.jsx)("code",{children:"number"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)("a",{name:"module_NodeConnector..createNodeConnector"}),"\n",(0,d.jsxs)(n.h3,{id:"nodeconnectorcreatenodeconnectornodeconnectorid-moduleexports--object",children:["NodeConnector.createNodeConnector(nodeConnectorID, moduleExports) \u21d2 ",(0,d.jsx)("code",{children:"Object"})]}),"\n",(0,d.jsx)(n.p,{children:"Creates a new node connector with the specified ID and module exports."}),"\n",(0,d.jsxs)(n.p,{children:["Returns a NodeConnector Object (which is an EventDispatcher with\radditional ",(0,d.jsx)(n.code,{children:"execPeer"})," and ",(0,d.jsx)(n.code,{children:"triggerPeer"})," methods. ",(0,d.jsx)(n.code,{children:"peer"})," here means, if you are executing ",(0,d.jsx)(n.code,{children:"execPeer"}),"\rin Phoenix, it will execute the named function in node side, and vice versa. You can right away start\rusing ",(0,d.jsx)(n.code,{children:"execPeer"}),", ",(0,d.jsx)(n.code,{children:"triggerPeer"}),"(to send/receive events) APIs without waiting to check if the\rother side nodeConnector is created."]}),"\n",(0,d.jsxs)(n.p,{children:["Note: If the NodeConnector has not been created on the other end, requests made with ",(0,d.jsx)(n.code,{children:"execPeer"})," or\r",(0,d.jsx)(n.code,{children:"triggerPeer"})," will be temporarily queued for up to 10 seconds to allow time for the connector to be created.\rIf the connector is not created within this timeout period, all queued ",(0,d.jsx)(n.code,{children:"execPeer"})," requests will be rejected,\rand all queued events will be dropped. It is recommended to call the ",(0,d.jsx)(n.code,{children:"createNodeConnector"})," API on both ends\rwithin a timeframe of less than 10 seconds(ideally same time) for seamless communication."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"execPeer: A function that executes a peer function with specified parameters."}),"\n",(0,d.jsx)(n.li,{children:"triggerPeer: A function that triggers an event to be sent to a peer."}),"\n",(0,d.jsxs)(n.li,{children:["Also contains all the APIs supported by ",(0,d.jsx)(n.code,{children:"utils/EventDispatcher"})," module."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,d.jsx)(n.a,{href:"#module_NodeConnector",children:(0,d.jsx)("code",{children:"NodeConnector"})}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Returns"}),": ",(0,d.jsx)("code",{children:"Object"})," - - A NodeConnector Object. Also contains all the APIs supported by ",(0,d.jsx)(n.code,{children:"utils/EventDispatcher"})," module.",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Throws"}),":"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)("code",{children:"Error"})," - If a node connector with the same ID already exists/invalid args passed."]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nodeConnectorID"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)(n.td,{children:"The unique identifier for the new node connector."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"moduleExports"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"Object"})}),(0,d.jsx)(n.td,{children:"The exports of the module that contains the functions to be executed on the other side."})]})]})]}),"\n",(0,d.jsx)("a",{name:"module_NodeConnector..isNodeAvailable"}),"\n",(0,d.jsxs)(n.h3,{id:"nodeconnectorisnodeavailable--boolean",children:["NodeConnector.isNodeAvailable() \u21d2 ",(0,d.jsx)("code",{children:"boolean"})]}),"\n",(0,d.jsx)(n.p,{children:"Checks if Node.js Engine is available. (returns true even if the node instance is terminated)"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,d.jsx)(n.a,{href:"#module_NodeConnector",children:(0,d.jsx)("code",{children:"NodeConnector"})}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Returns"}),": ",(0,d.jsx)("code",{children:"boolean"})," - Returns true if Node.js Engine is available."]}),"\n",(0,d.jsx)("a",{name:"module_NodeConnector..isNodeReady"}),"\n",(0,d.jsxs)(n.h3,{id:"nodeconnectorisnodeready--boolean",children:["NodeConnector.isNodeReady() \u21d2 ",(0,d.jsx)("code",{children:"boolean"})]}),"\n",(0,d.jsx)(n.p,{children:"Node is available and is ready to exec requests"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,d.jsx)(n.a,{href:"#module_NodeConnector",children:(0,d.jsx)("code",{children:"NodeConnector"})})]}),"\n",(0,d.jsx)("a",{name:"module_NodeConnector..terminateNode"}),"\n",(0,d.jsxs)(n.h3,{id:"nodeconnectorterminatenode--promise",children:["NodeConnector.terminateNode() \u21d2 ",(0,d.jsx)("code",{children:"Promise"})]}),"\n",(0,d.jsx)(n.p,{children:"Terminate the PhNodeEngine node if it is available. Else does nothing."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,d.jsx)(n.a,{href:"#module_NodeConnector",children:(0,d.jsx)("code",{children:"NodeConnector"})}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Returns"}),": ",(0,d.jsx)("code",{children:"Promise"})," - promise that resolves when node process is terminated and exits."]}),"\n",(0,d.jsx)("a",{name:"module_NodeConnector..setInspectEnabled"}),"\n",(0,d.jsx)(n.h3,{id:"nodeconnectorsetinspectenabledenabled",children:"NodeConnector.setInspectEnabled(enabled)"}),"\n",(0,d.jsx)(n.p,{children:"Sets weather to enable node inspector in next boot."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,d.jsx)(n.a,{href:"#module_NodeConnector",children:(0,d.jsx)("code",{children:"NodeConnector"})})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"enabled"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"boolean"})}),(0,d.jsx)(n.td,{children:"true to enable, else false."})]})})]}),"\n",(0,d.jsx)("a",{name:"module_NodeConnector..isInspectEnabled"}),"\n",(0,d.jsxs)(n.h3,{id:"nodeconnectorisinspectenabled--boolean",children:["NodeConnector.isInspectEnabled() \u21d2 ",(0,d.jsx)("code",{children:"boolean"})]}),"\n",(0,d.jsx)(n.p,{children:"Returns whether node inspector is enabled. If node is not present, always returns false."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,d.jsx)(n.a,{href:"#module_NodeConnector",children:(0,d.jsx)("code",{children:"NodeConnector"})}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Returns"}),": ",(0,d.jsx)("code",{children:"boolean"})," - True if inspect mode is enabled, false otherwise."]}),"\n",(0,d.jsx)("a",{name:"module_NodeConnector..getInspectPort"}),"\n",(0,d.jsxs)(n.h3,{id:"nodeconnectorgetinspectport--number",children:["NodeConnector.getInspectPort() \u21d2 ",(0,d.jsx)("code",{children:"number"})]}),"\n",(0,d.jsx)(n.p,{children:"Retrieves the node inspector port for the Phoenix Node.js engine."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": inner method of ",(0,d.jsx)(n.a,{href:"#module_NodeConnector",children:(0,d.jsx)("code",{children:"NodeConnector"})}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Returns"}),": ",(0,d.jsx)("code",{children:"number"})," - The inspection port number."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>s});var r=o(96540);const d={},t=r.createContext(d);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);