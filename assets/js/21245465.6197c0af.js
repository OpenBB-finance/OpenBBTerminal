"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72706],{77660:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(74848),t=n(28453),i=n(94331);const o={title:"news",description:"This documentation page provides detailed information on how to retrieve news articles using the OpenBBTerminal's function 'openbb.news'. The function allows users to specify search terms, sources, and sorting parameters. Examples of using the function are also provided.",keywords:["News","Feedparser","Source Code","openbb news","News Article Search"]},d=void 0,c={id:"sdk/reference/news",title:"news",description:"This documentation page provides detailed information on how to retrieve news articles using the OpenBBTerminal's function 'openbb.news'. The function allows users to specify search terms, sources, and sorting parameters. Examples of using the function are also provided.",source:"@site/content/sdk/reference/news.md",sourceDirName:"sdk/reference",slug:"/sdk/reference/news",permalink:"/sdk/reference/news",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/news.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"news",description:"This documentation page provides detailed information on how to retrieve news articles using the OpenBBTerminal's function 'openbb.news'. The function allows users to specify search terms, sources, and sorting parameters. Examples of using the function are also provided.",keywords:["News","Feedparser","Source Code","openbb news","News Article Search"]},sidebar:"tutorialSidebar",previous:{title:"walert",permalink:"/sdk/reference/keys/walert"},next:{title:"assets",permalink:"/sdk/reference/portfolio/alloc/assets"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"news - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(s.p,{children:"Get news for a given term and source. [Source: Feedparser]"}),"\n",(0,r.jsxs)(s.p,{children:["Source Code: [",(0,r.jsx)(s.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/feedparser_model.py#L13",children:"link"}),"]"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'openbb.news(term: str = "", sources: str = "", sort: str = "published")\n'})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Optional"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"term"}),(0,r.jsx)(s.td,{children:"str"}),(0,r.jsx)(s.td,{children:"term to search on the news articles"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"True"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sources"}),(0,r.jsx)(s.td,{children:"str"}),(0,r.jsx)(s.td,{children:"sources to exclusively show news from (separated by commas)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"True"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sort"}),(0,r.jsx)(s.td,{children:"str"}),(0,r.jsx)(s.td,{children:"the column to sort by"}),(0,r.jsx)(s.td,{children:"published"}),(0,r.jsx)(s.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"pd.DataFrame"}),(0,r.jsx)(s.td,{children:"term to search on the news articles"})]})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nopenbb.news()\n"})}),"\n",(0,r.jsx)(s.hr,{})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,s,n)=>{n.d(s,{A:()=>i});n(96540);var r=n(5260),t=n(74848);function i(e){let{title:s}=e;return(0,t.jsx)(r.A,{children:(0,t.jsx)("title",{children:s})})}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var r=n(96540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);