---
layout: post
title: "Jekyll Related Posts"
description: "How to setup Jekyll related posts using tags."
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

How to setup Jekyll related posts using tags.

This is a Jekyll custom plugin. Documentation [here](https://github.com/toshimaru/jekyll-tagging-related_posts).

Update your `Gemfile`:

	gem 'jekyll-tagging-related_posts'

Run `bundle`
	
	$ bundle

Output:

	Fetching nuggets 1.6.0
	Installing nuggets 1.6.0
	Fetching jekyll-tagging 1.1.0
	Installing jekyll-tagging 1.1.0
	Fetching jekyll-tagging-related_posts 1.1.0 
	Installing jekyll-tagging-related_posts 1.1.0

	Post-install message from nuggets:

	nuggets-1.6.0 [2018-07-12]:

	* Added <tt>JSON.*_{multi,canonical}</tt>.

	Post-install message from jekyll-tagging:

	jekyll-tagging-1.1.0 [2017-03-07]:

	* Added ability to append extra data to all tag pages. (tfe)
	* Provides compatibility to the current jekyll (3.4.1).
	* A few fixes. (felipe)
	* Some documentation improvements. (wsmoak, jonathanpberger)
	* Prooves who is the worst open source maintainer. (pattex ^__^)

Update `_config.yml` and `_config-deploy.yml`:

	plugins:
	  - jekyll/tagging
	  - jekyll-tagging-related_posts

Create a `_layouts` directory in blog root:

	$ mkdir _layouts

Copy the `post.html` layout from the `minima` theme Gem to this new directory.

	$ cp /home/tom/.rvm/gems/ruby-2.7.1@blog/gems/minima-2.5.1/_layouts/post.html _layouts/

Add this code to `post.html` after the blog post content and before disqus code.

{% raw %}

	{% if site.related_posts.size >= 1 %}
	<div>
	  <h3>Related Posts</h3>
	  <ul>
	  {% for related_post in site.related_posts limit: 5 %}
	    <li><a href="{{ related_post.url }}">{{ related_post.title }}</a></li>
	  {% endfor %}
	  </ul>
	</div>
	{% endif %}

{% endraw %}

Setup: [Jekyll Custom Plugin Deploy](../jekyll-custom-plugin-deploy/)