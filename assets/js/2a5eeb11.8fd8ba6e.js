"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91640],{26123:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return c}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=["components"],s={},l="Application Architecture",h={unversionedId:"tangle-data-storage/architecture",id:"tangle-data-storage/architecture",title:"Application Architecture",description:"The Tangle data storage application consists of two parts: A graphical user interface (GUI) written in React and a back-end API written in NodeJS.",source:"@site/external/blueprints/tangle-data-storage/architecture.md",sourceDirName:"tangle-data-storage",slug:"/tangle-data-storage/architecture",permalink:"/blueprints/tangle-data-storage/architecture",editUrl:"https://github.com/iotaledger/blueprints/edit/main/external/blueprints/tangle-data-storage/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Tangle data storage",permalink:"/blueprints/tangle-data-storage/overview"},next:{title:"Deploy and Test the Tangle Data Storage Demo",permalink:"/blueprints/tangle-data-storage/deployment-and-testing"}},d={},c=[{value:"Building Blocks",id:"building-blocks",level:2},{value:"storeFile()",id:"storefile",level:2},{value:"Uploading File Content to the IPFS",id:"uploading-file-content-to-the-ipfs",level:3},{value:"Attaching the File Data to the Tangle",id:"attaching-the-file-data-to-the-tangle",level:3},{value:"retrieveFile()",id:"retrievefile",level:2},{value:"Getting the File Data From the Tangle",id:"getting-the-file-data-from-the-tangle",level:3},{value:"Getting the file data from the IPFS",id:"getting-the-file-data-from-the-ipfs",level:3},{value:"Comparing the Data",id:"comparing-the-data",level:3},{value:"Customization Considerations",id:"customization-considerations",level:2},{value:"Data Security",id:"data-security",level:3},{value:"Alternative Data Storage Solutions",id:"alternative-data-storage-solutions",level:3}],u={toc:c};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-architecture"},"Application Architecture"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Tangle data storage application consists of two parts: A graphical user interface (GUI) written in React and a back-end API written in NodeJS.")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),":Disclaimer")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Running an open source project, like any human endeavor, involves uncertainty and trade-offs. We hope the architecture described below helps you to deploy similar systems, but it may include mistakes, and can\u2019t address every situation. If you have any questions about your project, we encourage you to do your own research, seek out experts, and discuss them with the IOTA community."))),(0,r.kt)("p",null,"This blueprint uses the following architecture whereby clients upload files to the API server, which sends the files to an InterPlanetary File System (IPFS) node and attaches the IPFS hashes to messages in the Tangle."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Storage PoC - IOTA/IPFS - Architecture",src:a(53053).Z,width:"1024",height:"558"})),(0,r.kt)("h2",{id:"building-blocks"},"Building Blocks"),(0,r.kt)("p",null,"The API server exposes two methods to the client:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storeFile()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retrieveFile()"))),(0,r.kt)("h2",{id:"storefile"},"storeFile()"),(0,r.kt)("p",null,"To store a file using the API, the client does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the file to upload"),(0,r.kt)("li",{parentName:"ul"},"Generate SHA256 or SHA3 hash of the file content"),(0,r.kt)("li",{parentName:"ul"},"Capture additional file metadata")),(0,r.kt)("p",null,"Behind the scenes, the API does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload the file content to IPFS, which returns the IPFS hash"),(0,r.kt)("li",{parentName:"ul"},"Attach the file metadata, SHA256/SHA3 hash, and IPFS hash to the Tangle in a message, and return the message id to the client")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Storage PoC - IOTA/IPFS - Store File",src:a(65338).Z,width:"2622",height:"1429"})),(0,r.kt)("h3",{id:"uploading-file-content-to-the-ipfs"},"Uploading File Content to the IPFS"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"storeFile()")," method takes a JSON object in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"IPFSStoreRequest {\n    /**\n     * The name of the file to store.\n     */\n    name: string;\n\n    /**\n     * The description of the file to store.\n     */\n    description: string;\n\n    /**\n     * The size of the file to store.\n     */\n    size: number;\n\n    /**\n     * The modified date of the file to store.\n     */\n    modified: string;\n\n    /**\n     * The hash algorithm of the file to store.\n     */\n    algorithm: string;\n\n    /**\n     * The hash of the file to store.\n     */\n    hash: string;\n\n    /**\n     * The data of the file to store in base64.\n     */\n    data: string;\n}\n")),(0,r.kt)("p",null,"On receipt of the JSON object, the file data is uploaded to the IPFS node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import ipfsClient from "ipfs-http-client";\n\nconst buffer = Buffer.from(request.data, "base64");\nconst ipfs = ipfsClient(config.ipfs);\nconst addResponse = await ipfs.add(buffer);\n')),(0,r.kt)("h3",{id:"attaching-the-file-data-to-the-tangle"},"Attaching the File Data to the Tangle"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"add()")," method returns the IPFS hash, which is combined with the other data in the JSON object before being attached to the Tangle in a message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a new client instance\nconst client = new ClientBuilder().node(config.node.provider).build();\n\n// Get available addresses from a generated random seed\nconst addresses = client.getAddresses(currentState.seed);\n\n// Get receiving address\nconst address = await addresses\n   .accountIndex(0)\n   .range(currentState.addressIndex, currentState.addressIndex + 1)\n   .get();\n\nconst hashedAddress = Blake2b.sum256(Converter.utf8ToBytes(address[0].toString()));\n\n// Define the payload to add to the message\nconst tanglePayload = {\n   name: request.name,\n   description: request.description,\n   size: request.size,\n   modified: request.modified,\n   algorithm: request.algorithm,\n   hash: request.hash,\n   ipfs: ipfsHash\n};\n\n// Send the message to the Tangle\nconst message = await client\n   .message()\n   .index(Converter.bytesToHex(hashedAddress))\n   .seed(currentState.seed)\n   .accountIndex(0)\n   .data(new TextEncoder().encode(JSON.stringify(tanglePayload)))\n   .submit();\n")),(0,r.kt)("p",null,"The Object returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," contains the message id and the ipfs hash, which is returned to the client to use for reading the data in the Tangle."),(0,r.kt)("h2",{id:"retrievefile"},"retrieveFile()"),(0,r.kt)("p",null,"To retrieve a file and validate its contents, the client does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the file data from the Tangle, using the message ID"),(0,r.kt)("li",{parentName:"ul"},"Get the file contents from IPFS using the returned IPFS hash"),(0,r.kt)("li",{parentName:"ul"},"Perform a SHA256/SHA3 hash on the file data, and compare the calculated SHA256/SHA3 with the one returned from the Tangle")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Storage PoC - IOTA/IPFS - Retrieve File",src:a(38944).Z,width:"2622",height:"1429"})),(0,r.kt)("h3",{id:"getting-the-file-data-from-the-tangle"},"Getting the File Data From the Tangle"),(0,r.kt)("p",null,"To get the file data from the Tangle, we request the message from the IOTA node, using the message ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a new instance of MessageCacheService\nconst messageCacheService = new MessageCacheService(config.dynamoDbConnection, config.node.provider);\n\n// Get the message with the given id\nconst message = await messageCacheService.get(request.messageId);\n\n// Convert message object to payload\nconst payload = await IotaC2Helper.messageToPayload(message);\n")),(0,r.kt)("h3",{id:"getting-the-file-data-from-the-ipfs"},"Getting the file data from the IPFS"),(0,r.kt)("p",null,"The message ID is used to request the file from the IPFS node, using a public IPFS gateway such as ",(0,r.kt)("a",{parentName:"p",href:"https://cloudflare-ipfs.com/ipfs/"},"Cloudflare"),"."),(0,r.kt)("h3",{id:"comparing-the-data"},"Comparing the Data"),(0,r.kt)("p",null,"Assuming the file was returned from the IPFS into a buffer, the file is hashed using a SHA256/SHA3 algorithm and the resulting hash is compared to the one from the message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let hex;\n\nif (request.algorithm === "sha256") {\n    const hashAlgo = crypto.createHash(request.algorithm);\n    hashAlgo.update(buffer);\n    hex = hashAlgo.digest("hex");\n} else if (request.algorithm === "sha3") {\n    const hashAlgo = new SHA3(256);\n    hashAlgo.update(buffer);\n    hex = hashAlgo.digest("hex");\n}\n\nif (hex !== request.hash) {\n   throw new Error(\n       `The hash for the file is incorrect \'${request.hash}\' was sent but it has been calculated as \'${hex}\'`);\n}\n')),(0,r.kt)("h2",{id:"customization-considerations"},"Customization Considerations"),(0,r.kt)("p",null,"If you want to use this blueprint in your own system, you should consider the following."),(0,r.kt)("h3",{id:"data-security"},"Data Security"),(0,r.kt)("p",null,"Because the IPFS is a distributed web, anyone who has the IPFS hash can download and read the contents of the file. "),(0,r.kt)("p",null,"To prevent unauthorized entities from reading the data, you could encrypt it before uploading it to the IPFS node."),(0,r.kt)("h3",{id:"alternative-data-storage-solutions"},"Alternative Data Storage Solutions"),(0,r.kt)("p",null,"In this application, data is uploaded to an IPFS node, however the same principles apply if you were to upload to an alternative data storage solution."),(0,r.kt)("p",null,"To use alternative storage solutions such as Amazon S3 or Azure Storage, you just need to upload the data to it with a unique hash (for example the SHA256/SHA3 hash of the file)."))}p.isMDXComponent=!0},53053:function(e,t,a){t.Z=a.p+"assets/images/data-storage-ipfs-470f0aec2a4de26cee965290669f0aa6.png"},38944:function(e,t,a){t.Z=a.p+"assets/images/data-storage-retrieve-0989d29b51ef1df082e6607b610d286f.png"},65338:function(e,t,a){t.Z=a.p+"assets/images/data-storage-store-d00b86b0529a12ac3bf9a387b3d9a491.png"},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=h(a),p=i,g=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var h=2;h<r;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);