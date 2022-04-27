"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78895],{81261:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={description:"Getting started with the official IOTA Wallet Library Software Python binding.",image:"/img/logo/wallet_light.png",keywords:["Python","install","pip","unpack"]},p="Getting Started with IOTA Wallet Python Binding",s={unversionedId:"libraries/python/getting_started",id:"libraries/python/getting_started",title:"Getting Started with IOTA Wallet Python Binding",description:"Getting started with the official IOTA Wallet Library Software Python binding.",source:"@site/external/wallet.rs/documentation/docs/libraries/python/getting_started.md",sourceDirName:"libraries/python",slug:"/libraries/python/getting_started",permalink:"/wallet.rs/libraries/python/getting_started",editUrl:"https://github.com/iotaledger/wallet.rs/edit/mainnet/external/wallet.rs/documentation/docs/libraries/python/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Wallet Library Software Python binding.",image:"/img/logo/wallet_light.png",keywords:["Python","install","pip","unpack"]},sidebar:"docs",previous:{title:"API Reference",permalink:"/wallet.rs/libraries/nodejs/api_reference"},next:{title:"Examples",permalink:"/wallet.rs/libraries/python/examples"}},c={},u=[{value:"Security",id:"security",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-iota-wallet-python-binding"},"Getting Started with IOTA Wallet Python Binding"),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In a production setup, do not store passwords in the host's environment variables or in the source code. See our ",(0,r.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/backup_security"},"backup and security recommendations")," for production setups."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The easiest way to get python binding up and running is to leverage pre-built python libraries for linux, MacOs or Windows that can be installed to your python environment (3.6+) via ",(0,r.kt)("em",{parentName:"p"},"pip")," . The binding is automagically generated using github ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/actions/workflows/python_binding_publish.yml"},"actions"),"."),(0,r.kt)("p",null,"You can download the latest artifacts for major python version using the  ",(0,r.kt)("a",{parentName:"p",href:"https://nightly.link/iotaledger/wallet.rs/workflows/python_binding_publish/dev"},"nighly.link service"),".  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download zip file for the given os and pyversion. "),(0,r.kt)("li",{parentName:"ol"},"Unpack wheel file ( ",(0,r.kt)("em",{parentName:"li"},".whl")," )."),(0,r.kt)("li",{parentName:"ol"},"Install it via ",(0,r.kt)("em",{parentName:"li"},"pip")," by running the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install <wheel_file>\n")),(0,r.kt)("p",null,"Once it has been properly installed you can double-check the installation using ",(0,r.kt)("em",{parentName:"p"},"pip")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip list\n")),(0,r.kt)("p",null,"The pip list should now include the ",(0,r.kt)("em",{parentName:"p"},"iota-wallet-python-binding"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"Package                    Version\n-------------------------- -------\niota-wallet-python-binding 0.1.0\n")),(0,r.kt)("p",null,"Once you python environment has installed the ",(0,r.kt)("inlineCode",{parentName:"p"},"iota-wallet-python-binding")," you can start developing using the python binding."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("em",{parentName:"p"},"iota_wallet")," you will need to add an import statement:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import iota_wallet\n")),(0,r.kt)("p",null,"If you'd like more information on the ",(0,r.kt)("em",{parentName:"p"},"iota_wallet")," , you can print the documentation using the following snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(iota_wallet.__doc__)\n")))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);