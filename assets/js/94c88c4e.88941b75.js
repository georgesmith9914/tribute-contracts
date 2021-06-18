(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[519],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6374:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],s={id:"configuration-adapter",title:"Configuration"},l={unversionedId:"adapters/configuration/configuration-adapter",id:"adapters/configuration/configuration-adapter",isDocsHomePage:!1,title:"Configuration",description:"The Configuration adapter manages storing and retrieving per-DAO settings required by shared adapters.",source:"@site/docs/adapters/configuration/Configuration.md",sourceDirName:"adapters/configuration",slug:"/adapters/configuration/configuration-adapter",permalink:"/tribute-contracts/docs/adapters/configuration/configuration-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/adapters/configuration/Configuration.md",version:"current",frontMatter:{id:"configuration-adapter",title:"Configuration"},sidebar:"docs",previous:{title:"Overview",permalink:"/tribute-contracts/docs/adapters"},next:{title:"Managing",permalink:"/tribute-contracts/docs/adapters/configuration/managing-adapter"}},c=[{value:"Workflows",id:"workflows",children:[]},{value:"Adapter state",id:"adapter-state",children:[{value:"Configuration",id:"configuration",children:[]}]},{value:"Dependencies and interactions (internal / external)",id:"dependencies-and-interactions-internal--external",children:[]},{value:"Functions description and assumptions / checks",id:"functions-description-and-assumptions--checks",children:[{value:"function submitProposal(DaoRegistry dao, bytes32 proposalId, bytes32[] calldata keys, uint256[] calldata values, bytes calldata data)",id:"function-submitproposaldaoregistry-dao-bytes32-proposalid-bytes32-calldata-keys-uint256-calldata-values-bytes-calldata-data",children:[]},{value:"function processProposal(DaoRegistry dao, bytes32 proposalId)",id:"function-processproposaldaoregistry-dao-bytes32-proposalid",children:[]}]}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Configuration adapter manages storing and retrieving per-DAO settings required by shared adapters."),(0,o.kt)("p",null,"Some adapters have configurable settings which must be stored for each DAO instance that uses the shared adapter."),(0,o.kt)("h2",{id:"workflows"},"Workflows"),(0,o.kt)("p",null,"Submit proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check that caller is valid member"),(0,o.kt)("li",{parentName:"ul"},"check that keys/values are same length"),(0,o.kt)("li",{parentName:"ul"},"check that proposalId is unique"),(0,o.kt)("li",{parentName:"ul"},"submit proposal to DAO"),(0,o.kt)("li",{parentName:"ul"},"create and store configuration structure")),(0,o.kt)("p",null,"Sponsor module change request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check that caller is valid member"),(0,o.kt)("li",{parentName:"ul"},"initiate vote")),(0,o.kt)("p",null,"Process proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check that caller is valid member"),(0,o.kt)("li",{parentName:"ul"},"check that proposalId exists"),(0,o.kt)("li",{parentName:"ul"},"check that proposal passed"),(0,o.kt)("li",{parentName:"ul"},"for each key and value, set it in the configuration for this DAO"),(0,o.kt)("li",{parentName:"ul"},"process proposal")),(0,o.kt)("h2",{id:"adapter-state"},"Adapter state"),(0,o.kt)("p",null,"The adapter stores the proposed configuration changes."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"DAORegistry Access Flags: ",(0,o.kt)("inlineCode",{parentName:"p"},"SUBMIT_PROPOSAL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SET_CONFIGURATION"),"."),(0,o.kt)("h4",{id:"keys"},"keys"),(0,o.kt)("p",null,"The array of keys to set in the configuration."),(0,o.kt)("h4",{id:"values"},"values"),(0,o.kt)("p",null,"The array of values to set in the configuration."),(0,o.kt)("h2",{id:"dependencies-and-interactions-internal--external"},"Dependencies and interactions (internal / external)"),(0,o.kt)("h2",{id:"functions-description-and-assumptions--checks"},"Functions description and assumptions / checks"),(0,o.kt)("h3",{id:"function-submitproposaldaoregistry-dao-bytes32-proposalid-bytes32-calldata-keys-uint256-calldata-values-bytes-calldata-data"},"function submitProposal(DaoRegistry dao, bytes32 proposalId, bytes32[] calldata keys, uint256[] calldata values, bytes calldata data)"),(0,o.kt)("p",null,"Creates and sponsors a new configuration proposal on behalf of the member calling the function."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"dao")," is the DAO instance to be configured\n",(0,o.kt)("strong",{parentName:"p"},"proposalId")," is the ID chosen for this configuration proposal, must be unique\n",(0,o.kt)("strong",{parentName:"p"},"keys")," the configuration keys to set\n",(0,o.kt)("strong",{parentName:"p"},"values")," the configuration values to set, must be same length as keys\n",(0,o.kt)("strong",{parentName:"p"},"data")),(0,o.kt)("h3",{id:"function-processproposaldaoregistry-dao-bytes32-proposalid"},"function processProposal(DaoRegistry dao, bytes32 proposalId)"),(0,o.kt)("p",null,"Processes a previously created configuration proposal by applying the configuration to the DAO."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"dao")," is the DAO instance to be configured\n",(0,o.kt)("strong",{parentName:"p"},"proposalId")," is the ID of a previously created and sponsored configuration proposal which has passed the vote"))}u.isMDXComponent=!0}}]);