"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),b=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,s=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(s,o(o({ref:t},p),{},{components:n})):r.createElement(s,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>b});var r=n(87462),a=(n(67294),n(3905));const i={title:"trades",description:"OpenBB Terminal Function"},o="trades",c={unversionedId:"reference/crypto/dd/trades",id:"reference/crypto/dd/trades",title:"trades",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/crypto/dd/trades.md",sourceDirName:"reference/crypto/dd",slug:"/reference/crypto/dd/trades",permalink:"/terminal/reference/crypto/dd/trades",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/trades.md",tags:[],version:"current",frontMatter:{title:"trades",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"tk",permalink:"/terminal/reference/crypto/dd/tk"},next:{title:"twitter",permalink:"/terminal/reference/crypto/dd/twitter"}},l={},b=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:b};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trades"},"trades"),(0,a.kt)("p",null,"Get the latest trades for selected coin"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"trades [-e {aax,alpaca,ascendex,bequant,bibox,bigone,binance,binancecoinm,binanceus,binanceusdm,bit2c,bitbank,bitbay,bitbns,bitcoincom,bitfinex,bitfinex2,bitflyer,bitforex,bitget,bithumb,bitmart,bitmex,bitopro,bitpanda,bitrue,bitso,bitstamp,bitstamp1,bittrex,bitvavo,bkex,bl3p,blockchaincom,btcalpha,btcbox,btcex,btcmarkets,btctradeua,btcturk,buda,bw,bybit,bytetrade,cex,coinbase,coinbaseprime,coinbasepro,coincheck,coinex,coinfalcon,coinmate,coinone,coinspot,crex24,cryptocom,currencycom,delta,deribit,digifinex,eqonex,exmo,flowbtc,fmfwio,ftx,ftxus,gate,gateio,gemini,hitbtc,hitbtc3,hollaex,huobi,huobijp,huobipro,idex,independentreserve,indodax,itbit,kraken,kucoin,kucoinfutures,kuna,latoken,lbank,lbank2,liquid,luno,lykke,mercado,mexc,mexc3,ndax,novadax,oceanex,okcoin,okex,okex5,okx,paymium,phemex,poloniex,probit,qtrade,ripio,stex,therock,tidebit,tidex,timex,tokocrypto,upbit,wavesexchange,wazirx,whitebit,woo,yobit,zaif,zb,zipmex,zonda}] [--vs VS]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exchange"),(0,a.kt)("td",{parentName:"tr",align:null},"Exchange to search for order book"),(0,a.kt)("td",{parentName:"tr",align:null},"binance"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"aax, alpaca, ascendex, bequant, bibox, bigone, binance, binancecoinm, binanceus, binanceusdm, bit2c, bitbank, bitbay, bitbns, bitcoincom, bitfinex, bitfinex2, bitflyer, bitforex, bitget, bithumb, bitmart, bitmex, bitopro, bitpanda, bitrue, bitso, bitstamp, bitstamp1, bittrex, bitvavo, bkex, bl3p, blockchaincom, btcalpha, btcbox, btcex, btcmarkets, btctradeua, btcturk, buda, bw, bybit, bytetrade, cex, coinbase, coinbaseprime, coinbasepro, coincheck, coinex, coinfalcon, coinmate, coinone, coinspot, crex24, cryptocom, currencycom, delta, deribit, digifinex, eqonex, exmo, flowbtc, fmfwio, ftx, ftxus, gate, gateio, gemini, hitbtc, hitbtc3, hollaex, huobi, huobijp, huobipro, idex, independentreserve, indodax, itbit, kraken, kucoin, kucoinfutures, kuna, latoken, lbank, lbank2, liquid, luno, lykke, mercado, mexc, mexc3, ndax, novadax, oceanex, okcoin, okex, okex5, okx, paymium, phemex, poloniex, probit, qtrade, ripio, stex, therock, tidebit, tidex, timex, tokocrypto, upbit, wavesexchange, wazirx, whitebit, woo, yobit, zaif, zb, zipmex, zonda")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vs"),(0,a.kt)("td",{parentName:"tr",align:null},"Quote currency (what to view coin vs)"),(0,a.kt)("td",{parentName:"tr",align:null},"usdt"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"AUD, BIDR, BKRW, BNB, BRL, BTC, BUSD, BVND, DAI, DOGE, DOT, ETH, EUR, GBP, IDRT, NGN, PAX, PLN, RUB, TRX, TRY, TUSD, UAH, USDC, USDP, USDS, USDT, UST, VAI, XRP, ZAR")))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);