(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[685],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return t?n.createElement(h,i(i({ref:a},l),{},{components:t})):n.createElement(h,i({ref:a},l))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4206:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=t(2122),r=t(9756),o=(t(7294),t(3905)),i=["components"],s={id:"managing-adapter",title:"Managing"},d={unversionedId:"adapters/configuration/managing-adapter",id:"adapters/configuration/managing-adapter",isDocsHomePage:!1,title:"Managing",description:"The Managing adapter handles the proposal creation, sponsorship and processing of a new adapter including its initial configuration, and permissions.",source:"@site/docs/adapters/configuration/Managing.md",sourceDirName:"adapters/configuration",slug:"/adapters/configuration/managing-adapter",permalink:"/docs/adapters/configuration/managing-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/adapters/configuration/Managing.md",version:"current",frontMatter:{id:"managing-adapter",title:"Managing"},sidebar:"adapters",previous:{title:"Configuration",permalink:"/docs/adapters/configuration/configuration-adapter"},next:{title:"Distribute",permalink:"/docs/adapters/distribution/distribute-adapter"}},p=[{value:"Adapter workflow",id:"adapter-workflow",children:[]},{value:"Adapter configuration",id:"adapter-configuration",children:[]},{value:"Adapter state",id:"adapter-state",children:[]},{value:"Dependencies and interactions (internal / external)",id:"dependencies-and-interactions-internal--external",children:[]},{value:"Functions description and assumptions / checks",id:"functions-description-and-assumptions--checks",children:[{value:"function submitProposal",id:"function-submitproposal",children:[]},{value:"function sponsorProposal",id:"function-sponsorproposal",children:[]},{value:"function processProposal",id:"function-processproposal",children:[]}]},{value:"Events",id:"events",children:[]}],l={toc:p};function c(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Managing adapter handles the proposal creation, sponsorship and processing of a new adapter including its initial configuration, and permissions."),(0,o.kt)("p",null,"An adapter can be added, removed or replaced in the DAO registry. In order to remove an adapter one must pass the address 0x0 with the adapter id that needs to be removed. In order to add a new adapter one most provide the adapter id, address and access flags. The address of the new adapter can not be a reserved address, and the id must be a known id as defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DaoConstants.sol"),". The replace adapter operation removes the adapter from the registry based on the adapter id parameter, and also adds a new adapter using the same id but with a new address."),(0,o.kt)("h2",{id:"adapter-workflow"},"Adapter workflow"),(0,o.kt)("p",null,"Submit a proposal and check:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if caller is an active member"),(0,o.kt)("li",{parentName:"ul"},"if keys and values have equal length"),(0,o.kt)("li",{parentName:"ul"},"if adapter address is valid"),(0,o.kt)("li",{parentName:"ul"},"if the access flags don't overflow"),(0,o.kt)("li",{parentName:"ul"},"if adapter address is not reserved")),(0,o.kt)("p",null,"If all the requirements pass, then the proposal is subitted to registry and the adapter stores the proposal data."),(0,o.kt)("p",null,"To sponsor a proposal, you need to be an active member, and once sponsored the voting process starts."),(0,o.kt)("p",null,"Once the voting period ends, only a member can process the proposal. The proposal is processed only if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the caller is an active member"),(0,o.kt)("li",{parentName:"ul"},"the has not been processed already"),(0,o.kt)("li",{parentName:"ul"},"the proposal has been sponsored"),(0,o.kt)("li",{parentName:"ul"},"the voting has passed")),(0,o.kt)("h2",{id:"adapter-configuration"},"Adapter configuration"),(0,o.kt)("p",null,"DAORegistry Access Flags: ",(0,o.kt)("inlineCode",{parentName:"p"},"SUBMIT_PROPOSAL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"REPLACE_ADAPTER"),"."),(0,o.kt)("h2",{id:"adapter-state"},"Adapter state"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"proposals"),": All the proposals handled by the adapter per DAO."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ProposalDetails"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"adapterId"),": The id of the adapter to add, remove or replace."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"adapterAddress"),": The address of the new adapter contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keys"),": The configuration keys for the adapter."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values"),": The values to set for the adapter configuration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flags"),": The ACL for the new adapter.")))),(0,o.kt)("h2",{id:"dependencies-and-interactions-internal--external"},"Dependencies and interactions (internal / external)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"DaoRegistry"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Submits/sponsors/processes a proposal."),(0,o.kt)("li",{parentName:"ul"},"Checks if applicant and/or adapter address are not reserved."),(0,o.kt)("li",{parentName:"ul"},"Executes the replaceAdapter call to update the registry."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Voting"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Gets the address that sent the sponsorProposal transaction."),(0,o.kt)("li",{parentName:"ul"},"Starts a new voting for the kick proposal."),(0,o.kt)("li",{parentName:"ul"},"Checks the voting results.")))),(0,o.kt)("h2",{id:"functions-description-and-assumptions--checks"},"Functions description and assumptions / checks"),(0,o.kt)("h3",{id:"function-submitproposal"},"function submitProposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Creates a proposal to replace, remove or add an adapter.\n     * @dev If the adapterAddress is equal to 0x0, the adapterId is removed from the registry if available.\n     * @dev If the adapterAddress is a reserved address, it reverts.\n     * @dev keys and value must have the same length.\n     * @dev proposalId can not be reused.\n     * @param dao The dao address.\n     * @param proposalId The guild kick proposal id.\n     * @param adapterId The adapter id to replace, remove or add.\n     * @param adapterAddress The adapter address to add or replace. Use 0x0 if you want to remove the adapter.\n     * @param keys The configuration keys for the adapter.\n     * @param values The values to set for the adapter configuration.\n     * @param _flags The ACL for the new adapter, up to 2**128-1.\n     */\n    function submitProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        bytes32 adapterId,\n        address adapterAddress,\n        bytes32[] calldata keys,\n        uint256[] calldata values,\n        uint256 _flags\n    ) external override onlyMember(dao)\n")),(0,o.kt)("h3",{id:"function-sponsorproposal"},"function sponsorProposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Sponsor a proposal if the proposal id exists.\n     * @dev Only members are allowed to sponsor proposals.\n     * @param dao The dao address.\n     * @param proposalId The guild kick proposal id.\n     * @param data Additional data that can be used for offchain voting validation.\n     */\n    function sponsorProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        bytes calldata data\n    ) external override onlyMember(dao)\n")),(0,o.kt)("h3",{id:"function-processproposal"},"function processProposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Processes a proposal that was sponsored.\n     * @dev Only members can process a proposal.\n     * @dev Only if the voting pass the proposal is processed.\n     * @dev Reverts when the adapter address is already in use and it is an adapter addition.\n     * @param dao The dao address.\n     * @param proposalId The guild kick proposal id.\n     */\n    function processProposal(DaoRegistry dao, bytes32 proposalId)\n        external\n        override\n        onlyMember(dao)\n\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AdapterRemoved"),": when an adapter is removed from the regitry. Event emitted by the DAO Registry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AdapterAdded"),": when a new adapter is added to the registry. Event emitted by the DAO Registry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ConfigurationUpdated"),": when a new configuration is stored in the registry. Event emitted by the DAO Registry.")))}c.isMDXComponent=!0}}]);