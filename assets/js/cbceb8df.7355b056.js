"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94968],{59705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=r(74848),n=r(28453),o=r(94331);const s={title:"export",description:"Page providing a guide on how to use the 'export' feature of a data-focused application, which allows exporting datasets to Excel or CSV formats.",keywords:["export data guide","export dataset","export to Excel","export to CSV","data-focused application","data exporting","dataset handling","dataset operation","automation"]},i=void 0,d={id:"terminal/reference/forecast/export",title:"export",description:"Page providing a guide on how to use the 'export' feature of a data-focused application, which allows exporting datasets to Excel or CSV formats.",source:"@site/content/terminal/reference/forecast/export.md",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/export",permalink:"/terminal/reference/forecast/export",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forecast/export.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"export",description:"Page providing a guide on how to use the 'export' feature of a data-focused application, which allows exporting datasets to Excel or CSV formats.",keywords:["export data guide","export dataset","export to Excel","export to CSV","data-focused application","data exporting","dataset handling","dataset operation","automation"]},sidebar:"tutorialSidebar",previous:{title:"expo",permalink:"/terminal/reference/forecast/expo"},next:{title:"linregr",permalink:"/terminal/reference/forecast/linregr"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{title:"forecast /export - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(t.p,{children:"Export dataset to Excel"}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"export [-t {xlsx,csv}] [-d {}]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"type"}),(0,a.jsx)(t.td,{children:"The file type you wish to export to"}),(0,a.jsx)(t.td,{children:"xlsx"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"xlsx, csv"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"target_dataset"}),(0,a.jsx)(t.td,{children:"The name of the dataset you want to select"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"(\ud83e\udd8b) /forecast/ $ load aapl\n\n(\ud83e\udd8b) /forecast/ $ ema aapl\nSuccessfully added 'EMA_10' to 'aapl' dataset\n\n(\ud83e\udd8b) /forecast/ $ export aapl\nSaved file: .../OpenBBTerminal/exports/forecast/aapl_20220711_151219.xlsx\n"})}),"\n",(0,a.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var a=r(5260),n=r(74848);function o(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var a=r(96540);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);