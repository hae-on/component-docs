"use strict";(self.webpackChunklayout_component_haeon=self.webpackChunklayout_component_haeon||[]).push([[263],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(r),s=a,g=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return r?n.createElement(g,o(o({ref:e},u),{},{components:r})):n.createElement(g,o({ref:e},u))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3714:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={title:"Grid",sidebar_position:2},o=void 0,i={unversionedId:"layout/grid",id:"layout/grid",title:"Grid",description:"Grid",source:"@site/docs/layout/grid.mdx",sourceDirName:"layout",slug:"/layout/grid",permalink:"/component-docs/docs/layout/grid",draft:!1,editUrl:"https://github.com/hae-on/component-docs/tree/main/docs/layout/grid.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Grid",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Container",permalink:"/component-docs/docs/layout/container"},next:{title:"Grid-item",permalink:"/component-docs/docs/layout/grid-item"}},p={},d=[{value:"Grid",id:"grid",level:2},{value:"Props",id:"props",level:3},{value:"Example",id:"example",level:3}],u={toc:d},c="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"grid"},"Grid"),(0,a.kt)("p",null,"\uc6f9 \ud398\uc774\uc9c0\uc758 \ub808\uc774\uc544\uc6c3\uc744 \uad6c\uc131\ud558\ub294 2\ucc28\uc6d0(\ud589\uacfc \uc5f4)\uc758 \uc2dc\uc2a4\ud15c Grid \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Grid } from 'hae_on-layout-component';\n")),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"props"),(0,a.kt)("th",{parentName:"tr",align:null},"value"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"areas?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Grid\uc758 \uc601\uc5ed\uc744 \uc815\uc758\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rows?"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Grid\uc758 \ud589 \uc218\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"columns?"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Grid\uc758 \uc5f4 \uc218\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gap?"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Grid Item \uc0ac\uc774\uc758 \uac04\uaca9\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"height?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Grid\uc758 \ub192\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"children"),(0,a.kt)("td",{parentName:"tr",align:null},"ReactNode[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Grid\uc758 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Grid columns={5} gap={4}>\n  <GridItem col={2} height='30px' backgroundColor='#D8EAFF' />\n  <GridItem colStart={4} colEnd={6} height='30px' backgroundColor='#FFEC99' />\n</Grid>\n")))}m.isMDXComponent=!0}}]);