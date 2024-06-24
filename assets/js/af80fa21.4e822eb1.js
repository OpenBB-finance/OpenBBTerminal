"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83554],{37216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>x});var n=r(74848),d=r(28453),i=r(94331),s=r(18228),l=r(19365);const c={title:"bond_prices",description:"Corporate Bond Prices",keywords:["fixedincome","corporate","bond_prices"]},a=void 0,o={id:"platform/reference/fixedincome/corporate/bond_prices",title:"bond_prices",description:"Corporate Bond Prices",source:"@site/content/platform/reference/fixedincome/corporate/bond_prices.md",sourceDirName:"platform/reference/fixedincome/corporate",slug:"/platform/reference/fixedincome/corporate/bond_prices",permalink:"/platform/reference/fixedincome/corporate/bond_prices",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/fixedincome/corporate/bond_prices.md",tags:[],version:"current",frontMatter:{title:"bond_prices",description:"Corporate Bond Prices",keywords:["fixedincome","corporate","bond_prices"]},sidebar:"tutorialSidebar",previous:{title:"Corporate",permalink:"/platform/reference/fixedincome/corporate/"},next:{title:"commercial_paper",permalink:"/platform/reference/fixedincome/corporate/commercial_paper"}},h={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"fixedincome/corporate/bond_prices - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Corporate Bond Prices."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.fixedincome.corporate.bond_prices(provider='tmx')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The country to get data. Matches partial name."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issuer_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the issuer. Returns partial matches and is case insensitive."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isin"}),(0,n.jsx)(t.td,{children:"Union[List, str]"}),(0,n.jsx)(t.td,{children:"International Securities Identification Number(s) of the bond(s)."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lei"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Legal Entity Identifier of the issuing entity."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"Union[List, str]"}),(0,n.jsx)(t.td,{children:"Currency of the bond. Formatted as the 3-letter ISO 4217 code (e.g. GBP, EUR, USD)."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"coupon_min"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Minimum coupon rate of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"coupon_max"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Maximum coupon rate of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issued_amount_min"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Minimum issued amount of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issued_amount_max"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Maximum issued amount of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maturity_date_min"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Minimum maturity date of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maturity_date_max"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Maximum maturity date of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['tmx']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: tmx."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The country to get data. Matches partial name."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issuer_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the issuer. Returns partial matches and is case insensitive."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isin"}),(0,n.jsx)(t.td,{children:"Union[List, str]"}),(0,n.jsx)(t.td,{children:"International Securities Identification Number(s) of the bond(s)."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lei"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Legal Entity Identifier of the issuing entity."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"Union[List, str]"}),(0,n.jsx)(t.td,{children:"Currency of the bond. Formatted as the 3-letter ISO 4217 code (e.g. GBP, EUR, USD)."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"coupon_min"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Minimum coupon rate of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"coupon_max"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Maximum coupon rate of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issued_amount_min"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Minimum issued amount of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issued_amount_max"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Maximum issued amount of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maturity_date_min"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Minimum maturity date of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maturity_date_max"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Maximum maturity date of the bond."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['tmx']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: tmx."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issue_date_min"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Filter by the minimum original issue date."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issue_date_max"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Filter by the maximum original issue date."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_traded_min"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Filter by the minimum last trade date."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"use_cache"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"All bond data is sourced from a single JSON file that is updated daily. The file is cached for one day to eliminate downloading more than once. Caching will significantly speed up subsequent queries. To bypass, set to False."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[BondPrices]\n        Serializable results.\n\n    provider : Optional[Literal['tmx']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isin"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"International Securities Identification Number of the bond."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lei"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Legal Entity Identifier of the issuing entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"figi"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"FIGI of the bond."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cusip"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"CUSIP of the bond."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"coupon_rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Coupon rate of the bond."})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isin"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"International Securities Identification Number of the bond."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lei"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Legal Entity Identifier of the issuing entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"figi"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"FIGI of the bond."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cusip"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"CUSIP of the bond."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"coupon_rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Coupon rate of the bond."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ytm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Yield to maturity (YTM) is the rate of return anticipated on a bond if it is held until the maturity date. It takes into account the current market price, par value, coupon rate and time to maturity. It is assumed that all coupons are reinvested at the same rate. Values are returned as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The last price for the bond."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"highest_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The highest price for the bond on the last traded date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lowest_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The lowest price for the bond on the last traded date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_trades"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Total number of trades on the last traded date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_traded_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Last traded date of the bond."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maturity_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Maturity date of the bond."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issue_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Issue date of the bond. This is the date when the bond first accrues interest."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issuer_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the issuing entity."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const d={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(d.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),d=r(74848);function i(e){let{title:t}=e;return(0,d.jsx)(n.A,{children:(0,d.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),d=r(34164),i=r(23104),s=r(56347),l=r(205),c=r(57485),a=r(31682),o=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:d}}=e;return{value:t,label:r,attributes:n,default:d}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const d=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(d.location.search);t.set(i,e),d.replace({...d.location,search:t.toString()})}),[i,d])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:d}=e,i=x(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[a,h]=j({queryString:r,groupId:d}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,i]=(0,o.Dv)(r);return[d,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:d}),p=(()=>{const e=a??m;return u({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{p&&c(p)}),[p]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=r(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,s.zy)(),x=e=>{const t=e.currentTarget,r=a.indexOf(t),d=c[r].value;d!==n&&(o(t),l(d))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:u,onClick:x,...i,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:d}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===d));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function g(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,d.A)("tabs-container",p.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function T(e){const t=(0,f.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const d={},i=n.createContext(d);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);