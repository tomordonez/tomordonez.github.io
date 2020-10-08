---
layout: post
title: "Wget to download files"
redirect_from:
  - /wget-download-files.html
categories: [Code]
image: assets/images/2.jpg
tags: [linux, wget]
---

This is how you use **wget to download** files from the shell.

For example. Download `pdf` files from a site:

    wget -r -l1 -A pdf --random-wait -e robots=off -U mozilla -nd -np -nc URL

This is what this means:

* `-r`: recursive
* `-l1`: level 1. Only the current directory
* `-A pdf`: Only pdf files
* `--random-wait -e robots=off -U mozilla`: A good practice to appear human.
* `-nd`: No directories
* `-np`: No parent directories
* `-nc`: "no clobber". This means only download files if they are newer or you didn't download them yet.