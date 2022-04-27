"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53542],{19971:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return h}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],c={keywords:["Smart Contracts","scaling","fees","flexibility","Tangle"],description:"IOTA Smart Contracts are IOTA's solution for running smart contracts on top of the IOTA tangle. Wasp is the node software we've built to let you run smart contracts in a committee using a virtual machine of choice.",image:"/img/logo/WASP_logo_dark.png"},s="IOTA Smart Contracts",l={unversionedId:"guide/core_concepts/iscp",id:"guide/core_concepts/iscp",title:"IOTA Smart Contracts",description:"IOTA Smart Contracts are IOTA's solution for running smart contracts on top of the IOTA tangle. Wasp is the node software we've built to let you run smart contracts in a committee using a virtual machine of choice.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/iscp.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/iscp",permalink:"/smart-contracts/guide/core_concepts/iscp",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/iscp.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","scaling","fees","flexibility","Tangle"],description:"IOTA Smart Contracts are IOTA's solution for running smart contracts on top of the IOTA tangle. Wasp is the node software we've built to let you run smart contracts in a committee using a virtual machine of choice.",image:"/img/logo/WASP_logo_dark.png"}},u={},h=[{value:"Scaling and Fees",id:"scaling-and-fees",level:3},{value:"Custom Chains",id:"custom-chains",level:3},{value:"Flexibility",id:"flexibility",level:3},{value:"What is Wasp?",id:"what-is-wasp",level:2}],p={toc:h};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iota-smart-contracts"},"IOTA Smart Contracts"),(0,r.kt)("p",null,"The IOTA Smart Contracts are IOTA's solution for running smart contracts on top of the IOTA tangle. With IOTA Smart Contracts, we bring scalable and flexible smart contracts into the IOTA ecosystem by allowing anyone to spin up a smart contract blockchain and anchor it to the IOTA tangle. "),(0,r.kt)("p",null,"Allowing multiple blockchains to anchor to the tangle will solve several problems with smart contracts."),(0,r.kt)("h3",{id:"scaling-and-fees"},"Scaling and Fees"),(0,r.kt)("p",null,"Due to the ordered structure and execution time of a smart contract, a single blockchain can only handle so many transactions per second before it needs to decide on which transactions it needs to postpone until other blocks are produced, as there is no processing power available for them on that chain. This eventually results in high fees on many chains, and limited functionality. "),(0,r.kt)("p",null,"As we allow many chains (which can communicate with other chains) to be anchored to the IOTA tangle, we can simply add additional chains once this becomes a problem. This results in lower fees over solutions that just use a single blockchain for all their smart contracts. "),(0,r.kt)("h3",{id:"custom-chains"},"Custom Chains"),(0,r.kt)("p",null,"Given that anyone can start a new chain, and set the rules for that chain, a lot is possible. Not only do you have full control over how the fees are handled on the chain you set up, but you also have full control over the validators and access to your chain. You can even spin up a private blockchain with no public data besides the state hash that is anchored to the main IOTA tangle. This allows parties that need private blockchains to use the security of the public IOTA network without actually exposing their blockchain to the public."),(0,r.kt)("h3",{id:"flexibility"},"Flexibility"),(0,r.kt)("p",null,"You can run multiple types of virtual machines on any chain. We are starting with\n",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/docs/book/"},"Rust/Wasm")," based smart contracts, followed by\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.6/"},"Solidity/EVM")," based smart contracts, but eventually all kinds of virtual machines can be supported in IOTA Smart Contracts chain depending on the demand. "),(0,r.kt)("p",null,"The IOTA Smart Contracts is more complex compared to conventional smart contracts, but this provides freedom and flexibility to allow the usage of smart contracts in a wide range of use cases."),(0,r.kt)("h2",{id:"what-is-wasp"},"What is Wasp?"),(0,r.kt)("p",null,"Wasp is the node software that we have built to let you validate smart contracts as a part of a committee while using a virtual machine of your choice. Multiple Wasp nodes connect and form a committee of validators. When they reach consensus on a virtual machine state-change, they anchor that state change to the IOTA tangle, making it immutable."))}m.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||h[m]||r;return n?a.createElement(d,i(i({ref:e},u),{},{components:n})):a.createElement(d,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);