---
layout: post
title: "Curly Braces in Markdown with Jekyll"
categories: [Code]
image: assets/images/7.jpg
tags: [jekyll, markdown]
---

As seen [here](https://stackoverflow.com/questions/24102498/escaping-double-curly-braces-inside-a-markdown-code-block-in-jekyll)

If you use double curly braces in code blocks in markdown with Jekyll. They just won't show up.

Enclosed the code block in `raw` and `endraw` tags.

{% raw %}

	{% raw %}
		{{some code here}}
	{% endraw %}

{% endraw %}

Adding a `JavaScript` code block also causes Reader View (for example in Safari mobile) to misbehave.

Other resources:

