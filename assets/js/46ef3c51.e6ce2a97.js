"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55496],{14181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(74848),s=n(28453),o=n(94331);const r={title:"binom",description:"This page is an in-depth guide to using the binom function for binomial option valuation. It details the usage, parameters, and provides examples to assist users.",keywords:["binom","option valuation","binomial option","Strike price","put value","European option","American option","export excel","plot values","volatility"]},l=void 0,a={id:"terminal/reference/stocks/options/binom",title:"binom",description:"This page is an in-depth guide to using the binom function for binomial option valuation. It details the usage, parameters, and provides examples to assist users.",source:"@site/content/terminal/reference/stocks/options/binom.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/binom",permalink:"/terminal/reference/stocks/options/binom",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/binom.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"binom",description:"This page is an in-depth guide to using the binom function for binomial option valuation. It details the usage, parameters, and provides examples to assist users.",keywords:["binom","option valuation","binomial option","Strike price","put value","European option","American option","export excel","plot values","volatility"]},sidebar:"tutorialSidebar",previous:{title:"news",permalink:"/terminal/reference/stocks/news"},next:{title:"calc",permalink:"/terminal/reference/stocks/options/calc"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{title:"stocks/options/binom - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(t.p,{children:"Gives the option value using binomial option valuation"}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"binom [-s STRIKE] [-p] [-e] [-x] [--plot] [-v VOLATILITY]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"strike"}),(0,i.jsx)(t.td,{children:"Strike price for option shown"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"put"}),(0,i.jsx)(t.td,{children:"Value a put instead of a call"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"europe"}),(0,i.jsx)(t.td,{children:"Value a European option instead of an American one"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"export"}),(0,i.jsx)(t.td,{children:"Export an excel spreadsheet with binomial pricing data"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"plot"}),(0,i.jsx)(t.td,{children:"Plot expected ending values"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"volatility"}),(0,i.jsx)(t.td,{children:"Underlying asset annualized volatility. Historical volatility used if not supplied."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 08:40 (\ud83e\udd8b) /stocks/options/ $ binom -s 3100 -e --plot\n\nAMZN call at $3100.00 expiring on 2022-03-25 is worth $136.85\n\n2022 Feb 16, 08:41 (\ud83e\udd8b) /stocks/options/ $ binom -s 3500 -p --plot\n\nAMZN put at $3500.00 expiring on 2022-03-25 is worth $389.72\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154276789-b6786517-3bea-4aa7-9d2e-e6669dd82587.png",alt:"binom"})}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var i=n(5260),s=n(74848);function o(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);