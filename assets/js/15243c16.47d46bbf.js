"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85352],{49905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var s=r(74848),n=r(28453),i=r(94331);const d={title:"redditsent",description:"Discover how to use the redditsent function to perform sentiment analysis on Reddit about a specific ticker or company. Learn to adjust search parameters like sorting type, subreddits, post limit, time period, and more for a comprehensive Reddit search.",keywords:["redditsent","sentiment analysis","Reddit","search sorting","company search","subreddits","posts limit","time period","full search","graphic display","table of sentiment values"]},c=void 0,a={id:"terminal/reference/stocks/ba/redditsent",title:"redditsent",description:"Discover how to use the redditsent function to perform sentiment analysis on Reddit about a specific ticker or company. Learn to adjust search parameters like sorting type, subreddits, post limit, time period, and more for a comprehensive Reddit search.",source:"@site/content/terminal/reference/stocks/ba/redditsent.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/redditsent",permalink:"/terminal/reference/stocks/ba/redditsent",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/redditsent.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"redditsent",description:"Discover how to use the redditsent function to perform sentiment analysis on Reddit about a specific ticker or company. Learn to adjust search parameters like sorting type, subreddits, post limit, time period, and more for a comprehensive Reddit search.",keywords:["redditsent","sentiment analysis","Reddit","search sorting","company search","subreddits","posts limit","time period","full search","graphic display","table of sentiment values"]},sidebar:"tutorialSidebar",previous:{title:"queries",permalink:"/terminal/reference/stocks/ba/queries"},next:{title:"regions",permalink:"/terminal/reference/stocks/ba/regions"}},o={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"stocks/ba/redditsent - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Determine general Reddit sentiment about a ticker. [Source: Reddit]"}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"redditsent [-s {relevance,hot,top,new,comments}] [-c COMPANY] [--subreddits SUBREDDITS] [-l LIMIT] [-t {hour,day,week,month,year,all}] [--full] [-g] [-d]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sort"}),(0,s.jsx)(t.td,{children:"search sorting type"}),(0,s.jsx)(t.td,{children:"relevance"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"relevance, hot, top, new, comments"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"company"}),(0,s.jsx)(t.td,{children:"explicit name of company to search for, will override ticker symbol"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"subreddits"}),(0,s.jsx)(t.td,{children:"comma-separated list of subreddits to search"}),(0,s.jsx)(t.td,{children:"all"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"how many posts to gather from each subreddit"}),(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"time"}),(0,s.jsx)(t.td,{children:"time period to get posts from -- all, year, month, week, or day; defaults to week"}),(0,s.jsx)(t.td,{children:"week"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"hour, day, week, month, year, all"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"full_search"}),(0,s.jsx)(t.td,{children:"enable comprehensive search"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"graphic"}),(0,s.jsx)(t.td,{children:"display graphic"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"display"}),(0,s.jsx)(t.td,{children:"Print table of sentiment values"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"txt\nredditsent -c Google --subreddits tech,stocks --full\nSearching through subreddits for posts.\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 2/2 [00:0100:00,  1.84it/s]\nAnalyzing each post...\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 10/10 [00:0400:00,  2.07it/s]\nSentiment Analysis for Google is 0.7552\n"})}),"\n",(0,s.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(5260),n=r(74848);function i(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var s=r(96540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);