"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[30832],{92795:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return c},toc:function(){return u},default:function(){return h}});var r=t(83117),i=t(80102),n=(t(67294),t(3905)),s=["components"],o={description:"An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["IOTA 1.0","IOTA 1.5","changes","guides","migration","developer","reference"]},l="IOTA Chrysalis Guides",d={unversionedId:"guides/overview",id:"guides/overview",title:"IOTA Chrysalis Guides",description:"An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.",source:"@site/external/chrysalis-docs/docs/guides/overview.md",sourceDirName:"guides",slug:"/guides/overview",permalink:"/iota-wiki/chrysalis-docs/guides/overview",editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/main/external/chrysalis-docs/docs/guides/overview.md",tags:[],version:"current",frontMatter:{description:"An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["IOTA 1.0","IOTA 1.5","changes","guides","migration","developer","reference"]},sidebar:"mySidebar",previous:{title:"IOTA Wallet Library",permalink:"/iota-wiki/chrysalis-docs/libraries/wallet"},next:{title:"Developer Guide to Chrysalis",permalink:"/iota-wiki/chrysalis-docs/guides/developer"}},c={},u=[{value:"Overall Changes from IOTA 1.0 to 1.5 (Chrysalis) in a Nutshell",id:"overall-changes-from-iota-10-to-15-chrysalis-in-a-nutshell",level:2}],p={toc:u};function h(e){var a=e.components,t=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iota-chrysalis-guides"},"IOTA Chrysalis Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer"},"Developer Guide"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/exchange"},"Exchange Guide"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/token_migration"},"Token Migration Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/migration_mechanism"},"Migration Mechanism"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/hub_migration"},"Hub Migration Guide"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/backup_security"},"Backup and Security"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/snapshot_validation_bootstrapping"},"Chrysalis Snapshot Validation"),".")),(0,n.kt)("h2",{id:"overall-changes-from-iota-10-to-15-chrysalis-in-a-nutshell"},"Overall Changes from IOTA 1.0 to 1.5 (Chrysalis) in a Nutshell"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The format of the address was changed, and it is now based on both the ",(0,n.kt)("inlineCode",{parentName:"li"},"derivation path")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"bech32")," standards. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#iota-15-address-anatomy"},"IOTA address anatomy")," guide."),(0,n.kt)("li",{parentName:"ul"},"The concepts of ",(0,n.kt)("inlineCode",{parentName:"li"},"bundles")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"transactions")," were replaced with ",(0,n.kt)("inlineCode",{parentName:"li"},"messages")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"payloads"),". The ",(0,n.kt)("inlineCode",{parentName:"li"},"message")," is a data structure that is actually being broadcast in the network and represents a node (vertex) in the Tangle graph. For reference, you can read both the ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#messages-payloads-and-transactions"},"messages, payload, and transactions")," and ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#selected-message-payloads"},"selected message payloads")," guides."),(0,n.kt)("li",{parentName:"ul"},"The IOTA network is based on a DAG (Directed Acyclic Graph) to store individual ",(0,n.kt)("inlineCode",{parentName:"li"},"messages")," and related ",(0,n.kt)("inlineCode",{parentName:"li"},"transactions"),". However, each ",(0,n.kt)("inlineCode",{parentName:"li"},"message")," can newly reference up to 8 parent messages. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#messages-payloads-and-transactions"},"messages, payload, and transactions")," guide."),(0,n.kt)("li",{parentName:"ul"},"The signature scheme based on ",(0,n.kt)("inlineCode",{parentName:"li"},"WOTS")," was replaced with the ",(0,n.kt)("inlineCode",{parentName:"li"},"Ed25519")," signature scheme. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#seed-and-addresses"},"seed and addresses")," guide."),(0,n.kt)("li",{parentName:"ul"},"Due to the changed signature scheme, IOTA addresses are reusable without any negative security impact. Compared to IOTA 1.0, which was based on ternary, IOTA 1.5 is based on binary and is thus very efficient on all kinds of current hardware devices. In contrast to IOTA 1.0, IOTA 1.5 addresses are perfectly reusable; even if one spends funds from the given address, it can be used again. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#addresskey-space"},"address/key space")," guide."),(0,n.kt)("li",{parentName:"ul"},"Originally, IOTA 1.0 used an ",(0,n.kt)("inlineCode",{parentName:"li"},"account-based model")," for tracking individual iota tokens. Chrysalis embraced the ",(0,n.kt)("inlineCode",{parentName:"li"},"Unspent Transaction Output")," (also known as ",(0,n.kt)("inlineCode",{parentName:"li"},"UTXO"),") model to track tokens and token holders. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#unspent-transaction-output-utxo"},"Unspent Transaction Output")," guide."),(0,n.kt)("li",{parentName:"ul"},"The approach to client libraries was completely reengineered from the ground up. There are new official client libraries that serve as ",(0,n.kt)("inlineCode",{parentName:"li"},"one-source-code-of-truth")," to IOTA users and can be combined in a modular fashion based on particular use cases. All libraries provide a binding to other programming languages. For reference, you can read an overview of ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/libraries/overview"},"client libraries"),"."),(0,n.kt)("li",{parentName:"ul"},"Our official IOTA tools, such as wallet software, use the same libraries under the hood so any developer may work in the same environment as we do."),(0,n.kt)("li",{parentName:"ul"},"The official client libraries embraced an ",(0,n.kt)("inlineCode",{parentName:"li"},"Hierarchical Deterministic Wallets")," approach which is fully ",(0,n.kt)("inlineCode",{parentName:"li"},"BIP44")," compatible. For reference, you can read the ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#addresskey-space"},"address/key space")," guide."),(0,n.kt)("li",{parentName:"ul"},"There is a new official wallet software called Firefly. See ",(0,n.kt)("a",{parentName:"li",href:"https://firefly.iota.org/"},"Firefly")," and the Repo at: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/firefly"},"Firefly Github"))))}h.isMDXComponent=!0},3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||n;return t?r.createElement(m,s(s({ref:a},c),{},{components:t})):r.createElement(m,s({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,s=new Array(n);s[0]=p;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<n;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);