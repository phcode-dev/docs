"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3680],{9033:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=n(4848),l=n(8453);const t={sidebar_position:2},o="Find In Files",c={id:"find-in-files",title:"Find In Files",description:"The Find in Files feature in Phoenix Code is a powerful tool to quickly search for specific text across multiple files within a project. This feature is useful for developers working on large codebases to find references, variable names, or specific lines of code.",source:"@site/docs/find-in-files.md",sourceDirName:".",slug:"/find-in-files",permalink:"/docs/find-in-files",draft:!1,unlisted:!1,editUrl:"https://github.com/phcode-dev/docs/blob/main/docs/find-in-files.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Phoenix Code Setup Guide",permalink:"/docs/intro"}},r={},d=[{value:"Searching Within a Folder",id:"searching-within-a-folder",level:2},{value:"Using File Filters",id:"using-file-filters",level:2},{value:"Creating an Exclusion/Inclusion Filter",id:"creating-an-exclusioninclusion-filter",level:2},{value:"For Exclusion",id:"for-exclusion",level:3},{value:"For Inclusion",id:"for-inclusion",level:3},{value:"The filter pattern",id:"the-filter-pattern",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"find-in-files",children:"Find In Files"}),"\n",(0,s.jsx)(i.p,{children:"The Find in Files feature in Phoenix Code is a powerful tool to quickly search for specific text across multiple files within a project. This feature is useful for developers working on large codebases to find references, variable names, or specific lines of code."}),"\n",(0,s.jsxs)(i.p,{children:["To search across your project files, use ",(0,s.jsx)(i.code,{children:"Ctrl-Shift-F"})," on Windows/Linux or ",(0,s.jsx)(i.code,{children:"Cmd-Shift-F"})," on Mac, or select ",(0,s.jsx)(i.code,{children:"Find > Find in Files"})," from the menu. This feature searches for your term throughout the project's files and displays each occurrence with its file name, line number, and a snippet of the code for context."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Alt text",src:n(6920).A+"",width:"867",height:"558"})}),"\n",(0,s.jsx)(i.h2,{id:"searching-within-a-folder",children:"Searching Within a Folder"}),"\n",(0,s.jsx)(i.p,{children:"To search within a specific folder in Phoenix:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Right-click on the folder in the Files panel where you want to perform the search."}),"\n",(0,s.jsx)(i.li,{children:'From the context menu that appears, select "Find in...".'}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Alt text",src:n(1979).A+"",width:"387",height:"387"})}),"\n",(0,s.jsxs)(i.ol,{start:"3",children:["\n",(0,s.jsxs)(i.li,{children:["The find bar will now appear with search restricted to that folder (See ",(0,s.jsx)(i.code,{children:"in y/"})," in the below image)."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Alt text",src:n(422).A+"",width:"268",height:"90"})}),"\n",(0,s.jsx)(i.h2,{id:"using-file-filters",children:"Using File Filters"}),"\n",(0,s.jsx)(i.p,{children:"By default, Find in Files searches all files in your project folder. You can exclude or include files, file types, whole folders, or other patterns:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:'Click the "No Files Excluded" dropdown from the search bar.'}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Alt text",src:n(4330).A+"",width:"461",height:"122"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:'Choose "New Exclusion Set"'}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Enter one or more patterns to exclude/include in the dialog."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"To edit an exclusion set later, open the same dropdown and hover over the exclusion set in the list to reveal a pencil icon - click this to edit it."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Alt text",src:n(2480).A+"",width:"340",height:"215"})}),"\n",(0,s.jsx)(i.h2,{id:"creating-an-exclusioninclusion-filter",children:"Creating an Exclusion/Inclusion Filter"}),"\n",(0,s.jsx)(i.p,{children:"The Edit Exclusion Filter dialog in Phoenix allows you to specify which files and folders should be excluded or included during project searches."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Alt text",src:n(343).A+"",width:"619",height:"468"})}),"\n",(0,s.jsx)(i.h3,{id:"for-exclusion",children:"For Exclusion"}),"\n",(0,s.jsxs)(i.p,{children:['When the toggle is set to "Excluded", the filter will ignore files and folders that match the patterns you enter. For instance, typing ',(0,s.jsx)(i.code,{children:"*.json"}),' in the text area will exclude all JSON files from your search results. The dialog will show a status message like "Allows 67 of 72 files in project," meaning that 5 files matching the pattern will not be included in the search.']}),"\n",(0,s.jsx)(i.h3,{id:"for-inclusion",children:"For Inclusion"}),"\n",(0,s.jsxs)(i.p,{children:['When the toggle is switched to "Included", the filter will search only within files and folders that match the entered patterns. Entering ',(0,s.jsx)(i.code,{children:"*.json"}),' will include only JSON files in your search results. The status message, such as "Allows 5 of 72 files in project," indicates that only 5 files fitting the pattern will be searchable.']}),"\n",(0,s.jsx)(i.h2,{id:"the-filter-pattern",children:"The filter pattern"}),"\n",(0,s.jsx)(i.p,{children:"This section describes the format of the exclusion/inclusion glob pattern."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Each pattern should be entered in its own line. You can specify multiple patterns in its own line Eg.","\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-txt",children:"*.js\n*.json\n"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["To match all JavaScript files in any directory, use ",(0,s.jsx)(i.code,{children:"*.js"}),". This matches files like ",(0,s.jsx)(i.code,{children:"a/b/x.js"})," and ",(0,s.jsx)(i.code,{children:"xyz.js"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["To match JavaScript files only in the project root, use ",(0,s.jsx)(i.code,{children:"./*.js"}),". This matches ",(0,s.jsx)(i.code,{children:"x.js"})," in the root but not ",(0,s.jsx)(i.code,{children:"y/x.js"})," in a subdirectory."]}),"\n",(0,s.jsxs)(i.li,{children:["To match css files only in a folder ",(0,s.jsx)(i.code,{children:"search/folder"}),", use ",(0,s.jsx)(i.code,{children:"search/folder/*.css"}),". This matches ",(0,s.jsx)(i.code,{children:"search/folder/x.css"})," but not ",(0,s.jsx)(i.code,{children:"y/x.css"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"?.js"})," will match only ",(0,s.jsx)(i.code,{children:"a/b/x.js"})," and not ",(0,s.jsx)(i.code,{children:"xyx.js"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"**/some_folder/**"})," will match ",(0,s.jsx)(i.code,{children:"some_folder"})," anywhere. More complex glob patterns can be provided."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"some/file.txt"})," which is not a glob filter path (doesn't contain *,!,[] or ?) will match any path that has it as substring. Eg. ",(0,s.jsx)(i.code,{children:"other/some/file.txt"})," or ",(0,s.jsx)(i.code,{children:"other/some/file.txt.things"})," , etc..."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"[]"})," to declare a range of characters to match (",(0,s.jsx)(i.code,{children:"example.[0-9]"})," to match on ",(0,s.jsx)(i.code,{children:"example.0"}),", ",(0,s.jsx)(i.code,{children:"example.1"}),", \u2026)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"[!...]"})," to negate a range of characters to match (",(0,s.jsx)(i.code,{children:"example.[!0-9]"})," to match on ",(0,s.jsx)(i.code,{children:"example.a"}),", ",(0,s.jsx)(i.code,{children:"example.b"}),", but not ",(0,s.jsx)(i.code,{children:"example.0"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:["More complex glob patterns can be provided. See: ",(0,s.jsx)(i.a,{href:"https://www.malikbrowne.com/blog/a-beginners-guide-glob-patterns/",children:"https://www.malikbrowne.com/blog/a-beginners-guide-glob-patterns/"})]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},343:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/dialog-35bb522cc8bdd5ea98beca8e6dc701e1.png"},2480:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/dropdown-2acd506534d1903a5b8cb463b3865d5a.png"},6920:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/fif-3b03099ab23a24bfea3c3a575ed27b92.png"},1979:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/folder-1d082044530ff0ee5776a2f2255f6f49.png"},422:(e,i,n)=>{n.d(i,{A:()=>s});const s="data:image/png;base64,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obq6mtOnT5Odnf2j+x40aJB1u3synU5n0x69rq6OPXv2sHPnztvO9+ijj3L48GHGjBnDoEGD2gyuCvuy6ymJm5sbUVFRzJkzh3/+859cu3aNsrIytFot8fHxuLm5oVAoWp2OAERHR9O7d298fX158sknOXjwIACXL1+mubmZkJAQAH75y1+2OvJ48MEHOX/+PMnJySQnJ/Of//zHnpvzox04cIApU6YQHBwMtOwl/f39gZa90Q+PqkaPHm3d7hkzZnDo0KEur7mraTQaIiMjcXV1bTPt5tPQw4cPM378+Nv21atXL55++mk2b97MypUrWbx4cYfrM5lMPfoIoaPscoShVqt57733UCgUXLx4kW3btnHkyBGgZa+ckpLCM888Q1paGmazmcLCQkpKSqx758rKSpYsWYJarSY3N9e6V9Hr9Xz44YfMnz+furo6jhw5wrfffmtdb2FhITNnzrQOWhkMBjQaDe+88471o7auVFBQwNatW5k7dy7e3t5otVq2bduGVqulpKQEtVrNo48+yqeffgq0/HLevN07duzo8pq7mk6n4+DBgyxcuJDk5GQsFgu9evUiMTGRXr16WefTaDTU1tYye/ZsNm7caG2PiIiwDmonJiby9ttv09TUxPnz5yksLGTatGns3LkTtVpNQkICKSkpGAwGm+u7fPkyQUFBqFSqNh/z3o2edslAhwNDo9Ewc+bM285TX1/PW2+91e60xMREAD755JN2p2dlZbUa/Dpw4ID152nTppGens6xY8eAluB67bXXuO+++8jLy/tR23EnGo2mzUVb0HoMA+DYsWPWem5WXV3NSy+91KotPz+fjIwMu9bpDJYvX05iYiL/+Mc/qK+vp6GhgdTUVOuR5A3Lli3jxRdfZNOmTRgMBpRKJSdOnKC4uJjQ0FD69OnT6qhy/fr1fPDBBxw+fJg+ffowefJk3nvvPaqqqmyuzWg0smXLFrZs2YJOp2PdunWcOHHirre1traWPn36MGnSJPbu3XvX/XQXLs58A51ly5bx2WefWa+yHDhwIAsXLmTp0qVUV1c7uLrbS01NJTMzk6+++srRpQhhs077lKQrZGRkEB8fz6RJkzAYDDQ0NPC3v/2t24eFEM7KqY8whBBdy+HfVhVCOA8JDCGEzSQwhBA2k8AQQthMAkMIYTMJDCGEzSQwhBA2k8AQQthMAkMIYTOV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"},4330:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/new-exclusion-25a487ca9129a24e3d4f4730c0612041.png"}}]);