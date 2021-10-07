"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[34115],{93501:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],p={description:"Peer to peer communications crate.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","p2p","crate"]},s="Structure: Communication",l={unversionedId:"structure/p2p",id:"structure/p2p",isDocsHomePage:!1,title:"Structure: Communication",description:"Peer to peer communications crate.",source:"@site/external/stronghold.rs/documentation/docs/structure/p2p.md",sourceDirName:"structure",slug:"/structure/p2p",permalink:"/stronghold.rs/structure/p2p",tags:[],version:"current",frontMatter:{description:"Peer to peer communications crate.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","p2p","crate"]},sidebar:"mySidebar",previous:{title:"Structure: Runtime",permalink:"/stronghold.rs/structure/engine/runtime"},next:{title:"Structure: Derive",permalink:"/stronghold.rs/structure/derive"}},c=[],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-communication"},"Structure: Communication"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/p2p"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.rs/stronghold-p2p"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://crates.io/crates/stronghold-p2p"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-p2p.svg",alt:null})))))),(0,o.kt)("p",null,(0,o.kt)("h1",{parentName:"p"},"Stronghold Peer-to-Peer Communication"),(0,o.kt)("p",{parentName:"p"},"The Stronghold-p2p library enables end-to-end encrypted communication between peers in different processes, devices and networks.\nThe basis for its functionality is the ",(0,o.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"libp2p")," framework, which is a system of protocols, specifications and libraries that enable the development of peer-to-peer network applications."),(0,o.kt)("p",{parentName:"p"},"You can build the Stronghold-p2p crate separately from Stronghold, as well as use it independently. It allows users to transmit generic 1:1 Request-Response messages between two peers, with an additional firewall that prevents unauthorized access. In case that a peer may not be dialed directly, it supports the usage of a relay peer that blindly relays the traffic between two peers."),(0,o.kt)("h2",{parentName:"p"},"Transmission of Data"),(0,o.kt)("p",{parentName:"p"},"Data is transmitted via a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Transmission_Control_Protocol"},"TCP")," transport with additional support for ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"Websockets")," and ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System"},"DNS"),' resolution.\nThe transport is "upgraded" with the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/yamux/blob/master/spec.md"},"Yamux Protocol")," for multiplexing, and a ",(0,o.kt)("a",{parentName:"p",href:"https://noiseprotocol.org/noise.html"},"Noise")," protocol that implements end-to-end encryption. "),(0,o.kt)("p",{parentName:"p"},"The Noise-handshake is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"},"Diffie-Helllman key exchange")," and allows two peers that have no prior knowledge of each other to create a shared secret key over an insecure medium. Stronghold-p2p uses the ",(0,o.kt)("a",{parentName:"p",href:"http://noiseprotocol.org/noise.html#interactive-handshake-patterns-fundamental"},"XX-Pattern")," for the handshake."),(0,o.kt)("h2",{parentName:"p"},"Connecting Peers"),(0,o.kt)("p",{parentName:"p"},"A peer can establish a connection to a remote peer if they know the remote peer's address. If both peers are in the same local network, they can enable the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multicast_DNS"},(0,o.kt)("inlineCode",{parentName:"a"},"Mdns"))," feature, which implements automatic peer discovery in a local network."),(0,o.kt)("p",{parentName:"p"},"If the two peers are in two different networks without public IP addresses, Stronghold-p2p supports the usage of relay peers. The relay forwards all traffic between source and destination. Thanks to the Noise-encryption, the communication is end-to-end encrypted between the two peers, independently of whether a relay is used or not."),(0,o.kt)("h2",{parentName:"p"},"Firewall"),(0,o.kt)("p",{parentName:"p"},"Stronghold-p2p's network protocol implements a low-level firewall. The firewall approves or rejects each inbound and outbound request based on default and peer-specific rules. In addition to fixed rules, requests may also be approved or rejected individually in an asynchronous manner.")))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);