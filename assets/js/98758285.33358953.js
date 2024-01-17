"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12826],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,g=s["".concat(d,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(g,l(l({ref:e},m),{},{components:n})):a.createElement(g,l({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6690:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"cash",description:"Learn how to use the Cash Flow Statement API endpoint to retrieve information about cash flow statements. Understand the parameters and return values of the API, and explore the available data fields for cash flow statements.",keywords:["Cash Flow Statement","cash flow statement parameters","cash flow statement returns","cash flow statement data","python obb.equity.fundamental.cash","symbol","period","limit","provider","cik","filing date","period of report date","include sources","order","sort","net income","depreciation and amortization","stock based compensation","deferred income tax","other non-cash items","changes in operating assets and liabilities","accounts receivables","inventory","vendor non-trade receivables","other current and non-current assets","accounts payables","deferred revenue","other current and non-current liabilities","net cash flow from operating activities","purchases of marketable securities","sales from maturities of investments","investments in property plant and equipment","payments from acquisitions","other investing activities","net cash flow from investing activities","taxes paid on net share settlement","dividends paid","common stock repurchased","debt proceeds","debt repayment","other financing activities","net cash flow from financing activities","net change in cash"]},l=void 0,o={unversionedId:"excel/reference/equity/fundamental/cash",id:"excel/reference/equity/fundamental/cash",title:"cash",description:"Learn how to use the Cash Flow Statement API endpoint to retrieve information about cash flow statements. Understand the parameters and return values of the API, and explore the available data fields for cash flow statements.",source:"@site/content/excel/reference/equity/fundamental/cash.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/cash",permalink:"/excel/reference/equity/fundamental/cash",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/cash.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1705504594,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"cash",description:"Learn how to use the Cash Flow Statement API endpoint to retrieve information about cash flow statements. Understand the parameters and return values of the API, and explore the available data fields for cash flow statements.",keywords:["Cash Flow Statement","cash flow statement parameters","cash flow statement returns","cash flow statement data","python obb.equity.fundamental.cash","symbol","period","limit","provider","cik","filing date","period of report date","include sources","order","sort","net income","depreciation and amortization","stock based compensation","deferred income tax","other non-cash items","changes in operating assets and liabilities","accounts receivables","inventory","vendor non-trade receivables","other current and non-current assets","accounts payables","deferred revenue","other current and non-current liabilities","net cash flow from operating activities","purchases of marketable securities","sales from maturities of investments","investments in property plant and equipment","payments from acquisitions","other investing activities","net cash flow from investing activities","taxes paid on net share settlement","dividends paid","common stock repurchased","debt proceeds","debt repayment","other financing activities","net cash flow from financing activities","net change in cash"]},sidebar:"tutorialSidebar",previous:{title:"balance_growth",permalink:"/excel/reference/equity/fundamental/balance_growth"},next:{title:"cash_growth",permalink:"/excel/reference/equity/fundamental/cash_growth"}},d={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:p},s="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cash Flow Statement. Information about the cash flow statement."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.CASH(symbol;[period];[limit];[provider];[fiscal_year];[filing_date];[filing_date_lt];[filing_date_lte];[filing_date_gt];[filing_date_gte];[period_of_report_date];[period_of_report_date_lt];[period_of_report_date_lte];[period_of_report_date_gt];[period_of_report_date_gte];[include_sources];[order];[sort])\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.FUNDAMENTAL.CASH("AAPL")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"symbol")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"True"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, polygon, defaults to fmp."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The specific fiscal year.  Reports do not go beyond 2008. (provider: intrinio)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_lt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date less than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_lte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date less than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_gt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date greater than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date_gte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date greater than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_lt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date less than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_lte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date less than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_gt"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date greater than the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_of_report_date_gte"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Period of report date greater than or equal to the given date. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_sources"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to include the sources of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"order"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Order of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Sort of the financial statement. (provider: polygon)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"return-data"},"Return Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_ending"),(0,r.kt)("td",{parentName:"tr",align:null},"The end date of the reporting period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fiscal_period"),(0,r.kt)("td",{parentName:"tr",align:null},"The fiscal period of the report.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,r.kt)("td",{parentName:"tr",align:null},"The fiscal year of the fiscal period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the filing. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accepted_date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date the filing was accepted. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reported_currency"),(0,r.kt)("td",{parentName:"tr",align:null},"The currency in which the cash flow statement was reported. (provider: fmp);     The currency in which the balance sheet is reported. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income"),(0,r.kt)("td",{parentName:"tr",align:null},"Net income. (provider: fmp);     Consolidated Net Income. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"depreciation_and_amortization"),(0,r.kt)("td",{parentName:"tr",align:null},"Depreciation and amortization. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deferred_income_tax"),(0,r.kt)("td",{parentName:"tr",align:null},"Deferred income tax. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stock_based_compensation"),(0,r.kt)("td",{parentName:"tr",align:null},"Stock-based compensation. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_working_capital"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in working capital. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_account_receivables"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in account receivables. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_inventory"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in inventory. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_account_payable"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in account payable. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_other_working_capital"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in other working capital. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_in_other_non_cash_items"),(0,r.kt)("td",{parentName:"tr",align:null},"Change in other non-cash items. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_operating_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash from operating activities. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"purchase_of_property_plant_and_equipment"),(0,r.kt)("td",{parentName:"tr",align:null},"Purchase of property, plant and equipment. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acquisitions"),(0,r.kt)("td",{parentName:"tr",align:null},"Acquisitions. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"purchase_of_investment_securities"),(0,r.kt)("td",{parentName:"tr",align:null},"Purchase of investment securities. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sale_and_maturity_of_investments"),(0,r.kt)("td",{parentName:"tr",align:null},"Sale and maturity of investments. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Other investing activities. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash from investing activities. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repayment_of_debt"),(0,r.kt)("td",{parentName:"tr",align:null},"Repayment of debt. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issuance_of_common_equity"),(0,r.kt)("td",{parentName:"tr",align:null},"Issuance of common equity. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repurchase_of_common_equity"),(0,r.kt)("td",{parentName:"tr",align:null},"Repurchase of common equity. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment_of_dividends"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment of dividends. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Other financing activities. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash from financing activities. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"effect_of_exchange_rate_changes_on_cash"),(0,r.kt)("td",{parentName:"tr",align:null},"Effect of exchange rate changes on cash. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_change_in_cash_and_equivalents"),(0,r.kt)("td",{parentName:"tr",align:null},"Net change in cash and equivalents. (provider: fmp, intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_at_beginning_of_period"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash at beginning of period. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_at_end_of_period"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash at end of period. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operating_cash_flow"),(0,r.kt)("td",{parentName:"tr",align:null},"Operating cash flow. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"capital_expenditure"),(0,r.kt)("td",{parentName:"tr",align:null},"Capital expenditure. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"free_cash_flow"),(0,r.kt)("td",{parentName:"tr",align:null},"Free cash flow. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link"),(0,r.kt)("td",{parentName:"tr",align:null},"Link to the filing. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"final_link"),(0,r.kt)("td",{parentName:"tr",align:null},"Link to the filing document. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provision_for_loan_losses"),(0,r.kt)("td",{parentName:"tr",align:null},"Provision for Loan Losses (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provision_for_credit_losses"),(0,r.kt)("td",{parentName:"tr",align:null},"Provision for credit losses (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"depreciation_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"Depreciation Expense. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amortization_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"Amortization Expense. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"share_based_compensation"),(0,r.kt)("td",{parentName:"tr",align:null},"Share-based compensation. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"non_cash_adjustments_to_reconcile_net_income"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-Cash Adjustments to Reconcile Net Income. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changes_in_operating_assets_and_liabilities"),(0,r.kt)("td",{parentName:"tr",align:null},"Changes in Operating Assets and Liabilities (Net) (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_continuing_operating_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Continuing Operating Activities (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_discontinued_operating_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Discontinued Operating Activities (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income_continuing_operations"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Income (Continuing Operations) (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_income_discontinued_operations"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Income (Discontinued Operations) (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"divestitures"),(0,r.kt)("td",{parentName:"tr",align:null},"Divestitures (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sale_of_property_plant_and_equipment"),(0,r.kt)("td",{parentName:"tr",align:null},"Sale of Property, Plant, and Equipment (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"purchase_of_investments"),(0,r.kt)("td",{parentName:"tr",align:null},"Purchase of Investments (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loans_held_for_sale"),(0,r.kt)("td",{parentName:"tr",align:null},"Loans Held for Sale (Net) (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_continuing_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Continuing Investing Activities (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_discontinued_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Discontinued Investing Activities (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repurchase_of_preferred_equity"),(0,r.kt)("td",{parentName:"tr",align:null},"Repurchase of Preferred Equity (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issuance_of_preferred_equity"),(0,r.kt)("td",{parentName:"tr",align:null},"Issuance of Preferred Equity (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issuance_of_debt"),(0,r.kt)("td",{parentName:"tr",align:null},"Issuance of Debt (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_interest_received"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash Interest Received (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_change_in_deposits"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Change in Deposits (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_increase_in_fed_funds_sold"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Increase in Fed Funds Sold (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_continuing_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Continuing Financing Activities (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_from_discontinued_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Cash from Discontinued Financing Activities (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"effect_of_exchange_rate_changes"),(0,r.kt)("td",{parentName:"tr",align:null},"Effect of Exchange Rate Changes (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_net_changes_in_cash"),(0,r.kt)("td",{parentName:"tr",align:null},"Other Net Changes in Cash (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_income_taxes_paid"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash Income Taxes Paid (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_interest_paid"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash Interest Paid (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_operating_activities_continuing"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from operating activities continuing. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_operating_activities_discontinued"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from operating activities discontinued. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_operating_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from operating activities. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_investing_activities_continuing"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from investing activities continuing. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_investing_activities_discontinued"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from investing activities discontinued. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_investing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from investing activities. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_financing_activities_continuing"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from financing activities continuing. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_financing_activities_discontinued"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from financing activities discontinued. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_from_financing_activities"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow from financing activities. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_continuing"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow continuing. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow_discontinued"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow discontinued. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exchange_gains_losses"),(0,r.kt)("td",{parentName:"tr",align:null},"Exchange gains losses. (provider: polygon)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_cash_flow"),(0,r.kt)("td",{parentName:"tr",align:null},"Net cash flow. (provider: polygon)")))))}u.isMDXComponent=!0}}]);