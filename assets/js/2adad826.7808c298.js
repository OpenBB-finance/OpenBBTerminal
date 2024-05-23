"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39513],{76030:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=s(74848),r=s(28453),i=s(94331);const o={title:"stoch",description:"This page presents an understanding of the Stochastic Oscillator, a technical analysis indicator, and its parameters. It illustrates the buy and sell signals, moving averages, overbought and oversold conditions, and usage in Python. Particularly, it explains the commands n_fastkperiod, n_slowdperiod, and n_slowkperiod.",keywords:["Stochastic Oscillator","overbought condition","oversold condition","Fast %D","Slow %D","buy signal","sell signal","Raw %K","crossover signals","stoch","moving average","trading range","n_fastkperiod","n_slowdperiod","n_slowkperiod"]},a=void 0,d={id:"terminal/reference/stocks/ta/stoch",title:"stoch",description:"This page presents an understanding of the Stochastic Oscillator, a technical analysis indicator, and its parameters. It illustrates the buy and sell signals, moving averages, overbought and oversold conditions, and usage in Python. Particularly, it explains the commands n_fastkperiod, n_slowdperiod, and n_slowkperiod.",source:"@site/content/terminal/reference/stocks/ta/stoch.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/stoch",permalink:"/terminal/reference/stocks/ta/stoch",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ta/stoch.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"stoch",description:"This page presents an understanding of the Stochastic Oscillator, a technical analysis indicator, and its parameters. It illustrates the buy and sell signals, moving averages, overbought and oversold conditions, and usage in Python. Particularly, it explains the commands n_fastkperiod, n_slowdperiod, and n_slowkperiod.",keywords:["Stochastic Oscillator","overbought condition","oversold condition","Fast %D","Slow %D","buy signal","sell signal","Raw %K","crossover signals","stoch","moving average","trading range","n_fastkperiod","n_slowdperiod","n_slowkperiod"]},sidebar:"tutorialSidebar",previous:{title:"sma",permalink:"/terminal/reference/stocks/ta/sma"},next:{title:"summary",permalink:"/terminal/reference/stocks/ta/summary"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"stocks/ta/stoch - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"The Stochastic Oscillator measures where the close is in relation to the recent trading range. The values range from zero to 100. %D values over 75 indicate an overbought condition; values under 25 indicate an oversold condition. When the Fast %D crosses above the Slow %D, it is a buy signal; when it crosses below, it is a sell signal. The Raw %K is generally considered too erratic to use for crossover signals."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"stoch [-k N_FASTKPERIOD] [-d N_SLOWDPERIOD] [--slowkperiod N_SLOWKPERIOD]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_fastkperiod"}),(0,n.jsx)(t.td,{children:"The time period of the fastk moving average"}),(0,n.jsx)(t.td,{children:"14"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_slowdperiod"}),(0,n.jsx)(t.td,{children:"The time period of the slowd moving average"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_slowkperiod"}),(0,n.jsx)(t.td,{children:"The time period of the slowk moving average"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154311913-d58e58bb-d116-44dd-ae4b-44e59c25f22a.png",alt:"stoch"})}),"\n",(0,n.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(5260),r=s(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);