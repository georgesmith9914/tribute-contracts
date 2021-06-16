(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[367],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9708:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l},default:function(){return c}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),s=["components"],i={id:"batch-voting-adapter",title:"Batch"},d={unversionedId:"adapters/voting/batch-voting-adapter",id:"adapters/voting/batch-voting-adapter",isDocsHomePage:!1,title:"Batch",description:"This is another voting adapter that uses the same format used in OffchainVoting but instead of computing the result offchain is doing all the work on chain.",source:"@site/docs/adapters/voting/BatchVoting.md",sourceDirName:"adapters/voting",slug:"/adapters/voting/batch-voting-adapter",permalink:"/tribute-contracts/docs/adapters/voting/batch-voting-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/adapters/voting/BatchVoting.md",version:"current",frontMatter:{id:"batch-voting-adapter",title:"Batch"},sidebar:"adapters",previous:{title:"Basic",permalink:"/tribute-contracts/docs/adapters/voting/basic-voting-adapter"},next:{title:"Offchain",permalink:"/tribute-contracts/docs/adapters/voting/offchain-voting-adapter"}},l=[{value:"Adapter workflow",id:"adapter-workflow",children:[]},{value:"Adapter configuration",id:"adapter-configuration",children:[]},{value:"Adapter state",id:"adapter-state",children:[]},{value:"Dependencies and interactions (internal / external)",id:"dependencies-and-interactions-internal--external",children:[]},{value:"Functions description and assumptions / checks",id:"functions-description-and-assumptions--checks",children:[{value:"function submitVoteResult(DaoRegistry dao, bytes32 proposalId, VoteEntry[] memory votes)",id:"function-submitvoteresultdaoregistry-dao-bytes32-proposalid-voteentry-memory-votes",children:[]},{value:"function getAdapterName()",id:"function-getadaptername",children:[]},{value:"function processVotes(DaoRegistry dao, bytes32 proposalId, VoteEntry[] memory entries)",id:"function-processvotesdaoregistry-dao-bytes32-proposalid-voteentry-memory-entries",children:[]},{value:"function validateVote(DaoRegistry dao, BankExtension bank, address actionId, uint256 snapshot, bytes32 proposalHash, address previousAddress, VoteEntry memory entry)",id:"function-validatevotedaoregistry-dao-bankextension-bank-address-actionid-uint256-snapshot-bytes32-proposalhash-address-previousaddress-voteentry-memory-entry",children:[]},{value:"function getSenderAddress(DaoRegistry dao, address actionId, bytes memory data,address)",id:"function-getsenderaddressdaoregistry-dao-address-actionid-bytes-memory-dataaddress",children:[]},{value:"function startNewVotingForProposal(DaoRegistry dao, bytes32 proposalId, bytes memory data)",id:"function-startnewvotingforproposaldaoregistry-dao-bytes32-proposalid-bytes-memory-data",children:[]},{value:"function voteResult(DaoRegistry dao, bytes32 proposalId)",id:"function-voteresultdaoregistry-dao-bytes32-proposalid",children:[]}]},{value:"Events",id:"events",children:[{value:"NewVoteResult(address dao, address actionId, uint256 nbYes, uint256 nbNo)",id:"newvoteresultaddress-dao-address-actionid-uint256-nbyes-uint256-nbno",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is another voting adapter that uses the same format used in OffchainVoting but instead of computing the result offchain is doing all the work on chain."),(0,r.kt)("p",null,"This means that the gas cost is O(nb votes) but does not need any challenge mechanism."),(0,r.kt)("h2",{id:"adapter-workflow"},"Adapter workflow"),(0,r.kt)("p",null,"The workflow is the same as for Offchain voting minus the challenge part."),(0,r.kt)("p",null,"startNewVotingForProposal starts a voting session\nThen all the votes happen offchain in snapshot\nOnce the votes are done, the client prepares a list of all the votes and sends it to submitVoteResult"),(0,r.kt)("p",null,"While processing the votes we check that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the signature is correct"),(0,r.kt)("li",{parentName:"ul"},"the vote was for this particular proposal"),(0,r.kt)("li",{parentName:"ul"},"the member addresses are in order and with no duplicate")),(0,r.kt)("p",null,"From there, the vote enters grace period if potential new votes could change the result and just resolves the vote otherwise."),(0,r.kt)("h2",{id:"adapter-configuration"},"Adapter configuration"),(0,r.kt)("p",null,"the two configurations for BatchVoting are ",(0,r.kt)("inlineCode",{parentName:"p"},"Voting period")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"Grace period")),(0,r.kt)("h2",{id:"adapter-state"},"Adapter state"),(0,r.kt)("p",null,'The adapter keeps track of each vote "session" for each dao & proposalId.\nThe session has the following properties:\n',(0,r.kt)("inlineCode",{parentName:"p"},"uint256 snapshot")," what snapshot (block number) is used for this vote\n",(0,r.kt)("inlineCode",{parentName:"p"},"uint256 nbYes")," how many yes votes have been reported\n",(0,r.kt)("inlineCode",{parentName:"p"},"uint256 nbNo")," how many no votes have been reported\n",(0,r.kt)("inlineCode",{parentName:"p"},"address actionId")," which actionId (adapter address) has created the vote session\n",(0,r.kt)("inlineCode",{parentName:"p"},"bytes32 proposalHash")," the proposal hash\n",(0,r.kt)("inlineCode",{parentName:"p"},"uint256 startingTime")," when did the vote start\n",(0,r.kt)("inlineCode",{parentName:"p"},"uint256 gracePeriodStartingTime")," when did we enter the grace period"),(0,r.kt)("h2",{id:"dependencies-and-interactions-internal--external"},"Dependencies and interactions (internal / external)"),(0,r.kt)("p",null,"BatchVoting interacts with Bank extension and DaoRegistry to get information about the member voting.\nThe info is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"its delegate key at the time of voting"),(0,r.kt)("li",{parentName:"ul"},"how many units does the member have")),(0,r.kt)("h2",{id:"functions-description-and-assumptions--checks"},"Functions description and assumptions / checks"),(0,r.kt)("p",null,"Describe the public and private functions signatures with proper documentation and clearly explain what each function does. Specify what are expected the arguments and pre-conditions to execute the functions. Also, provide what is the expected outcome."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("h3",{id:"function-submitvoteresultdaoregistry-dao-bytes32-proposalid-voteentry-memory-votes"},"function submitVoteResult(DaoRegistry dao, bytes32 proposalId, VoteEntry[] memory votes)"),(0,r.kt)("p",null,"this function submits a vote result for a certain proposal."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It first processes the votes"),(0,r.kt)("li",{parentName:"ul"},"If the result has more weight than the previous one and the vote is still going on, update the result"),(0,r.kt)("li",{parentName:"ul"},"If the result has changed from before (pass -> fail or fail -> pass), update the start of grace period to now")),(0,r.kt)("h3",{id:"function-getadaptername"},"function getAdapterName()"),(0,r.kt)("p",null,'returns the voting adapter name "BatchVotingContract"'),(0,r.kt)("h3",{id:"function-processvotesdaoregistry-dao-bytes32-proposalid-voteentry-memory-entries"},"function processVotes(DaoRegistry dao, bytes32 proposalId, VoteEntry[] memory entries)"),(0,r.kt)("p",null,"Process all the votes."),(0,r.kt)("p",null,"For each entry, it validates the vote and then computes the result."),(0,r.kt)("h3",{id:"function-validatevotedaoregistry-dao-bankextension-bank-address-actionid-uint256-snapshot-bytes32-proposalhash-address-previousaddress-voteentry-memory-entry"},"function validateVote(DaoRegistry dao, BankExtension bank, address actionId, uint256 snapshot, bytes32 proposalHash, address previousAddress, VoteEntry memory entry)"),(0,r.kt)("p",null,"It validates the vote entry.\nIt does the following checks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"checks that the memberAddress is the one who signed the vote (or its delegate key)"),(0,r.kt)("li",{parentName:"ul"},'checks that the previous member address is "before" (hex order) the current one'),(0,r.kt)("li",{parentName:"ul"},"checks that the vote is actually for this proposal")),(0,r.kt)("p",null,"If it is all good, returns the amount of units the member has at that point in time"),(0,r.kt)("h3",{id:"function-getsenderaddressdaoregistry-dao-address-actionid-bytes-memory-dataaddress"},"function getSenderAddress(DaoRegistry dao, address actionId, bytes memory data,address)"),(0,r.kt)("p",null,"returns the address that has signed the proposal hash"),(0,r.kt)("h3",{id:"function-startnewvotingforproposaldaoregistry-dao-bytes32-proposalid-bytes-memory-data"},"function startNewVotingForProposal(DaoRegistry dao, bytes32 proposalId, bytes memory data)"),(0,r.kt)("p",null,"Starts a new voting session.\nIt first decode the proposal data, then builds the proposal hash.\nFrom there, it checks that the signature is for this hash and from an active member.\nIt also checks that the block number is not 0 and is not in the future"),(0,r.kt)("p",null,"if all checks out, we write the actionId (msg.sender), startingTime (block.timestamp), snapshot and proposal hash into the voting session struct"),(0,r.kt)("h3",{id:"function-voteresultdaoregistry-dao-bytes32-proposalid"},"function voteResult(DaoRegistry dao, bytes32 proposalId)"),(0,r.kt)("p",null,"returns the vote status."),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"newvoteresultaddress-dao-address-actionid-uint256-nbyes-uint256-nbno"},"NewVoteResult(address dao, address actionId, uint256 nbYes, uint256 nbNo)"),(0,r.kt)("p",null,"is emitted when a new vote result has been submitted"))}c.isMDXComponent=!0}}]);