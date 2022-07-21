"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9364],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return N}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),h=i(a),N=s,d=h["".concat(o,".").concat(N)]||h[N]||c[N]||r;return a?n.createElement(d,p(p({ref:t},l),{},{components:a})):n.createElement(d,p({ref:t},l))}));function N(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,p=new Array(r);p[0]=h;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:s,p[1]=m;for(var i=2;i<r;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5688:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return m},metadata:function(){return i},toc:function(){return c}});var n=a(3117),s=a(102),r=(a(7294),a(3905)),p=["components"],m={},o="Price oracle",i={unversionedId:"development/price-oracle",id:"development/price-oracle",title:"Price oracle",description:"At its core, Lido for Solana (\u201cSolido\u201d for short) enables converting SOL into",source:"@site/docs/development/price-oracle.md",sourceDirName:"development",slug:"/development/price-oracle",permalink:"/development/price-oracle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"dockerimage",permalink:"/development/building-docker-image"},next:{title:"Reproducibility",permalink:"/development/reproducibility"}},l={},c=[{value:"On-chain",id:"on-chain",level:2},{value:"HTTP API",id:"http-api",level:2},{value:"Prometheus",id:"prometheus",level:2},{value:"bSOL",id:"bsol",level:2}],h={toc:c};function N(e){var t=e.components,a=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"price-oracle"},"Price oracle"),(0,r.kt)("p",null,"At its core, Lido for Solana (\u201cSolido\u201d for short) enables converting SOL into\nstSOL and back. This conversion involves an exchange rate. The exchange rate\nused by Solido is stored on-chain in the Solido instance itself. This page\nexplains how to access it. To understand how the exchange rate is set, see ",(0,r.kt)("a",{parentName:"p",href:"../internals/exchange-rate"},"the\ninternals page about the exchange rate"),"."),(0,r.kt)("h2",{id:"on-chain"},"On-chain"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The details in this section are based on v1.0.0 of the Solido program. Please\nconfirm that this information is still up to date before building on it. The\nsource code is always the source of truth. For v1.0.0, the relevant field\nis ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/blob/v1.0.0/program/src/state.rs#L201"},(0,r.kt)("inlineCode",{parentName:"a"},"Lido::exchange_rate")),".")),(0,r.kt)("p",null,"Solido stores two values that together determine the exchange rate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The amount of stSOL in existence, ",(0,r.kt)("inlineCode",{parentName:"li"},"st_sol_supply"),"."),(0,r.kt)("li",{parentName:"ul"},"The amount of SOL managed, ",(0,r.kt)("inlineCode",{parentName:"li"},"sol_balance"),".")),(0,r.kt)("p",null,"Both are represented as a little-endian ",(0,r.kt)("inlineCode",{parentName:"p"},"u64")," that holds the number of lamports.\n",(0,r.kt)("inlineCode",{parentName:"p"},"st_sol_supply")," is stored in in the Solido account data at byte 73..81,\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"sol_balance")," is stored at byte 81..89. The address of the official Solido\ninstance is listed ",(0,r.kt)("a",{parentName:"p",href:"../deployments"},"on the deployments page"),"."),(0,r.kt)("p",null,"Byte 0 of the Solido account data is a version byte. If we make changes to the\ndata layout of the Solido account, we will bump the value of this byte. You can\nuse this to block transactions after we update Solido, to prevent reading\ngarbage data."),(0,r.kt)("p",null,"To extract the on-chain data, you can use the following libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rust"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChorusOne/solido/tree/v1.0.0/program"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"solido")," crate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Typescript"),": A library is in progress, follow ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChorusOne/solido/issues/467"},"this issue")," for details."),(0,r.kt)("li",{parentName:"ul"},"If you are interested in other ways to extract the on-chain data, feel free\nto ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChorusOne/solido/issues/new"},"open an issue")," and we might be able to help you out.")),(0,r.kt)("h2",{id:"http-api"},"HTTP API"),(0,r.kt)("p",null,"At the moment we do not expose a stable http API for requesting the current\nexchange rate, but we might support one if there is demand for it. Feel free\nto ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/issues/new"},"open an issue")," if you are interested."),(0,r.kt)("h2",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../operation/maintenance"},"maintenance daemon")," exposes details about the\nSolido instance at a Prometheus ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint. These metrics include\nSolido\u2019s current exchange rate. You will need to run an instance of the\nmaintenance daemon yourself to access these metrics; the endpoint is not\nintended to be exposed to the public internet."),(0,r.kt)("h2",{id:"bsol"},"bSOL"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"bSOL and the Anker program are still under development.\nWe don\u2019t expect the definition of the bSOL price to change,\nbut no mainnet-beta deployment exists yet at the time of writing.")),(0,r.kt)("p",null,"Like the Solido program sets the stSOL price (in SOL), the Anker program sets\nthe bSOL price (in stSOL). The price used for deposits is determined by Solido\u2019s\nstSOL price such that 1 bSOL = 1 SOL, always. The price for withdrawals is\ndefined as follows:"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"bSOL\xa0price\xa0in\xa0stSOL"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mtext",{parentName:"mrow"},"min"),(0,r.kt)("mrow",{parentName:"mrow"},(0,r.kt)("mo",{parentName:"mrow",fence:"true"},"{"),(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mtext",{parentName:"mfrac"},"stSOL\xa0supply"),(0,r.kt)("mtext",{parentName:"mfrac"},"SOL\xa0balance")),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mtext",{parentName:"mfrac"},"stSOL\xa0reserve"),(0,r.kt)("mtext",{parentName:"mfrac"},"bSOL\xa0supply")),(0,r.kt)("mo",{parentName:"mrow",fence:"true"},"}"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\textup{bSOL price in stSOL} = \\textrm{min}\\left\\{ \\frac{\\textup{stSOL supply}}{\\textup{SOL balance}}, \\frac{\\textup{stSOL reserve}}{\\textup{bSOL supply}} \\right\\}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textup"},"bSOL\xa0price\xa0in\xa0stSOL")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.40003em",verticalAlign:"-0.95003em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"min")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"minner"},(0,r.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,r.kt)("span",{parentName:"span",className:"delimsizing size3"},"{")),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3714399999999998em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textup"},"SOL\xa0balance")))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textup"},"stSOL\xa0supply"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.36033em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textup"},"bSOL\xa0supply")))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textup"},"stSOL\xa0reserve"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8804400000000001em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,r.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},(0,r.kt)("span",{parentName:"span",className:"delimsizing size3"},"}")))))))),(0,r.kt)("p",null,"Here ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"stSOL\xa0supply")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\textup{stSOL supply}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textup"},"stSOL\xa0supply"))))))," and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"SOL\xa0balance")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\textup{SOL balance}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textup"},"SOL\xa0balance"))))))," are the two fields\nof Solido\u2019s exchange rate, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"stSOL\xa0reserve")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\textup{stSOL reserve}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textup"},"stSOL\xa0reserve"))))))," is the balance of Anker\u2019s\nstSOL reserve, and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"bSOL\xa0supply")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\textup{bSOL supply}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textup"},"bSOL\xa0supply"))))))," is the supply as determined by the\nbSOL mint. In other words, the price on withdraw is the minimum of two prices:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The price that ensures the 1 bSOL = 1 SOL peg, implied by the Solido instance."),(0,r.kt)("li",{parentName:"ol"},"The price where bSOL is a share of Anker\u2019s stSOL pool.")),(0,r.kt)("p",null,"During normal operation, the first term is smaller than the second term, so the\n1 bSOL = 1 SOL peg is ensured. At the time of writing, there is no slashing on\nSolana, which means that the price of stSOL in SOL does not decrease, so Anker\u2019s\nstSOL reserve more than covers all bSOL in existence, and the 1 bSOL = 1 SOL peg\nis maintained. However, in the unlikely event that Solana were to introduce\nslashing in the future, and Lido for Solana would experience a slashing event\nthat it could not compensate for from its treasury, then the price of stSOL\nwould go down, and Anker\u2019s stSOL reserve may not contain sufficient stSOL to\nback every bSOL at a 1 bSOL = 1 SOL exchange rate. In that case, the rate\nchanges such that every bSOL is a share of the stSOL pool. Note, this only\napplies to withdrawals, not to deposits."),(0,r.kt)("p",null,"For the first term, the two relevant numbers are stored in the Solido instance,\n",(0,r.kt)("a",{parentName:"p",href:"#on-chain"},"as described above"),". For the second term, the relevant accounts are\nthe stSOL reserve, and the bSOL mint, which live at program-derived addresses.\nThey are a regular SPL token account and mint, and their balance and supply can\nbe extracted with the regular SPL token tooling (e.g. the ",(0,r.kt)("a",{parentName:"p",href:"https://lib.rs/crates/spl-token"},"Rust\ncrate"),", or the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/jsonrpc-api#getmultipleaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"getMultipleAccounts")," RPC\nmethod")," with ",(0,r.kt)("inlineCode",{parentName:"p"},'encoding: "jsonParsed"'),").\nYou can view the addresses of the stSOL reserve and bSOL mint with\n",(0,r.kt)("a",{parentName:"p",href:"../operation/the-solido-utility"},(0,r.kt)("inlineCode",{parentName:"a"},"solido anker show")),", and we will also list them on\n",(0,r.kt)("a",{parentName:"p",href:"../deployments"},"the deployments page")," once Anker has been deployed to mainnet-beta."))}N.isMDXComponent=!0}}]);