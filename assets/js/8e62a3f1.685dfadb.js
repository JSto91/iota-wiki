"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[40240],{93645:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var i=t(83117),a=t(80102),r=(t(67294),t(3905)),o=t(76018),s=t(71871),l=t(74606),d=["components"],u={title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC is revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke"]},c=void 0,p={unversionedId:"verifiable_credentials/revoke",id:"verifiable_credentials/revoke",title:"Verifiable Credential Revocation",description:"Explain how a VC is revoked",source:"@site/external/identity.rs/documentation/docs/verifiable_credentials/revoke.mdx",sourceDirName:"verifiable_credentials",slug:"/verifiable_credentials/revoke",permalink:"/iota-wiki/identity.rs/verifiable_credentials/revoke",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/verifiable_credentials/revoke.mdx",tags:[],version:"current",frontMatter:{title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC is revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke"]},sidebar:"docs",previous:{title:"Create and Sign",permalink:"/iota-wiki/identity.rs/verifiable_credentials/create"},next:{title:"Verifiable Presentations",permalink:"/iota-wiki/identity.rs/verifiable_credentials/verifiable_presentations"}},v={},m=[{value:"Example",id:"example",level:2}],h={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TODO: Explain how Verifiable Credentials are revoked using ",(0,r.kt)("inlineCode",{parentName:"p"},"credentialStatus")," and e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"RevocationList2020"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This example shows how you can revoke a ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Verifiable Credential(VC)")," by removing a verification method (public key) from the DID Document of the Issuer. This means the VC can no longer be validated. This would invalidate every VC signed with the same public key, meaning the Issuer would have to sign every VC with a different key."),(0,r.kt)(o.Z,{groupId:"programming-languages",defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Node.js",value:"nodejs"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! This example shows how to revoke a verifiable credential.\n//!\n//! The Verifiable Credential is revoked by actually removing a verification method (public key)\n//! from the DID Document of the Issuer.\n//! As such, the Verifiable Credential can no longer be validated.\n//! This would invalidate every Verifiable Credential signed with the same public key, therefore the\n//! issuer would have to sign every VC with a different key.\n//!\n//! cargo run --example did_history\n\nuse identity::core::Timestamp;\nuse identity::credential::Credential;\nuse identity::crypto::ProofOptions;\nuse identity::did::MethodScope;\nuse identity::did::DID;\n\nuse identity::iota::CredentialValidationOptions;\nuse identity::iota::CredentialValidator;\nuse identity::iota::ExplorerUrl;\nuse identity::iota::Receipt;\n\nuse identity::iota::Resolver;\nuse identity::iota::Result;\nuse identity::iota_core::IotaVerificationMethod;\nuse identity::prelude::*;\n\nmod common;\nmod create_did;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // Create a client instance to send messages to the Tangle.\n  let client: Client = Client::new().await?;\n\n  // Create a signed VC\n  let (issuer, signed_vc) = create_vc_helper(&client).await?;\n\n  // Remove the public key that signed the VC from the issuer\'s DID document\n  // - effectively revoking the VC as it will no longer be able to verified.\n  let (mut issuer_doc, issuer_key, issuer_receipt) = issuer;\n  issuer_doc.remove_method(&issuer_doc.id().to_url().join("#newKey")?)?;\n  issuer_doc.metadata.previous_message_id = *issuer_receipt.message_id();\n  issuer_doc.metadata.updated = Some(Timestamp::now_utc());\n  issuer_doc.sign_self(issuer_key.private(), issuer_doc.default_signing_method()?.id().clone())?;\n  // This is an integration chain update, so we publish the full document.\n  let update_receipt = client.publish_document(&issuer_doc).await?;\n\n  // Log the resulting Identity update\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "Issuer Update Transaction > {}",\n    explorer.message_url(update_receipt.message_id())?\n  );\n  println!(\n    "Explore the Issuer DID Document > {}",\n    explorer.resolver_url(issuer_doc.id())?\n  );\n\n  // Check the verifiable credential\n  let resolver: Resolver = Resolver::new().await?;\n  let resolved_issuer_doc = resolver.resolve_credential_issuer(&signed_vc).await?;\n  let validation_result: Result<()> = CredentialValidator::validate(\n    &signed_vc,\n    &resolved_issuer_doc,\n    &CredentialValidationOptions::default(),\n    identity::iota::FailFast::FirstError,\n  )\n  .map_err(Into::into);\n\n  println!("VC validation result: {:?}", validation_result);\n  assert!(validation_result.is_err());\n  println!("Credential successfully revoked!");\n\n  Ok(())\n}\n\n/// Convenience function for creating a verifiable `Credential`, signed with a VerificationMethod\n/// with tag #newKey.\n///\n/// See "create_vc" example for explanation.\nasync fn create_vc_helper(\n  client: &Client,\n) -> Result<(\n  (IotaDocument, KeyPair, Receipt), // issuer\n  Credential,                       // signed verifiable credential\n)> {\n  // Create a signed DID Document/KeyPair for the credential issuer (see create_did.rs).\n  let (issuer_doc, issuer_key, issuer_receipt) = create_did::run().await?;\n\n  // Create a signed DID Document/KeyPair for the credential subject (see create_did.rs).\n  let (subject_doc, ..) = create_did::run().await?;\n\n  // Add a new VerificationMethod to the issuer with tag #newKey\n  // NOTE: this allows us to revoke it without removing the default signing key.\n  let (issuer_doc, issuer_new_key, issuer_updated_receipt) =\n    common::add_new_key(client, &issuer_doc, &issuer_key, &issuer_receipt).await?;\n\n  // Create an unsigned Credential with claims about `subject` specified by `issuer`.\n  let mut credential: Credential = common::issue_degree(&issuer_doc, &subject_doc)?;\n\n  // Sign the Credential with the issuer\'s #newKey private key, so we can later revoke it\n  issuer_doc.sign_data(\n    &mut credential,\n    issuer_new_key.private(),\n    issuer_doc.default_signing_method()?.id(),\n    ProofOptions::default(),\n  )?;\n\n  let issuer = (issuer_doc, issuer_key, issuer_updated_receipt);\n  Ok((issuer, credential))\n}\n\n/// Convenience function for adding a new `VerificationMethod` with tag #newKey to a DID document\n/// and performing an integration chain update, publishing it to the Tangle.\n///\n/// See "manipulate_did" for further explanation.\npub async fn add_new_key(\n  client: &Client,\n  doc: &IotaDocument,\n  key: &KeyPair,\n  receipt: &Receipt,\n) -> Result<(IotaDocument, KeyPair, Receipt)> {\n  let mut updated_doc = doc.clone();\n\n  // Add #newKey to the document\n  let new_key: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n  let method: IotaVerificationMethod =\n    IotaVerificationMethod::new(updated_doc.id().clone(), new_key.type_(), new_key.public(), "newKey")?;\n  assert!(updated_doc\n    .insert_method(method, MethodScope::VerificationMethod)\n    .is_ok());\n\n  // Prepare the update\n  updated_doc.metadata.previous_message_id = *receipt.message_id();\n  updated_doc.metadata.updated = Some(Timestamp::now_utc());\n  updated_doc.sign_self(key.private(), updated_doc.default_signing_method()?.id().clone())?;\n\n  // Publish the update to the Tangle\n  let update_receipt: Receipt = client.publish_document(&updated_doc).await?;\n  Ok((updated_doc, new_key, update_receipt))\n}\n')),(0,r.kt)(s.Z,{value:"nodejs",mdxType:"TabItem"},(0,r.kt)(l.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {\n    Client,\n    Credential,\n    CredentialValidationOptions,\n    CredentialValidator,\n    FailFast,\n    Resolver,\n    Timestamp\n} from \'@iota/identity-wasm\';\nimport {createVC} from \'./create_vc\';\n\n/**\n This example shows how to revoke a verifiable credential.\n The Verifiable Credential is revoked by actually removing a verification method (public key) from the DID Document of the Issuer.\n As such, the Verifiable Credential can no longer be validated.\n This would invalidate every Verifiable Credential signed with the same public key, therefore the issuer would have to sign every VC with a different key.\n\n Note that this example uses the "main" network, if you are writing code against the test network then most function\n calls will need to include information about the network, since this is not automatically inferred from the\n arguments in all cases currently.\n\n We recommend that you ALWAYS use a CLIENT_CONFIG parameter that you define when calling any functions that take a\n ClientConfig object. This will ensure that all the API calls use a consistent node and network.\n\n @param {{network: Network, explorer: ExplorerUrl}} clientConfig\n **/\nasync function revokeVC(clientConfig) {\n    // Create a client instance to publish messages to the configured Tangle network.\n    const client = await Client.fromConfig({\n        network: clientConfig.network\n    });\n\n    // Creates new identities and a VC (see "create_vc" example)\n    const {alice, issuer, credentialJSON} = await createVC(clientConfig);\n    const signedVc = Credential.fromJSON(credentialJSON);\n\n    // Remove the public key that signed the VC - effectively revoking the VC as it will no longer be able to verify\n    issuer.doc.removeMethod(issuer.doc.id().toUrl().join("#newKey"));\n    issuer.doc.setMetadataPreviousMessageId(issuer.updatedMessageId);\n    issuer.doc.setMetadataUpdated(Timestamp.nowUTC());\n    issuer.doc.signSelf(issuer.key, issuer.doc.defaultSigningMethod().id());\n    // This is an integration chain update, so we publish the full document.\n    const receipt = await client.publishDocument(issuer.doc);\n    console.log(`published document`);\n    // Log the resulting Identity update\n    console.log(`Issuer Update Transaction: ${clientConfig.explorer.messageUrl(receipt.messageId())}`);\n    console.log(`Explore the Issuer DID Document: ${clientConfig.explorer.resolverUrl(issuer.doc.id())}`);\n\n    // Check the verifiable credential.\n    const resolver = await Resolver\n        .builder()\n        .client(client)\n        .build();\n    let vc_revoked = false;\n    try {\n        // Resolve the issuer\'s updated DID Document to ensure the key was revoked successfully.\n        const resolvedIssuerDoc = await resolver.resolveCredentialIssuer(signedVc);\n        CredentialValidator.validate(\n            signedVc,\n            resolvedIssuerDoc,\n            CredentialValidationOptions.default(),\n            FailFast.FirstError\n        );\n    } catch (exception) {\n        console.log(`${exception.message}`)\n        vc_revoked = true;\n    }\n    if (!vc_revoked) throw new Error("VC not revoked");\n    console.log(`Credential successfully revoked!`);\n\n}\n\nexport {revokeVC};\n'))))}f.isMDXComponent=!0},71871:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(67294);function a(e){var n=e.children,t=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},76018:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(83117),a=t(67294),r=t(5730),o=t(10109),s=t(86010),l="tabItem_LplD";function d(e){var n,t,r,d=e.lazy,u=e.block,c=e.defaultValue,p=e.values,v=e.groupId,m=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),_=(0,o.lx)(f,(function(e,n){return e.value===n.value}));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),b=y.tabGroupChoices,k=y.setTabGroupChoices,w=(0,a.useState)(g),C=w[0],V=w[1],I=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=b[v];null!=x&&x!==C&&f.some((function(e){return e.value===x}))&&V(x)}var D=function(e){var n=e.currentTarget,t=I.indexOf(n),i=f[t].value;i!==C&&(T(n),V(i),null!=v&&k(v,i))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=I.indexOf(e.currentTarget)+1;t=I[i]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;t=I[a]||I[I.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},m)},f.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return I.push(e)},onKeyDown:E,onFocus:D,onClick:D},r,{className:(0,s.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),d?(0,a.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function u(e){var n=(0,r.Z)();return a.createElement(d,(0,i.Z)({key:String(n)},e))}}}]);