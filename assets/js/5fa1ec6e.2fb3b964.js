"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(r),u=i,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||n;return r?o.createElement(f,s(s({ref:t},l),{},{components:r})):o.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var d=2;d<n;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(39960),i=r(86010),n=r(67294),s=r(16550);function a(e){let{title:t,url:r,description:a,command:c}=e;const{pathname:d}=(0,s.TH)(),l=d.replace(/\/v\d+/,"");return n.createElement(o.Z,{className:(0,i.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),a?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},a):null)}},8224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=r(87462),i=(r(67294),r(3905)),n=r(62872);const s={},a="options",c={unversionedId:"bot/reference/discord/options/index",id:"bot/reference/discord/options/index",title:"options",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/options/index.mdx",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/",permalink:"/bot/reference/discord/options/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/options/index.mdx",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"top",permalink:"/bot/reference/discord/nft/top"},next:{title:"chains",permalink:"/bot/reference/discord/options/chains"}},d={},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"options"},"options"),(0,i.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,i.kt)(n.Z,{title:"chains",description:"This command allows users to retrieve Options Chain by Expiry, which gives an overview of the bid, ask, and open...",url:"/bot/reference/discord/options/chains",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"equitypc",description:"This command retrieves the Equity Put/Call Volume Ratio from market-harmonics.com. This ratio is used to measure...",url:"/bot/reference/discord/options/equitypc",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"gamma",description:"This command allows the user to view the Options Gamma Levels for a particular stock. Options Gamma Levels are...",url:"/bot/reference/discord/options/gamma",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"highiv",description:"This command retrieves the 15 highest IV30 equity stocks by 30 day Implied Volatility. The IV30 metric is a...",url:"/bot/reference/discord/options/highiv",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"hist",description:"This command allows the user to retrieve the historical price of options for the given parameters of a ticker,...",url:"/bot/reference/discord/options/hist",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"indexpc",description:"This command allows the user to retrieve the Index Put/Call Ratio for the market from market-harmonics.com. This...",url:"/bot/reference/discord/options/indexpc",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"info",description:"This command allows the user to quickly and easily retrieve various option information (volatility, IV rank,...",url:"/bot/reference/discord/options/info",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"itm",description:"This command allows the user to retrieve a list of In-the-Money options for the stock ticker symbol sorted by...",url:"/bot/reference/discord/options/itm",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"maxpain",description:"This command retrieves the Max Pain on expiration date for a given stock. Max Pain is the strike price with the...",url:"/bot/reference/discord/options/maxpain",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"oi",description:"This command allows the user to retrieve the Open Interest and Call/Put ratio for a given stock. Optionally, the...",url:"/bot/reference/discord/options/oi",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"oichart",description:"This command allows users to retrieve a chart of Total Open Interest by Strike Price for the given ticker symbol....",url:"/bot/reference/discord/options/oichart",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"smile",description:"This command allows the user to retrieve the Options Volatility Smile for the given ticker and expiry. The...",url:"/bot/reference/discord/options/smile",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"stats",description:"This command allows the user to retrieve Options Statistics for a stock with the given ticker symbol. This...",url:"/bot/reference/discord/options/stats",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topoi",description:"This command allows the user to retrieve Top Open Interest among all stocks. This command queries the current...",url:"/bot/reference/discord/options/topoi",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topoichange",description:"This command allows the user to view the top 15 stocks with the highest OI Change. It will display the stock...",url:"/bot/reference/discord/options/topoichange",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topstrikevol",description:"This command allows the user to retrieve the top option strike by volume for a given security with the ability to...",url:"/bot/reference/discord/options/topstrikevol",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topvol",description:"This command allows the user to retrieve the Top 15 Highest stock options volumes by adding the call and put...",url:"/bot/reference/discord/options/topvol",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"topvoletf",description:"This command allows the user to retrieve the Top 15 Highest ETF options volumes by adding the call and put volume...",url:"/bot/reference/discord/options/topvoletf",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"unu",description:"This command allows a user to retrieve unusual options sorted by strike and expiration. It provides a list of the...",url:"/bot/reference/discord/options/unu",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"uoastock",description:"This command allows the user to retrieve the 20-day average options volume by ticker. The volume is based on the...",url:"/bot/reference/discord/options/uoastock",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"vol",description:"This command allows the user to retrieve a chart of Options Volume by Strike for a specified ticker. This data...",url:"/bot/reference/discord/options/vol",mdxType:"ReferenceCard"}),(0,i.kt)(n.Z,{title:"vsurf",description:"This command allows the user to retrieve an options volatility surface for the ticker symbol. Specifically, it...",url:"/bot/reference/discord/options/vsurf",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);