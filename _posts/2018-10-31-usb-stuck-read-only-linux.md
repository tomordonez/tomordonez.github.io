---
layout: post
title: "USB Stuck in Read Only in Linux"
redirect_from:
  - /usb-stuck-read-only-linux.html
categories: [Linux]
image: assets/images/4.jpg
tags: [linux]
---

Fixing a usb stuck in read only in Linux

As seen <a href="https://askubuntu.com/questions/563764/usb-devices-showing-as-read-only" target="_blank">here</a>.

I have an external drive that I used for backing up some files. I plugged it in again and tried to copy some files but got an error saying that the drive was in "read-only".

This is applicable to Linux.

The solution was doing this:

    $ killall nautilus