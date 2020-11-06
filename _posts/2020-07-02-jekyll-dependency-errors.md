---
layout: post
title: "Jekyll and Dependency Errors"
description: "Troubleshooting Jekyll and dependency errors"
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

Troubleshooting Jekyll and dependency errors

When testing the site. For `jekyll-3.8.5` it says `warning: Using the last argument as keyword parameters is deprecated`.

* Also for `pathutil-0.16.2` it says the same.
* More [here](https://github.com/jekyll/jekyll/issues/7947)
* And [here](https://github.com/jekyll/jekyll/pull/7948)

Edit the `Gemfile` and comment this line again `gem "github-pages", group: :jekyll_plugins`. Then add this one:

	gem 'jekyll', github: 'jekyll/jekyll'

If you have `plugins` update them to this:

	group :jekyll_plugins do
	    gem 'jekyll-feed', github: 'jekyll/jekyll-feed'
	    gem 'jekyll-sitemap', github: 'jekyll/jekyll-sitemap'
	    gem 'jekyll-paginate', github: 'jekyll/jekyll-paginate'
	    gem 'jekyll-seo-tag', github: 'jekyll/jekyll-seo-tag'
	    gem 'jekyll-redirect-from', github: 'jekyll/jekyll-redirect-from'
	end

My `Gemfile` currently looks like this:

	source "https://rubygems.org"

	gem 'jekyll', github: 'jekyll/jekyll'

	gem "minima", "~> 2.5"

	group :jekyll_plugins do
	    gem 'jekyll-feed', github: 'jekyll/jekyll-feed'
	    gem 'jekyll-sitemap', github: 'jekyll/jekyll-sitemap'
	    gem 'jekyll-paginate', github: 'jekyll/jekyll-paginate'
	    gem 'jekyll-seo-tag', github: 'jekyll/jekyll-seo-tag'
	    gem 'jekyll-redirect-from', github: 'jekyll/jekyll-redirect-from'
	end

Then run `bundle install`

See a step by step setup tutorial of [Jekyll with Github Pages](../static-website-jekyll-github-pages/)