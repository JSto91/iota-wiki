"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[87011],{23756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={},s="GoShimmer DAGs visualizer",c={unversionedId:"tooling/dags_visualizer",id:"tooling/dags_visualizer",title:"GoShimmer DAGs visualizer",description:"The DAGs visualizer is our all round tool for visualizing DAGs. Be it Tangle, UTXO-DAG or Branch-DAG or their interactions. The DAGs visualizer is our go-to tool for visualization.",source:"@site/external/goshimmer/documentation/docs/tooling/dags_visualizer.md",sourceDirName:"tooling",slug:"/tooling/dags_visualizer",permalink:"/goshimmer/tooling/dags_visualizer",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/tooling/dags_visualizer.md",tags:[],version:"current",frontMatter:{}},d={},u=[{value:"How to run",id:"how-to-run",level:2},{value:"Global Functions",id:"global-functions",level:3},{value:"Set explorer URL",id:"set-explorer-url",level:4},{value:"Search Vertex Within Time Intervals",id:"search-vertex-within-time-intervals",level:4},{value:"Select and center vertex across DAGs",id:"select-and-center-vertex-across-dags",level:4},{value:"How to run in dev mode",id:"how-to-run-in-dev-mode",level:2},{value:"Docker",id:"docker",level:3},{value:"How to pack changes to pkged.go",id:"how-to-pack-changes-to-pkgedgo",level:2}],h={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"goshimmer-dags-visualizer"},"GoShimmer DAGs visualizer"),(0,i.kt)("p",null,"The DAGs visualizer is our all round tool for visualizing DAGs. Be it Tangle, UTXO-DAG or Branch-DAG or their interactions. The DAGs visualizer is our go-to tool for visualization."),(0,i.kt)("h2",{id:"how-to-run"},"How to run"),(0,i.kt)("p",null,"DAGs visualizer is already packed into ",(0,i.kt)("inlineCode",{parentName:"p"},"pkged.go"),".\nTo run it just simply launch a goshimmer node, open browser and go to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8061"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"UTXO-DAG and Branch-DAG will check if there's any added or removed vertex every 10 seconds and rearrange vertices positions."))),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(61264).Z},(0,i.kt)("img",{loading:"lazy",alt:"DAGs visualizer Overview",src:n(69199).Z,title:"DAGs visualizer overview",width:"2131",height:"3393"}))),(0,i.kt)("h3",{id:"global-functions"},"Global Functions"),(0,i.kt)("p",null,"Global functions are used to apply settings across DAGs or interact with them."),(0,i.kt)("h4",{id:"set-explorer-url"},"Set explorer URL"),(0,i.kt)("p",null,"Each node in a graph can be selected to see its contained information, and they are navigated to the dashboard explorer for more details. You can change the url to the desired dashboard explorer, default is ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8081"),"."),(0,i.kt)("h4",{id:"search-vertex-within-time-intervals"},"Search Vertex Within Time Intervals"),(0,i.kt)("p",null,'You can check how Tangle, UTXO and branch DAG look like in a given timeframe.\nPress "search" button, it will show you numbers of messages, transactions and branches found within the given timeframe. If you want to render them in graphs, push "render" button.'),(0,i.kt)("p",null,"The branch DAG shows not just branches in the given time interval (colored in orage) but also the full history (colored in blue) to the master branch."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Drawing a large amount of transactions or branches may slow down the browser."))),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(79484).Z},(0,i.kt)("img",{loading:"lazy",alt:"DAGs visualizer Searching",src:n(74459).Z,title:"DAGs visualizer searching",width:"2131",height:"3393"}))),(0,i.kt)("h4",{id:"select-and-center-vertex-across-dags"},"Select and center vertex across DAGs"),(0,i.kt)("p",null,"You can see a selected message/transaction/branch and its corresponding message/transaction/branch in other DAGs! Here's an example of sync with the selected transaction, you can see the message and branch that contains the transaction are highlighted."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(12340).Z},(0,i.kt)("img",{loading:"lazy",alt:"DAGs visualizer Syncing with TX",src:n(87877).Z,title:"DAGs visualizer sync with TX",width:"2131",height:"3393"}))),(0,i.kt)("p",null,"Another example of sync with the selected branch:\n",(0,i.kt)("a",{target:"_blank",href:n(14385).Z},(0,i.kt)("img",{loading:"lazy",alt:"DAGs visualizer Syncing with branch",src:n(56695).Z,title:"DAGs visualizer sync with branch",width:"2131",height:"3393"}))),(0,i.kt)("h2",{id:"how-to-run-in-dev-mode"},"How to run in dev mode"),(0,i.kt)("p",null,"Dev mode has only been tested on Linux."),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Run the yarn development server in a container and add it to the docker-network."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure to set ",(0,i.kt)("inlineCode",{parentName:"li"},"dagsvisualizer.dev")," to true, to enable GoShimmer to serve assets."),(0,i.kt)("li",{parentName:"ol"},"Make sure to set ",(0,i.kt)("inlineCode",{parentName:"li"},"dagsvisualizer.devBindAddress")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"dagsvisualizer-dev-docker:3000"),"."),(0,i.kt)("li",{parentName:"ol"},"Run Goshimmer docker-network."),(0,i.kt)("li",{parentName:"ol"},"Go to goshimmer root directory and run script ",(0,i.kt)("inlineCode",{parentName:"li"},"scripts/dags_visualizer_dev_docker.sh"),". It will\ninstall all needed npm modules and create a container with a running development server instance."),(0,i.kt)("li",{parentName:"ol"},"Using default port config, you should now be able to access the DAGs visualizer under ",(0,i.kt)("a",{parentName:"li",href:"http://127.0.0.1:8061"},"http://127.0.0.1:8061"))),(0,i.kt)("p",null,"To see the changes, you need to manually reload the page."),(0,i.kt)("h2",{id:"how-to-pack-changes-to-pkgedgo"},"How to pack changes to pkged.go"),(0,i.kt)("p",null,"We are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"pkger")," to wrap all built frontend files into Go files."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/markbates/pkger#installation"},"Install ",(0,i.kt)("inlineCode",{parentName:"a"},"pkger"))," if not already done."),(0,i.kt)("li",{parentName:"ol"},"Build DAGs visualizezr by running ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn build")," within the ",(0,i.kt)("inlineCode",{parentName:"li"},"frontend")," directory."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"pkger"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pkged.go")," under root directory of goShimmer should have been modified."),(0,i.kt)("li",{parentName:"ol"},"Done. Now you can build goShimmer and your DAGs visualizer changes will be included within the binary.")))}p.isMDXComponent=!0},61264:function(e,t,n){t.Z=n.p+"assets/files/dags-visualizer-226144997e84e08a894042414329f6bc.png"},79484:function(e,t,n){t.Z=n.p+"assets/files/searching-b02f776369260a6de1872912f3ec5974.png"},14385:function(e,t,n){t.Z=n.p+"assets/files/sync-with-branch-a5fa661a54433e3fe24dc86966bdafa8.png"},12340:function(e,t,n){t.Z=n.p+"assets/files/sync-with-tx-9333882a6cfb387d4727437ead8867d7.png"},69199:function(e,t,n){t.Z=n.p+"assets/images/dags-visualizer-226144997e84e08a894042414329f6bc.png"},74459:function(e,t,n){t.Z=n.p+"assets/images/searching-b02f776369260a6de1872912f3ec5974.png"},56695:function(e,t,n){t.Z=n.p+"assets/images/sync-with-branch-a5fa661a54433e3fe24dc86966bdafa8.png"},87877:function(e,t,n){t.Z=n.p+"assets/images/sync-with-tx-9333882a6cfb387d4727437ead8867d7.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);