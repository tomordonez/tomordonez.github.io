---
layout: post
title: "Redirect stdout and stderr in bash"
redirect_from:
  - /redirect-stdout-stderr-bash.html
categories: [Linux]
image: assets/images/4.jpg
tags: [bash, stdout, stderr]
---

This is how to redirect stdout and stderr in bash.


Search for:

* IO redirection in Linux
* input redirection Linux
* output redirection Linux
* file descriptors bash

As seen <a href="http://tldp.org/LDP/abs/html/io-redirection.html" target="_blank">here</a>.

Redirect stdout to file "static."

    1>static

Redirect and append stdout to file "static."

    1>>static

Redirect stderr to file "static."

    2>static

Redirect and append stderr to file "static."

    2>>static

Redirect both stdout and stderr to file "static."

    &>static
    
Redirect stderr to stdout.

    2>&1


