---
layout: post
title: "Jekyll Theme Customization"
description: "Customize your Jekyll theme."
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

Customize your Jekyll theme.

The default Jekyll theme is `minima`. The [docs](https://github.com/jekyll/minima) have good details on how to set it up.

It has instructions on how to set your `_config.yml`

<details>
	<summary>Here is a template:</summary>
	<pre>
	title: Name and Title of My Blog
	email: 
	description: >-
	  Some awesome description here
	baseurl: ""
	url: "https://www.mywebsite.com"
	twitter_username: mytwitter
	github_username:  mygithub
	permalink: /:title/

	# Build settings
	theme: minima
	minima:
	  skin: solarized

	header_pages:
	  - about.md

	disqus:
	    shortname: mydisqus_shortname

	author:
	  name: My Name

	show_excerpts: true

	minima:
	  social_links:
	    twitter: mytwitter
	    github: mygithub
	    linkedin: mylinkedin_shortname

	google_analytics: myGAcode

	plugins:
	  - jekyll-feed
	  - jekyll-feed
	  - jekyll-sitemap
	  - jekyll-paginate
	  - jekyll-seo-tag
	  - jekyll-redirect-from

	exclude:
	  - .sass-cache/
	  - .jekyll-cache/
	  - gemfiles/
	  - Gemfile
	</pre>
</details>

## Jekyll Theme Customization

The default Jekyll theme is installed as a gem and you won't see the source files in your blog directory. To find the source files run this:

	$ bundle info minima


My output was this:

	* minima (2.5.1)
	Summary: A beautiful, minimal theme for Jekyll.
	Homepage: https://github.com/jekyll/minima
	Path: /home/tom/.rvm/gems/ruby-2.7.1@blog/gems/minima-2.5.1


If you open this path, the README file shows where files are located:

* The `_layouts` directory define the markup for your theme.
* The `_includes` directory has snippets of code that can be inserted in layouts.
* The `_sass` directory define the theme's styles.
* The `assets` directory contains the `main.scss`.

The `main.scss` imports sass files from the `_sass` directory. It gets processed into the theme's main stylesheet `main.css` called by `_layouts/default.html` via `_includes/head.html`.

To override the default structure and style, create the specific directory at the root of the blog, copy the file to that directory, and then edit the file.

For example:

* To override the `_includes/head.html`.
* Create an `_includes` directory in the root of your blog.
* Copy `_includes/head.html` from minima gem folder to this directory.
* Edit that file.


## Updating the default CSS

* Go to the gem path.
* Copy the `assets/` folder to your blog root.
* Edit the `/assets/main.scss` file.


## Using a different Jekyll theme

I tried a Jekyll theme that looked like [Medium](https://wowthemesnet.github.io/mundana-theme-jekyll/index.html)

Instead of installing Jekyll, do the following:

	$ git clone https://github.com/wowthemesnet/mundana-theme-jekyll.git blog
	$ cd blog
	$ bundle
	$ bundle exec jekyll serve

I liked it for a while but it had some weird bugs. I spent many hours trying to fix them but then I gave up and switched back to the default `minima` Jekyll theme.

See a step by step setup tutorial of [Jekyll with Github Pages](../static-website-jekyll-github-pages/)