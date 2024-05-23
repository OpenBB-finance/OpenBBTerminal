"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70764],{66711:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(74848),i=t(28453),r=t(94331);const s={title:"show",description:"This documentation page talks about the 'show' function from OpenBB's portfolio optimization module. It details how to display portfolio optimization results using categories and portfolio engines.",keywords:["portfolio optimization","portfolio engine","show function","investment categories","usage examples","weights","performance","get available categories","set categories dict"]},l=void 0,a={id:"sdk/reference/portfolio/po/show",title:"show",description:"This documentation page talks about the 'show' function from OpenBB's portfolio optimization module. It details how to display portfolio optimization results using categories and portfolio engines.",source:"@site/content/sdk/reference/portfolio/po/show.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/show",permalink:"/sdk/reference/portfolio/po/show",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/show.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,frontMatter:{title:"show",description:"This documentation page talks about the 'show' function from OpenBB's portfolio optimization module. It details how to display portfolio optimization results using categories and portfolio engines.",keywords:["portfolio optimization","portfolio engine","show function","investment categories","usage examples","weights","performance","get available categories","set categories dict"]},sidebar:"tutorialSidebar",previous:{title:"riskparity",permalink:"/sdk/reference/portfolio/po/riskparity"},next:{title:"rbeta",permalink:"/sdk/reference/portfolio/rbeta"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const o={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"portfolio.po.show - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(o.p,{children:"Show portfolio optimization results"}),"\n",(0,n.jsxs)(o.p,{children:["Source Code: [",(0,n.jsx)(o.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L2361",children:"link"}),"]"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"openbb.portfolio.po.show(portfolio_engine: portfolio_optimization.po_engine.PoEngine, category: str = None)\n"})}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Name"}),(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Description"}),(0,n.jsx)(o.th,{children:"Default"}),(0,n.jsx)(o.th,{children:"Optional"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"portfolio_engine"}),(0,n.jsx)(o.td,{children:"PoEngine"}),(0,n.jsxs)(o.td,{children:["Portfolio optimization engine",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(o.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,n.jsx)(o.td,{children:"None"}),(0,n.jsx)(o.td,{children:"False"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"category"}),(0,n.jsx)(o.td,{children:"str"}),(0,n.jsxs)(o.td,{children:["Category to show, by default None",(0,n.jsx)("br",{}),"After loading a portfolio with ",(0,n.jsx)(o.code,{children:"portfolio.po.load"})," you can use",(0,n.jsx)("br",{}),"the object method ",(0,n.jsx)(o.code,{children:"get_available_categories()"})," to get a list of available categories.",(0,n.jsx)("br",{}),"You can also use the object method ",(0,n.jsx)(o.code,{children:"set_categories_dict()"})," to set a custom dictionary",(0,n.jsx)("br",{}),'of categories. The dictionary must contain "CURRENT_INVESTED_AMOUNT" and "CURRENT_WEIGHTS"',(0,n.jsx)("br",{}),"as keys as shown in the example below."]}),(0,n.jsx)(o.td,{children:"None"}),(0,n.jsx)(o.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Description"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Union[pd.DataFrame, Tuple[pd.DataFrame, pd.DataFrame]]"}),(0,n.jsx)(o.td,{children:"Portfolio weights and categories"})]})})]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols=["AAPL", "MSFT", "AMZN"])\nd = {\n'})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'"SECTOR": {\n            "AAPL": "INFORMATION TECHNOLOGY",\n            "MSFT": "INFORMATION TECHNOLOGY",\n            "AMZN": "CONSUMER DISCRETIONARY",\n        },\n        "CURRENT_INVESTED_AMOUNT": {\n            "AAPL": "100000.0",\n            "MSFT": "200000.0",\n            "AMZN": "300000.0",\n        },\n        "CURRENCY": {\n            "AAPL": "USD",\n            "MSFT": "USD",\n            "AMZN": "USD",\n        },\n    }\n'})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"p.set_categories_dict(categories=d)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"['SECTOR']\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:'weights_df, category_df = openbb.portfolio.po.show(portfolio_engine=p, category="SECTOR")\n'})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n'})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"['ASSET_CLASS',\n 'SECTOR',\n 'INDUSTRY',\n 'COUNTRY',\n 'CURRENT_INVESTED_AMOUNT',\n 'CURRENCY']\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:'weights_df, category_df = openbb.portfolio.po.show(portfolio_engine=p, category="ASSET_CLASS")\n'})}),"\n",(0,n.jsx)(o.hr,{})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,o,t)=>{t.d(o,{A:()=>r});t(96540);var n=t(5260),i=t(74848);function r(e){let{title:o}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:o})})}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>l});var n=t(96540);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);