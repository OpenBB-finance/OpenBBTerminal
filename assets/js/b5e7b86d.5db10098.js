"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43480],{82846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=n(74848),s=n(28453),i=n(94331);const c={title:"fe",description:"This page presents the fe function of the OpenBB Econometrics Module, explaining its parameters and their functionality. Here, users can find about entity effects, time effects, and regressors.",keywords:["OpenBB Econometrics","fe function","entity effects","time effects","regressors","Fixed Effects","PanelOLS model","regression model"]},d=void 0,o={id:"sdk/reference/econometrics/fe",title:"fe",description:"This page presents the fe function of the OpenBB Econometrics Module, explaining its parameters and their functionality. Here, users can find about entity effects, time effects, and regressors.",source:"@site/content/sdk/reference/econometrics/fe.md",sourceDirName:"sdk/reference/econometrics",slug:"/sdk/reference/econometrics/fe",permalink:"/sdk/reference/econometrics/fe",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/econometrics/fe.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"fe",description:"This page presents the fe function of the OpenBB Econometrics Module, explaining its parameters and their functionality. Here, users can find about entity effects, time effects, and regressors.",keywords:["OpenBB Econometrics","fe function","entity effects","time effects","regressors","Fixed Effects","PanelOLS model","regression model"]},sidebar:"tutorialSidebar",previous:{title:"fdols",permalink:"/sdk/reference/econometrics/fdols"},next:{title:"get_regression_data",permalink:"/sdk/reference/econometrics/get_regression_data"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"econometrics.fe - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"When effects are correlated with the regressors the RE and BE estimators are not consistent."}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L351",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.econometrics.fe(Y: pd.DataFrame, X: pd.DataFrame, entity_effects: bool = False, time_effects: bool = False)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regression_variables"}),(0,r.jsx)(t.td,{children:"list"}),(0,r.jsxs)(t.td,{children:["The regressions variables entered where the first variable is",(0,r.jsx)("br",{}),"the dependent variable."]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"dict"}),(0,r.jsx)(t.td,{children:"A dictionary containing the datasets."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"entity_effects"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to include entity effects"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"time_effects"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to include time effects"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tuple[DataFrame, Any, List[Any], Any]"}),(0,r.jsxs)(t.td,{children:["The dataset used,",(0,r.jsx)("br",{}),"Dependent variable,",(0,r.jsx)("br",{}),"Independent variable,",(0,r.jsx)("br",{}),"PanelOLS model with Fixed Effects"]})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);