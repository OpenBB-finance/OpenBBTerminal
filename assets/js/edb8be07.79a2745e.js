"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59718],{62554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>h,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>x});var s=r(74848),i=r(28453),n=r(94331),d=r(18228),l=r(19365);const a={title:"forward_sales",description:"Get forward sales estimates",keywords:["equity","estimates","forward_sales"]},h=void 0,c={id:"platform/reference/equity/estimates/forward_sales",title:"forward_sales",description:"Get forward sales estimates",source:"@site/content/platform/reference/equity/estimates/forward_sales.md",sourceDirName:"platform/reference/equity/estimates",slug:"/platform/reference/equity/estimates/forward_sales",permalink:"/platform/reference/equity/estimates/forward_sales",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/estimates/forward_sales.md",tags:[],version:"current",frontMatter:{title:"forward_sales",description:"Get forward sales estimates",keywords:["equity","estimates","forward_sales"]},sidebar:"tutorialSidebar",previous:{title:"forward_pe",permalink:"/platform/reference/equity/estimates/forward_pe"},next:{title:"historical",permalink:"/platform/reference/equity/estimates/historical"}},o={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{title:"equity/estimates/forward_sales - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(t.p,{children:"Get forward sales estimates."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.estimates.forward_sales(symbol='AAPL', provider='intrinio')\nobb.equity.estimates.forward_sales(fiscal_year=2025, fiscal_period=fy, provider='intrinio')\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(l.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): intrinio, seeking_alpha."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['intrinio', 'seeking_alpha']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: intrinio, seeking_alpha."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): intrinio, seeking_alpha."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['intrinio', 'seeking_alpha']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: intrinio, seeking_alpha."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The future fiscal year to retrieve estimates for. When no symbol and year is supplied the current calendar year is used."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_period"}),(0,s.jsx)(t.td,{children:"Literal['fy', 'q1', 'q2', 'q3', 'q4']"}),(0,s.jsx)(t.td,{children:"The future fiscal period to retrieve estimates for."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The future calendar year to retrieve estimates for. When no symbol and year is supplied the current calendar year is used."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_period"}),(0,s.jsx)(t.td,{children:"Literal['q1', 'q2', 'q3', 'q4']"}),(0,s.jsx)(t.td,{children:"The future calendar period to retrieve estimates for."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(l.A,{value:"seeking_alpha",label:"seeking_alpha",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): intrinio, seeking_alpha."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['intrinio', 'seeking_alpha']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: intrinio, seeking_alpha."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"period"}),(0,s.jsx)(t.td,{children:"Literal['annual', 'quarter']"}),(0,s.jsx)(t.td,{children:"The reporting period."}),(0,s.jsx)(t.td,{children:"quarter"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[ForwardSalesEstimates]\n        Serializable results.\n\n    provider : Optional[Literal['intrinio', 'seeking_alpha']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(l.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Fiscal year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Fiscal quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Calendar year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Calendar quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"low_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate low for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"high_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate high for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mean"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate mean for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"median"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate median for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"standard_deviation"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate standard deviation for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_analysts"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of analysts providing estimates for the period."})]})]})]})}),(0,s.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Fiscal year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Fiscal quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Calendar year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Calendar quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"low_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate low for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"high_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate high for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mean"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate mean for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"median"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate median for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"standard_deviation"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate standard deviation for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_analysts"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of analysts providing estimates for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1w_up"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions up in the last week."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1w_down"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions down in the last week."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1w_change_percent"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The analyst revisions percent change in estimate for the period of 1 week."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1m_up"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions up in the last month."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1m_down"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions down in the last month."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1m_change_percent"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The analyst revisions percent change in estimate for the period of 1 month."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_3m_up"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions up in the last 3 months."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_3m_down"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions down in the last 3 months."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_3m_change_percent"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The analyst revisions percent change in estimate for the period of 3 months."})]})]})]})}),(0,s.jsx)(l.A,{value:"seeking_alpha",label:"seeking_alpha",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Fiscal year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Fiscal quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Calendar year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Calendar quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"low_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate low for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"high_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate high for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mean"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate mean for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"median"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate median for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"standard_deviation"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate standard deviation for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_analysts"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of analysts providing estimates for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"actual"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Actual sales (revenue) for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"period_growth"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Estimated (or actual if reported) EPS growth for the period."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var s=r(34164);const i={tabItem:"tabItem_Ymn6"};var n=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var s=r(5260),i=r(74848);function n(e){let{title:t}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var s=r(96540),i=r(34164),n=r(23104),d=r(56347),l=r(205),a=r(57485),h=r(31682),c=r(89466);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:i}}=e;return{value:t,label:r,attributes:s,default:i}}))}function x(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const i=(0,d.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(i.location.search);t.set(n,e),i.replace({...i.location,search:t.toString()})}),[n,i])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,n=x(e),[d,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[h,o]=u({queryString:r,groupId:i}),[f,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,n]=(0,c.Dv)(r);return[i,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:i}),m=(()=>{const e=h??f;return j({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{m&&a(m)}),[m]);return{selectedValue:d,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),p(e)}),[o,p,n]),tabValues:n}}var p=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:a}=e;const h=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),{pathname:o}=(0,d.zy)(),x=e=>{const t=e.currentTarget,r=h.indexOf(t),i=a[r].value;i!==s&&(c(t),l(i))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>h.push(e),onKeyDown:j,onClick:x,...n,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function g(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function _(e){const t=(0,p.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var s=r(96540);const i={},n=s.createContext(i);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);