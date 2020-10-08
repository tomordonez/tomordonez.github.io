---
layout: post
title: "Remote Access Linux Fedora Desktop in LAN"
redirect_from:
  - /remote-access-linux-fedora.html
categories: [Linux]
image: assets/images/3.jpg
tags: [sysadmin, linux, fedora]
---

A mini tutorial about: **remote access in Linux**.

This works if you have another computer in your LAN running a Linux Fedora Desktop. Tested on Fedora 27.

## 1. Enable Remote Access in the host

Make sure that `vino` is installed, as seen <a href="https://www.techotopia.com/index.php/Remote_Access_to_the_Fedora_Linux_Desktop" target="_blank">here</a>:

    rpm -q vino

If it says it's not installed then install with:

    sudo dnf install vino

Go to Settings > Sharing.

Turn **Sharing** to `ON`. Then **Remote Login** to `ON`.

It will show a message to use `ssh something.local` to connect to this host. Where `something` might be the host name.

## 2. Test Remote from a guest

From another computer's terminal. Type the command that was shown on the host.

    ssh something.local

It will ask to accept the signature and to login.

The prompt will change to your prompt `$`. You could add `\h` to your `bashrc` config so you don't get confused. Then use `exit` to go back to your local terminal.

## 3. SSH to IP address

I found that connecting to `something.local` for the first time it worked with no problems. Further times it wouldn't connect. I made sure the remote computer wouldn't go into suspend mode. That didn't solve the problem.

Using the remote IP address works every time. Find the remote IP and connect using SSH.

    ssh remote-IP-address

