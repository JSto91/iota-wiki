"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[64068],{17830:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={description:"The web API interface allows access to functionality of the node software via exposed HTTP endpoints.",image:"/img/logo/goshimmer_light.png",keywords:["web API","POST","GET","node software","http endpoint","port","handler"]},s="WebAPI - clientLib",p={unversionedId:"apis/webAPI",id:"apis/webAPI",title:"WebAPI - clientLib",description:"The web API interface allows access to functionality of the node software via exposed HTTP endpoints.",source:"@site/external/goshimmer/documentation/docs/apis/webAPI.md",sourceDirName:"apis",slug:"/apis/webAPI",permalink:"/goshimmer/apis/webAPI",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/apis/webAPI.md",tags:[],version:"current",frontMatter:{description:"The web API interface allows access to functionality of the node software via exposed HTTP endpoints.",image:"/img/logo/goshimmer_light.png",keywords:["web API","POST","GET","node software","http endpoint","port","handler"]},sidebar:"docs",previous:{title:"Client Lib: Interaction With Layers",permalink:"/goshimmer/apis/client_lib"},next:{title:"Info API Methods",permalink:"/goshimmer/apis/info"}},c={},d=[{value:"How to Use the API",id:"how-to-use-the-api",level:2},{value:"GET and POST",id:"get-and-post",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webapi---clientlib"},"WebAPI - clientLib"),(0,o.kt)("p",null,"The web API interface allows access to functionality of the node software via exposed HTTP endpoints."),(0,o.kt)("h2",{id:"how-to-use-the-api"},"How to Use the API"),(0,o.kt)("p",null,"The default port to access the web API is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"8080:8080/tcp")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),", where the first port number is the internal port number within the node software, and the second for the access from an http port. An example where these two would be set to different values, or the external port is not utilized, can be found in the docker-network tool (see also the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file in the docker-network tool folder)."),(0,o.kt)("p",null,"The server instance of the web API is contacted via ",(0,o.kt)("inlineCode",{parentName:"p"},"webapi.Server()"),". Next we need to register a route with a matching handler."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"webapi.Server().ROUTE(path string, h HandlerFunc)\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"ROUTE")," will be replaced later in this documentation by ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerFunc")," defines a function to serve HTTP requests that gives access to the Context"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func HandlerFunc(c Context) error\n")),(0,o.kt)("p",null,"We can then use the Context to send a JSON response to the node: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"JSON(statuscode int, i interface{}) error\n")),(0,o.kt)("p",null,"An implementation example is shown later for the POST method."),(0,o.kt)("h2",{id:"get-and-post"},"GET and POST"),(0,o.kt)("p",null,"Two methods are currently used. First, with ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," we register a new GET route for a handler function. The handler is accessed via the address ",(0,o.kt)("inlineCode",{parentName:"p"},"path"),". The handler for a GET method can set the node to perform certain actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'webapi.Server().GET("path", HandlerFunc)\n')),(0,o.kt)("p",null,"A command can be sent to the node software to the API, e.g. via command prompt: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:8080/path?command"\n')),(0,o.kt)("p",null,"$$ . $$"),(0,o.kt)("p",null,"Second, with ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," we register a new POST route for a handler function. The handler can receive a JSON body input and send specific messages to the tangle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'webapi.Server().POST("path", HandlerFunc)\n')),(0,o.kt)("p",null,"For example, the following Handler ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcastData")," sends a data message to the tangle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func broadcastData(c echo.Context) error {\n    var request Request\n    if err := c.Bind(&request); err != nil {\n        log.Info(err.Error())\n        return c.JSON(http.StatusBadRequest, Response{Error: err.Error()})\n    }\n\n    msg, err := messagelayer.IssuePayload(\n        payload.NewGenericDataPayload(request.Data), messagelayer.Tangle())\n    if err != nil {\n        return c.JSON(http.StatusBadRequest, Response{Error: err.Error()})\n    }\n    return c.JSON(http.StatusOK, Response{ID: msg.ID().String()})\n}\n")),(0,o.kt)("p",null,"As an example the JSON body   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data":"HelloWorld"\n}\n')),(0,o.kt)("p",null,"can be sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/data"),', which will issue a data message containing "HelloWor" (note that in this  example the data input is size limited.)'))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);