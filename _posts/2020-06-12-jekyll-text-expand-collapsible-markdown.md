---
layout: post
title: "Jekyll Text Expand or Collapsible Markdown"
description: "Hide or show text in Jekyll with text expand or collapsible markdown."
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

Hide or show text in Jekyll with text expand or collapsible markdown.

I often add whole output to every command I use. This can take a large space in a blog post and might disrupt reading focus.

There are three options for hiding/display text that can be expanded, also known by these keywords: text expand, expand/collapse, collapsible markdown, details element.

Use whatever works best.

### Text Expand

This is a JS that might need some tweaking. When you click on `read more` it expands the section but it scrolls back to the top.

This is the doc for [Jekyll Text Expand](https://jekyllcodex.org/without-plugin/text-expand/).

Download the file `text-expand.html` into the `_includes` directory. Then edit the `_layouts/default.html` and add this before the closing `body` tag:

{% raw %}

	{% include text-expand.html %}

{% endraw %}

Then you can use the `expand` tag in a blog post by adding only one line for each of the open/closing tag such as:

	[expand]
	Long content here
	and here
	...
	[/expand]

### Collapbsible Markdown with Details element

This uses the details disclosure element: `details`. More details in the [Mozilla details element doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).

You have to wrap your content like this:

	<details>
		<summary>Click to expand</summary>
		Long content here
		and here
	</details>

To add a code block, you need to have a previous empty line, enclose the code block with three tildes `~~~`, optionally you can add the language at the end of the first enclosing tildes:

	<details>
		<summary>Click to expand</summary>
		
		~~~ python
		Code here
		~~~
	</details>

However, you can encounter this issue [Details is not formatted correctly in Jekyll/Github pages](https://gist.github.com/ericclemmons/b146fe5da72ca1f706b2ef72a20ac39d#gistcomment-2710296). You can enclose the content with the `<pre>` tag.

I am using this for my long content output:

	<details>
		<summary>Click to expand</summary>
		<pre>
			
		Long content here
		</pre>

	</details>

Here is an example:

<details>
	<summary>Click to expand</summary>
	<pre>

	Long content here
	</pre>

</details>

I also customized the CSS:

	details {
		padding-bottom: 20px;
		color: grey;
	}

### The text in details not processed correctly

I haven't tested this. This blog post shows [adding support for HTML5 details element to Jekyll](http://movb.de/jekyll-details-support.html). It uses a custom plugin.

Add the `ruby` code into `_plugins/details_tag.rb`.

Then use like this:

{% raw %}

	{% details Click to expand %}

		~~~ python
		Code here
		~~~
	{% enddetails %}

{% endraw %}

More troubleshooting in [using details in Github](https://gist.github.com/ericclemmons/b146fe5da72ca1f706b2ef72a20ac39d) and [collapsible markdown](https://gist.github.com/joyrexus/16041f2426450e73f5df9391f7f7ae5f).

See [Jekyll without Plugins](../jekyll-without-plugins/) for other customizations.