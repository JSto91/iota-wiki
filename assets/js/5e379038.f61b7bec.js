"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[61786],{60227:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return h}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),c=n(76018),i=n(71871),u=["components"],l={keywords:["Smart Contracts","deposit","transfer","chain","Rust","Solo"],description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",image:"/img/logo/WASP_logo_dark.png"},s="How to Deposit to a Chain",p={unversionedId:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",id:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",title:"How to Deposit to a Chain",description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-deposit-to-a-chain",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/accounts/how-to-deposit-to-a-chain",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","deposit","transfer","chain","Rust","Solo"],description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"How Accounts Work",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/accounts/how-accounts-work"},next:{title:"How to Withdraw From a Chain",permalink:"/iota-wiki/smart-contracts/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"}},d={},m=[],f={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-deposit-to-a-chain"},"How to Deposit to a Chain"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit")," entrypoint credits the transferred IOTAS into your on-chain account."),(0,a.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"solo",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from wallet into chain\nreq := solo.NewCallParams(accounts.Contract.Name, accounts.FuncDeposit.Name)\n_, err := chain.PostRequestSync(req.WithIotas(N), wallet)\nrequire.NoError(t, err)\n"))),(0,a.kt)(i.Z,{value:"soloctx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from wallet into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx.Sign(wallet))\nd.Func.TransferIotas(N).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,a.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// deposits N iotas from current SC into chain *chainID*\nlet d = coreaccounts::ScFuncs::deposit(ctx);\nd.func.transfer_iotas(N).post_to_chain(chainID);\n"))),(0,a.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from current SC into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx)\nd.Func.TransferIotas(N).PostToChain(chainID)\n")))))}h.isMDXComponent=!0},71871:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(83117),o=n(67294),a=n(5730),c=n(10109),i=n(86010),u="tabItem_LplD";function l(e){var t,n,a,l=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,c.UB)(),w=y.tabGroupChoices,k=y.setTabGroupChoices,T=(0,o.useState)(g),N=T[0],O=T[1],x=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=w[m];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&O(E)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==N&&(S(t),O(r),null!=m&&k(m,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var o=x.indexOf(e.currentTarget)-1;n=x[o]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:D,onClick:D},a,{className:(0,i.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function s(e){var t=(0,a.Z)();return o.createElement(l,(0,r.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);