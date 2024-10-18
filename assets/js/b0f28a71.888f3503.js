"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6508],{44580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var d=t(74848),o=t(28453);const r={},s=void 0,i={id:"API-Reference/widgets/DropdownButton",title:"DropdownButton",description:"Import :",source:"@site/api/API-Reference/widgets/DropdownButton.md",sourceDirName:"API-Reference/widgets",slug:"/API-Reference/widgets/DropdownButton",permalink:"/api/API-Reference/widgets/DropdownButton",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WorkspaceManager",permalink:"/api/API-Reference/view/WorkspaceManager"},next:{title:"ModalBar",permalink:"/api/API-Reference/widgets/ModalBar"}},l={},c=[{value:"Import :",id:"import-",level:3},{value:"DropdownButton(label, items, [itemRenderer], [options])",id:"dropdownbuttonlabel-items-itemrenderer-options",level:2},{value:"dropdownButton.items : <code>Array.&lt;*&gt;</code>",id:"dropdownbuttonitems--array",level:3},{value:"dropdownButton.itemsSearchFilterText : <code>null</code>",id:"dropdownbuttonitemssearchfiltertext--null",level:3},{value:"dropdownButton.$button : <code>jQueryObject</code>",id:"dropdownbuttonbutton--jqueryobject",level:3},{value:"dropdownButton.$dropdown : <code>jQueryObject</code>",id:"dropdownbuttondropdown--jqueryobject",level:3},{value:"dropdownButton.dropdownExtraClasses : <code>string</code>",id:"dropdownbuttondropdownextraclasses--string",level:3},{value:"dropdownButton.setButtonLabel(label)",id:"dropdownbuttonsetbuttonlabellabel",level:3},{value:"dropdownButton.isOpen()",id:"dropdownbuttonisopen",level:3},{value:"dropdownButton.itemRenderer(item, index) \u21d2 <code>string</code> | <code>Object</code>",id:"dropdownbuttonitemrendereritem-index--string--object",level:3},{value:"dropdownButton._renderList($parent) \u21d2 <code>jQueryObject</code>",id:"dropdownbutton_renderlistparent--jqueryobject",level:3},{value:"dropdownButton.refresh()",id:"dropdownbuttonrefresh",level:3},{value:"dropdownButton.setChecked(index, checked)",id:"dropdownbuttonsetcheckedindex-checked",level:3},{value:"dropdownButton.showDropdown()",id:"dropdownbuttonshowdropdown",level:3},{value:"dropdownButton.filterDropdown(searchString)",id:"dropdownbuttonfilterdropdownsearchstring",level:3},{value:"dropdownButton.closeDropdown()",id:"dropdownbuttonclosedropdown",level:3},{value:"dropdownButton.toggleDropdown()",id:"dropdownbuttontoggledropdown",level:3}];function h(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:'const DropdownButton = brackets.getModule("widgets/DropdownButton")\n'})}),"\n",(0,d.jsx)("a",{name:"DropdownButton"}),"\n",(0,d.jsx)(n.h2,{id:"dropdownbuttonlabel-items-itemrenderer-options",children:"DropdownButton(label, items, [itemRenderer], [options])"}),"\n",(0,d.jsxs)(n.p,{children:["Creates a single dropdown-button instance. The DOM node is created but not attached to\rthe document anywhere - clients should append ",(0,d.jsx)(n.code,{children:"this.$button"})," to the appropriate location."]}),"\n",(0,d.jsx)(n.p,{children:"DropdownButton dispatches the following events:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:'"select" - triggered when an option in the dropdown is clicked. Passed item object and index.'}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"label"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"The label to display on the button."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"items"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"Array.<*>"})}),(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["Items in the dropdown list. Items can have any type/value.           An item with the value ",(0,d.jsx)(n.code,{children:'"---"'})," will be treated as a divider, which is not clickable,           and ",(0,d.jsx)(n.code,{children:"itemRenderer()"})," will not be called for it."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"[itemRenderer]"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"function"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Optional function to convert a single item to HTML. If not provided, items are assumed           to be plain text strings. The function receives the item and its index."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"[options]"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"Object"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Additional options for the dropdown."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"[options.enableFilter]"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"boolean"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"false"})}),(0,d.jsxs)(n.td,{children:["Set to ",(0,d.jsx)(n.code,{children:"true"})," to enable filtering by typing."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"[options.cssClasses]"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"A space-separated list of CSS classes to apply to the button."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"[options.customFilter]"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"function"})}),(0,d.jsx)(n.td,{}),(0,d.jsxs)(n.td,{children:["Optional. When ",(0,d.jsx)(n.code,{children:"enableFilter"}),"       is enabled, this function is used as a custom filtering callback. It receives the user's search text,       the text of the element being filtered, and the element's index. Return ",(0,d.jsx)(n.code,{children:"true"})," to display the list item,       or ",(0,d.jsx)(n.code,{children:"false"})," to hide it."]})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#DropdownButton",children:"DropdownButton(label, items, [itemRenderer], [options])"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#DropdownButton+items",children:".items"})," : ",(0,d.jsx)("code",{children:"Array.<*>"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#DropdownButton+itemsSearchFilterText",children:".itemsSearchFilterText"})," : ",(0,d.jsx)("code",{children:"null"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#DropdownButton+$button",children:".$button"})," : ",(0,d.jsx)("code",{children:"jQueryObject"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#DropdownButton+$dropdown",children:".$dropdown"})," : ",(0,d.jsx)("code",{children:"jQueryObject"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#DropdownButton+dropdownExtraClasses",children:".dropdownExtraClasses"})," : ",(0,d.jsx)("code",{children:"string"})]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#DropdownButton+setButtonLabel",children:".setButtonLabel(label)"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#DropdownButton+isOpen",children:".isOpen()"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#DropdownButton+itemRenderer",children:".itemRenderer(item, index)"})," \u21d2 ",(0,d.jsx)("code",{children:"string"})," | ",(0,d.jsx)("code",{children:"Object"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"#DropdownButton+_renderList",children:"._renderList($parent)"})," \u21d2 ",(0,d.jsx)("code",{children:"jQueryObject"})]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#DropdownButton+refresh",children:".refresh()"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#DropdownButton+setChecked",children:".setChecked(index, checked)"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#DropdownButton+showDropdown",children:".showDropdown()"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#DropdownButton+filterDropdown",children:".filterDropdown(searchString)"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#DropdownButton+closeDropdown",children:".closeDropdown()"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"#DropdownButton+toggleDropdown",children:".toggleDropdown()"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+items"}),"\n",(0,d.jsxs)(n.h3,{id:"dropdownbuttonitems--array",children:["dropdownButton.items : ",(0,d.jsx)("code",{children:"Array.<*>"})]}),"\n",(0,d.jsx)(n.p,{children:"Items in dropdown list - may be changed any time dropdown isn't open"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance property of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+itemsSearchFilterText"}),"\n",(0,d.jsxs)(n.h3,{id:"dropdownbuttonitemssearchfiltertext--null",children:["dropdownButton.itemsSearchFilterText : ",(0,d.jsx)("code",{children:"null"})]}),"\n",(0,d.jsx)(n.p,{children:"This is filter text corresponding to each items. it will be used to filter the items based on\rthe keyboard key presses the user does to enter search filter in popup."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance property of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+$button"}),"\n",(0,d.jsxs)(n.h3,{id:"dropdownbuttonbutton--jqueryobject",children:["dropdownButton.$button : ",(0,d.jsx)("code",{children:"jQueryObject"})]}),"\n",(0,d.jsx)(n.p,{children:"The clickable button. Available as soon as the DropdownButton is constructed."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance property of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+$dropdown"}),"\n",(0,d.jsxs)(n.h3,{id:"dropdownbuttondropdown--jqueryobject",children:["dropdownButton.$dropdown : ",(0,d.jsx)("code",{children:"jQueryObject"})]}),"\n",(0,d.jsx)(n.p,{children:"The dropdown element. Only non-null while open."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance property of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+dropdownExtraClasses"}),"\n",(0,d.jsxs)(n.h3,{id:"dropdownbuttondropdownextraclasses--string",children:["dropdownButton.dropdownExtraClasses : ",(0,d.jsx)("code",{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:"Extra CSS class(es) to apply to $dropdown"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance property of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+setButtonLabel"}),"\n",(0,d.jsx)(n.h3,{id:"dropdownbuttonsetbuttonlabellabel",children:"dropdownButton.setButtonLabel(label)"}),"\n",(0,d.jsx)(n.p,{children:"Update the button label."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param"}),(0,d.jsx)(n.th,{children:"Type"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"label"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"string"})})]})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+isOpen"}),"\n",(0,d.jsx)(n.h3,{id:"dropdownbuttonisopen",children:"dropdownButton.isOpen()"}),"\n",(0,d.jsx)(n.p,{children:"returns true if the dropdown is open"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+itemRenderer"}),"\n",(0,d.jsxs)(n.h3,{id:"dropdownbuttonitemrendereritem-index--string--object",children:["dropdownButton.itemRenderer(item, index) \u21d2 ",(0,d.jsx)("code",{children:"string"})," | ",(0,d.jsx)("code",{children:"Object"})]}),"\n",(0,d.jsx)(n.p,{children:"Called for each item when rendering the dropdown."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Returns"}),": ",(0,d.jsx)("code",{children:"string"})," | ",(0,d.jsx)("code",{children:"Object"})," - Formatted & escaped HTML, either as a simple string\ror as the 'html' field in an object that also conveys enabled state. Disabled items inherit gray\rtext color and cannot be selected."]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"item"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"*"})}),(0,d.jsx)(n.td,{children:"from items array"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"index"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"number"})}),(0,d.jsx)(n.td,{children:"in items array"})]})]})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+_renderList"}),"\n",(0,d.jsxs)(n.h3,{id:"dropdownbutton_renderlistparent--jqueryobject",children:["dropdownButton._renderList($parent) \u21d2 ",(0,d.jsx)("code",{children:"jQueryObject"})]}),"\n",(0,d.jsx)(n.p,{children:"Converts the list of item objects into HTML list items in format required by DropdownEventHandler"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Returns"}),": ",(0,d.jsx)("code",{children:"jQueryObject"})," - The dropdown element with the rendered list items appended."]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"$parent"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"jQueryObject"})}),(0,d.jsx)(n.td,{children:"The dropdown element"})]})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+refresh"}),"\n",(0,d.jsx)(n.h3,{id:"dropdownbuttonrefresh",children:"dropdownButton.refresh()"}),"\n",(0,d.jsx)(n.p,{children:"Refresh the dropdown list by removing and re-creating all list items.\rCall this after deleting/adding any item in the dropdown list."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+setChecked"}),"\n",(0,d.jsx)(n.h3,{id:"dropdownbuttonsetcheckedindex-checked",children:"dropdownButton.setChecked(index, checked)"}),"\n",(0,d.jsx)(n.p,{children:"Check/Uncheck the list item of the given index."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"index"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"number"})}),(0,d.jsx)(n.td,{children:"The index of the list item to be checked or unchecked"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"checked"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"boolean"})}),(0,d.jsx)(n.td,{children:"True if the list item is to be checked, false to get check    mark removed."})]})]})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+showDropdown"}),"\n",(0,d.jsx)(n.h3,{id:"dropdownbuttonshowdropdown",children:"dropdownButton.showDropdown()"}),"\n",(0,d.jsx)(n.p,{children:"Pops open the dropdown if currently closed. Does nothing if items.length == 0"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+filterDropdown"}),"\n",(0,d.jsx)(n.h3,{id:"dropdownbuttonfilterdropdownsearchstring",children:"dropdownButton.filterDropdown(searchString)"}),"\n",(0,d.jsx)(n.p,{children:"hides all elements in popup that doesn't match the given search string, also shows the search bar in popup"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{children:"Param"})})}),(0,d.jsx)(n.tbody,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.td,{children:"searchString"})})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+closeDropdown"}),"\n",(0,d.jsx)(n.h3,{id:"dropdownbuttonclosedropdown",children:"dropdownButton.closeDropdown()"}),"\n",(0,d.jsx)(n.p,{children:"Closes the dropdown if currently open"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]}),"\n",(0,d.jsx)("a",{name:"DropdownButton+toggleDropdown"}),"\n",(0,d.jsx)(n.h3,{id:"dropdownbuttontoggledropdown",children:"dropdownButton.toggleDropdown()"}),"\n",(0,d.jsx)(n.p,{children:"Opens the dropdown if closed; closes it if open"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Kind"}),": instance method of ",(0,d.jsx)(n.a,{href:"#DropdownButton",children:(0,d.jsx)("code",{children:"DropdownButton"})})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var d=t(96540);const o={},r=d.createContext(o);function s(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);