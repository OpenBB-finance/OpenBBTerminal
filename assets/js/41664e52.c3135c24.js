"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76354],{77826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=r(74848),n=r(28453),s=r(94331),d=r(18228),l=r(19365);const i={title:"cot",description:"Learn how to lookup Commitment of Traders Reports by series ID and view  the results, metadata, warnings, and charts associated with the reports. Understand  the available parameters such as default report, provider, data type, legacy format,  report type, measure, start date, end date, and transform.",keywords:["Commitment of Traders Reports","lookup","series ID","CFTC","regulators","default report","provider","data type","legacy format","report type","measure","start date","end date","transform","results","metadata","warnings","chart","traders","date"]},o=void 0,c={id:"platform/reference/regulators/cftc/cot",title:"cot",description:"Learn how to lookup Commitment of Traders Reports by series ID and view  the results, metadata, warnings, and charts associated with the reports. Understand  the available parameters such as default report, provider, data type, legacy format,  report type, measure, start date, end date, and transform.",source:"@site/content/platform/reference/regulators/cftc/cot.md",sourceDirName:"platform/reference/regulators/cftc",slug:"/platform/reference/regulators/cftc/cot",permalink:"/platform/reference/regulators/cftc/cot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/regulators/cftc/cot.md",tags:[],version:"current",frontMatter:{title:"cot",description:"Learn how to lookup Commitment of Traders Reports by series ID and view  the results, metadata, warnings, and charts associated with the reports. Understand  the available parameters such as default report, provider, data type, legacy format,  report type, measure, start date, end date, and transform.",keywords:["Commitment of Traders Reports","lookup","series ID","CFTC","regulators","default report","provider","data type","legacy format","report type","measure","start date","end date","transform","results","metadata","warnings","chart","traders","date"]},sidebar:"tutorialSidebar",previous:{title:"Cftc",permalink:"/platform/reference/regulators/cftc/"},next:{title:"cot_search",permalink:"/platform/reference/regulators/cftc/cot_search"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"regulators/cftc/cot - Reference | OpenBB Platform Docs"}),"\n","\n",(0,a.jsx)(t.p,{children:"Get Commitment of Traders Reports."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.regulators.cftc.cot(provider='nasdaq')\n# Get the Commitment of Traders Report for Gold.\nobb.regulators.cftc.cot(id='GC=F', provider='nasdaq')\n# Enter the report ID by the Nasdaq Data Link Code.\nobb.regulators.cftc.cot(id='088691', provider='nasdaq')\n# Get the report for futures only.\nobb.regulators.cftc.cot(id='088691', data_type=F, provider='nasdaq')\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(d.A,{children:[(0,a.jsx)(l.A,{value:"standard",label:"standard",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"id"}),(0,a.jsx)(t.td,{children:"str"}),(0,a.jsx)(t.td,{children:"The series ID string for the report. Default report is Two-Year Treasury Note Futures."}),(0,a.jsx)(t.td,{children:"042601"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"provider"}),(0,a.jsx)(t.td,{children:"Literal['nasdaq']"}),(0,a.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: nasdaq."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]})]})]})}),(0,a.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"id"}),(0,a.jsx)(t.td,{children:"str"}),(0,a.jsx)(t.td,{children:"CFTC series ID. Use search_cot() to find the ID.       IDs not listed in the curated list, but are published on the Nasdaq Data Link website, are valid.       Certain symbols, such as 'ES=F', or exact names are also valid.       Default report is Two-Year Treasury Note Futures."}),(0,a.jsx)(t.td,{children:"042601"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"provider"}),(0,a.jsx)(t.td,{children:"Literal['nasdaq']"}),(0,a.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: nasdaq."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"data_type"}),(0,a.jsx)(t.td,{children:"Literal['F', 'FO', 'CITS']"}),(0,a.jsx)(t.td,{children:"The type of data to reuturn. Default is 'FO'.       F = Futures only       FO = Futures and Options       CITS = Commodity Index Trader Supplemental. Only valid for commodities."}),(0,a.jsx)(t.td,{children:"FO"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"legacy_format"}),(0,a.jsx)(t.td,{children:"bool"}),(0,a.jsx)(t.td,{children:"Returns the legacy format of report. Default is False."}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"report_type"}),(0,a.jsx)(t.td,{children:"Literal['ALL', 'CHG', 'OLD', 'OTR']"}),(0,a.jsx)(t.td,{children:"The type of report to return. Default is 'ALL'.       ALL = All       CHG = Change in Positions       OLD = Old Crop Years       OTR = Other Crop Years"}),(0,a.jsx)(t.td,{children:"ALL"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"measure"}),(0,a.jsx)(t.td,{children:"Literal['CR', 'NT', 'OI', 'CHG']"}),(0,a.jsx)(t.td,{children:"The measure to return. Default is None.       CR = Concentration Ratios       NT = Number of Traders       OI = Percent of Open Interest       CHG = Change in Positions. Only valid when data_type is 'CITS'."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"start_date"}),(0,a.jsx)(t.td,{children:"Union[date, str]"}),(0,a.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"end_date"}),(0,a.jsx)(t.td,{children:"Union[date, str]"}),(0,a.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"transform"}),(0,a.jsx)(t.td,{children:"Literal['diff', 'rdiff', 'cumul', 'normalize']"}),(0,a.jsx)(t.td,{children:"Transform the data as difference, percent change, cumulative, or normalize."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"collapse"}),(0,a.jsx)(t.td,{children:"Literal['daily', 'weekly', 'monthly', 'quarterly', 'annual']"}),(0,a.jsx)(t.td,{children:"Collapse the frequency of the time series."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[COT]\n        Serializable results.\n\n    provider : Optional[Literal['nasdaq']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,a.jsxs)(d.A,{children:[(0,a.jsx)(l.A,{value:"standard",label:"standard",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{children:"The date of the data."})]})})]})}),(0,a.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{children:"The date of the data."})]})})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(5260),n=r(74848);function s(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var a=r(96540),n=r(34164),s=r(23104),d=r(56347),l=r(205),i=r(57485),o=r(31682),c=r(89466);function u(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,d.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[d,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,u]=f({queryString:r,groupId:n}),[x,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),j=(()=>{const e=o??x;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:d,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=r(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:u}=(0,d.zy)(),h=e=>{const t=e.currentTarget,r=o.indexOf(t),n=i[r].value;n!==a&&(c(t),l(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:p,onClick:h,...s,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,s?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function T(e){const t=(0,m.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var a=r(96540);const n={},s=a.createContext(n);function d(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);