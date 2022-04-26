"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[69389],{55313:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],i={description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","initialization","request handling","on-chain ledger","accounts","data","receipts","reference"]},s="Core Contracts",l={unversionedId:"guide/core_concepts/core_contracts/overview",id:"guide/core_concepts/core_contracts/overview",title:"Core Contracts",description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/core_contracts/overview.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/overview",permalink:"/smart-contracts/guide/core_concepts/core_contracts/overview",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/core_contracts/overview.md",tags:[],version:"current",frontMatter:{description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","initialization","request handling","on-chain ledger","accounts","data","receipts","reference"]},sidebar:"tutorialSidebar",previous:{title:"Sandbox Interface",permalink:"/smart-contracts/guide/core_concepts/sandbox"},next:{title:"The `root` Contract",permalink:"/smart-contracts/guide/core_concepts/core_contracts/root"}},p={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"core-contracts"},"Core Contracts"),(0,a.kt)("p",null,"There are currently 6 core smart contracts that are always deployed on each\nchain. These are responsible for the vital functions of the chain and\nprovide infrastructure for all other smart contracts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/root"},(0,a.kt)("strong",{parentName:"a"},"root"))," - Responsible for the initialization of the chain, maintains registry of deployed contracts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/default"},(0,a.kt)("strong",{parentName:"a"},"_default")),": Any request that cannot be handled by any of the\nother deployed contracts ends up here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/accounts"},(0,a.kt)("strong",{parentName:"a"},"accounts")),": Responsible for the on-chain ledger of accounts (who owns what).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/blob"},(0,a.kt)("strong",{parentName:"a"},"blob")),": Responsible for the immutable registry of binary objects of arbitrary size. One blob is a collection of named binary chunks of data. For\nexample, a blob can be used to store a collections of ",(0,a.kt)("em",{parentName:"p"},"wasm")," binaries, needed\nto deploy ",(0,a.kt)("em",{parentName:"p"},"WebAssembly")," smart contracts. Each blob in the registry is\nreferenced by its hash which is deterministically calculated from its data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/blocklog"},(0,a.kt)("strong",{parentName:"a"},"blocklog")),": Keeps track of the blocks and receipts of requests which were processed by the chain. It also contains all events emitted by smart contracts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/governance"},(0,a.kt)("strong",{parentName:"a"},"governance")),": Handles the administrative functions of the chain. For example: rotation of the committee of validators of the chain, fees and other chain-specific configurations."))))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);