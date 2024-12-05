"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8451],{15334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"API-Reference/utils/FeatureGate","title":"FeatureGate","description":"Import :","source":"@site/api/API-Reference/utils/FeatureGate.md","sourceDirName":"API-Reference/utils","slug":"/API-Reference/utils/FeatureGate","permalink":"/api/API-Reference/utils/FeatureGate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"ExtensionUtils","permalink":"/api/API-Reference/utils/ExtensionUtils"},"next":{"title":"KeyEvent","permalink":"/api/API-Reference/utils/KeyEvent"}}');var n=a(74848),s=a(28453);const l={},i=void 0,d={},u=[{value:"Import :",id:"import-",level:3},{value:"utils/FeatureGate",id:"utilsfeaturegate",level:2},{value:"Usage",id:"usage",level:2},{value:"creating a feature gate",id:"creating-a-feature-gate",level:3},{value:"checking if a feature is gated",id:"checking-if-a-feature-is-gated",level:3},{value:"Enabling features for testing",id:"enabling-features-for-testing",level:3},{value:"utils/FeatureGate.FEATURE_REGISTERED : <code>string</code>",id:"utilsfeaturegatefeature_registered--string",level:3},{value:"utils/FeatureGate.registerFeatureGate(featureName, enabledDefault) : <code>function</code>",id:"utilsfeaturegateregisterfeaturegatefeaturename-enableddefault--function",level:3},{value:"utils/FeatureGate.getAllRegisteredFeatures() \u21d2 <code>Array.&lt;string&gt;</code>",id:"utilsfeaturegategetallregisteredfeatures--arraystring",level:3},{value:"utils/FeatureGate.isFeatureEnabled(featureName) \u21d2 <code>boolean</code>",id:"utilsfeaturegateisfeatureenabledfeaturename--boolean",level:3},{value:"utils/FeatureGate.setFeatureEnabled(featureName, isEnabled)",id:"utilsfeaturegatesetfeatureenabledfeaturename-isenabled",level:3}];function o(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"import-",children:"Import :"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'const FeatureGate = brackets.getModule("utils/FeatureGate")\n'})}),"\n",(0,n.jsx)("a",{name:"module_utils/FeatureGate"}),"\n",(0,n.jsx)(t.h2,{id:"utilsfeaturegate",children:"utils/FeatureGate"}),"\n",(0,n.jsxs)(t.p,{children:["FeatureGate defines util methods for enabling or disabling features in development based on a flag in local storage.\nA global ",(0,n.jsx)(t.code,{children:"window.FeatureGate"})," object is made available in phoenix that can be called anytime after AppStart."]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"For Eg. You may have an extensions in development that colors phoenix in red. But you are working on a new feature\nthat makes other colors available, but not yet ready for use. So put the extension behind a named feature gate\nso that only people who want to test the extension will be able to use it."}),"\n",(0,n.jsx)(t.h3,{id:"creating-a-feature-gate",children:"creating a feature gate"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// within extensions\nconst FeatureGate = brackets.getModule(\"utils/FeatureGate\"); // replace with `require` for core modules.\nconst FEATURE_NEW_COLORS = 'myExtension.newColors';\nFeatureGate.registerFeatureGate(FEATURE_NEW_COLORS, false); // false is the default value\n"})}),"\n",(0,n.jsx)(t.h3,{id:"checking-if-a-feature-is-gated",children:"checking if a feature is gated"}),"\n",(0,n.jsxs)(t.p,{children:["Once the feature is registered, use the below code to check if the feature can be safely enabled. For Eg., if\nyou want to enable fancy colors based on the example above:\n",(0,n.jsx)(t.strong,{children:"Example"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"if(FeatureGate.isFeatureEnabled(FEATURE_NEW_COLORS)){\n   // do fancy colors here\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"enabling-features-for-testing",children:"Enabling features for testing"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Open developer tools > local storage"}),"\n",(0,n.jsxs)(t.li,{children:["Add a new key with the key you have specified for the feature gate.\nIn the above Eg., the key is ",(0,n.jsx)(t.code,{children:"myExtension.newColors"})]}),"\n",(0,n.jsxs)(t.li,{children:["set the value in local storage to ",(0,n.jsx)(t.code,{children:"enabled"})," to enable the feature or anything else to disable."]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate",children:"utils/FeatureGate"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate..FEATURE_REGISTERED",children:".FEATURE_REGISTERED"})," : ",(0,n.jsx)("code",{children:"string"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate..registerFeatureGate",children:".registerFeatureGate(featureName, enabledDefault)"})," : ",(0,n.jsx)("code",{children:"function"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate..getAllRegisteredFeatures",children:".getAllRegisteredFeatures()"})," \u21d2 ",(0,n.jsx)("code",{children:"Array.<string>"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate..isFeatureEnabled",children:".isFeatureEnabled(featureName)"})," \u21d2 ",(0,n.jsx)("code",{children:"boolean"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate..setFeatureEnabled",children:".setFeatureEnabled(featureName, isEnabled)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("a",{name:"module_utils/FeatureGate..FEATURE_REGISTERED"}),"\n",(0,n.jsxs)(t.h3,{id:"utilsfeaturegatefeature_registered--string",children:["utils/FeatureGate.FEATURE_REGISTERED : ",(0,n.jsx)("code",{children:"string"})]}),"\n",(0,n.jsx)(t.p,{children:"Feature gate registered"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": inner constant of ",(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate",children:(0,n.jsx)("code",{children:"utils/FeatureGate"})})]}),"\n",(0,n.jsx)("a",{name:"module_utils/FeatureGate..registerFeatureGate"}),"\n",(0,n.jsxs)(t.h3,{id:"utilsfeaturegateregisterfeaturegatefeaturename-enableddefault--function",children:["utils/FeatureGate.registerFeatureGate(featureName, enabledDefault) : ",(0,n.jsx)("code",{children:"function"})]}),"\n",(0,n.jsxs)(t.p,{children:["Registers a named feature with the default enabled state.\nTo register a feature gate with name ",(0,n.jsx)(t.code,{children:"myExtension.newColors"}),"\nconst FEATURE_NEW_COLORS = 'myExtension.newColors';\nFeatureGate.registerFeatureGate(FEATURE_NEW_COLORS, false); // false is the default value here"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate",children:(0,n.jsx)("code",{children:"utils/FeatureGate"})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"featureName"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"enabledDefault"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"boolean"})})]})]})]}),"\n",(0,n.jsx)("a",{name:"module_utils/FeatureGate..getAllRegisteredFeatures"}),"\n",(0,n.jsxs)(t.h3,{id:"utilsfeaturegategetallregisteredfeatures--arraystring",children:["utils/FeatureGate.getAllRegisteredFeatures() \u21d2 ",(0,n.jsx)("code",{children:"Array.<string>"})]}),"\n",(0,n.jsx)(t.p,{children:"Returns an array of all named registered feature gates."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate",children:(0,n.jsx)("code",{children:"utils/FeatureGate"})}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Returns"}),": ",(0,n.jsx)("code",{children:"Array.<string>"})," - list of registered features"]}),"\n",(0,n.jsx)("a",{name:"module_utils/FeatureGate..isFeatureEnabled"}),"\n",(0,n.jsxs)(t.h3,{id:"utilsfeaturegateisfeatureenabledfeaturename--boolean",children:["utils/FeatureGate.isFeatureEnabled(featureName) \u21d2 ",(0,n.jsx)("code",{children:"boolean"})]}),"\n",(0,n.jsxs)(t.p,{children:["Returns true is an featureGate is enabled either by default or overridden by the user using local storage.\nTo check if the feature ",(0,n.jsx)(t.code,{children:"myExtension.newColors"})," is enabled\nconst FEATURE_NEW_COLORS = 'myExtension.newColors';\nif(FeatureGate.isFeatureEnabled(FEATURE_NEW_COLORS))"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate",children:(0,n.jsx)("code",{children:"utils/FeatureGate"})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"featureName"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"string"})})]})})]}),"\n",(0,n.jsx)("a",{name:"module_utils/FeatureGate..setFeatureEnabled"}),"\n",(0,n.jsx)(t.h3,{id:"utilsfeaturegatesetfeatureenabledfeaturename-isenabled",children:"utils/FeatureGate.setFeatureEnabled(featureName, isEnabled)"}),"\n",(0,n.jsx)(t.p,{children:"Sets the enabled state of a specific feature in the application."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Kind"}),": inner method of ",(0,n.jsx)(t.a,{href:"#module_utils/FeatureGate",children:(0,n.jsx)("code",{children:"utils/FeatureGate"})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"featureName"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)(t.td,{children:"The name of the feature to be modified."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isEnabled"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"boolean"})}),(0,n.jsx)(t.td,{children:"A boolean flag indicating whether the feature should be enabled (true) or disabled (false)."})]})]})]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>i});var r=a(96540);const n={},s=r.createContext(n);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);