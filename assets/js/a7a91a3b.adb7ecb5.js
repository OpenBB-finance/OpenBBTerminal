"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48296],{4966:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var s=t(74848),n=t(28453),d=t(94331),i=t(18228),l=t(19365);const c={title:"search",description:"Learn how to perform an equity search to find a company or stock ticker.  Understand the query parameters, such as search by ticker symbol and search provider.  Explore the various filters available, including market cap, price, beta, volume,  dividend, ETF, sector, industry, country, and exchange. Limit and structure the  results accordingly. Get access to the returned data, provider information, warnings,  chart, and metadata.",keywords:["equity search","company search","stock ticker search","query parameter","search by ticker symbol","search provider","market cap filter","price filter","beta filter","volume filter","dividend filter","ETF filter","sector filter","industry filter","country filter","exchange filter","limit results","data structure","results","provider","warnings","chart","metadata","symbol","name","dpm_name","post_station","market cap","sector","industry","beta","price","last annual dividend","volume","exchange","exchange_name","country","is_etf","actively trading","cik"]},a=void 0,h={id:"platform/reference/equity/search",title:"search",description:"Learn how to perform an equity search to find a company or stock ticker.  Understand the query parameters, such as search by ticker symbol and search provider.  Explore the various filters available, including market cap, price, beta, volume,  dividend, ETF, sector, industry, country, and exchange. Limit and structure the  results accordingly. Get access to the returned data, provider information, warnings,  chart, and metadata.",source:"@site/content/platform/reference/equity/search.md",sourceDirName:"platform/reference/equity",slug:"/platform/reference/equity/search",permalink:"/platform/reference/equity/search",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/search.md",tags:[],version:"current",frontMatter:{title:"search",description:"Learn how to perform an equity search to find a company or stock ticker.  Understand the query parameters, such as search by ticker symbol and search provider.  Explore the various filters available, including market cap, price, beta, volume,  dividend, ETF, sector, industry, country, and exchange. Limit and structure the  results accordingly. Get access to the returned data, provider information, warnings,  chart, and metadata.",keywords:["equity search","company search","stock ticker search","query parameter","search by ticker symbol","search provider","market cap filter","price filter","beta filter","volume filter","dividend filter","ETF filter","sector filter","industry filter","country filter","exchange filter","limit results","data structure","results","provider","warnings","chart","metadata","symbol","name","dpm_name","post_station","market cap","sector","industry","beta","price","last annual dividend","volume","exchange","exchange_name","country","is_etf","actively trading","cik"]},sidebar:"tutorialSidebar",previous:{title:"screener",permalink:"/platform/reference/equity/screener"},next:{title:"Data Models",permalink:"/platform/data_models/"}},o={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{title:"equity/search - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(r.p,{children:"Search for stock symbol, CIK, LEI, or company name."}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.equity.search(provider='intrinio')\nobb.equity.search(query='AAPL', is_symbol=False, use_cache=True, provider='nasdaq')\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"standard",label:"standard",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Search query."}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"is_symbol"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to search by ticker symbol."}),(0,s.jsx)(r.td,{children:"False"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"use_cache"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to use the cache or not."}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"provider"}),(0,s.jsx)(r.td,{children:"Literal['cboe', 'intrinio', 'nasdaq', 'sec', 'tmx', 'tradier']"}),(0,s.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, intrinio, nasdaq, sec, tmx, tradier."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})}),(0,s.jsx)(l.A,{value:"cboe",label:"cboe",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Search query."}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"is_symbol"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to search by ticker symbol."}),(0,s.jsx)(r.td,{children:"False"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"use_cache"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to use the cache or not."}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"provider"}),(0,s.jsx)(r.td,{children:"Literal['cboe', 'intrinio', 'nasdaq', 'sec', 'tmx', 'tradier']"}),(0,s.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, intrinio, nasdaq, sec, tmx, tradier."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})}),(0,s.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Search query."}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"is_symbol"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to search by ticker symbol."}),(0,s.jsx)(r.td,{children:"False"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"use_cache"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to use the cache or not."}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"provider"}),(0,s.jsx)(r.td,{children:"Literal['cboe', 'intrinio', 'nasdaq', 'sec', 'tmx', 'tradier']"}),(0,s.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, intrinio, nasdaq, sec, tmx, tradier."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"active"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"When true, return companies that are actively traded (having stock prices within the past 14 days). When false, return companies that are not actively traded or never have been traded."}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"limit"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"The number of data entries to return."}),(0,s.jsx)(r.td,{children:"10000"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})}),(0,s.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Search query."}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"is_symbol"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to search by ticker symbol."}),(0,s.jsx)(r.td,{children:"False"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"use_cache"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to use the cache or not."}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"provider"}),(0,s.jsx)(r.td,{children:"Literal['cboe', 'intrinio', 'nasdaq', 'sec', 'tmx', 'tradier']"}),(0,s.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, intrinio, nasdaq, sec, tmx, tradier."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"is_etf"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"If True, returns ETFs."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})}),(0,s.jsx)(l.A,{value:"sec",label:"sec",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Search query."}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"is_symbol"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to search by ticker symbol."}),(0,s.jsx)(r.td,{children:"False"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"use_cache"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to use the cache or not."}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"provider"}),(0,s.jsx)(r.td,{children:"Literal['cboe', 'intrinio', 'nasdaq', 'sec', 'tmx', 'tradier']"}),(0,s.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, intrinio, nasdaq, sec, tmx, tradier."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"is_fund"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to direct the search to the list of mutual funds and ETFs."}),(0,s.jsx)(r.td,{children:"False"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})}),(0,s.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Search query."}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"is_symbol"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to search by ticker symbol."}),(0,s.jsx)(r.td,{children:"False"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"use_cache"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to use a cached request. The list of companies is cached for two days."}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"provider"}),(0,s.jsx)(r.td,{children:"Literal['cboe', 'intrinio', 'nasdaq', 'sec', 'tmx', 'tradier']"}),(0,s.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, intrinio, nasdaq, sec, tmx, tradier."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})}),(0,s.jsx)(l.A,{value:"tradier",label:"tradier",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Search query."}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"is_symbol"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether the query is a symbol. Defaults to False."}),(0,s.jsx)(r.td,{children:"False"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"use_cache"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Whether to use the cache or not."}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"provider"}),(0,s.jsx)(r.td,{children:"Literal['cboe', 'intrinio', 'nasdaq', 'sec', 'tmx', 'tradier']"}),(0,s.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: cboe, intrinio, nasdaq, sec, tmx, tradier."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[EquitySearch]\n        Serializable results.\n\n    provider : Optional[Literal['cboe', 'intrinio', 'nasdaq', 'sec', 'tmx', 'tradier']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"standard",label:"standard",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"symbol"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"name"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Name of the company."})]})]})]})}),(0,s.jsx)(l.A,{value:"cboe",label:"cboe",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"symbol"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"name"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Name of the company."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"dpm_name"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Name of the primary market maker."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"post_station"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Post and station location on the CBOE trading floor."})]})]})]})}),(0,s.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"symbol"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"name"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Name of the company."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cik"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"lei"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The Legal Entity Identifier (LEI) of the company."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"intrinio_id"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"The Intrinio ID of the company."})]})]})]})}),(0,s.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"symbol"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"name"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Name of the company."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"nasdaq_traded"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Is Nasdaq traded?"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"exchange"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Primary Exchange"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"market_category"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Market Category"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"etf"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Is ETF?"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"round_lot_size"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"Round Lot Size"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"test_issue"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Is test Issue?"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"financial_status"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Financial Status"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cqs_symbol"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"CQS Symbol"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"nasdaq_symbol"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"NASDAQ Symbol"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"next_shares"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Is NextShares?"})]})]})]})}),(0,s.jsx)(l.A,{value:"sec",label:"sec",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"symbol"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"name"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Name of the company."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cik"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Central Index Key"})]})]})]})}),(0,s.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"symbol"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"name"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Name of the company."})]})]})]})}),(0,s.jsx)(l.A,{value:"tradier",label:"tradier",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"symbol"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"name"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Name of the company."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"exchange"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Exchange where the security is listed."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"security_type"}),(0,s.jsx)(r.td,{children:"Literal['stock', 'option', 'etf', 'index', 'mutual_fund']"}),(0,s.jsx)(r.td,{children:"Type of security."})]})]})]})})]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var s=t(34164);const n={tabItem:"tabItem_Ymn6"};var d=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>d});t(96540);var s=t(5260),n=t(74848);function d(e){let{title:r}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>T});var s=t(96540),n=t(34164),d=t(23104),i=t(56347),l=t(205),c=t(57485),a=t(31682),h=t(89466);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}function x(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??o(t);return function(e){const r=(0,a.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function j(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.W6)(),d=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(d),(0,s.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(n.location.search);r.set(d,e),n.replace({...n.location,search:r.toString()})}),[d,n])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,d=x(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:d}))),[a,o]=u({queryString:t,groupId:n}),[m,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,d]=(0,h.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:n}),p=(()=>{const e=a??m;return j({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{p&&c(p)}),[p]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),b(e)}),[o,b,d]),tabValues:d}}var b=t(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=t(74848);function f(e){let{className:r,block:t,selectedValue:s,selectValue:l,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:h}=(0,d.a_)(),{pathname:o}=(0,i.zy)(),x=e=>{const r=e.currentTarget,t=a.indexOf(r),n=c[t].value;n!==s&&(h(r),l(n))},j=e=>{let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;r=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;r=a[t]??a[a.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:r,label:t,attributes:d}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>a.push(e),onKeyDown:j,onClick:x,...d,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,d?.className,{"border-b-2 pointer-events-none":s===r,"border-b-2 text-[#669dcb] border-[#669dcb]":s===r&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==r&&o.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function g(e){const r=m(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",p.tabList),children:[(0,y.jsx)(f,{...e,...r}),(0,y.jsx)(v,{...e,...r})]})}function T(e){const r=(0,b.A)();return(0,y.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var s=t(96540);const n={},d=s.createContext(n);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);