"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=h(n),c=o,f=p["".concat(l,".").concat(c)]||p[c]||u[c]||i;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:11,title:"\ud83d\udee0\ufe0f Troubleshooting",description:"Fixes for common Shorebird issues"},r="\ud83d\udee0\ufe0f Troubleshooting",s={unversionedId:"troubleshooting",id:"troubleshooting",title:"\ud83d\udee0\ufe0f Troubleshooting",description:"Fixes for common Shorebird issues",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"\ud83d\udee0\ufe0f Troubleshooting",description:"Fixes for common Shorebird issues"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uded1 Uninstall",permalink:"/uninstall"}},l={},h=[{value:"I created a patch, but it&#39;s not showing up in my app",id:"i-created-a-patch-but-its-not-showing-up-in-my-app",level:2},{value:"The patch was created for a different release version than the one running on your device/emulator.",id:"the-patch-was-created-for-a-different-release-version-than-the-one-running-on-your-deviceemulator",level:3},{value:"How to tell if this is the problem",id:"how-to-tell-if-this-is-the-problem",level:4},{value:"How to fix it",id:"how-to-fix-it",level:4},{value:"The app you&#39;re running on your device/emulator was not built using one of the <code>shorebird release</code> commands.",id:"the-app-youre-running-on-your-deviceemulator-was-not-built-using-one-of-the-shorebird-release-commands",level:3},{value:"How to tell if this is the problem",id:"how-to-tell-if-this-is-the-problem-1",level:4},{value:"How to fix it",id:"how-to-fix-it-1",level:4},{value:"I installed Shorebird, and now I can&#39;t run my app in VS Code",id:"i-installed-shorebird-and-now-i-cant-run-my-app-in-vs-code",level:2},{value:"Could not find an option named &quot;dart define&quot; when using the <code>--</code> separator",id:"could-not-find-an-option-named-dart-define-when-using-the----separator",level:2},{value:"Shorebird fails to install",id:"shorebird-fails-to-install",level:2},{value:"I see a message saying that <code>git stat</code> failed because a file was too long",id:"i-see-a-message-saying-that-git-stat-failed-because-a-file-was-too-long",level:3},{value:"My iOS build number increments when I try to make a release or patch",id:"my-ios-build-number-increments-when-i-try-to-make-a-release-or-patch",level:2},{value:"I see a <code>The release artifact contains asset changes</code> warning when running <code>shorebird release</code> (#asset-changes)",id:"i-see-a-the-release-artifact-contains-asset-changes-warning-when-running-shorebird-release-asset-changes",level:2},{value:"I see a <code>The release artifact contains native changes</code> warning when running <code>shorebird patch</code>, even though I haven&#39;t changed Swift/Objective-C/Kotlin/Java code",id:"unexpected-native-changes",level:2},{value:"&quot;Invalid <code>Podfile</code> file: cannot load such file&quot; when running <code>pod install</code>",id:"invalid-podfile-file-cannot-load-such-file-when-running-pod-install",level:2},{value:"Have a problem that&#39;s not addressed here?",id:"have-a-problem-thats-not-addressed-here",level:2}],d={toc:h},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-troubleshooting"},"\ud83d\udee0\ufe0f Troubleshooting"),(0,o.kt)("p",null,"Find help for issues with Shorebird."),(0,o.kt)("h2",{id:"i-created-a-patch-but-its-not-showing-up-in-my-app"},"I created a patch, but it's not showing up in my app"),(0,o.kt)("p",null,"There are several reasons this might be happening. Start by running your release\non a device or Android emulator using the ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird preview")," command to see the\nlog output."),(0,o.kt)("p",null,"Common causes of this problem are:"),(0,o.kt)("h3",{id:"the-patch-was-created-for-a-different-release-version-than-the-one-running-on-your-deviceemulator"},"The patch was created for a different release version than the one running on your device/emulator."),(0,o.kt)("p",null,"Patches are only compatible with the release version they were created for. If\nyou create a patch for version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0+1"),", it will not work on version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0+2"),"."),(0,o.kt)("h4",{id:"how-to-tell-if-this-is-the-problem"},"How to tell if this is the problem"),(0,o.kt)("p",null,"You will see ",(0,o.kt)("inlineCode",{parentName:"p"},"Shorebird updater: no active patch")," in your device logs."),(0,o.kt)("h4",{id:"how-to-fix-it"},"How to fix it"),(0,o.kt)("p",null,"Ensure that the version of your app on your device/emulator matches the version\nof the patch you created. You can see what release version your app is running\nby looking in the device logs for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Sending patch check request: PatchCheckRequest {\n  app_id: "<your app id>",\n  channel: "stable",\n  release_version: "1.0.3+16", <-- this is the release version\n  patch_number: <some patch number>,\n  platform: "android",\n  arch: "aarch64"\n}\n')),(0,o.kt)("p",null,"Only patches created for this release version will be compatible with your app."),(0,o.kt)("h3",{id:"the-app-youre-running-on-your-deviceemulator-was-not-built-using-one-of-the-shorebird-release-commands"},"The app you're running on your device/emulator was not built using one of the ",(0,o.kt)("inlineCode",{parentName:"h3"},"shorebird release")," commands."),(0,o.kt)("h4",{id:"how-to-tell-if-this-is-the-problem-1"},"How to tell if this is the problem"),(0,o.kt)("p",null,"If you are running your app using ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird preview"),", this is not the problem."),(0,o.kt)("p",null,"If you have installed the app on your device/emulator a different way, check\nyour device logs for output from Shorebird. If you don't see anything like\n",(0,o.kt)("inlineCode",{parentName:"p"},"Starting Shorebird update")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Sending patch check request"),", you are not\nrunning a Shorebird-built app."),(0,o.kt)("p",null,"To check your Android device logs, run ",(0,o.kt)("inlineCode",{parentName:"p"},"adb logcat")," in your terminal. You can\nfilter the output to only show Flutter logs by running ",(0,o.kt)("inlineCode",{parentName:"p"},"adb logcat | grep flutter"),"."),(0,o.kt)("h4",{id:"how-to-fix-it-1"},"How to fix it"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird preview"),"."),(0,o.kt)("h2",{id:"i-installed-shorebird-and-now-i-cant-run-my-app-in-vs-code"},"I installed Shorebird, and now I can't run my app in VS Code"),(0,o.kt)("p",null,"If you see error output like the following when using the Run or Debug button in\nVS Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FAILURE: Build failed with an exception.\n\n* What went wrong:\nExecution failed for task ':app:checkDebugAarMetadata'.\n> Could not resolve all files for configuration ':app:debugRuntimeClasspath'.\n   > Could not find io.flutter:arm64_v8a_debug:1.0.0-4a5e8142f3e7368a48e4f6151cb7b1a684d6dd83.\n     Searched in the following locations:\n")),(0,o.kt)("p",null,"It's possible that VS Code is incorrectly using Shorebird's version of Flutter\ninstead of the Flutter on your path (see\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Dart-Code/Dart-Code/issues/4607"},"https://github.com/Dart-Code/Dart-Code/issues/4607"),"). You can fix this by\nexplicitly providing VS Code with the path to your Flutter installation. In your\n",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," file, add the line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dart.flutterSdkPath": "/path/to/flutter"\n')),(0,o.kt)("p",null,'Where "/path/to/flutter" is the path to your Flutter installation. You can get\nthis by running ',(0,o.kt)("inlineCode",{parentName:"p"},"which flutter")," in your terminal (or ",(0,o.kt)("inlineCode",{parentName:"p"},"where.exe flutter")," on\nWindows) and removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/flutter")," from the end of that path."),(0,o.kt)("h2",{id:"could-not-find-an-option-named-dart-define-when-using-the----separator"},'Could not find an option named "dart define" when using the ',(0,o.kt)("inlineCode",{parentName:"h2"},"--")," separator"),(0,o.kt)("p",null,"Powershell handles the ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," separator differently than other shells (see\n",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/15788023"},"this StackOverflow answer")," for more\ninfo). To work around this, you can quote the ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," separator. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird release android '--' --dart-define=foo=bar\n")),(0,o.kt)("h2",{id:"shorebird-fails-to-install"},"Shorebird fails to install"),(0,o.kt)("p",null,"There are a number of reasons this might happen. Common causes are:"),(0,o.kt)("h3",{id:"i-see-a-message-saying-that-git-stat-failed-because-a-file-was-too-long"},"I see a message saying that ",(0,o.kt)("inlineCode",{parentName:"h3"},"git stat")," failed because a file was too long"),(0,o.kt)("p",null,"This can happen on Windows due to Windows' limit of 260 characters for a filename."),(0,o.kt)("p",null,"You can fix this by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git config --system core.longpaths true\n")),(0,o.kt)("p",null,"You may need to run this as an administrator, and you will need to restart your\nterminal after running this command."),(0,o.kt)("h2",{id:"my-ios-build-number-increments-when-i-try-to-make-a-release-or-patch"},"My iOS build number increments when I try to make a release or patch"),(0,o.kt)("p",null,"This is likely because you are providing an export options .plist file that\nsets ",(0,o.kt)("inlineCode",{parentName:"p"},"manageAppVersionAndBuildNumber")," to true. This is incompatible with\nShorebird because Shorebird requires that you maintain control over your app's\nversion and build numbers in order to target patches at specific releases. You\ncan fix this problem by either setting ",(0,o.kt)("inlineCode",{parentName:"p"},"manageAppVersionAndBuildNumber")," to false\nor removing the value from your export options .plist file."),(0,o.kt)("h2",{id:"i-see-a-the-release-artifact-contains-asset-changes-warning-when-running-shorebird-release-asset-changes"},"I see a ",(0,o.kt)("inlineCode",{parentName:"h2"},"The release artifact contains asset changes")," warning when running ",(0,o.kt)("inlineCode",{parentName:"h2"},"shorebird release")," (#asset-changes)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird patch")," command will print a warning if it detects changes to\nfiles in your compiled app that correspond to asset changes (e.g. added or\nremoved images, fonts, etc.). This does not always mean that your patch will not\nwork, but shorebird cannot be sure that the changes are safe."),(0,o.kt)("p",null,"Shorebird does not (yet) have the\n","[https://github.com/shorebirdtech/shorebird/issues/318]","(ability to patch assets)\nbut intends to add such in the future, at which time this warning may go away."),(0,o.kt)("p",null,"An example of this warning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2713 Verifying patch can be applied to release (4.0s)\n[WARN] The release artifact contains asset changes, which will not be included in the patch.\n    Added files:\n        base/assets/flutter_assets/assets/images/bg_button_disable.png\n    Changed files:\n        base/assets/flutter_assets/AssetManifest.bin\n        base/assets/flutter_assets/AssetManifest.json\n        base/assets/flutter_assets/fonts/MaterialIcons-Regular.otf\nContinue anyways? (y/N)\n")),(0,o.kt)("p",null,"So what does this mean? In this case, it means I added a new image to my app.\nThe warning is because my patched Dart code could ",(0,o.kt)("em",{parentName:"p"},"depend")," on those new assets\nwhich will not be present when the patch is applied in the wild. It can be safe\nto ignore this kind of warning if you're removing an asset that is not used by\nyour code, or your Dart code knows how to handle the asset being missing."),(0,o.kt)("p",null,"Also included in the above changes are the ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetManifest")," files. These files\nchange any time you add or remove an asset from your app, and are generally\na symptom rather than the cause of the warning."),(0,o.kt)("p",null,"The final file changed above is the ",(0,o.kt)("inlineCode",{parentName:"p"},"MaterialIcons-Regular.otf"),' font file,\nwhich can happen if your app uses more or fewer icons from the Dart code.\nFlutter will automatically "tree shake" your fonts, so if you don\'t use an icon\nin your Dart code, it will not be included in the final app. You can\ndisable this behavior with ',(0,o.kt)("inlineCode",{parentName:"p"},"--no-tree-shake-icons")," at the risk of increasing\nyour app size. This type of warning will also go away once we add\n","[https://github.com/shorebirdtech/shorebird/issues/318]","(asset patching)."),(0,o.kt)("p",null,"A type of change not shown above is one which changes .dex files on Android or\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Runner.app")," directory on iOS. These changes represent changes to the\nnative code of your app, and are not patchable by Shorebird. If you see this\nwarning, you should be very careful about publishing your patch, as it may\ncause your app to crash when the Dart code tries to call into native code\nwhich operates differently than expected. See\n",(0,o.kt)("a",{parentName:"p",href:"#unexpected-native-changes"},"the next section"),"."),(0,o.kt)("p",null,"It is always good practice to test your patch with ",(0,o.kt)("inlineCode",{parentName:"p"},"--staging")," and then use\n",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird preview --staging"),' to install the patch on your device. That way\nyou can see your patch exactly as it will appear on user\'s devices where\nthe "patch" will replace the Dart code, but not change the underlying native\ncode or assets in the app.'),(0,o.kt)("h2",{id:"unexpected-native-changes"},"I see a ",(0,o.kt)("inlineCode",{parentName:"h2"},"The release artifact contains native changes")," warning when running ",(0,o.kt)("inlineCode",{parentName:"h2"},"shorebird patch"),", even though I haven't changed Swift/Objective-C/Kotlin/Java code"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird patch")," command will print a warning if it detects changes to\nfiles in your compiled app that correspond to native code changes (",(0,o.kt)("inlineCode",{parentName:"p"},".dex")," files\non Android, files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Runner.app")," directory on iOS). This does not always\nmean that your patch will not work, but because shorebird cannot be sure that\nthe changes are safe, and because shorebird can't patch non-Dart code, it prints\na warning."),(0,o.kt)("p",null,"This can be caused by a number of things. The most common causes are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A dependency/plugin you are using has changed its native code. ",(0,o.kt)("strong",{parentName:"li"},"You should\nuse caution when publishing patches that include changes to native code from\nplugins. In the worst case, these changes my cause your patched app to\ncrash.")),(0,o.kt)("li",{parentName:"ol"},"A dependency/plugin produces a different output on every build. This can\nhappen if the dependency it includes a timestamp indicating when it was\nbuilt, for example. This kind of change is usually safe to publish, but you\nshould be sure this is the only reason you are seeing this warning."),(0,o.kt)("li",{parentName:"ol"},"(iOS only) The release was built with a different version of Xcode than the\npatch. This can be fixed by ensuring that you are using the same\nversion of Xcode to build the release and the patch. If you've upgraded to a\nnewer version of Xcode since building the release, you can download older\nversions of Xcode from\n",(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/download/all/"},"Apple's developer downloads page"),".")),(0,o.kt)("p",null,"If you are confident that the changes are safe, you can ignore this warning by\npassing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird patch"),"."),(0,o.kt)("h2",{id:"invalid-podfile-file-cannot-load-such-file-when-running-pod-install"},'"Invalid ',(0,o.kt)("inlineCode",{parentName:"h2"},"Podfile"),' file: cannot load such file" when running ',(0,o.kt)("inlineCode",{parentName:"h2"},"pod install")),(0,o.kt)("p",null,"You might see this error message if the ",(0,o.kt)("inlineCode",{parentName:"p"},"FLUTTER_ROOT")," definition in your\nproject's ",(0,o.kt)("inlineCode",{parentName:"p"},"ios/Flutter/Generated.xcconfig")," points to a Shorebird Flutter\ninstallation. This can be fixed by running any of:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"flutter clean"),", or"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"flutter build ios")," in your project's root directory, or"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"flutter run")," in your project's root directory and targeting an iOS\nsimulator/device.")),(0,o.kt)("h2",{id:"have-a-problem-thats-not-addressed-here"},"Have a problem that's not addressed here?"),(0,o.kt)("p",null,"We're happy to help on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/shorebird"},"Discord"),"!"))}u.isMDXComponent=!0}}]);