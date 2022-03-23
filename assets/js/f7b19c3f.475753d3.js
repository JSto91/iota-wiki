"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21439],{5868:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return m}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=n(46624),l=["components"],s={title:"Create a Decentralized Identity",sidebar_label:"Create a DID Document",description:"Create DID Documents and publish them to the Tangle",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Create","Publish"]},c=void 0,u={unversionedId:"getting_started/create_and_publish",id:"getting_started/create_and_publish",title:"Create a Decentralized Identity",description:"Create DID Documents and publish them to the Tangle",source:"@site/external/identity.rs/documentation/docs/getting_started/create_and_publish.mdx",sourceDirName:"getting_started",slug:"/getting_started/create_and_publish",permalink:"/iota-wiki/identity.rs/getting_started/create_and_publish",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/getting_started/create_and_publish.mdx",tags:[],version:"current",frontMatter:{title:"Create a Decentralized Identity",sidebar_label:"Create a DID Document",description:"Create DID Documents and publish them to the Tangle",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Create","Publish"]},sidebar:"docs",previous:{title:"Install the Library",permalink:"/iota-wiki/identity.rs/getting_started/install"},next:{title:"Introduction",permalink:"/iota-wiki/identity.rs/decentralized_identifiers/overview"}},d={},p=[{value:"Identity Generation Process",id:"identity-generation-process",level:2},{value:"Using the Account Module",id:"using-the-account-module",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you want to benefit from Self-Sovereign Identity, you need to create a ",(0,a.kt)("a",{parentName:"p",href:"../decentralized_identifiers/overview"},"Decentralized Identity"),". This identity consists of many parts that have different functions. This page will cover the basics about identity creation and publishing to the Tangle."),(0,a.kt)("h2",{id:"identity-generation-process"},"Identity Generation Process"),(0,a.kt)("p",null,"The generation of an identity starts with a randomly generated ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},"asymmetric key pair"),". You can generate it with the IOTA Identity framework, or you can provide it as a parameter during the creation process. The public key is hashed using the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BLAKE_(hash_function)"},(0,a.kt)("inlineCode",{parentName:"a"},"Blake2b-256")," algorithm"),". This hash becomes the DID, creating a permanent and provable link between the initial keypair and the DID. The public key is then embedded into the initial DID Document and is used for verifying signatures created with the corresponding private key."),(0,a.kt)("h2",{id:"using-the-account-module"},"Using the Account Module"),(0,a.kt)("p",null,"The following example uses the high-level account module of the IOTA Identity framework to create an identity. You should use the account module for most of your use cases, but a lower-level API is also available should you need more flexibility at the cost of more complexity. For more information on APIs please visit the ",(0,a.kt)("a",{parentName:"p",href:"../libraries/rust/api_reference"},"Rust API Reference")," or the ",(0,a.kt)("a",{parentName:"p",href:"../libraries/wasm/api_reference"},"WASM API Reference"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Using Replit")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Select your programming language of choice and press the green play button to execute the example."))),(0,a.kt)(o.Z,{nodeReplitLink:"https://repl.it/@abdulmth/Create-did?lite=true",rustReplitLink:"https://replit.com/@JelleMillenaar1/accountbasic?lite=true",mdxType:"CodeSnippet"}),(0,a.kt)("p",null,"The first step in this example is the creation of an account. The account is a stateful object that manages one or more identities. The account provides an interface to execute high-level operations on identities, such as ",(0,a.kt)("a",{parentName:"p",href:"../decentralized_identifiers/create"},"creating"),", ",(0,a.kt)("a",{parentName:"p",href:"../decentralized_identifiers/update"},"updating"),", and ",(0,a.kt)("a",{parentName:"p",href:"../decentralized_identifiers/secure"},"storing")," them."),(0,a.kt)("p",null,"Next, the identity is created and published to the IOTA Tangle. This operation will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate a private key."),(0,a.kt)("li",{parentName:"ol"},"Store it in the account."),(0,a.kt)("li",{parentName:"ol"},"Generate a DID."),(0,a.kt)("li",{parentName:"ol"},"Generate a DID Document."),(0,a.kt)("li",{parentName:"ol"},"Publish it to the Tangle.")),(0,a.kt)("p",null,"Once the DID Document is uploaded to the Tangle, it becomes immutable, meaning that this version of the identity can never be altered or removed. The only way to update or delete an identity is by publishing a new version, which we will discuss in the next section. This immutability is what makes a Decentralized Identity solution based on Distributed Ledger Technology (DLT) trustworthy. The public keys inside the DID Document can never be changed without having access to the private key, allowing the users to completely control their own identities."),(0,a.kt)("p",null,"The rest of the example shows how to retrieve (resolve) the identity from the Tangle and how it can be deleted."))}m.isMDXComponent=!0},46624:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(86010),r=n(67294);function a(e){var t=e.nodeReplitLink,n=e.rustReplitLink,a=r.useState("node"),o=a[0],l=a[1];return(0,r.useEffect)((function(){var e=localStorage.getItem("lang"),i=e||"node";"node"!==i||t||(i="rust"),"rust"!==i||n||(i="node"),l(i)})),r.createElement("div",null,r.createElement("div",{className:(0,i.Z)("langSelector")},t&&r.createElement("button",{className:(0,i.Z)("button","languageButton","mr-sm",{activeButton:"node"===o,inactiveButton:"node"!==o}),onClick:function(){localStorage.setItem("lang","node"),l("node")}},"Node.js"),n&&r.createElement("button",{className:(0,i.Z)("button","languageButton",{activeButton:"rust"==o,inactiveButton:"rust"!==o}),onClick:function(){localStorage.setItem("lang","rust"),l("rust")}},"Rust")),r.createElement("div",{className:(0,i.Z)("codeSnippetContainer")},"node"===o?r.createElement("iframe",{frameborder:"0",width:"100%",height:"600px",src:t}):r.createElement("iframe",{frameborder:"0",width:"100%",height:"600px",src:n})))}},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);