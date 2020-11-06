---
layout: post
title: "Jekyll Search Bar"
description: "Add a search bar to Jekyll."
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

Add a search bar to Jekyll.

## Setup Jekyll Search

Here is the documentation to [Search with Lunr.js](https://jekyllcodex.org/without-plugin/search-lunr/#)

Save the file `search-lunr.html` in `_includes`. In this file, you can exclude the types of documents to search. For example:

	if page.url contains '.xml' or page.url contains 'assets' or page.url contains '.json' or page.url contains 'about.html'

Download the file `lunr.js` into your `js` folder, then make sure that `search-lunr.html` indicates the correct location of the file. For example:

	src="/assets/js/lunr.js"

I copied the `default.html` layout file from my Gem location to the `_layouts` directory:

	cp /home/tom/.rvm/gems/ruby-2.7.1@blog/gems/minima-2.5.1/_layouts/default.html _layouts/

Inside the `default.html` layout page, include the `search-lunr.html` as indicated in the docs inside curly percentage brackets. Add this in the `main` class, before the `content` tag.

	include search-lunr.html

## CSS for Jekyll Search

Customize the CSS for the search box. At the bottom of `search-lunr.html` there is code with the form. You can wrap this in a class:

	<div class="search">
	    <form onSubmit="return lunr_search(document.getElementById('lunrsearch').value);">
	        <p><input type="text" class="form-control" id="lunrsearch" name="q" maxlength="255" value="" placeholder="Search" /></p>
	    </form>
	</div>

Then in `assets/main.scss` you can try something like this:

	.search input {
	    height: 30px;
	    width: 60%;
	    padding-left: 10px;
	    border: 1px solid #D9D9D9;
	    border-radius: 10px;
	    font-size: 16px;
	}