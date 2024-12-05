"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[177],{94146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var i=n(49520),o=n(74848),s=n(28453);const a={slug:"release-3.9",title:"HTML Workflows and stability Release (September-2024, V-3.9) is now Live",authors:["arun","charly","kiran","devvaannsh","jozsefk9","acemi1","phoenixBot"],tags:["Live Preview","Live Code Hints","Windows","Linux","Mac","Release"]},r=void 0,l={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0,void 0]},d=[{value:"Now Available on ChromeOS",id:"now-available-on-chromeos",level:2},{value:"Auto rename start and end of HTML/XML/SVG tags",id:"auto-rename-start-and-end-of-htmlxmlsvg-tags",level:2},{value:"Auto Tab and Spacing detection",id:"auto-tab-and-spacing-detection",level:2},{value:"UX Improvements",id:"ux-improvements",level:2},{value:"Stability Improvements",id:"stability-improvements",level:2},{value:"Update on Release Schedule",id:"update-on-release-schedule",level:2},{value:"A Request from the Phoenix Team:",id:"a-request-from-the-phoenix-team",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["September release(3.9) of Phoenix Code is now available for download at\n",(0,o.jsx)(t.a,{href:"https://phcode.io",children:"phcode.io"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["This month's core theme is ",(0,o.jsx)(t.code,{children:"App robustness"})," and ",(0,o.jsx)(t.code,{children:"stability"})," improvements.\nWe have also added several ",(0,o.jsx)(t.code,{children:"HTML and Text Editing"})," workflow improvements."]}),"\n",(0,o.jsx)(t.h2,{id:"now-available-on-chromeos",children:"Now Available on ChromeOS"}),"\n",(0,o.jsx)(t.p,{children:"All new native ChromeOS app is now available on the Google Play Store.\nThe ChromeOS app is a highly requested feature and is specially made for education and student use."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=prod.phcode.twa",children:(0,o.jsx)(t.img,{src:"https://github.com/user-attachments/assets/0a7f20ce-653c-43a8-ac3e-3875ea74df5b",alt:"google play icon (1)"})})}),"\n",(0,o.jsx)(t.h2,{id:"auto-rename-start-and-end-of-htmlxmlsvg-tags",children:"Auto rename start and end of HTML/XML/SVG tags"}),"\n",(0,o.jsxs)(t.p,{children:["Automatically rename paired HTML/XML/SVG tags as you type at the start or end of the tag. ",(0,o.jsx)(t.a,{href:"https://docs.phcode.dev/docs/editing-text/#auto-rename-tag",children:"Read more..."})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/user-attachments/assets/ad82db8c-df1c-4c83-a5db-145caab539ec",alt:"tag sync"})}),"\n",(0,o.jsx)(t.h2,{id:"auto-tab-and-spacing-detection",children:"Auto Tab and Spacing detection"}),"\n",(0,o.jsxs)(t.p,{children:["Phoenix Code can now automatically detect and apply the indentation style (tabs or spaces) based on the existing code in the file.\n",(0,o.jsx)(t.a,{href:"https://docs.phcode.dev/docs/editing-text/#auto-space-detection",children:"Read more..."})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/user-attachments/assets/0adc47c5-a561-4002-bffb-d7bcde999b9d",alt:"image"})}),"\n",(0,o.jsx)(t.h2,{id:"ux-improvements",children:"UX Improvements"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Reopen closed files"})," option added to ",(0,o.jsx)(t.code,{children:"File"})," menu. Shortcut: ",(0,o.jsx)(t.code,{children:"Ctrl-Shift-T"}),", or (",(0,o.jsx)(t.code,{children:"Cmd-Shift-T"})," on Mac)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Go to Next Problem"})," and ",(0,o.jsx)(t.code,{children:"Go to Previous Problem"})," option added to ",(0,o.jsxs)(t.a,{href:"https://github.com/phcode-dev/phoenix/pull/1732",children:[(0,o.jsx)(t.code,{children:"Navigate"})," menu."]})]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/orgs/phcode-dev/discussions/1809",children:"Tab key press to insert code hints"})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"window.alert"}),", ",(0,o.jsx)(t.code,{children:"window.confirm"})," and ",(0,o.jsx)(t.code,{children:"window.prompt"})," APIs ",(0,o.jsx)(t.a,{href:"https://github.com/phcode-dev/phoenix/pull/1814",children:"will work in live preview"})]}),"\n",(0,o.jsxs)(t.li,{children:["Clicking on live preview no longer automatically switches from your ",(0,o.jsx)(t.a,{href:"https://github.com/phcode-dev/phoenix/pull/1800",children:"current unrelated file to the main HTML file."})]}),"\n",(0,o.jsxs)(t.li,{children:["Live preview usability and navigation improvements - (",(0,o.jsx)(t.a,{href:"https://github.com/phcode-dev/phoenix/pull/1741",children:"1"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/phcode-dev/phoenix/pull/1760",children:"2"}),")"]}),"\n",(0,o.jsxs)(t.li,{children:["Increase/Decrease font size will ",(0,o.jsx)(t.a,{href:"https://github.com/phcode-dev/phoenix/pull/1799",children:"change the Editor Font size Only"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Fixed issue where code folding markers disappear when hovering over gutter in dark theme."}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:".cjs"})," and ",(0,o.jsx)(t.code,{children:".mjs"})," files support as javascript files."]}),"\n",(0,o.jsxs)(t.li,{children:["Support for ",(0,o.jsx)(t.code,{children:"shtml"})," custom server live preview."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"stability-improvements",children:"Stability Improvements"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/phcode-dev/phoenix/issues/1791",children:"Fixes node crashes after wakeup from sleep in Windows/Mac."})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/phcode-dev/phoenix/issues/1821",children:"Kaspersky AV trojan horse false positive mitigation."})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/phcode-dev/phoenix/pull/1818",children:"Corrupt preferences auto reset."})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/phcode-dev/phoenix/pull/1812",children:"Boot time crash recovery."})}),"\n",(0,o.jsxs)(t.li,{children:["Phoenix Code won't start in ",(0,o.jsx)(t.a,{href:"https://github.com/phcode-dev/phoenix/pull/1740",children:"some Fedora/other Linux distros."})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"update-on-release-schedule",children:"Update on Release Schedule"}),"\n",(0,o.jsx)(t.p,{children:"In the past, we've released Phoenix Code updates on a monthly basis. However, last month we encountered an issue with our release that led to stability problems for our users."}),"\n",(0,o.jsx)(t.p,{children:"To address this, we've taken a step back to reevaluate our release process and make improvements to ensure greater robustness and reliability going forward."}),"\n",(0,o.jsx)(t.p,{children:"As a result, we've decided to slow down the desktop release schedule to once every two months. This will allow us to thoroughly test each update and deliver a more stable experience."}),"\n",(0,o.jsx)(t.p,{children:"We apologize for any inconvenience caused by the previous release and appreciate your patience and understanding as we work to improve the quality of Phoenix Code."}),"\n",(0,o.jsx)(t.p,{children:"We look forward to bringing you new features and improvements in a more controlled and reliable manner."}),"\n",(0,o.jsx)(t.h2,{id:"a-request-from-the-phoenix-team",children:"A Request from the Phoenix Team:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Share your feedback:"})," ",(0,o.jsx)(t.a,{href:"https://github.com/orgs/phcode-dev/discussions",children:"https://github.com/orgs/phcode-dev/discussions"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Spread the word"})," about Phoenix to friends and colleagues."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.a,{href:"https://github.com/sponsors/phcode-dev",children:[(0,o.jsx)(t.strong,{children:"Consider supporting us"})," on GitHub Sponsors"]}),".\nEvery contribution helps us to keep improving Phoenix Code."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"With gratitude,"}),"\n",(0,o.jsx)(t.p,{children:"The Phoenix Team"})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}},49520:e=>{e.exports=JSON.parse('{"permalink":"/blog/release-3.9","editUrl":"https://github.com/phcode-dev/docs/blob/main/blog/2024-09-02-Release-3.9/index.md","source":"@site/blog/2024-09-02-Release-3.9/index.md","title":"HTML Workflows and stability Release (September-2024, V-3.9) is now Live","description":"September release(3.9) of Phoenix Code is now available for download at","date":"2024-09-02T00:00:00.000Z","tags":[{"inline":true,"label":"Live Preview","permalink":"/blog/tags/live-preview"},{"inline":true,"label":"Live Code Hints","permalink":"/blog/tags/live-code-hints"},{"inline":true,"label":"Windows","permalink":"/blog/tags/windows"},{"inline":true,"label":"Linux","permalink":"/blog/tags/linux"},{"inline":true,"label":"Mac","permalink":"/blog/tags/mac"},{"inline":true,"label":"Release","permalink":"/blog/tags/release"}],"readingTime":2.37,"hasTruncateMarker":false,"authors":[{"name":"Arun Bose","title":"Maintainer of Phoenix and Brackets code editors","url":"https://github.com/abose","imageURL":"https://github.com/abose.png","key":"arun","page":null},{"name":"Charly P Abraham","title":"Maintainer of Phoenix and Brackets code editors","url":"https://github.com/charlypa","imageURL":"https://github.com/charlypa.png","key":"charly","page":null},{"name":"Kiran Bose","title":"Community Contributor","url":"https://github.com/kiranbose","imageURL":"https://github.com/kiranbose.png","key":"kiran","page":null},{"name":"Devansh Agarwal","title":"Phoenix Code Developer","url":"https://github.com/devvaannsh","imageURL":"https://github.com/devvaannsh.png","key":"devvaannsh","page":null},{"name":"Jozsef","title":"Community Contributor","url":"https://github.com/jozsefk9","imageURL":"https://github.com/jozsefk9.png","key":"jozsefk9","page":null},{"name":"acemi1","title":"Community Contributor","url":"https://github.com/acemi1","imageURL":"https://github.com/acemi1.png","key":"acemi1","page":null},{"name":"Phoenix Code Bot","title":"Our little elf who keeps the whole place together","url":"https://github.com/phoenixide","imageURL":"https://github.com/phoenixide.png","key":"phoenixBot","page":null}],"frontMatter":{"slug":"release-3.9","title":"HTML Workflows and stability Release (September-2024, V-3.9) is now Live","authors":["arun","charly","kiran","devvaannsh","jozsefk9","acemi1","phoenixBot"],"tags":["Live Preview","Live Code Hints","Windows","Linux","Mac","Release"]},"unlisted":false,"prevItem":{"title":"Editor Experience Release (November-2024, V-3.10) is now Live","permalink":"/blog/release-3.10"},"nextItem":{"title":"Critical Update + HTML Helpers Release (June-2024, V-3.8) is now Live","permalink":"/blog/release-3.8"}}')}}]);