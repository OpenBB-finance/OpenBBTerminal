"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38384],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,b=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(65099),o=r(85162);const i={title:"apy",description:"OpenBB SDK Function"},p="apy",u={unversionedId:"reference/crypto/tools/apy",id:"reference/crypto/tools/apy",title:"apy",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/crypto/tools/apy.md",sourceDirName:"reference/crypto/tools",slug:"/reference/crypto/tools/apy",permalink:"/sdk/reference/crypto/tools/apy",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/tools/apy.md",tags:[],version:"current",frontMatter:{title:"apy",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"tools",permalink:"/sdk/reference/crypto/tools/"},next:{title:"il",permalink:"/sdk/reference/crypto/tools/il"}},s={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],c={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apy"},"apy"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Converts apr into apy"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/tools/tools_model.py#L19"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.crypto.tools.apy(apr: float, compounding_times: int)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apr"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"value in percentage"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compounding_times"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"number of compounded periods in a year"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tuple","[pd.DataFrame, str]"),(0,a.kt)("td",{parentName:"tr",align:null},"- pd.DataFrame: dataframe with results",(0,a.kt)("br",null),"- str: narrative version of results")))),(0,a.kt)("hr",null)),(0,a.kt)(o.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,a.kt)("p",null,"Displays APY value converted from APR"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/tools/tools_view.py#L16"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.crypto.tools.apy_chart(apr: float, compounding_times: int, narrative: bool = False, export: str = "")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apr"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"value in percentage"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compounding_times"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"number of compounded periods in a year"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"narrative"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"display narrative version instead of dataframe"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))))}m.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65099:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),a=r(67294),l=r(10412),o=r(86010),i=r(72389),p=r(67392),u=r(7094),s=r(12466);const d="tabItem_hGfb";var c=r(16550);function m(){const e=function(){const e=l.Z.canUseDOM?navigator.userAgent:"";return e.indexOf("Windows")>-1?"Windows":e.indexOf("Mac")>-1?"Mac":e.indexOf("X11")>-1?"UNIX":e.indexOf("Linux")>-1?"Linux":"Other"}();return"Windows"===e?"windows":"Mac"===e?"mac":"Linux"===e||"UNIX"===e?"python":"windows"}function b(e){var t;const{lazy:r,block:l,defaultValue:i,values:b,groupId:f,className:k}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=b??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,p.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,u.U)(),{pathname:O,search:x}=(0,c.TH)(),T=function(e,t){const r=e.substring(1).split("&");for(let n=0;n<r.length;n++){let e=r[n].split("=");if(decodeURIComponent(e[0])==t)return decodeURIComponent(e[1])}return null}(x,"tab"),E=m(),[D,B]=(0,a.useState)(O.startsWith("/terminal/quickstart/installation")?T&&["mac","windows","python","docker"].includes(T)?T:E:v),P=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=f){const e=N[f];null!=e&&e!==D&&g.some((t=>t.value===e))&&B(e)}const C=e=>{const t=e.currentTarget,r=P.indexOf(t),n=g[r].value;n!==D&&(j(t),B(n),null!=f&&w(f,String(n)))},I=e=>{var t;let r=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;r=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;r=P[t]??P[P.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>P.push(e),onKeyDown:I,onClick:C},l,{className:(0,o.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",d,null==l?void 0:l.className,{"border-b-2 pointer-events-none":D===t,"border-b-2 text-[#669dcb] border-[#669dcb]":D===t&&O.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":D===t&&O.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":D!==t&&O.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":D!==t&&O.startsWith("/terminal")})}),r??t)})),a.createElement("li",{className:"w-full border-b border-grey-400 pointer-events-none py-1 mb-[12px]"})),r?(0,a.cloneElement)(y.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function f(e){const t=(0,i.Z)();return a.createElement(b,(0,n.Z)({key:String(t)},e))}}}]);