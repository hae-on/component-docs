"use strict";(self.webpackChunklayout_component_haeon=self.webpackChunklayout_component_haeon||[]).push([[745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,f=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={title:"Flex-item",sidebar_position:5},o=void 0,i={unversionedId:"layout/flex-item",id:"layout/flex-item",title:"Flex-item",description:"Flex Item",source:"@site/docs/layout/flex-item.mdx",sourceDirName:"layout",slug:"/layout/flex-item",permalink:"/component-docs/docs/layout/flex-item",draft:!1,editUrl:"https://github.com/hae-on/component-docs/tree/main/docs/layout/flex-item.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Flex-item",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Flex",permalink:"/component-docs/docs/layout/flex"},next:{title:"Tab-layout",permalink:"/component-docs/docs/layout/tab-layout"}},p={},m=[{value:"Flex Item",id:"flex-item",level:2},{value:"Props",id:"props",level:3},{value:"Example",id:"example",level:3}],u={toc:m},c="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"flex-item"},"Flex Item"),(0,a.kt)("p",null,"Flex \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubd80\uc5d0 \ub4e4\uc5b4\uac00\ub294 \ud558\ub098\uc758 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { FlexItem } from 'hae_on-layout-component';\n")),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"props"),(0,a.kt)("th",{parentName:"tr",align:null},"value"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"order?"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"FlexItem\uc758 \ubc30\uce58 \uc21c\uc11c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"grow?"),(0,a.kt)("td",{parentName:"tr",align:null},"CSSProperties","['flexGrow']"),(0,a.kt)("td",{parentName:"tr",align:null},"basis \uac12\ubcf4\ub2e4 \ucee4\uc9c8 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shrink?"),(0,a.kt)("td",{parentName:"tr",align:null},"CSSProperties","['flexShrink']"),(0,a.kt)("td",{parentName:"tr",align:null},"basis \uac12\ubcf4\ub2e4 \uc791\uc544\uc9c8 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"basis?"),(0,a.kt)("td",{parentName:"tr",align:null},"CSSProperties","['flexBasis']"),(0,a.kt)("td",{parentName:"tr",align:null},"FlexItem\uc758 \uae30\ubcf8 \ud06c\uae30\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alignSelf?"),(0,a.kt)("td",{parentName:"tr",align:null},"CSSProperties","['alignSelf']"),(0,a.kt)("td",{parentName:"tr",align:null},"FlexItem\uc758 \uc218\uc9c1\ucd95 \ubc29\ud5a5 \uc815\ub82c\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"children?"),(0,a.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,a.kt)("td",{parentName:"tr",align:null},"FlexItem\uc758 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlexItem>Item1</FlexItem>\n")))}s.isMDXComponent=!0}}]);