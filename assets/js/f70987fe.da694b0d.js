"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78847],{11374:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>o});var d=r(74848),s=r(28453),i=r(18228),n=r(19365);const l={title:"Forward Eps Estimates",description:"Get forward EPS estimates"},a=void 0,h={id:"platform/data_models/ForwardEpsEstimates",title:"Forward Eps Estimates",description:"Get forward EPS estimates",source:"@site/content/platform/data_models/ForwardEpsEstimates.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/ForwardEpsEstimates",permalink:"/platform/data_models/ForwardEpsEstimates",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/ForwardEpsEstimates.md",tags:[],version:"current",frontMatter:{title:"Forward Eps Estimates",description:"Get forward EPS estimates"},sidebar:"tutorialSidebar",previous:{title:"Forward Ebitda Estimates",permalink:"/platform/data_models/ForwardEbitdaEstimates"},next:{title:"Forward Pe Estimates",permalink:"/platform/data_models/ForwardPeEstimates"}},c={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,d.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Model name"}),(0,d.jsx)(t.th,{children:"Parameters class"}),(0,d.jsx)(t.th,{children:"Data class"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ForwardEpsEstimates"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ForwardEpsEstimatesQueryParams"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ForwardEpsEstimatesData"})})]})})]}),"\n",(0,d.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.forward_eps_estimates import (\nForwardEpsEstimatesData,\nForwardEpsEstimatesQueryParams,\n)\n"})}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(i.A,{children:[(0,d.jsx)(n.A,{value:"standard",label:"standard",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, seeking_alpha."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"provider"}),(0,d.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'seeking_alpha']"}),(0,d.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp, intrinio, seeking_alpha."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(n.A,{value:"fmp",label:"fmp",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, seeking_alpha."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"provider"}),(0,d.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'seeking_alpha']"}),(0,d.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp, intrinio, seeking_alpha."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_period"}),(0,d.jsx)(t.td,{children:"Literal['annual', 'quarter']"}),(0,d.jsx)(t.td,{children:"The future fiscal period to retrieve estimates for."}),(0,d.jsx)(t.td,{children:"annual"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"limit"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"The number of data entries to return."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"include_historical"}),(0,d.jsx)(t.td,{children:"bool"}),(0,d.jsx)(t.td,{children:"If True, the data will include all past data and the limit will be ignored."}),(0,d.jsx)(t.td,{children:"False"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(n.A,{value:"intrinio",label:"intrinio",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, seeking_alpha."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"provider"}),(0,d.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'seeking_alpha']"}),(0,d.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp, intrinio, seeking_alpha."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_year"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"The future fiscal year to retrieve estimates for. When no symbol and year is supplied the current calendar year is used."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_period"}),(0,d.jsx)(t.td,{children:"Literal['fy', 'q1', 'q2', 'q3', 'q4']"}),(0,d.jsx)(t.td,{children:"The future fiscal period to retrieve estimates for."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calendar_year"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"The future calendar year to retrieve estimates for. When no symbol and year is supplied the current calendar year is used."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calendar_period"}),(0,d.jsx)(t.td,{children:"Literal['q1', 'q2', 'q3', 'q4']"}),(0,d.jsx)(t.td,{children:"The future calendar period to retrieve estimates for."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(n.A,{value:"seeking_alpha",label:"seeking_alpha",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,d.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, seeking_alpha."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"provider"}),(0,d.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'seeking_alpha']"}),(0,d.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp, intrinio, seeking_alpha."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"period"}),(0,d.jsx)(t.td,{children:"Literal['annual', 'quarter']"}),(0,d.jsx)(t.td,{children:"The reporting period."}),(0,d.jsx)(t.td,{children:"quarter"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,d.jsxs)(i.A,{children:[(0,d.jsx)(n.A,{value:"standard",label:"standard",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Name of the entity."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_year"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Fiscal year for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_period"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Fiscal quarter for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calendar_year"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Calendar year for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calendar_period"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Calendar quarter for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"low_estimate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS low for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"high_estimate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS high for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mean"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS mean for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"median"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS median for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"standard_deviation"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS standard deviation for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"number_of_analysts"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Number of analysts providing estimates for the period."})]})]})]})}),(0,d.jsx)(n.A,{value:"fmp",label:"fmp",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Name of the entity."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_year"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Fiscal year for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_period"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Fiscal quarter for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calendar_year"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Calendar year for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calendar_period"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Calendar quarter for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"low_estimate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS low for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"high_estimate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS high for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mean"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS mean for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"median"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS median for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"standard_deviation"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS standard deviation for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"number_of_analysts"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Number of analysts providing estimates for the period."})]})]})]})}),(0,d.jsx)(n.A,{value:"intrinio",label:"intrinio",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Name of the entity."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_year"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Fiscal year for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_period"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Fiscal quarter for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calendar_year"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Calendar year for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calendar_period"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Calendar quarter for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"low_estimate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS low for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"high_estimate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS high for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mean"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS mean for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"median"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS median for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"standard_deviation"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS standard deviation for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"number_of_analysts"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Number of analysts providing estimates for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"revisions_change_percent"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The earnings per share (EPS) percent change in estimate for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mean_1w"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The mean estimate for the period one week ago."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mean_1m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The mean estimate for the period one month ago."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mean_2m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The mean estimate for the period two months ago."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mean_3m"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"The mean estimate for the period three months ago."})]})]})]})}),(0,d.jsx)(n.A,{value:"seeking_alpha",label:"seeking_alpha",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbol"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Name of the entity."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_year"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Fiscal year for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fiscal_period"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Fiscal quarter for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calendar_year"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Calendar year for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"calendar_period"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Calendar quarter for the estimate."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"low_estimate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS low for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"high_estimate"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS high for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mean"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS mean for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"median"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS median for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"standard_deviation"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated EPS standard deviation for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"number_of_analysts"}),(0,d.jsx)(t.td,{children:"int"}),(0,d.jsx)(t.td,{children:"Number of analysts providing estimates for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"normalized_actual"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Actual normalized EPS."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"period_growth"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated (or actual if reported) EPS growth for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"low_estimate_gaap"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated GAAP EPS low for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"high_estimate_gaap"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated GAAP EPS high for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mean_gaap"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Estimated GAAP EPS mean for the period."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"gaap_actual"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Actual GAAP EPS."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var d=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function n(e){let{children:t,hidden:r,className:n}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,d.A)(s.tabItem,n),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>E});var d=r(96540),s=r(34164),i=r(23104),n=r(56347),l=r(205),a=r(57485),h=r(31682),c=r(89466);function o(e){return function(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:d,default:s}}=e;return{value:t,label:r,attributes:d,default:s}}))}function x(e){const{values:t,children:r}=e;return(0,d.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(i),(0,d.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=x(e),[n,a]=(0,d.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const d=r.find((e=>e.default))??r[0];if(!d)throw new Error("Unexpected error: 0 tabValues");return d.value}({defaultValue:t,tabValues:i}))),[h,o]=u({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(r);return[s,(0,d.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),p=(()=>{const e=h??m;return j({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{p&&a(p)}),[p]);return{selectedValue:n,selectValue:(0,d.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),f(e)}),[o,f,i]),tabValues:i}}var f=r(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:d,selectValue:l,tabValues:a}=e;const h=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:o}=(0,n.zy)(),x=e=>{const t=e.currentTarget,r=h.indexOf(t),s=a[r].value;s!==d&&(c(t),l(s))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,ref:e=>h.push(e),onKeyDown:j,onClick:x,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,i?.className,{"border-b-2 pointer-events-none":d===t,"border-b-2 text-[#669dcb] border-[#669dcb]":d===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,d.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function E(e){const t=(0,f.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>l});var d=r(96540);const s={},i=d.createContext(s);function n(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);