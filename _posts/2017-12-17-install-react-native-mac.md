---
layout: post
title: "Install React Native on Mac"
redirect_from:
  - /install-react-native-mac.html
categories: [Code]
image: assets/images/1.jpg
tags: [react native, mobile dev, app, mobile, mobile design]
---

Follow this simple tutorial to install React Native on Mac.

## Install Node

Download the Node installer from <a href="https://nodejs.org/en/" target="_blank">here</a>.

When I published this tutorial 12/17/17. The current Node version was `8.9.3 LTS`.

## This package will install:

* Node.js v8.9.3 to /usr/local/bin/node
* npm v5.5.1 to /usr/local/bin/npm

## Make sure that /usr/local/bin is in your $PATH

    $ echo $PATH

    /usr/local/bin

## Check node version

    $ node -v
    v8.9.3

    $ npm -v
    5.5.1

## Fixing npm permissions

Fixing npm permissions as seen <a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions" target="_blank">here</a>.

    $ npm config get prefix
    /usr/local

    $ sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}


## Install `create-react-native-app`

Go to the official react native docs <a href="https://facebook.github.io/react-native/docs/getting-started.html" target="_blank">here</a>.

"Create React Native App does not currently work with npm v5. We strongly recommend using npm v3, v4, or a recent version of Yarn".

## Install Yarn:

Follow the official Yarn doc <a href="https://yarnpkg.com/lang/en/docs/install/" target="_blank">here</a>

    $ brew install yarn --without-node

    ==> Downloading https://yarnpkg.com/downloads/1.3.2/yarn-v1.3.2.tar.gz
    ==> Downloading from https://github.com/yarnpkg/yarn/releases/download/v1.3.2/yarn-v1.3.2.tar.gz
    /usr/local/Cellar/yarn/1.3.2: 14 files, 3.9MB, built in 8 seconds

## Install `create-react-native-app` using Yarn

    $ yarn global add create-react-native-app

    yarn global v1.3.2
    [1/4] Resolving packages...
    [2/4] Fetching packages...
    [3/4] Linking dependencies...
    [4/4] Building fresh packages...
    success Installed "create-react-native-app@1.0.0" with binaries:
      - create-react-native-app

## Create a react native app

    $ create-react-native-app AwesomeProject

    Creating a new React Native app in /Users/../AwesomeProject.

## Start the app

    $ cd AwesomeProject

    $ yarn start
    yarn run v1.3.2

## Output Error Unable to start server

    $ react-native-scripts start

    23:15:49: Unable to start server
    See https://git.io/v5vcn for more information, either install watchman or run the following snippet:
    sudo sysctl -w kern.maxfiles=5242880
    sudo sysctl -w kern.maxfilesperproc=524288

    error Command failed with exit code 1.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

<a href="https://github.com/react-community/create-react-native-app/issues/382" target="_blank">This</a> page had 2 solutions:

1. Run the `sudo sysctl` commands or
2. Install Watchman.

Here is more info about `Watchman`:

`Watchman` is a file watching service open sourced by Facebook.

"<a href="https://facebook.github.io/watchman/" target="_blank">Watchman</a> exists to watch files and record when they change. It can also trigger actions (such as rebuilding assets) when matching files change."

The solution with the most thumbs up is this one:

    $ sudo sysctl -w kern.maxfiles=5242880
    kern.maxfiles: 12288 -> 5242880

    $ sudo sysctl -w kern.maxfilesperproc=524288
    kern.maxfilesperproc: 10240 -> 524288

Here is more info about this command:

`sysctl` is used to get or set kernel state.

<a href="https://www.freebsd.org/doc/handbook/configtuning-kernel-limits.html" target="_blank">Here</a> is more info about "tuning kernel limits":

It says that "The kern.maxfiles sysctl(8) variable can be raised or lowered based upon system requirements. This variable indicates the maximum number of file descriptors on the system"

<a href="http://krypted.com/mac-os-x/maximum-files-in-mac-os-x/" target="_blank">Here</a> is some more info about this:

"By default, the maximum number of files that Mac OS X can open is set to 12,288 and the maximum number of files a given process can open is 10,240."

It also says that if you reboot, that it will go back to the original values. Although there is a workaround as seen on that post.

## Start development server

    $ yarn start

It will show this output:

    yarn run v1.3.2
    $ react-native-scripts start
    12:11:00: Starting packager...
    Packager started!

    To view your app with live reloading, point the Expo app to this QR code.
    You'll find the QR scanner on the Projects tab of the app.

    GIANT QR CODE HERE
    ...

    Or enter this address in the Expo app's search bar:

    exp://10.0.0.10:19000

    Your phone will need to be on the same local network as this computer.
    For links to install the Expo app, please visit https://expo.io.

    Logs from serving your app will appear here. Press Ctrl+C at any time to stop.

    › Press a to open Android device or emulator, or i to open iOS emulator.
    › Press q to display QR code.
    › Press r to restart packager, or R to restart packager and clear cache.
    › Press d to toggle development mode. (current mode: development)

## Install the Expo client app

As seen in the Expo doc <a href="https://expo.io/learn" target="_blank">here</a>:

Download the app on your phone. Then scan the QR code on your terminal.

Back in the Terminal now says:

    12:17:51: Finished building JavaScript bundle in 69956ms
    12:17:58: Running app on Tom O in development mode

To stop use `Ctrl+C`.

    12:36:05: Stopping packager...
    12:36:06: Packager stopped.

