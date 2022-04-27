"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[58532],{72124:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),l=t(76018),o=t(71871),s=["components"],u={image:"/img/logo/integration_services.png",description:"The Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail).",keywords:["integration services sdk","sdk","decentralized identity","yarn","npm"]},c="Introduction",d={unversionedId:"examples/introduction",id:"examples/introduction",title:"Introduction",description:"The Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail).",source:"@site/external/integration-services/documentation/docs/examples/introduction.mdx",sourceDirName:"examples",slug:"/examples/introduction",permalink:"/integration-services/examples/introduction",editUrl:"https://github.com/iotaledger/integration-services/edit/develop/external/integration-services/documentation/docs/examples/introduction.mdx",tags:[],version:"current",frontMatter:{image:"/img/logo/integration_services.png",description:"The Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail).",keywords:["integration services sdk","sdk","decentralized identity","yarn","npm"]},sidebar:"docs",previous:{title:"IOTA Streams",permalink:"/integration-services/basics/streams"},next:{title:"How To Run Examples",permalink:"/integration-services/examples/how-to-run-examples"}},p={},m=[{value:"Install",id:"install",level:2},{value:"Clients",id:"clients",level:2},{value:"IdentityClient",id:"identityclient",level:3},{value:"ChannelClient",id:"channelclient",level:3},{value:"Authorization",id:"authorization",level:2}],h={toc:m};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The following sections  will guide you in how to use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/iota-is-sdk"},"Integration Services SDK"),".\nThe Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail)."),(0,r.kt)("p",null,"You should have a basic understanding of ",(0,r.kt)("a",{parentName:"p",href:"../basics/identity"},"decentralized identities"),"\nto get the most out of the following examples."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"You can install the Integration Services SDK using ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/"},"npm")," or ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn"),"."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install iota-is-sdk\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add iota-is-sdk\n")))),(0,r.kt)("h2",{id:"clients"},"Clients"),(0,r.kt)("p",null,"The Integration Services SDK has two different clients you can use:"),(0,r.kt)("h3",{id:"identityclient"},"IdentityClient"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityClient")," to manage decentralized identities. This includes, but is not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-identity-and-credentials"},"Creating an identity and verifiable credentials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"update-users"},"Updating users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"delete-users"},"Deleting users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"trusted-authorities"},"Adding Trusted Authorities"))),(0,r.kt)("h3",{id:"channelclient"},"ChannelClient"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChannelClient")," to access Audit Trail features. These include, but are not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-channel"},"Creating a channel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"authorize-to-channel#subscribe-to-a-channel"},"Subscribing or approving access to a channel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-channel#write-on-a-channel"},"Reading and Writing on a channel"))),(0,r.kt)("p",null,"You can import and configure these clients using a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientConfig")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\nimport { ClientConfig, IdentityClient, ChannelClient } from 'iota-is-sdk';\n\nconst config: ClientConfig = {\n    apiKey: process.env.API_KEY,        // Deployed Integration Services API KEY\n    baseUrl: process.env.API_URL,       // URL of the Integration Services API \n    apiVersion: ApiVersion.v01\n};\n\n...\nconst identityClient = new IdentityClient(config);\n...\n\n...\nconst channelClient = new ChannelClient(config);\n...\n\n\n")),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"In order to work with Integration Services API, you will need to be authenticated with a decentralized identity."),(0,r.kt)("p",null,"The Integration Services use a JWT token based authorization mechanism which behaves in the following manner:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The client gets a nonce from the API and returns it signed by the identity's private key."),(0,r.kt)("li",{parentName:"ol"},"The API returns a JWT token to authorize any subsequent requests.")),(0,r.kt)("p",null,"You can get an identity using the following script (no auth required):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { IdentityJson } from 'iota-is-sdk';\n...\n\nconst identity = await identityClient.create('User') as IdentityJson;\n")),(0,r.kt)("p",null,"The generated identity is stored on the IOTA Tangle and follows ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"did-core specifications"),".\nIt is a JSON file like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "doc": {\n    "id": "did:iota:3q4mW831dfbbSP2j5Lf4FPTKXFjEv2ykyPjuVrd1FHss",\n    "authentication": [\n      {\n        "id": "did:iota:3q4mW831dfbbSP2j5Lf4FPTKXFjEv2ykyPjuVrd1FHss#key",\n        "controller": "did:iota:3q4mW831dfbbSP2j5Lf4FPTKXFjEv2ykyPjuVrd1FHss",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyBase58": "5LT5yjaykKeTqYuqmCELE7xUyN9z4WEN5CKxdWmrU5g5"\n      }\n    ],\n    "created": "2021-12-20T10:43:00Z",\n    "updated": "2021-12-20T10:43:00Z",\n    "proof": {\n      "type": "JcsEd25519Signature2020",\n      "verificationMethod": "#key",\n      "signatureValue": "ktusPiZd5whHTHsJJwSiSbfhmAGypdkTgLFQt4USvVg91WJLYNhEzshcBCvr9Cr42heyB249TvZHVrdGVAYds6s"\n    }\n  },\n  "key": {\n    "type": "ed25519",\n    "public": "5LT5yjaykKeTqYuqmCELE7xUyN9z4WEN5CKxdWmrU5g5",\n    "secret": "9Arv8HTAu3JjLvBhst6deMaULvBc3e7w2WiseEL4BESC",\n    "encoding": "base58"\n  }\n}\n')),(0,r.kt)("p",null,"If you have a JSON Identity, you can authorize your client with the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const identity = // ... did-core json object ...\n\nawait identityClient.authenticate(identity.doc.id, identity.key.secret);\n")))}f.isMDXComponent=!0},71871:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},76018:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(83117),i=t(67294),r=t(5730),l=t(37559),o=t(86010),s="tabItem_LplD";function u(e){var n,t,r,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,h=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),b=k.tabGroupChoices,T=k.setTabGroupChoices,w=(0,i.useState)(g),N=w[0],C=w[1],I=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=b[m];null!=j&&j!==N&&v.some((function(e){return e.value===j}))&&C(j)}var x=function(e){var n=e.currentTarget,t=I.indexOf(n),a=v[t].value;a!==N&&(E(n),C(a),null!=m&&T(m,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;t=I[a]||I[0];break;case"ArrowLeft":var i=I.indexOf(e.currentTarget)-1;t=I[i]||I[I.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var n=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return I.push(e)},onKeyDown:S,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),u?(0,i.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function c(e){var n=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);