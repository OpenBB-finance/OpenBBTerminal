"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46806],{20205:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=s(74848),r=s(28453),i=s(94331);const l={title:"github",description:"The page guides users on how to set a GitHub API key using the OpenBBTerminal. It provides explanations about the parameters involved and gives a brief glimpse into the possible return values. The page also includes code examples as useful guidance.",keywords:["github","API key","key set","terminal environment variables","Jupyter notebook session","key persistence"]},a=void 0,d={id:"sdk/reference/keys/github",title:"github",description:"The page guides users on how to set a GitHub API key using the OpenBBTerminal. It provides explanations about the parameters involved and gives a brief glimpse into the possible return values. The page also includes code examples as useful guidance.",source:"@site/content/sdk/reference/keys/github.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/github",permalink:"/sdk/reference/keys/github",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/keys/github.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"github",description:"The page guides users on how to set a GitHub API key using the OpenBBTerminal. It provides explanations about the parameters involved and gives a brief glimpse into the possible return values. The page also includes code examples as useful guidance.",keywords:["github","API key","key set","terminal environment variables","Jupyter notebook session","key persistence"]},sidebar:"tutorialSidebar",previous:{title:"get_keys_info",permalink:"/sdk/reference/keys/get_keys_info"},next:{title:"glassnode",permalink:"/sdk/reference/keys/glassnode"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"keys.github - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Set GitHub key."}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L2148",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.keys.github(key: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"key"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"API key"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"persist"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsxs)(t.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,n.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,n.jsx)("br",{}),"By default, False."]}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"show_output"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Display status string or not. By default, False."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Status of key set"})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.keys.github(key="example_key")\n'})}),"\n",(0,n.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(5260),r=s(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);