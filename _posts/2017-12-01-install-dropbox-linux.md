---
layout: post
title: "Installing Dropbox on Linux"
author: tom
categories: [Linux]
image: assets/images/1.jpg
tags: [dropbox, linux]
---

**Updated on Jan 11, 2020**

Follow this short tutorial for installing Dropbox on Linux

![Installing Dropbox on Linux]({{ site.baseurl }}/assets/images/installing-dropbox-linux.gif)

Go <a href="https://www.dropbox.com/install-linux" target="_blank">here</a> and choose an installer.

There are 3 install options. Choose the one that applies to you:

* Ubuntu
* Fedora
* Compile from source

Then you have to install the dropbox deamon. As seen on the source above. For example, for 64-bit you need to run this:

    $ cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -

Then run it with:

    $ ~/.dropbox-dist/dropboxd


## Too Many Dropbox Directories

If you have too many directories. More than 10,000. Dropbox will stop running.

Stop dropbox:

    $ dropbox stop

Run this:

    $ echo fs.inotify.max_user_watches=100000 | sudo tee -a /etc/sysctl.conf; sudo sysctl -p

Restart Dropbox:

    $ dropbox start

## Install Dropbox Tray Icon

The Dropbox icon might not show up on the tray. You need to install a Gnome extension.

First stop dropbox:

    $ dropbox stop

On Chrome. Install <a href="https://extensions.gnome.org/" target="_blank">GNOME shell extensions</a>

If you don't have it installed. When you open this page. There will be a notification towards the top that says:

    To control GNOME Shell extensions using this site you must install
    GNOME Shell integration that consists of two parts:
    browser extension and native host messaging application.
    Click here to install browser extension.

Go to `Click here to install browser extension`.

A popup opens asking `Add GNOME shell integration?`. Hit `Add extension`.

A new notification (warning) message now shows:

    Although GNOME Shell integration extension is running,
    native host connector is not detected.

Install `chrome-gnome-shell`. Applicable to Ubuntu or Fedora. Mine is Fedora:

    $ sudo dnf install chrome-gnome-shell


## Install the GNOME Shell extension TopIcons Fix

In a previous Fedora version, this extension used to work:

`TopIcons Plus`. Link [here](https://extensions.gnome.org/extension/1031/topicons/)

I am currently on `Fedora 31` with `GNOME 3.34.2`.

I removed TopIcons Plus and installed this `TopIcons Fix`. Link [here](https://extensions.gnome.org/extension/1674/topiconsfix/)

Restart dropbox:

    $ dropbox start


## Sync specific folder

Now the Dropbox icon should be on the taskbar.

Go to:

* Dropbox icon
* Preferences
* Sync
* Selective Sync

Then choose the folders that you want to sync.

## Dropbox CLI command line

On the command line run this:

    $ dropbox help

Output:

    commands:

    Note: use dropbox help <command> to view usage for a specific command.

     autostart    automatically start Dropbox at login
     exclude      ignores/excludes a directory from syncing
     filestatus   get current sync status of one or more files
     help         provide help
     lansync      enables or disables LAN sync
     ls           list directory contents with current sync status
     proxy        set proxy settings for Dropbox
     puburl       get public url of a file in your Dropbox's public folder
     running      return whether Dropbox is running
     sharelink    get a shared link for a file in your Dropbox
     start        start dropboxd
     status       get current status of the dropboxd
     stop         stop dropboxd
     throttle     set bandwidth limits for Dropbox
     update       download latest version of Dropbox
     version      print version information for Dropbox

Update dropbox with this:

    $ dropbox updateversion information for Dropbox

Update dropbox with this:

    $ dropbox update