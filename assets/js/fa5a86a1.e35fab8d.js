"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20675],{59934:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return m},default:function(){return h}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={},p="Deploy and Test the Tangle Data Storage Demo",s={unversionedId:"tangle-data-storage/deployment-and-testing",id:"tangle-data-storage/deployment-and-testing",title:"Deploy and Test the Tangle Data Storage Demo",description:"To start storing data in the IPFS node and the Tangle, deploy the application and use our graphical user interface to upload file data, retrieve file data, and compare hashes to verify the contents.",source:"@site/external/blueprints/tangle-data-storage/deployment-and-testing.md",sourceDirName:"tangle-data-storage",slug:"/tangle-data-storage/deployment-and-testing",permalink:"/blueprints/tangle-data-storage/deployment-and-testing",editUrl:"https://github.com/iotaledger/blueprints/edit/main/external/blueprints/tangle-data-storage/deployment-and-testing.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Application Architecture",permalink:"/blueprints/tangle-data-storage/architecture"},next:{title:"Track and Trace",permalink:"/blueprints/track-and-trace/overview"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy the Tangle Data Storage App",id:"deploy-the-tangle-data-storage-app",level:2},{value:"Test the Tangle Data Storage App",id:"test-the-tangle-data-storage-app",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:m};function h(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-and-test-the-tangle-data-storage-demo"},"Deploy and Test the Tangle Data Storage Demo"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To start storing data in the IPFS node and the Tangle, deploy the application and use our graphical user interface to upload file data, retrieve file data, and compare hashes to verify the contents.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To test and deploy this application, you need the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node.js installed on your device"),(0,i.kt)("li",{parentName:"ul"},"A database on ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/dynamodb/"},"Amazon DynamoDB")),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"https://docs.ipfs.io/introduction/overview/"},"IPFS node"))),(0,i.kt)("p",null,"To edit this application for your own needs, you need knowledge of JavaScript, Node.js, and React.js."),(0,i.kt)("h2",{id:"deploy-the-tangle-data-storage-app"},"Deploy the Tangle Data Storage App"),(0,i.kt)("p",null,"To deploy this application on your local network, complete the following instructions. These deployment instructions are also hosted on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/poc-ipfs/blob/master/README.md"},"GitHub"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the GitHub repository"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/poc-ipfs.git\ncd poc-ipfs\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change into the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," directory and install the dependencies"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd api\nnpm i\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/data/config.template.json")," file to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/data")," directory and rename it to ",(0,i.kt)("inlineCode",{parentName:"p"},"config.local.json"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.local.json")," file and configure the API server"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Configuration option")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Notes")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"node")," (required)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The IOTA network settings"),(0,i.kt)("td",{parentName:"tr",align:"left"},"When choosing a node, consider the IOTA network that you want to use")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ipfs")," (required)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set the ",(0,i.kt)("inlineCode",{parentName:"td"},"provider")," field to the URL of your IPFS node. If your IPFS node requires an authentication token, set this in the ",(0,i.kt)("inlineCode",{parentName:"td"},"token")," field."),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dynamoDbConnection")," (required)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set these fields to the settings for your DynamoDB instance"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This database is needed to keep track of transaction data so that it is never lost in the Tangle after a snapshot")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"allowedDomains")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set this field to the domains that may access the API."),(0,i.kt)("td",{parentName:"tr",align:"left"}))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," directory, start the API server in development mode"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start-dev\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change into the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," directory and install the dependencies"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../client\nnpm i\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rename the ",(0,i.kt)("inlineCode",{parentName:"p"},"public/data/config.template.json")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},"config.local.json"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.local.json")," file and configure the client application"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Configuration option")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Notes")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"apiEndpoint")," (required)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set this field to the URL of the API server that you just started"),(0,i.kt)("td",{parentName:"tr",align:"left"},"By default, the API listens on the following URL: ",(0,i.kt)("inlineCode",{parentName:"td"},"http:localhost:4000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ipfsGateway")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set this field to the IPFS gateway that you want to use to get files from the IPFS network"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The default gateway is ",(0,i.kt)("inlineCode",{parentName:"td"},"https://ipfs.io/ipfs/:hash"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tangleExplorer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set these fields to the URL of the Tangle explorer that you want to use to search for messages on the front end"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The default Tangle explorer is ",(0,i.kt)("inlineCode",{parentName:"td"},"https://explorer.iota.org"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"googleAnalyticsId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you have Google Analytics set up for your client, set this field to your Google Analytics ID"),(0,i.kt)("td",{parentName:"tr",align:"left"}))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the client application"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")))),(0,i.kt)("p",null,"When the client connects to the API, the following page will be opened in your default web browser:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Upload File for IOTA IPFS Data Storage PoC",src:a(10686).Z,width:"2051",height:"1353"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),":")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The file size limitation is only for the purposes of this blueprint. You can edit this blueprint to allow any file size."))),(0,i.kt)("p",null,"This page is the front end to the application, which you can use to test it."),(0,i.kt)("h2",{id:"test-the-tangle-data-storage-app"},"Test the Tangle Data Storage App"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a file, and see that the other fields are automatically populated with metadata"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"Upload File for IOTA IPFS Data Storage PoC - Populated",src:a(67909).Z,width:"1108",height:"659"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Upload")," to store the metadata on the IPFS node and the Tangle. If everything went well, you should see a confirmation message."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"Uploaded File for IOTA IPFS Data Storage PoC",src:a(40738).Z,width:"1109",height:"546"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To validate a file, go to the Retrieve File page."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"Retrieve File for IOTA IPFS Data Storage PoC",src:a(3994).Z,width:"1108",height:"314"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a message ID and click ",(0,i.kt)("strong",{parentName:"p"},"RETRIEVE"),". The message ID will be passed to the API, which will get the IPFS hash from the message's ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexationPayload")," field, which is used to download the file and validate its SHA256 hash against the one stored in the message."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"Retrieve File for IOTA IPFS Data Storage PoC",src:a(97440).Z,width:"1109",height:"769"})))),(0,i.kt)("p",null,"This completes the full lifecycle for storing, retrieving, and validating a file. The file metadata, SHA256 hash and IPFS hash that are stored in a transaction in the Tangle are immutable. If the file contents that you retrieve from the IPFS node don't match the ones in the Tangle, then the contents of that file can no longer be trusted."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/node_software"},"Run your own node")," and configure the application to connect to it."))}h.isMDXComponent=!0},40738:function(e,t,a){t.Z=a.p+"assets/images/data-storage-upload-finished-bea54994ea96e2cfaa5e2ae7cba5de48.png"},3994:function(e,t,a){t.Z=a.p+"assets/images/data-storage-upload-retrieve-980a545f3173e40ae4ea4258fbb7196c.png"},97440:function(e,t,a){t.Z=a.p+"assets/images/data-storage-upload-validated-b7525fc7c1689e2a049e06629657c410.png"},10686:function(e,t,a){t.Z=a.p+"assets/images/data-storage-upload-a0c17866af436d2236e89c9b543253f2.png"},67909:function(e,t,a){t.Z=a.p+"assets/images/data-storage-upload2-ea243ed953cf44de9ee26c81b99a6f11.png"},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,g=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);