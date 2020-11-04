---
layout: post
title: "Disable Touchscreen on Ubuntu"
description: "Follow this process to disable touchscreen on Ubuntu"
redirect_from:
  - /disable-touchscreen-ubuntu.html
  - /disable-touchscreen-ubuntu.html
author: tom
categories: [Linux]
image: assets/images/7.jpg
tags: [ubuntu, linux, touchscreen]
---

Follow this process to **disable touchscreen on Ubuntu**.

Go to the terminal and type `man xinput`

It says that `xinput` is a utility to configure and test X input devices.

It has a lot of options but the one we are interested in is `list`

Then do this:

    xinput --list

It will show you something like this:

    Virtual core pointer                            id=2    [master pointer  (3)]
    ⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
    ⎜   ↳ SynPS/2 Synaptics TouchPad                id=13   [slave  pointer  (2)]
    ⎜   ↳ Raydium Corporation Raydium Touch System  id=15   [slave  pointer  (2)]
    ⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
        ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
        ↳ Power Button                              id=6    [slave  keyboard (3)]
        ↳ Video Bus                                 id=7    [slave  keyboard (3)]
        ↳ Video Bus                                 id=8    [slave  keyboard (3)]
        ↳ Sleep Button                              id=9    [slave  keyboard (3)]
        ↳ Integrated Camera                         id=11   [slave  keyboard (3)]
        ↳ AT Translated Set 2 keyboard              id=12   [slave  keyboard (3)]

Find the touchscreen system id and disable it.

I initially got confused between choosing Touchpad and Touch System. I looked up Raydium Corporation and indeed they do touch screens.

In my case the `id` is `15`

So I did this:

    xinput disable 15

If you feel like you made a mistake and cannot live without the touchscreen then just do the opposite:

    xinput enable 15

Using obviously the `id` that corresponds to your config.

## Other resources to disable touchscreen on Ubuntu

* [Disable touchscreen on Ubuntu 18.04](https://askubuntu.com/questions/1038248/how-to-disable-touchscreen-permanently-on-ubuntu-18-04)
* [Disable touchscreen on Dell Inspiron and Ubuntu](http://www.pakzilla.com/2018/05/22/how-to-disable-touch-screen-of-dell-inspiron-14-5000-series-in-ubuntu-18-04/)
* [Disable touchscreen on ASUS and Ubuntu 16.04](http://jaykilleen.com/posts/disable-the-touchscreen-and-touchpad-on-asus-running-ubuntu-16-04)