"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41561],{43016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=r(74848),n=r(28453),i=r(94331);const o={title:"ownership",description:"This documentation page includes detailed information about the 'ownership' feature. Users can learn about the usage, available parameters, and filtering presets to extract specific ownership data of companies.",keywords:["ownership","ownership data","companies data","usage","parameters","preset","filter presets","limit","reverse","sort","stocks"]},a=void 0,d={id:"terminal/reference/stocks/screener/ownership",title:"ownership",description:"This documentation page includes detailed information about the 'ownership' feature. Users can learn about the usage, available parameters, and filtering presets to extract specific ownership data of companies.",source:"@site/content/terminal/reference/stocks/screener/ownership.md",sourceDirName:"terminal/reference/stocks/screener",slug:"/terminal/reference/stocks/screener/ownership",permalink:"/terminal/reference/stocks/screener/ownership",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/screener/ownership.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,frontMatter:{title:"ownership",description:"This documentation page includes detailed information about the 'ownership' feature. Users can learn about the usage, available parameters, and filtering presets to extract specific ownership data of companies.",keywords:["ownership","ownership data","companies data","usage","parameters","preset","filter presets","limit","reverse","sort","stocks"]},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/terminal/reference/stocks/screener/overview"},next:{title:"performance",permalink:"/terminal/reference/stocks/screener/performance"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"stocks/screener/ownership - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Prints ownership data of the companies that meet the pre-set filtering."}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"ownership [-p Desired preset.] [-l LIMIT] [-r] [-s SORT]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"preset"}),(0,s.jsx)(t.td,{children:"Filter presets"}),(0,s.jsx)(t.td,{children:"top_gainers"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"template, oversold_under_5dol, potential_reversals, top_performers_all, death_cross, unusual_volume, news_scanner, cheap_bottom_dividend, cheap_dividend, top_performers_healthcare, bull_runs_over_10pct, value_stocks, golden_cross, growth_stocks, channel_up_and_low_debt_and_sma_50and200, buffett_like, continued_momentum_scan, analyst_strong_buy, under_15dol_stocks, 5pct_above_low, cheap_oversold, weak_support_and_top_performers, undervalue, oversold_under_3dol, top_performers_tech, rosenwald_gtfo, recent_growth_and_support, heavy_inst_ins, modified_neff, simplistic_momentum_scanner_under_7dol, golden_cross_penny, break_out_stocks, high_vol_and_low_debt, stocks_strong_support_levels, sexy_year, short_squeeze_scan, oversold, rosenwald, modified_dreman, top_gainers, top_losers, new_high, new_low, most_volatile, most_active, overbought, downgrades, upgrades, earnings_before, earnings_after, recent_insider_buying, recent_insider_selling, major_news, horizontal_sr, tl_resistance, tl_support, wedge_up, wedge_down, wedge, triangle_ascending, triangle_descending, channel_up, channel_down, channel, double_top, double_bottom, multiple_top, multiple_bottom, head_shoulders, head_shoulders_inverse"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"Limit of stocks to print"}),(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"reverse"}),(0,s.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sort"}),(0,s.jsx)(t.td,{children:"Sort elements of the table."}),(0,s.jsx)(t.td,{children:"Ticker"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"ticker, marketcap, outstanding, float, insiderown, insidertrans, instown, insttrans, floatshort, shortratio, avgvolume, price, change, volume"})]})]})]}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(5260),n=r(74848);function i(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(96540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);