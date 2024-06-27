"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4474],{6942:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(4848),t=i(8453);const r={},o="ESLint for Javascript Problems",l={id:"Features/Problems Panel/ESLint",title:"ESLint for Javascript Problems",description:"Phoenix Code provides a comprehensive interface for identifying and resolving",source:"@site/docs/03-Features/01-Problems Panel/02-ESLint.md",sourceDirName:"03-Features/01-Problems Panel",slug:"/Features/Problems Panel/ESLint",permalink:"/docs/Features/Problems Panel/ESLint",draft:!1,unlisted:!1,editUrl:"https://github.com/phcode-dev/docs/blob/main/docs/03-Features/01-Problems Panel/02-ESLint.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTML Validator",permalink:"/docs/Features/Problems Panel/html-lint"},next:{title:"Find In Files",permalink:"/docs/Features/find-in-files"}},d={},c=[{value:"Basic Usage",id:"basic-usage",level:3},{value:"Features",id:"features",level:4},{value:"Advanced Use",id:"advanced-use",level:3},{value:"FAQ",id:"faq",level:2},{value:"Q: Which version of ESLint are supported",id:"q-which-version-of-eslint-are-supported",level:4},{value:"Q: Why is ESLint not working in my project.",id:"q-why-is-eslint-not-working-in-my-project",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"eslint-for-javascript-problems",children:"ESLint for Javascript Problems"}),"\n",(0,s.jsxs)(n.p,{children:["Phoenix Code provides a comprehensive interface for identifying and resolving\n",(0,s.jsx)(n.code,{children:"ESLint"})," issues in your ",(0,s.jsx)(n.code,{children:"js"}),"/",(0,s.jsx)(n.code,{children:"jsx"})," code."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ESLint"})," is only available in desktop apps. In Browsers, ",(0,s.jsx)(n.code,{children:"JSHint"})," is the default\nlinter for javascript files."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/phcode-dev/phoenix/assets/5336369/eb00691a-a0b4-4c1a-9209-d78fc7db764d",alt:"image"})}),"\n",(0,s.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To activate ",(0,s.jsx)(n.code,{children:"ESLint"}),", the project must have a node ",(0,s.jsx)(n.code,{children:"package.json"})," file with\nESLint as a dependency. Opening or editing+saving a ",(0,s.jsx)(n.code,{children:"js"})," or ",(0,s.jsx)(n.code,{children:"jsx"})," file will lint\nthe file with ESLint and ."]}),"\n",(0,s.jsx)(n.h4,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Errors and warnings are underlined directly in the editor."}),"\n",(0,s.jsx)(n.li,{children:"Hovering over a highlighted line provides detailed information about the\nspecific ESLint problem and a suggested fix if available."}),"\n",(0,s.jsxs)(n.li,{children:["Fix individual issues by clicking on the ",(0,s.jsx)(n.code,{children:"Fix"})," button next to the specific\nproblem, or you can resolve all fixable issues in the file by clicking on\nthe ",(0,s.jsx)(n.code,{children:"Fix All"})," button at the top of the panel."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"advanced-use",children:"Advanced Use"}),"\n",(0,s.jsxs)(n.p,{children:["Phoenix Code uses ESLint configured in the opened project directory. Any changes\nto your ESLint configuration files will be automatically picked up. To learn\nmore about how to use and configure ESLint, see\n",(0,s.jsx)(n.a,{href:"https://eslint.org/docs/latest/use/getting-started",children:"Getting Started with ESLint"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(n.h4,{id:"q-which-version-of-eslint-are-supported",children:"Q: Which version of ESLint are supported"}),"\n",(0,s.jsxs)(n.p,{children:["Phoenix Code supports ",(0,s.jsx)(n.strong,{children:"ESLint versions 7 and above"})," only."]}),"\n",(0,s.jsx)(n.h4,{id:"q-why-is-eslint-not-working-in-my-project",children:"Q: Why is ESLint not working in my project."}),"\n",(0,s.jsx)(n.p,{children:"Most problems are usually reported in the problesm panel itself. These are the\nmost common errors:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure that ESLint is listed in ",(0,s.jsx)(n.code,{children:"dependencies"})," or ",(0,s.jsx)(n.code,{children:"devDependencies"})," section\nin your ",(0,s.jsx)(n.code,{children:"package.json"})," file. E.g."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n    "name": "My Project With ESLint",\n    "version": "1.0.0",\n    "description": "Sample package.json to activate ESLint",\n    "main": "index.js",\n    "scripts": {},\n    "devDependencies": {\n        "eslint": "^8.0.0"\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Ensure to run ",(0,s.jsx)(n.code,{children:"npm install"})," on the project and ",(0,s.jsx)(n.code,{children:"node_modules"})," folder is\npresent in the project at the top level."]}),"\n",(0,s.jsx)(n.li,{children:"ESLint config files may have errors. Check if the problem message contains\nany references to your ESLint config file."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);