"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),s=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},95536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const l={title:"plot",description:"Learn how to plot data on two y-axes using the plot command in our tools. The command allows you to plot different time series in one graph with data from the macro, fred, index, and treasury commands. Our guide also provides examples of usage and parameters to customize your plots.",keywords:["plot data","two y-axes","macro","fred","index","treasury commands","time series","graph","variables"]},i=void 0,m={unversionedId:"terminal/reference/economy/plot",id:"terminal/reference/economy/plot",title:"plot",description:"Learn how to plot data on two y-axes using the plot command in our tools. The command allows you to plot different time series in one graph with data from the macro, fred, index, and treasury commands. Our guide also provides examples of usage and parameters to customize your plots.",source:"@site/content/terminal/reference/economy/plot.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/plot",permalink:"/terminal/reference/economy/plot",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/plot.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1701392965,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"plot",description:"Learn how to plot data on two y-axes using the plot command in our tools. The command allows you to plot different time series in one graph with data from the macro, fred, index, and treasury commands. Our guide also provides examples of usage and parameters to customize your plots.",keywords:["plot data","two y-axes","macro","fred","index","treasury commands","time series","graph","variables"]},sidebar:"tutorialSidebar",previous:{title:"performance",permalink:"/terminal/reference/economy/performance"},next:{title:"revenue",permalink:"/terminal/reference/economy/revenue"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"economy /plot - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command can plot any data on two y-axes obtained from the macro, fred, index and treasury commands. To be able to use this data, just load the available series from the previous commands. For example 'macro -p GDP -c Germany Netherlands' will store the data for usage in this command. Therefore, it allows you to plot different time series in one graph. The example above could be plotted the following way: 'plot --y1 Germany_GDP --y2 Netherlands_GDP' or 'plot --y1 Germany_GDP Netherlands_GDP'"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"plot [--y1 YAXIS1] [--y2 YAXIS2]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"yaxis1"),(0,n.kt)("td",{parentName:"tr",align:null},"--y1"),(0,n.kt)("td",{parentName:"tr",align:null},"Select the data you wish to plot on the first y-axis. You can select multiple variables here."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"yaxis2"),(0,n.kt)("td",{parentName:"tr",align:null},"--y2"),(0,n.kt)("td",{parentName:"tr",align:null},"Select the data you wish to plot on the second y-axis. You can select multiple variables here."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/158633367-783d54eb-79ab-443f-af99-8a9ecadf5949.png",alt:"Figure_1"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/158633394-d948d909-d39b-4b05-9c5b-2e30b202cc32.png",alt:"Figure_2"})),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);