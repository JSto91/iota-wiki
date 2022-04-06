"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8434],{33097:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={description:"The root contract is the first smart contract deployed on the chain. It functions as a smart contract factory for the chain, and manages chain ownership and fees.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","root","initialization","entry points","fees","ownership","views","reference"]},s="The `root` Contract",l={unversionedId:"guide/core_concepts/core_contracts/root",id:"guide/core_concepts/core_contracts/root",title:"The `root` Contract",description:"The root contract is the first smart contract deployed on the chain. It functions as a smart contract factory for the chain, and manages chain ownership and fees.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/core_contracts/root.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/root",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/core_contracts/root",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/core_contracts/root.md",tags:[],version:"current",frontMatter:{description:"The root contract is the first smart contract deployed on the chain. It functions as a smart contract factory for the chain, and manages chain ownership and fees.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","root","initialization","entry points","fees","ownership","views","reference"]},sidebar:"tutorialSidebar",previous:{title:"Core Contracts",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/core_contracts/overview"},next:{title:"The `_default` Contract",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/core_contracts/default"}},p={},u=[{value:"Entry Points",id:"entry-points",level:2},{value:"init",id:"init",level:3},{value:"deployContract",id:"deploycontract",level:3},{value:"Parameters",id:"parameters",level:4},{value:"grantDeployPermission",id:"grantdeploypermission",level:3},{value:"revokeDeployPermission",id:"revokedeploypermission",level:3},{value:"requireDeployPermissions",id:"requiredeploypermissions",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Views",id:"views",level:2},{value:"findContract",id:"findcontract",level:3},{value:"getContractRecords",id:"getcontractrecords",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-root-contract"},"The ",(0,a.kt)("inlineCode",{parentName:"h1"},"root")," Contract"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," contract is one of the ",(0,a.kt)("a",{parentName:"p",href:"/iota-wiki/smart-contracts/guide/core_concepts/core_contracts/overview"},"core contracts")," on each IOTA Smart Contracts\nchain."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," contract provides the following functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It is the first smart contract deployed on the chain. Upon receiving the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," request, bootstraps the state of the chain. Part of the state initialization is the deployment of all other core contracts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It functions as a smart contract factory for the chain: upon request, it deploys other smart contracts and maintains an on-chain registry of smart contracts in its state.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The contract registry keeps a list of contract records, which contain their respective name, hname, description and creator."))),(0,a.kt)("h2",{id:"entry-points"},"Entry Points"),(0,a.kt)("p",null,"The following are the functions/entry points of the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," contract. Some of\nthem may require authorisation, i.e. can only be invoked by a specific caller,\nfor example the ",(0,a.kt)("em",{parentName:"p"},"chain owner"),"."),(0,a.kt)("h3",{id:"init"},"init"),(0,a.kt)("p",null,"The constructor. Automatically posted to the chain immediately after confirmation of the origin transaction, as the first call."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initializes base values of the chain according to parameters"),(0,a.kt)("li",{parentName:"ul"},"Sets the caller as the ",(0,a.kt)("em",{parentName:"li"},"chain owner")),(0,a.kt)("li",{parentName:"ul"},"Sets chain fee color (default is ",(0,a.kt)("em",{parentName:"li"},"IOTA color"),")"),(0,a.kt)("li",{parentName:"ul"},"Deploys all core contracts. The core contracts become part of the immutable state.\nIt makes them callable just like any other smart contract deployed on the chain.")),(0,a.kt)("h3",{id:"deploycontract"},"deployContract"),(0,a.kt)("p",null,"Deploys a smart contract on the chain, if the caller has deploy permission. "),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hash of the ",(0,a.kt)("em",{parentName:"li"},"blob")," with the binary of the program and VM type"),(0,a.kt)("li",{parentName:"ul"},"Name of the instance. This is later used in the hashed form of ",(0,a.kt)("em",{parentName:"li"},"hname")),(0,a.kt)("li",{parentName:"ul"},"Description of the instance")),(0,a.kt)("h3",{id:"grantdeploypermission"},"grantDeployPermission"),(0,a.kt)("p",null,"The chain owner grants deploy permission to an agent ID."),(0,a.kt)("h3",{id:"revokedeploypermission"},"revokeDeployPermission"),(0,a.kt)("p",null,"The chain owner revokes deploy permission from an agent ID."),(0,a.kt)("h3",{id:"requiredeploypermissions"},"requireDeployPermissions"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"enabled: true | false - whether permissions should be required to deploy a contract on the chain.")),(0,a.kt)("p",null,"By default permissions are enabled (addresses need to be granted the right to deploy), but the chain owner can override this setting to allow anyone to deploy contracts on the chain."),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("p",null,"Can be called directly. Calling a view does not modify the state of the smart\ncontract."),(0,a.kt)("h3",{id:"findcontract"},"findContract"),(0,a.kt)("p",null,"Returns the record for a given smart contract (if it exists)."),(0,a.kt)("h3",{id:"getcontractrecords"},"getContractRecords"),(0,a.kt)("p",null,"Returns the list of all smart contracts deployed on the chain and related records."))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);