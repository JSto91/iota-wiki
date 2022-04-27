"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33819],{22808:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],c={description:"IOTA Smart Contracts allow you to run smart contracts on top of the IOTA Tangle.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core concepts","scaling","flexibility","explanation"]},s="IOTA Smart Contracts",l={unversionedId:"overview",id:"overview",title:"IOTA Smart Contracts",description:"IOTA Smart Contracts allow you to run smart contracts on top of the IOTA Tangle.",source:"@site/external/wasp/documentation/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/smart-contracts/overview",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/overview.md",tags:[],version:"current",frontMatter:{description:"IOTA Smart Contracts allow you to run smart contracts on top of the IOTA Tangle.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core concepts","scaling","flexibility","explanation"]},sidebar:"tutorialSidebar",next:{title:"Smart Contracts",permalink:"/smart-contracts/guide/core_concepts/smart-contracts"}},u={},p=[{value:"Scaling and Fees",id:"scaling-and-fees",level:2},{value:"Custom Chains",id:"custom-chains",level:2},{value:"Flexibility",id:"flexibility",level:2},{value:"What is Wasp?",id:"what-is-wasp",level:2},{value:"Feedback",id:"feedback",level:2}],h={toc:p};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iota-smart-contracts"},"IOTA Smart Contracts"),(0,r.kt)("p",null,"The IOTA Smart Contract Protocol is IOTA's solution for running smart contracts on top of the IOTA tangle. With IOTA Smart Contracts we bring scalable and flexible smart contracts into the IOTA ecosystem by allowing anyone to spin up a smart contract blockchain and anchor it to the IOTA tangle. "),(0,r.kt)("p",null,"Allowing multiple blockchains to anchor to the tangle will solve several problems with smart contracts."),(0,r.kt)("h2",{id:"scaling-and-fees"},"Scaling and Fees"),(0,r.kt)("p",null,"Due to the ordered structure and execution time of a smart contract, a single blockchain can only handle so many transactions per second before it needs to decide on which transactions it needs to postpone until other blocks are produced, as there is no processing power available for them on that chain. This eventually results in high fees on many chains, and limited functionality. "),(0,r.kt)("p",null,"As we allow many chains (which can communicate with other chains) to be anchored to the IOTA tangle, we can simply add additional chains once this becomes a problem. This results in lower fees over solutions that just use a single blockchain for all their smart contracts. "),(0,r.kt)("h2",{id:"custom-chains"},"Custom Chains"),(0,r.kt)("p",null,"Given that anyone can start a new chain, and set the rules for that chain, a lot is possible. Not only do you have full control over how the fees are handled on the chain you set up, but you also have full control over the validators and access to your chain. You can even spin up a private blockchain with no public data besides the state hash that is anchored to the main IOTA tangle. This allows parties that need private blockchains to use the security of the public IOTA network without actually exposing their blockchain to the public."),(0,r.kt)("h2",{id:"flexibility"},"Flexibility"),(0,r.kt)("p",null,"You can run multiple types of virtual machines on any chain. We are starting with\n",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/docs/book/"},"Rust/Wasm")," based smart contracts, followed by\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.6/"},"Solidity/EVM")," based smart contracts, but eventually all kinds of virtual machines can be supported in a IOTA Smart Contract chain depending on the demand. "),(0,r.kt)("p",null,"IOTA Smart Contracts are more complex compared to conventional smart contracts, but this provides freedom and flexibility to allow the usage of smart contracts in a wide range of use cases."),(0,r.kt)("h2",{id:"what-is-wasp"},"What is Wasp?"),(0,r.kt)("p",null,"Wasp is the node software that we have built to let you validate smart contracts as a part of a committee while using a virtual machine of your choice. Multiple Wasp nodes connect and form a committee of validators. When they reach consensus on a virtual machine state-change, they anchor that state change to the IOTA tangle, making it immutable. "),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"We are very eager to receive your feedback about your experiences with the IOTA Smart Contracts Beta. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSd4jcmLzCPUNDIijEwGzuWerO23MS0Jmgzszgs-D6_awJUWow/viewform"},"this form")," to share your developer experience with us. This feedback will help us improve the product in follow up releases."))}m.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),h=l(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(d,i(i({ref:e},u),{},{components:n})):a.createElement(d,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);