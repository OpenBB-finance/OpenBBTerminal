"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97997],{52106:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(74848),o=t(28453),a=t(94331);const s={title:"globe",description:"This docusaurus page represents the 'globe' function of OpenBBTerminal which retrieves a DataFrame with global cryptocurrency market data from a specified source; default is CoinGecko.",keywords:["crypto market data","globe function","CoinGecko","coinpaprika","global crypto data"]},c=void 0,i={id:"sdk/reference/crypto/ov/globe",title:"globe",description:"This docusaurus page represents the 'globe' function of OpenBBTerminal which retrieves a DataFrame with global cryptocurrency market data from a specified source; default is CoinGecko.",source:"@site/content/sdk/reference/crypto/ov/globe.md",sourceDirName:"sdk/reference/crypto/ov",slug:"/sdk/reference/crypto/ov/globe",permalink:"/sdk/reference/crypto/ov/globe",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/ov/globe.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"globe",description:"This docusaurus page represents the 'globe' function of OpenBBTerminal which retrieves a DataFrame with global cryptocurrency market data from a specified source; default is CoinGecko.",keywords:["crypto market data","globe function","CoinGecko","coinpaprika","global crypto data"]},sidebar:"tutorialSidebar",previous:{title:"exrates",permalink:"/sdk/reference/crypto/ov/exrates"},next:{title:"hm",permalink:"/sdk/reference/crypto/ov/hm"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"crypto.ov.globe - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(r.p,{children:"Get global crypto market data."}),"\n",(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/sdk_helpers.py#L11",children:"link"}),"]"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.crypto.ov.globe(source: str = "CoinGecko")\n'})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"source"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:'Source of data, by default "CoinGecko"'}),(0,n.jsx)(r.td,{children:"CoinGecko"}),(0,n.jsx)(r.td,{children:"True"})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pd.DataFrame"}),(0,n.jsx)(r.td,{children:"DataFrame with global crypto market data"})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nglobal_market_data = openbb.crypto.ov.globals()\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"To get data from CoinPaprika, use the source parameter:\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'global_market_data = openbb.crypto.ov.globals(source="coinpaprika")\n'})}),"\n",(0,n.jsx)(r.hr,{})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),o=t(74848);function a(e){let{title:r}=e;return(0,o.jsx)(n.A,{children:(0,o.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var n=t(96540);const o={},a=n.createContext(o);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);