"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[610],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},l),{},{components:a})):n.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:6,title:"\u2b06\ufe0f Update Strategies",description:"Ways to use Shorebird to update your app"},i="\u2b06\ufe0f Update Strategies",s={unversionedId:"update-strategies",id:"update-strategies",title:"\u2b06\ufe0f Update Strategies",description:"Ways to use Shorebird to update your app",source:"@site/docs/update-strategies.md",sourceDirName:".",slug:"/update-strategies",permalink:"/update-strategies",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/update-strategies.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u2b06\ufe0f Update Strategies",description:"Ways to use Shorebird to update your app"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc65 Teams",permalink:"/teams"},next:{title:"\ud83c\udf93 Concepts",permalink:"/concepts"}},p={},u=[{value:"Automatic (Default)",id:"automatic-default",level:2},{value:"Manual",id:"manual",level:2}],l={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-update-strategies"},"\u2b06\ufe0f Update Strategies"),(0,r.kt)("h2",{id:"automatic-default"},"Automatic (Default)"),(0,r.kt)("p",null,"By default, Shorebird checks for and installs new patches in the background on\nlaunch. It does this via a background thread to ensure that it does not affect\nthe launch speed of your application. Patches installed via Shorebird are then\navailable on next launch of the app."),(0,r.kt)("h2",{id:"manual"},"Manual"),(0,r.kt)("p",null,"Shorebird also provides you with the ability to control when patches are\napplied. You may want finer-grained control over updates to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Control rollout of patches (to only update some accounts at a time to reduce\nyour server load or reduce rollout risk, for example)."),(0,r.kt)("li",{parentName:"ul"},"Require users to update to the latest version before they can use the app (see\nnote below).")),(0,r.kt)("p",null,"To manually manage updates, you can use the\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/shorebird_code_push"},(0,r.kt)("inlineCode",{parentName:"a"},"package:shorebird_code_push")),",\nwhich enables programmatic control over when the Shorebird updater checks for\nand downloads patches. See the package documentation for more information and\nusage examples."),(0,r.kt)("p",null,"You will also want to disable the default automatic update behavior by adding\nthis line to your ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"auto_update: false\n")),(0,r.kt)("p",null,"Disabling automatic updates is not required to use ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird_code_push"),", but\nShorebird will automatically download and apply updates if your shorebird.yaml\nfile does not contain ",(0,r.kt)("inlineCode",{parentName:"p"},"auto_update: false"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Because Shorebird can only download and apply patches when your app is\nrunning, the user will see the unpatched release version that was first\npublished in the store when they first launch your app. If it is important to\nyour business to gate usage of your app on users having the latest code, it\ncould be appropriate for you to check for updates as part of a login screen, or\nother launch gate.")),(0,r.kt)("h1",{id:"triggering-updates-via-notification"},"Triggering updates via notification"),(0,r.kt)("p",null,"It is possible to trigger updates via push notifications."),(0,r.kt)("p",null,"Shorebird does not provide its own notification service, but it's possible to\nuse others, such as ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging"},"Firebase Cloud Messaging\n(FCM)")," to send a notification\nto your app, and then use that notification to trigger an update. Because these\nservices typically allow you to target specific devices, you could use this to\ntrigger updates for specific users."),(0,r.kt)("p",null,"Because any notification service which uses Dart (e.g. FCM) will also trigger\nthe launch of the Flutter engine when the notification is delivered, the app\nwill update if it is not already running."),(0,r.kt)("p",null,"If you are manually managing updates with the ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird_code_push")," package, you\ncan check for and trigger updates in your notification handler."),(0,r.kt)("h1",{id:"how-should-shorebird-interact-with-other-update-systems-eg-in_app_update"},"How should Shorebird interact with other update systems (e.g. ",(0,r.kt)("inlineCode",{parentName:"h1"},"in_app_update"),")?"),(0,r.kt)("p",null,"For applications that already ensure users are on the latest version (e.g. with\n",(0,r.kt)("inlineCode",{parentName:"p"},"in_app_update"),", a system on Android whereby the Play Store will automatically\nprompt users to update your app), you will likely want to write some code to\ncoordinate between Shorebird and your existing update system."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/shorebird_code_push"},(0,r.kt)("inlineCode",{parentName:"a"},"package:shorebird_code_push")),"\ncan help you here. For example, with ",(0,r.kt)("inlineCode",{parentName:"p"},"in_app_update"),", you could use\n",(0,r.kt)("inlineCode",{parentName:"p"},"package:shorebird_code_push")," to check if the user has already applied the\nnecessary patch and ",(0,r.kt)("em",{parentName:"p"},"not")," then prompt them to update."),(0,r.kt)("p",null,"Shorebird patches are typically much smaller than full app downloads (a few KB\non Android, a few hundred KB on iOS), so it is likely better for your users if\nyou can use Shorebird to deliver patches instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"in_app_update"),". However,\nthere are ",(0,r.kt)("a",{parentName:"p",href:"concepts#what-types-of-changes-can-be-included-in-a-patch"},"changes which Shorebird cannot make"),", so\n",(0,r.kt)("inlineCode",{parentName:"p"},"in_app_update")," may be the best solution in some cases."),(0,r.kt)("p",null,'Shorebird "patches" also do not change the version number of your app, so\n',(0,r.kt)("inlineCode",{parentName:"p"},"in_app_update")," will not see them as a new version. This is by design \u2013 patches\nare applied to releases, rather than being new releases themselves. This can\ncomplicate your analytics/reporting code as you will have the case where e.g.\n",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.1+13, patch 1")," has identical dart code to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.1+13, no patches"),". You can\nget the current booted patch number via ",(0,r.kt)("inlineCode",{parentName:"p"},"package:shorebird_code_push"),"'s\n","[currentPatchNumber]","\n(",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/shorebird_code_push/latest/shorebird_code_push/ShorebirdCodePush/currentPatchNumber.html"},"https://pub.dev/documentation/shorebird_code_push/latest/shorebird_code_push/ShorebirdCodePush/currentPatchNumber.html"),")\nmethod."),(0,r.kt)("p",null,'Shorebird also currently makes the guarantee that we do not see or store your\ncode. Implementing "push to deploy" may not be possible without source code\naccess, which is not a change we would make lightly.'))}c.isMDXComponent=!0}}]);