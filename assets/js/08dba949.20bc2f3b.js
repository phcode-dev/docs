"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4514],{81831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"Features/php-live-preview","title":"PHP Live Preview Setup","description":"Setting up a live preview for PHP projects is straightforward with Apache and XAMPP. Below are the installation and configuration steps for each operating system:","source":"@site/docs/06-Features/03-php-live-preview.md","sourceDirName":"06-Features","slug":"/Features/php-live-preview","permalink":"/docs/Features/php-live-preview","draft":false,"unlisted":false,"editUrl":"https://github.com/phcode-dev/docs/blob/main/docs/06-Features/03-php-live-preview.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"PHP Live Preview Setup"},"sidebar":"tutorialSidebar","previous":{"title":"Custom Live Preview Server","permalink":"/docs/Features/live-preview-settings"},"next":{"title":"Find In Files","permalink":"/docs/Features/find-in-files"}}');var a=r(74848),i=r(28453),o=(r(96540),r(56399)),s=r(11470),l=r(19365);const c={title:"PHP Live Preview Setup"},u=void 0,d={},p=[{value:"Steps for Windows",id:"steps-for-windows",level:3},{value:"Steps for Linux",id:"steps-for-linux",level:3},{value:"Steps for macOS",id:"steps-for-macos",level:3},{value:"PHP Live Preview in Action",id:"php-live-preview-in-action",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Setting up a live preview for PHP projects is straightforward with Apache and XAMPP. Below are the installation and configuration steps for each operating system:"}),"\n",(0,a.jsxs)(s.A,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],children:[(0,a.jsxs)(l.A,{value:"windows",children:[(0,a.jsx)(t.h3,{id:"steps-for-windows",children:"Steps for Windows"}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Download and install XAMPP from ",(0,a.jsx)(t.a,{href:"https://www.apachefriends.org/",children:"Apache Friends"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Open the XAMPP Control Panel."}),"\n",(0,a.jsxs)(t.li,{children:["Modify the ",(0,a.jsx)(t.code,{children:"httpd.conf"})," file located at ",(0,a.jsx)(t.code,{children:"C:\\xampp\\apache\\conf\\httpd.conf"}),":","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'DocumentRoot "C:/path/to/your/project"\n<Directory "C:/path/to/your/project">\n</Directory>\n'})}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"Save the updated configuration."}),"\n",(0,a.jsx)(t.li,{children:"Restart the Apache server through the XAMPP Control Panel."}),"\n"]})]}),(0,a.jsxs)(l.A,{value:"linux",children:[(0,a.jsx)(t.h3,{id:"steps-for-linux",children:"Steps for Linux"}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Download and install XAMPP from ",(0,a.jsx)(t.a,{href:"https://www.apachefriends.org/",children:"Apache Friends"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Open the XAMPP Control Panel by running ",(0,a.jsx)(t.code,{children:"sudo /opt/lampp/lampp start"})," in your terminal."]}),"\n",(0,a.jsxs)(t.li,{children:["Modify the ",(0,a.jsx)(t.code,{children:"httpd.conf"})," file located at ",(0,a.jsx)(t.code,{children:"/opt/lampp/etc/httpd.conf"}),":","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'DocumentRoot "/path/to/your/project"\n<Directory "/path/to/your/project">\n</Directory>\n'})}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"Save the updated configuration."}),"\n",(0,a.jsx)(t.li,{children:"Restart the Apache server through the XAMPP Control Panel."}),"\n"]})]}),(0,a.jsxs)(l.A,{value:"macos",children:[(0,a.jsx)(t.h3,{id:"steps-for-macos",children:"Steps for macOS"}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Download and install XAMPP from ",(0,a.jsx)(t.a,{href:"https://www.apachefriends.org/",children:"Apache Friends"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Open the XAMPP manager from your Applications folder."}),"\n",(0,a.jsxs)(t.li,{children:["Modify the ",(0,a.jsx)(t.code,{children:"httpd.conf"})," file located at ",(0,a.jsx)(t.code,{children:"/Applications/XAMPP/xamppfiles/etc/httpd.conf"}),":","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'DocumentRoot "/path/to/your/project"\n<Directory "/path/to/your/project">\n</Directory>\n'})}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"Save the updated configuration."}),"\n",(0,a.jsx)(t.li,{children:"Restart the Apache server through the XAMPP Control Panel."}),"\n"]})]})]}),"\n",(0,a.jsxs)(t.ol,{start:"6",children:["\n",(0,a.jsxs)(t.li,{children:["Add the following settings to your custom live preview:\n",(0,a.jsx)(t.img,{alt:"Custom Live Preview Settings",src:r(8695).A+"",width:"1368",height:"932"}),"\nYour live preview should now automatically update to reflect changes whenever PHP files are edited."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"php-live-preview-in-action",children:"PHP Live Preview in Action"}),"\n",(0,a.jsx)(o.A,{src:"https://docs-images.phcode.dev/videos/phplp/phplivepreview.mp4"})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>P});var n=r(96540),a=r(34164),i=r(23104),o=r(56347),s=r(205),l=r(57485),c=r(31682),u=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,d]=f({queryString:r,groupId:a}),[v,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),x=(()=>{const e=c??v;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=r(74848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=s[r].value;a!==n&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:i}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function g(e){const t=v(e);return(0,w.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,w.jsx)(b,{...t,...e}),(0,w.jsx)(j,{...t,...e})]})}function P(e){const t=(0,m.A)();return(0,w.jsx)(g,{...e,children:d(e.children)},String(t))}},56399:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(96540),a=r(74848);const i=e=>{let{src:t,winLinuxTitle:r,macTitle:i}=e;const[o,s]=(0,n.useState)("");(0,n.useEffect)((()=>{navigator.platform.toLowerCase().includes("mac")?s(i):s(r)}),[r,i]);return(0,a.jsxs)("div",{style:{maxHeight:"68vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,a.jsxs)("video",{style:{height:"90%",width:"100%"},controls:!0,autoPlay:!0,muted:!0,loop:!0,children:[(0,a.jsx)("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,a.jsx)("div",{style:{width:"100%",textAlign:"center",fontSize:"1em",marginTop:"10px"},children:o})]})}},8695:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/phpCustomServer-23ae891bea40924e86bafd7273ac64b3.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(96540);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);