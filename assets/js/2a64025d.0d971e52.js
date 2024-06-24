"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10795],{35920:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=s(74848),r=s(28453),d=s(94331);const o={title:"glassnode",description:"This documentation page provides a detailed guide on how to set the Glassnode API key using the openbb.keys.glassnode method in the OpenBB Python library. It includes a breakdown of parameters, return values, and a code example for easy comprehension.",keywords:["Glassnode","API key","Environment variable","Jupyter notebook"]},a=void 0,i={id:"sdk/reference/keys/glassnode",title:"glassnode",description:"This documentation page provides a detailed guide on how to set the Glassnode API key using the openbb.keys.glassnode method in the OpenBB Python library. It includes a breakdown of parameters, return values, and a code example for easy comprehension.",source:"@site/content/sdk/reference/keys/glassnode.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/glassnode",permalink:"/sdk/reference/keys/glassnode",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/keys/glassnode.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"glassnode",description:"This documentation page provides a detailed guide on how to set the Glassnode API key using the openbb.keys.glassnode method in the OpenBB Python library. It includes a breakdown of parameters, return values, and a code example for easy comprehension.",keywords:["Glassnode","API key","Environment variable","Jupyter notebook"]},sidebar:"tutorialSidebar",previous:{title:"github",permalink:"/sdk/reference/keys/github"},next:{title:"iex",permalink:"/sdk/reference/keys/iex"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.A,{title:"keys.glassnode - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(n.p,{children:"Set Glassnode key."}),"\n",(0,t.jsxs)(n.p,{children:["Source Code: [",(0,t.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1780",children:"link"}),"]"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"openbb.keys.glassnode(key: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Optional"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"key"}),(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"API key"}),(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"persist"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsxs)(n.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,t.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,t.jsx)("br",{}),"By default, False."]}),(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"show_output"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"Display status string or not. By default, False."}),(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"Status of key set"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.keys.glassnode(key="example_key")\n'})}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,n,s)=>{s.d(n,{A:()=>d});s(96540);var t=s(5260),r=s(74848);function d(e){let{title:n}=e;return(0,r.jsx)(t.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const r={},d=t.createContext(r);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);