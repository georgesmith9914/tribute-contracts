(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3851],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),_=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=_(e.components);return i.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=_(n),c=r,s=h["".concat(d,".").concat(c)]||h[c]||k[c]||o;return n?i.createElement(s,a(a({ref:t},m),{},{components:n})):i.createElement(s,a({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var _=2;_<o;_++)a[_]=n[_];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7520:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return _},default:function(){return k}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=["components"],l={id:"token-holder-filter",title:"TokenHolder_filter"},d={unversionedId:"schema/inputs/token-holder-filter",id:"schema/inputs/token-holder-filter",isDocsHomePage:!1,title:"TokenHolder_filter",description:"No description",source:"@site/docs/schema/inputs/token-holder-filter.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/token-holder-filter",permalink:"/tribute-contracts/docs/schema/inputs/token-holder-filter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/inputs/token-holder-filter.mdx",version:"current",frontMatter:{id:"token-holder-filter",title:"TokenHolder_filter"}},_=[{value:"Fields",id:"fields",children:[]}],m={toc:_};function k(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TokenHolder_filter {\n  id: ID\n  id_not: ID\n  id_gt: ID\n  id_lt: ID\n  id_gte: ID\n  id_lte: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  member: String\n  member_not: String\n  member_gt: String\n  member_lt: String\n  member_gte: String\n  member_lte: String\n  member_in: [String!]\n  member_not_in: [String!]\n  member_contains: String\n  member_not_contains: String\n  member_starts_with: String\n  member_not_starts_with: String\n  member_ends_with: String\n  member_not_ends_with: String\n  balance: BigInt\n  balance_not: BigInt\n  balance_gt: BigInt\n  balance_lt: BigInt\n  balance_gte: BigInt\n  balance_lte: BigInt\n  balance_in: [BigInt!]\n  balance_not_in: [BigInt!]\n  token: String\n  token_not: String\n  token_gt: String\n  token_lt: String\n  token_gte: String\n  token_lte: String\n  token_in: [String!]\n  token_not_in: [String!]\n  token_contains: String\n  token_not_contains: String\n  token_starts_with: String\n  token_not_starts_with: String\n  token_ends_with: String\n  token_not_ends_with: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")),(0,o.kt)("h4",{id:"id_not"},(0,o.kt)("inlineCode",{parentName:"h4"},"id_not")),(0,o.kt)("h4",{id:"id_gt"},(0,o.kt)("inlineCode",{parentName:"h4"},"id_gt")),(0,o.kt)("h4",{id:"id_lt"},(0,o.kt)("inlineCode",{parentName:"h4"},"id_lt")),(0,o.kt)("h4",{id:"id_gte"},(0,o.kt)("inlineCode",{parentName:"h4"},"id_gte")),(0,o.kt)("h4",{id:"id_lte"},(0,o.kt)("inlineCode",{parentName:"h4"},"id_lte")),(0,o.kt)("h4",{id:"id_in"},(0,o.kt)("inlineCode",{parentName:"h4"},"id_in")),(0,o.kt)("h4",{id:"id_not_in"},(0,o.kt)("inlineCode",{parentName:"h4"},"id_not_in")),(0,o.kt)("h4",{id:"member"},(0,o.kt)("inlineCode",{parentName:"h4"},"member")),(0,o.kt)("h4",{id:"member_not"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_not")),(0,o.kt)("h4",{id:"member_gt"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_gt")),(0,o.kt)("h4",{id:"member_lt"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_lt")),(0,o.kt)("h4",{id:"member_gte"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_gte")),(0,o.kt)("h4",{id:"member_lte"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_lte")),(0,o.kt)("h4",{id:"member_in"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_in")),(0,o.kt)("h4",{id:"member_not_in"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_not_in")),(0,o.kt)("h4",{id:"member_contains"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_contains")),(0,o.kt)("h4",{id:"member_not_contains"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_not_contains")),(0,o.kt)("h4",{id:"member_starts_with"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_starts_with")),(0,o.kt)("h4",{id:"member_not_starts_with"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_not_starts_with")),(0,o.kt)("h4",{id:"member_ends_with"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_ends_with")),(0,o.kt)("h4",{id:"member_not_ends_with"},(0,o.kt)("inlineCode",{parentName:"h4"},"member_not_ends_with")),(0,o.kt)("h4",{id:"balance"},(0,o.kt)("inlineCode",{parentName:"h4"},"balance")),(0,o.kt)("h4",{id:"balance_not"},(0,o.kt)("inlineCode",{parentName:"h4"},"balance_not")),(0,o.kt)("h4",{id:"balance_gt"},(0,o.kt)("inlineCode",{parentName:"h4"},"balance_gt")),(0,o.kt)("h4",{id:"balance_lt"},(0,o.kt)("inlineCode",{parentName:"h4"},"balance_lt")),(0,o.kt)("h4",{id:"balance_gte"},(0,o.kt)("inlineCode",{parentName:"h4"},"balance_gte")),(0,o.kt)("h4",{id:"balance_lte"},(0,o.kt)("inlineCode",{parentName:"h4"},"balance_lte")),(0,o.kt)("h4",{id:"balance_in"},(0,o.kt)("inlineCode",{parentName:"h4"},"balance_in")),(0,o.kt)("h4",{id:"balance_not_in"},(0,o.kt)("inlineCode",{parentName:"h4"},"balance_not_in")),(0,o.kt)("h4",{id:"token"},(0,o.kt)("inlineCode",{parentName:"h4"},"token")),(0,o.kt)("h4",{id:"token_not"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_not")),(0,o.kt)("h4",{id:"token_gt"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_gt")),(0,o.kt)("h4",{id:"token_lt"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_lt")),(0,o.kt)("h4",{id:"token_gte"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_gte")),(0,o.kt)("h4",{id:"token_lte"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_lte")),(0,o.kt)("h4",{id:"token_in"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_in")),(0,o.kt)("h4",{id:"token_not_in"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_not_in")),(0,o.kt)("h4",{id:"token_contains"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_contains")),(0,o.kt)("h4",{id:"token_not_contains"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_not_contains")),(0,o.kt)("h4",{id:"token_starts_with"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_starts_with")),(0,o.kt)("h4",{id:"token_not_starts_with"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_not_starts_with")),(0,o.kt)("h4",{id:"token_ends_with"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_ends_with")),(0,o.kt)("h4",{id:"token_not_ends_with"},(0,o.kt)("inlineCode",{parentName:"h4"},"token_not_ends_with")))}k.isMDXComponent=!0}}]);