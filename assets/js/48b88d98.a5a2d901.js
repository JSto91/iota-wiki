"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20792],{78597:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return c},default:function(){return u}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),i=["components"],l={title:"Revocation",sidebar_label:"Revocation"},s=void 0,d={unversionedId:"specs/didcomm/protocols/revocation",id:"specs/didcomm/protocols/revocation",title:"Revocation",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/external/identity.rs/documentation/docs/specs/didcomm/protocols/revocation.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/revocation",permalink:"/iota-wiki/identity.rs/specs/didcomm/protocols/revocation",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/specs/didcomm/protocols/revocation.md",tags:[],version:"current",frontMatter:{title:"Revocation",sidebar_label:"Revocation"},sidebar:"docs",previous:{title:"Signing",permalink:"/iota-wiki/identity.rs/specs/didcomm/protocols/signing"},next:{title:"Revocation Options",permalink:"/iota-wiki/identity.rs/specs/didcomm/protocols/revocation-options"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Relationships",id:"relationships",level:3},{value:"Example Use-Cases",id:"example-use-cases",level:3},{value:"Roles",id:"roles",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Messages",id:"messages",level:2},{value:"1. revocation-request",id:"revocation-request",level:3},{value:"Structure",id:"structure",level:4},{value:"Examples",id:"examples",level:4},{value:"2. revocation-response",id:"revocation-response",level:3},{value:"Structure",id:"structure-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"RevocationInfo",id:"RevocationInfo",level:2},{value:"KeyRevocation2021",id:"keyrevocation2021",level:3},{value:"Structure",id:"structure-2",level:4},{value:"Example",id:"example",level:4},{value:"CredentialRevocation2021",id:"credentialrevocation2021",level:3},{value:"Examples",id:"examples-2",level:4},{value:"CredentialStatusRevocation2021",id:"credentialstatusrevocation2021",level:3},{value:"Examples",id:"examples-3",level:4},{value:"Problem Reports",id:"problem-reports",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Unresolved Questions",id:"unresolved-questions",level:2},{value:"Related Work",id:"related-work",level:2},{value:"Further Reading",id:"further-reading",level:2}],m={toc:c};function u(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),"."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,o.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-18")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Allows to request revocation of an issued ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"verifiable credential"),", either by the holder or a trusted-party. If the revoker is unable to revoke the credential themselves, they may delegate the revocation to the issuer, in which case they take on the role of trusted-party in their request."),(0,o.kt)("h3",{id:"relationships"},"Relationships"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./revocation-options"},"revocation-options"),": this may be preceded by the the ",(0,o.kt)("a",{parentName:"li",href:"./revocation-options"},"revocation-options")," protocol for the ",(0,o.kt)("a",{parentName:"li",href:"#roles"},"trusted-party")," to discover the available ",(0,o.kt)("a",{parentName:"li",href:"#RevocationInfo"},(0,o.kt)("inlineCode",{parentName:"a"},"RevocationInfo")," types"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./presentation"},"presentation"),": this may include a ",(0,o.kt)("a",{parentName:"li",href:"./presentation"},"presentation")," by the ",(0,o.kt)("a",{parentName:"li",href:"#roles"},"revoker")," to request additional information, such as the entire credential being revoked or authorization information.")),(0,o.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A member of an organisation asks the organisation to revoke their membership."),(0,o.kt)("li",{parentName:"ul"},"A subsidiary of a company asks central to revoke a credential concerning one of their customers. ")),(0,o.kt)("h3",{id:"roles"},"Roles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Trusted-Party: has the authority to request the revocation of verifiable credentials. May also be the holder of the credential but not necessarily."),(0,o.kt)("li",{parentName:"ul"},"Revoker: able to revoke the verifiable credential. May also be the ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#dfn-issuers"},"issuer")," of the credential but not necessarily.")),(0,o.kt)("h3",{id:"interaction"},"Interaction"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"RevocationDiagram",src:a(17362).Z,width:"602",height:"742"})),(0,o.kt)("sub",null,"For guidance on diagrams see the ",(0,o.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"revocation-request"},"1. revocation-request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"iota/revocation/0.1/revocation-request")),(0,o.kt)("li",{parentName:"ul"},"Role: ",(0,o.kt)("a",{parentName:"li",href:"#roles"},"trusted-party"))),(0,o.kt)("p",null,"Sent by the ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," or holder to request revocation of an issued verifiable credential. This message conveys which credential should be revoked and which method should be used. The ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"revoker")," MAY require this to be a ",(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message")," for auditing purposes and reject unsigned requests."),(0,o.kt)("h4",{id:"structure"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfo": RevocationInfo, // REQUIRED\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#RevocationInfo"},(0,o.kt)("inlineCode",{parentName:"a"},"revocationInfo"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Contains information sufficient to specify which credential should be revoked. See ",(0,o.kt)("a",{parentName:"td",href:"#RevocationInfo"},(0,o.kt)("inlineCode",{parentName:"a"},"revocationInfo")),".",(0,o.kt)("sup",{parentName:"td",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,o.kt)("p",null,(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," If an unsupported ",(0,o.kt)("inlineCode",{parentName:"p"},"revocationInfo")," type is received, the ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"revoker")," MUST issue a problem-report. The specific problem-report descriptor is ",(0,o.kt)("inlineCode",{parentName:"p"},"invalid-revocation-type")," but if privacy is a concern, a ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"revoker")," may send a more generic descriptor such as ",(0,o.kt)("inlineCode",{parentName:"p"},"reject-request")," to avoid disclosing its capabilities more than the ",(0,o.kt)("a",{parentName:"p",href:"./revocation-options#Considerations"},"revocation-options")," protocol would reveal."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Request to revoke a credential by identifier using "CredentialRevocation2021":')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfo": {\n    "revocationInfoType": "CredentialRevocation2021",\n    "credentialId": "0495e938-3cb7-4228-bb73-c642ec6390c8"\n  }\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Request to revoke all credentials signed by a specific ",(0,o.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/lds-ed25519-2020/#verification-method"},"verification method")," identified by ",(0,o.kt)("inlineCode",{parentName:"li"},"#keys2"),' using "KeyRevocation2021":')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfo": {\n    "revocationInfoType": "KeyRevocation2021",\n    "key": "did:example:76e12ec712ebc6f1c221ebfeb1f#keys-2"\n  }\n}\n')),(0,o.kt)("h3",{id:"revocation-response"},"2. revocation-response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"iota/revocation/0.1/revocation-response")),(0,o.kt)("li",{parentName:"ul"},"Role: ",(0,o.kt)("a",{parentName:"li",href:"#roles"},"revoker"))),(0,o.kt)("p",null,"Sent by the ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"revoker")," as soon as the revocation is performed to indicate the current status."),(0,o.kt)("h4",{id:"structure-1"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "revoked" | "pending",\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"status")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Current status of the revocation, either ",(0,o.kt)("inlineCode",{parentName:"td"},"revoked")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"pending"),".",(0,o.kt)("sup",{parentName:"td",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,o.kt)("p",null,(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The status should be ",(0,o.kt)("inlineCode",{parentName:"p"},"revoked")," if the credential or signing key is confirmed to be revoked, and ",(0,o.kt)("inlineCode",{parentName:"p"},"pending")," if the revocation has been accepted but not yet performed or committed. For instance, a revocation that updates a DID document may require waiting for the update transaction to be confirmed, or it could be queued for a batch update. If the ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"revoker")," is unable to perform the revocation or rejects the request for any reason, they MUST instead respond with a ",(0,o.kt)("a",{parentName:"p",href:"#problem-reports"},(0,o.kt)("inlineCode",{parentName:"a"},"problem-report")),". Care should be taken not to reveal which credentials are under the control of the revoker to prevent privacy-revealing brute-force attacks."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," SHOULD verify that the credential is actually revoked after this message is received. The ",(0,o.kt)("a",{parentName:"p",href:"#Revocation"},"revocation protocol")," MAY be polled by a ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," by re-sending the same request to confirm revocation if the status of ",(0,o.kt)("inlineCode",{parentName:"p"},"pending")," is received. In the case of a public ledger, however, the ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," can query the public state of the verification method themselves to confirm revocation."),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Response to a ",(0,o.kt)("a",{parentName:"li",href:"#revocation-request"},"revocation-request")," where the ",(0,o.kt)("a",{parentName:"li",href:"#roles"},"revoker")," confirms revocation directly:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "revoked",\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Response to a ",(0,o.kt)("a",{parentName:"li",href:"#revocation-request"},"revocation-request")," where the ",(0,o.kt)("a",{parentName:"li",href:"#roles"},"revoker")," confirms the revocation was scheduled, but can only be confirmed at a later point:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "pending",\n}\n')),(0,o.kt)("h2",{id:"RevocationInfo"},"RevocationInfo"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RevocationInfo")," object contains the information necessary for a ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"revoker")," to revoke a verifiable credential. For instance, this may include the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field of the credential, in which case a ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"revoker")," must maintain a map to the signing key used for each credential to revoke them. It could also be the identifier for the signing key itself on the DID document of the issuer. Implementors are free to construct their own ",(0,o.kt)("inlineCode",{parentName:"p"},"RevocationInfo")," types as different singing schemes may require different information for revocation."),(0,o.kt)("p",null,"Implementors MUST adhere to at least one of the types below, either ",(0,o.kt)("a",{parentName:"p",href:"#keyrevocation2021"},"KeyRevocation2021")," or ",(0,o.kt)("a",{parentName:"p",href:"#credentialrevocation2021"},"CredentialRevocation2021"),". Implementors MAY define additional types as-needed. A valid ",(0,o.kt)("inlineCode",{parentName:"p"},"RevocationInfo")," type MUST have a ",(0,o.kt)("inlineCode",{parentName:"p"},"revocationInfoType")," field."),(0,o.kt)("h3",{id:"keyrevocation2021"},"KeyRevocation2021"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"KeyRevocation2021"))),(0,o.kt)("p",null,"Allows a particular cryptographic public key linked as a verification method to be specified for revocation. This may reference any singular verification method such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-spec-registries/#ed25519verificationkey2018"},"Ed25519VerificationKey2018")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-spec-registries/#rsaverificationkey2018"},"RsaVerificationKey2018"),". Verification methods that hold multiple keys as a collection could, for example, encode the index of the key to be revoked in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-did-queries"},"query")," of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DIDUrl"),"."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-spec-registries/#verification-method-types"},"DID Spec Registry for more verification method types"),"."),(0,o.kt)("p",null,"Note that revoking a verification method revokes all verifiable credentials signed with its key."),(0,o.kt)("h4",{id:"structure-2"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfoType": string, // REQUIRED\n  "key": DIDUrl,                // REQUIRED\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"revocationInfoType")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String indicating the ",(0,o.kt)("inlineCode",{parentName:"td"},"RevocationInfo")," type, MUST be ",(0,o.kt)("inlineCode",{parentName:"td"},'"KeyRevocation2021"'),"."),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"key")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String conforming to the ",(0,o.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DIDUrl syntax")," identifying a ",(0,o.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#verification-methods"},"verification method")," to be revoked.",(0,o.kt)("sup",{parentName:"td",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,o.kt)("p",null,(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-did-fragments"},"fragment")," MUST reference a valid verification method. The DID document referenced need not belong to the revoker necessarily, as they could forward or delegate the request to the actual owner or controller. The ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-did-queries"},"query")," MAY include extra information needed to identify the particular signing key."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Specify a single key or verification method to revoke:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfoType": "KeyRevocation2021",\n  "key": "did:example:76e12ec712ebc6f1c221ebfeb1f#keys-1"\n}\n')),(0,o.kt)("h3",{id:"credentialrevocation2021"},"CredentialRevocation2021"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"CredentialRevocation2021"))),(0,o.kt)("p",null,"Allows requesting the revocation of a verifiable credential by its identifier field. This implies that the revoker needs to keep track of the relevant method of revocation and additional information such as the verification method used to sign it to be able to revoke the credential. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfoType": string, // REQUIRED\n  "credentialId": string,       // REQUIRED\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"revocationInfoType")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String indicating the ",(0,o.kt)("inlineCode",{parentName:"td"},"RevocationInfo")," type, MUST be ",(0,o.kt)("inlineCode",{parentName:"td"},'"CredentialRevocation2021"'),"."),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"credentialId")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A ",(0,o.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#dfn-uri"},"URI")," corresponding to the ",(0,o.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#identifiers"},"id property")," of a verifiable credential."),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,o.kt)("h4",{id:"examples-2"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Specify the identifier of the credential to revoke:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfoType": "CredentialRevocation2021",\n  "credentialId": "1dd5bbc6-b0bc-4f82-94a9-c723e11075b5",\n}\n')),(0,o.kt)("h3",{id:"credentialstatusrevocation2021"},"CredentialStatusRevocation2021"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"CredentialStatusRevocation2021"))),(0,o.kt)("p",null,"Request the revocation of a verifiable credential by sending its corresponding ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#status"},"credential status")," information. The ",(0,o.kt)("a",{parentName:"p",href:"#roles"},"revoker")," should ensure that this information is correct and that the requester is authorized."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfoType": string,          // REQUIRED\n  "credentialStatus": CredentialStatus,  // REQUIRED\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"revocationInfoType")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String indicating the ",(0,o.kt)("inlineCode",{parentName:"td"},"RevocationInfo")," type, MUST be ",(0,o.kt)("inlineCode",{parentName:"td"},'"CredentialStatusRevocation2021"'),"."),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#status"},(0,o.kt)("inlineCode",{parentName:"a"},"credentialStatus"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"A ",(0,o.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#status"},"credential status")," object.",(0,o.kt)("sup",{parentName:"td",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,o.kt)("p",null,(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," This SHOULD correspond with one of the supported credential status methods in the ",(0,o.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-extension-registry/#status-methods"},"verifiable credentials extension registry"),"."),(0,o.kt)("h4",{id:"examples-3"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Specifying a ",(0,o.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/vc-csl2017/"},"Credential Status List 2017")," entry:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfoType": "CredentialStatusRevocation2021",\n  "credentialStatus": {\n    "id": "https://example.edu/status/24",\n    "type": "CredentialStatusList2017"\n  },\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Specifying a ",(0,o.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/vc-status-rl-2020/"},"Revocation List 2020")," entry:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfoType": "CredentialStatusRevocation2021",\n  "credentialStatus": {\n    "id": "https://dmv.example.gov/credentials/status/3#94567",\n    "type": "RevocationList2020Status",\n    "revocationListIndex": "94567",\n    "revocationListCredential": "https://example.com/credentials/status/3"\n  },\n}\n')),(0,o.kt)("h3",{id:"problem-reports"},"Problem Reports"),(0,o.kt)("p",null,"The following problem-report codes may be raised in the course of this protocol and are expected to be recognised and handled in addition to any general problem-reports. Implementers may also introduce their own application-specific problem-reports."),(0,o.kt)("p",null,"For guidance on problem-reports and a list of general codes see ",(0,o.kt)("a",{parentName:"p",href:"../resources/problem-reports"},"problem reports"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.revocation.reject-request")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#revocation-request"},"revocation-request")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ",(0,o.kt)("a",{parentName:"td",href:"#roles"},"revoker")," rejects a request for any reason, e.g. the revoker does not have the authority to revoke the particular credential or key, or a relayed revocation request to another ",(0,o.kt)("a",{parentName:"td",href:"#roles"},"revoker")," failed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.revocation.reject-request.invalid-revocation-type")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#revocation-request"},"revocation-request")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ",(0,o.kt)("a",{parentName:"td",href:"#roles"},"revoker")," rejects a request due to an unrecognised, unsupported, or otherwise invalid ",(0,o.kt)("inlineCode",{parentName:"td"},"revocationInfoType"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.revocation.reject-request.invalid-revocation-info")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#revocation-request"},"revocation-request")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ",(0,o.kt)("a",{parentName:"td",href:"#roles"},"revoker")," rejects a request due to a malformed or otherwise invalid ",(0,o.kt)("inlineCode",{parentName:"td"},"revocationInfo"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.revocation.presentation-failed")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#revocation-request"},"revocation-request")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ",(0,o.kt)("a",{parentName:"td",href:"#roles"},"revoker")," terminates the protocol due to a failed presentation from the ",(0,o.kt)("a",{parentName:"td",href:"#roles"},"trusted-party"),", e.g. failed to prove permission to revoke the particular credential.")))),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("p",null,"This section is non-normative."),(0,o.kt)("p",null,"The revoker needs to check if the credential may actually be revoked and if the trusted party actually has the authority to request the revocation."),(0,o.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Should the trusted party be able to prove that the revoker claimed to have revoked the credential by making him include a signature in the ",(0,o.kt)("inlineCode",{parentName:"li"},"revocation-response"),", or is it sufficient that they can query the signing key or revocation material in the case of a public ledger?"),(0,o.kt)("li",{parentName:"ul"},"Should revocation-options include the credential status sub-types for ",(0,o.kt)("inlineCode",{parentName:"li"},"CredentialStatusRevocation2021"),"?"),(0,o.kt)("li",{parentName:"ul"},"Separate revocation-notification (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0183-revocation-notification/README.md"},"https://github.com/hyperledger/aries-rfcs/blob/main/features/0183-revocation-notification/README.md"),") flow for notifying the holder that their credential was revoked, optionally including the reason? Dual entry for a holder to request the revocation reason?"),(0,o.kt)("li",{parentName:"ul"},"Include reason-code/reason-comment in the request? Could be used by the revoker for auditing/validating the request but overall seems not useful - trusted-party would store those reasons internally, holder comments aren't very useful. Can be achieved via embedded presentation and self-signed credentials?")),(0,o.kt)("h2",{id:"related-work"},"Related Work"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aries Hyperledger: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0183-revocation-notification/README.md"},"https://github.com/hyperledger/aries-rfcs/blob/main/features/0183-revocation-notification/README.md"))),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/"},"https://www.w3.org/TR/vc-data-model/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hyperledger-indy.readthedocs.io/projects/hipe/en/latest/text/0011-cred-revocation/README.html"},"https://hyperledger-indy.readthedocs.io/projects/hipe/en/latest/text/0011-cred-revocation/README.html"))))}u.isMDXComponent=!0},17362:function(e,t,a){t.Z=a.p+"assets/images/revocation.drawio-9de39a039928da80dd7c3c53b35dbad6.svg"},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);