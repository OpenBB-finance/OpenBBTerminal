"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44810],{66675:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=s(74848),r=s(28453),i=s(94331);const a={title:"getdd",description:"Getdd function retrieves top stocks' due diligence from Reddit with the functionality of choosing a limit on the posts, number of prior days to search, and the choice of searching through all flairs or focusing on specific flairs including DD, technical analysis, Catalyst, News, Advice, and Chart.",keywords:["stock's due diligence","Reddit","getdd","limit of posts","number of prior days","search through flairs","flairs: DD, technical analysis, Catalyst, News, Advice, Chart","ATVI free money","PTON: The safest investment","bottom on $FB","Congress Trading & Retail Traders","large market cap stocks"]},o=void 0,d={id:"terminal/reference/stocks/ba/getdd",title:"getdd",description:"Getdd function retrieves top stocks' due diligence from Reddit with the functionality of choosing a limit on the posts, number of prior days to search, and the choice of searching through all flairs or focusing on specific flairs including DD, technical analysis, Catalyst, News, Advice, and Chart.",source:"@site/content/terminal/reference/stocks/ba/getdd.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/getdd",permalink:"/terminal/reference/stocks/ba/getdd",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/getdd.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"getdd",description:"Getdd function retrieves top stocks' due diligence from Reddit with the functionality of choosing a limit on the posts, number of prior days to search, and the choice of searching through all flairs or focusing on specific flairs including DD, technical analysis, Catalyst, News, Advice, and Chart.",keywords:["stock's due diligence","Reddit","getdd","limit of posts","number of prior days","search through flairs","flairs: DD, technical analysis, Catalyst, News, Advice, Chart","ATVI free money","PTON: The safest investment","bottom on $FB","Congress Trading & Retail Traders","large market cap stocks"]},sidebar:"tutorialSidebar",previous:{title:"bullbear",permalink:"/terminal/reference/stocks/ba/bullbear"},next:{title:"headlines",permalink:"/terminal/reference/stocks/ba/headlines"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"stocks/ba/getdd - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"Print top stock's due diligence from other users. [Source: Reddit]"}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"getdd [-l LIMIT] [-d DAYS] [-a]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"limit of posts to retrieve."}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"days"}),(0,n.jsx)(t.td,{children:"number of prior days to look for."}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"all"}),(0,n.jsx)(t.td,{children:"search through all flairs (apart from Yolo and Meme), otherwise we focus on specific flairs: DD, technical analysis, Catalyst, News, Advice, Chart"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 10:18 (\ud83e\udd8b) /stocks/ba/ $ getdd -d 50\n2022-02-15 17:51:11 - $ATVI free money even if MSFT deal falls through.\nhttps://old.reddit.com/r/wallstreetbets/comments/st8s1i/atvi_free_money_even_if_msft_deal_falls_through/\n\n2022-02-10 05:10:31 - PTON: The safest investment you can make\nhttps://old.reddit.com/r/stocks/comments/soycgc/pton_the_safest_investment_you_can_make/\n\n2022-02-09 01:47:49 - Why only retards are selling the (near) bottom on $FB and are about to get metacucked \ud83d\ude4a\nhttps://old.reddit.com/r/wallstreetbets/comments/so19al/why_only_retards_are_selling_the_near_bottom_on/)\n\n2022-02-08 02:53:43 - If You Cannot Beat Them, Join Them - Congress Trading & Retail Traders\nhttps://old.reddit.com/r/wallstreetbets/comments/sn90qs/if_you_cannot_beat_them_join_them_congress/\n\n2022-02-03 20:01:06 - Thoughts on only buying large market cap stocks (Top 100, 100 billion market cap+, and significant index weighting)?\nhttps://old.reddit.com/r/stocks/comments/sjsqhu/thoughts_on_only_buying_large_market_cap_stocks/\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(5260),r=s(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);