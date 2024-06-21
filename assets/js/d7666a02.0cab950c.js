"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13673],{83918:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=t(74848),s=t(28453),o=t(94331),a=t(18228),l=t(19365);const i={title:"cr",description:"Documentation for two functions providing cryptocurrency interest rates for both borrowing and supplying.You can use the functions to export data or generate charts. Several platforms are covered including BlockFi, Ledn, SwissBorg, and Youhodler.",keywords:["Cryptocurrency","Crypto Interest Rates","Crypto Borrowing","Crypto Supplying","Interest Rate Platforms","Crypto Charts","Crypto Data Export"]},c=void 0,d={id:"sdk/reference/crypto/ov/cr",title:"cr",description:"Documentation for two functions providing cryptocurrency interest rates for both borrowing and supplying.You can use the functions to export data or generate charts. Several platforms are covered including BlockFi, Ledn, SwissBorg, and Youhodler.",source:"@site/content/sdk/reference/crypto/ov/cr.md",sourceDirName:"sdk/reference/crypto/ov",slug:"/sdk/reference/crypto/ov/cr",permalink:"/sdk/reference/crypto/ov/cr",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/ov/cr.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,frontMatter:{title:"cr",description:"Documentation for two functions providing cryptocurrency interest rates for both borrowing and supplying.You can use the functions to export data or generate charts. Several platforms are covered including BlockFi, Ledn, SwissBorg, and Youhodler.",keywords:["Cryptocurrency","Crypto Interest Rates","Crypto Borrowing","Crypto Supplying","Interest Rate Platforms","Crypto Charts","Crypto Data Export"]},sidebar:"tutorialSidebar",previous:{title:"contracts",permalink:"/sdk/reference/crypto/ov/contracts"},next:{title:"crypto_hack",permalink:"/sdk/reference/crypto/ov/crypto_hack"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"crypto.ov.cr - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(a.A,{children:[(0,n.jsxs)(l.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(r.p,{children:"Returns crypto {borrow,supply} interest rates for cryptocurrencies across several platforms"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/loanscan_model.py#L267",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.crypto.ov.cr(rate_type: str = "borrow")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"rate_type"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Interest rate type: {borrow, supply}. Default: supply"}),(0,n.jsx)(r.td,{children:"borrow"}),(0,n.jsx)(r.td,{children:"True"})]})})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pd.DataFrame"}),(0,n.jsx)(r.td,{children:"crypto interest rates per platform"})]})})]}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(l.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Displays crypto {borrow, supply} interest rates for cryptocurrencies across several platforms"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/loanscan_view.py#L24",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.crypto.ov.cr_chart(symbols: str, platforms: str, rate_type: str = "borrow", limit: int = 10, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"rate_type"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Interest rate type: {borrow, supply}. Default: supply"}),(0,n.jsx)(r.td,{children:"borrow"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbols"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Crypto separated by commas. Default: BTC,ETH,USDT,USDC"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"platforms"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Platforms separated by commas. Default: BlockFi,Ledn,SwissBorg,Youhodler"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"limit"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"Number of records to show"}),(0,n.jsx)(r.td,{children:"10"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"export"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(r.p,{children:"This function does not return anything"}),(0,n.jsx)(r.hr,{})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(5260),s=t(74848);function o(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),s=t(34164),o=t(23104),a=t(56347),l=t(205),i=t(57485),c=t(31682),d=t(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,a.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})}),[o,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,o=h(e),[a,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[c,u]=x({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,o]=(0,d.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),m=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{m&&i(m)}),[m]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=t(74848);function j(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),{pathname:u}=(0,a.zy)(),h=e=>{const r=e.currentTarget,t=c.indexOf(r),s=i[t].value;s!==n&&(d(r),l(s))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:p,onClick:h,...o,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,o?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=f(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,y.jsx)(j,{...e,...r}),(0,y.jsx)(v,{...e,...r})]})}function w(e){const r=(0,b.A)();return(0,y.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);