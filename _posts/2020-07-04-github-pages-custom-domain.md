---
layout: post
title: "Github Pages Custom Domain"
description: "How to setup Github Pages with custom domain."
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

How to setup Github Pages with a custom domain.

For more details see a step by step setup tutorial of [Jekyll with Github Pages](../static-website-jekyll-github-pages/)

## Setup Github

Go to Github:

* Create a new repo with the format `username.github.io`

Setup the repo:

	$ git init
	$ git remote add origin link-to-repo


## CNAME, robots.txt

If you have a custom domain, create a `CNAME` file, add a line with your website, and save it to your local blog root directory:

	www.yoursite.com

Create a `robots.txt` and add this line to the file:

    User-agent: *

You can also use `Disallow` for bad URLs.

	User-agent: *
	Disallow: /bad.html
	Allow: /

Setup: [Jekyll and Cloudflare](../jekyll-cloudflare/)