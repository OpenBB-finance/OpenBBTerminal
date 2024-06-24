"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92792],{39316:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(74848),s=t(28453),i=t(94331),l=t(18228),a=t(19365);const o={title:"news",description:"This documentation is for a news aggregator platform on the OpenBB Terminal which fetches recent posts from CryptoPanic. It details available functions, parameters, returns and the source code link.",keywords:["CryptoPanic","news aggregator","parameters","returns","crypto news","filter options"]},d=void 0,c={id:"sdk/reference/crypto/ov/news",title:"news",description:"This documentation is for a news aggregator platform on the OpenBB Terminal which fetches recent posts from CryptoPanic. It details available functions, parameters, returns and the source code link.",source:"@site/content/sdk/reference/crypto/ov/news.md",sourceDirName:"sdk/reference/crypto/ov",slug:"/sdk/reference/crypto/ov/news",permalink:"/sdk/reference/crypto/ov/news",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/ov/news.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,frontMatter:{title:"news",description:"This documentation is for a news aggregator platform on the OpenBB Terminal which fetches recent posts from CryptoPanic. It details available functions, parameters, returns and the source code link.",keywords:["CryptoPanic","news aggregator","parameters","returns","crypto news","filter options"]},sidebar:"tutorialSidebar",previous:{title:"markets",permalink:"/sdk/reference/crypto/ov/markets"},next:{title:"platforms",permalink:"/sdk/reference/crypto/ov/platforms"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"crypto.ov.news - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(a.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsxs)(r.p,{children:["Get recent posts from CryptoPanic news aggregator platform. [Source: ",(0,n.jsx)(r.a,{href:"https://cryptopanic.com/",children:"https://cryptopanic.com/"}),"]"]}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/cryptopanic_model.py#L158",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.crypto.ov.news(limit: int = 60, post_kind: str = "news", filter_: Optional[str] = None, region: str = "en", source: Optional[str] = None, symbol: Optional[str] = None, sortby: str = "published_at", ascend: bool = True)\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"limit"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"number of news to fetch"}),(0,n.jsx)(r.td,{children:"60"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"post_kind"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Filter by category of news. Available values: news or media."}),(0,n.jsx)(r.td,{children:"news"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"filter_"}),(0,n.jsx)(r.td,{children:"Optional[str]"}),(0,n.jsx)(r.td,{children:"Filter by kind of news. One from list: rising"}),(0,n.jsx)(r.td,{children:"hot"}),(0,n.jsx)(r.td,{children:"bullish"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"region"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsxs)(r.td,{children:["Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch),",(0,n.jsx)("br",{}),"es (Espa\xf1ol), fr (Fran\xe7ais), it (Italiano), pt (Portugu\xeas), ru (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)"]}),(0,n.jsx)(r.td,{children:"en"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sortby"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Key to sort by."}),(0,n.jsx)(r.td,{children:"published_at"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ascend"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"Sort in ascend order."}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pd.DataFrame"}),(0,n.jsx)(r.td,{children:"DataFrame with recent news from different sources filtered by provided parameters."})]})})]}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(a.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Display recent posts from CryptoPanic news aggregator platform."}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/cryptopanic_view.py#L17",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.crypto.ov.news_chart(post_kind: str = "news", region: str = "en", filter_: Optional[str] = None, limit: int = 25, sortby: str = "published_at", ascend: bool = False, links: bool = False, export: str = "")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"limit"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"number of news to display"}),(0,n.jsx)(r.td,{children:"25"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"post_kind"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Filter by category of news. Available values: news or media."}),(0,n.jsx)(r.td,{children:"news"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"filter_"}),(0,n.jsx)(r.td,{children:"Optional[str]"}),(0,n.jsx)(r.td,{children:"Filter by kind of news. One from list: rising"}),(0,n.jsx)(r.td,{children:"hot"}),(0,n.jsx)(r.td,{children:"bullish"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"region"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsxs)(r.td,{children:["Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch),",(0,n.jsx)("br",{}),"es (Espa\xf1ol), fr (Fran\xe7ais), it (Italiano), pt (Portugu\xeas), ru (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)"]}),(0,n.jsx)(r.td,{children:"en"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sortby"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Key to sort by."}),(0,n.jsx)(r.td,{children:"published_at"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ascend"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"Sort in ascending order."}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"links"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"Show urls for news"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"export"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(r.p,{children:"This function does not return anything"}),(0,n.jsx)(r.hr,{})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),s=t(74848);function i(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),s=t(34164),i=t(23104),l=t(56347),a=t(205),o=t(57485),d=t(31682),c=t(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??h(t);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,l.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function j(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,i=u(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[d,h]=x({queryString:t,groupId:s}),[j,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),b=(()=>{const e=d??j;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:a,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:h}=(0,l.zy)(),u=e=>{const r=e.currentTarget,t=d.indexOf(r),s=o[t].value;s!==n&&(c(r),a(s))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>d.push(e),onKeyDown:p,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&h.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=j(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,m.jsx)(y,{...e,...r}),(0,m.jsx)(v,{...e,...r})]})}function w(e){const r=(0,f.A)();return(0,m.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>a});var n=t(96540);const s={},i=n.createContext(s);function l(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);