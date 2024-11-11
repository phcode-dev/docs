"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6638],{585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(74848),s=t(28453);const r={},l=void 0,d={id:"API-Reference/file/FileUtils",title:"FileUtils",description:"Import :",source:"@site/api/API-Reference/file/FileUtils.md",sourceDirName:"API-Reference/file",slug:"/API-Reference/file/FileUtils",permalink:"/api/API-Reference/file/FileUtils",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TaskManager",permalink:"/api/API-Reference/features/TaskManager"},next:{title:"FileSystem",permalink:"/api/API-Reference/filesystem/"}},h={},a=[{value:"Import :",id:"import-",level:3},{value:"LINE_ENDINGS_CRLF : <code>enum</code>",id:"line_endings_crlf--enum",level:2},{value:"LINE_ENDINGS_LF : <code>enum</code>",id:"line_endings_lf--enum",level:2},{value:"Maximium : <code>Number</code>",id:"maximium--number",level:2},{value:"readAsText(file, bypassCache) \u21d2 <code>$.Promise</code>",id:"readastextfile-bypasscache--promise",level:2},{value:"writeText(file, text, [allowBlindWrite]) \u21d2 <code>$.Promise</code>",id:"writetextfile-text-allowblindwrite--promise",level:2},{value:"getPlatformLineEndings() \u21d2 <code>LINE_ENDINGS_CRLF</code> | <code>LINE_ENDINGS_LF</code>",id:"getplatformlineendings--line_endings_crlf--line_endings_lf",level:2},{value:"sniffLineEndings(text) \u21d2 <code>null</code> | <code>LINE_ENDINGS_CRLF</code> | <code>LINE_ENDINGS_LF</code>",id:"snifflineendingstext--null--line_endings_crlf--line_endings_lf",level:2},{value:"translateLineEndings(text, lineEndings) \u21d2 <code>string</code>",id:"translatelineendingstext-lineendings--string",level:2},{value:"getFileErrorString(name) \u21d2 <code>string</code>",id:"getfileerrorstringname--string",level:2},{value:"makeDialogFileList(Array)",id:"makedialogfilelistarray",level:2},{value:"convertToNativePath(path) \u21d2 <code>string</code>",id:"converttonativepathpath--string",level:2},{value:"convertWindowsPathToUnixPath(path) \u21d2 <code>string</code>",id:"convertwindowspathtounixpathpath--string",level:2},{value:"stripTrailingSlash(path) \u21d2 <code>string</code>",id:"striptrailingslashpath--string",level:2},{value:"getBaseName(fullPath) \u21d2 <code>string</code>",id:"getbasenamefullpath--string",level:2},{value:"getNativeBracketsDirectoryPath() \u21d2 <code>string</code>",id:"getnativebracketsdirectorypath--string",level:2},{value:"getNativeModuleDirectoryPath() \u21d2 <code>string</code>",id:"getnativemoduledirectorypath--string",level:2},{value:"getFileExtension(fullPath) \u21d2 <code>string</code>",id:"getfileextensionfullpath--string",level:2},{value:"getRelativeFilename(basePath, filename) \u21d2 <code>string</code>",id:"getrelativefilenamebasepath-filename--string",level:2},{value:"isStaticHtmlFileExt(filePath) \u21d2 <code>boolean</code>",id:"isstatichtmlfileextfilepath--boolean",level:2},{value:"getDirectoryPath(fullPath) \u21d2 <code>string</code>",id:"getdirectorypathfullpath--string",level:2},{value:"getParentPath(fullPath) \u21d2 <code>string</code>",id:"getparentpathfullpath--string",level:2},{value:"getFilenameWithoutExtension(filename) \u21d2 <code>string</code>",id:"getfilenamewithoutextensionfilename--string",level:2},{value:"compareFilenames(filename1, filename2, extFirst) \u21d2 <code>number</code>",id:"comparefilenamesfilename1-filename2-extfirst--number",level:2},{value:"comparePaths(path1, path2) \u21d2 <code>number</code>",id:"comparepathspath1-path2--number",level:2},{value:"encodeFilePath(path) \u21d2 <code>string</code>",id:"encodefilepathpath--string",level:2},{value:"shouldOpenInExternalApplication(ext) \u21d2 <code>string</code>",id:"shouldopeninexternalapplicationext--string",level:2},{value:"addExtensionToExternalAppList(ext)",id:"addextensiontoexternalapplistext",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"import-",children:"Import :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const FileUtils = brackets.getModule("file/FileUtils")\n'})}),"\n",(0,i.jsx)("a",{name:"LINE_ENDINGS_CRLF"}),"\n",(0,i.jsxs)(n.h2,{id:"line_endings_crlf--enum",children:["LINE_ENDINGS_CRLF : ",(0,i.jsx)("code",{children:"enum"})]}),"\n",(0,i.jsx)(n.p,{children:"Line endings crlf"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global enum"]}),"\n",(0,i.jsx)("a",{name:"LINE_ENDINGS_LF"}),"\n",(0,i.jsxs)(n.h2,{id:"line_endings_lf--enum",children:["LINE_ENDINGS_LF : ",(0,i.jsx)("code",{children:"enum"})]}),"\n",(0,i.jsx)(n.p,{children:"Line endings lf"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global enum"]}),"\n",(0,i.jsx)("a",{name:"Maximium"}),"\n",(0,i.jsxs)(n.h2,{id:"maximium--number",children:["Maximium : ",(0,i.jsx)("code",{children:"Number"})]}),"\n",(0,i.jsx)(n.p,{children:"file size (in bytes)\nThis must be a hard-coded value since this value\ntells how low-level APIs should behave which cannot\nhave a load order dependency on preferences manager"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global constant"]}),"\n",(0,i.jsx)("a",{name:"readAsText"}),"\n",(0,i.jsxs)(n.h2,{id:"readastextfile-bypasscache--promise",children:["readAsText(file, bypassCache) \u21d2 ",(0,i.jsx)("code",{children:"$.Promise"})]}),"\n",(0,i.jsx)(n.p,{children:"Asynchronously reads a file as UTF-8 encoded text."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"$.Promise"})," - a jQuery promise that will be resolved with the\nfile's text content plus its timestamp, or rejected with a FileSystemError string\nconstant if the file can not be read."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"file"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"File"})}),(0,i.jsx)(n.td,{children:"File to read"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bypassCache"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"boolean"})}),(0,i.jsx)(n.td,{children:"an optional argument, if specified will read from disc instead of using cache."})]})]})]}),"\n",(0,i.jsx)("a",{name:"writeText"}),"\n",(0,i.jsxs)(n.h2,{id:"writetextfile-text-allowblindwrite--promise",children:["writeText(file, text, [allowBlindWrite]) \u21d2 ",(0,i.jsx)("code",{children:"$.Promise"})]}),"\n",(0,i.jsx)(n.p,{children:"Asynchronously writes a file as UTF-8 encoded text."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"$.Promise"})," - a jQuery promise that will be resolved when\nfile writing completes, or rejected with a FileSystemError string constant."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"file"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"File"})}),(0,i.jsx)(n.td,{children:"File to write"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"[allowBlindWrite]"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Indicates whether or not CONTENTS_MODIFIED      errors---which can be triggered if the actual file contents differ from      the FileSystem's last-known contents---should be ignored."})]})]})]}),"\n",(0,i.jsx)("a",{name:"getPlatformLineEndings"}),"\n",(0,i.jsxs)(n.h2,{id:"getplatformlineendings--line_endings_crlf--line_endings_lf",children:["getPlatformLineEndings() \u21d2 ",(0,i.jsx)(n.a,{href:"#LINE_ENDINGS_CRLF",children:(0,i.jsx)("code",{children:"LINE_ENDINGS_CRLF"})})," | ",(0,i.jsx)(n.a,{href:"#LINE_ENDINGS_LF",children:(0,i.jsx)("code",{children:"LINE_ENDINGS_LF"})})]}),"\n",(0,i.jsx)(n.p,{children:"Returns the standard line endings for the current platform"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,i.jsx)("a",{name:"sniffLineEndings"}),"\n",(0,i.jsxs)(n.h2,{id:"snifflineendingstext--null--line_endings_crlf--line_endings_lf",children:["sniffLineEndings(text) \u21d2 ",(0,i.jsx)("code",{children:"null"})," | ",(0,i.jsx)(n.a,{href:"#LINE_ENDINGS_CRLF",children:(0,i.jsx)("code",{children:"LINE_ENDINGS_CRLF"})})," | ",(0,i.jsx)(n.a,{href:"#LINE_ENDINGS_LF",children:(0,i.jsx)("code",{children:"LINE_ENDINGS_LF"})})]}),"\n",(0,i.jsx)(n.p,{children:"Scans the first 1000 chars of the text to determine how it encodes line endings. Returns\nnull if usage is mixed or if no line endings found."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})})]})})]}),"\n",(0,i.jsx)("a",{name:"translateLineEndings"}),"\n",(0,i.jsxs)(n.h2,{id:"translatelineendingstext-lineendings--string",children:["translateLineEndings(text, lineEndings) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"Translates any line ending types in the given text to the be the single form specified"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lineEndings"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)("code",{children:"null"})," | ",(0,i.jsx)(n.a,{href:"#LINE_ENDINGS_CRLF",children:(0,i.jsx)("code",{children:"LINE_ENDINGS_CRLF"})})," | ",(0,i.jsx)(n.a,{href:"#LINE_ENDINGS_LF",children:(0,i.jsx)("code",{children:"LINE_ENDINGS_LF"})})]})]})]})]}),"\n",(0,i.jsx)("a",{name:"getFileErrorString"}),"\n",(0,i.jsxs)(n.h2,{id:"getfileerrorstringname--string",children:["getFileErrorString(name) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - User-friendly, localized error message"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"FileSystemError"})})]})})]}),"\n",(0,i.jsx)("a",{name:"makeDialogFileList"}),"\n",(0,i.jsx)(n.h2,{id:"makedialogfilelistarray",children:"makeDialogFileList(Array)"}),"\n",(0,i.jsx)(n.p,{children:"Creates an HTML string for a list of files to be reported on, suitable for use in a dialog."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Array"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"Array.<string>"})}),(0,i.jsx)(n.td,{children:"of filenames or paths to display."})]})})]}),"\n",(0,i.jsx)("a",{name:"convertToNativePath"}),"\n",(0,i.jsxs)(n.h2,{id:"converttonativepathpath--string",children:["convertToNativePath(path) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:'Convert a URI path to a native path.\nOn both platforms, this unescapes the URI\nOn windows, URI paths start with a "/", but have a drive letter ("C:"). In this\ncase, remove the initial "/".'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})})]})})]}),"\n",(0,i.jsx)("a",{name:"convertWindowsPathToUnixPath"}),"\n",(0,i.jsxs)(n.h2,{id:"convertwindowspathtounixpathpath--string",children:["convertWindowsPathToUnixPath(path) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:'Convert a Windows-native path to use Unix style slashes.\nOn Windows, this converts "C:\\foo\\bar\\baz.txt" to "C:/foo/bar/baz.txt".\nOn Mac, this does nothing, since Mac paths are already in Unix syntax.\n(Note that this does not add an initial forward-slash. Internally, our\nAPIs generally use the "C:/foo/bar/baz.txt" style for "native" paths.)'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - A Unix-style path."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"A native-style path."})]})})]}),"\n",(0,i.jsx)("a",{name:"stripTrailingSlash"}),"\n",(0,i.jsxs)(n.h2,{id:"striptrailingslashpath--string",children:["stripTrailingSlash(path) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:'Removes the trailing slash from a path or URL, if it has one.\nWarning: this differs from the format of most paths used in Brackets! Use paths ending in "/"\nnormally, as this is the format used by Directory.fullPath.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"or URL"})]})})]}),"\n",(0,i.jsx)("a",{name:"getBaseName"}),"\n",(0,i.jsxs)(n.h2,{id:"getbasenamefullpath--string",children:["getBaseName(fullPath) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"Get the name of a file or a directory, removing any preceding path."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - Returns the base name of a file or the name of a\ndirectory"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fullPath"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"full path to a file or directory"})]})})]}),"\n",(0,i.jsx)("a",{name:"getNativeBracketsDirectoryPath"}),"\n",(0,i.jsxs)(n.h2,{id:"getnativebracketsdirectorypath--string",children:["getNativeBracketsDirectoryPath() \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"Returns a native absolute path to the 'brackets' source directory.\nNote that this only works when run in brackets/src/index.html, so it does\nnot work for unit tests (which is run from brackets/test/SpecRunner.html)"}),"\n",(0,i.jsx)(n.p,{children:'WARNING: unlike most paths in Brackets, this path EXCLUDES the trailing "/".'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,i.jsx)("a",{name:"getNativeModuleDirectoryPath"}),"\n",(0,i.jsxs)(n.h2,{id:"getnativemoduledirectorypath--string",children:["getNativeModuleDirectoryPath() \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"Given the module object passed to JS module define function,\nconvert the path to a native absolute path.\nReturns a native absolute path to the module folder."}),"\n",(0,i.jsx)(n.p,{children:'WARNING: unlike most paths in Brackets, this path EXCLUDES the trailing "/".'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,i.jsx)("a",{name:"getFileExtension"}),"\n",(0,i.jsxs)(n.h2,{id:"getfileextensionfullpath--string",children:["getFileExtension(fullPath) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:'Get the file extension (excluding ".") given a path OR a bare filename.\nReturns "" for names with no extension. If the name starts with ".", the\nfull remaining text is considered the extension.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - Returns the extension of a filename or empty string if\nthe argument is a directory or a filename with no extension"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fullPath"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"full path to a file or directory"})]})})]}),"\n",(0,i.jsx)("a",{name:"getRelativeFilename"}),"\n",(0,i.jsxs)(n.h2,{id:"getrelativefilenamebasepath-filename--string",children:["getRelativeFilename(basePath, filename) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"Computes filename as relative to the basePath. For example:\nbasePath: /foo/bar/, filename: /foo/bar/baz.txt\nreturns: baz.txt"}),"\n",(0,i.jsx)(n.p,{children:"The net effect is that the common prefix is stripped away. If basePath is not\na prefix of filename, then undefined is returned."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - relative path"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"basePath"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"Path against which we're computing the relative path"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"filename"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"Full path to the file for which we are computing a relative path"})]})]})]}),"\n",(0,i.jsx)("a",{name:"isStaticHtmlFileExt"}),"\n",(0,i.jsxs)(n.h2,{id:"isstatichtmlfileextfilepath--boolean",children:["isStaticHtmlFileExt(filePath) \u21d2 ",(0,i.jsx)("code",{children:"boolean"})]}),"\n",(0,i.jsx)(n.p,{children:"Determine if file extension is a static html file extension."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"boolean"})," - Returns true if fileExt is in the list"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"filePath"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"could be a path, a file name or just a file extension"})]})})]}),"\n",(0,i.jsx)("a",{name:"getDirectoryPath"}),"\n",(0,i.jsxs)(n.h2,{id:"getdirectorypathfullpath--string",children:["getDirectoryPath(fullPath) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"Get the parent directory of a file. If a directory is passed, the SAME directory is returned."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"}),' - Returns the path to the parent directory of a file or the path of a directory,\nincluding trailing "/"']}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fullPath"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"full path to a file or directory"})]})})]}),"\n",(0,i.jsx)("a",{name:"getParentPath"}),"\n",(0,i.jsxs)(n.h2,{id:"getparentpathfullpath--string",children:["getParentPath(fullPath) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"Get the parent folder of the given file/folder path. Differs from getDirectoryPath() when 'fullPath'\nis a directory itself: returns its parent instead of the original path. (Note: if you already have a\nFileSystemEntry, it's faster to use entry.parentPath instead)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"}),' - Path of containing folder (including trailing "/"); or "" if path was the root']}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fullPath"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"full path to a file or directory"})]})})]}),"\n",(0,i.jsx)("a",{name:"getFilenameWithoutExtension"}),"\n",(0,i.jsxs)(n.h2,{id:"getfilenamewithoutextensionfilename--string",children:["getFilenameWithoutExtension(filename) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:'Get the file name without the extension. Returns "" if name starts with "."'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - Returns the file name without the extension"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"filename"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"File name of a file or directory, without preceding path"})]})})]}),"\n",(0,i.jsx)("a",{name:"compareFilenames"}),"\n",(0,i.jsxs)(n.h2,{id:"comparefilenamesfilename1-filename2-extfirst--number",children:["compareFilenames(filename1, filename2, extFirst) \u21d2 ",(0,i.jsx)("code",{children:"number"})]}),"\n",(0,i.jsx)(n.p,{children:"Compares 2 filenames in lowercases. In Windows it compares the names without the\nextension first and then the extensions to fix issue #4409"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"number"})," - The result of the compare function"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"filename1"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"filename2"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"extFirst"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"boolean"})}),(0,i.jsx)(n.td,{children:"If true it compares the extensions first and then the file names."})]})]})]}),"\n",(0,i.jsx)("a",{name:"comparePaths"}),"\n",(0,i.jsxs)(n.h2,{id:"comparepathspath1-path2--number",children:["comparePaths(path1, path2) \u21d2 ",(0,i.jsx)("code",{children:"number"})]}),"\n",(0,i.jsxs)(n.p,{children:["Compares two paths segment-by-segment, used for sorting. When two files share a path prefix,\nthe less deeply nested one is sorted earlier in the list. Sorts files within the same parent\nfolder based on ",(0,i.jsx)(n.code,{children:"compareFilenames()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"number"})," - -1, 0, or 1 depending on whether path1 is less than, equal to, or greater than\npath2 according to this ordering."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path1"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path2"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})})]})]})]}),"\n",(0,i.jsx)("a",{name:"encodeFilePath"}),"\n",(0,i.jsxs)(n.h2,{id:"encodefilepathpath--string",children:["encodeFilePath(path) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - URI-encoded version suitable for appending to 'file:///`. It's not safe to use encodeURI()\ndirectly since it doesn't escape chars like \"#\"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"Native path in the format used by FileSystemEntry.fullPath"})]})})]}),"\n",(0,i.jsx)("a",{name:"shouldOpenInExternalApplication"}),"\n",(0,i.jsxs)(n.h2,{id:"shouldopeninexternalapplicationext--string",children:["shouldOpenInExternalApplication(ext) \u21d2 ",(0,i.jsx)("code",{children:"string"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)("code",{children:"string"})," - returns true If file to be opened in External Application."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ext"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"extension string a file"})]})})]}),"\n",(0,i.jsx)("a",{name:"addExtensionToExternalAppList"}),"\n",(0,i.jsx)(n.h2,{id:"addextensiontoexternalapplistext",children:"addExtensionToExternalAppList(ext)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kind"}),": global function"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ext"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)(n.td,{children:"File Extensions to be added in External App List"})]})})]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);