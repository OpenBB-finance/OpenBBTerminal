"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26096],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),m=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(u.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,g=p["".concat(u,".").concat(d)]||p[d]||s[d]||i;return t?n.createElement(g,o(o({ref:a},c),{},{components:t})):n.createElement(g,o({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},73452:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=t(87462),r=(t(67294),t(3905));const i={title:"macro",description:"OpenBB Terminal Function"},o="macro",l={unversionedId:"reference/economy/macro",id:"reference/economy/macro",title:"macro",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/economy/macro.md",sourceDirName:"reference/economy",slug:"/reference/economy/macro",permalink:"/terminal/reference/economy/macro",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/macro.md",tags:[],version:"current",frontMatter:{title:"macro",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/terminal/reference/economy/index_cmd"},next:{title:"map",permalink:"/terminal/reference/economy/map"}},u={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],c={toc:m};function s(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"macro"},"macro"),(0,r.kt)("p",null,"Get a broad selection of macro data from one or multiple countries. This includes Gross Domestic Product (RGDP & GDP) and the underlying components, Treasury Yields (Y10YD & M3YD), Employment figures (URATE, EMP, AC0I0 and EMRATIO), Government components (e.g. GBAL & GREV), Consumer and Producer Indices (CPI & PPI) and a variety of other indicators. ","[Source: EconDB]"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"macro [-p PARAMETERS] [-c COUNTRIES] [-t {,TPOP,TOYA,TUSD,TPGP,TNOR}] [--show {parameters,countries,transform}] [-s START_DATE] [-e END_DATE] [--convert {Albania,Argentina,Australia,Austria,Azerbaijan,Bangladesh,Belarus,Belgium,Bhutan,Bosnia_and_Herzegovina,Botswana,Brazil,Bulgaria,Cambodia,Cameroon,Canada,Chile,China,Colombia,Croatia,Cyprus,Czechia,Denmark,Dominican_Republic,Egypt,Estonia,European_Union,Finland,France,Germany,Greece,Honduras,Hong Kong,Hungary,India,Indonesia,Iran,Ireland,Israel,Italy,Japan,Kazakhstan,Laos,Latvia,Lebanon,Lithuania,Luxembourg,Macedonia,Malaysia,Malta,Mexico,Mongolia,Netherlands,New_Zealand,Nigeria,Norway,Oman,Pakistan,Panama,Paraguay,Peru,Philippines,Poland,Portugal,Qatar,Romania,Russia,Saudi_Arabia,Serbia,Singapore,Slovakia,Slovenia,South_Africa,South_Korea,Spain,Sweden,Switzerland,Taiwan,Thailand,Tunisia,Turkey,Ukraine,United_Arab_Emirates,United_Kingdom,United_States,Uzbekistan,Venezuela,Vietnam}]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"Abbreviation(s) of the Macro Economic data"),(0,r.kt)("td",{parentName:"tr",align:null},"CPI"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"countries"),(0,r.kt)("td",{parentName:"tr",align:null},"The country or countries you wish to show data for"),(0,r.kt)("td",{parentName:"tr",align:null},"united_states"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transform"),(0,r.kt)("td",{parentName:"tr",align:null},"The transformation to apply to the data"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},", TPOP, TOYA, TUSD, TPGP, TNOR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"Show parameters and what they represent using 'parameters' or countries and their currencies using 'countries'"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"parameters, countries, transform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"The start date of the data (format: YEAR-MONTH-DAY, i.e. 2010-12-31)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"The end date of the data (format: YEAR-MONTH-DAY, i.e. 2021-06-20)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency"),(0,r.kt)("td",{parentName:"tr",align:null},"Convert the currency of the chosen country to a specified currency. To find the currency symbols use '--show countries'"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Albania, Argentina, Australia, Austria, Azerbaijan, Bangladesh, Belarus, Belgium, Bhutan, Bosnia_and_Herzegovina, Botswana, Brazil, Bulgaria, Cambodia, Cameroon, Canada, Chile, China, Colombia, Croatia, Cyprus, Czechia, Denmark, Dominican_Republic, Egypt, Estonia, European_Union, Finland, France, Germany, Greece, Honduras, Hong Kong, Hungary, India, Indonesia, Iran, Ireland, Israel, Italy, Japan, Kazakhstan, Laos, Latvia, Lebanon, Lithuania, Luxembourg, Macedonia, Malaysia, Malta, Mexico, Mongolia, Netherlands, New_Zealand, Nigeria, Norway, Oman, Pakistan, Panama, Paraguay, Peru, Philippines, Poland, Portugal, Qatar, Romania, Russia, Saudi_Arabia, Serbia, Singapore, Slovakia, Slovenia, South_Africa, South_Korea, Spain, Sweden, Switzerland, Taiwan, Thailand, Tunisia, Turkey, Ukraine, United_Arab_Emirates, United_Kingdom, United_States, Uzbekistan, Venezuela, Vietnam")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2022 Mar 15, 07:20 (\ud83e\udd8b) /economy/ $ macro -p CONF -c netherlands,germany,france -s 2005-01-01 -e 2022-01-01\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/159249787-a030cd2c-0b29-4522-a1a9-db0245d55d9f.png",alt:"macro conf netherlands germany france"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/159251277-9381cc0a-7efe-41ce-af93-41d832103a1e.png",alt:"oil production macro"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/159253210-c7135b12-b04a-49e4-8896-d03e4c25f520.png",alt:"argentina gross domestic product in dollars"})),(0,r.kt)("hr",null))}s.isMDXComponent=!0}}]);