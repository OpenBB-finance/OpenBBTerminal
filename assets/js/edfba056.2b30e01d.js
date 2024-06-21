"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24926],{80836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=r(74848),d=r(28453),i=r(94331);const a={title:"lt",description:"Description and usage guide for the lt command, that displays trades on decentralized exchanges including the ability to aggregate trades by DEX or time, display trade amount in different currencies, and sort data. The command uses Python language.",keywords:["Display Trades","Decentralized Exchanges","Aggregated","DEX","Trade Amount","Currency","USD","ETH","BTC","USDT"]},s=void 0,c={id:"terminal/reference/crypto/onchain/lt",title:"lt",description:"Description and usage guide for the lt command, that displays trades on decentralized exchanges including the ability to aggregate trades by DEX or time, display trade amount in different currencies, and sort data. The command uses Python language.",source:"@site/content/terminal/reference/crypto/onchain/lt.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/lt",permalink:"/terminal/reference/crypto/onchain/lt",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/lt.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,frontMatter:{title:"lt",description:"Description and usage guide for the lt command, that displays trades on decentralized exchanges including the ability to aggregate trades by DEX or time, display trade amount in different currencies, and sort data. The command uses Python language.",keywords:["Display Trades","Decentralized Exchanges","Aggregated","DEX","Trade Amount","Currency","USD","ETH","BTC","USDT"]},sidebar:"tutorialSidebar",previous:{title:"info",permalink:"/terminal/reference/crypto/onchain/info"},next:{title:"prices",permalink:"/terminal/reference/crypto/onchain/prices"}},l={},o=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"crypto/onchain/lt - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsxs)(t.p,{children:["Display Trades on Decentralized Exchanges aggregated by DEX or Month [Source: ",(0,n.jsx)(t.a,{href:"https://graphql.bitquery.io/",children:"https://graphql.bitquery.io/"}),"]"]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"lt [-k {dex,time}] [-vs {ETH,USD,BTC,USDT}] [-l LIMIT] [-d DAYS] [-s {exchange,trades,tradeAmount}] [-r]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"kind"}),(0,n.jsx)(t.td,{children:"Aggregate trades by dex or time Default: dex"}),(0,n.jsx)(t.td,{children:"dex"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"dex, time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vs"}),(0,n.jsx)(t.td,{children:"Currency of displayed trade amount."}),(0,n.jsx)(t.td,{children:"USD"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"ETH, USD, BTC, USDT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"display N number records"}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"days"}),(0,n.jsx)(t.td,{children:"Number of days to display data for."}),(0,n.jsx)(t.td,{children:"90"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"range(1, 360)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sortby"}),(0,n.jsx)(t.td,{children:"Sort by given column. Default: tradeAmount. For monthly trades date."}),(0,n.jsx)(t.td,{children:"tradeAmount"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"exchange, trades, tradeAmount"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reverse"}),(0,n.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),d=r(74848);function i(e){let{title:t}=e;return(0,d.jsx)(n.A,{children:(0,d.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var n=r(96540);const d={},i=n.createContext(d);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);