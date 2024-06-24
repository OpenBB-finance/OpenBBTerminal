"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65977],{10354:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>x});var i=t(74848),n=t(28453),d=t(94331),s=t(18228),l=t(19365);const a={title:"ratios",description:"Learn about financial ratios for a given company over time. Explore various  equity ratios, such as current ratio, quick ratio, and cash conversion cycle. Understand  key profitability metrics like return on equity and profit margin. Analyze debt  ratios, inventory turnover, and operating and free cash flows. Evaluate the price  to earnings ratio and dividend yield.",keywords:["financial ratios","company ratios","ratios over time","equity ratios","current ratio","quick ratio","cash conversion cycle","return on equity","profit margin","debt ratio","inventory turnover","operating cash flow","free cash flow","price to earnings ratio","dividend yield"]},c=void 0,o={id:"platform/reference/equity/fundamental/ratios",title:"ratios",description:"Learn about financial ratios for a given company over time. Explore various  equity ratios, such as current ratio, quick ratio, and cash conversion cycle. Understand  key profitability metrics like return on equity and profit margin. Analyze debt  ratios, inventory turnover, and operating and free cash flows. Evaluate the price  to earnings ratio and dividend yield.",source:"@site/content/platform/reference/equity/fundamental/ratios.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/ratios",permalink:"/platform/reference/equity/fundamental/ratios",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/fundamental/ratios.md",tags:[],version:"current",frontMatter:{title:"ratios",description:"Learn about financial ratios for a given company over time. Explore various  equity ratios, such as current ratio, quick ratio, and cash conversion cycle. Understand  key profitability metrics like return on equity and profit margin. Analyze debt  ratios, inventory turnover, and operating and free cash flows. Evaluate the price  to earnings ratio and dividend yield.",keywords:["financial ratios","company ratios","ratios over time","equity ratios","current ratio","quick ratio","cash conversion cycle","return on equity","profit margin","debt ratio","inventory turnover","operating cash flow","free cash flow","price to earnings ratio","dividend yield"]},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/platform/reference/equity/fundamental/overview"},next:{title:"reported_financials",permalink:"/platform/reference/equity/fundamental/reported_financials"}},h={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:"equity/fundamental/ratios - Reference | OpenBB Platform Docs"}),"\n","\n",(0,i.jsx)(r.p,{children:"Get an extensive set of financial and accounting ratios for a given company over time."}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.equity.fundamental.ratios(symbol='AAPL', provider='fmp')\nobb.equity.fundamental.ratios(symbol='AAPL', period='annual', limit=12, provider='intrinio')\n"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(l.A,{value:"standard",label:"standard",children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Default"}),(0,i.jsx)(r.th,{children:"Optional"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"symbol"}),(0,i.jsx)(r.td,{children:"str"}),(0,i.jsx)(r.td,{children:"Symbol to get data for."}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:"False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"period"}),(0,i.jsx)(r.td,{children:"str"}),(0,i.jsx)(r.td,{children:"Time period of the data to return."}),(0,i.jsx)(r.td,{children:"annual"}),(0,i.jsx)(r.td,{children:"True"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"limit"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"The number of data entries to return."}),(0,i.jsx)(r.td,{children:"12"}),(0,i.jsx)(r.td,{children:"True"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"provider"}),(0,i.jsx)(r.td,{children:"Literal['fmp', 'intrinio']"}),(0,i.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp, intrinio."}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"True"})]})]})]})}),(0,i.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Default"}),(0,i.jsx)(r.th,{children:"Optional"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"symbol"}),(0,i.jsx)(r.td,{children:"str"}),(0,i.jsx)(r.td,{children:"Symbol to get data for."}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:"False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"period"}),(0,i.jsx)(r.td,{children:"Literal['annual', 'quarter', 'ttm']"}),(0,i.jsx)(r.td,{children:"Time period of the data to return."}),(0,i.jsx)(r.td,{children:"annual"}),(0,i.jsx)(r.td,{children:"True"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"limit"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"The number of data entries to return."}),(0,i.jsx)(r.td,{children:"12"}),(0,i.jsx)(r.td,{children:"True"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"provider"}),(0,i.jsx)(r.td,{children:"Literal['fmp', 'intrinio']"}),(0,i.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp, intrinio."}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"True"})]})]})]})}),(0,i.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Default"}),(0,i.jsx)(r.th,{children:"Optional"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"symbol"}),(0,i.jsx)(r.td,{children:"str"}),(0,i.jsx)(r.td,{children:"Symbol to get data for."}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:"False"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"period"}),(0,i.jsx)(r.td,{children:"Literal['annual', 'quarter', 'ttm', 'ytd']"}),(0,i.jsx)(r.td,{children:"Time period of the data to return."}),(0,i.jsx)(r.td,{children:"annual"}),(0,i.jsx)(r.td,{children:"True"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"limit"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"The number of data entries to return."}),(0,i.jsx)(r.td,{children:"12"}),(0,i.jsx)(r.td,{children:"True"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"provider"}),(0,i.jsx)(r.td,{children:"Literal['fmp', 'intrinio']"}),(0,i.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp, intrinio."}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"True"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fiscal_year"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"The specific fiscal year. Reports do not go beyond 2008."}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[FinancialRatios]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'intrinio']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(l.A,{value:"standard",label:"standard",children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"period_ending"}),(0,i.jsx)(r.td,{children:"str"}),(0,i.jsx)(r.td,{children:"The date of the data."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fiscal_period"}),(0,i.jsx)(r.td,{children:"str"}),(0,i.jsx)(r.td,{children:"Period of the financial ratios."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fiscal_year"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"Fiscal year."})]})]})]})}),(0,i.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"period_ending"}),(0,i.jsx)(r.td,{children:"str"}),(0,i.jsx)(r.td,{children:"The date of the data."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fiscal_period"}),(0,i.jsx)(r.td,{children:"str"}),(0,i.jsx)(r.td,{children:"Period of the financial ratios."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fiscal_year"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"Fiscal year."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"current_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Current ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"quick_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Quick ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"cash_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Cash ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"days_of_sales_outstanding"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Days of sales outstanding."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"days_of_inventory_outstanding"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Days of inventory outstanding."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"operating_cycle"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Operating cycle."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"days_of_payables_outstanding"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Days of payables outstanding."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"cash_conversion_cycle"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Cash conversion cycle."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"gross_profit_margin"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Gross profit margin."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"operating_profit_margin"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Operating profit margin."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"pretax_profit_margin"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Pretax profit margin."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"net_profit_margin"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Net profit margin."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"effective_tax_rate"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Effective tax rate."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"return_on_assets"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Return on assets."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"return_on_equity"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Return on equity."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"return_on_capital_employed"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Return on capital employed."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"net_income_per_ebt"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Net income per EBT."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ebt_per_ebit"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"EBT per EBIT."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ebit_per_revenue"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"EBIT per revenue."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"debt_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Debt ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"debt_equity_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Debt equity ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"long_term_debt_to_capitalization"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Long term debt to capitalization."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"total_debt_to_capitalization"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Total debt to capitalization."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"interest_coverage"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Interest coverage."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"cash_flow_to_debt_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Cash flow to debt ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"company_equity_multiplier"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Company equity multiplier."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"receivables_turnover"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Receivables turnover."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"payables_turnover"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Payables turnover."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"inventory_turnover"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Inventory turnover."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fixed_asset_turnover"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Fixed asset turnover."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"asset_turnover"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Asset turnover."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"operating_cash_flow_per_share"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Operating cash flow per share."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"free_cash_flow_per_share"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Free cash flow per share."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"cash_per_share"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Cash per share."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"payout_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Payout ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"operating_cash_flow_sales_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Operating cash flow sales ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"free_cash_flow_operating_cash_flow_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Free cash flow operating cash flow ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"cash_flow_coverage_ratios"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Cash flow coverage ratios."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"short_term_coverage_ratios"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Short term coverage ratios."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"capital_expenditure_coverage_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Capital expenditure coverage ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dividend_paid_and_capex_coverage_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Dividend paid and capex coverage ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dividend_payout_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Dividend payout ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"price_book_value_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Price book value ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"price_to_book_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Price to book ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"price_to_sales_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Price to sales ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"price_earnings_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Price earnings ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"price_to_free_cash_flows_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Price to free cash flows ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"price_to_operating_cash_flows_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Price to operating cash flows ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"price_cash_flow_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Price cash flow ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"price_earnings_to_growth_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Price earnings to growth ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"price_sales_ratio"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Price sales ratio."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dividend_yield"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Dividend yield."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dividend_yield_percentage"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Dividend yield percentage."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"dividend_per_share"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Dividend per share."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"enterprise_value_multiple"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Enterprise value multiple."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"price_fair_value"}),(0,i.jsx)(r.td,{children:"float"}),(0,i.jsx)(r.td,{children:"Price fair value."})]})]})]})}),(0,i.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"period_ending"}),(0,i.jsx)(r.td,{children:"str"}),(0,i.jsx)(r.td,{children:"The date of the data."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fiscal_period"}),(0,i.jsx)(r.td,{children:"str"}),(0,i.jsx)(r.td,{children:"Period of the financial ratios."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fiscal_year"}),(0,i.jsx)(r.td,{children:"int"}),(0,i.jsx)(r.td,{children:"Fiscal year."})]})]})]})})]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var i=t(34164);const n={tabItem:"tabItem_Ymn6"};var d=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,s),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>d});t(96540);var i=t(5260),n=t(74848);function d(e){let{title:r}=e;return(0,n.jsx)(i.A,{children:(0,n.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>g});var i=t(96540),n=t(34164),d=t(23104),s=t(56347),l=t(205),a=t(57485),c=t(31682),o=t(89466);function h(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:i,default:n}}=e;return{value:r,label:t,attributes:i,default:n}}))}function x(e){const{values:r,children:t}=e;return(0,i.useMemo)((()=>{const e=r??h(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function j(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:t}=e;const n=(0,s.W6)(),d=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,a.aZ)(d),(0,i.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(n.location.search);r.set(d,e),n.replace({...n.location,search:r.toString()})}),[d,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,d=x(e),[s,a]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:d}))),[c,h]=u({queryString:t,groupId:n}),[f,p]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,d]=(0,o.Dv)(t);return[n,(0,i.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:n}),m=(()=>{const e=c??f;return j({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{m&&a(m)}),[m]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),p(e)}),[h,p,d]),tabValues:d}}var p=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function v(e){let{className:r,block:t,selectedValue:i,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,d.a_)(),{pathname:h}=(0,s.zy)(),x=e=>{const r=e.currentTarget,t=c.indexOf(r),n=a[t].value;n!==i&&(o(r),l(n))},j=e=>{let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:r,label:t,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>c.push(e),onKeyDown:j,onClick:x,...d,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,d?.className,{"border-b-2 pointer-events-none":i===r,"border-b-2 text-[#669dcb] border-[#669dcb]":i===r&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==r&&h.startsWith("/terminal")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function _(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...r}),(0,b.jsx)(y,{...e,...r})]})}function g(e){const r=(0,p.A)();return(0,b.jsx)(_,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var i=t(96540);const n={},d=i.createContext(n);function s(e){const r=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);