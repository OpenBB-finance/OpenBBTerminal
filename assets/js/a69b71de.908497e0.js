"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49254],{12660:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=t(74848),a=t(28453),s=t(94331),c=t(18228),o=t(19365);const i={title:"search",description:"The documentation page provides information on how to perform a cryptocurrency  search, including the search query and provider parameters, as well as the resulting  crypto search data such as symbol, name, currency, and exchange information.",keywords:["cryptocurrency search","available cryptocurrency pairs","python obb crypto search","search query parameter","provider parameter","crypto search results","crypto search provider","crypto search warnings","crypto search chart","crypto search metadata","crypto data","symbol","crypto name","crypto currency","crypto exchange","crypto exchange name"]},l=void 0,d={id:"platform/reference/crypto/search",title:"search",description:"The documentation page provides information on how to perform a cryptocurrency  search, including the search query and provider parameters, as well as the resulting  crypto search data such as symbol, name, currency, and exchange information.",source:"@site/content/platform/reference/crypto/search.md",sourceDirName:"platform/reference/crypto",slug:"/platform/reference/crypto/search",permalink:"/platform/reference/crypto/search",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/crypto/search.md",tags:[],version:"current",frontMatter:{title:"search",description:"The documentation page provides information on how to perform a cryptocurrency  search, including the search query and provider parameters, as well as the resulting  crypto search data such as symbol, name, currency, and exchange information.",keywords:["cryptocurrency search","available cryptocurrency pairs","python obb crypto search","search query parameter","provider parameter","crypto search results","crypto search provider","crypto search warnings","crypto search chart","crypto search metadata","crypto data","symbol","crypto name","crypto currency","crypto exchange","crypto exchange name"]},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/platform/reference/crypto/price/historical"},next:{title:"Technical",permalink:"/platform/reference/technical/"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function p(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"crypto/search - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Search available cryptocurrency pairs within a provider."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.crypto.search(provider='fmp')\nobb.crypto.search(query='BTCUSD', provider='fmp')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(c.A,{children:[(0,n.jsx)(o.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Search query."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['fmp']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(o.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Search query."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['fmp']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CryptoSearch]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(c.A,{children:[(0,n.jsx)(o.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data. (Crypto)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the crypto."})]})]})]})}),(0,n.jsx)(o.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data. (Crypto)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the crypto."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"currency"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The currency the crypto trades for."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"exchange"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The exchange code the crypto trades on."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"exchange_name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The short name of the exchange the crypto trades on."})]})]})]})})]})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>c});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function c(e){let{children:r,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,c),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(5260),a=t(74848);function s(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),a=t(34164),s=t(23104),c=t(56347),o=t(205),i=t(57485),l=t(31682),d=t(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??h(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const a=(0,c.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=u(e),[c,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[l,h]=x({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,d.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),y=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&i(y)}),[y]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=t(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function j(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),{pathname:h}=(0,c.zy)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),a=i[t].value;a!==n&&(d(r),o(a))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:p,onClick:u,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",y.tabItem,s?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&h.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function g(e){const r=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,b.jsx)(j,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function w(e){const r=(0,f.A)();return(0,b.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>o});var n=t(96540);const a={},s=n.createContext(a);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);