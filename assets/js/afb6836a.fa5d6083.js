"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45542],{18409:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(74848),i=s(28453),c=s(94331);const o={title:"Discovery",description:"This documentation page is an introduction to the Discovery sub-menu, within Stocks, of the OpenBB Terminal. Functions in this menu include stock lists, calendars, trending moves and an S&P 500 heatmap.",keywords:["Stocks Discovery","following trends","current events","gainers","losers","most active","calendar","dividend","earnings","Seeking Alpha news","S&P 500","heatmap","ark","penny stocks"]},a=void 0,r={id:"terminal/menus/stocks/disc",title:"Discovery",description:"This documentation page is an introduction to the Discovery sub-menu, within Stocks, of the OpenBB Terminal. Functions in this menu include stock lists, calendars, trending moves and an S&P 500 heatmap.",source:"@site/content/terminal/menus/stocks/disc.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/disc",permalink:"/terminal/menus/stocks/disc",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/disc.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"Discovery",description:"This documentation page is an introduction to the Discovery sub-menu, within Stocks, of the OpenBB Terminal. Functions in this menu include stock lists, calendars, trending moves and an S&P 500 heatmap.",keywords:["Stocks Discovery","following trends","current events","gainers","losers","most active","calendar","dividend","earnings","Seeking Alpha news","S&P 500","heatmap","ark","penny stocks"]},sidebar:"tutorialSidebar",previous:{title:"Dark Pools & Short Data",permalink:"/terminal/menus/stocks/dark-pool-shorts"},next:{title:"Fundamental Analysis",permalink:"/terminal/menus/stocks/fa"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"DIVCAL",id:"divcal",level:3},{value:"Upcoming",id:"upcoming",level:3},{value:"Filings",id:"filings",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{title:"Discovery - Stocks - Menus | OpenBB Terminal Docs"}),"\n",(0,t.jsx)(n.p,{children:"The Discovery menu has functions for upcoming corporate calendar events and stock lists.  Commands in this menu are not ticker-specific and do not require a symbol to be loaded."}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Enter the Discovery menu from the ",(0,t.jsx)(n.code,{children:"/stocks"})," menu by typing ",(0,t.jsx)(n.code,{children:"disc"})," into the Terminal, or through the absolute path:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/stocks/disc\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/94d61da1-a04e-4d03-87bc-1d95443dc851",alt:"Screenshot 2023-11-01 at 9 34 25\u202fAM"})}),"\n",(0,t.jsx)(n.h3,{id:"divcal",children:"DIVCAL"}),"\n",(0,t.jsxs)(n.p,{children:["The dividend calendar will display single dates, and does not provide historical data.  The ",(0,t.jsx)(n.code,{children:"date"})," will be with respect to the ex-dividend date."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/stocks/disc/divcal\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/d99e5973-6a49-441d-bb4d-5a60139f7334",alt:"Screenshot 2023-11-01 at 9 43 46\u202fAM"})}),"\n",(0,t.jsx)(n.h3,{id:"upcoming",children:"Upcoming"}),"\n",(0,t.jsxs)(n.p,{children:["Check the upcoming earnings schedule using, ",(0,t.jsx)(n.code,{children:"upcoming"}),".  The ",(0,t.jsx)(n.code,{children:"limit"})," parameter represents the number of days to look ahead."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/stocks/disc/upcoming --start 2023-11-02 --limit 5\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/99fc4bec-7ffe-4b98-bf98-e791c81aab3a",alt:"Screenshot 2023-11-01 at 9 47 27\u202fAM"})}),"\n",(0,t.jsx)(n.h3,{id:"filings",children:"Filings"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"filings"})," command is the RSS feed of latest filings to the SEC.  The results are printed directly to the screen, or they can be exported with the ",(0,t.jsx)(n.code,{children:"--export"})," command.  To see all the entries from today, add ",(0,t.jsx)(n.code,{children:"--today"})," to the command.  By default, the five most-recent documents will be displayed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/stocks/disc/filings\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Timestamp: 2023-11-01 12:44:49  US/Eastern\nTicker: NVO\nCIK: 353278\nForm Type: 6-K\n6-K - NOVO NORDISK A S (0000353278) (Filer)\nhttps://www.sec.gov/Archives/edgar/data/353278/000117184323006584/0001171843-23-006584-index.htm\n\nTimestamp: 2023-11-01 12:44:49  US/Eastern\nTicker: NONOF\nCIK: 353278\nForm Type: 6-K\n6-K - NOVO NORDISK A S (0000353278) (Filer)\nhttps://www.sec.gov/Archives/edgar/data/353278/000117184323006584/0001171843-23-006584-index.htm\n\nTimestamp: 2023-11-01 12:38:55  US/Eastern\nTicker: None\nCIK: 1715593\nForm Type: 13F-HR\n13F-HR - Csenge Advisory Group (0001715593) (Filer)\nhttps://www.sec.gov/Archives/edgar/data/1715593/000171559323000007/0001715593-23-000007-index.htm\n\nTimestamp: 2023-11-01 12:36:58  US/Eastern\nTicker: HMY\nCIK: 1023514\nForm Type: 6-K\n6-K - HARMONY GOLD MINING CO LTD (0001023514) (Filer)\nhttps://www.sec.gov/Archives/edgar/data/1023514/000162828023035854/0001628280-23-035854-index.htm\n\nTimestamp: 2023-11-01 12:36:58  US/Eastern\nTicker: HGMCF\nCIK: 1023514\nForm Type: 6-K\n6-K - HARMONY GOLD MINING CO LTD (0001023514) (Filer)\nhttps://www.sec.gov/Archives/edgar/data/1023514/000162828023035854/0001628280-23-035854-index.htm\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,n,s)=>{s.d(n,{A:()=>c});s(96540);var t=s(5260),i=s(74848);function c(e){let{title:n}=e;return(0,i.jsx)(t.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},c=t.createContext(i);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);