"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84823],{6343:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return h},toc:function(){return m},default:function(){return d}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),i=a(22004),s=["components"],l={id:"smart-contracts-tangle",title:"IOTA Tangle",description:"In this article you will learn how the IOTA Smart Contracts interact with the IOTA Tangle.",keywords:["Tangle","Smart Contracts","wasp","ISCP"]},c=void 0,u={unversionedId:"future/smart-contracts/smart-contracts-tangle",id:"future/smart-contracts/smart-contracts-tangle",title:"IOTA Tangle",description:"In this article you will learn how the IOTA Smart Contracts interact with the IOTA Tangle.",source:"@site/internal/learn/future/smart-contracts/07_tangle.mdx",sourceDirName:"future/smart-contracts",slug:"/future/smart-contracts/smart-contracts-tangle",permalink:"/learn/future/smart-contracts/smart-contracts-tangle",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/future/smart-contracts/07_tangle.mdx",tags:[],version:"current",lastUpdatedAt:1638881940,formattedLastUpdatedAt:"12/7/2021",sidebarPosition:7,frontMatter:{id:"smart-contracts-tangle",title:"IOTA Tangle",description:"In this article you will learn how the IOTA Smart Contracts interact with the IOTA Tangle.",keywords:["Tangle","Smart Contracts","wasp","ISCP"]},sidebar:"learn",previous:{title:"Consensus",permalink:"/learn/future/smart-contracts/smart-contracts-consensus"},next:{title:"Community Tutorials",permalink:"/learn/future/smart-contracts/smart-contracts-community-tutorials"}},h={},m=[{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Further Readings\u200b\u200b",id:"further-readings",level:2}],p={toc:m};function d(t){var e=t.components,l=(0,n.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this article you will learn how the IOTA Smart Contracts interact with the IOTA Tangle."),(0,o.kt)("p",null,"as Smart Contracts can automate contractual obligations within many industries, they are essential across many of IOTA\u2019s verticals including ",(0,o.kt)("a",{parentName:"p",href:"https://www.iota.org/solutions/global-trade-and-supply-chains"},"Supply Chains"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.iota.org/solutions/smart-city"},"Smart Cities"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.iota.org/solutions/industrial-iot"},"Industrial IoT")," amongst others."),(0,o.kt)("p",null,"Thanks to the Tangle\u2019s properties of scalability, high throughput, and feeless transactions, IOTA Smart Contracts have many benefits."),(0,o.kt)(i.Z,{playing:!0,muted:!0,url:"https://files.iota.org/media/PiD020_sfx_LowRez.mp4",width:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"To facilitate IOTA\u2019s use cases, including the Internet of Things, IOTA Smart Contracts run on top of the base layer - Layer 1 (L1), \u201doff-Tangle\u201d."),(0,o.kt)("p",null,"Although Ethereum\u2019s \u201con-chain\u201d smart contracts are popular, they have some significant drawbacks. The most salient one is that for every smart contract in existence every node needs to keep a copy of the contract\u2019s program code and state. Every node in the network has to execute the exact same code when the smart contract is triggered."),(0,o.kt)("p",null,"There is no limit to the number of nodes that have to run this identical code just to generate a single result. And as the network grows, the amount of processing needed to produce that same result increases. This is a huge barrier to scalability."),(0,o.kt)("p",null,"In addition to the transaction fees you need to pay to be considered for inclusion in the ledger, you also need to pay gas fees to keep the program running long enough for it to complete. This means the cost to run these smart contracts becomes prohibitively high for anything but certain classes of use cases where the cost overhead is relatively insignificant."),(0,o.kt)("p",null,"This is why IOTA Smart Contracts are not implemented as part of the core protocol but as a layer 2 (L2) protocol to leverage all the advantages."),(0,o.kt)(i.Z,{playing:!0,muted:!0,url:"https://files.iota.org/media/Pid022_sfx_LowRez.mp4",width:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"IOTA Smart Contracts Network Overview",src:a(77667).Z,width:"862",height:"697"})),(0,o.kt)("p",null,"The current IOTA Smart Contracts implementation runs on the experimental next-generation of ",(0,o.kt)("a",{parentName:"p",href:"https://v2.iota.org/"},"IOTA 2.0"),", deployed on the fully decentralized ",(0,o.kt)("a",{parentName:"p",href:"https://v2.iota.org/visualizer"},"IOTA 2.0 DevNet"),", powered by ",(0,o.kt)("a",{parentName:"p",href:"/goshimmer/welcome"},"GoShimmer nodes"),". As IOTA Smart Contracts should be available on the IOTA mainnet before switching to the fully decentralized IOTA 2.0 protocol (in a process known as \u201cCoordicide\u201d), an important deliverable for the next release will be to support anchoring to the current IOTA mainnet. The current IOTA mainnet and the fully decentralized future IOTA 2.0 protocol have some fundamental differences, making it difficult to support both at the same time. The primary team focus is therefore to support smart contracts on the current IOTA mainnet using the ",(0,o.kt)("a",{parentName:"p",href:"/hornet/welcome"},"Hornet node")," software."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"further-readings"},"Further Readings\u200b\u200b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn more about the ",(0,o.kt)("a",{parentName:"li",href:"/IOTA-2.0-Research-Specifications/Preface"},"IOTA 2.0 (Coordicide) Research Specifications"),"."),(0,o.kt)("li",{parentName:"ul"},"Participate and add your tutorials on the ",(0,o.kt)("a",{parentName:"li",href:"/learn/future/smart-contracts/smart-contracts-community-tutorials"},"Community Tutorials"),"."),(0,o.kt)("li",{parentName:"ul"},"Build on top of ",(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/overview"},"IOTA Smart Contracts"),".")))}d.isMDXComponent=!0},77667:function(t,e,a){e.Z=a.p+"assets/images/sc_overview-3f68255f8c02488ed716a6dc4f1550be.png"}}]);