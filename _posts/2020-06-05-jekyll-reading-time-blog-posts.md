---
layout: post
title: "Jekyll and Reading Time Blog Posts"
description: "Add reading time for blog posts in Jekyll"
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

Add reading time for blog posts in Jekyll without a custom plugin.

Similar to Medium you can show the time it will take to read the blog post.

Here is the documentation to [reading time](https://jekyllcodex.org/without-plugin/reading-time-indicator/#)

Create the file `reading-time.html` in your `_includes` and add the code shown on the doc.

Go to your `_layouts/post.html` and include the `reading-time.html` line within the `header` tag, before the closing paragraph. You can test to see if it shows correctly on your blog post such as `Aug 29, 2020 • tom • 3 min read`.

Deploy the source to `master`:

	$ jekyll build
	$ git add .
	$ git commit -m "Added reading time"
	$ git push -u origin master

See [Jekyll without Plugins](../jekyll-without-plugins/) for other customizations.