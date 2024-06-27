"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9815],{6299:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>L,contentTitle:()=>T,default:()=>A,frontMatter:()=>C,metadata:()=>V,toc:()=>E});var a=t(4848),s=t(8453),l=t(6540),i=t(4164),r=t(3104),o=t(6347),u=t(205),c=t(7485),d=t(1682),h=t(679);function p(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[i,r]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[o,c]=g({queryString:t,groupId:a}),[d,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,h.Dv)(t);return[a,(0,l.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=o??d;return x({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{b&&r(b)}),[b]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),p(e)}),[c,p,s]),tabValues:s}}var f=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),a=o[t].value;a!==s&&(c(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:h,onClick:d,...l,className:(0,i.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=b(e);return(0,a.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,a.jsx)(v,{...n,...e}),(0,a.jsx)(y,{...n,...e})]})}function I(e){const n=(0,f.A)();return(0,a.jsx)(w,{...e,children:p(e.children)},String(n))}const k={tabItem:"tabItem_Ymn6"};function N(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(k.tabItem,s),hidden:t,children:n})}const C={title:"Install/Uninstall in Linux"},T=void 0,V={id:"Linux",title:"Install/Uninstall in Linux",description:"Overview",source:"@site/docs/02-Linux.md",sourceDirName:".",slug:"/Linux",permalink:"/docs/Linux",draft:!1,unlisted:!1,editUrl:"https://github.com/phcode-dev/docs/blob/main/docs/02-Linux.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install/Uninstall in Linux"},sidebar:"tutorialSidebar",previous:{title:"Phoenix Code Setup Guide",permalink:"/docs/intro"},next:{title:"HTML Validator",permalink:"/docs/Features/Finding Problems in Files/html-lint"}},L={},E=[{value:"Overview",id:"overview",level:2},{value:"Automatic Installation",id:"automatic-installation",level:2},{value:"Manual Installation",id:"manual-installation",level:2},{value:"Desktop Environment Compatibility",id:"desktop-environment-compatibility",level:2},{value:"FAQ",id:"faq",level:2}];function S(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"This guide details how to install Phoenix Code on Linux systems. Our installer works with major\nLinux distributions(Ubuntu, Debian, Fedora, and Arch-based systems)."}),"\n",(0,a.jsx)(n.h2,{id:"automatic-installation",children:"Automatic Installation"}),"\n",(0,a.jsx)(n.p,{children:"To install Phoenix Code automatically, execute the following command in your terminal:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget -qO- https://updates.phcode.io/linux/installer.sh | bash\n"})}),"\n",(0,a.jsx)(n.p,{children:"This script automatically installs Phoenix Code and all required dependencies.\nIt will also setup app drawer shortcuts and file associations."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Uninstall"})}),"\n",(0,a.jsx)(n.p,{children:"Execute the following command in your terminal."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget -qO- https://updates.phcode.io/linux/installer.sh | bash -s -- --uninstall\n"})}),"\n",(0,a.jsx)(n.h2,{id:"manual-installation",children:"Manual Installation"}),"\n",(0,a.jsx)(n.p,{children:"If automatic installation fails or manual installation is preferred, follow these steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Check GLIBC Version"}),":\nDetermine your system's GLIBC version using:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ldd --version | awk '/ldd/{print $NF}'\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Download the Package"}),":\nVisit the ",(0,a.jsx)(n.a,{href:"https://github.com/phcode-dev/phoenix-desktop/releases",children:"Phoenix Code Releases Page"})," and download a version compatible with your GLIBC."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Extract the Package"}),":\nUnpack the downloaded file with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"tar -xvf phoenix_code_version.tar.gz\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Read Installation Instructions"}),":\nRead the detailed instructions contained within the package:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat extracted_folder/ReadMe.txt\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Execute Installation Steps"}),":\nFollow the instructions in ",(0,a.jsx)(n.code,{children:"readme.txt"})," to complete the installation."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"desktop-environment-compatibility",children:"Desktop Environment Compatibility"}),"\n",(0,a.jsxs)(n.p,{children:["Phoenix Code is tested with both ",(0,a.jsx)(n.code,{children:"Gnome"})," and ",(0,a.jsx)(n.code,{children:"KDE"})," desktop environments.\nOther desktop environments may be compatible with ",(0,a.jsx)(n.a,{href:"#manual-installation",children:"Manual Installation"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Q: How can I verify if my distribution is supported?"})}),"\n",(0,a.jsxs)(n.p,{children:["Run the ",(0,a.jsx)(n.a,{href:"#automatic-installation",children:"Automatic Installation"}),". If it completes successfully,\nyour distribution is supported."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Q: How do I upgrade Phoenix Code?"})}),"\n",(0,a.jsxs)(n.p,{children:["For automatic installations, you will receive an update notification in the app itself.\nFor ",(0,a.jsx)(n.a,{href:"#manual-installation",children:"Manual Installations"}),", follow the section again."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Q: How do I uninstall Phoenix Code?"})}),"\n",(0,a.jsx)(n.p,{children:"For automatic installations, use the command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget -qO- https://updates.phcode.io/linux/installer.sh | bash -s -- --uninstall\n"})}),"\n",(0,a.jsx)(n.p,{children:"For manual installations, delete the folder where you placed Phoenix Code App and remove any related files."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Q: Phoenix is not starting up after install. What can I do?"})}),"\n",(0,a.jsx)(n.p,{children:"Restart your system. Confirm that the required dependencies listed below in your Linux distribution are installed."}),"\n",(0,a.jsxs)(I,{defaultValue:"ubuntu",values:[{label:"Ubuntu/Debian",value:"ubuntu"},{label:"Fedora/Red Hat",value:"fedora"},{label:"Arch Linux",value:"arch"}],children:[(0,a.jsxs)(N,{value:"ubuntu",children:[(0,a.jsx)(n.p,{children:"Update your package list:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n"})}),(0,a.jsx)(n.p,{children:"Install WebKitGTK and GTK:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install libgtk-3-0 libwebkit2gtk-4.0-37\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Note: In Ubuntu 22+ versions, WebKitGTK may be pre-installed."})}),(0,a.jsx)(n.p,{children:"Install optional GStreamer plugins for media playback:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-tools gstreamer1.0-libav\n"})})]}),(0,a.jsxs)(N,{value:"fedora",children:[(0,a.jsx)(n.p,{children:"Update your package list:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo dnf update\n"})}),(0,a.jsx)(n.p,{children:"Install WebKitGTK and GTK:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo dnf install webkit2gtk3 gtk3\n"})}),(0,a.jsx)(n.p,{children:"Install optional GStreamer plugins for media playback:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo dnf install gstreamer1-plugins-base gstreamer1-plugins-good gstreamer1-plugins-bad-free gstreamer1-plugins-bad-freeworld gstreamer1-plugins-ugly gstreamer1-libav\n"})})]}),(0,a.jsxs)(N,{value:"arch",children:[(0,a.jsx)(n.p,{children:"Ensure your system is up to date:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo pacman -Syu\n"})}),(0,a.jsx)(n.p,{children:"Install WebKitGTK and GTK:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S webkit2gtk gtk3\n"})}),(0,a.jsx)(n.p,{children:"Install optional GStreamer plugins for media playback:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly gst-libav\n"})})]})]})]})}function A(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(S,{...e})}):S(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(6540);const s={},l=a.createContext(s);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);