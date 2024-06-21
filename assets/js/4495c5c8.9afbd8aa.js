"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45900],{38887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(74848),s=t(28453),c=t(94331);const o={title:"events",description:"Implement our economic calendar for selected countries and specific dates functionality in your application using OpenBB. Use it to analyze global economic trends or forecast market movements.",keywords:["economic calendar","financial market events","global economy","market analysis","economic forecast","economic events","countries economy","economic data retrieval","market trends","predictive analytics","economic indicators"]},i=void 0,a={id:"sdk/reference/economy/events",title:"events",description:"Implement our economic calendar for selected countries and specific dates functionality in your application using OpenBB. Use it to analyze global economic trends or forecast market movements.",source:"@site/content/sdk/reference/economy/events.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/events",permalink:"/sdk/reference/economy/events",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/economy/events.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,frontMatter:{title:"events",description:"Implement our economic calendar for selected countries and specific dates functionality in your application using OpenBB. Use it to analyze global economic trends or forecast market movements.",keywords:["economic calendar","financial market events","global economy","market analysis","economic forecast","economic events","countries economy","economic data retrieval","market trends","predictive analytics","economic indicators"]},sidebar:"tutorialSidebar",previous:{title:"currencies",permalink:"/sdk/reference/economy/currencies"},next:{title:"fred",permalink:"/sdk/reference/economy/fred"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{title:"economy.events - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Get economic calendar for countries between specified dates"}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/nasdaq_model.py#L21",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'openbb.economy.events(countries: Union[List[str], str] = "", start_date: Optional[str] = None, end_date: Optional[str] = None)\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"countries"}),(0,r.jsx)(n.td,{children:"[List[str],str]"}),(0,r.jsx)(n.td,{children:"List of countries to include in calendar.  Empty returns all"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"start_date"}),(0,r.jsx)(n.td,{children:"Optional[str]"}),(0,r.jsx)(n.td,{children:"Start date for calendar"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"end_date"}),(0,r.jsx)(n.td,{children:"Optional[str]"}),(0,r.jsx)(n.td,{children:"End date for calendar"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"Economic calendar"})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Get todays economic calendar for the United States"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\ncalendar = openbb.economy.events("United States")\n'})}),"\n",(0,r.jsx)(n.p,{children:"To get multiple countries for a given date, pass the same start and end date as well as\na list of countries"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'calendars = openbb.economy.events(["United States","Canada"], start_date="2022-11-18", end_date="2022-11-18")\n'})}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var r=t(5260),s=t(74848);function c(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);