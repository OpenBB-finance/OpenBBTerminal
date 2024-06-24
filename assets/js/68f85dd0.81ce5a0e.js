"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91304],{71114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(74848),s=r(28453),d=r(18228),l=r(19365);const i={title:"Balance Sheet Growth",description:"Get the growth of a company's balance sheet items over time"},a=void 0,o={id:"platform/data_models/BalanceSheetGrowth",title:"Balance Sheet Growth",description:"Get the growth of a company's balance sheet items over time",source:"@site/content/platform/data_models/BalanceSheetGrowth.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/BalanceSheetGrowth",permalink:"/platform/data_models/BalanceSheetGrowth",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/BalanceSheetGrowth.md",tags:[],version:"current",frontMatter:{title:"Balance Sheet Growth",description:"Get the growth of a company's balance sheet items over time"},sidebar:"tutorialSidebar",previous:{title:"Balance Sheet",permalink:"/platform/data_models/BalanceSheet"},next:{title:"Bond Indices",permalink:"/platform/data_models/BondIndices"}},h={},c=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"BalanceSheetGrowth"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"BalanceSheetGrowthQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"BalanceSheetGrowthData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.balance_sheet_growth import (\nBalanceSheetGrowthData,\nBalanceSheetGrowthQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Time period of the data to return."}),(0,n.jsx)(t.td,{children:"annual"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"Literal['annual', 'quarter']"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"annual"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_cash_and_cash_equivalents"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of cash and cash equivalents."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_short_term_investments"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of short-term investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_cash_and_short_term_investments"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of cash and short-term investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_receivables"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net receivables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_inventory"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of inventory."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_current_assets"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other current assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_current_assets"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total current assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_property_plant_equipment_net"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net property, plant, and equipment."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_goodwill"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of goodwill."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_intangible_assets"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of intangible assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_goodwill_and_intangible_assets"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of goodwill and intangible assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_long_term_investments"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of long-term investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_tax_assets"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of tax assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_non_current_assets"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other non-current assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_non_current_assets"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total non-current assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_assets"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_assets"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_account_payables"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of accounts payable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_short_term_debt"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of short-term debt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_tax_payables"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of tax payables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_deferred_revenue"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of deferred revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_current_liabilities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_current_liabilities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_long_term_debt"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of long-term debt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_deferred_revenue_non_current"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of non-current deferred revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_deferrred_tax_liabilities_non_current"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of non-current deferred tax liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_non_current_liabilities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other non-current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_non_current_liabilities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total non-current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_liabilities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_liabilities"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_common_stock"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of common stock."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_retained_earnings"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of retained earnings."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_accumulated_other_comprehensive_income"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of accumulated other comprehensive income/loss."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_total_shareholders_equity"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other total stockholders' equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_shareholders_equity"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total stockholders' equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_liabilities_and_shareholders_equity"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total liabilities and stockholders' equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_investments"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_debt"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total debt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_debt"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net debt."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var d=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(96540),s=r(34164),d=r(23104),l=r(56347),i=r(205),a=r(57485),o=r(31682),h=r(89466);function c(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(d),(0,n.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,d=x(e),[l,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[o,c]=u({queryString:r,groupId:s}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,d]=(0,h.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:s}),p=(()=>{const e=o??f;return j({value:e,tabValues:d})?e:null})();(0,i.A)((()=>{p&&a(p)}),[p]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);a(e),c(e),m(e)}),[c,m,d]),tabValues:d}}var m=r(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function _(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:h}=(0,d.a_)(),{pathname:c}=(0,l.zy)(),x=e=>{const t=e.currentTarget,r=o.indexOf(t),s=a[r].value;s!==n&&(h(t),i(s))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:j,onClick:x,...d,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,d?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&c.startsWith("/terminal")}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,b.jsx)(_,{...e,...t}),(0,b.jsx)(w,{...e,...t})]})}function v(e){const t=(0,m.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const s={},d=n.createContext(s);function l(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);