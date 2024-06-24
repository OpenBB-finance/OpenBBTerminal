"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84935],{35149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(74848),s=n(28453),r=n(94331),o=n(69396);const i={title:"Templates",sidebar_position:2,description:"Learn how to use and manage dashboard templates on OpenBB Terminal Pro. Save your widget layouts, set default templates, and use the advanced search to optimize your experience.",keywords:["dashboard templates","advanced search","template library","default template","widget layouts","security"]},d=void 0,l={id:"pro/dashboards/templates",title:"Templates",description:"Learn how to use and manage dashboard templates on OpenBB Terminal Pro. Save your widget layouts, set default templates, and use the advanced search to optimize your experience.",source:"@site/content/pro/dashboards/templates.md",sourceDirName:"pro/dashboards",slug:"/pro/dashboards/templates",permalink:"/pro/dashboards/templates",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/dashboards/templates.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719221197e3,sidebarPosition:2,frontMatter:{title:"Templates",sidebar_position:2,description:"Learn how to use and manage dashboard templates on OpenBB Terminal Pro. Save your widget layouts, set default templates, and use the advanced search to optimize your experience.",keywords:["dashboard templates","advanced search","template library","default template","widget layouts","security"]},sidebar:"tutorialSidebar",previous:{title:"Grouping Mechanism",permalink:"/pro/dashboards/grouping"},next:{title:"Report",permalink:"/pro/dashboards/report"}},c={},p=[];function u(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{title:"Templates | OpenBB Terminal Pro Docs"}),"\n","\n",(0,a.jsx)(o.A,{youtubeLink:"https://www.youtube.com/embed/_Fti4R5Fwrw?si=K82sUCpsvz0CNMSy",videoLegend:"Short introduction to templates"}),"\n",(0,a.jsx)(t.p,{children:"The widget layouts in dashboards can be saved as templates. This capability allows users to save dashboard layouts for future dashboards where another ticker is used, or to share with colleagues."}),"\n",(0,a.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"template",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/f1e7e276-d5b8-4568-baa3-f1141a9957bd"}),"\n",(0,a.jsx)(t.p,{children:"Using the advanced search, users can find their template library."}),"\n",(0,a.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"search template",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/aa2e83f9-b64b-4d9a-afca-86ba22900868"}),"\n",(0,a.jsx)(t.p,{children:'More importantly, once a template is defined as "default" that means that whenever a security is selected in the advanced search - that security will be loaded as a dashboard from the default template.'}),"\n",(0,a.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"Securities",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/e05607ce-401e-4a98-b493-41a55defb744"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(5260),s=n(74848);function r(e){let{title:t}=e;return(0,s.jsx)(a.A,{children:(0,s.jsx)("title",{children:t})})}},69396:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),s=n(23174),r=n(74848);function o(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[o,i]=(0,a.useState)(!0);return(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,r.jsx)("p",{children:n}),(0,r.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,r.jsx)(s.Toggle,{isOn:o,handleChange:()=>i(!o)})})]}),o&&(0,r.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,r.jsx)("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,t,n)=>{e.exports=n(49793)},49793:(e,t,n)=>{var a,s=(a=n(96540))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return s.createElement("label",{"data-testid":"Toggle-label",className:"switch"},s.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),s.createElement("span",{className:"slider round"}))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);