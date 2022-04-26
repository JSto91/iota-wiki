"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33869],{7652:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return h}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],s={keywords:["Smart Contracts","TestNet"],description:"A public testnet for developers to try out smart contracts",image:"/img/logo/WASP_logo_dark.png"},l="Testnet",p={unversionedId:"guide/chains_and_nodes/testnet",id:"guide/chains_and_nodes/testnet",title:"Testnet",description:"A public testnet for developers to try out smart contracts",source:"@site/external/wasp/documentation/docs/guide/chains_and_nodes/testnet.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/testnet",permalink:"/iota-wiki/smart-contracts/guide/chains_and_nodes/testnet",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/chains_and_nodes/testnet.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","TestNet"],description:"A public testnet for developers to try out smart contracts",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Chain Management",permalink:"/iota-wiki/smart-contracts/guide/chains_and_nodes/chain-management"},next:{title:"Introduction to the Wasm VM for IOTA Smart Contracts",permalink:"/iota-wiki/smart-contracts/guide/wasm_vm/intro"}},c={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Configuring <em>wasp-cli</em>",id:"configuring-wasp-cli",level:2},{value:"Interact with EVM",id:"interact-with-evm",level:2}],u={toc:m};function h(t){var e=t.components,s=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testnet"},"Testnet"),(0,i.kt)("p",null,"The testnet is deployed for the community to use for testing and interacting with smart contracts. "),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To make the barrier to entry for trying out the testnet as low as possible we decided to set all possible fees to zero. Since we expect that this decision will pollute the chain quite quickly we\u2019ll perform regular, unscheduled resets of this network if needed."))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This testnet is deployed with our own GoShimmer cluster dedicated to backing smart contracts. There are multiple committee nodes that do the work for the chain as well as multiple access nodes that are exposed via the endpoints listed below. We do throttle the endpoints to prevent overloading the testnet because we are looking for functionality testing more than stress testing. "),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)("p",null,"The testnet can be accessed via a series of endpoints that have been made available. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wasp.sc.iota.org"},"https://wasp.sc.iota.org")," . ",(0,i.kt)("strong",{parentName:"li"},"Username"),": wasp ",(0,i.kt)("strong",{parentName:"li"},"Password"),": wasp",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Wasp dashboard to explore the node configuration and view peering/chain configurations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.wasp.sc.iota.org"},"https://api.wasp.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Wasp api to deploy and interact with smart contracts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.wasp.sc.iota.org/info"},"https://api.wasp.sc.iota.org/info"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Information about the Wasp access node"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.wasp.sc.iota.org/doc"},"https://api.wasp.sc.iota.org/doc"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"API reference for the Wasp API"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://evm.wasp.sc.iota.org"},"https://evm.wasp.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The URL to interact with the Ethereum Virtual Machine on our testnet"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://explorer.wasp.sc.iota.org"},"https://explorer.wasp.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The URL to interact with the Ethereum Block Explorer on our testnet"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://goshimmer.sc.iota.org"},"https://goshimmer.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The GoShimmer dashboard to explore the Tangle backing our smart contract testnet"),(0,i.kt)("li",{parentName:"ul"},"goshimmer.sc.iota.org:5000",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The TXStream TCP port to use for the ",(0,i.kt)("inlineCode",{parentName:"li"},"nodeconn")," address with Wasp nodes."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.goshimmer.sc.iota.org/"},"https://api.goshimmer.sc.iota.org/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The GoShimmer api to interact with the Tangle directly"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.goshimmer.sc.iota.org/info"},"https://api.goshimmer.sc.iota.org/info"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Information about GoShimmer via the API"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://demo.sc.iota.org"},"https://demo.sc.iota.org"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Our FairRoulette demo application to see a live smart contract in action"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wasp.sc.iota.org/metrics"},"https://wasp.sc.iota.org/metrics"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"System metrics")))),(0,i.kt)("h2",{id:"configuring-wasp-cli"},"Configuring ",(0,i.kt)("em",{parentName:"h2"},"wasp-cli")),(0,i.kt)("p",null,"You will need to initialize ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," in order to create a seed that will be used to generate addresses."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli init\n")),(0,i.kt)("p",null,"Now we need to tell ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," how to reach our GoShimmer node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli set goshimmer.api https://api.goshimmer.sc.iota.org\n")),(0,i.kt)("p",null,"In order to deploy a smart contract you will need some funds. The wasp-cli tool makes this easy on our testnet. Run the following command to request some funds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli request-funds\n")),(0,i.kt)("p",null,"We need to let ",(0,i.kt)("em",{parentName:"p"},"wasp-cli")," know how to reach ",(0,i.kt)("em",{parentName:"p"},"Wasp")," by configuring the API address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli set wasp.0.api https://api.wasp.sc.iota.org\n")),(0,i.kt)("p",null,"Now you need to set the chain ID in ",(0,i.kt)("em",{parentName:"p"},"wasp-cli")," so that the correct chain can be found. Yo can find the ChainID by navigating to the ",(0,i.kt)("a",{parentName:"p",href:"https://wasp.sc.iota.org/chains"},"chains")," page of the wasp dashboard. Click on the ChainID of the chain you will be able to copy the ChainID from the next page. It will be formatted like ",(0,i.kt)("inlineCode",{parentName:"p"},"jaSDxeZNtum7kLuRg8oWQ6nXKgYjb3XVq7yiwnvtUG3C"),". "),(0,i.kt)("p",null,"Use the ChainID to tell ",(0,i.kt)("em",{parentName:"p"},"wasp-cli")," which chain you want to interact with. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli set chains.testchain jaSDxeZNtum7kLuRg8oWQ6nXKgYjb3XVq7yiwnvtUG3C\nwasp-cli set chain testchain\n")),(0,i.kt)("p",null,"On the ",(0,i.kt)("strong",{parentName:"p"},"testchain")," we have deployed a FairRoulette game that you can use to make sure your configuration is correct."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli --verbose chain post-request fairroulete placeBet string number int 2\n")),(0,i.kt)("p",null,"For simplicity, here is the full set of commands to configure ",(0,i.kt)("em",{parentName:"p"},"wasp-cli"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli init\nwasp-cli set goshimmer.api https://api.goshimmer.sc.iota.org\nwasp-cli request-funds\nwasp-cli set wasp.0.api https://api.wasp.sc.iota.org\nwasp-cli set chains.testchain jaSDxeZNtum7kLuRg8oWQ6nXKgYjb3XVq7yiwnvtUG3C\nwasp-cli set chain testchain\n")),(0,i.kt)("h2",{id:"interact-with-evm"},"Interact with EVM"),(0,i.kt)("p",null,"We have deployed an experimental EVM chain that you can interact with. To begin, add a custom network to Metamask with the following configuration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RPC URL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://evm.wasp.sc.iota.org"},"https://evm.wasp.sc.iota.org"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,i.kt)("td",{parentName:"tr",align:null},"1074")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://explorer.wasp.sc.iota.org"},"https://explorer.wasp.sc.iota.org"))))),(0,i.kt)("p",null,"It should look similar to this image. "),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"MetaMask",src:a(99076).Z,width:"676",height:"1068"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The other values (network name and currency symbol) can be whatever value you like. "))))}h.isMDXComponent=!0},99076:function(t,e,a){e.Z=a.p+"assets/images/metamask_testnet-8d0b1b721ed3e6eea93ee4eaee6d12b1.png"},3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(a),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(d,o(o({ref:e},c),{},{components:a})):n.createElement(d,o({ref:e},c))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);