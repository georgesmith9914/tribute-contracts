(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[840],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3068:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={id:"distribute-adapter",title:"Distribute"},l={unversionedId:"adapters/distribution/distribute-adapter",id:"adapters/distribution/distribute-adapter",isDocsHomePage:!1,title:"Distribute",description:"The Distribute Adapter provides features in which the DAO members can receive funds from the DAO for any given reason. A good example of that is when the members collectively agree to payout dividends to one or all member of the DAO, when that happens they can submit a proposal for voting, and if the proposal pass the amount is distributed equally to the members.",source:"@site/docs/adapters/distribution/Distribute.md",sourceDirName:"adapters/distribution",slug:"/adapters/distribution/distribute-adapter",permalink:"/docs/adapters/distribution/distribute-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/adapters/distribution/Distribute.md",version:"current",frontMatter:{id:"distribute-adapter",title:"Distribute"},sidebar:"adapters",previous:{title:"Managing",permalink:"/docs/adapters/configuration/managing-adapter"},next:{title:"Withdraw",permalink:"/docs/adapters/distribution/withdraw-adapter"}},d=[{value:"Adapter workflow",id:"adapter-workflow",children:[]},{value:"Adapter configuration",id:"adapter-configuration",children:[]},{value:"Adapter state",id:"adapter-state",children:[]},{value:"Dependencies and interactions (internal / external)",id:"dependencies-and-interactions-internal--external",children:[]},{value:"Functions description and assumptions / checks",id:"functions-description-and-assumptions--checks",children:[{value:"receive() external payable",id:"receive-external-payable",children:[]},{value:"function submitProposal",id:"function-submitproposal",children:[]},{value:"_submitProposal",id:"_submitproposal",children:[]},{value:"processProposal",id:"processproposal",children:[]},{value:"distribute",id:"distribute",children:[]}]},{value:"Events",id:"events",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Distribute Adapter provides features in which the DAO members can receive funds from the DAO for any given reason. A good example of that is when the members collectively agree to payout dividends to one or all member of the DAO, when that happens they can submit a proposal for voting, and if the proposal pass the amount is distributed equally to the members."),(0,i.kt)("h2",{id:"adapter-workflow"},"Adapter workflow"),(0,i.kt)("p",null,"The token distribution starts when a member submits a proposal to distribute a certain amount of a token for one or all members of the DAO. It is important to mention that the distribution can only happen for 1 member or for all, there is no way to distribute the tokens for a subset of the DAO members."),(0,i.kt)("p",null,"Once the distribution proposal gets created, it is open for voting, and sponsored by the message sender. The adapter tracks all the distributions that have been executed already by each DAO, and also tracks the current distributions that is in progress - this is done to ensure the distributions are executed sequentially per DAO."),(0,i.kt)("p",null,"Once the distribution proposal has passed, the other members have to start the actual distribution process (function ",(0,i.kt)("inlineCode",{parentName:"p"},"processProposal"),"). In this process the member indicated in the proposal or each member of the DAO will receive, based on the current number of holding units, a token amount in the internal bank account, so it can be withdraw later on. This process does not changes the number of units of the members, it just uses it to calculate the fair amount to distribute for each member. After that, the distribution proposal gets updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed"),"."),(0,i.kt)("h2",{id:"adapter-configuration"},"Adapter configuration"),(0,i.kt)("p",null,"The member needs to have at least 1 unit to be able to receive funds from a distribution proposal."),(0,i.kt)("p",null,"DAORegistry Access Flags: ",(0,i.kt)("inlineCode",{parentName:"p"},"SUBMIT_PROPOSAL"),"."),(0,i.kt)("p",null,"Bank Extension Access Flags: ",(0,i.kt)("inlineCode",{parentName:"p"},"INTERNAL_TRANSFER"),"."),(0,i.kt)("h2",{id:"adapter-state"},"Adapter state"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DistributionStatus"),": The distribution status (",(0,i.kt)("inlineCode",{parentName:"li"},"Not Started"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"In Progress"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Done"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Distribution"),": State of the proposal.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token"),": The distribution token in which the members should receive the funds. Must be supported by the DAO."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount"),": The amount to distribute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status"),": The distribution status."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unitHolderAddr"),": The member address that should receive the funds, if 0x0, the funds will be distributed to all members of the DAO."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentIndex"),": Current iteration index to control the cached for-loop."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blockNumber"),": The block number in which the proposal has been created."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"distributions"),": Keeps track of all the distributions executed per DAO."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ongoingDistributions"),": Keeps track of the latest ongoing distribution proposal per DAO to ensure only 1 proposal can be processed at a time.")),(0,i.kt)("h2",{id:"dependencies-and-interactions-internal--external"},"Dependencies and interactions (internal / external)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"BankExtension"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"transfers the funds from the DAO account to the member's account."),(0,i.kt)("li",{parentName:"ul"},"gets the available tokens."),(0,i.kt)("li",{parentName:"ul"},"gets the historical balance of the guild account."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"DaoRegistry"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"checks if the message sender is actually a member of the DAO."),(0,i.kt)("li",{parentName:"ul"},"checks if the unit holder is actually a member of the DAO."),(0,i.kt)("li",{parentName:"ul"},"process the distribution proposal."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Voting"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"starts a new voting for the distribution proposal."),(0,i.kt)("li",{parentName:"ul"},"checks the voting results."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"FairShareHelper"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"to calculate the amount of funds to be distributed to the member based on the current number of units of the member - taking into account the historical balance of the GUILD.")))),(0,i.kt)("h2",{id:"functions-description-and-assumptions--checks"},"Functions description and assumptions / checks"),(0,i.kt)("h3",{id:"receive-external-payable"},"receive() external payable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice default fallback function to prevent from sending ether to the contract.\n     */\n    receive() external payable\n")),(0,i.kt)("h3",{id:"function-submitproposal"},"function submitProposal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Creates a distribution proposal for one or all members of the DAO, opens it for voting, and sponsors it.\n     * @dev Only tokens that are allowed by the Bank are accepted.\n     * @dev If the unitHolderAddr is 0x0, then the funds will be distributed to all members of the DAO.\n     * @dev Proposal ids can not be reused.\n     * @dev The amount must be greater than zero.\n     * @param dao The dao address.\n     * @param proposalId The distribution proposal id.\n     * @param unitHolderAddr The member address that should receive the funds, if 0x0, the funds will be distributed to all members of the DAO.\n     * @param token The distribution token in which the members should receive the funds. Must be supported by the DAO.\n     * @param amount The amount to distribute.\n     * @param data Additional information related to the distribution proposal.\n     */\n    function submitProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        address unitHolderAddr,\n        address token,\n        int256 amount,\n        bytes calldata data\n    ) external\n\n")),(0,i.kt)("h3",{id:"_submitproposal"},"_","submitProposal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Creates the proposal, starts the voting process and sponsors the proposal.\n     * @dev If the unit holder address was provided in the params, the unit holder must have enough units to receive the funds.\n     */\n    function _submitProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        address unitHolderAddr,\n        address token,\n        uint256 amount,\n        bytes calldata data,\n        address submittedBy\n    ) internal onlyMember2(dao, submittedBy)\n")),(0,i.kt)("h3",{id:"processproposal"},"processProposal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Process the distribution proposal, calculates the fair amount of funds to distribute to the members based on the units holdings.\n     * @dev A distribution proposal must be in progress.\n     * @dev Only one proposal per DAO can be executed at time.\n     * @dev Only active members can receive funds.\n     * @dev Only proposals that passed the voting can be set to In Progress status.\n     * @param dao The dao address.\n     * @param proposalId The distribution proposal id.\n     */\n    function processProposal(DaoRegistry dao, bytes32 proposalId)\n        external\n\n")),(0,i.kt)("h3",{id:"distribute"},"distribute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"     /**\n     * @notice Transfers the funds from the Guild account to the member's internal accounts.\n     * @notice The amount of funds is caculated using the historical number of units of each member.\n     * @dev A distribution proposal must be in progress.\n     * @dev Only proposals that have passed the voting can be completed.\n     * @dev Only active members can receive funds.\n     * @param dao The dao address.\n     * @param toIndex The index to control the cached for-loop.\n     */\n    function distribute(DaoRegistry dao, uint256 toIndex) external override\n\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"When the distribution process is completed the ",(0,i.kt)("inlineCode",{parentName:"p"},"Distributed")," event is emitted with the ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"unitHolder")," parameters. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"unitHolder")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x0"),", the amount was distributed to ",(0,i.kt)("strong",{parentName:"p"},"all")," members of the DAO, otherwise it was distributed to the unit holder only."))}u.isMDXComponent=!0}}]);