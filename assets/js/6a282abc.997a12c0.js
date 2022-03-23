"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[75442],{1381:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],l={description:"How to run the preconfigured Docker setup.",image:"/img/logo/WASP_logo_dark.png",keywords:["ISCP","Smart Contracts","Running a node","docker","image","build","configure","arguments","GoShimmer"]},s="Preconfigured Development Docker setup",c={unversionedId:"guide/development_tools/docker_preconfigured",id:"guide/development_tools/docker_preconfigured",title:"Preconfigured Development Docker setup",description:"How to run the preconfigured Docker setup.",source:"@site/external/wasp/documentation/docs/guide/development_tools/docker_preconfigured.md",sourceDirName:"guide/development_tools",slug:"/guide/development_tools/docker_preconfigured",permalink:"/iota-wiki/smart-contracts/guide/development_tools/docker_preconfigured",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/development_tools/docker_preconfigured.md",tags:[],version:"current",frontMatter:{description:"How to run the preconfigured Docker setup.",image:"/img/logo/WASP_logo_dark.png",keywords:["ISCP","Smart Contracts","Running a node","docker","image","build","configure","arguments","GoShimmer"]},sidebar:"tutorialSidebar",previous:{title:"Fair Roulette",permalink:"/iota-wiki/smart-contracts/guide/example_projects/fair_roulette"},next:{title:"Contributing",permalink:"/iota-wiki/smart-contracts/contribute"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Running the setup",id:"running-the-setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Wasp-CLI configuration",id:"wasp-cli-configuration",level:2},{value:"Notes about GoShimmer",id:"notes-about-goshimmer",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preconfigured-development-docker-setup"},"Preconfigured Development Docker setup"),(0,i.kt)("p",null,"This page describes the usage of the preconfigured developer Docker setup."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"To diminish the time spent on configuration and research, we have created a docker-compose setup that ships a pre-configured Wasp and GoShimmer (v0.7.7) node, that are connected with each other - ready to run out of the box."),(0,i.kt)("h2",{id:"running-the-setup"},"Running the setup"),(0,i.kt)("p",null,"Checkout the project and start with docker-compose:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/wasp.git\ncd tools/devnet\ndocker-compose up\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All Wasp ports will bind to 127.0.0.1 by default.\nIf you want to expose the ports to the outside world, run ",(0,i.kt)("inlineCode",{parentName:"p"},"HOST=0.0.0.0 docker-compose up"),"."))),(0,i.kt)("p",null,"Docker will build a lightly modified GoShimmer (v0.7.7) image and a Wasp image based on the contents of the checked out develop branch. If you do modifications inside the branch, docker-compose will include them into the Wasp image too."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Wasp is configured to allow any connection coming from wasp-cli. This is fine for development purposes, but please make sure to not run it on a publicly available server, or to create matching firewall filter rules."),(0,i.kt)("p",null,"Besides this, everything should simply work as expected. Faucet requests will be handled accordingly, you will be able to deploy and run smart contracts. All useful ports such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wasp Dashboard (7000)"),(0,i.kt)("li",{parentName:"ul"},"Wasp API (9090)"),(0,i.kt)("li",{parentName:"ul"},"GoShimmer Dashboard (8081)"),(0,i.kt)("li",{parentName:"ul"},"GoShimmer API (8080)")),(0,i.kt)("p",null,"are available to the local machine."),(0,i.kt)("h2",{id:"wasp-cli-configuration"},"Wasp-CLI configuration"),(0,i.kt)("p",null,"As all ports are locally available, this ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli.json")," configuration is to be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "goshimmer": {\n    "api": "127.0.0.1:8080",\n    "faucetpowtarget": -1\n  },\n  "wasp": {\n    "0": {\n      "api": "127.0.0.1:9090",\n      "nanomsg": "127.0.0.1:5550",\n      "peering": "127.0.0.1:4000"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli init")," to generate a seed, and you are ready to go."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/wasp-cli"},"Configuring wasp-cli")," for further information."),(0,i.kt)("h2",{id:"notes-about-goshimmer"},"Notes about GoShimmer"),(0,i.kt)("p",null,"As GoShimmer runs as a standalone node, it establishes no connection to other GoShimmer nodes. Running it in this way is unusual, but fine for development purposes. Warnings about Tangle Time not synced or similar can be ignored."),(0,i.kt)("p",null,"GoShimmer keeps the tangle tips inside memory only and will lose it after a restart. To recover these tips from the database, a fork was required and is to be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lmoe/goshimmer"},"here"),". It is included in this package."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);