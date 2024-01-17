"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59060],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},57216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const i={title:"Bugs, Support, and Feedback",sidebar_position:5,description:"Familiarize yourself with common issues and bug reports within our OpenBB Terminal, explore our patch release process and learn how to report issues or get support for OpenBB Terminal. You'll also learn how to provide feedback and request specific features within the platform.",keywords:["GitHub","bugs","patches","issue reporting","support","Discord","feature requests","machine learning"]},s=void 0,l={unversionedId:"terminal/faqs/bugs_support_feedback",id:"terminal/faqs/bugs_support_feedback",title:"Bugs, Support, and Feedback",description:"Familiarize yourself with common issues and bug reports within our OpenBB Terminal, explore our patch release process and learn how to report issues or get support for OpenBB Terminal. You'll also learn how to provide feedback and request specific features within the platform.",source:"@site/content/terminal/faqs/bugs_support_feedback.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/bugs_support_feedback",permalink:"/terminal/faqs/bugs_support_feedback",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/faqs/bugs_support_feedback.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",sidebarPosition:5,frontMatter:{title:"Bugs, Support, and Feedback",sidebar_position:5,description:"Familiarize yourself with common issues and bug reports within our OpenBB Terminal, explore our patch release process and learn how to report issues or get support for OpenBB Terminal. You'll also learn how to provide feedback and request specific features within the platform.",keywords:["GitHub","bugs","patches","issue reporting","support","Discord","feature requests","machine learning"]},sidebar:"tutorialSidebar",previous:{title:"Data and Sources",permalink:"/terminal/faqs/data_sources"},next:{title:"Developer Issues",permalink:"/terminal/faqs/developer_issues"}},p={},u=[],c={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"Bugs, Support, and Feedback - Faqs | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"When an error is encountered, it is always a good idea to check the open issues on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues"},"GitHub"),". There may be a workaround solution for the specific problem until a patch is released."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How often are patches for bugs released?"),(0,a.kt)("p",null,"The installer versions are packaged approximately every two-weeks. Those working with a cloned GitHub version can checkout the Develop branch to get the latest fixes and releases before they are pushed to the main branch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"git checkout develop\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How do I report a bug?"),(0,a.kt)("p",null,"First, search the open issues for another report. If one already exists, attach any relevant information and screenshots as a comment. If one does not exist, start one with this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new?assignees=&labels=type%3Abug&template=bug_report.md&title=%5BBug%5D"},"link"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How can I get help with OpenBB Terminal?"),(0,a.kt)("p",null,"You can get help with OpenBB Terminal by joining our ",(0,a.kt)("a",{parentName:"p",href:"https://openbb.co/discord"},"Discord server")," or contact us in our support form ",(0,a.kt)("a",{parentName:"p",href:"https://openbb.co/support"},"here"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How can I give feedback about the OpenBB Terminal, or request specific functionality?"),(0,a.kt)("p",null,"Being an open source platform that wishes to tailor to the needs of any type of investor, we highly encourage anyone to share with us their experience and/or how we can further improve the OpenBB Terminal. This can be anything from a very small bug, a new feature, or the implementation of a highly advanced Machine Learning model."),(0,a.kt)("p",null,"You are able to directly send us information about a bug or a question/suggestion from inside the terminal by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"support")," command which is available everywhere in the terminal. Here you can select which command you want to report a bug on, ask a question or make a suggestion. After entering ",(0,a.kt)("inlineCode",{parentName:"p"},"support"),", when you press ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTER")," (\u23ce), you are taken to the Support form which is automatically filled with your input. You are only required to include the type (e.g. bug, suggestion or question) and message in the form, although this can also be set directly from inside the terminal (see ",(0,a.kt)("inlineCode",{parentName:"p"},"support -h"),")."),(0,a.kt)("p",null,"Alternatively, you can contact us via the following routes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you notice that a feature is missing inside the terminal, please fill in the ",(0,a.kt)("a",{parentName:"li",href:"https://openbb.co/request-a-feature"},"Request a Feature")," form."),(0,a.kt)("li",{parentName:"ul"},"If you wish to report a bug, have a question/suggestion or anything else, please fill in the ",(0,a.kt)("a",{parentName:"li",href:"https://openbb.co/support"},"Support")," form."),(0,a.kt)("li",{parentName:"ul"},"If you wish to speak to us directly, please contact us on ",(0,a.kt)("a",{parentName:"li",href:"https://openbb.co/discord"},"Discord"),"."))))}d.isMDXComponent=!0}}]);