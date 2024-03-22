---
sidebar_position: 2
title: iOS | Hybrid App
sidebar_label: 🍎 iOS
description: Use code push in an hybrid app scenario with an iOS app
---

# Code Push In Hybrid Apps

This guide explains how to use Shorebird in an iOS hybird app scenario (that is, your app embeds Flutter UI in non-Flutter UI).

:::note
If your app is a pure Flutter app, follow the [standard code push guide](../../code-push) instead.
:::

## Prerequisites

This guide assumes you have already have an iOS app and a Flutter module. Our
iOS app will be named `IosCodePushDemo` and our Flutter module will be named
`flutter_module`.

This guide also assumes that you have created a Shorebird account. If you have
not created a Shorebird account, please see our [code push guide](../../code-push)
for instructions.

The reference code for this guide is available at
https://github.com/shorebirdtech/samples/tree/main/add_to_app.

## Add Shorebird to your Flutter module

First, run `shorebird init` in your Flutter module:

```sh
shorebird init
```

## Create a Shorebird release

First, we need to package our Flutter module for release. This will produce an
.xcframework that we can embed in our iOS app and provide Shorebird with the
information it needs to apply patches.

To create a release, run the following the root directory of your Flutter module:

```
shorebird release ios-framework --release-version 1.2.3+4
```

The `release-version` parameter needs to match the version of the iOS app
that uses this module (i.e., `version+build` from the Xcode settings, or
`CFBundleShortVersionString+CFBundleVersion` from your app's Info.plist).

![Xcode build version](https://github.com/shorebirdtech/shorebird/assets/581764/314289ed-b3bd-46fa-b49a-cea7d482d831)

_The version number for this app would be 1.2.3+4_

The `ShorebirdFlutter.xcframework` and `App.xcframework` artifacts produced by
the `shorebird release` command will be placed in the `release` directory in the
root of your Flutter module.

:::note
Because Shorebird only works with release builds, this will only produce a
release version of your archive. This is similar to running
`flutter build ios-framework --no-debug --no-profile`.
:::

## Embed the Flutter module in your iOS app

While there are multiple ways to embed a Flutter module in an iOS app, Shorebird
requires that your Flutter module be embedded in your iOS app as an
.xcframework.

:::info
The steps to do this are the same as the
[option B in the official instructions](https://docs.flutter.dev/add-to-app/ios/project-setup#option-b---embed-frameworks-in-xcode),
so in the event of a conflict between the docs here and the official docs, defer
to the official docs.
:::

:::note
`ShorebirdFlutter.xcframework` is nearly identically to `Flutter.xcframework`
from Google, but as part of compliance with Apple's signing requirements, we've
renamed the framework when applying Shorebird (legally Code Town, Inc's) digital
signature.
:::

### Add the path to your .xcframeworks to Framework Search Paths

In Xcode:

1. Navigate to your app target's "Build Settings" tab.
2. Find the "Framework Search Paths" setting (the Filter field on the top right
   of the build settings tab is helpful for this).
3. Add an entry to the "Framework Search Paths" list. This entry should be the
   relative path to the directory containing `ShorebirdFlutter.xcframework` and
   `App.xcframework` artifacts. By default, these artifacts are placed in the
   `release` directory in the root of your Flutter module, but you should feel
   free to move them elsewhere if you prefer.

![Xcode framework search paths](https://github.com/shorebirdtech/shorebird/assets/581764/50f92f9c-4bf6-49ce-a4e7-664b8bf8283a)

### Embed App.xcframework and Flutter.xcframework in your app

In the "General" tab of your app target, add `App.xcframework` and
`ShorebirdFlutter.xcframework` from to the "Frameworks, Libraries, and Embedded
Content" section. Make sure to select "Embed & Sign" for both frameworks.

![Xcode embed frameworks](https://github.com/shorebirdtech/shorebird/assets/581764/fe5911bd-046b-47f9-a4d8-d8548e651bd6)

:::note
You may also see that `ShorebirdFlutter.xcframework` is signed by Code Town Inc.
That's us 🙂
:::

## Verify that your app runs

In Xcode, update the current scheme's build configuration to "Release"

![Xcode edit schemes](https://github.com/shorebirdtech/shorebird/assets/581764/cf32be57-c49e-4ff6-aca2-8be06b44f2f9)
![Xcode release scheme](https://github.com/shorebirdtech/shorebird/assets/581764/92417ee8-dc66-4cbb-99e7-d940165e4caf)

Now run your app on a device (_not_ a simulator). Your app should run as normal,
and you should see debug logs from Shorebird.

## Submit your app to the App Store

We won't cover this step in detail here, but this is where you would submit your
app to the App Store. For code push to work, it is important that you submit
_with the same `xcframework` generated by the release command above_.

You can skip this step if you just want to see Code Push working in an app.

## Verify that Shorebird is working with a patch

Make a user-visible change to the code in your Flutter module. Then run:

```
shorebird patch ios-framework --release-version 1.2.3+4
```

`release-version` should be the version of the iOS app you released with the
output of the `release` command. As before, this should match your app's version
and build numbers in Xcode. The command above will patch the release we created
earlier in this guide.

You can now test the patch in your app by running the app from Xcode. After
the app launches, you should see a logs from Shorebird informing you that the
app is checking for new patches and saying that the patch was installed:

```
Sending patch check request: PatchCheckRequest { app_id: "db32f785-284a-429b-9348-d3ead3485438", channel: "stable", release_version: "1.2.3+4", patch_number: None, platform: "ios", arch: "aarch64" }

/// other logs

Patch 1 successfully installed.
```

For the app to reflect the changes, you will need to close and reopen the app.
Do this by stopping the app in Xcode and then running it again.