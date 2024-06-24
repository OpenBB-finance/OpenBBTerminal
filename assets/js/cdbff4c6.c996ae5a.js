"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31903],{40552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(74848),s=r(28453),i=r(94331),a=r(18228),d=r(19365);const l={title:"INCOME",description:"Get income statement and financial performance data for a company. Parameters include symbol, period, limit, provider, and more. Data includes revenue, gross profit, operating expenses, net income, and more.",keywords:["income statement","financial performance","get income data","period","limit","provider","symbol","cik","filing date","period of report date","include sources","order","sort","revenue","cost of revenue","gross profit","cost and expenses","research and development expenses","general and administrative expenses","selling and marketing expenses","other expenses","operating expenses","depreciation and amortization","ebitda","operating income","interest income","interest expense","income before tax","income tax expense","net income","eps","weighted average shares outstanding","link","reported currency","filling date","accepted date","calendar year"]},c=void 0,o={id:"excel/reference/equity/fundamental/income",title:"INCOME",description:"Get income statement and financial performance data for a company. Parameters include symbol, period, limit, provider, and more. Data includes revenue, gross profit, operating expenses, net income, and more.",source:"@site/content/excel/reference/equity/fundamental/income.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/income",permalink:"/excel/reference/equity/fundamental/income",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/income.md",tags:[],version:"current",frontMatter:{title:"INCOME",description:"Get income statement and financial performance data for a company. Parameters include symbol, period, limit, provider, and more. Data includes revenue, gross profit, operating expenses, net income, and more.",keywords:["income statement","financial performance","get income data","period","limit","provider","symbol","cik","filing date","period of report date","include sources","order","sort","revenue","cost of revenue","gross profit","cost and expenses","research and development expenses","general and administrative expenses","selling and marketing expenses","other expenses","operating expenses","depreciation and amortization","ebitda","operating income","interest income","interest expense","income before tax","income tax expense","net income","eps","weighted average shares outstanding","link","reported currency","filling date","accepted date","calendar year"]},sidebar:"tutorialSidebar",previous:{title:"HISTORICAL_SPLITS",permalink:"/excel/reference/equity/fundamental/historical_splits"},next:{title:"MANAGEMENT",permalink:"/excel/reference/equity/fundamental/management"}},h={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"EQUITY.FUNDAMENTAL.INCOME | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the income statement for a given company."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.FUNDAMENTAL.INCOME(symbol,[period],[limit])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.INCOME("AAPL")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.INCOME("AAPL","annual",5)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Time period of the data to return."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(a.A,{children:(0,n.jsx)(d.A,{value:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_date"}),(0,n.jsx)(t.td,{children:"The date when the filing was made."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accepted_date"}),(0,n.jsx)(t.td,{children:"The date and time when the filing was accepted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reported_currency"}),(0,n.jsx)(t.td,{children:"The currency in which the balance sheet was reported."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"revenue"}),(0,n.jsx)(t.td,{children:"Total revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cost_of_revenue"}),(0,n.jsx)(t.td,{children:"Cost of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gross_profit"}),(0,n.jsx)(t.td,{children:"Gross profit."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gross_profit_margin"}),(0,n.jsx)(t.td,{children:"Gross profit margin."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"general_and_admin_expense"}),(0,n.jsx)(t.td,{children:"General and administrative expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"research_and_development_expense"}),(0,n.jsx)(t.td,{children:"Research and development expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"selling_and_marketing_expense"}),(0,n.jsx)(t.td,{children:"Selling and marketing expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"selling_general_and_admin_expense"}),(0,n.jsx)(t.td,{children:"Selling, general and administrative expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_expenses"}),(0,n.jsx)(t.td,{children:"Other expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_operating_expenses"}),(0,n.jsx)(t.td,{children:"Total operating expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cost_and_expenses"}),(0,n.jsx)(t.td,{children:"Cost and expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interest_income"}),(0,n.jsx)(t.td,{children:"Interest income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_interest_expense"}),(0,n.jsx)(t.td,{children:"Total interest expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"depreciation_and_amortization"}),(0,n.jsx)(t.td,{children:"Depreciation and amortization."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ebitda"}),(0,n.jsx)(t.td,{children:"EBITDA."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ebitda_margin"}),(0,n.jsx)(t.td,{children:"EBITDA margin."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_operating_income"}),(0,n.jsx)(t.td,{children:"Total operating income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"operating_income_margin"}),(0,n.jsx)(t.td,{children:"Operating income margin."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_other_income_expenses"}),(0,n.jsx)(t.td,{children:"Total other income and expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_pre_tax_income"}),(0,n.jsx)(t.td,{children:"Total pre-tax income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pre_tax_income_margin"}),(0,n.jsx)(t.td,{children:"Pre-tax income margin."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"income_tax_expense"}),(0,n.jsx)(t.td,{children:"Income tax expense."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"consolidated_net_income"}),(0,n.jsx)(t.td,{children:"Consolidated net income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"net_income_margin"}),(0,n.jsx)(t.td,{children:"Net income margin."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"basic_earnings_per_share"}),(0,n.jsx)(t.td,{children:"Basic earnings per share."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"diluted_earnings_per_share"}),(0,n.jsx)(t.td,{children:"Diluted earnings per share."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"weighted_average_basic_shares_outstanding"}),(0,n.jsx)(t.td,{children:"Weighted average basic shares outstanding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"weighted_average_diluted_shares_outstanding"}),(0,n.jsx)(t.td,{children:"Weighted average diluted shares outstanding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"link"}),(0,n.jsx)(t.td,{children:"Link to the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"final_link"}),(0,n.jsx)(t.td,{children:"Link to the filing document."})]})]})]})})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),s=r(34164),i=r(23104),a=r(56347),d=r(205),l=r(57485),c=r(31682),o=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=p({queryString:r,groupId:s}),[m,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),f=(()=>{const e=c??m;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=r(74848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,a.zy)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=l[r].value;s!==n&&(o(t),d(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:x,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function _(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function y(e){const t=(0,j.A)();return(0,g.jsx)(_,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);