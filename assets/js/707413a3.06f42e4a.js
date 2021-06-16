(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[206],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,v=u["".concat(d,".").concat(g)]||u[g]||l[g]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3896:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={id:"basic-voting-adapter",title:"Basic"},d={unversionedId:"adapters/voting/basic-voting-adapter",id:"adapters/voting/basic-voting-adapter",isDocsHomePage:!1,title:"Basic",description:'This adapter manages on chain "simple" voting.',source:"@site/docs/adapters/voting/Voting.md",sourceDirName:"adapters/voting",slug:"/adapters/voting/basic-voting-adapter",permalink:"/tribute-contracts/docs/adapters/voting/basic-voting-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/adapters/voting/Voting.md",version:"current",frontMatter:{id:"basic-voting-adapter",title:"Basic"},sidebar:"adapters",previous:{title:"NFT Tribute",permalink:"/tribute-contracts/docs/adapters/onboarding/tribute-nft-adapter"},next:{title:"Batch",permalink:"/tribute-contracts/docs/adapters/voting/batch-voting-adapter"}},c=[{value:"Adapter state",id:"adapter-state",children:[]},{value:"Adapter configuration",id:"adapter-configuration",children:[{value:"VotingPeriod = keccak256(&quot;voting.votingPeriod&quot;)",id:"votingperiod--keccak256votingvotingperiod",children:[]},{value:"GracePeriod = keccak256(&quot;voting.gracePeriod&quot;)",id:"graceperiod--keccak256votinggraceperiod",children:[]}]},{value:"Functions description, assumptions, checks, dependencies, interactions and access control",id:"functions-description-assumptions-checks-dependencies-interactions-and-access-control",children:[{value:"function startNewVotingForProposal(DaoRegistry dao, bytes32 proposalId, bytes calldata)",id:"function-startnewvotingforproposaldaoregistry-dao-bytes32-proposalid-bytes-calldata",children:[]},{value:"function getSenderAddress(DaoRegistry, address, bytes memory, address sender) returns (address)",id:"function-getsenderaddressdaoregistry-address-bytes-memory-address-sender-returns-address",children:[]},{value:"function submitVote(DaoRegistry dao, bytes32 proposalId, uint256 voteValue)",id:"function-submitvotedaoregistry-dao-bytes32-proposalid-uint256-votevalue",children:[]},{value:"function voteResult(DaoRegistry dao, bytes32 proposalId) returns (VotingState state)",id:"function-voteresultdaoregistry-dao-bytes32-proposalid-returns-votingstate-state",children:[]}]}],p={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'This adapter manages on chain "simple" voting.'),(0,a.kt)("h2",{id:"adapter-state"},"Adapter state"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Voting {\n  uint256 nbYes;\n  uint256 nbNo;\n  uint256 startingTime;\n  uint256 blockNumber;\n  mapping(address => uint256) votes;\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nbYes: how many yes have been casted"),(0,a.kt)("li",{parentName:"ul"},"nbNo: how many no have been casted"),(0,a.kt)("li",{parentName:"ul"},"startingTime: starting time of the voting process"),(0,a.kt)("li",{parentName:"ul"},"mapping of member => vote to keep track of everybody's vote and know if they have already voted or not")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mapping(address => mapping(bytes32 => Voting)) public votes;"),"\nmapping for each adapter of proposalId => voting state where voting state is"),(0,a.kt)("h2",{id:"adapter-configuration"},"Adapter configuration"),(0,a.kt)("p",null,"Two configurations are possible for the voting adapter:"),(0,a.kt)("h3",{id:"votingperiod--keccak256votingvotingperiod"},'VotingPeriod = keccak256("voting.votingPeriod")'),(0,a.kt)("p",null,"How long after the starting time is the voting valid"),(0,a.kt)("h3",{id:"graceperiod--keccak256votinggraceperiod"},'GracePeriod = keccak256("voting.gracePeriod")'),(0,a.kt)("p",null,"How long after the end of the voting period is the result settled"),(0,a.kt)("h2",{id:"functions-description-assumptions-checks-dependencies-interactions-and-access-control"},"Functions description, assumptions, checks, dependencies, interactions and access control"),(0,a.kt)("h3",{id:"function-startnewvotingforproposaldaoregistry-dao-bytes32-proposalid-bytes-calldata"},"function startNewVotingForProposal(DaoRegistry dao, bytes32 proposalId, bytes calldata)"),(0,a.kt)("p",null,"This is called every time a proposal is being sponsored. This starts the voting process."),(0,a.kt)("p",null,"We assume here that the adapter uses ",(0,a.kt)("inlineCode",{parentName:"p"},"dao.sponsorProposal()")," to make sure it is not called multiple times on the same proposal."),(0,a.kt)("h3",{id:"function-getsenderaddressdaoregistry-address-bytes-memory-address-sender-returns-address"},"function getSenderAddress(DaoRegistry, address, bytes memory, address sender) returns (address)"),(0,a.kt)("p",null,"This function allows the voting adapter determine who is signing the message based on the data sent.\nIn the case of Voting, it's always ",(0,a.kt)("inlineCode",{parentName:"p"},"msg.sender"),". But for other implementations, signed data could be used to determine it and let a relayer do the call."),(0,a.kt)("h3",{id:"function-submitvotedaoregistry-dao-bytes32-proposalid-uint256-votevalue"},"function submitVote(DaoRegistry dao, bytes32 proposalId, uint256 voteValue)"),(0,a.kt)("p",null,"Casts a vote. Only a member can submit a vote."),(0,a.kt)("p",null,"We check that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The proposal has been sponsored"),(0,a.kt)("li",{parentName:"ul"},"The proposal has not been processed yet"),(0,a.kt)("li",{parentName:"ul"},"The vote has started (startingTime > 0)"),(0,a.kt)("li",{parentName:"ul"},"The vote has not ended yet"),(0,a.kt)("li",{parentName:"ul"},"The member has not voted yet"),(0,a.kt)("li",{parentName:"ul"},"The vote is valid (only either yes or no)")),(0,a.kt)("h3",{id:"function-voteresultdaoregistry-dao-bytes32-proposalid-returns-votingstate-state"},"function voteResult(DaoRegistry dao, bytes32 proposalId) returns (VotingState state)"),(0,a.kt)("p",null,"Gets back the vote result for a certain proposal.\nIf the vote has not started yet, return ",(0,a.kt)("inlineCode",{parentName:"p"},"NOT_STARTED"),".\nIf the vote is still on going (after starting time but before startingTime + voting period) return ",(0,a.kt)("inlineCode",{parentName:"p"},"IN_PROGRESS"),".\nIf the vote has ended but is still in grace period, return ",(0,a.kt)("inlineCode",{parentName:"p"},"GRACE_PERIOD"),".\nIf none of the above and more yes votes than no votes, return ",(0,a.kt)("inlineCode",{parentName:"p"},"PASS"),".\nIf more no votes than yes votes, return ",(0,a.kt)("inlineCode",{parentName:"p"},"NOT_PASS"),".\nIf yes votes equals no votes, return ",(0,a.kt)("inlineCode",{parentName:"p"},"TIE"),"."))}l.isMDXComponent=!0}}]);