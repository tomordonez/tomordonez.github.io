---
layout: post
title: "Curly Braces in Markdown with Jekyll"
author: tom
categories: [Code]
image: assets/images/7.jpg
tags: [jekyll, markdown]
---

As seen [here](https://stackoverflow.com/questions/24102498/escaping-double-curly-braces-inside-a-markdown-code-block-in-jekyll)

If you use double curly braces in code blocks in markdown with Jekyll. They just won't show up.

Enclosed the code block in `raw` and `endraw` tags.

	{% raw %}
	{{some code here}}
	{% endraw %}

The tags need to be enclosed with external curly braces `{` and internal percentage `%`. Such as `curly percentage raw percentage curly`. It's funny cause I cannot add the `raw tag` syntax on a code block.

	open-curly percentage raw percentage close-curly
	{% raw %}
	{{some code here}}
	{% endraw %}
	open-curly percentage endraw percentage close-curly