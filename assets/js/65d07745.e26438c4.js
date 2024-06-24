"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18187],{49487:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>a,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=t(74848),d=t(28453),s=t(18228),l=t(19365);const i={title:"Price Performance",description:"Get price performance data for a given stock"},a=void 0,c={id:"platform/data_models/PricePerformance",title:"Price Performance",description:"Get price performance data for a given stock",source:"@site/content/platform/data_models/PricePerformance.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/PricePerformance",permalink:"/platform/data_models/PricePerformance",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/PricePerformance.md",tags:[],version:"current",frontMatter:{title:"Price Performance",description:"Get price performance data for a given stock"},sidebar:"tutorialSidebar",previous:{title:"Projections",permalink:"/platform/data_models/PROJECTIONS"},next:{title:"Price Target",permalink:"/platform/data_models/PriceTarget"}},h={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(r.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Model name"}),(0,n.jsx)(r.th,{children:"Parameters class"}),(0,n.jsx)(r.th,{children:"Data class"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"PricePerformance"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"PricePerformanceQueryParams"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"PricePerformanceData"})})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb_core.provider.standard_models. import (\nPricePerformanceData,\nPricePerformanceQueryParams,\n)\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['finviz', 'fmp']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: finviz, fmp."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"finviz",label:"finviz",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['finviz', 'fmp']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: finviz, fmp."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['finviz', 'fmp']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: finviz, fmp."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_day"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-day return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"wtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Week to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_week"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-week return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Month to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"qtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Quarter to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"six_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Six-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ytd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Year to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"two_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Two-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"four_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Four-year"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"five_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Five-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ten_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Ten-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Return from the beginning of the time series."})]})]})]})}),(0,n.jsx)(l.A,{value:"finviz",label:"finviz",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The ticker symbol."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_day"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-day return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"wtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Week to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_week"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-week return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Month to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"qtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Quarter to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"six_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Six-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ytd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Year to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"two_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Two-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"four_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Four-year"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"five_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Five-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ten_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Ten-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Return from the beginning of the time series."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volatility_week"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-week realized volatility, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volatility_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-month realized volatility, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"price"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Last Price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Current volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"average_volume"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Average daily volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"relative_volume"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Relative volume as a ratio of current volume to average volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"analyst_recommendation"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The analyst consensus, on a scale of 1-5 where 1 is a buy and 5 is a sell."})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The ticker symbol."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_day"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-day return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"wtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Week to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_week"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-week return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Month to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"qtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Quarter to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"six_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Six-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ytd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Year to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"two_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Two-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"four_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Four-year"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"five_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Five-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ten_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Ten-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Return from the beginning of the time series."})]})]})]})})]})]})}function j(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(34164);const d={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(d.tabItem,l),hidden:t,children:r})}},18228:(e,r,t)=>{t.d(r,{A:()=>_});var n=t(96540),d=t(34164),s=t(23104),l=t(56347),i=t(205),a=t(57485),c=t(31682),h=t(89466);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:d}}=e;return{value:r,label:t,attributes:n,default:d}}))}function x(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??o(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function j(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:t}=e;const d=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,a.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(d.location.search);r.set(s,e),d.replace({...d.location,search:r.toString()})}),[s,d])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:d}=e,s=x(e),[l,a]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,o]=u({queryString:t,groupId:d}),[f,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[d,s]=(0,h.Dv)(t);return[d,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:d}),p=(()=>{const e=c??f;return j({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{p&&a(p)}),[p]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),m(e)}),[o,m,s]),tabValues:s}}var m=t(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),{pathname:o}=(0,l.zy)(),x=e=>{const r=e.currentTarget,t=c.indexOf(r),d=a[t].value;d!==n&&(h(r),i(d))},j=e=>{let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:j,onClick:x,...s,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,s?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&o.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:d}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===d));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==d})))})}function g(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,d.A)("tabs-container",p.tabList),children:[(0,b.jsx)(y,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function _(e){const r=(0,m.A)();return(0,b.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(96540);const d={},s=n.createContext(d);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);