---
layout: post
title: "SublimeText for Math and ML"
description: "A plugin in SublimeText to write math and machine learning formulas."
author: tom
image: assets/images/1.jpg
tags: [sublimetext, machine learning]
---

A plugin in SublimeText to write math and machine learning formulas.

I have been using this plugin for SublimeText called [UnicodeMath](https://github.com/mvoidex/UnicodeMath) to write math in SublimeText or for machine learning formulas.

This is the squared loss function for machine learning.

![Squared Loss Function Machine Learning]({{ site.baseurl }}/assets/images/squared-loss-function-machine-learning.jpg)

Without a plugin this is the best way to write this function:

	Lsq(h) = 1/n Sum(i=1 to n) (h(xi) - yi)^2

It's good enough if you are familiar with the topic. However, I prefer to use subscript and superscript, without complicating typing too much. 

I am ok with this part:

	Lsq(h) = 1/n Sum(i=1 to n)

I would prefer to have subscript and superscript here:

	(h(xi) - yi)^2

## Subscript and Superscript

After installing the plugin. You can use it by typing backslash and a character/keyword, followed by a space.

* Subscript (backslash, underscore, character, space): `\_` such as `xᵢ`
* Superscript: `\^` such as `(something)²`

This is the same formula using subscript and superscript.

	Lsq(h) = 1/n ∑(i=1 to n) (h(xᵢ) - yᵢ)²


This is the zero-one loss function without the plugin. It becomes complicated writing it without any math syntax:

	L0/1(h) = 1/n Sum(i=1 to n) delta h(xi) different than yi,
	  where delta h(xi) different than yi
	  equal to
	    1, if h(xi) is different than yi
	    0, otherwise

This is the same function with the math plugin:

	L0/1(h) = 1/n ∑(i=1 to n) δ h(xᵢ)≠yᵢ,
	where δ h(xᵢ)≠yᵢ
	equal to
	  1, if h(xᵢ)≠yᵢ
	  0, otherwise

The greek symbols are easy to remember if you are familiar with this kind of math.

Type `\Sigma` or `\delta`. Both followed by a space to convert to unicode.

## Math Cheat Sheet

These are the most likely symbols to use:

* Subscript `\_`: `Downₕₑᵣₑ`
* Superscript `\^`: `Upʰᵉʳᵉ`
* Forall `\forall`: `∀`
* Rightarrow `\rightarrow`: `→`
* Not equal `\neq`: `≠`
* "Sum" sigma `\sum`: `∑`
* Or use sigma `\Sigma`: `Σ`
* Delta `\delta`: `δ`
* Theta `\theta`: `θ`
* Lambda `\lambda`: `λ`
* Mu `\mu`: `μ`
* "Belongs to" epsilon `\varepsilon`: `ϵ`

## Type emojis

Here is the complete table for UnicodeMath: [Github repo](https://github.com/mvoidex/UnicodeMath/blob/master/table.md)

Christmas trees `\fir`:

🎄🎄🎄🎄🎄🎄🎄🎄


[![Ask me anything on Linkedin]({{ site.baseurl }}/assets/images/ama-linkedin-tomordonez.png)](https://www.linkedin.com/in/tomordonez/)