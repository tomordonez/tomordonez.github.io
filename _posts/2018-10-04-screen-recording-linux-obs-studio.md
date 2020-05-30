---
layout: post
title: "Screen Recording in Linux with OBS Studio"
redirect_from:
  - /screen-recording-linux-obs-studio.html
categories: [Linux]
image: assets/images/6.jpg
tags: [linux, screencast, obs-studio]
---

OBS Studio is an open source software for screen recording. Applicable to Windows, MAC and Linux.


## Installing OBS Studio on Linux

I am on Linux Fedora. These are the two commands to follow:

    sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

Then install with:

    sudo dnf install obs-studio

Output shows:

    Installing:
      obs-studio
    Installing dependencies:
      obs-studio-libs
      x264

    Total download size: 4.1 M
    Installed size: 11 M

## OBS Studio Configuration

Once you open the program, it might have a popup window called "Auto-Configuration Wizard".

If you tap on "Yes".

Usage information:

1. Optimize for streaming, recording is secondary.
2. Optimize for recording, I will not be streaming.

I chose option 2.

Video settings:

* Base (Canvas) Resolution: Use current 1366x768
* FPS: Either 60 or 30, but prefer 60 when possible.

Those were the default values.

Final results:

* The program is now executing a set of tests.

Nothing to do here. Just wait for the test to be completed. Then "Apply Settings".

## Adding Screen, Camera and Audio

Add the Screen:

* Inside the Sources window.
* Tap the plus sign.
* Select Screen Capture
* Create new.

A popup window shows:

* Properties for "Screen Capture"
* Capture Cursor: Selected by default
* Tap on OK

Add the camera:

* Sources window.
* Plus sign.
* Video capture device.
* Pop window.
* Review defaults.
* OK
* Reisize camera layer.

Add audio:

* Desktop audio is already added. Mute or leave the default.
* Mic is also already added.
* For the Mic, go to the wheel to open settings.
* Choose Filters.
* Filters window. Plus sign to add a new filter.
* Select compressor. Review defaults.
* Add new filter. Noise supression.
* You can play with these filter settings once you do some screen capture testing.

Controls settings:

* Bottom right. Controls menu. Settings.
* Output. Recording path. Leave default or modify. I like to change to my `Videos` folder.
* Output. Recording format. Default is `flv`. I like `mp4` instead. Choosing this will show a warning.
* Hotkeys. Start Recording. I like to use `Ctrl+Shift+R`. Then set Stop Recording to the same.

Apply and OK

## Record the screen

Test screen capture:

* Bottom right menu
* Start recording
* Test what you want to capture
* Test the mic
* Stop recording
* Review video
* Modify Mic settings.