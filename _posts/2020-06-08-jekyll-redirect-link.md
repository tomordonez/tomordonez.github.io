---
layout: post
title: "Jekyll Redirect Link"
description: "Create Jekyll redirect links when migrating your website."
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

Create Jekyll redirect links when migrating your website, for links that changed or that were removed.

Add this to the `Gemfile` in the `plugins` block:

	gem 'jekyll-redirect-from', github: 'jekyll/jekyll-redirect-from'

Then run `bundle install`.

As seen in the docs [here](https://github.com/jekyll/jekyll-redirect-from)

Add it to the `_config.yml` under `plugins`

	- jekyll-redirect-from

My problem was that for my previous website, the blog posts had this format:

	blog_post_name.html

This new website removes the `.html` and a lot of blog posts crawled by google are being sent to a `404 File not found page`.

I want to redirect `blog_post_name.html` to `blog_post_name/`

In the blog post the header should show something like this:

	title: "Blog Post Name"
	redirect_from:
	  - /blog_post_name.html

## 404 page

More about 404 pages [here](https://help.github.com/en/github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)

You can create a `404.md` file if you add this:

	---
	layout: page
	title: "Not Found"
	permalink: "/404.html"
	comments: false
	redirect_from:
	  - /index2.html
	---

Use the `redirect_from:` to redirect bad URLs from Google search results. Or use the same approach for blog posts. You can also try to fix them in your Google Search Console.