"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25353],{36605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=t(74848),i=t(28453),r=t(94331);const a={title:"Data connectors",sidebar_position:3,description:"Access your data connectors from OpenBB Terminal Pro inside OpenBB Add-in for Excel.",keywords:["Microsoft Excel","Add-in","Advanced","Data connectors","BYOD","Bring your own data"]},s=void 0,c={id:"excel/data-connectors",title:"Data connectors",description:"Access your data connectors from OpenBB Terminal Pro inside OpenBB Add-in for Excel.",source:"@site/content/excel/data-connectors.md",sourceDirName:"excel",slug:"/excel/data-connectors",permalink:"/excel/data-connectors",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/data-connectors.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,sidebarPosition:3,frontMatter:{title:"Data connectors",sidebar_position:3,description:"Access your data connectors from OpenBB Terminal Pro inside OpenBB Add-in for Excel.",keywords:["Microsoft Excel","Add-in","Advanced","Data connectors","BYOD","Bring your own data"]},sidebar:"tutorialSidebar",previous:{title:"Data slicer",permalink:"/excel/data-slicer"},next:{title:"Templates",permalink:"/excel/templates"}},d={},l=[{value:"Single widget",id:"single-widget",level:2},{value:"Own backend",id:"own-backend",level:2},{value:"Native integrations",id:"native-integrations",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{title:"Data connectors | OpenBB Add-in for Excel Docs"}),"\n",(0,o.jsxs)(n.p,{children:["OpenBB Add-In for Excel allows you to access your ",(0,o.jsx)(n.a,{href:"https://docs.openbb.co/pro/data-connectors",children:"data connectors"})," from OpenBB Terminal Pro inside Microsoft Excel. This can be done using the ",(0,o.jsx)(n.a,{href:"https://docs.openbb.co/excel/reference/byod",children:"OBB.BYOD"})," function."]}),"\n",(0,o.jsx)(n.h2,{id:"single-widget",children:(0,o.jsx)(n.a,{href:"https://docs.openbb.co/pro/data-connectors/single-widget",children:"Single widget"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-excel",children:'=OBB.BYOD("widget_name")\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Make sure your widget is setup in the OpenBB Terminal Pro."}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"own-backend",children:(0,o.jsx)(n.a,{href:"https://docs.openbb.co/pro/data-connectors/integrate-your-own-backend",children:"Own backend"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-excel",children:'=OBB.BYOD("widget_name","backend_name")\n'})}),"\n",(0,o.jsx)(n.p,{children:"If your backend supports it is possible to pass a symbol, a date or other optional parameters:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-excel",children:'=OBB.BYOD("widget_name","backend_name","my_symbol","YYYY-MM-DD",{"param1":"value1","param2":"value2", ...})\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The easiest way to pass optional parameters is to write them into cells and reference them in the function. For example, ",(0,o.jsx)(n.code,{children:"=OBB.BYOD(...,A1:B2)"}),' where A1 contains "param1", B1 "value1", A2 "param2", B2 "value2" and so on.']})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Make sure your backend's CORS settings allow requests coming from ",(0,o.jsx)(n.a,{href:"https://excel.openbb.co",children:"https://excel.openbb.co"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Requests via HTTP will be blocked by Excel. So if you are using the Add-in for Excel on Mac or Office on the web with Safari browser you need to run your backend via HTTPS."}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"native-integrations",children:(0,o.jsx)(n.a,{href:"https://docs.openbb.co/pro/data-connectors#native-integrations",children:"Native integrations"})}),"\n",(0,o.jsx)(n.p,{children:"Supported native integrations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"database"}),"\n",(0,o.jsx)(n.li,{children:"snowflake"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-excel",children:'=OBB.BYOD("widget_name","native_integration")\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Make sure your OpenBB Data Connector is properly configured and the widget is setup in the OpenBB Terminal Pro."}),"\n",(0,o.jsx)(n.li,{children:"Native integrations are available only for Excel on the web or Windows."}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(5260),i=t(74848);function r(e){let{title:n}=e;return(0,i.jsx)(o.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);