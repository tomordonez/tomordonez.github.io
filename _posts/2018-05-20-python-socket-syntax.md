---
layout: post
title: "Python Socket Syntax"
redirect_from:
  - /python-socket-syntax.html
categories: [Code]
image: assets/images/8.jpg
tags: [python, socket]
---

As seen on late night TV...

* Python3
* Linux

Thou shall:

    import socket
    sux = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

Did I dream this? I could be sure that I wrote this tutorial before but I cannot find it.

To read the official docs about Python sockets go <a href="https://docs.python.org/3/library/socket.html" target="_blank">here</a>.

First you start with importing the module:

    import socket

Then you need to create a `socket` object and pass some arguments:

* `socket.AF_INET`: This means `address family internet protocol v4`
* `socket.SOCK_STREAM`: This means a `TCP socket`.

## Other arguments

These are the default for IPv4 and TCP:

* `socket.AF_INET`
* `socket.SOCK_STREAM`

If you want `IPv6`:

* `socket.AF_INET6`

If you want `UDP`:

* `socket.DGRAM`

Different socket families use different number of arguments:

* `AF_INET`: A pair-tuple `(host, port)`.
* `AF_INET6`: A four-tuple `(host, port, flowinfo, scopeid)`.

You can also use `bluetooth`:

* `AF_BLUETOOTH`

## Closing the socket

If you do this:

    import socket
    sux = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sux.connect( (host, port) )

Then you have to close it like this:

    sux.close()

Keep in mind that the argument for `IPv4` (`AF_INET`) is a pair-tuple:

    sux.connect( (host, port) )

You don't need the whitespace but it helps me remember that it needs a tuple. This won't work:

    sux.connect(host, port)

You can also open and close the socket like this:

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sux:
        sux.connect( (host, port) )

Which has a similar syntax as the `open` method.

    with open('simpsons.txt', 'r') as fhandle:

## Summary

The default:

* AF_INET: IPv4
* SOCK_STREAM: TCP

Using `with...as`:

    import socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sux:
        sux.connect( (host, port) )
        ...
        something_awesome_here
        ...