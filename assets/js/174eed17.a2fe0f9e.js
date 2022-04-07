"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[89821],{58838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={description:"Getting started with the official IOTA Client Library Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","cargo","system environment variables"]},l="Getting Started with Rust",u={unversionedId:"libraries/rust/getting_started",id:"libraries/rust/getting_started",title:"Getting Started with Rust",description:"Getting started with the official IOTA Client Library Rust library.",source:"@site/external/iota.rs/documentation/docs/libraries/rust/getting_started.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/getting_started",permalink:"/iota-wiki/iota.rs/libraries/rust/getting_started",editUrl:"https://github.com/iotaledger/iota.rs/edit/mainnet/external/iota.rs/documentation/docs/libraries/rust/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","cargo","system environment variables"]},sidebar:"docs",previous:{title:"IOTA Client libraries",permalink:"/iota-wiki/iota.rs/libraries/overview"},next:{title:"Examples",permalink:"/iota-wiki/iota.rs/libraries/rust/examples"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Using the library",id:"using-the-library",level:2},{value:"Initialisation",id:"initialisation",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-rust"},"Getting Started with Rust"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To use the library, we recommend you update Rust to latest stable version ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},(0,a.kt)("inlineCode",{parentName:"a"},"$ rustup update stable")),". Nightly should be fine but some changes might not be compatible."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"no_std")," is not currently supported, but we are working on it in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/bee"},"bee"),", and will provide it as feature once the new implementation is ready."),(0,a.kt)("h2",{id:"using-the-library"},"Using the library"),(0,a.kt)("p",null,"Using the library is easy, just add it as dependency in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[dependencies]\niota-client = { git = "https://github.com/iotaledger/iota.rs", branch = "dev" }\n# asynchronous runtime\ntokio = { version = "1.12.0", features = ["full"] }\n')),(0,a.kt)("p",null,"And then you can use the library in your code with ",(0,a.kt)("inlineCode",{parentName:"p"},"use iota_client;"),"."),(0,a.kt)("h3",{id:"initialisation"},"Initialisation"),(0,a.kt)("p",null,"This example fetches node information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use iota_client::Client;\n\n#[tokio::main]\nasync fn main() {\n    let iota = Client::builder() // Crate a client instance builder\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")\n        .unwrap()\n        .finish()\n        .await\n        .unwrap();\n\n    let info = iota.get_info().await.unwrap();\n    println!("Nodeinfo: {:?}", info);\n}\n')))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);