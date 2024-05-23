"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4477],{16207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(74848),i=n(28453),r=n(94331);const o={title:"zlma",description:"The ZLEMA (Zero Lag Exponential Moving Average) is a technical indicator developed by John Ehlers and Ric Way. This documentation page explains how to use it, focusing on implementation with Python and specifying its parameters including window lengths (N_LENGTH) and offset (N_OFFSET).",keywords:["ZLEMA","exponential moving average","de-lagged data","EMA","zero lag exponential moving average","John Ehlers","Ric Way","zlma","N_LENGTH","N_OFFSET","parameters"]},s=void 0,l={id:"terminal/reference/crypto/ta/zlma",title:"zlma",description:"The ZLEMA (Zero Lag Exponential Moving Average) is a technical indicator developed by John Ehlers and Ric Way. This documentation page explains how to use it, focusing on implementation with Python and specifying its parameters including window lengths (N_LENGTH) and offset (N_OFFSET).",source:"@site/content/terminal/reference/crypto/ta/zlma.md",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/zlma",permalink:"/terminal/reference/crypto/ta/zlma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ta/zlma.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"zlma",description:"The ZLEMA (Zero Lag Exponential Moving Average) is a technical indicator developed by John Ehlers and Ric Way. This documentation page explains how to use it, focusing on implementation with Python and specifying its parameters including window lengths (N_LENGTH) and offset (N_OFFSET).",keywords:["ZLEMA","exponential moving average","de-lagged data","EMA","zero lag exponential moving average","John Ehlers","Ric Way","zlma","N_LENGTH","N_OFFSET","parameters"]},sidebar:"tutorialSidebar",previous:{title:"wma",permalink:"/terminal/reference/crypto/ta/wma"},next:{title:"aprtoapy",permalink:"/terminal/reference/crypto/tools/aprtoapy"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{title:"crypto/ta/zlma - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(t.p,{children:'The zero lag exponential moving average (ZLEMA) indicator was created by John Ehlers and Ric Way. The idea is do a regular exponential moving average (EMA) calculation but on a de-lagged data instead of doing it on the regular data. Data is de-lagged by removing the data from "lag" days ago thus removing (or attempting to) the cumulative effect of the moving average.'}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"zlma [-l N_LENGTH] [-o N_OFFSET]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_length"}),(0,a.jsx)(t.td,{children:"Window lengths. Multiple values indicated as comma separated values."}),(0,a.jsx)(t.td,{children:"20"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_offset"}),(0,a.jsx)(t.td,{children:"offset"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"range(0, 100)"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154312786-bc60268b-9da9-4fd9-bed6-fc95f5560075.png",alt:"zlma"})}),"\n",(0,a.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(5260),i=n(74848);function r(e){let{title:t}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);