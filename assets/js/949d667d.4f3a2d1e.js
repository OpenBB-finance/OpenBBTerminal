"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7970],{11779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>o});var s=r(74848),d=r(28453),n=r(18228),i=r(19365);const l={title:"Fred Search",description:"Search for FRED series or economic releases by ID or string"},a=void 0,h={id:"platform/data_models/FredSearch",title:"Fred Search",description:"Search for FRED series or economic releases by ID or string",source:"@site/content/platform/data_models/FredSearch.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/FredSearch",permalink:"/platform/data_models/FredSearch",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/FredSearch.md",tags:[],version:"current",frontMatter:{title:"Fred Search",description:"Search for FRED series or economic releases by ID or string"},sidebar:"tutorialSidebar",previous:{title:"Fred Regional",permalink:"/platform/data_models/FredRegional"},next:{title:"Fred Series",permalink:"/platform/data_models/FredSeries"}},c={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Model name"}),(0,s.jsx)(t.th,{children:"Parameters class"}),(0,s.jsx)(t.th,{children:"Data class"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"FredSearch"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"FredSearchQueryParams"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"FredSearchData"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models. import (\nFredSearchData,\nFredSearchQueryParams,\n)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsx)(i.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The search word(s)."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['fred']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fred."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(i.A,{value:"fred",label:"fred",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The search word(s)."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['fred']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fred."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"is_release"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Is release? If True, other search filter variables are ignored. If no query text or release_id is supplied, this defaults to True."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"release_id"}),(0,s.jsx)(t.td,{children:"Union[int, str]"}),(0,s.jsx)(t.td,{children:"A specific release ID to target."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of data entries to return. (1-1000)"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"offset"}),(0,s.jsx)(t.td,{children:"Annotated[int, Ge(ge=0)]"}),(0,s.jsx)(t.td,{children:"Offset the results in conjunction with limit."}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"filter_variable"}),(0,s.jsx)(t.td,{children:"Literal['frequency', 'units', 'seasonal_adjustment']"}),(0,s.jsx)(t.td,{children:"Filter by an attribute."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"filter_value"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"String value to filter the variable by. Used in conjunction with filter_variable."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tag_names"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"A semicolon delimited list of tag names that series match all of. Example: 'japan;imports'"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exclude_tag_names"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"A semicolon delimited list of tag names that series match none of. Example: 'imports;services'. Requires that variable tag_names also be set to limit the number of matching series."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"series_id"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"A FRED Series ID to return series group information for. This returns the required information to query for regional data. Not all series that are in FRED have geographical data. Entering a value for series_id will override all other parameters. Multiple series_ids can be separated by commas."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsx)(i.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"release_id"}),(0,s.jsx)(t.td,{children:"Union[int, str]"}),(0,s.jsx)(t.td,{children:"The release ID for queries."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"series_id"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The series ID for the item in the release."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The name of the release."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"title"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The title of the series."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"observation_start"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the first observation in the series."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"observation_end"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the last observation in the series."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"frequency"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The frequency of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"frequency_short"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Short form of the data frequency."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"units"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The units of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"units_short"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Short form of the data units."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"seasonal_adjustment"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The seasonal adjustment of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"seasonal_adjustment_short"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Short form of the data seasonal adjustment."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_updated"}),(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"The datetime of the last update to the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"notes"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Description of the release."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"press_release"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"If the release is a press release."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"url"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"URL to the release."})]})]})]})}),(0,s.jsx)(i.A,{value:"fred",label:"fred",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"release_id"}),(0,s.jsx)(t.td,{children:"Union[int, str]"}),(0,s.jsx)(t.td,{children:"The release ID for queries."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"series_id"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The series ID for the item in the release."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The name of the release."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"title"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The title of the series."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"observation_start"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the first observation in the series."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"observation_end"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the last observation in the series."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"frequency"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The frequency of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"frequency_short"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Short form of the data frequency."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"units"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The units of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"units_short"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Short form of the data units."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"seasonal_adjustment"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The seasonal adjustment of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"seasonal_adjustment_short"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Short form of the data seasonal adjustment."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_updated"}),(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"The datetime of the last update to the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"notes"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Description of the release."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"press_release"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"If the release is a press release."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"url"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"URL to the release."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"popularity"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Popularity of the series"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"group_popularity"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Group popularity of the release"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"region_type"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The region type of the series."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"series_group"}),(0,s.jsx)(t.td,{children:"Union[int, str]"}),(0,s.jsx)(t.td,{children:"The series group ID of the series. This value is used to query for regional data."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(34164);const d={tabItem:"tabItem_Ymn6"};var n=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(d.tabItem,i),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var s=r(96540),d=r(34164),n=r(23104),i=r(56347),l=r(205),a=r(57485),h=r(31682),c=r(89466);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:d}}=e;return{value:t,label:r,attributes:s,default:d}}))}function x(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const d=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(d.location.search);t.set(n,e),d.replace({...d.location,search:t.toString()})}),[n,d])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:d}=e,n=x(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[h,o]=u({queryString:r,groupId:d}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,n]=(0,c.Dv)(r);return[d,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:d}),p=(()=>{const e=h??f;return j({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{p&&a(p)}),[p]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),m(e)}),[o,m,n]),tabValues:n}}var m=r(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:a}=e;const h=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),{pathname:o}=(0,i.zy)(),x=e=>{const t=e.currentTarget,r=h.indexOf(t),d=a[r].value;d!==s&&(c(t),l(d))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>h.push(e),onKeyDown:j,onClick:x,...n,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:d}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===d));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function g(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,d.A)("tabs-container",p.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function T(e){const t=(0,m.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var s=r(96540);const d={},n=s.createContext(d);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);