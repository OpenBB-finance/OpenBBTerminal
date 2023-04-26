"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(35742);function i(e){let{title:t}=e;return r.createElement(o.Z,null,r.createElement("title",null,t))}},37833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),i=n(88828);const a={title:"Discord",sidebar_position:2,description:"Understand the basics for getting started and running the OpenBB Boton Discord.",keywords:["discord","how to","explanation","openbb bot","openbb","guide","bot guide","commands","community"]},s=void 0,c={unversionedId:"bot/usage/discord",id:"bot/usage/discord",title:"Discord",description:"Understand the basics for getting started and running the OpenBB Boton Discord.",source:"@site/content/bot/usage/discord.md",sourceDirName:"bot/usage",slug:"/bot/usage/discord",permalink:"/bot/usage/discord",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/usage/discord.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Discord",sidebar_position:2,description:"Understand the basics for getting started and running the OpenBB Boton Discord.",keywords:["discord","how to","explanation","openbb bot","openbb","guide","bot guide","commands","community"]},sidebar:"tutorialSidebar",previous:{title:"Telegram",permalink:"/bot/installation/telegram"},next:{title:"Telegram",permalink:"/bot/usage/telegram"}},l={},d=[{value:"Getting Started with Discord",id:"getting-started-with-discord",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{title:"Discord - Bot | OpenBB Docs",mdxType:"HeadTitle"}),(0,o.kt)("h2",{id:"getting-started-with-discord"},"Getting Started with Discord"),(0,o.kt)("p",null,"Now that you have added the bot to your Discord you can get started with running commands."),(0,o.kt)("p",null,"If you're new to OpenBB Discord Bot, here's a quick guide to get you started."),(0,o.kt)("p",null,"To use OpenBB, you need to use slash commands, which are special commands that start with a / symbol. To autoselect commands if you are on Desktop you can hit ",(0,o.kt)("inlineCode",{parentName:"p"},"TAB")),(0,o.kt)("div",{className:"flex justify-center h-full w-[800px] rounded-r-[4px]"},(0,o.kt)("img",{className:"h-full object-cover",alt:"gif describing step",src:"https://openbb-web-assets.s3.amazonaws.com/docusaurus-openbb-bot-walkthrough-gifs/page1.gif"})),(0,o.kt)("p",null,"You can type / in the chat to see a list of available slash commands for OpenBB Bot. One of the most useful slash commands is ",(0,o.kt)("inlineCode",{parentName:"p"},"/help"),", which shows you all the commands and how to use them. Some of the most popular commands are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/cd ticker: AMD")," Shows the daily chart for a given stock ticker."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/c3m ticker: AMD")," Shows the 3-month chart for a given stock ticker."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/flow ticker: AMD")," Shows the recent options flow for the given stock ticker.")),(0,o.kt)("p",null,"That's it! You're ready to explore the market with OpenBB Discord Bot!"),(0,o.kt)("p",null,"Check out the Reference section for more commands or type ",(0,o.kt)("inlineCode",{parentName:"p"},"/help")," in your chat to see what else we can do!"))}m.isMDXComponent=!0}}]);