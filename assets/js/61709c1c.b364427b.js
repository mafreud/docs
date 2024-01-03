"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(r),c=o,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||i;return r?a.createElement(m,n(n({ref:t},l),{},{components:r})):a.createElement(m,n({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,n[1]=p;for(var d=2;d<i;d++)n[d]=r[d];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2,title:"iOS | Hybrid App",sidebar_label:"\ud83c\udf4e iOS",description:"Use code push in an hybrid app scenario with an iOS app"},n="Code Push In Hybrid Apps",p={unversionedId:"guides/hybrid-app/ios",id:"guides/hybrid-app/ios",title:"iOS | Hybrid App",description:"Use code push in an hybrid app scenario with an iOS app",source:"@site/docs/guides/hybrid-app/ios.md",sourceDirName:"guides/hybrid-app",slug:"/guides/hybrid-app/ios",permalink:"/guides/hybrid-app/ios",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/guides/hybrid-app/ios.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"iOS | Hybrid App",sidebar_label:"\ud83c\udf4e iOS",description:"Use code push in an hybrid app scenario with an iOS app"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 Android",permalink:"/guides/hybrid-app/android"},next:{title:"\u2705 Continuous Integration",permalink:"/ci"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add Shorebird to your Flutter module",id:"add-shorebird-to-your-flutter-module",level:2},{value:"Embed the Flutter module in your iOS app",id:"embed-the-flutter-module-in-your-ios-app",level:2},{value:"Add the path to your .xcframeworks to Framework Search Paths",id:"add-the-path-to-your-xcframeworks-to-framework-search-paths",level:3},{value:"Embed App.xcframework and Flutter.xcframework in your app",id:"embed-appxcframework-and-flutterxcframework-in-your-app",level:3},{value:"Ensure the frameworks are signed as part of the build process",id:"ensure-the-frameworks-are-signed-as-part-of-the-build-process",level:3},{value:"Create a Shorebird release",id:"create-a-shorebird-release",level:2},{value:"Verify that your app runs",id:"verify-that-your-app-runs",level:2},{value:"Submit your app to the App Store",id:"submit-your-app-to-the-app-store",level:2},{value:"Verify that Shorebird is working with a patch",id:"verify-that-shorebird-is-working-with-a-patch",level:2}],l={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-push-in-hybrid-apps"},"Code Push In Hybrid Apps"),(0,o.kt)("p",null,"This guide explains how to use Shorebird in an iOS hybird app scenario (that is, your app embeds Flutter UI in non-Flutter UI)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If your app is a pure Flutter app, follow the ",(0,o.kt)("a",{parentName:"p",href:"../../code-push"},"standard code push guide")," instead.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This guide assumes you have already have an iOS app and a Flutter module. Our\niOS app will be named ",(0,o.kt)("inlineCode",{parentName:"p"},"IosCodePushDemo")," and our Flutter module will be named\n",(0,o.kt)("inlineCode",{parentName:"p"},"flutter_module"),"."),(0,o.kt)("p",null,"This guide also assumes that you have created a Shorebird account. If you have\nnot created a Shorebird account, please see our ",(0,o.kt)("a",{parentName:"p",href:"../../code-push"},"code push guide"),"\nfor instructions."),(0,o.kt)("p",null,"The reference code for this guide is available at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/samples/tree/main/add_to_app"},"https://github.com/shorebirdtech/samples/tree/main/add_to_app"),"."),(0,o.kt)("h2",{id:"add-shorebird-to-your-flutter-module"},"Add Shorebird to your Flutter module"),(0,o.kt)("p",null,"First, run ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird init")," in your Flutter module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird init\n")),(0,o.kt)("h2",{id:"embed-the-flutter-module-in-your-ios-app"},"Embed the Flutter module in your iOS app"),(0,o.kt)("p",null,"Shorebird requires that your Flutter module be embedded in your iOS app as an\n.xcframework."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The steps to do this are the same as the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/add-to-app/ios/project-setup#option-b---embed-frameworks-in-xcode"},"option B in the official instructions"),",\nso in the event of a conflict between the docs here and the official docs, defer\nto the official docs.")),(0,o.kt)("h3",{id:"add-the-path-to-your-xcframeworks-to-framework-search-paths"},"Add the path to your .xcframeworks to Framework Search Paths"),(0,o.kt)("p",null,"In your app target's build settings in Xcode, add the path to your Flutter\nmodule's Release ",(0,o.kt)("inlineCode",{parentName:"p"},".xcframeworks")," directory to Framework Search Paths. The value\nyou use for this path will be the path to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Release")," directory and will be\nrelative to your app's ",(0,o.kt)("inlineCode",{parentName:"p"},".xcodeproj")," file."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/afb7d716-6936-4d62-8307-cf1355aa12e0",alt:"Xcode framework search paths"})),(0,o.kt)("h3",{id:"embed-appxcframework-and-flutterxcframework-in-your-app"},"Embed App.xcframework and Flutter.xcframework in your app"),(0,o.kt)("p",null,"In the Build Phases tab of your app target, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.xcframework")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"Flutter.xcframework"),' from your Flutter module to the "Embed Frameworks" build\nphase:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/39ccbe94-6f66-45da-b8f1-345df929d80c",alt:"Xcode embed frameworks"})),(0,o.kt)("h3",{id:"ensure-the-frameworks-are-signed-as-part-of-the-build-process"},"Ensure the frameworks are signed as part of the build process"),(0,o.kt)("p",null,'In the General tab of your app target, ensure that the frameworks have the\n"Embed and Sign" option selected:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/5c3dbc9b-0301-4703-968c-cc84304f206b",alt:"Xcode embed and sign"})),(0,o.kt)("h2",{id:"create-a-shorebird-release"},"Create a Shorebird release"),(0,o.kt)("p",null,"Create a Shorebird release for your Flutter module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shorebird release ios-framework-alpha --release-version 1.2.3+1\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"release-version")," parameter needs to match the version of the iOS app\nthat uses this module (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"version+build")," from the Xcode settings, or\n",(0,o.kt)("inlineCode",{parentName:"p"},"CFBundleShortVersionString+CFBundleVersion")," from your app's Info.plist)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/b716fe38-1cd0-46b2-bf80-c29241e433a1",alt:"Xcode build version"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The version number for this app would be 1.0.0+3")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Because Shorebird only works with release builds, this will only produce a\nrelease version of your archive. This is similar to running\n",(0,o.kt)("inlineCode",{parentName:"p"},"flutter build ios-framework --no-debug --no-profile"),".")),(0,o.kt)("h2",{id:"verify-that-your-app-runs"},"Verify that your app runs"),(0,o.kt)("p",null,'In Xcode, update the current scheme\'s build configuration to "Release" and run\nyour app. Your app should work as before with no differences.'),(0,o.kt)("h2",{id:"submit-your-app-to-the-app-store"},"Submit your app to the App Store"),(0,o.kt)("p",null,"We won't cover this step in detail here, but this is where you would submit your\napp to the App Store. For code push to work, it is important that you submit\n",(0,o.kt)("em",{parentName:"p"},"with the same ",(0,o.kt)("inlineCode",{parentName:"em"},"xcframework")," generated by the release command above"),"."),(0,o.kt)("h2",{id:"verify-that-shorebird-is-working-with-a-patch"},"Verify that Shorebird is working with a patch"),(0,o.kt)("p",null,"Make an edit to the code in your Flutter module. Then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shorebird patch ios-framework-alpha --release-version 1.2.3+1\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"patch")," will overwrite the ",(0,o.kt)("inlineCode",{parentName:"p"},"xcframework")," generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"release"),', meaning that\nyou will see a "hash mismatch" error if you run the app from Xcode.')),(0,o.kt)("p",null,"As with the ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," command, the release version should be the version of the\niOS app that uses this module."),(0,o.kt)("p",null,"Now run the app directly from the a device (",(0,o.kt)("em",{parentName:"p"},"not")," launched from Xcode), navigate\nto the Flutter screen, and verify that the patch is recognized and applied."))}h.isMDXComponent=!0}}]);