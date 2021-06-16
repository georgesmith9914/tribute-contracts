(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[802],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=s(t),m=o,h=l["".concat(d,".").concat(m)]||l[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4136:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],u={id:"coupon-onboarding-adapter",title:"Coupon"},d={unversionedId:"adapters/onboarding/coupon-onboarding-adapter",id:"adapters/onboarding/coupon-onboarding-adapter",isDocsHomePage:!1,title:"Coupon",description:"The CouponOnboarding adapter provides a way to onboard an initial group of members quickly without requiring multiple proposals.",source:"@site/docs/adapters/onboarding/CouponOnboarding.md",sourceDirName:"adapters/onboarding",slug:"/adapters/onboarding/coupon-onboarding-adapter",permalink:"/docs/adapters/onboarding/coupon-onboarding-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/adapters/onboarding/CouponOnboarding.md",version:"current",frontMatter:{id:"coupon-onboarding-adapter",title:"Coupon"},sidebar:"adapters",previous:{title:"Rage Quit",permalink:"/docs/adapters/exiting/rage-quit-adapter"},next:{title:"ERC20/ETH",permalink:"/docs/adapters/onboarding/onboarding-adapter"}},s=[{value:"Adapter workflow",id:"adapter-workflow",children:[]},{value:"Adapter configuration",id:"adapter-configuration",children:[{value:"signerAddress",id:"signeraddress",children:[]},{value:"tokenAddrToMint",id:"tokenaddrtomint",children:[]}]},{value:"Adapter state",id:"adapter-state",children:[{value:"Coupon",id:"coupon",children:[]}]},{value:"Dependencies and interactions (internal / external)",id:"dependencies-and-interactions-internal--external",children:[]},{value:"Functions description and assumptions / checks",id:"functions-description-and-assumptions--checks",children:[{value:"function hashCouponMessage(DaoRegistry dao, Coupon memory coupon) public view returns (bytes32)",id:"function-hashcouponmessagedaoregistry-dao-coupon-memory-coupon-public-view-returns-bytes32",children:[]},{value:"function redeemCoupon(DaoRegistry dao, address authorizedMember, uint256 amount, uint256 nonce, bytes memory signature) external",id:"function-redeemcoupondaoregistry-dao-address-authorizedmember-uint256-amount-uint256-nonce-bytes-memory-signature-external",children:[]}]}],c={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The CouponOnboarding adapter provides a way to onboard an initial group of members quickly without requiring multiple proposals."),(0,a.kt)("p",null,"The DAO creator can produce and sign coupons which allow redemption of a particular number of units by a given address. When the coupon is redeemed the units are directly issued to the new member."),(0,a.kt)("h2",{id:"adapter-workflow"},"Adapter workflow"),(0,a.kt)("p",null,"Redeem coupon request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"check that the coupon has not already been redeemed"),(0,a.kt)("li",{parentName:"ul"},"check that the signed hash matches the hash of the redeem arguments"),(0,a.kt)("li",{parentName:"ul"},"check that the signer of the coupon matches the configured signer"),(0,a.kt)("li",{parentName:"ul"},"mint the configured tokens to the new member"),(0,a.kt)("li",{parentName:"ul"},"mark the coupon redeemed")),(0,a.kt)("h2",{id:"adapter-configuration"},"Adapter configuration"),(0,a.kt)("p",null,"DAORegistry Access Flags: ",(0,a.kt)("inlineCode",{parentName:"p"},"NEW_MEMBER"),"."),(0,a.kt)("p",null,"Bank Extension Access Flags: ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD_TO_BALANCE"),"."),(0,a.kt)("h3",{id:"signeraddress"},"signerAddress"),(0,a.kt)("p",null,"The public address of the signer key used to generate coupons for this adapter."),(0,a.kt)("h3",{id:"tokenaddrtomint"},"tokenAddrToMint"),(0,a.kt)("p",null,"The address of the token that will be created and issued to the address in the redeemed coupons."),(0,a.kt)("h2",{id:"adapter-state"},"Adapter state"),(0,a.kt)("h3",{id:"coupon"},"Coupon"),(0,a.kt)("p",null,"The coupon structure contains the data fields necessary to redeem and add a new member."),(0,a.kt)("h4",{id:"authorizedmember"},"authorizedMember"),(0,a.kt)("p",null,"The address that this coupon authorized to become a new member."),(0,a.kt)("h4",{id:"amount"},"amount"),(0,a.kt)("p",null,"The amount of units that this member will receive."),(0,a.kt)("h4",{id:"nonce"},"nonce"),(0,a.kt)("p",null,"A unique identifier for this coupon request."),(0,a.kt)("h2",{id:"dependencies-and-interactions-internal--external"},"Dependencies and interactions (internal / external)"),(0,a.kt)("h2",{id:"functions-description-and-assumptions--checks"},"Functions description and assumptions / checks"),(0,a.kt)("h3",{id:"function-hashcouponmessagedaoregistry-dao-coupon-memory-coupon-public-view-returns-bytes32"},"function hashCouponMessage(DaoRegistry dao, Coupon memory coupon) public view returns (bytes32)"),(0,a.kt)("p",null,"Hashes the provided coupon as an ERC712 hash."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"dao")," is the DAO instance to be configured\n",(0,a.kt)("strong",{parentName:"p"},"coupon")," is the coupon to hash"),(0,a.kt)("h3",{id:"function-redeemcoupondaoregistry-dao-address-authorizedmember-uint256-amount-uint256-nonce-bytes-memory-signature-external"},"function redeemCoupon(DaoRegistry dao, address authorizedMember, uint256 amount, uint256 nonce, bytes memory signature) external"),(0,a.kt)("p",null,"Redeems a coupon to add a new member."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"dao")," is the DAO instance to be configured\n",(0,a.kt)("strong",{parentName:"p"},"authorizedMember")," is the address that this coupon authorized to become a new member.\n",(0,a.kt)("strong",{parentName:"p"},"amount")," is the amount of units that this member will receive.\n",(0,a.kt)("strong",{parentName:"p"},"nonce")," is a unique identifier for this coupon request."))}p.isMDXComponent=!0}}]);