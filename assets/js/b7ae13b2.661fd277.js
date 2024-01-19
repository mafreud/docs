"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=o,h=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:10,title:"\ud83d\uded1 Uninstall",description:"How to disable Shorebird."},a=void 0,l={unversionedId:"uninstall",id:"uninstall",title:"\ud83d\uded1 Uninstall",description:"How to disable Shorebird.",source:"@site/docs/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/uninstall",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/uninstall.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\ud83d\uded1 Uninstall",description:"How to disable Shorebird."},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfdb\ufe0f Architecture",permalink:"/architecture"},next:{title:"\ud83d\udee0\ufe0f Troubleshooting",permalink:"/troubleshooting"}},c={},s=[{value:"Thank you",id:"thank-you",level:2},{value:"Canceling your subscription",id:"canceling-your-subscription",level:2},{value:"Uninstalling Shorebird",id:"uninstalling-shorebird",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"First, do no harm")),(0,o.kt)("p",null,"Shorebird is designed to be a drop-in replacement for stock Flutter,\nand can be disabled at any time with no effect on your users."),(0,o.kt)("h2",{id:"thank-you"},"Thank you"),(0,o.kt)("p",null,"Thank you for trying Shorebird. If you'd like to continue using Shorebird\nbut have questions or concerns, please reach out to us on Discord or\nvia email at ",(0,o.kt)("a",{parentName:"p",href:"mailto:contact@shorebird.dev"},"contact@shorebird.dev"),"."),(0,o.kt)("p",null,"Otherwise, we hope you'll consider trying Shorebird again in the future."),(0,o.kt)("h2",{id:"canceling-your-subscription"},"Canceling your subscription"),(0,o.kt)("p",null,"To cancel your subscription, navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.shorebird.dev/account"},"Account"),'\npage on the Shorebird console, select the "Edit" dropdown, and click "Cancel Subscription".'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/f7abc03d-7dd7-465f-b1f6-7d963bd5aaab",alt:"Screenshot 2024-01-09 at 10 37 23\u202fAM"})),(0,o.kt)("p",null,"This will take you to a Stripe page that will allow you to cancel your subscription.\nAfter cancelling, your access (and updates for your users) will continue until the\nend of the current billing period. After this, Shorebird will not longer send updates\nto your apps, but your apps will continue function otherwise normally."),(0,o.kt)("h2",{id:"uninstalling-shorebird"},"Uninstalling Shorebird"),(0,o.kt)("p",null,"Building with ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird build")," will include Shorebird code push in your app.\nBuilding with ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter build --release")," will not include Shorebird in your app.\nAt any time you can simply drop back to ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter build")," and things will work\nas they did before."),(0,o.kt)("p",null,"You can remove ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird")," from your path by removing it from your ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc")," and deleting the ",(0,o.kt)("inlineCode",{parentName:"p"},".shorebird")," directory located in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.shorebird"),"."))}d.isMDXComponent=!0}}]);