"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(35742);function a(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},9669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(88828);const i={title:"Telegram",sidebar_position:3,description:"Understand the basics for getting started and running the OpenBB Boton Telegram.",keywords:["telegram","how to","explanation","openbb bot","openbb","guide","bot guide","commands","community"]},l=void 0,s={unversionedId:"bot/usage/telegram",id:"bot/usage/telegram",title:"Telegram",description:"Understand the basics for getting started and running the OpenBB Boton Telegram.",source:"@site/content/bot/usage/telegram.md",sourceDirName:"bot/usage",slug:"/bot/usage/telegram",permalink:"/bot/usage/telegram",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/usage/telegram.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Telegram",sidebar_position:3,description:"Understand the basics for getting started and running the OpenBB Boton Telegram.",keywords:["telegram","how to","explanation","openbb bot","openbb","guide","bot guide","commands","community"]},sidebar:"tutorialSidebar",previous:{title:"Discord",permalink:"/bot/usage/discord"},next:{title:"Customization",permalink:"/bot/usage/customizing/"}},c={},p=[{value:"Getting Started with Telegram",id:"getting-started-with-telegram",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"Telegram - Bot | OpenBB Docs",mdxType:"HeadTitle"}),(0,o.kt)("h2",{id:"getting-started-with-telegram"},"Getting Started with Telegram"),(0,o.kt)("p",null,"Now that you have added the bot to your Telegram server you can get started with running commands."),(0,o.kt)("p",null,"To use it, you need to type slash commands in the chat. A slash command starts with a / followed by a keyword and an optional argument. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/cd AAPL")," will show you the daily chart for Apple stock."),(0,o.kt)("div",{className:"flex justify-center h-full w-[800px] rounded-r-[4px]"},(0,o.kt)("img",{className:"h-full object-cover",alt:"gif describing step",src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/telegram-gif.gif"})),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I select commands instead of typing?"),"If you are On mobile press and hold to select the command.",(0,o.kt)("p",null,"On desktop press ",(0,o.kt)("inlineCode",{parentName:"p"},"tab")," to select the command.")),(0,o.kt)("p",null,"To see all the available commands, you can type ",(0,o.kt)("inlineCode",{parentName:"p"},"/help")," in the chat. This will show you a list of commands and their descriptions. You can also tap on any command to use it directly. Some of the most popular commands are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/cd AMD")," Shows the daily chart for a given stock ticker."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/c3m AMD")," Shows the 3-month chart for a given stock ticker."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/flow AMD")," Shows the recent options flow for the given stock ticker."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/c DOGE")," Shows a chart for the crypto symbol provided.")),(0,o.kt)("p",null,"That's it! You're ready to use OpenBB Telegram Bot and explore the markets. Have fun!"),(0,o.kt)("p",null,"Check out the Reference section for more commands or type ",(0,o.kt)("inlineCode",{parentName:"p"},"/help")," in your chat to see what else we can do!"))}u.isMDXComponent=!0}}]);