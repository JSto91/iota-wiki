"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[55723],{38597:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return u}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],s={description:"ObjectStorage is used as a base data structure for many data collection elements such as `branchStorage`, `conflictStorage`, `messageStorage` amongst others.",image:"/img/logo/goshimmer_light.png",keywords:["storage","dynamic creation","database","parameters","object types","stream of bytes","cached"]},l="Object Storage",c={unversionedId:"implementation_design/object_storage",id:"implementation_design/object_storage",title:"Object Storage",description:"ObjectStorage is used as a base data structure for many data collection elements such as `branchStorage`, `conflictStorage`, `messageStorage` amongst others.",source:"@site/external/goshimmer/documentation/docs/implementation_design/object_storage.md",sourceDirName:"implementation_design",slug:"/implementation_design/object_storage",permalink:"/iota-wiki/goshimmer/implementation_design/object_storage",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/implementation_design/object_storage.md",tags:[],version:"current",frontMatter:{description:"ObjectStorage is used as a base data structure for many data collection elements such as `branchStorage`, `conflictStorage`, `messageStorage` amongst others.",image:"/img/logo/goshimmer_light.png",keywords:["storage","dynamic creation","database","parameters","object types","stream of bytes","cached"]},sidebar:"docs",previous:{title:"Configuration Parameters",permalink:"/iota-wiki/goshimmer/implementation_design/configuration_parameters"},next:{title:"Protocol specification",permalink:"/iota-wiki/goshimmer/protocol_specification/overview"}},p={},m=[{value:"Database",id:"database",level:2},{value:"ObjectStorage",id:"objectstorage",level:2},{value:"ObjectStorage Factory",id:"objectstorage-factory",level:3},{value:"StorableObject",id:"storableobject",level:3},{value:"StorableObjectFactory Function",id:"storableobjectfactory-function",level:3},{value:"ObjectStorage Methods",id:"objectstorage-methods",level:3}],d={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"object-storage"},"Object Storage"),(0,o.kt)("p",null,"In GoShimmer ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectStorage"),"  is used as a base data structure for many data collection elements such as ",(0,o.kt)("inlineCode",{parentName:"p"},"branchStorage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"conflictStorage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"messageStorage")," and others.\nIt can be described by the following characteristics, it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"is a manual cache which keeps objects in memory as long as consumers are using it"),(0,o.kt)("li",{parentName:"ul"},"uses key-value storage type "),(0,o.kt)("li",{parentName:"ul"},"provides mutex options for guarding shared variables and preventing changing the object state by multiple goroutines at the same time"),(0,o.kt)("li",{parentName:"ul"},"takes care of  dynamic creation of different object types depending on the key, and the serialized data it receives through the utility ",(0,o.kt)("inlineCode",{parentName:"li"},"objectstorage.Factory")),(0,o.kt)("li",{parentName:"ul"},"helps with the creation of multiple ",(0,o.kt)("inlineCode",{parentName:"li"},"ObjectStorage")," instances from the same package and  automatic configuration.")),(0,o.kt)("p",null,"In order to create an object storage we need to provide the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"kvstore.KVStore")," structure backed by the database."),(0,o.kt)("h2",{id:"database"},"Database"),(0,o.kt)("p",null,"GoShimmer stores data in the form of an object storage system. The data is stored in one large repository with flat structure. It is a scalable solution that allows for fast data retrieval because of its categorization structure."),(0,o.kt)("p",null,"Additionally, GoShimmer leaves the possibility to store data only in memory that can be specified with the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"CfgDatabaseInMemory")," value. In-memory storage is purely based on a Go map, package ",(0,o.kt)("inlineCode",{parentName:"p"},"mapdb")," from hive.go.\nFor the persistent storage in a database it uses ",(0,o.kt)("inlineCode",{parentName:"p"},"RocksDB"),". It is a fast key-value database that performs well for both reads and writes simultaneously that was chosen due to its low memory consumption. "),(0,o.kt)("p",null,"Both solutions are implemented in the ",(0,o.kt)("inlineCode",{parentName:"p"},"database")," package, along with prefix definitions that can be used during the creation of new object storage elements."),(0,o.kt)("p",null,"The database plugin is responsible for creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," instance of the chosen database under the directory specified with ",(0,o.kt)("inlineCode",{parentName:"p"},"CfgDatabaseDir")," parameter. It will manage a proper closure of the database upon receiving a shutdown signal. During the start configuration, the database is marked as unhealthy, and it will be marked as healthy on shutdown. Then the garbage collector is run and the database can be closed."),(0,o.kt)("h2",{id:"objectstorage"},"ObjectStorage"),(0,o.kt)("p",null,"Assume we need to store data for some newly created object ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),". Then we need to define a new prefix for our package in the ",(0,o.kt)("inlineCode",{parentName:"p"},"database")," package, and prefixes for single storage objects. They will be later used during ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectStorage")," creation. A package prefix will be combined with a store specific prefix to create a specific realm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"package example\n\ntype Storage struct {\n    A                   *objectstorage.ObjectStorage\n    ...\n    shutdownOnce        sync.Once\n}\n")),(0,o.kt)("h3",{id:"objectstorage-factory"},"ObjectStorage Factory"),(0,o.kt)("p",null,"To easily create multiple storage objects instances for one package, the most convenient way is to use the factory function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"osFactory := objectstorage.NewFactory(store, database.Prefix)\n")),(0,o.kt)("p",null,"It needs two parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"store")," - the key value ",(0,o.kt)("inlineCode",{parentName:"li"},"kvstore")," instance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"database.Prefix")," - a prefix defined in the ",(0,o.kt)("inlineCode",{parentName:"li"},"database")," package for our new ",(0,o.kt)("inlineCode",{parentName:"li"},"example")," package. It will be responsible for automatic configuration of the newly provided ",(0,o.kt)("inlineCode",{parentName:"li"},"kvstore")," instance.")),(0,o.kt)("p",null,"After defining the storage factory for the group of objects, we can use it to create an ",(0,o.kt)("inlineCode",{parentName:"p"},"*objectstorage.ObjectStorage")," instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"AStorage = osFactory.New(objPrefix, FromObjectStorage)\nAStorage = osFactory.New(objPrefix, FromObjectStorage, optionalOptions...)\n")),(0,o.kt)("p",null,"For the function parameter we should provide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"objPrefix")," - mentioned before, we provide the object specific prefix."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FromObjectStorage")," - a function that allows the dynamic creation of different object types depending on the stored data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"optionalOptions")," -  an optional parameter provided in the form of options array ",(0,o.kt)("inlineCode",{parentName:"li"},"[]objectstorage.Option"),". All possible options are defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"objectstorage.Options"),". If we do not specify them during creation, the default values will be used, such as enabled persistence or setting cache time to 0.")),(0,o.kt)("h3",{id:"storableobject"},"StorableObject"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"StorableObject")," is an interface that allows the dynamic creation of different object types depending on the stored data. We need to make sure that all methods required by the interface are implemented to use the object storage factory."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SetModified")," - marks the object as modified, which will be written to the disk (if persistence is enabled)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IsModified")," - returns true if the object is marked as modified"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Delete")," - marks the object to be deleted from the persistence layer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IsDeleted")," - returns true if the object was marked as deleted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Persist")," - enables or disables persistence for this object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ShouldPersist")," - returns true if this object is going to be persisted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Update")," - updates the object with the values of another object - requires an explicit implementation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ObjectStorageKey")," - returns the key that is used to store the object in the database - requires an explicit implementation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ObjectStorageValue")," - marshals the object data into a sequence of bytes that are used as the value part in the object storage - requires an explicit implementation")),(0,o.kt)("p",null,"Most of these have their default implementation in ",(0,o.kt)("inlineCode",{parentName:"p"},"objectstorage")," library, except from ",(0,o.kt)("inlineCode",{parentName:"p"},"Update"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectStorageKey"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectStorageValue")," which need to be provided."),(0,o.kt)("h3",{id:"storableobjectfactory-function"},"StorableObjectFactory Function"),(0,o.kt)("p",null,"The function ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectFromObjectStorage")," from object storage provides functionality to restore objects from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectStorage"),". By convention the implementation of this function usually follows the schema:\n",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectFromObjectStorage")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectFromBytes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"func ObjectFromObjectStorage(key []byte, data []byte) (result StorableObject, err error) {\n    result, err := ObjectFromBytes(marshalutil.New(data))\n    ...\n    return\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ObjectFromBytes")," unmarshals the object sequence of bytes with a help of ",(0,o.kt)("inlineCode",{parentName:"p"},"marshalutil")," library. The returned ",(0,o.kt)("inlineCode",{parentName:"p"},"consumedBytes")," can be used for the testing purposes.\nThe created ",(0,o.kt)("inlineCode",{parentName:"p"},"marshalUtil")," instance stores the stream of bytes and keeps track of what has been already read (",(0,o.kt)("inlineCode",{parentName:"p"},"readOffset"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"func ObjectFromBytes(bytes []byte) (object *ObjectType, consumedBytes int, err error) {\n    marshalUtil := marshalutil.New(bytes)\n    if object, err = ObjectFromMarshalUtil(marshalUtil); err != nil {\n    ...\n    consumedBytes = marshalUtil.ReadOffset()\n    return\n}\n")),(0,o.kt)("p",null,"The key logic is implemented in ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectFromMarshalUtil")," that takes the marshaled object and transforms it into the object of specified type.\nBecause the data is stored in a sequence of bytes, it has no information about the form of an object and any data types it had before writing to the database.\nThus, we need to serialize any data into a stream of bytes in order to write it (marshaling), and deserialize the stream of bytes back into correct data structures when reading it (unmarshaling).\nLet's consider as an example, unmarshaling of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Approver")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"type Approver struct {\n    approverType            ApproverType    //  8 bytes\n    referencedMessageID     MessageID       // 32 bytes\n    approverMessageID       MessageID       // 32 bytes\n}\n")),(0,o.kt)("p",null,"The order in which we read bytes has to reflect the order in which it was written down during marshaling. As in the example, the order: ",(0,o.kt)("inlineCode",{parentName:"p"},"referencedMessageID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"approverType"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"approverMessageID")," is the same in both marshalling and unmarshalling."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"// Unmarshalling\nfunc ApproverFromMarshalUtil(marshalUtil *marshalutil.MarshalUtil) (result *Approver) {\n    result = &Approver{}\n    result.referencedMessageID = MessageIDFromMarshalUtil(marshalUtil)\n    result.approverType = ApproverTypeFromMarshalUtil(marshalUtil)\n    result.approverMessageID = MessageIDFromMarshalUtil(marshalUtil)\n    return\n}\n// Marshalling\nfunc (a *Approver) ObjectStorageApprover() []byte {\n    return marshalutil.New().\n    Write(a.referencedMessageID).\n    Write(a.approverType).\n    Write(a.approverMessageID).\n    Bytes()\n}\n")),(0,o.kt)("p",null,"We continue to decompose our object into smaller pieces with help of ",(0,o.kt)("inlineCode",{parentName:"p"},"MarshalUtil")," struct that keeps track of bytes, and a read offset.\nThen we use ",(0,o.kt)("inlineCode",{parentName:"p"},"marshalutil")," build in methods on the appropriate parts of the byte stream with its length defined by the data\ntype of the struct field. This way, we are able to parse bytes to the correct Go data structure."),(0,o.kt)("h3",{id:"objectstorage-methods"},"ObjectStorage Methods"),(0,o.kt)("p",null,"After defining marshalling and unmarshalling mechanism for",(0,o.kt)("inlineCode",{parentName:"p"},"objectStorage")," bytes conversion,\nwe can start using it for its sole purpose, to actually store and read the particular parts of the project elements. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Load")," allows retrieving the corresponding object based on the provided id. For example, the method on the message ",(0,o.kt)("inlineCode",{parentName:"p"},"objectStorage"),(0,o.kt)("br",{parentName:"p"}),"\n","is getting the cached object. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To convert an object retrieved in the form of a cache to its own corresponding type, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Unwrap"),".\nIn the code below it will return the message wrapped by the cached object.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Exists")," - checks weather the object has been deleted. If so it is released from memory with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Release")," method."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"func (s *Storage) Message(messageID MessageID) *CachedMessage {\n    return &CachedMessage{CachedObject: s.messageStorage.Load(messageID[:])}\n}\n\ncachedMessage := messagelayer.Tangle().Storage.Message(msgID)\nif !cachedMessage.Exists() {\n    msgObject.Release()\n    }\nmessage := cachedMessage.Unwrap()\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Consume")," will be useful when we want to apply a function on the cached object. ",(0,o.kt)("inlineCode",{parentName:"p"},"Consume")," unwraps the ",(0,o.kt)("inlineCode",{parentName:"p"},"CachedObject")," and passes a type-casted version to the consumer function.\nRight after the object is consumed and when the callback is finished, the object is released."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"cachedMessage.Consume(func(message *tangle.Message) {\n            doSomething(message)\n        })\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ForEach")," - allows to apply a ",(0,o.kt)("inlineCode",{parentName:"p"},"Consumer")," function for every object residing within the cache and the underlying persistence layer.\nFor example, this is how we can count the number of messages."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"messageCount := 0\nmessageStorage.ForEach(func(key []byte, cachedObject objectstorage.CachedObject) bool {\n    cachedObject.Consume(func(object objectstorage.StorableObject) {\n        messageCount++\n      })\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Store")," - storing an object in the objectStorage. An extended version is method ",(0,o.kt)("inlineCode",{parentName:"p"},"StoreIfAbsent"),"\nthat stores an object only if it was not stored before and returns boolean indication if the object was stored.\n",(0,o.kt)("inlineCode",{parentName:"p"},"ComputeIfAbsent")," works similarly but does not access the value log. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"cachedMessage := messageStorage.Store(newMessage)\ncachedMessage, stored := messageStorage.StoreIfAbsent(newMessage)\ncachedMessage := messageStorage.ComputeIfAbsent(newMessage, remappingFunction)\n")))))}u.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);