"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8893],{78191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var o=t(74848),s=t(28453),r=t(94331),i=t(69396);const a={title:"Keyboard Hotkey Macros",sidebar_position:7,description:"Learn how to set hotkeys macros on a customizable keyboard for swift and efficient investment research. Learn how to remap keys, assigning them custom macro commands, shortcuts, or key combinations using the VIA configurator for an enhanced experience, especially for OpenBB power users.",keywords:["customizable keyboard","hotkeys macros","investment research","VIA configurator","Keychron","OpenBB power users","command pipeline","remap keys","macro commands","shortcuts","key combinations"]},c=void 0,l={id:"terminal/usage/keyboard-hotkey-macros",title:"Keyboard Hotkey Macros",description:"Learn how to set hotkeys macros on a customizable keyboard for swift and efficient investment research. Learn how to remap keys, assigning them custom macro commands, shortcuts, or key combinations using the VIA configurator for an enhanced experience, especially for OpenBB power users.",source:"@site/content/terminal/usage/keyboard-hotkey-macros.md",sourceDirName:"terminal/usage",slug:"/terminal/usage/keyboard-hotkey-macros",permalink:"/terminal/usage/keyboard-hotkey-macros",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/keyboard-hotkey-macros.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,sidebarPosition:7,frontMatter:{title:"Keyboard Hotkey Macros",sidebar_position:7,description:"Learn how to set hotkeys macros on a customizable keyboard for swift and efficient investment research. Learn how to remap keys, assigning them custom macro commands, shortcuts, or key combinations using the VIA configurator for an enhanced experience, especially for OpenBB power users.",keywords:["customizable keyboard","hotkeys macros","investment research","VIA configurator","Keychron","OpenBB power users","command pipeline","remap keys","macro commands","shortcuts","key combinations"]},sidebar:"tutorialSidebar",previous:{title:"Hub Synchronization",permalink:"/terminal/usage/hub"},next:{title:"Data Available",permalink:"/terminal/menus/"}},d={},h=[{value:"Supported Configurators",id:"supported-configurators",level:2},{value:"VIA",id:"via",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{title:"Keyboard Hotkey Macros - Usage | OpenBB Terminal Docs"}),"\n","\n",(0,o.jsx)(i.A,{youtubeLink:"https://www.youtube.com/embed/cgeN3Ep2nEw?si=YR6l4AfhhJjxzH0H",videoLegend:"Long video on using VIA to configure my Keychron keyboard for OpenBB"}),"\n",(0,o.jsx)(n.p,{children:"This document will explain how you can set hotkeys macros on your customizable keyboard which allow you to perform investment research in a few seconds."}),"\n",(0,o.jsx)(n.h2,{id:"supported-configurators",children:"Supported Configurators"}),"\n",(0,o.jsx)(n.h3,{id:"via",children:"VIA"}),"\n",(0,o.jsxs)(n.p,{children:["This document will explain how you can set hotkeys on your customizable keyboard using ",(0,o.jsx)(n.a,{href:"https://www.caniusevia.com/",children:"VIA"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Here is a list of VIA's supported keyboards: ",(0,o.jsx)(n.a,{href:"https://www.caniusevia.com/docs/supported_keyboards",children:"https://www.caniusevia.com/docs/supported_keyboards"})]}),"\n",(0,o.jsxs)(n.p,{children:["Note: We were in the market looking for a keyboard that could be highliy customizable for the needs of OpenBB power users. This is when we stumbled upon Keychron and the VIA configurator which allows users to intuitively remap any key on the keyboard, and create numerous macro commands, shortcuts, or key combinations.\nHere's a post from Keychron on VIA: ",(0,o.jsx)(n.a,{href:"https://www.keychron.com/blogs/news/why-qmk-via-is-one-of-the-most-essential-features-for-a-custom-keyboard",children:"Why VIA is one of the most essential features for a custom keyboard?"})]}),"\n",(0,o.jsxs)(n.p,{children:["For the purpose of this example, the command pipeline we are creating has the following sequence of commands: ",(0,o.jsx)(n.code,{children:"dps/psi/../fa/pt/income/.."})]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Try VIA ",(0,o.jsx)(n.a,{href:"https://usevia.app/",children:"here"}),". The following screen should popup"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/25267873/236660856-f92ac602-cde9-48e6-8029-c083fbb75ff9.png",alt:"VIA"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:'Select the Layer you are interested in altering. As we\'re not looking forward to remap any of the existing main keys, we need to go to layer 2, 3 or 4. In my case, with a Keychron Q2, I know that Layer 4 can be accessed by pressing on "Fn2". Thus, I select that layer.'}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/25267873/236660841-09203874-8a8e-4393-8674-357aad67a22b.png",alt:"Layer"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Most keys should have a triangle upside down which simbolizes that they don't have any functionality. You want to select one of those keys to contain your hotkey routine. After that selection you want to remap the key functionality, hence in the ",(0,o.jsx)(n.strong,{children:"KEYMAP settings"}),' below you click on MACROS tab and select "MO". Now the screen should look like this:']}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/25267873/236660948-a148582e-f928-4f12-ae54-9bdd3adfd020.png",alt:"Layer"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:['Now we want to change what "MO" does and for that we select the ',(0,o.jsx)(n.strong,{children:"MACROS settings"}),' below. Then we can select "M0" and insert ',(0,o.jsx)(n.code,{children:"dps/psi/../fa/pt/income/..{KC_ENT}"}),". The screen should look like this:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/25267873/236661126-eeb5dc7c-2c01-4a43-ab64-12c470e864ce.png",alt:"Macro"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that the ",(0,o.jsx)(n.code,{children:"{KC_ENT}"})," will ensure that the command is run on the terminal."]}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Save. To ensure that everything is correct you can go into the ",(0,o.jsx)(n.strong,{children:"KEYMAP settings"})," and click on the hotkey that you just created to see if it contains the sequence of commands, the following sequence should appear:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/25267873/236661232-4f9119de-af37-49a2-948d-cfd6d650ed92.png",alt:"Save"})}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsxs)(n.li,{children:["Finally, we are ready to test it on the ",(0,o.jsx)(n.a,{href:"https://my.openbb.co/app/terminal",children:"OpenBB Terminal"}),". After going into ",(0,o.jsx)(n.code,{children:"stocks"})," and doing ",(0,o.jsx)(n.code,{children:"load AAPL"}),', I pressed "Fn2+Z" which lead to:']}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/25267873/236660272-290fe586-7663-4cd6-bfc0-80b7f8f2efd1.png",alt:"Test"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(5260),s=t(74848);function r(e){let{title:n}=e;return(0,s.jsx)(o.A,{children:(0,s.jsx)("title",{children:n})})}},69396:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(96540),s=t(23174),r=t(74848);function i(e){let{youtubeLink:n,videoLegend:t="Tutorial video"}=e;const[i,a]=(0,o.useState)(!0);return(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,r.jsx)("p",{children:t}),(0,r.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,r.jsx)(s.Toggle,{isOn:i,handleChange:()=>a(!i)})})]}),i&&(0,r.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,r.jsx)("iframe",{id:n,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,n,t)=>{e.exports=t(49793)},49793:(e,n,t)=>{var o,s=(o=t(96540))&&"object"==typeof o&&"default"in o?o.default:o;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===t&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),n.Toggle=function(e){return s.createElement("label",{"data-testid":"Toggle-label",className:"switch"},s.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),s.createElement("span",{className:"slider round"}))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);