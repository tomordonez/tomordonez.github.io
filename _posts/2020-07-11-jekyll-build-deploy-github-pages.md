---
layout: post
title: "Jekyll Build and Deploy to Github Pages"
description: "Cheat sheet Jekyll build and deploy to Github Pages"
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

Cheat sheet Jekyll build and deploy to Github Pages.

Build in development and test in localhost:

	$ bundle exec jekyll serve

Backup development files to Github:

	$ git add .
	$ git commit -m "Awesome commit message here"
	$ git push -u origin master

Deploy to production:

	$ JEKYLL_ENV=production jgd

For more details see a step by step setup tutorial of [Jekyll with Github Pages](../static-website-jekyll-github-pages/)