---
layout: post
title: "Jekyll and External Links"
description: "Open Jekyll external links in a new window."
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

Open Jekyll external links in a new window.

By default linking to external sites open in the same window using this syntax:

	[External Title](link to external site)

Jekyll uses `kramdown` and you can link like this:

	[External Title](link to external site){:target="_blank"}

What I find annoying about this, is that it adds a weird highlighted row in SublimeText. I also think it's a weird syntax to remember.

## Setup Jekyll and External Links

An alternative option is this JS called [new window fix](https://jekyllcodex.org/without-plugin/new-window-fix)

Download the code into `_includes/new-window-fix.html` and remove the `PDF` section if you don't need it.

Add this to your `_layouts/default.html` before the closing `body` tag.

{% raw %}

	{% include new-window-fix.html %}

{% endraw %}

## Add external link to menu

There isn't a clear way to add an external link to the menu as discussed on [navigation external links](https://github.com/jekyll/minima/issues/207).

This [comment](https://github.com/jekyll/minima/issues/207#issuecomment-377095111) shows a quick fix to add the external link to `_includes/header.html`. I added a link to my Linkedin profile as shown:

{% raw %}

	<div class="trigger">
	  {%- for path in page_paths -%}
	    {%- assign my_page = site.pages | where: "path", path | first -%}
	    {%- if my_page.title -%}
	    <a class="page-link" href="{{ my_page.url | relative_url }}">{{ my_page.title | escape }}</a>
	    <a class="page-link" href="https://www.linkedin.com/in/tomordonez/">Linkedin</a>
	    {%- endif -%}
	  {%- endfor -%}
	</div>

{% endraw %}

The `header_pages` has to be enabled in `_config.yml` for the menu to show. I have an about page here:

	header_pages:
	  - about.md