"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36649],{72788:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=t(74848),s=t(28453),a=t(94331),d=t(18228),o=t(19365);const i={title:"order",description:"This page provides detailed documentation on how to create buy/sell trade orders using OpenBB Terminal's 'forex.oanda' module. It includes source code, function definitions, parameters, and return information to successfully place orders.",keywords:["Forex","Oanda","Order","Buy Order","Sell Order","Account ID","Currency Pair","Price","Units","Order Chart"]},l=void 0,c={id:"sdk/reference/forex/oanda/order",title:"order",description:"This page provides detailed documentation on how to create buy/sell trade orders using OpenBB Terminal's 'forex.oanda' module. It includes source code, function definitions, parameters, and return information to successfully place orders.",source:"@site/content/sdk/reference/forex/oanda/order.md",sourceDirName:"sdk/reference/forex/oanda",slug:"/sdk/reference/forex/oanda/order",permalink:"/sdk/reference/forex/oanda/order",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forex/oanda/order.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"order",description:"This page provides detailed documentation on how to create buy/sell trade orders using OpenBB Terminal's 'forex.oanda' module. It includes source code, function definitions, parameters, and return information to successfully place orders.",keywords:["Forex","Oanda","Order","Buy Order","Sell Order","Account ID","Currency Pair","Price","Units","Order Chart"]},sidebar:"tutorialSidebar",previous:{title:"opentrades",permalink:"/sdk/reference/forex/oanda/opentrades"},next:{title:"orderbook",permalink:"/sdk/reference/forex/oanda/orderbook"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function x(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"forex.oanda.order - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(d.A,{children:[(0,n.jsxs)(o.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(r.p,{children:"Request creation of buy/sell trade order."}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L270",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.forex.oanda.order(price: int = 0, units: int = 0, instrument: Optional[str] = None, accountID: str = "REPLACE_ME")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"instrument"}),(0,n.jsx)(r.td,{children:"Union[str, None]"}),(0,n.jsx)(r.td,{children:"The loaded currency pair, by default None"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"price"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The price to set for the limit order."}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"units"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The number of units to place in the order request."}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accountID"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Oanda account ID, by default cfg.OANDA_ACCOUNT"}),(0,n.jsx)(r.td,{children:"REPLACE_ME"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Union[pd.DataFrame, bool]"}),(0,n.jsx)(r.td,{children:"Orders data or False"})]})})]}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(o.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Create a buy/sell order."}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L174",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.forex.oanda.order_chart(accountID: str, instrument: str = "", price: int = 0, units: int = 0)\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accountID"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Oanda user account ID"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"instrument"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The loaded currency pair"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"price"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The price to set for the limit order."}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"units"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The number of units to place in the order request."}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(r.p,{children:"This function does not return anything"}),(0,n.jsx)(r.hr,{})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>d});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function d(e){let{children:r,hidden:t,className:d}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>T});var n=t(96540),s=t(34164),a=t(23104),d=t(56347),o=t(205),i=t(57485),l=t(31682),c=t(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function x(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const s=(0,d.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[d,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[l,u]=p({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),m=(()=>{const e=l??f;return x({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:u}=(0,d.zy)(),h=e=>{const r=e.currentTarget,t=l.indexOf(r),s=i[t].value;s!==n&&(c(r),o(s))},x=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:x,onClick:h,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,a?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...r}),(0,j.jsx)(y,{...e,...r})]})}function T(e){const r=(0,b.A)();return(0,j.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function d(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);