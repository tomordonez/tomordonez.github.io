---
layout: post
title: "Redirect stdout and stderr in bash"
author: tom
categories: [Linux]
image: assets/images/4.jpg
tags: [linux, bash, stdout, stderr]
---

This is how to redirect stdout and stderr in bash.

![Redirect stdout and stderr in bash]({{ site.baseurl }}/assets/images/redirect-stdout-stderr-bash.png)

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


## If you have questions or comments please add them below

![Ask Question or Comment]({{ site.baseurl }}/assets/images/tomordonez-ask-question-comment.gif)
elow

![Ask Question or Comment]({{ site.baseurl }}/assets/images/tomordonez-ask-question-comment.gif)
