"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9273],{66987:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return h}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),c=["components"],i={keywords:["Smart Contracts","Architecture","Ethereum","Implementation"],description:"IOTA Smart Contracts allow anyone to start their own chain and validators. Link to full technical description of the IOTA Smart Contarcts architecture and whitepaper",image:"/img/multichain.png"},s="IOTA Smart Contracts Architecture",u={unversionedId:"guide/core_concepts/iscp-architecture",id:"guide/core_concepts/iscp-architecture",title:"IOTA Smart Contracts Architecture",description:"IOTA Smart Contracts allow anyone to start their own chain and validators. Link to full technical description of the IOTA Smart Contarcts architecture and whitepaper",source:"@site/external/wasp/documentation/docs/guide/core_concepts/iscp-architecture.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/iscp-architecture",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/iscp-architecture",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/iscp-architecture.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","Architecture","Ethereum","Implementation"],description:"IOTA Smart Contracts allow anyone to start their own chain and validators. Link to full technical description of the IOTA Smart Contarcts architecture and whitepaper",image:"/img/multichain.png"},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/smart-contracts"},next:{title:"Validators",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/validators"}},p={},l=[],m={toc:l};function h(t){var e=t.components,i=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iota-smart-contracts-architecture"},"IOTA Smart Contracts Architecture"),(0,o.kt)("p",null,"With IOTA Smart Contracts, anyone can start their own chain and define the validators."),(0,o.kt)("p",null,"Each chain has its own state where a state update (going from one block to the next) is hashed and published to the Tangle, which moves the state anchor on Layer 1."),(0,o.kt)("p",null,"The multi-chain nature of the IOTA Smart Contracts makes it a more complex implementation of smart contracts, over say Ethereum, as illustrated here:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"IOTA Smart Contracts multichain architecture",src:r(77520).Z,width:"862",height:"588"})),(0,o.kt)("p",null,"The comprehensive overview of architectural design decisions of IOTA Smart Contracts can be found in the\n",(0,o.kt)("a",{parentName:"p",href:"https://files.iota.org/papers/ISC_WP_Nov_10_2021.pdf"},"whitepaper"),"."))}h.isMDXComponent=!0},77520:function(t,e,r){e.Z=r.p+"assets/images/multichain-4f8c53ab2ddaac9eeefe509a54e8f7ee.png"},3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(r),h=a,d=m["".concat(s,".").concat(h)]||m[h]||l[h]||o;return r?n.createElement(d,c(c({ref:e},p),{},{components:r})):n.createElement(d,c({ref:e},p))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);