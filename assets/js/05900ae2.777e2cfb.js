"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93011],{59452:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={description:"IOTA Smart Contract Protocol is IOTA's solution for running smart contracts on top of the IOTA tangle.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","metrics","reference"]},c="Exposed Metrics",l={unversionedId:"metrics",id:"metrics",title:"Exposed Metrics",description:"IOTA Smart Contract Protocol is IOTA's solution for running smart contracts on top of the IOTA tangle.",source:"@site/external/wasp/documentation/docs/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/smart-contracts/metrics",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/metrics.md",tags:[],version:"current",frontMatter:{description:"IOTA Smart Contract Protocol is IOTA's solution for running smart contracts on top of the IOTA tangle.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","metrics","reference"]},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/smart-contracts/contribute"}},p={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exposed-metrics"},"Exposed Metrics"),(0,o.kt)("p",null,"You can see all exposed metrics at our ",(0,o.kt)("a",{parentName:"p",href:"https://wasp.sc.iota.org/metrics"},"metrics endpoint"),". Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/testnet#endpoints"},"testnet endpoints description")," for access details."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Metric"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"wasp_off_ledger_requests_counter")),(0,o.kt)("td",{parentName:"tr",align:null},"Off-ledger requests per chain.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"wasp_on_ledger_request_counter")),(0,o.kt)("td",{parentName:"tr",align:null},"On-ledger requests per chain.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"wasp_processed_request_counter")),(0,o.kt)("td",{parentName:"tr",align:null},"Total number of requests processed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"messages_received_per_chain")),(0,o.kt)("td",{parentName:"tr",align:null},"Number of messages received per chain.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"receive_requests_acknowledgement_message")),(0,o.kt)("td",{parentName:"tr",align:null},"Number of request acknowledgement messages per chain.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"request_processing_time")),(0,o.kt)("td",{parentName:"tr",align:null},"Time to process request.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"vm_run_time")),(0,o.kt)("td",{parentName:"tr",align:null},"Time it takes to run the vm.")))))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);