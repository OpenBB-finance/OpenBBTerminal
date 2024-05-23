"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96209],{88576:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=s(74848),r=s(28453),i=s(94331);const c={title:"mykeys",description:"This documentation page offers detailed instructions on how to get currently set API keys using the OpenBB finance mykeys function. Includes parameter descriptions, return types, and usage examples.",keywords:["API keys","OpenBB finance","mykeys function","Parameters","Return types","Examples"]},d=void 0,a={id:"sdk/reference/keys/mykeys",title:"mykeys",description:"This documentation page offers detailed instructions on how to get currently set API keys using the OpenBB finance mykeys function. Includes parameter descriptions, return types, and usage examples.",source:"@site/content/sdk/reference/keys/mykeys.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/mykeys",permalink:"/sdk/reference/keys/mykeys",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/keys/mykeys.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"mykeys",description:"This documentation page offers detailed instructions on how to get currently set API keys using the OpenBB finance mykeys function. Includes parameter descriptions, return types, and usage examples.",keywords:["API keys","OpenBB finance","mykeys function","Parameters","Return types","Examples"]},sidebar:"tutorialSidebar",previous:{title:"messari",permalink:"/sdk/reference/keys/messari"},next:{title:"news",permalink:"/sdk/reference/keys/news"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{title:"keys.mykeys - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(n.p,{children:"Get currently set API keys."}),"\n",(0,t.jsxs)(n.p,{children:["Source Code: [",(0,t.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L241",children:"link"}),"]"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"openbb.keys.mykeys(show: bool = False)\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Optional"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"show"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsxs)(n.td,{children:["Flag to choose whether to show actual keys or not.",(0,t.jsx)("br",{}),"By default, False."]}),(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"True"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pd.DataFrame"}),(0,t.jsx)(n.td,{children:"Currents keys"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nopenbb.keys.mykeys()\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Key\n          API\n BITQUERY_KEY  *******\n      CMC_KEY  *******\nCOINGLASS_KEY  *******\n"})}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(5260),r=s(74848);function i(e){let{title:n}=e;return(0,r.jsx)(t.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(96540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);