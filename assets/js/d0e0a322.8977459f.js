"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94328],{26836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(74848),d=r(28453),s=r(94331);const o={title:"load",description:"The page provides an explanation of the 'load' feature that is used to load forex data for two given symbols. It includes the source code link and details about the parameters including to_symbol, from_symbol, resolution, interval, start_date, source, and verbose.",keywords:["forex data","currency symbols","forex parameters","load forex data","forex data source","YahooFinance forex data","data resolution","data interval","verbose data loading"]},a=void 0,l={id:"sdk/reference/forex/load",title:"load",description:"The page provides an explanation of the 'load' feature that is used to load forex data for two given symbols. It includes the source code link and details about the parameters including to_symbol, from_symbol, resolution, interval, start_date, source, and verbose.",source:"@site/content/sdk/reference/forex/load.md",sourceDirName:"sdk/reference/forex",slug:"/sdk/reference/forex/load",permalink:"/sdk/reference/forex/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forex/load.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"load",description:"The page provides an explanation of the 'load' feature that is used to load forex data for two given symbols. It includes the source code link and details about the parameters including to_symbol, from_symbol, resolution, interval, start_date, source, and verbose.",keywords:["forex data","currency symbols","forex parameters","load forex data","forex data source","YahooFinance forex data","data resolution","data interval","verbose data loading"]},sidebar:"tutorialSidebar",previous:{title:"get_currency_list",permalink:"/sdk/reference/forex/get_currency_list"},next:{title:"calendar",permalink:"/sdk/reference/forex/oanda/calendar"}},i={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"forex.load - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Load forex for two given symbols."}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/forex_helper.py#L95",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.forex.load(to_symbol: str, from_symbol: str, resolution: str = "d", interval: str = "1day", start_date: Optional[str] = None, source: str = "YahooFinance", verbose: bool = False)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"to_symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The from currency symbol. Ex: USD, EUR, GBP, YEN"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"from_symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The from currency symbol. Ex: USD, EUR, GBP, YEN"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"resolution"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:'The resolution for the data, by default "d"'}),(0,n.jsx)(t.td,{children:"d"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:'What interval to get data for, by default "1day"'}),(0,n.jsx)(t.td,{children:"1day"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Optional[str]"}),(0,n.jsx)(t.td,{children:'When to begin loading in data, by default last_year.strftime("%Y-%m-%d")'}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:'Where to get data from, by default "YahooFinance"'}),(0,n.jsx)(t.td,{children:"YahooFinance"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"verbose"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Display verbose information on what was the pair that was loaded, by default True"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"The loaded data"})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),d=r(74848);function s(e){let{title:t}=e;return(0,d.jsx)(n.A,{children:(0,d.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const d={},s=n.createContext(d);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);