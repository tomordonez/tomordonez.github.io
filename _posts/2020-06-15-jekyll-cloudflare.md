---
layout: post
title: "Jekyll and CloudFlare"
description: "How to setup Jekyll with CloudFlare"
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

How to setup Jekyll with CloudFlare.

Setup an account with Cloudflare if you don't have one. Find the DNS name server

In your DNS provider point it to Cloudflare.


## Cloudflare settings

Create these records in Cloudflare:

    Type    Name               Content
    ALIAS   yoursite.com       youruser.github.io
    CNAME   www.yoursite.com   youruser.github.io
    TXT     yoursite.com       youruser.github.io


Add `A` records as seen on [Setting up an Apex domain](https://help.github.com/articles/setting-up-an-apex-domain/)

Add `TXT` record to verify Google webmaster tools:

* Add property
* Add TXT google verification code


Setup these Page rules. As seen [here](https://www.jonathan-petitcolas.com/2017/01/13/using-https-with-custom-domain-name-on-github-pages.html)

    https://www.yoursite.com/*
    Cache Level: Cache Everything

    https://yoursite.com/*
    Forwarding URL: (Status Code: 301 - Permanent Redirect, URl: https://www.yoursite.com$1)

    http://www.yoursite.com/*
    Always Use HTTPS

In your Overview dashboard set these (if you are on the free plan)

* Security level: medium
* SSL: Full
* Caching level: Standard

See a step by step setup tutorial of [Jekyll with Github Pages](../static-website-jekyll-github-pages/)