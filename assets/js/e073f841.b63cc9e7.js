"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95841],{64154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(74848),a=n(28453),i=n(94331);const o={title:"contracts",description:"This page details how to effectively fetch all contract addresses for a specific blockchain platform with customizable parameters for limitations and sorting. Various platforms such as Ethereum and Bitcoin are discussed, along with illustration on detailed sets of commands.",keywords:["contracts","blockchain platform","smart contracts","ethereum","bitcoin","parameters","sort data","display","crypto"]},c=void 0,s={id:"terminal/reference/crypto/ov/contracts",title:"contracts",description:"This page details how to effectively fetch all contract addresses for a specific blockchain platform with customizable parameters for limitations and sorting. Various platforms such as Ethereum and Bitcoin are discussed, along with illustration on detailed sets of commands.",source:"@site/content/terminal/reference/crypto/ov/contracts.md",sourceDirName:"terminal/reference/crypto/ov",slug:"/terminal/reference/crypto/ov/contracts",permalink:"/terminal/reference/crypto/ov/contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ov/contracts.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1718975972e3,frontMatter:{title:"contracts",description:"This page details how to effectively fetch all contract addresses for a specific blockchain platform with customizable parameters for limitations and sorting. Various platforms such as Ethereum and Bitcoin are discussed, along with illustration on detailed sets of commands.",keywords:["contracts","blockchain platform","smart contracts","ethereum","bitcoin","parameters","sort data","display","crypto"]},sidebar:"tutorialSidebar",previous:{title:"ch",permalink:"/terminal/reference/crypto/ov/ch"},next:{title:"cr",permalink:"/terminal/reference/crypto/ov/cr"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"crypto/ov/contracts - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Gets all contract addresses for given platform. Provide platform id with -p/--platform parameter You can display only N number of smart contracts with --limit parameter. You can sort data by id, type, active, balance --sortby parameter and also with --reverse flag to sort descending. Displays: id, type, active, balance"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"contracts [-p {btc-bitcoin,eos-eos,eth-ethereum,xrp-xrp,bch-bitcoin-cash,xem-nem,neo-neo,xlm-stellar,etc-ethereum-classic,qtum-qtum,zec-zcash,vet-vechain,bts-bitshares,waves-waves,nxt-nxt,act-achain,ubq-ubiq,xcp-counterparty,ppc-peercoin,etp-metaverse-etp,signa-signa,omni-omni,trx-tron,bnb-binance-coin,ardr-ardor,ht-huobi-token,wan-wanchain,ftm-fantom,matic-polygon,afcash-africunia-bank,avax-avalanche,sol-solana,blvr-believer,cake-pancakeswap,bcna-bitcanna831,fsxu-flashx-ultra,chik-chickenkebab-finance,jgn-juggernaut7492,crx-cryptex,whirl-whirl-finance,etl-etherlite,eubi-eubi-token,swam-swapmatic-token,shells-shells,levelg-levelg,lyr-lyra,ants-fireants,berry-berry,drc-deracoin,sxcc-southxchange-coin,vega-vega-coin,xgk-goldkash,ptd-peseta-digital,mmt-moments-market,gems-algogems,kilt-kilt-protocol,harl-harmonylauncher,alph-alephium,ride-holoride,fcon-spacefalcon,love-diamond-love,kint-kintsugi,astr-astar,chum-chum-coin,polyx-polymesh,kfl-kaafila,evmos-evmos,wtip-worktips9618,xeta-xana,arn-arenum,fayre-fayre,mart-artmeta,azit-azit,fcd-freshcut-diamond,pbt-property-blockchain-trade,fww-farmers-world-wood,cand-canary-dollar,srs-sirius-finance,xden-xiden,arz-arize,hash-provenance-blockchain,joy-drawshop-kingdom-reverse-joystick,orbc-orbis,b3x-bnext-b3x,xmp-maptcoin,gomt-gomeat,pro-proton-coin,slrr-solarr,xgbl-xungible,utg-ultronglow,oxp-onxrp,algx-algodex,bridge-octus-bridge,cvshot-cvshots,xspectar-xspectar,blkz-blocksworkz,sva-solvia,bdlt-bdlt,ogy-origyn-foundation,digau-dignity-gold,trx3l-trx3l,eth3s-eth3s,intr-interlay,crom-crome,tutl-tutela,cc-cloudcoin,ztg-zeitgeist,film-filmcredits,znt-zenith-finance,bnd-bened,mddn-modden234234234,wei-wei,dcrn-decred-next,omc-omchain,turn-big-turn,cmp-caduceus,pmg-pmg-coin,xx-xx-network,neer-metaversenetwork-pioneer,tao-fusotao,cic-crazy-internet-coin,bsx-basilisk,cuc-cuprum-coin,ulx-ultron,fury-fanfury,vxxl-vxxl,spex-stepex,log-logos,metal-metal-blockchain,nai-natiol,ling-lingose}] [-l LIMIT] [-s {id,type,active}] [-r]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"platform"}),(0,r.jsx)(t.td,{children:"Blockchain platform like eth-ethereum"}),(0,r.jsx)(t.td,{children:"eth-ethereum"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"btc-bitcoin, eos-eos, eth-ethereum, xrp-xrp, bch-bitcoin-cash, xem-nem, neo-neo, xlm-stellar, etc-ethereum-classic, qtum-qtum, zec-zcash, vet-vechain, bts-bitshares, waves-waves, nxt-nxt, act-achain, ubq-ubiq, xcp-counterparty, ppc-peercoin, etp-metaverse-etp, signa-signa, omni-omni, trx-tron, bnb-binance-coin, ardr-ardor, ht-huobi-token, wan-wanchain, ftm-fantom, matic-polygon, afcash-africunia-bank, avax-avalanche, sol-solana, blvr-believer, cake-pancakeswap, bcna-bitcanna831, fsxu-flashx-ultra, chik-chickenkebab-finance, jgn-juggernaut7492, crx-cryptex, whirl-whirl-finance, etl-etherlite, eubi-eubi-token, swam-swapmatic-token, shells-shells, levelg-levelg, lyr-lyra, ants-fireants, berry-berry, drc-deracoin, sxcc-southxchange-coin, vega-vega-coin, xgk-goldkash, ptd-peseta-digital, mmt-moments-market, gems-algogems, kilt-kilt-protocol, harl-harmonylauncher, alph-alephium, ride-holoride, fcon-spacefalcon, love-diamond-love, kint-kintsugi, astr-astar, chum-chum-coin, polyx-polymesh, kfl-kaafila, evmos-evmos, wtip-worktips9618, xeta-xana, arn-arenum, fayre-fayre, mart-artmeta, azit-azit, fcd-freshcut-diamond, pbt-property-blockchain-trade, fww-farmers-world-wood, cand-canary-dollar, srs-sirius-finance, xden-xiden, arz-arize, hash-provenance-blockchain, joy-drawshop-kingdom-reverse-joystick, orbc-orbis, b3x-bnext-b3x, xmp-maptcoin, gomt-gomeat, pro-proton-coin, slrr-solarr, xgbl-xungible, utg-ultronglow, oxp-onxrp, algx-algodex, bridge-octus-bridge, cvshot-cvshots, xspectar-xspectar, blkz-blocksworkz, sva-solvia, bdlt-bdlt, ogy-origyn-foundation, digau-dignity-gold, trx3l-trx3l, eth3s-eth3s, intr-interlay, crom-crome, tutl-tutela, cc-cloudcoin, ztg-zeitgeist, film-filmcredits, znt-zenith-finance, bnd-bened, mddn-modden234234234, wei-wei, dcrn-decred-next, omc-omchain, turn-big-turn, cmp-caduceus, pmg-pmg-coin, xx-xx-network, neer-metaversenetwork-pioneer, tao-fusotao, cic-crazy-internet-coin, bsx-basilisk, cuc-cuprum-coin, ulx-ultron, fury-fanfury, vxxl-vxxl, spex-stepex, log-logos, metal-metal-blockchain, nai-natiol, ling-lingose"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"display N number records"}),(0,r.jsx)(t.td,{children:"15"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sortby"}),(0,r.jsx)(t.td,{children:"Sort by given column"}),(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"id, type, active"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reverse"}),(0,r.jsx)(t.td,{children:"Data is sorted in ascending order by default. Reverse flag will sort it in an descending way. Only works when raw data is displayed."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"2022 Feb 15, 08:16 (\ud83e\udd8b) /crypto/ov/ $ contracts\n                          Contract Addresses\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 id                                                 \u2502 type  \u2502 active \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 -                                                  \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 -dogeinu                                           \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 -exotix                                            \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 -onlychads                                         \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 -pcore                                             \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 -the-ether-collection                              \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0175-geely-automobile                              \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0241-alibaba-health-information-technology-limited \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0347-angang-steel                                  \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0358-jiangxi-copper                                \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0522-asm-pacific-technology-limited                \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0728-china-telecom                                 \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0753-air-china                                     \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0857-petrochina                                    \u2502 ERC20 \u2502 True   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0916-china-longyuan-power                          \u2502 ERC20 \u2502 True   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),a=n(74848);function i(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);