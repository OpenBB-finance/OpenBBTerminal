"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2238],{13705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=t(74848),s=t(28453),l=t(94331),a=t(31787);const o={title:"MacOS",sidebar_position:2,description:"Step-by-step instructions for installing the OpenBB Terminal on MacOS. This guide covers installation for both Intel-based computers and Apple Silicon (M1) devices, and includes instructions for preliminaries like installing Rosetta for M1 users.",keywords:["OpenBB Terminal Installation","MacOS installation guide","OpenBB on Mac Intel","OpenBB on Mac M1","Rosetta installation","PKG installer","OpenBB Terminal application","MacOS Big Sur installation","MacOS Monterey installation","Apple Silicon installation","Unverified developer warning"]},r=void 0,c={id:"terminal/installation/macos",title:"MacOS",description:"Step-by-step instructions for installing the OpenBB Terminal on MacOS. This guide covers installation for both Intel-based computers and Apple Silicon (M1) devices, and includes instructions for preliminaries like installing Rosetta for M1 users.",source:"@site/content/terminal/installation/macos.md",sourceDirName:"terminal/installation",slug:"/terminal/installation/macos",permalink:"/terminal/installation/macos",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/installation/macos.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,sidebarPosition:2,frontMatter:{title:"MacOS",sidebar_position:2,description:"Step-by-step instructions for installing the OpenBB Terminal on MacOS. This guide covers installation for both Intel-based computers and Apple Silicon (M1) devices, and includes instructions for preliminaries like installing Rosetta for M1 users.",keywords:["OpenBB Terminal Installation","MacOS installation guide","OpenBB on Mac Intel","OpenBB on Mac M1","Rosetta installation","PKG installer","OpenBB Terminal application","MacOS Big Sur installation","MacOS Monterey installation","Apple Silicon installation","Unverified developer warning"]},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/terminal/installation/windows"},next:{title:"Source",permalink:"/terminal/installation/source"}},d={},p=[];function h(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{title:"MacOS - Installation | OpenBB Terminal Docs"}),"\n","\n",(0,i.jsx)(n.p,{children:"Install the OpenBB Terminal on MacOS (Big Sur or later). There are two versions of the installers available for MacOS, Intel-based and Apple Silicon (M1)."}),"\n",(0,i.jsxs)("div",{style:{height:80},children:[(0,i.jsx)(a.A,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/releases/download/v3.2.5/x86.64.MacOS.OpenBB.Terminal.v3.2.5.pkg",label:"Mac Intel Installer"}),(0,i.jsx)(a.A,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/releases/download/v3.2.5/ARM64.MacOS.OpenBB.Terminal.v3.2.5.pkg",label:"Mac M1 Installer"})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{mdxType:"summary",children:"Minimum Requirements"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MacOS Monterey or newer"}),"\n",(0,i.jsx)(n.li,{children:"Modern CPU (Intel processor made in the last 5 years or Apple Silicon chip)"}),"\n",(0,i.jsx)(n.li,{children:"At least 4GB of RAM"}),"\n",(0,i.jsx)(n.li,{children:"At least 5GB of free storage"}),"\n",(0,i.jsx)(n.li,{children:"Internet connection (cable or 4G mobile)"}),"\n"]})]}),"\n",(0,i.jsxs)(n.admonition,{title:"Apple Silicon users will need to install Rosetta prior to installation",type:"info",children:[(0,i.jsx)(n.p,{children:'To understand whether you are using an Apple Sillicon (M1) device or an Intel-based device click on the Apple Icon at the top left of your MacBook and select "About This Mac". Then under "Chip" if it says something like "Apple M1 Pro" or "Apple M1 Max", you know you have an Apple Silicon MacBook. If it says for example "2,3 GHz Quad-Core Intel Core i7" you know that you have an Intel-based MacBook and you can continue by clicking on the "Mac Intel Installer" button.'}),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{mdxType:"summary",children:"Rosetta Installation Instructions (Apple Sillicon users only)"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Press \u2318 (Command) + SPACE to open spotlight search, and type "Terminal" and hit Return (\u23ce).'}),"\n",(0,i.jsx)(n.li,{children:"Copy and paste the following code in the Terminal and hit ENTER (\u23ce):"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"softwareupdate --install-rosetta\n"})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["This will start up the Rosetta installation process and you will receive a message regarding the Licence Agreement. Type ",(0,i.jsx)(n.code,{children:"A"})," and hit Return (\u23ce)."]}),"\n",(0,i.jsx)(n.li,{children:'After the installation process has finished, you can proceed by clicking on the "Mac M1 Installer" button.'}),"\n"]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Step by step instructions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Download the PKG file from the links above."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Launch the PKG installer by double-clicking on it."}),"\n",(0,i.jsx)("img",{width:"634",alt:"image",src:"https://user-images.githubusercontent.com/11668535/234018847-f3e76345-7d4e-445d-a462-64e0d6d902bd.png"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Follow the Installer prompt. You will be asked to enter your system password."}),"\n",(0,i.jsx)("img",{width:"638",alt:"image",src:"https://user-images.githubusercontent.com/11668535/234032407-8ca009a7-0545-4196-b671-5bcc4c5cea9b.png"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This process installs the application into the ",(0,i.jsx)(n.code,{children:"/Application/OpenBB Terminal"})," folder."]}),"\n",(0,i.jsx)("img",{width:"618",alt:"image",src:"https://user-images.githubusercontent.com/11668535/234034347-cb2a80a0-81bb-4e8d-b91e-b636e161cf32.png"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Launch the application by double-clicking on the ",(0,i.jsx)(n.code,{children:"OpenBB Terminal"})," application. If everything was successful you should see a screen like the one below:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/223194653-a21966e2-cd55-44da-95eb-7c66811f629b.png",children:(0,i.jsx)("img",{alt:"run_the_terminal",src:"https://user-images.githubusercontent.com/46355364/223194653-a21966e2-cd55-44da-95eb-7c66811f629b.png"})})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"}),' During the first launch, a warning message may appear. Click, "Open". If you get a warning about opening apps from an unverified developer, please follow the instructions on ',(0,i.jsx)("a",{href:"https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac",children:"this MacOS User Guide page"})," to proceed."]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/85772166/220201620-1c42bbd4-7509-41fc-8df8-389f34fde58a.png",children:(0,i.jsx)("img",{alt:"run_the_terminal",src:"https://user-images.githubusercontent.com/85772166/220201620-1c42bbd4-7509-41fc-8df8-389f34fde58a.png"})})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var i=t(5260),s=t(74848);function l(e){let{title:n}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:n})})}},31787:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(74848);function s(e){let{href:n,label:t,type:s}=e;return(0,i.jsxs)("a",{href:n,className:"_btn text-sm !no-underline inline-flex gap-4 h-10 items-center",rel:"noreferrer noopener",target:"_blank",children:["windows"===s?(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4",height:88,width:88,viewBox:"0 0 88 88",children:(0,i.jsx)("path",{d:"m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z",fill:"currentColor"})}):(0,i.jsx)("svg",{className:"w-4 -mt-1",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:814,height:1e3,viewBox:"0 0 814 1000",children:(0,i.jsx)("path",{fill:"currentColor",d:"M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"})}),t]})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);