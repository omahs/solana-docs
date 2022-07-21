"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6223],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],l={},c="Reproducibility",p={unversionedId:"development/reproducibility",id:"development/reproducibility",title:"Reproducibility",description:"To verify that the programs deployed on-chain were built from a specific version",source:"@site/docs/development/reproducibility.md",sourceDirName:"development",slug:"/development/reproducibility",permalink:"/development/reproducibility",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Price oracle",permalink:"/development/price-oracle"},next:{title:"Introduction",permalink:"/frontend-integration/"}},d={},u=[{value:"Building",id:"building",level:2},{value:"Verification",id:"verification",level:2}],s={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reproducibility"},"Reproducibility"),(0,i.kt)("p",null,"To verify that the programs deployed on-chain were built from a specific version\nof the Soldio source code, we can reproduce the programs with the steps below."),(0,i.kt)("h2",{id:"building"},"Building"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"./buildimage.sh")," script ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/blob/main/buildimage.sh"},"in the repository root")," builds the\nprograms in a Docker container, and copies them out of the container into the\n",(0,i.kt)("inlineCode",{parentName:"p"},"build")," directory. That directory will then contain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lido.so"),": the Solido program that runs on-chain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serum_multisig.so"),": the multisig governance program that runs on-chain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"solido"),": the command-line management client that runs locally.")),(0,i.kt)("h2",{id:"verification"},"Verification"),(0,i.kt)("p",null,"To verify that an on-chain program matches one we built, we have to download the\non-chain program. Suppose the program was deployed at address\n",(0,i.kt)("inlineCode",{parentName:"p"},"7k3rzqoNQxgTLTooAvXriGBKYsd16bV3JMvatvXcBfNo"),", then to download it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ mkdir onchain\n$ solana program dump 7k3rzqoNQxgTLTooAvXriGBKYsd16bV3JMvatvXcBfNo onchain/lido.so\nWrote program to onchain/lido.so\n")),(0,i.kt)("p",null,"Note that if you have configured a network other than mainnet-beta in\n",(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/solana/cli/config.yml"),", this will dump from that network.\nTo override, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"--url")," and set it to e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.testnet.solana.com")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.mainnet-beta.solana.com"),"."),(0,i.kt)("p",null,"The dumped file will ",(0,i.kt)("em",{parentName:"p"},"not")," match ",(0,i.kt)("inlineCode",{parentName:"p"},"lido.so")," that we built previously, because by\ndefault, Solana pads programs with zeros during the initial deployment, to allow\nroom for future upgrades. The easiest way to verify, is to zero-pad our build of\nthe program as well, so we can make a fair comparison. First, note the file size\nof the dumped program and of our build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ stat onchain/lido.so build/lido.so\n  File: onchain/lido.so\n  Size: 1042528     Blocks: 2040       IO Block: 4096   regular file\n  ...\n  File: build/lido.so\n  Size: 521264      Blocks: 1024       IO Block: 4096   regular file\n")),(0,i.kt)("p",null,"Confirm that the dump is larger than our build, then pad our build to that size:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ cp build/lido.so build/lido-padded.so\n$ truncate --size=1042528 build/lido-padded.so\n")),(0,i.kt)("p",null,"Now we can confirm that the programs match:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ sha256sum build/lido-padded.so onchain/lido.so\n350bae669da9b92ded86c0a89013160c42c4691d1cd5947a285b2e6657bb0c5b  build/lido-padded.so\n350bae669da9b92ded86c0a89013160c42c4691d1cd5947a285b2e6657bb0c5b  onchain/lido.so\n")))}m.isMDXComponent=!0}}]);