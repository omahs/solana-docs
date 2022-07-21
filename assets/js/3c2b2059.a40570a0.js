"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8755],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,b=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(b,i(i({ref:t},p),{},{components:n})):o.createElement(b,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},521:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),i=n.p+"assets/images/34_anchor_wbSOL-9fd6d2d7cbcd91d6f03085ab87a23649.png",l=["components"],s={id:"lido-anchor-guide",title:"Lido-Anchor Guide",description:"Step by step description on how to get bSOL, transfer them to Terra and borrow UST",keywords:["Lido","Anchor","bSOL","Wormhole","UST"],sidebar_label:"Lido-Anchor Guide",sidebar_position:2},c="Lido Anchor guide",p={unversionedId:"staking/lido-anchor-guide",id:"staking/lido-anchor-guide",title:"Lido-Anchor Guide",description:"Step by step description on how to get bSOL, transfer them to Terra and borrow UST",source:"@site/docs/staking/anchor.md",sourceDirName:"staking",slug:"/staking/lido-anchor-guide",permalink:"/staking/lido-anchor-guide",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"lido-anchor-guide",title:"Lido-Anchor Guide",description:"Step by step description on how to get bSOL, transfer them to Terra and borrow UST",keywords:["Lido","Anchor","bSOL","Wormhole","UST"],sidebar_label:"Lido-Anchor Guide",sidebar_position:2},sidebar:"solidoSidebar",previous:{title:"staking",permalink:"/staking/overview"},next:{title:"Phantom",permalink:"/staking/phantom"}},d={},h=[{value:"Step-by-step Guide",id:"step-by-step-guide",level:2},{value:"Step 1: Acquiring <code>bSOL</code>",id:"step-1-acquiring-bsol",level:3},{value:"Step 2: Converting <code>stSOL</code> to get <code>bSOL</code>",id:"step-2-converting-stsol-to-get-bsol",level:3},{value:"Step 3: Bridge <code>bSOL</code> over to Terra blockchain",id:"step-3-bridge-bsol-over-to-terra-blockchain",level:3},{value:"Step 4: Converting <code>wbSOL</code> to <code>bSOL</code>",id:"step-4-converting-wbsol-to-bsol",level:3},{value:"Step 5: Borrow <code>UST</code> against <code>bSOL</code>",id:"step-5-borrow-ust-against-bsol",level:3}],u={toc:h};function b(e){var t=e.components,s=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lido-anchor-guide"},"Lido Anchor guide"),(0,r.kt)("p",null,"This is a step-by-step guide on how to get ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," by exchanging your ",(0,r.kt)("inlineCode",{parentName:"p"},"stSOL"),", bridging over your ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," to Terra blockchain and finally borrowing UST by putting up ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," as a collateral."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide is built using Devnet but the steps are equally applicable to Mainnet!")),(0,r.kt)("h2",{id:"step-by-step-guide"},"Step-by-step Guide"),(0,r.kt)("h3",{id:"step-1-acquiring-bsol"},"Step 1: Acquiring ",(0,r.kt)("inlineCode",{parentName:"h3"},"bSOL")),(0,r.kt)("p",null,"To get ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," you need ",(0,r.kt)("inlineCode",{parentName:"p"},"stSOL"),". You get ",(0,r.kt)("inlineCode",{parentName:"p"},"stSOL")," by staking SOL. Begin by going to the ",(0,r.kt)("a",{parentName:"p",href:"https://solana.lido.fi/"},"Lido for Solana interface")," and connecting your wallet."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"lido",src:n(4708).Z,width:"2824",height:"1594"}),"\n",(0,r.kt)("img",{alt:"connect-wallet",src:n(2305).Z,width:"2510",height:"1464"})),(0,r.kt)("p",null,"Enter the amount of SOL you want to stake and hit the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stake")," button. Approve the transaction in your wallet and you will see stSOL getting credited to your account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"stake-amount",src:n(4579).Z,width:"2786",height:"1340"}),"\n",(0,r.kt)("img",{alt:"stake-amount",src:n(6438).Z,width:"2568",height:"702"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can view detailed staking guides under the same section as the Lido-Anchor guide. e.g. The guide to stake SOL using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.lido.fi/staking/solflare"},"Solflare can be found here"))),(0,r.kt)("h3",{id:"step-2-converting-stsol-to-get-bsol"},"Step 2: Converting ",(0,r.kt)("inlineCode",{parentName:"h3"},"stSOL")," to get ",(0,r.kt)("inlineCode",{parentName:"h3"},"bSOL")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stSOL")," can be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," by clicking on the Anchor icon at the top or by visiting ",(0,r.kt)("a",{parentName:"p",href:"https://solana.lido.fi/anchor"},"https://solana.lido.fi/anchor"),". Once on this link connect your wallet if it is not already connected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Anchor-icon",src:n(7469).Z,width:"2714",height:"374"}),"\n",(0,r.kt)("img",{alt:"Anchor-screen",src:n(4221).Z,width:"2752",height:"1400"})),(0,r.kt)("p",null,"Enter the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"stSOL")," tokens you want to convert."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"amount-bsol",src:n(2268).Z,width:"2364",height:"1162"})),(0,r.kt)("p",null,"Upon clicking you will first have to approve the transaction in your wallet. You will see a popup that tells your how much ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," you will receive upon confirmation"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"waiting",src:n(1641).Z,width:"2656",height:"1014"})),(0,r.kt)("p",null,"Once the transaction is successful approved and processed, your wallet balance will start reflecting ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," tokens\n",(0,r.kt)("img",{alt:"bsol-success",src:n(6984).Z,width:"2558",height:"744"})),(0,r.kt)("h3",{id:"step-3-bridge-bsol-over-to-terra-blockchain"},"Step 3: Bridge ",(0,r.kt)("inlineCode",{parentName:"h3"},"bSOL")," over to Terra blockchain"),(0,r.kt)("p",null,"Now that you have ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," on the Solana blockchain, it is time to bridge them over to the Terra ecosystem. The first step in that direction is to visit the ",(0,r.kt)("a",{parentName:"p",href:"https://portalbridge.com/#/transfer"},"Wormhole Portal Bridge"),". Under ",(0,r.kt)("inlineCode",{parentName:"p"},"Source")," select Solana as the chain and under ",(0,r.kt)("inlineCode",{parentName:"p"},"Target")," select Terra. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect"),"!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"portal",src:n(3833).Z,width:"2848",height:"1622"}),"\n",(0,r.kt)("img",{alt:"source-target",src:n(1896).Z,width:"2646",height:"1008"})),(0,r.kt)("p",null,"You will be displayed a list of Solana wallets. Select your wallet and approve the connection\n",(0,r.kt)("img",{alt:"select-wallet",src:n(3506).Z,width:"2252",height:"1090"})),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This process of bridging your ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," from Solana to Terra, requires various transactions to be approved in your respective wallets. Make sure you have enough ",(0,r.kt)("inlineCode",{parentName:"p"},"SOL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"UST")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"LUNA")," to pay for the gas fee.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"select-wallet",src:n(2559).Z,width:"2438",height:"1148"})),(0,r.kt)("p",null,"Once you connect the Solana wallet, select ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," as the token from ",(0,r.kt)("inlineCode",{parentName:"p"},"Select a token")," dropdown.\n",(0,r.kt)("img",{alt:"select-bSOL",src:n(3357).Z,width:"2214",height:"218"})),(0,r.kt)("p",null,"Enter the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," you want to send to Terra and hit ",(0,r.kt)("inlineCode",{parentName:"p"},"Next"),"\n",(0,r.kt)("img",{alt:"select-bSOL",src:n(260).Z,width:"2294",height:"580"})),(0,r.kt)("p",null,"Now connect your Terra wallet with wormhole portal by selecting your preferred wallet.\n",(0,r.kt)("img",{alt:"select-terra_wallet",src:n(7480).Z,width:"2530",height:"666"})),(0,r.kt)("p",null,"Review the info in the next step and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Next"),". The actual transfer starts when you hit the ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer")," button in the next step. Note that you will need to approve the transaction in the Solana wallet first.\n",(0,r.kt)("img",{alt:"solana-send",src:n(6027).Z,width:"2484",height:"610"})),(0,r.kt)("p",null,"Once the transfer transaction is successful on the Solana blockchain, headover to the final step where you redeem the transferred tokens on Terra blockchain.\n",(0,r.kt)("img",{alt:"29_redeem_terra",src:n(1402).Z,width:"2544",height:"648"})),(0,r.kt)("p",null,"After approving the transaction in your wallet you will start seeing the newly transferred ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," on the ",(0,r.kt)("a",{parentName:"p",href:"https://app.anchorprotocol.com/basset"},"Anchor Protocol page under bAssets tab"),"."),(0,r.kt)("h3",{id:"step-4-converting-wbsol-to-bsol"},"Step 4: Converting ",(0,r.kt)("inlineCode",{parentName:"h3"},"wbSOL")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"bSOL")),(0,r.kt)("p",null,"When you take a look at your Terra wallet you will see that your wallet has received ",(0,r.kt)("inlineCode",{parentName:"p"},"wbSOL")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL"),". This is completely alright as ",(0,r.kt)("inlineCode",{parentName:"p"},"wbSOL")," is the wormhole wrapped asset that gets bridged over to Terra. It is very easy to convert ",(0,r.kt)("inlineCode",{parentName:"p"},"wbSOL")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," on the Anchor Platform."),(0,r.kt)("p",null,"Head over to the bASSET tab under anchor protocol page (",(0,r.kt)("a",{parentName:"p",href:"https://app.anchorprotocol.com/basset"},"https://app.anchorprotocol.com/basset"),"). You will see an info from the Anchor protocol team"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"33_anchor_bassets",src:n(45).Z,width:"2814",height:"1454"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"bAssets that have been transferred to Terra through Wormhole (webETH) must go through the convert operation to be used as collateral on Anchor.")),(0,r.kt)("p",null,"This applies to ",(0,r.kt)("inlineCode",{parentName:"p"},"wbSOL")," as well. In order to convert click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"wbSOL/bSOL")," card"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:i,alt:"Convert wbSOL/bSOL",width:"300"})),(0,r.kt)("p",null,"You will be taken to the convert page where you can enter the amount you want to convert and receive ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL"),"\n",(0,r.kt)("img",{alt:"35_convert",src:n(5300).Z,width:"2532",height:"1480"})),(0,r.kt)("p",null,"Once your transaction is approved ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," will start reflecting in your account.\n",(0,r.kt)("img",{alt:"37_converted",src:n(9518).Z,width:"2490",height:"1308"})),(0,r.kt)("h3",{id:"step-5-borrow-ust-against-bsol"},"Step 5: Borrow ",(0,r.kt)("inlineCode",{parentName:"h3"},"UST")," against ",(0,r.kt)("inlineCode",{parentName:"h3"},"bSOL")),(0,r.kt)("p",null,"Now you finally have ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," on the Terra blockchain and you can start borrowing UST against a collateral of ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL"),". Head over to the borrow tab (",(0,r.kt)("a",{parentName:"p",href:"https://app.anchorprotocol.com/borrow"},"https://app.anchorprotocol.com/borrow"),") in anchor protocol page and locate your token in the collateral list.\n",(0,r.kt)("img",{alt:"38_bsol_collateral",src:n(7209).Z,width:"2666",height:"420"})),(0,r.kt)("p",null,"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Provide")," collateral and enter the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"bSOL")," you want to deposit. On the same popup screen you will also see the amount of UST that can be borrowed with this much collateral.\n",(0,r.kt)("img",{alt:"39_provide_collateral",src:n(2012).Z,width:"2702",height:"1008"})),(0,r.kt)("p",null,"At the top of the page under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Position Management")," section you will see the ",(0,r.kt)("inlineCode",{parentName:"p"},"Borrow")," button light up!\n",(0,r.kt)("img",{alt:"40_click_borrow",src:n(4802).Z,width:"2828",height:"1102"})),(0,r.kt)("p",null,"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Borrow")," and enter the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"UST")," you want to borrow out of the total ",(0,r.kt)("inlineCode",{parentName:"p"},"UST")," available for borrowing to you!\n",(0,r.kt)("img",{alt:"41-borrow",src:n(8628).Z,width:"2762",height:"1218"})),(0,r.kt)("p",null,"Once you approve the transaction your ",(0,r.kt)("inlineCode",{parentName:"p"},"Position Management")," section will get updated with the borrowed value and now you are a proud owner of borrowed UST!"),(0,r.kt)("p",null,"You have now succesfully acquired bSOL, bridged it over to Terra and used it to borrow UST!"))}b.isMDXComponent=!0},7469:function(e,t,n){t.Z=n.p+"assets/images/10_anchor-c2573614800c778fdee9c27bbf47375e.png"},4221:function(e,t,n){t.Z=n.p+"assets/images/11_anchor_screen-ad7cf5c00c35d67f3b3bf56c5fb4bab8.png"},2268:function(e,t,n){t.Z=n.p+"assets/images/12_amount_convert-be21243b67ba6fb68c66d8209270a3b7.png"},1641:function(e,t,n){t.Z=n.p+"assets/images/13_waiting_for_wallet-760d352916c1e97a2f320fad0d8af5da.png"},6984:function(e,t,n){t.Z=n.p+"assets/images/15_tx_success-7ac9848e693e75f30a7fe1b7d5daa2f0.png"},3833:function(e,t,n){t.Z=n.p+"assets/images/16_portal-9f55652cafc636c7dcfa39bcb707dba8.png"},1896:function(e,t,n){t.Z=n.p+"assets/images/17_choose_terra-aeea28ed24a331b3399ef33fbba2a852.png"},3506:function(e,t,n){t.Z=n.p+"assets/images/18_select_wallet-947c7eb560ff21d44e5e8f067c5b041a.png"},2559:function(e,t,n){t.Z=n.p+"assets/images/19_wallet_selected-87b4e5258837271bcf232c8c5ce25958.png"},4708:function(e,t,n){t.Z=n.p+"assets/images/1_LidoInterface-40c92ca4f3c3a824954536b5e50f20d4.png"},3357:function(e,t,n){t.Z=n.p+"assets/images/20_bSOL_amount-8e7cd2f6c34b1f61dc5a6c411c60fc1a.png"},260:function(e,t,n){t.Z=n.p+"assets/images/22_1_bSOL_amount-90803c799ab4e6ee49e81a2e47e2343f.png"},7480:function(e,t,n){t.Z=n.p+"assets/images/23_connect_terra_wallet-c5fdbd9201796ebbd3011a7448762e3c.png"},6027:function(e,t,n){t.Z=n.p+"assets/images/25_send_bsol_to_terra-3dbc4e8e462023b6d644793f9f139900.png"},1402:function(e,t,n){t.Z=n.p+"assets/images/29_redeem_terra-b2bffb6ba23cacc9eafb12db48d67b28.png"},2305:function(e,t,n){t.Z=n.p+"assets/images/2_connect_wallet-72bf0890df4c183964c17b77b222e79a.png"},45:function(e,t,n){t.Z=n.p+"assets/images/33_anchor_bassets-38620eb8f1b475be54fbe5684ab9159f.png"},5300:function(e,t,n){t.Z=n.p+"assets/images/35_convert-69a8fcb60fe365538058c7b205db4afa.png"},9518:function(e,t,n){t.Z=n.p+"assets/images/37_converted-326a562dd5cdad723e18a3d268cb9f6c.png"},7209:function(e,t,n){t.Z=n.p+"assets/images/38_bsol_collateral-1b3c5e09c8bc82244398f47dad2b42f2.png"},2012:function(e,t,n){t.Z=n.p+"assets/images/39_provide_collateral-3202fd734cc106111d0c90da6759a176.png"},4802:function(e,t,n){t.Z=n.p+"assets/images/40_click_borrow-d2138f08e900d06c55152fbecdcab0dd.png"},8628:function(e,t,n){t.Z=n.p+"assets/images/41_borrow-baa81806c1227ce1bf73f7e12b1aaab1.png"},4579:function(e,t,n){t.Z=n.p+"assets/images/5_enter_stake_amount-11ff2b739840da268ffb02ccdbecddce.png"},6438:function(e,t,n){t.Z=n.p+"assets/images/9_tx_success-43fb08e4b75dd6394db2ebcacbd78582.png"}}]);