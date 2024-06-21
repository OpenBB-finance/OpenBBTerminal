"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[353],{74514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=r(74848),s=r(28453),i=r(94331);const d={title:"re",description:"This page provides a detailed look into the Random Effects Model developed by OpenBB. It covers the parameters involved such as regression variables and data sets, the return type, and a link is provided to access the source code, making it a valuable resource for any data scientist interested in econometrics.",keywords:["random effects model","regression variables","data science","Python code","econometrics","pooled OLS model","independent variable","dependent variable","dataset","github"]},a=void 0,o={id:"sdk/reference/econometrics/re",title:"re",description:"This page provides a detailed look into the Random Effects Model developed by OpenBB. It covers the parameters involved such as regression variables and data sets, the return type, and a link is provided to access the source code, making it a valuable resource for any data scientist interested in econometrics.",source:"@site/content/sdk/reference/econometrics/re.md",sourceDirName:"sdk/reference/econometrics",slug:"/sdk/reference/econometrics/re",permalink:"/sdk/reference/econometrics/re",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/econometrics/re.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,frontMatter:{title:"re",description:"This page provides a detailed look into the Random Effects Model developed by OpenBB. It covers the parameters involved such as regression variables and data sets, the return type, and a link is provided to access the source code, making it a valuable resource for any data scientist interested in econometrics.",keywords:["random effects model","regression variables","data science","Python code","econometrics","pooled OLS model","independent variable","dependent variable","dataset","github"]},sidebar:"tutorialSidebar",previous:{title:"pols",permalink:"/sdk/reference/econometrics/pols"},next:{title:"root",permalink:"/sdk/reference/econometrics/root"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"econometrics.re - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"The random effects model is virtually identical to the pooled OLS model except that is accounts for the"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L276",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.econometrics.re(Y: pd.DataFrame, X: pd.DataFrame)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regression_variables"}),(0,n.jsx)(t.td,{children:"list"}),(0,n.jsxs)(t.td,{children:["The regressions variables entered where the first variable is",(0,n.jsx)("br",{}),"the dependent variable."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"dict"}),(0,n.jsx)(t.td,{children:"A dictionary containing the datasets."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tuple[DataFrame, Any, List[Any], Any]"}),(0,n.jsxs)(t.td,{children:["The dataset used,",(0,n.jsx)("br",{}),"Dependent variable,",(0,n.jsx)("br",{}),"Independent variable,",(0,n.jsx)("br",{}),"RandomEffects model"]})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);