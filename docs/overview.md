---
sidebar_position: 2
title: 🌎 Overview
description: A high-level explanation of what Code Push is and how it works.
---

# Overview

## What is Code Push?

Code Push is a tool that allows you to update your Flutter app instantly over the air, without going through the store update process. This allows you to directly deploy fixes and new features to your end users' devices.

## How does Code Push work?

Apps built with Shorebird include a modified Flutter engine, which checks for updates to your app's Dart code on startup. If an update is available, the engine downloads the update. The user will see the update on the next app restart after the update is downloaded.

A typical Code Push workflow looks like this:

1. Use the Shorebird CLI to create a new **release** of your app.
1. Distribute that release through the App Store or Google Play.
1. Make changes to your app's Dart code. This could be a bug fix, a new feature, or anything else, and is not limited to your app's UI – this can include updated Dart dependencies as well.
1. Use the Shorebird CLI to create a new **patch** to the release you created in the first step.
1. That's it! Your users will see the update the next time they restart your app.

A more detailed walkthrough of this process is available in the [Getting Started](/) guide. The [Concepts](concepts) section contains more information about the terminology used in this guide.
