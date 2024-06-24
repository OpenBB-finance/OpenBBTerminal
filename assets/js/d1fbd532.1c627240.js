"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65951],{83264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>o,toc:()=>x});var n=r(74848),i=r(28453),d=r(94331),s=r(18228),l=r(19365);const a={title:"lbma_fixing",description:"Daily LBMA Fixing Prices in USD/EUR/GBP",keywords:["commodity","lbma_fixing"]},c=void 0,o={id:"platform/reference/commodity/lbma_fixing",title:"lbma_fixing",description:"Daily LBMA Fixing Prices in USD/EUR/GBP",source:"@site/content/platform/reference/commodity/lbma_fixing.md",sourceDirName:"platform/reference/commodity",slug:"/platform/reference/commodity/lbma_fixing",permalink:"/platform/reference/commodity/lbma_fixing",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/commodity/lbma_fixing.md",tags:[],version:"current",frontMatter:{title:"lbma_fixing",description:"Daily LBMA Fixing Prices in USD/EUR/GBP",keywords:["commodity","lbma_fixing"]},sidebar:"tutorialSidebar",previous:{title:"Commodity",permalink:"/platform/reference/commodity/"},next:{title:"Fixedincome",permalink:"/platform/reference/fixedincome/"}},h={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:"commodity/lbma_fixing - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Daily LBMA Fixing Prices in USD/EUR/GBP."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.commodity.lbma_fixing(provider='nasdaq')\n# Get the daily LBMA fixing prices for silver in 2023.\nobb.commodity.lbma_fixing(asset='silver', start_date='2023-01-01', end_date='2023-12-31', transform=rdiff, collapse=monthly, provider='nasdaq')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"Literal['gold', 'silver']"}),(0,n.jsx)(t.td,{children:"The metal to get price fixing rates for."}),(0,n.jsx)(t.td,{children:"gold"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['nasdaq']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: nasdaq."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"Literal['gold', 'silver']"}),(0,n.jsx)(t.td,{children:"The metal to get price fixing rates for."}),(0,n.jsx)(t.td,{children:"gold"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['nasdaq']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: nasdaq."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transform"}),(0,n.jsx)(t.td,{children:"Literal['diff', 'rdiff', 'cumul', 'normalize']"}),(0,n.jsx)(t.td,{children:"Transform the data as difference, percent change, cumulative, or normalize."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"collapse"}),(0,n.jsx)(t.td,{children:"Literal['daily', 'weekly', 'monthly', 'quarterly', 'annual']"}),(0,n.jsx)(t.td,{children:"Collapse the frequency of the time series."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[LbmaFixing]\n        Serializable results.\n\n    provider : Optional[Literal['nasdaq']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"usd_am"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"AM fixing price in USD."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"usd_pm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"PM fixing price in USD."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gbp_am"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"AM fixing price in GBP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gbp_pm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"PM fixing price in GBP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"euro_am"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"AM fixing price in EUR."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"euro_pm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"PM fixing price in EUR."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"usd"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Daily fixing price in USD."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gbp"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Daily fixing price in GBP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eur"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Daily fixing price in EUR."})]})]})]})}),(0,n.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"usd_am"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"AM fixing price in USD."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"usd_pm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"PM fixing price in USD."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gbp_am"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"AM fixing price in GBP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gbp_pm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"PM fixing price in GBP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"euro_am"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"AM fixing price in EUR."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"euro_pm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"PM fixing price in EUR."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"usd"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Daily fixing price in USD."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gbp"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Daily fixing price in GBP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eur"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Daily fixing price in EUR."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var d=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(5260),i=r(74848);function d(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>D});var n=r(96540),i=r(34164),d=r(23104),s=r(56347),l=r(205),a=r(57485),c=r(31682),o=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const i=(0,s.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(d),(0,n.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(i.location.search);t.set(d,e),i.replace({...i.location,search:t.toString()})}),[d,i])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,d=x(e),[s,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[c,h]=j({queryString:r,groupId:i}),[f,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,d]=(0,o.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:i}),m=(()=>{const e=c??f;return u({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{m&&a(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),p(e)}),[h,p,d]),tabValues:d}}var p=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,d.a_)(),{pathname:h}=(0,s.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),i=a[r].value;i!==n&&(o(t),l(i))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:x,...d,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,d?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function D(e){const t=(0,p.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const i={},d=n.createContext(i);function s(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);