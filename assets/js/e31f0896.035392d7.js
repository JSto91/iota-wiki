"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[58976],{20901:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),c=["components"],i={description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","blockchain","parallel","scaling","explanation"]},s="Smart Contracts",l={unversionedId:"guide/core_concepts/smart-contracts",id:"guide/core_concepts/smart-contracts",title:"Smart Contracts",description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/smart-contracts.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/smart-contracts",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/smart-contracts",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/smart-contracts.md",tags:[],version:"current",frontMatter:{description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","blockchain","parallel","scaling","explanation"]},sidebar:"tutorialSidebar",previous:{title:"IOTA Smart Contracts",permalink:"/iota-wiki/smart-contracts/overview"},next:{title:"IOTA Smart Contracts Architecture",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/iscp-architecture"}},u={},p=[{value:"What Are Smart Contracts?",id:"what-are-smart-contracts",level:2},{value:"Applications You Can Trust",id:"applications-you-can-trust",level:3},{value:"Scalable Smart Contracts",id:"scalable-smart-contracts",level:3}],m={toc:p};function d(t){var e=t.components,a=(0,r.Z)(t,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("h2",{id:"what-are-smart-contracts"},"What Are Smart Contracts?"),(0,o.kt)("p",null,"Smart contracts are software applications that run on a distributed network with multiple validators executing and validating the same code. This ensures the application behaves as expected, and that there is no tampering in the execution of the program. "),(0,o.kt)("h3",{id:"applications-you-can-trust"},"Applications You Can Trust"),(0,o.kt)("p",null,"As you can be certain that the code being executed is always the same (and will not change), this results in applications you can trust. This allows you to use smart contracts for applications where there was a trust issue. The rules of the smart contract define what the contract can and can not do, making it a decentralized and a predictable decision-maker."),(0,o.kt)("p",null,"Smart contracts are used for all kinds of purposes. A recurring reason to use a smart contract is to automate certain actions without needing a centralized entity to enforce this specific action. A good example of this is a smart contract that can exchange a certain amount of IOTA tokens for a certain amount of land ownership. The smart contract will accept both the IOTA tokens and the land ownership, and will predictably exchange them between both parties without the risk of one of the parties not delivering on their promise. ",(0,o.kt)("strong",{parentName:"p"},"With a smart contract, code is law"),"."),(0,o.kt)("h3",{id:"scalable-smart-contracts"},"Scalable Smart Contracts"),(0,o.kt)("p",null,"On a public blockchain, anyone willing to pay the fees for deploying a smart contract can deploy one. Once your smart contract has been deployed to the chain you no longer have the option to change it, and you can be assured that your smart contract application will be there as long as that blockchain exists. Smart contracts can communicate with one another, and you can invoke programmed public functions on a smart contract to trigger actions on a smart contract, or address the state of a smart contract."),(0,o.kt)("p",null,"Because smart contracts do not run on a single computer, but on many validators, a network of smart contracts can only process so many smart contracts at once, even if the software has been written optimally. This means smart contracts are expensive to execute, and do not scale well on a single blockchain, often resulting in congested networks and expensive fees for executing functions on smart contracts. ",(0,o.kt)("strong",{parentName:"p"},"By allowing many blockchains executing smart contracts to run in parallel"),", and communicate with one another, ",(0,o.kt)("strong",{parentName:"p"},"IOTA Smart Contracts will solve this scalability problem.")))}d.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),l=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=l(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,c(c({ref:e},u),{},{components:a})):n.createElement(h,c({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);