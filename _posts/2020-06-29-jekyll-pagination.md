---
layout: post
title: "Jekyll and Pagination"
description: "How to setup Jekyll and Pagination."
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

How to setup Jekyll and Pagination.

Jekyll comes with a default plugin `jekyll-paginate` that you can set by adding the line `paginate: 5` to `_config.yml`. This is the Jekyll [doc](https://jekyllrb.com/docs/pagination/).

Go to `_config.yml` and make sure this line is under `plugins`:

	plugins:
	  - jekyll-paginate

Then add another line (outside of plugins):

	paginate: 5

If your theme's index is `index.markdown`, change it to `index.html` or you will get this error:

	Pagination: Pagination is enabled, but I couldn't find an index.html
	page to use as the pagination template. Skipping pagination.

Update your `_layouts/home.html`. Change this line, from this:

	for post in site.posts

To this:

	for post in paginator.posts

For pagination links, add the code as shown on [Jekyll's Render the paginated posts](https://jekyllrb.com/docs/pagination/#render-the-paginated-posts). Before the closing `endif` of `if site.posts.size > 0`.

You can center the CSS of pagination in `assets/main.scss`:

	.pagination {
		display: flex;
	}
	.previous, a.previous {
		flex: 1;
	}
	.page_number {
		flex: 1;
	}
	next, a.next {
		flex: 1;
	}
