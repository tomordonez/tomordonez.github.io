---
layout: post
title: "Python Adding Days to Date and Python Pandas"
description: "Adding days to a date in Python using datetime. Use Python Pandas to concatenate dates with strings."
author: tom
image: assets/images/1.jpg
tags: [python, pandas]
---

Adding days to a date in Python using datetime and timedelta. Use Python Pandas to concatenate dates with strings.

I wanted to create 20 files with this syntax `date-blog-post-name`. I wrote a very extensive [D3 Tutorial](../d3-tutorial-data-visualization/) and wanted to break it down into smaller blog posts, published sequentially 5 days apart.

The blog posts needed to have this naming syntax:

	YYYY-MM-DD-name-of-blog-post.md

I extracted the headlines `H2` of the original blog post and made an array like this:

	>>> posts = ['-setup-d3-step-by-step.md', '-d3-and-asynchronous.md', 
	'-d3-and-incompatible-versions.md', '-d3-load-a-csv-file-with-promises.md', 
	'-d3-convert-string-to-date.md', '-d3-bind-data-to-dom.md', '-d3-drawing-svg.md', 
	'-d3-creating-a-bar-chart.md', '-d3-using-scales.md', '-d3-linear-scale.md', 
	'-d3-band-scale.md', '-d3-scales-in-a-bar-chart.md', '-d3-responsive-visualization.md', '-d3-arrow-functions.md', '-d3-adding-axes-to-bar-chart.md', 
	'-d3-bar-chart-title-and-labels.md', '-d3-visualization-margins.md', 
	'-d3-mouse-event-handler.md', '-embedding-d3-in-a-website.md']

How do I add the prefix dates?

	2020-05-12
	2020-05-17
	...

To have files like these?

	2020-05-12-setup-d3-step-by-step.md
	2020-05-17-d3-and-asynchronous.md
	...


## Adding days to a date in Python

Let's get to it.

	>>> import datetime
	>>> datetime.date.today() + 5

Error:

	TypeError: unsupported operand type(s) for +: 'datetime.date' and 'int'

Should I then add the days to the day in the date?

	>>> datetime.date.today().day + 5
	14

This can't be right.

## Adding days to date in Python with timedelta

Let's look at the Python docs: [datetime](https://docs.python.org/3/library/datetime.html). Looking at `timedelta`

	A timedelta object represents a duration, the difference between two dates or times.

You can do this:

	new_date = old_date + datetime.timedelta(days=N)

With an example:

	>>> import datetime
	>>> today = datetime.date.today()
	datetime.date(2020, 11, 10)

	>>> tomorrow = today + datetime.timedelta(days=1)
	>>> tomorrow
	datetime.date(2020, 11, 11)

Let's test this. What happens if I add 60 days:


	>>> sixty_days = today + datetime.timedelta(days=60)
	>>> sixty_days
	datetime.date(2021, 1, 9)

## Using isoformat

The syntax to create a date is:

	>>> datetime.date(YYYY, M, D)

Such as:

	>>> post_date = datetime.date(2020, 5, 12)
	>>> post_date
	datetime.date(2020, 5, 12)

However, I want the date string, not the weird date object.

	>>> post_date.isoformat()
	'2020-05-12'

## Creating an array of dates, adding days to a date

Easy for loop:

	>>> post_date
	datetime.date(2020, 5, 12)

	>>> date_list = []
	>>> for post in range(1, 20):
	        post_date += datetime.timedelta(days=5)
	        date_list.append(post_date.isoformat())

Then let's see the output

	>>> date_list
	['2020-05-12', '2020-05-17', '2020-05-22', '2020-05-27', '2020-06-01', 
	'2020-06-06', '2020-06-11', '2020-06-16', '2020-06-21', '2020-06-26', 
	'2020-07-01', '2020-07-06', '2020-07-11', '2020-07-16', '2020-07-21', 
	'2020-07-26', '2020-07-31', '2020-08-05', '2020-08-10']

Now I have a `date_list` array with dates and a `posts` array with blog post names. How do I join them?

## Python Pandas join strings or concatenate strings

Create two dataframes:

	>>> import pandas
	>>> date_list_df = pandas.DataFrame(date_list)
	>>> posts_df = pandas.DataFrame(posts)

The dataframes show the data under column `0`:

	>>> date_list_df
		0
	0   2020-05-12
	1   2020-05-17
	2   2020-05-22
	3   2020-05-27
	4   2020-06-01
	5   2020-06-06
	6   2020-06-11
	...

	>>> posts_df                                                                                                                                                                 
		0
	0	-setup-d3-step-by-step.md
	1	-d3-and-asynchronous.md
	2	-d3-and-incompatible-versions.md
	3	-d3-load-a-csv-file-with-promises.md
	4	-d3-convert-string-to-date.md
	5	-d3-bind-data-to-dom.md
	6	-d3-drawing-svg.md
	...

I tried `join` but this didn't work:

	>>> date_list_df.join(posts_df)

	ValueError: columns overlap but no suffix specified: RangeIndex(start=0, stop=1, step=1)

Add names to the columns:

	>>> posts_df.columns = ['post_name']
	>>> date_list_df.columns = ['date']

Tried `join` again but this isn't what I wanted to do:

	>>> date_list_df.join(posts_df)

	          date                  post_name
	0   2020-05-12  -setup-d3-step-by-step.md
	1   2020-05-17  -d3-and-asynchronous.md
	2   2020-05-22  -d3-and-incompatible-versions.md
	3   2020-05-27  -d3-load-a-csv-file-with-promises.md
	4   2020-06-01  -d3-convert-string-to-date.md
	5   2020-06-06  -d3-bind-data-to-dom.md
	6   2020-06-11  -d3-drawing-svg.md


I want to concatenate the date with the post name:

	>>> posts_names = date_list_df['date'].str.cat(posts_df['post_name'])
	
	0    2020-05-12-setup-d3-step-by-step.md
	1    2020-05-17-d3-and-asynchronous.md
	2    2020-05-22-d3-and-incompatible-versions.md
	3    2020-05-27-d3-load-a-csv-file-with-promises.md
	4    2020-06-01-d3-convert-string-to-date.md
	5    2020-06-06-d3-bind-data-to-dom.md
	6    2020-06-11-d3-drawing-svg.md

Then create an array from the dataframe:

	>>> posts_names_array = posts_names.array

## Copying and creating many files in Python

I wanted to do the same you do on the shell:

	$ cp source_file new_file

And repeat for all the posts names in `posts_names_array`.

Use the Python modules `os` and `shutil`.

	>>> import os
	>>> import shutil

	>>> dest_dir = '_posts/'
	>>> source_post = '_posts/2020-02-02-d3-tutorial-data-visualization.md'

Then go through the array:

	>>> for post in posts_names_array:
			shutil.copy2(source_post, dest_dir+post)

Output:

	'_posts/2020-05-12-setup-d3-step-by-step.md'
	'_posts/2020-05-17-d3-and-asynchronous.md'
	'_posts/2020-05-22-d3-and-incompatible-versions.md'
	'_posts/2020-05-27-d3-load-a-csv-file-with-promises.md'
	'_posts/2020-06-01-d3-convert-string-to-date.md'
	'_posts/2020-06-06-d3-bind-data-to-dom.md'
	'_posts/2020-06-11-d3-drawing-svg.md'
	...

[![Ask me anything on Linkedin]({{ site.baseurl }}/assets/images/ama-linkedin-tomordonez.png)](https://www.linkedin.com/in/tomordonez/)