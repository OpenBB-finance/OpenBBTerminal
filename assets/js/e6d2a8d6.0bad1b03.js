"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(65099),l=r(85162);const s={title:"open",description:"OpenBB SDK Function"},i="open",u={unversionedId:"reference/stocks/th/open",id:"reference/stocks/th/open",title:"open",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/stocks/th/open.md",sourceDirName:"reference/stocks/th",slug:"/reference/stocks/th/open",permalink:"/sdk/reference/stocks/th/open",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/th/open.md",tags:[],version:"current",frontMatter:{title:"open",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"exchange",permalink:"/sdk/reference/stocks/th/exchange"},next:{title:"tob",permalink:"/sdk/reference/stocks/tob"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"open"},"open"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Get open exchanges."),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_model.py#L52"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.th.open()\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Currently open exchanges")))),(0,a.kt)("hr",null)),(0,a.kt)(l.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,a.kt)("p",null,"Display open exchanges."),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_view.py#L44"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.th.open_chart()\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))))}m.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65099:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),a=r(67294),o=r(10412),l=r(86010),s=r(72389),i=r(67392),u=r(7094),c=r(12466);const p="tabItem_hGfb";var d=r(16550);function m(){const e=function(){const e=o.Z.canUseDOM?navigator.userAgent:"";return e.indexOf("Windows")>-1?"Windows":e.indexOf("Mac")>-1?"Mac":e.indexOf("X11")>-1?"UNIX":e.indexOf("Linux")>-1?"Linux":"Other"}();return"Windows"===e?"windows":"Mac"===e?"mac":"Linux"===e||"UNIX"===e?"python":"windows"}function b(e){var t;const{lazy:r,block:o,defaultValue:s,values:b,groupId:f,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=b??k.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,u.U)(),{pathname:x,search:T}=(0,d.TH)(),N=function(e,t){const r=e.substring(1).split("&");for(let n=0;n<r.length;n++){let e=r[n].split("=");if(decodeURIComponent(e[0])==t)return decodeURIComponent(e[1])}return null}(T,"tab"),E=m(),[B,D]=(0,a.useState)(x.startsWith("/terminal/quickstart/installation")?N&&["mac","windows","python","docker"].includes(N)?N:E:g),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=f){const e=w[f];null!=e&&e!==B&&v.some((t=>t.value===e))&&D(e)}const P=e=>{const t=e.currentTarget,r=C.indexOf(t),n=v[r].value;n!==B&&(j(t),D(n),null!=f&&O(f,String(n)))},I=e=>{var t;let r=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;r=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;r=C[t]??C[C.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},v.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:e=>C.push(e),onKeyDown:I,onClick:P},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p,null==o?void 0:o.className,{"border-b-2 pointer-events-none":B===t,"border-b-2 text-[#669dcb] border-[#669dcb]":B===t&&x.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":B===t&&x.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":B!==t&&x.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":B!==t&&x.startsWith("/terminal")})}),r??t)})),a.createElement("li",{className:"w-full border-b border-grey-400 pointer-events-none py-1 mb-[12px]"})),r?(0,a.cloneElement)(k.filter((e=>e.props.value===B))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==B})))))}function f(e){const t=(0,s.Z)();return a.createElement(b,(0,n.Z)({key:String(t)},e))}}}]);