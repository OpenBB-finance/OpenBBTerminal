"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26683],{79148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var n=r(74848),s=r(28453),i=r(18228),l=r(19365);const d={title:"Equity Gainers",description:"Get the top price gainers in the stock market"},a=void 0,c={id:"platform/data_models/EquityGainers",title:"Equity Gainers",description:"Get the top price gainers in the stock market",source:"@site/content/platform/data_models/EquityGainers.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EquityGainers",permalink:"/platform/data_models/EquityGainers",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/EquityGainers.md",tags:[],version:"current",frontMatter:{title:"Equity Gainers",description:"Get the top price gainers in the stock market"},sidebar:"tutorialSidebar",previous:{title:"Equity FTD",permalink:"/platform/data_models/EquityFTD"},next:{title:"Equity Historical",permalink:"/platform/data_models/EquityHistorical"}},h={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EquityGainers"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EquityGainersQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EquityGainersData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models. import (\nEquityGainersData,\nEquityGainersQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort"}),(0,n.jsx)(t.td,{children:"Literal['asc', 'desc']"}),(0,n.jsx)(t.td,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsx)(t.td,{children:"desc"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort"}),(0,n.jsx)(t.td,{children:"Literal['asc', 'desc']"}),(0,n.jsx)(t.td,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsx)(t.td,{children:"desc"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"category"}),(0,n.jsx)(t.td,{children:"Literal['dividend', 'energy', 'healthcare', 'industrials', 'price_performer', 'rising_stars', 'real_estate', 'tech', 'utilities', '52w_high', 'volume']"}),(0,n.jsxs)(t.td,{children:["The category of list to retrieve. Defaults to ",(0,n.jsx)(t.code,{children:"price_performer"}),"."]}),(0,n.jsx)(t.td,{children:"price_performer"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort"}),(0,n.jsx)(t.td,{children:"Literal['asc', 'desc']"}),(0,n.jsx)(t.td,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsx)(t.td,{children:"desc"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Last price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in price value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percent_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Percent change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume."})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Last price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in price value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percent_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Percent change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rank"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The rank of the stock in the list."})]})]})]})}),(0,n.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Last price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in price value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percent_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Percent change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"market_cap"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Market Cap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"avg_volume_3_months"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Average volume over the last 3 months in millions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pe_ratio_ttm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"PE Ratio (TTM)."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),s=r(34164),i=r(23104),l=r(56347),d=r(205),a=r(57485),c=r(31682),h=r(89466);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[l,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,o]=j({queryString:r,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,h.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),f=(()=>{const e=c??m;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),p(e)}),[o,p,i]),tabValues:i}}var p=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.a_)(),{pathname:o}=(0,l.zy)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=a[r].value;s!==n&&(h(t),d(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:x,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function T(e){const t=(0,p.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>d});var n=r(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);