---
layout: post
title: "Terminate SSH Connection"
redirect_from:
  - /terminate-ssh-connection.html
categories: [Code]
image: assets/images/1.jpg
tags: [ssh, ec2, aws]
---


I keep forgetting how to terminate an SSH connection when it gets stuck.

I always end up in <a href="https://apple.stackexchange.com/questions/35524/what-can-i-do-when-my-ssh-session-is-stuck" target="_blank">this</a> page.

Type `Enter`, `~` and then `.` period.

This also works if you `vim` or `nano` a file and you come back to the shell and seems to be stuck. Typing this combination will exit.

