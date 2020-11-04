---
layout: post
title: "pip install SSL Module in Python Is Not Available"
description: "Troubleshooting SSL Module in Python Is Not Available"
redirect_from:
  - /pip-install-ssl-module-python-is-not-available.html
categories: [Code]
image: assets/images/4.jpg
tags: [python, SSL, pip]
---

Working inside a virtual environment and running `pip install` anything was giving me this error:

    pip is configured with locations that require TLS/SSL,
    however the ssl module in Python is not available.

Also this error:

    Can't connect to HTTPS URL because the SSL module
    is not available

I wanted to install `requests` such as:

    (env)$ pip install requests

I deactivated the `virtualenv` and ran:

    $ pip install -U pip

I got this error:

    Permission denied: 'usr/bin/pip'

Then ran this. As recommended on the output:

    $ pip install -U pip --user

This worked.

Now I wanted to install `requests`:

    $ pip install requests --user

This worked too.

## Remove and Create a new `env`

I removed the `virtualenv` and created a new one:

    $ virtualenv -p /usr/bin/python3 env
    $ source env/bin/activate

Installing `requests`:

    env$ pip install requests

This works now.