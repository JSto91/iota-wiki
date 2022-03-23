"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[70584],{86089:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return h},toc:function(){return p},default:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),c=["components"],i={keywords:["Smart Contracts","on-chain account","Ownership","Accounts Contract"],description:"IOTA Smart Contracts chains keeps a ledger of on-chain account balances.  ON-chain accounts are identified by an AgentID.",image:"/img/tutorial/accounts.png"},s="How Accounts Work",l={unversionedId:"guide/core_concepts/accounts/how-accounts-work",id:"guide/core_concepts/accounts/how-accounts-work",title:"How Accounts Work",description:"IOTA Smart Contracts chains keeps a ledger of on-chain account balances.  ON-chain accounts are identified by an AgentID.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/accounts/how-accounts-work.md",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-accounts-work",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/accounts/how-accounts-work",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/accounts/how-accounts-work.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","on-chain account","Ownership","Accounts Contract"],description:"IOTA Smart Contracts chains keeps a ledger of on-chain account balances.  ON-chain accounts are identified by an AgentID.",image:"/img/tutorial/accounts.png"},sidebar:"tutorialSidebar",previous:{title:"The `governance` Contract",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/core_contracts/governance"},next:{title:"How to Deposit to a Chain",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/accounts/how-to-deposit-to-a-chain"}},h={},p=[{value:"Account Ownership",id:"account-ownership",level:2},{value:"Smart Contract ID",id:"smart-contract-id",level:3},{value:"Agent ID",id:"agent-id",level:3},{value:"Different Types of Account",id:"different-types-of-account",level:3},{value:"The Accounts Contract",id:"the-accounts-contract",level:2},{value:"Interoperability Between Chains",id:"interoperability-between-chains",level:2}],u={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-accounts-work"},"How Accounts Work"),(0,o.kt)("p",null,"IOTA Smart Contracts provide secure, trustless transfers of digitized assets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Between smart contracts on the same or different chains"),(0,o.kt)("li",{parentName:"ul"},"Between smart contracts and L1 addresses on the UTXO Ledger")),(0,o.kt)("p",null,"On the UTXO Ledger, just like with any DLT, we have ",(0,o.kt)("strong",{parentName:"p"},"trustless")," and ",(0,o.kt)("strong",{parentName:"p"},"atomic"),"\ntransfers of assets between addresses on the ledger. The tokens contained in the\naddress can be moved to another address by providing a valid signature using the\nprivate key which controls the source address."),(0,o.kt)("p",null,"In IOTA Smart Contracts, the smart contracts which reside on chains are also owners of their\ntokens. Each smart contract can receive tokens that are transferred to it and\ncan send tokens it controls to any other owner, be it another smart\ncontract, or an ordinary L1 address on the UTXO Ledger."),(0,o.kt)("p",null,"There are 2 types of entities that can control tokens:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"L1 addresses on the UTXO Ledger"),(0,o.kt)("li",{parentName:"ul"},"Smart contracts on IOTA Smart Contracts chains")),(0,o.kt)("p",null,"There are 3 different types of trustless token transfers possible between those\nentities. Each type involves a different mechanism of transfer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Between L1 address and smart contract"),(0,o.kt)("li",{parentName:"ul"},"Between smart contracts on the same chain"),(0,o.kt)("li",{parentName:"ul"},"Between smart contracts on different chains")),(0,o.kt)("p",null,"To make the system homogenous, we introduce the following two concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Agent ID"),": Represents an owner of tokens independently of the type of\nowning entity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"On-chain account"),": Represents the unit of ownership on the chain.")),(0,o.kt)("p",null,"Each IOTA Smart Contracts chain keeps a ledger of on-chain account balances"),(0,o.kt)("h2",{id:"account-ownership"},"Account Ownership"),(0,o.kt)("h3",{id:"smart-contract-id"},"Smart Contract ID"),(0,o.kt)("p",null,"Unlike with blockchain systems like Ethereum, we cannot simply represent the\nsmart contract by a blockchain address: IOTA Smart Contracts can have many blockchains.\nEach chain in IOTA Smart Contracts is identified by its ",(0,o.kt)("em",{parentName:"p"},"chain ID"),". A chain can\ncontain many smart contracts on it. So, in IOTA Smart Contracts, each contract is identified by\nan identifier that consists of the chain ID, and the ",(0,o.kt)("em",{parentName:"p"},"hname")," of the smart\ncontract. In human-readable form, the smart ",(0,o.kt)("em",{parentName:"p"},"contract ID")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::cebf5908\n")),(0,o.kt)("p",null,"The part before ",(0,o.kt)("inlineCode",{parentName:"p"},"::")," is the ",(0,o.kt)("em",{parentName:"p"},"chain ID"),", the part after ",(0,o.kt)("inlineCode",{parentName:"p"},"::")," is the ",(0,o.kt)("em",{parentName:"p"},"hname")," of\nthe smart contract."),(0,o.kt)("h3",{id:"agent-id"},"Agent ID"),(0,o.kt)("p",null,"The agent ID is an identifier that generalizes and represents one of the two\nagent types in one identifier: either an L1 address on the UTXO Ledger or a\nsmart contract ID."),(0,o.kt)("p",null,"It is easy to determine which one is represented by the particular agent ID: an\nL1 address always has the ",(0,o.kt)("em",{parentName:"p"},"hname")," part all zero."),(0,o.kt)("h3",{id:"different-types-of-account"},"Different Types of Account"),(0,o.kt)("p",null,"Given that an on-chain account is identified by an AgentID:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The AgentID for accounts owned by L1 entities (regular IOTA wallets) looks like:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'Hname: 0\nAddress: "some address"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The AgentID for accounts owned by L2 entities (Smart Contracts):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'Hname: "Hname of the entity"\nAddress: "Address of the chain where the entity exists"\n')),(0,o.kt)("p",null,"For example, the smart contract with hname ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," that exists on the chain with address ",(0,o.kt)("inlineCode",{parentName:"p"},"000"),", can be identified on ",(0,o.kt)("strong",{parentName:"p"},"any")," chain by the following AgentID:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Hname: 123\nAddress: 000\n")),(0,o.kt)("h2",{id:"the-accounts-contract"},"The Accounts Contract"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Accounts")," contract manages which funds are owned by which accounts."),(0,o.kt)("p",null,"Internally there is a mapping of ",(0,o.kt)("inlineCode",{parentName:"p"},"Account (AgentID)")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"balances"),", which can include normal IOTAs and/or any colored tokens."),(0,o.kt)("p",null,"By calling this contract it is possible to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iota-wiki/smart-contracts/guide/core_concepts/accounts/view-account-balances"},"View current account balances")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iota-wiki/smart-contracts/guide/core_concepts/accounts/how-to-deposit-to-a-chain"},"Deposit funds to the chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iota-wiki/smart-contracts/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"},"Withdraw funds from the chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iota-wiki/smart-contracts/guide/core_concepts/accounts/the-common-account"},"Harvest")," - can only be called by the chain owner, to move funds from the chain common account to his account.")),(0,o.kt)("h2",{id:"interoperability-between-chains"},"Interoperability Between Chains"),(0,o.kt)("p",null,"Each chain contains any number of accounts. Each account owns colored\ntokens: a collection of ",(0,o.kt)("inlineCode",{parentName:"p"},"color: balance")," pairs."),(0,o.kt)("p",null,"Each account on the chain is controlled by some ",(0,o.kt)("inlineCode",{parentName:"p"},"agent ID"),". It means that tokens\ncontained in the account can only be moved by the entity behind that agent ID:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("em",{parentName:"li"},"agent ID")," represents an address on the UTXO Ledger, the tokens can\nonly be moved by a request signed by the private key of that address."),(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("em",{parentName:"li"},"agent ID")," represents a smart contract, the tokens can only be moved by\nthat smart contract. Note that the smart contract may reside on the same chain\nor another chain.")),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(39931).Z},(0,o.kt)("img",{loading:"lazy",alt:"Example situation. There are two chains deployed, with three smart contracts and one address.",src:n(29189).Z,width:"862",height:"682"}))),(0,o.kt)("p",null,"The picture illustrates an example situation. There are two chains deployed,\nwith respective IDs ",(0,o.kt)("inlineCode",{parentName:"p"},"Pmc7iH8b..")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Klm314noP8.."),". The pink chain ",(0,o.kt)("inlineCode",{parentName:"p"},"Pmc7iH8b.."),"\nhas two smart contracts on it (",(0,o.kt)("inlineCode",{parentName:"p"},"3037")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"2225"),") and the blue chain\n",(0,o.kt)("inlineCode",{parentName:"p"},"Klm314noP8..")," has one smart contract (",(0,o.kt)("inlineCode",{parentName:"p"},"7003"),")."),(0,o.kt)("p",null,"The UTXO Ledger has 1 address ",(0,o.kt)("inlineCode",{parentName:"p"},"P6ZxYXA2.."),". The address ",(0,o.kt)("inlineCode",{parentName:"p"},"P6ZxYXA2..")," controls\n1337 iotas and 42 red tokens on the UTXO Ledger. The same address also controls\n42 iotas on the pink chain and 8 green tokens on the blue chain. So, the owner\nof the private key behind the address controls 3 different accounts: 1 on the L1\nUTXO Ledger and 2 accounts on 2 different chains on L2."),(0,o.kt)("p",null,"At the same time, smart contract ",(0,o.kt)("inlineCode",{parentName:"p"},"7003")," on the blue chain has 5 iotas on its\nnative chain and controls 11 iotas on the pink chain."),(0,o.kt)("p",null,"Note that \u201ccontrol over account\u201d means the entity which has the private key can\nmove funds from it. For an ordinary address, it means the private key of the\naddress. For a smart contract, it means the private keys of the committee which\nruns the chain (the smart contract program can only be executed with those\nprivate keys)."))}d.isMDXComponent=!0},39931:function(e,t,n){t.Z=n.p+"assets/files/accounts-8f63e6966aff9c022e211a23c6393d9d.png"},29189:function(e,t,n){t.Z=n.p+"assets/images/accounts-8f63e6966aff9c022e211a23c6393d9d.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(m,c(c({ref:t},h),{},{components:n})):a.createElement(m,c({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);