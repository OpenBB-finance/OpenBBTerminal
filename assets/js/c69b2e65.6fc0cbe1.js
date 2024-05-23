"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41077],{30186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(74848),n=r(28453),s=r(94331);const o={title:"heatmap",description:"Documentation for the 'heatmap' command which retrieves Daily Heat Maps based on Market and Sector. This provides a quick overview of current stock market performance.",keywords:["Heatmap Command","Daily Heat Maps","Stock Market Performance","Market Filter","Sector Filter"]},c=void 0,i={id:"bot/reference/telegram/overview/heatmap",title:"heatmap",description:"Documentation for the 'heatmap' command which retrieves Daily Heat Maps based on Market and Sector. This provides a quick overview of current stock market performance.",source:"@site/content/bot/reference/telegram/overview/heatmap.md",sourceDirName:"bot/reference/telegram/overview",slug:"/bot/reference/telegram/overview/heatmap",permalink:"/bot/reference/telegram/overview/heatmap",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/overview/heatmap.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"heatmap",description:"Documentation for the 'heatmap' command which retrieves Daily Heat Maps based on Market and Sector. This provides a quick overview of current stock market performance.",keywords:["Heatmap Command","Daily Heat Maps","Stock Market Performance","Market Filter","Sector Filter"]},sidebar:"tutorialSidebar",previous:{title:"heatchart",permalink:"/bot/reference/telegram/overview/heatchart"},next:{title:"markets",permalink:"/bot/reference/telegram/overview/markets"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"overview: heatmap - Telegram Reference | OpenBB Bot Docs"}),"\n",(0,a.jsx)(t.p,{children:"This command allows the user to retrieve Daily Heat Maps by Market and Sector. The Daily Heat Maps will allow the user a quick overview of current stock market performance."}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/heatmap market [sector]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"market"}),(0,a.jsxs)(t.td,{children:["Market to filter by. ",(0,a.jsx)(t.code,{children:"sp500"}),': "S&P 500", ',(0,a.jsx)(t.code,{children:"nasdaq100"}),': "NASDAQ 100", ',(0,a.jsx)(t.code,{children:"iwm2000"}),': "Russell 2000", ',(0,a.jsx)(t.code,{children:"iwb1000"}),': "Russell 1000", ',(0,a.jsx)(t.code,{children:"dow30"}),': "Dow Jones 30", ',(0,a.jsx)(t.code,{children:"crypto"}),': "Crypto"']}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"sp500, nasdaq100, iwm2000, iwb1000, dow30, crypto"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"sector"}),(0,a.jsxs)(t.td,{children:["Sector to filter by. If not specified, all sectors are returned. ",(0,a.jsx)(t.code,{children:"1"}),': "Basic Materials" ',(0,a.jsx)(t.code,{children:"2"}),': "Conglomerates" ',(0,a.jsx)(t.code,{children:"3"}),': "Consumer Goods" ',(0,a.jsx)(t.code,{children:"4"}),': "Financial" ',(0,a.jsx)(t.code,{children:"5"}),': "Healthcare" ',(0,a.jsx)(t.code,{children:"6"}),': "Industrial Goods" ',(0,a.jsx)(t.code,{children:"7"}),': "Services" ',(0,a.jsx)(t.code,{children:"8"}),': "Technology" ',(0,a.jsx)(t.code,{children:"9"}),': "Utilities"']}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"0, 1, 2, 3, 4, 5, 6, 7, 8, 9"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"/heatmap sp500\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"/heatmap sp500 services\n"})}),"\n",(0,a.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(5260),n=r(74848);function s(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var a=r(96540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);