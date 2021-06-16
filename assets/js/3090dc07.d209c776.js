(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[485],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8869:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={id:"tribute-adapter",title:"ERC20 Tribute"},l={unversionedId:"adapters/onboarding/tribute-adapter",id:"adapters/onboarding/tribute-adapter",isDocsHomePage:!1,title:"ERC20 Tribute",description:"The Tribute adapter allows potential and existing DAO members to contribute any amount of ERC-20 tokens to the DAO in exchange for any amount of DAO internal tokens (e.g., UNITS or LOOT tokens already registered with the DAO Bank). If the proposal passes, the requested internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one) and the tokens provided as tribute are transferred to the Bank extension.",source:"@site/docs/adapters/onboarding/Tribute.md",sourceDirName:"adapters/onboarding",slug:"/adapters/onboarding/tribute-adapter",permalink:"/docs/adapters/onboarding/tribute-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/adapters/onboarding/Tribute.md",version:"current",frontMatter:{id:"tribute-adapter",title:"ERC20 Tribute"},sidebar:"adapters",previous:{title:"ERC20/ETH",permalink:"/docs/adapters/onboarding/onboarding-adapter"},next:{title:"NFT Tribute",permalink:"/docs/adapters/onboarding/tribute-nft-adapter"}},p=[{value:"Adapter workflow",id:"adapter-workflow",children:[]},{value:"Adapter configuration",id:"adapter-configuration",children:[]},{value:"Adapter state",id:"adapter-state",children:[]},{value:"Dependencies and interactions (internal / external)",id:"dependencies-and-interactions-internal--external",children:[]},{value:"Functions description and assumptions / checks",id:"functions-description-and-assumptions--checks",children:[{value:"receive() external payable",id:"receive-external-payable",children:[]},{value:"function configureDao",id:"function-configuredao",children:[]},{value:"function submitProposal",id:"function-submitproposal",children:[]},{value:"function processProposal",id:"function-processproposal",children:[]}]},{value:"Events",id:"events",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Tribute adapter allows potential and existing DAO members to contribute any amount of ERC-20 tokens to the DAO in exchange for any amount of DAO internal tokens (e.g., UNITS or LOOT tokens already registered with the DAO Bank). If the proposal passes, the requested internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one) and the tokens provided as tribute are transferred to the Bank extension."),(0,o.kt)("p",null,"The Tribute adapter is similar to the Onboarding adapter in that both allow for joining the DAO (or increasing a stake in the DAO) through the exchange of contributed assets for DAO internal tokens. However, there are key differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Onboarding adapter allows both Ether and ERC-20 tokens to be contributed. The Tribute adapter accepts only ERC-20 tokens.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Onboarding adapter mints a fixed amount of internal tokens to the applicant based on the amount of assets contributed. In other words, an onboarding proposal does not specify the amount of internal tokens requested. That is calculated from the DAO's configurations and the amount of assets contributed. The Tribute adapter has more open-ended proposal parameters. The proposer can request any amount of internal tokens to be minted in exchange for any amount of any ERC-20 tokens contributed. The worthiness of that transfer proposal for the DAO is left to the vote of its members."))),(0,o.kt)("h2",{id:"adapter-workflow"},"Adapter workflow"),(0,o.kt)("p",null,"A tribute is made by a member first submitting a proposal specifying (1) the applicant who wishes to join the DAO (or increase his stake in the DAO), (2) the amount and type of internal tokens the applicant desires (e.g., member UNITS), and (3) the amount, type, and owner of ERC-20 tokens that will transfer to the DAO in exchange for those internal tokens. The applicant and actual owner of the ERC-20 tokens can be separate accounts (e.g., the token owner is providing tribute on behalf of the applicant). The internal token type requested must be already registered with the DAO Bank and will usually be pre-defined UNITS or LOOT tokens in the DAO. The proposal submission does not actually transfer the ERC-20 tokens from its owner. That occurs only after the proposal passes and is processed."),(0,o.kt)("p",null,"The proposal is also sponsored in the same transaction when it is submitted. When a DAO member sponsors the proposal, the voting period begins allowing members to vote for or against the proposal. Only a member can sponsor the proposal."),(0,o.kt)("p",null,"After the voting period is done along with its subsequent grace period, the proposal can be processed. Any account can process the proposal. However, prior to processing a passed proposal, the owner of the ERC-20 tribute tokens must first separately ",(0,o.kt)("inlineCode",{parentName:"p"},"approve")," the Tribute adapter as spender of the tokens provided as tribute. Upon processing, if the vote has passed, the requested internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one). The tribute token is registered with the DAO Bank (if not already registered), and the amount of tribute tokens are added to the Guild balance and transferred from the token owner to the Bank extension."),(0,o.kt)("p",null,"Upon processing, if the vote has failed (i.e., more NO votes then YES votes or a tie), no further action is taken (the owner of the ERC-20 tribute tokens still retains ownership of the tokens)."),(0,o.kt)("h2",{id:"adapter-configuration"},"Adapter configuration"),(0,o.kt)("p",null,"A DAO Bank extension must exist and be configured with proper access for this adapter."),(0,o.kt)("p",null,"The DAO internal tokens to be minted to the applicant must be registered with the DAO Bank."),(0,o.kt)("p",null,"DAORegistry Access Flags: ",(0,o.kt)("inlineCode",{parentName:"p"},"SUBMIT_PROPOSAL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW_MEMBER"),"."),(0,o.kt)("p",null,"Bank Extension Access Flags: ",(0,o.kt)("inlineCode",{parentName:"p"},"ADD_TO_BALANCE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"REGISTER_NEW_TOKEN"),"."),(0,o.kt)("h2",{id:"adapter-state"},"Adapter state"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"proposals"),": All tribute proposals handled by each DAO."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ProposalDetails"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),": The proposal id."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"applicant"),": The applicant address (who will receive the DAO internal tokens and become a member; this address may be different than the actual owner of the ERC-20 tokens being provided as tribute)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenToMint"),": The address of the DAO internal token to be minted to the applicant."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requestAmount"),": The amount requested of DAO internal tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token"),": The address of the ERC-20 tokens that will be transferred to the DAO in exchange for DAO internal tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tributeAmount"),": The amount of tribute tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tributeTokenOwner"),": The owner of the ERC-20 tokens being provided as tribute.")))),(0,o.kt)("h2",{id:"dependencies-and-interactions-internal--external"},"Dependencies and interactions (internal / external)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"BankExtension"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Registers DAO internal token to be minted to the applicant in adapter configuration."),(0,o.kt)("li",{parentName:"ul"},"Checks if tribute token (ERC-20) is registered with the DAO Bank."),(0,o.kt)("li",{parentName:"ul"},"Registers tribute token for a passed proposal (if not already registered)."),(0,o.kt)("li",{parentName:"ul"},"Adds to the Guild balance the amount of tribute tokens."),(0,o.kt)("li",{parentName:"ul"},"Checks if the DAO internal token to be minted to the applicant is registered with the DAO Bank."),(0,o.kt)("li",{parentName:"ul"},"Adds to the applicant balance the amount of requested DAO internal tokens."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"DaoRegistry"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Gets Bank extension address."),(0,o.kt)("li",{parentName:"ul"},"Checks if applicant address is not reserved."),(0,o.kt)("li",{parentName:"ul"},"Gets Voting adapter address."),(0,o.kt)("li",{parentName:"ul"},"Submits/sponsors/processes the tribute proposal."),(0,o.kt)("li",{parentName:"ul"},"Checks if proposal flag is ",(0,o.kt)("inlineCode",{parentName:"li"},"SPONSORED"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"PROCESSED"),"."),(0,o.kt)("li",{parentName:"ul"},"Creates a new member entry (if applicant is not already a member)."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Voting"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Gets address that sent the sponsorProposal transaction."),(0,o.kt)("li",{parentName:"ul"},"Starts new voting for the tribute proposal."),(0,o.kt)("li",{parentName:"ul"},"Checks the voting results.")))),(0,o.kt)("h2",{id:"functions-description-and-assumptions--checks"},"Functions description and assumptions / checks"),(0,o.kt)("h3",{id:"receive-external-payable"},"receive() external payable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice default fallback function to prevent from sending ether to the contract.\n     */\n    receive() external payable\n")),(0,o.kt)("h3",{id:"function-configuredao"},"function configureDao"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Configures the adapter for a particular DAO.\n     * @notice Registers the DAO internal token with the DAO Bank.\n     * @dev Only adapters registered to the DAO can execute the function call (or if the DAO is in creation mode).\n     * @dev A DAO Bank extension must exist and be configured with proper access for this adapter.\n     * @param dao The DAO address.\n     * @param tokenAddrToMint The internal token address to be registered with the DAO Bank.\n     */\n    function configureDao(DaoRegistry dao, address tokenAddrToMint)\n        external\n        onlyAdapter(dao)\n")),(0,o.kt)("h3",{id:"function-submitproposal"},"function submitProposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Creates and sponsors a tribute proposal to start the voting process.\n     * @dev Applicant address must not be reserved.\n     * @dev Only members of the DAO can sponsor a tribute proposal.\n     * @param dao The DAO address.\n     * @param proposalId The proposal id (managed by the client).\n     * @param applicant The applicant address (who will receive the DAO internal tokens and become a member).\n     * @param tokenToMint The address of the DAO internal token to be minted to the applicant.\n     * @param requestAmount The amount requested of DAO internal tokens.\n     * @param tokenAddr The address of the ERC-20 tokens that will be transferred to the DAO in exchange for DAO internal tokens.\n     * @param tributeAmount The amount of tribute tokens.\n     * @param tributeTokenOwner The owner of the ERC-20 tokens being provided as tribute.\n     * @param data Additional information related to the tribute proposal.\n     */\n    function submitProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        address applicant,\n        address tokenToMint,\n        uint256 requestAmount,\n        address tokenAddr,\n        uint256 tributeAmount,\n        address tributeTokenOwner,\n        bytes memory data\n    ) external reentrancyGuard(dao)\n")),(0,o.kt)("h3",{id:"function-processproposal"},"function processProposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Processes a tribute proposal to handle minting and exchange of DAO internal tokens for tribute tokens (passed vote).\n     * @dev Proposal id must exist.\n     * @dev Only proposals that have not already been processed are accepted.\n     * @dev Only sponsored proposals with completed voting are accepted.\n     * @dev The owner of the ERC-20 tokens provided as tribute must first separately `approve` the adapter as spender of those tokens (so the tokens can be transferred for a passed vote).\n     * @dev ERC-20 tribute tokens must be registered with the DAO Bank (a passed proposal will check and register the token if needed).\n     * @param dao The DAO address.\n     * @param proposalId The proposal id.\n     */\n    function processProposal(DaoRegistry dao, bytes32 proposalId)\n        external\n        reentrancyGuard(dao)\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"No events are emitted from this adapter."))}u.isMDXComponent=!0}}]);