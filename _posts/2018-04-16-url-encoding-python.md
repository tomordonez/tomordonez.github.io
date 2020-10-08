---
layout: post
title: "URL Encoding and Python"
redirect_from:
  - /url-encoding-python.html
categories: [Code]
image: assets/images/3.jpg
tags: [python, url encoding]
---

This is not a full reference guide. It's just a quick reminder for URL encoding.

I am studying OAuth and I am reviewing the signature base string for a signed request.

The base string has:

* Method of request: POST
* URL: `https://api.twitter.com/statuses/update.json`
* Parameters joined by `&`

## Parameters

* include_entities = true
* oauth_consumer_key = weirdnumberhere
* oauth_signature_method = HMAC-SHA1
* oauth_token = otherweirdnumber
* oauth_version = 1.0
* status = The Chemical Brothers

## Base string

    POST&https%3A%2F%2Fapi.twitter.com%%2Fstatuses%2F
    update.json&include_entities%3Dtrue%26
    oauth_consumer_key%3Dweirdnumberhere%26
    oauth_signature_method%3DHMAC-SHA1%26oauth_token%3D
    otherweirdnumber%26oauth_version%3D1.0%26
    status%3DThe%20Chemical%20Brothers

## Hex codes

* %3A
* %2F
* %3D
* %26
* %20

## Converting character to hex in Python

The first part of the string is:

    https://

You can get the character encoding to hex using `hex(ord())`.

    >>> hex(ord(':'))
    '0x3a'
    >>> hex(ord('/'))
    '0x2f'

This is the conversion:

    https%3A%2F%2F

These are the conversions:

    >>> hex(ord('='))
    '0x3d'
    >>> hex(ord('&'))
    '0x26'
    >>> hex(ord(' '))
    '0x20'