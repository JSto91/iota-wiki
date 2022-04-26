"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35277],{26136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],s={id:"an-introduction-to-iota",title:"An Introduction to IOTA",description:"A basic introduction to the IOTA DLT Technology. The use-cases and the Ecosystem developed around it."},l="An Introduction to IOTA",c={unversionedId:"about-iota/an-introduction-to-iota",id:"about-iota/an-introduction-to-iota",title:"An Introduction to IOTA",description:"A basic introduction to the IOTA DLT Technology. The use-cases and the Ecosystem developed around it.",source:"@site/internal/learn/about-iota/an-introduction-to-iota.md",sourceDirName:"about-iota",slug:"/about-iota/an-introduction-to-iota",permalink:"/learn/about-iota/an-introduction-to-iota",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/about-iota/an-introduction-to-iota.md",tags:[],version:"current",lastUpdatedAt:1642068855,formattedLastUpdatedAt:"1/13/2022",frontMatter:{id:"an-introduction-to-iota",title:"An Introduction to IOTA",description:"A basic introduction to the IOTA DLT Technology. The use-cases and the Ecosystem developed around it."},sidebar:"learn",next:{title:"Data Transfer",permalink:"/learn/about-iota/data-transfer"}},h={},d=[{value:"The blockchain data structure",id:"the-blockchain-data-structure",level:2},{value:"The Tangle data structure",id:"the-tangle-data-structure",level:2},{value:"Consensus in a blockchain",id:"consensus-in-a-blockchain",level:2},{value:"Consensus in the Tangle",id:"consensus-in-the-tangle",level:2},{value:"The Coordinator",id:"the-coordinator",level:2}],u={toc:d};function p(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"an-introduction-to-iota"},"An Introduction to IOTA"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This topic gives a brief overview and describes some of the main differences between IOTA's Tangle and a blockchain.")),(0,i.kt)("p",null,"Blockchains and the Tangle both fall under the same category of distributed ledger technology (DLT)."),(0,i.kt)("p",null,"The main differences between blockchains and the Tangle are the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In a blockchain, new transactions can only be attached to a single point (a new block). This block follows a previously produced block and is directly cryptographically linked to this previous block. Transactions in a blockchain can only become part of the ledger (the record of balances and accounts) if they are included in a newly issued block by the block producers (miners in PoW blockchains, stakers in PoS blockchains). In nearly all blockchains, the block producers can decide which new transactions they prefer to include and confirm in the blocks they produce. This leads to competition between the freshly issued transactions to become part of a new block. The fee-based incentivized structure of those blockchains favors users willing to pay a higher fee for transactions as they more likely included in the new block than those offering a lower fee.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'In the Tangle, there are no block producers, and therefore every user is free to issue new transactions and attach them on different Tangle parts without an entity that acts as middlemen. The Tangle is not a single chain of blocks that follow each other. It is a network of parallel processed transactions (so-called Tips). This parallel transactions form the "front" of the Tangle and offer many different points for new issued transactions to be attached, which dramatically speeds up the processing of transactions.\nEvery node in the network is free to attach new transactions to the network at any time. No entity is needed to decide when and if those transactions get included. As long as they follow the basic rules of the protocol (valid signatures / no double spending of funds) those transactions will become part of the ledger by just issuing them to a node.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Opposite to that, a blockchain transactions must be included in a block by a block producer. These are entities that collects new issued transactions, validate them and include them in the next block. A Blockchain must always select a single leader as a block producer to attach a new block to the blockchain. Only this single block producer will earn all the fees of the transactions that are part of the issued block and earn the reward (in the form of newly created tokens) for producing the block. This is also seen as a form of centralization in blockchains, as you need middlemen that process your transactions. Regular users are not allowed to write directly to the ledger. That leads to the well-known "miner race," where only the miner with the highest computational processing power, or stakers with the highest stake, have a reasonable chance of becoming a block producer and are allowed to attach a new block including their processed transactions to the ledger. All the electricity used by the other miners in this race of solving the cryptographic puzzle needed to fulfill the proof of work requirements while producing the current block has been wasted, as their attempted blocks are never becoming part of the blockchain. ')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IOTA, in contrast, is a leaderless protocol. It does not require any middlemen to include transactions into the Tangle. Everyone is free to attach transactions as long as they are following the basic layout design of the protocol. There is no need to elect a leader as the Tangle is capable of implementing new transactions in parallel processing. IOTA is therefore  a multi - threaded ledger. This is one of the reasons why IOTA can reach a very high transaction throughput and remains feeless."))),(0,i.kt)("p",null,"To explain these points, you need to understand the differences between the data structures and the consensus mechanisms in these DLTs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Blockchain vs. Tangle")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"layer1-tangle",src:n(73258).Z,width:"1852",height:"1051"})),(0,i.kt)("h2",{id:"the-blockchain-data-structure"},"The blockchain data structure"),(0,i.kt)("p",null,"The blockchain data structure consists of a chain of sequential blocks, where each block contains a limited number of messages. As a result, Validators can attach new messages to only one place: a block at the end of the chain. Due to this limitation, blockchain networks often experience slow confirmation times. This limitation is known as the blockchain bottleneck."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Blockchain bottleneck")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"blockchain-bottleneck",src:n(99677).Z,width:"867",height:"500"})),(0,i.kt)("p",null,"All transactions in a blockchain have to wait until they are included in a block. Due to block size and block production time limitations, this creates congestion and waiting times for transactions."),(0,i.kt)("h2",{id:"the-tangle-data-structure"},"The Tangle data structure"),(0,i.kt)("p",null,"The Tangle data structure is a directed acyclic graph (DAG), where each message is attached to two to eight previous ones. Rather than being limited to a single place for attaching new messages, you can attach messages in different places at the front of the Tangle. The protocol can process these various attachments in parallel."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tangle bottleneck")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tangle-bottleneck",src:n(12885).Z,width:"867",height:"500"})),(0,i.kt)("p",null,"Allowing parallel processing removes congestion."),(0,i.kt)("h2",{id:"consensus-in-a-blockchain"},"Consensus in a blockchain"),(0,i.kt)("p",null,"In blockchains, the network participants are divided\ninto validators (miners, stakers) and users. Miners consume large amounts of computing power to complete the proof of work (PoW) required to chain the blocks together. Miners and stakers are incentivized to validate messages because of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The fees that users are willing to pay to have their messages included in a block")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The reward that the network pays out in the form of freshly created tokens to the validators for producing the new block. "))),(0,i.kt)("p",null,"The only way to reverse messages in a POW blockchain is to mine a new blockchain in the same amount of time it takes other miners to mine a single block. To do so, a miner would need 51% of the network's ability to do PoW, known as hash power. As a result, requiring validators to do PoW secures blockchain networks by making it difficult to attack, change, or stop. The more miners participate, the more secure the network is."),(0,i.kt)("p",null,"Producing blocks in a proof of stake (PoS) Blockchain usually requires a staker to own vast amounts of staked tokens. Often only a few selected or fixed Validators are granted to be block producers. These entities are pre-defined by the protocol's creators (a form of centralization) or emerge as validators holding the most significant stake of tokens. PoS blockchains do not require enormous amounts of energy wasted for PoW, but therefore only allow the wealthiest participants to write to the ledger and produce new blocks."),(0,i.kt)("h2",{id:"consensus-in-the-tangle"},"Consensus in the Tangle"),(0,i.kt)("p",null,"Sending messages requires no fees in the Tangle because the network has no miners or stakers. In the Tangle, PoW is not used to secure the network. Instead, PoW is used only to discourage spam messages. All IOTA nodes validate messages and use different functions alongside messages in their confirmation to reach consensus. Currently, messages will only be considered valid if they reference a milestone. These milestones are issued by a special network node \u2013 the Coordinator."),(0,i.kt)("h2",{id:"the-coordinator"},"The Coordinator"),(0,i.kt)("p",null,"The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. This topic describes how nodes use milestones to determine which messages are confirmed."),(0,i.kt)("p",null,"The Coordinator is a temporary solution. IOTA will remove the Coordinator in the upcoming IOTA 2.0 network. The following text describes how the Coordinator is currently deployed within IOTA."),(0,i.kt)("p",null,"Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated."),(0,i.kt)("p",null,"To allow the nodes to recognize valid milestones, all nodes that participate in the same IOTA network are configured with the Ed25519 signatures of a coordinator they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them."),(0,i.kt)("p",null,"To ensure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones signed with those signatures regularly (every 10 seconds). This way ensures that nodes can compare the indexes of their milestones to check whether they are synchronized with the rest of the network."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"coordinator",src:n(79591).Z,width:"743",height:"500"})))}p.isMDXComponent=!0},99677:function(e,t,n){t.Z=n.p+"assets/images/blockchain-bottleneck-c807d504ff52169427d3ca4cf0179a8c.gif"},73258:function(e,t,n){t.Z=n.p+"assets/images/layer1-tangle-5def88eba0eda48929dd01d17a7d5510.png"},79591:function(e,t,n){t.Z=n.p+"assets/images/milestones-ca3479a44644b9ab2414b07e1e62d6ac.gif"},12885:function(e,t,n){t.Z=n.p+"assets/images/tangle-bottleneck-ad9ab01d5399a5cefbac1cbd1be3900a.gif"},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?o.createElement(f,r(r({ref:t},h),{},{components:n})):o.createElement(f,r({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);