---
layout: post
title: "Remote Tmux Inside a Local Tmux"
redirect_from:
  - /remote-tmux-inside-local-tmux.html
categories: [Linux]
image: assets/images/3.jpg
tags: [tmux, ssh, fedora]
---

How to work with an SSH remote Tmux inside a local Tmux.

To provide some context, these are relevant blog posts:

* [How to Install Tmux on Linux](https://www.tomordonez.com/install-tmux-linux.html)
* [Remote Access a Linux Fedora In Your LAN](https://www.tomordonez.com/remote-access-linux-fedora.html)
* [Reload Tmuxinator](https://www.tomordonez.com/reload-tmuxinator.html)

I connect to another Linux laptop in my LAN using SSH. Then I use Tmux on that machine.

As seen <a href="https://superuser.com/questions/249659/how-to-detach-a-tmux-session-that-itself-already-in-a-tmux" target="_blank">here</a>. You can dettach from a remote tmux session, if you are already in a local tmux session.

Inside your remote tmux SSH session. You have to use your `prefix` twice. My prefix is set to `Ctrl+a`, and I have my `Ctrl` key mapped to `Caps`.

After connecting SSH and opening tmux on that machine. You can dettach by using:

    prefix prefix d

In my case I use:

    Ctrl+a Ctrl+a d

This will dettach my remote tmux.

You can follow the same process to interact with your remote tmux SSH session.

To move to the next tab I use `Ctrl+a n`. To move to the next vertical split in the same tab I use `Ctrl+a l` to move to the right, and `Ctrl+a h` to move to the left.

For the remote tmux SSH session I do this:

    Ctrl+a Ctrl+a n
    Ctrl+a Ctrl+a l
    Ctrl+a Ctrl+a h
