"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47559],{10268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(74848),i=n(28453),r=n(94331);const s={title:"ema",description:"This is an explanation and usage guideline for the Exponential Moving Average (EMA), a core tool in technical analysis. Learn about its distinction from the Simple Moving Average and understand how it places greater contribution on recent values, making it more responsive to changes in data.",keywords:["Exponential Moving Average","technical analysis","Simple Moving Average","ema","ema parameters","ema usage"]},o=void 0,c={id:"terminal/reference/stocks/ta/ema",title:"ema",description:"This is an explanation and usage guideline for the Exponential Moving Average (EMA), a core tool in technical analysis. Learn about its distinction from the Simple Moving Average and understand how it places greater contribution on recent values, making it more responsive to changes in data.",source:"@site/content/terminal/reference/stocks/ta/ema.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/ema",permalink:"/terminal/reference/stocks/ta/ema",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ta/ema.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"ema",description:"This is an explanation and usage guideline for the Exponential Moving Average (EMA), a core tool in technical analysis. Learn about its distinction from the Simple Moving Average and understand how it places greater contribution on recent values, making it more responsive to changes in data.",keywords:["Exponential Moving Average","technical analysis","Simple Moving Average","ema","ema parameters","ema usage"]},sidebar:"tutorialSidebar",previous:{title:"donchian",permalink:"/terminal/reference/stocks/ta/donchian"},next:{title:"fib",permalink:"/terminal/reference/stocks/ta/fib"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{title:"stocks/ta/ema - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(t.p,{children:"The Exponential Moving Average is a staple of technical analysis and is used in countless technical indicators. In a Simple Moving Average, each value in the time period carries equal weight, and values outside of the time period are not included in the average. However, the Exponential Moving Average is a cumulative calculation, including all data. Past values have a diminishing contribution to the average, while more recent values have a greater contribution. This method allows the moving average to be more responsive to changes in the data."}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"ema [-l N_LENGTH] [-o N_OFFSET]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_length"}),(0,a.jsx)(t.td,{children:"Window lengths. Multiple values indicated as comma separated values."}),(0,a.jsx)(t.td,{children:"20, 50"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_offset"}),(0,a.jsx)(t.td,{children:"offset"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154310578-6f4a51a8-3667-497c-9c50-7ff16e256fb6.png",alt:"ema"})}),"\n",(0,a.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(5260),i=n(74848);function r(e){let{title:t}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);