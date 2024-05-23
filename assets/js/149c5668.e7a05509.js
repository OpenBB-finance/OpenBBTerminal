"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5351],{80285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=n(74848),i=n(28453),l=n(94331);const r={title:"Configuration & Settings",sidebar_position:5,description:"This documentation page details the various settings and feature flags used to customize the OpenBB Platform CLI.",keywords:["Settings Menu","Feature Flags Menu","customize CLI","alter CLI behaviour","environment variables","Documentation","OpenBB Platform CLI","preferences","user"]},d=void 0,c={id:"cli/configuration",title:"Configuration & Settings",description:"This documentation page details the various settings and feature flags used to customize the OpenBB Platform CLI.",source:"@site/content/cli/configuration.md",sourceDirName:"cli",slug:"/cli/configuration",permalink:"/cli/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/cli/configuration.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1716479339e3,sidebarPosition:5,frontMatter:{title:"Configuration & Settings",sidebar_position:5,description:"This documentation page details the various settings and feature flags used to customize the OpenBB Platform CLI.",keywords:["Settings Menu","Feature Flags Menu","customize CLI","alter CLI behaviour","environment variables","Documentation","OpenBB Platform CLI","preferences","user"]},sidebar:"tutorialSidebar",previous:{title:"Commands And Arguments",permalink:"/cli/commands-and-arguments"},next:{title:"Hub Synchronization",permalink:"/cli/hub"}},o={},a=[{value:"Settings Menu",id:"settings-menu",level:2},{value:"Feature Flags",id:"feature-flags",level:3},{value:"Preferences",id:"preferences",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{title:"Configuration & Settings - | OpenBB Platform CLI Docs"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to the OpenBB Platform's ",(0,s.jsx)(t.code,{children:"user_settings.json"})," file, described ",(0,s.jsx)(t.a,{href:"/platform/usage/settings_and_environment_variables",children:"here"}),", there are settings and environment variables affecting the CLI only."]}),"\n",(0,s.jsxs)(t.admonition,{type:"important",children:[(0,s.jsxs)(t.p,{children:["API credentials are defined in the ",(0,s.jsx)(t.code,{children:"user_settings.json"})," file."]}),(0,s.jsxs)(t.p,{children:["Find all data providers ",(0,s.jsx)(t.a,{href:"/platform/extensions/data_extensions",children:"here"}),", and manage all your credentials directly on the ",(0,s.jsx)(t.a,{href:"https://my.openbb.co/app/platform/credentials",children:"OpenBB Hub"}),"."]}),(0,s.jsxs)(t.p,{children:["Define default data sources by following the pattern outlined ",(0,s.jsx)(t.a,{href:"data-sources",children:"here"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"settings-menu",children:"Settings Menu"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"/settings"})," menu provides methods for customizing the look and feel of the CLI. The menu is divided into two sections:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Feature Flags","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"On/Off status is reflected by red/green text."}),"\n",(0,s.jsx)(t.li,{children:"Status is toggled by entering the item as a command."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Preferences","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Choices and options will be presented as a typical function."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"feature-flags",children:"Feature Flags"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Feature Flags"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"interactive"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Enable/disable interactive tables.  Disabling prints the table directly on the CLI screen."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"cls"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Clear the screen after each command.  Default state is off."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"promptkit"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Enable auto complete and history.  Default state is on."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"richpanel"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Displays a border around menus.  Default state is on."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"tbhint"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Display usage hints in the bottom toolbar.  Default state is on."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"exithelp"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Automatically print the screen after navigating back one menu.  Default state is off."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"overwrite"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Automatically overwrite exported files with the same name.  Default state is off."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"obbject_msg"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Displays a message whenever a new result is added to the registry.  Default state is off."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"version"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Displays the currently installed version number in the bottom right corner."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"preferences",children:"Preferences"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Preferences"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"console_style"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"apply a custom rich style to the CLI"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"flair"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"choose flair icon"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"timezone"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"pick timezone"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"language"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"translation language"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"n_rows"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"number of rows to show on non interactive tables"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"n_cols"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"number of columns to show on non interactive tables"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"obbject_res"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"define the maximum number of obbjects allowed in the registry"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"obbject_display"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"define the maximum number of cached results to display on the help menu"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(5260),i=n(74848);function l(e){let{title:t}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(96540);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);