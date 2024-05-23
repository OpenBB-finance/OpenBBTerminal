"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40214],{55049:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=n(74848),a=n(28453),r=n(94331);const c={title:"cnews",description:"cnews page provides an interface to access customized news from various sectors such as crypto, buybacks, politics, healthcare, and many more, sourced from Seeking Alpha. Users can limit the number of news displayed and select specific news type for display.",keywords:["cnews","customized news","Seeking Alpha","top-news","crypto","issuance","buybacks","commodities","spacs","politics","consumer","energy","financials","healthcare","mlps","reits","technology","stock repurchase program"]},o=void 0,i={id:"terminal/reference/stocks/disc/cnews",title:"cnews",description:"cnews page provides an interface to access customized news from various sectors such as crypto, buybacks, politics, healthcare, and many more, sourced from Seeking Alpha. Users can limit the number of news displayed and select specific news type for display.",source:"@site/content/terminal/reference/stocks/disc/cnews.md",sourceDirName:"terminal/reference/stocks/disc",slug:"/terminal/reference/stocks/disc/cnews",permalink:"/terminal/reference/stocks/disc/cnews",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/disc/cnews.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"cnews",description:"cnews page provides an interface to access customized news from various sectors such as crypto, buybacks, politics, healthcare, and many more, sourced from Seeking Alpha. Users can limit the number of news displayed and select specific news type for display.",keywords:["cnews","customized news","Seeking Alpha","top-news","crypto","issuance","buybacks","commodities","spacs","politics","consumer","energy","financials","healthcare","mlps","reits","technology","stock repurchase program"]},sidebar:"tutorialSidebar",previous:{title:"asc",permalink:"/terminal/reference/stocks/disc/asc"},next:{title:"divcal",permalink:"/terminal/reference/stocks/disc/divcal"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const s={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{title:"stocks/disc/cnews - Reference | OpenBB Terminal Docs"}),"\n",(0,t.jsx)(s.p,{children:"Customized news. [Source: Seeking Alpha]"}),"\n",(0,t.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"cnews [-t {top-news,on-the-move,market-pulse,notable-calls,buybacks,commodities,crypto,issuance,global,guidance,ipos,spacs,politics,m-a,consumer,energy,financials,healthcare,mlps,reits,technology}] [-l LIMIT]\n"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default"}),(0,t.jsx)(s.th,{children:"Optional"}),(0,t.jsx)(s.th,{children:"Choices"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"s_type"}),(0,t.jsx)(s.td,{children:"number of news to display"}),(0,t.jsx)(s.td,{children:"Top-News"}),(0,t.jsx)(s.td,{children:"True"}),(0,t.jsx)(s.td,{children:"top-news, on-the-move, market-pulse, notable-calls, buybacks, commodities, crypto, issuance, global, guidance, ipos, spacs, politics, m-a, consumer, energy, financials, healthcare, mlps, reits, technology"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"limit"}),(0,t.jsx)(s.td,{children:"limit of news to display"}),(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"True"}),(0,t.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"2022 Feb 16, 03:52 (\ud83e\udd8b) /stocks/disc/ $ cnews\n2022-02-15 19:04:21 - 3800509 - ViacomCBS earnings call: A flood of content feeding transformation to Paramount\nhttps://seekingalpha.com/news/3800509-viacomcbs-earnings-call-a-flood-of-content-feeding-transformation-to-paramount\n\n2022-02-15 16:26:46 - 3800415 - ViacomCBS rebranding company as Paramount Global\nhttps://seekingalpha.com/news/3800415-viacomcbs-rebranding-company-as-paramount-global\n\n2022-02-15 16:25:33 - 3800411 - Airbnb stock soars after guidance comes in strong\nhttps://seekingalpha.com/news/3800411-airbnb-stock-soars-after-guidance-comes-in-strong\n\n2022-02-15 16:25:05 - 3800410 - ViacomCBS rebranding company as Paramount Global\nhttps://seekingalpha.com/news/3800410-viacomcbs-rebranding-company-as-paramount-global\n\n2022-02-15 16:14:45 - 3800380 - ViacomCBS dips as profits dip despite revenue beat, streaming gains\nhttps://seekingalpha.com/news/3800380-viacomcbs-dips-as-profits-dip-despite-revenue-beat-streaming-gains\n\n2022-02-15 16:14:20 - 3800378 - Wynn Resorts trades lower after earnings, Encore Boston sale\nhttps://seekingalpha.com/news/3800378-wynn-resorts-trades-lower-after-earnings-encore-boston-sale\n\n2022 Feb 16, 03:52 (\ud83e\udd8b) /stocks/disc/ $ cnews -t buybacks\n2022-02-15 16:24:36 - 3800409 - DHI launches new $15M in stock repurchase program\nhttps://seekingalpha.com/news/3800409-dhi-launches-new-15m-in-stock-repurchase-program\n\n2022-02-15 16:20:21 - 3800395 - Upstart stock soars after Q4 earnings beat, strong guidance, stock buyback\nhttps://seekingalpha.com/news/3800395-upstart-stock-soars-after-q4-earnings-beat-strong-guidance-stock-buyback\n\n2022-02-15 16:17:07 - 3800387 - Upstart announces $400M share repurchase program\nhttps://seekingalpha.com/news/3800387-upstart-announces-400m-share-repurchase-program\n\n2022-02-15 08:04:55 - 3800026 - GCM Grosvenor reports Q4 results, increases stock repurchase plan by $20M\nhttps://seekingalpha.com/news/3800026-gcm-grosvenor-reports-q4-results-increases-stock-repurchase-plan-by-20m\n\n2022-02-15 08:04:08 - 3800020 - Middlefield Banc declares $0.17 dividend; expands stock buyback plan\nhttps://seekingalpha.com/news/3800020-middlefield-banc-corp-declares-0_17-dividend\n\n2022-02-15 07:26:40 - 3799989 - LGI Homes expands stock repurchase program by $200M\nhttps://seekingalpha.com/news/3799989-lgi-homes-expands-stock-repurchase-program-by-200m\n"})}),"\n",(0,t.jsx)(s.hr,{})]})}function m(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},94331:(e,s,n)=>{n.d(s,{A:()=>r});n(96540);var t=n(5260),a=n(74848);function r(e){let{title:s}=e;return(0,a.jsx)(t.A,{children:(0,a.jsx)("title",{children:s})})}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var t=n(96540);const a={},r=t.createContext(a);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);