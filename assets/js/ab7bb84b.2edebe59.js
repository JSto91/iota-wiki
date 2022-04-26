"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[71992],{17137:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return p},toc:function(){return f},default:function(){return h}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=t(76018),c=t(71871),u=["components"],s={keywords:["functions","thunk","insert operations"],description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the other function to adapt it to changing requirements",image:"/img/logo/WASP_logo_dark.png"},l="Thunk Functions",d={unversionedId:"guide/schema/thunks",id:"guide/schema/thunks",title:"Thunk Functions",description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the other function to adapt it to changing requirements",source:"@site/external/wasp/documentation/docs/guide/schema/thunks.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/thunks",permalink:"/iota-wiki/smart-contracts/guide/schema/thunks",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/thunks.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","thunk","insert operations"],description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the other function to adapt it to changing requirements",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Results",permalink:"/iota-wiki/smart-contracts/guide/schema/results"},next:{title:"View-Only Functions",permalink:"/iota-wiki/smart-contracts/guide/schema/views"}},p={},f=[],m={toc:f};function h(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"thunk-functions"},"Thunk Functions"),(0,i.kt)("p",null,"In computer programming, a thunk is a function used to inject a calculation into another\nfunction. Thunks are used to insert operations at the beginning or end of the other\nfunction to adapt it to changing requirements. If you remember from\nthe ",(0,i.kt)("a",{parentName:"p",href:"/iota-wiki/smart-contracts/guide/wasm_vm/context"},"function call context")," section, the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_load")," function and\nskeleton function signatures looked like this:"),(0,i.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func OnLoad() {\n    exports := wasmlib.NewScExports()\n    exports.AddFunc("divide", funcDivide)\n    exports.AddFunc("init", funcInit)\n    exports.AddFunc("member", funcMember)\n    exports.AddFunc("setOwner", funcSetOwner)\n    exports.AddView("getFactor", viewGetFactor)\n    exports.AddView("getOwner", viewGetOwner)\n}\n\nfunc funcDivide(ctx wasmlib.ScFuncContext) {}\nfunc funcInit(ctx wasmlib.ScFuncContext) {}\nfunc funcMember(ctx wasmlib.ScFuncContext) {}\nfunc funcSetOwner(ctx wasmlib.ScFuncContext) {}\nfunc viewGetFactor(ctx wasmlib.ScViewContext) {}\nfunc viewGetOwner(ctx wasmlib.ScViewContext) {}\n'))),(0,i.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn on_load() {\n    let exports = ScExports::new();\n    exports.add_func("divide", func_divide);\n    exports.add_func("init", func_init);\n    exports.add_func("member", func_member);\n    exports.add_func("setOwner", func_set_owner);\n    exports.add_view("getFactor", view_get_factor);\n    exports.add_view("getOwner", view_get_owner);\n}\n\nfn func_divide(ctx: &ScFuncContext) {}\nfn func_init(ctx: &ScFuncContext) {}\nfn func_member(ctx: &ScFuncContext) {}\nfn func_set_owner(ctx: &ScFuncContext) {}\nfn view_get_factor(ctx: &ScViewContext) {}\nfn view_get_owner(ctx: &ScViewContext) {}\n'))),(0,i.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'export function on_load() {\n    let exports = new ScExports();\n    exports.addFunc("divide", funcDivide);\n    exports.addFunc("init", funcInit);\n    exports.addFunc("member", funcMember);\n    exports.addFunc("setOwner", funcSetOwner);\n    exports.addView("getFactor", viewGetFactor);\n    exports.addView("getOwner", viewGetOwner);\n}\n\nfunction funcDivide(ctx: ScFuncContext) {}\nfunction funcInit(ctx: ScFuncContext) {}\nfunction funcMember(ctx: ScFuncContext) {}\nfunction funcSetOwner(ctx: ScFuncContext) {}\nfunction viewGetFactor(ctx: ScViewContext) {}\nfunction viewGetOwner(ctx: ScViewContext) {}\n')))),(0,i.kt)("p",null,"Now that the schema tool introduces a bunch of automatically generated features, that is\nno longer sufficient. Luckily, the schema tool also generates thunks to inject these\nfeatures, before calling the function implementations that are maintained by the user.\nHere is the new ",(0,i.kt)("inlineCode",{parentName:"p"},"on_load")," function for the ",(0,i.kt)("inlineCode",{parentName:"p"},"dividend")," contract:"),(0,i.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func OnLoad() {\n    exports := wasmlib.NewScExports()\n    exports.AddFunc(FuncDivide, funcDivideThunk)\n    exports.AddFunc(FuncInit, funcInitThunk)\n    exports.AddFunc(FuncMember, funcMemberThunk)\n    exports.AddFunc(FuncSetOwner, funcSetOwnerThunk)\n    exports.AddView(ViewGetFactor, viewGetFactorThunk)\n    exports.AddView(ViewGetOwner, viewGetOwnerThunk)\n\n    for i, key := range keyMap {\n        idxMap[i] = key.KeyID()\n    }\n}\n"))),(0,i.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"fn on_load() {\n    let exports = ScExports::new();\n    exports.add_func(FUNC_DIVIDE, func_divide_thunk);\n    exports.add_func(FUNC_INIT, func_init_thunk);\n    exports.add_func(FUNC_MEMBER, func_member_thunk);\n    exports.add_func(FUNC_SET_OWNER, func_set_owner_thunk);\n    exports.add_view(VIEW_GET_FACTOR, view_get_factor_thunk);\n    exports.add_view(VIEW_GET_OWNER, view_get_owner_thunk);\n\n    unsafe {\n        for i in 0..KEY_MAP_LEN {\n            IDX_MAP[i] = get_key_id_from_string(KEY_MAP[i]);\n        }\n    }\n}\n"))),(0,i.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export function on_load(): void {\n    let exports = new wasmlib.ScExports();\n    exports.addFunc(sc.FuncDivide, funcDivideThunk);\n    exports.addFunc(sc.FuncInit, funcInitThunk);\n    exports.addFunc(sc.FuncMember, funcMemberThunk);\n    exports.addFunc(sc.FuncSetOwner, funcSetOwnerThunk);\n    exports.addView(sc.ViewGetFactor, viewGetFactorThunk);\n    exports.addView(sc.ViewGetOwner, viewGetOwnerThunk);\n\n    for (let i = 0; i < sc.keyMap.length; i++) {\n        sc.idxMap[i] = wasmlib.Key32.fromString(sc.keyMap[i]);\n    }\n}\n")))),(0,i.kt)("p",null,"As you can see, instead of calling the user functions directly, we now call thunk versions\nof these functions. We also added initialization of a local array that holds all key IDs\nnegotiated with the host, so that we can simply use (generated) indexes into this array\ninstead of having to negotiate these IDs each time we need them. The rest of the generated\ncode will use those indexes whenever a known key is used."),(0,i.kt)("p",null,"Here is an example of a thunk function for the ",(0,i.kt)("inlineCode",{parentName:"p"},"setOwner")," contract function. You can\nexamine the other thunks that all follow the same pattern in the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.xx"),":"),(0,i.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type SetOwnerContext struct {\n    Params ImmutableSetOwnerParams\n    State  MutableDividendState\n}\n\nfunc funcSetOwnerThunk(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcSetOwner")\n    // only defined owner of contract can change owner\n    access := ctx.State().GetAgentID(wasmlib.Key("owner"))\n    ctx.Require(access.Exists(), "access not set: owner")\n    ctx.Require(ctx.Caller() == access.Value(), "no permission")\n\n    f := &SetOwnerContext{\n        Params: ImmutableSetOwnerParams{\n            id: wasmlib.OBJ_ID_PARAMS,\n        },\n        State: MutableDividendState{\n            id: wasmlib.OBJ_ID_STATE,\n        },\n    }\n    ctx.Require(f.Params.Owner().Exists(), "missing mandatory owner")\n    funcSetOwner(ctx, f)\n    ctx.Log("dividend.funcSetOwner ok")\n}\n'))),(0,i.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'pub struct SetOwnerContext {\n    params: ImmutableSetOwnerParams,\n    state:  MutableDividendState,\n}\n\nfn func_set_owner_thunk(ctx: &ScFuncContext) {\n    ctx.log("dividend.funcSetOwner");\n    // only defined owner of contract can change owner\n    let access = ctx.state().get_agent_id("owner");\n    ctx.require(access.exists(), "access not set: owner");\n    ctx.require(ctx.caller() == access.value(), "no permission");\n\n    let f = SetOwnerContext {\n        params: ImmutableSetOwnerParams {\n            id: OBJ_ID_PARAMS,\n        },\n        state: MutableDividendState {\n            id: OBJ_ID_STATE,\n        },\n    };\n    ctx.require(f.params.owner().exists(), "missing mandatory owner");\n    func_set_owner(ctx, &f);\n    ctx.log("dividend.funcSetOwner ok");\n}\n'))),(0,i.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'export class SetOwnerContext {\n    params: sc.ImmutableSetOwnerParams = new sc.ImmutableSetOwnerParams();\n    state: sc.MutableDividendState = new sc.MutableDividendState();\n}\n\nfunction funcSetOwnerThunk(ctx: wasmlib.ScFuncContext): void {\n    ctx.log("dividend.funcSetOwner");\n    // only defined owner of contract can change owner\n    let access = ctx.state().getAgentID(wasmlib.Key32.fromString("owner"));\n    ctx.require(access.exists(), "access not set: owner");\n    ctx.require(ctx.caller().equals(access.value()), "no permission");\n\n    let f = new sc.SetOwnerContext();\n    f.params.mapID = wasmlib.OBJ_ID_PARAMS;\n    f.state.mapID = wasmlib.OBJ_ID_STATE;\n    ctx.require(f.params.owner().exists(), "missing mandatory owner")\n    sc.funcSetOwner(ctx, f);\n    ctx.log("dividend.funcSetOwner ok");\n}\n')))),(0,i.kt)("p",null,"First, the thunk logs the contract and function name to show the call has started. Then it\nsets up the access control for the function according to the schema definition file.\nIn this case it retrieves the ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," state variable, requires that it exists, and then\nrequires that the caller() of the function equals that value. Any failing requirement will\npanic out of the function with an error message. So this code makes sure only the owner of\nthe contract can call this function."),(0,i.kt)("p",null,"Next, we set up a strongly typed function-specific context structure. First, we add the\nfunction-specific immutable ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," interface structure, which is only present when the\nfunction can have parameters. Then we add the contract-specific ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," interface\nstructure. In this case it is mutable because setOwner is a ",(0,i.kt)("a",{parentName:"p",href:"/iota-wiki/smart-contracts/guide/schema/funcs"},"Func"),". For\n",(0,i.kt)("a",{parentName:"p",href:"/iota-wiki/smart-contracts/guide/schema/views"},"Views")," this will be an immutable state interface. Finally, we add the\nfunction-specific mutable ",(0,i.kt)("inlineCode",{parentName:"p"},"results")," interface structure, which is only present when the\nfunction returns results. Obviously, this is not the case for this setOwner function."),(0,i.kt)("p",null,"Now we get to the point where we can use the function-specific ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," interface to check\nfor mandatory parameters. Each mandatory parameter is required to exist, or else we will\npanic out of the function with an error message."),(0,i.kt)("p",null,"With the automated checks and setup completed, we now call the function implementation\nthat is maintained by the user. After the user function has completed, we log that the\ncontract function has completed successfully. Remember that any error within the user\nfunction will cause a panic, so this logging will never happen in that case."),(0,i.kt)("p",null,"In the next section we will look at the specifics of ",(0,i.kt)("a",{parentName:"p",href:"/iota-wiki/smart-contracts/guide/schema/views"},"view functions"),"."))}h.isMDXComponent=!0},71871:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},76018:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(83117),r=t(67294),i=t(5730),o=t(10109),c=t(86010),u="tabItem_LplD";function s(e){var n,t,i,s=e.lazy,l=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=p?p:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),x=(0,o.lx)(w,(function(e,n){return e.value===n.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=h[0])?void 0:i.props.value;if(null!==g&&!w.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),k=v.tabGroupChoices,b=v.setTabGroupChoices,y=(0,r.useState)(g),_=y[0],O=y[1],S=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var F=k[f];null!=F&&F!==_&&w.some((function(e){return e.value===F}))&&O(F)}var I=function(e){var n=e.currentTarget,t=S.indexOf(n),a=w[t].value;a!==_&&(T(n),O(a),null!=f&&b(f,a))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;t=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;t=S[r]||S[S.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},m)},w.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:function(e){return S.push(e)},onKeyDown:N,onFocus:I,onClick:I},i,{className:(0,c.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":_===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==_})}))))}function l(e){var n=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return t?a.createElement(m,o(o({ref:n},l),{},{components:t})):a.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);