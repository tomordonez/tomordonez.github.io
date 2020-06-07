---
layout: post
title: "Python, Files, and OS Module"
categories: [Code]
image: assets/images/11.jpg
tags: [python]
---

Migrating from one static website to another, I had to rename multiple files, extract some content, remove it, and do other operations.

For about 100 blog posts I had to rename the files from `title.md` to the format `YYYY-MM-DD-title.md`.

The header of each post looked like this:

	Title: Powerful things you can do with the Markdown editor"
	Date: 2020-02-09 20:00
	Category: Jekyll, tutorial
	Tags: featured
	Slug: powerful-things
	Author: Tom Ordonez
	Status: published
	Summary: A blog post about Markdown editor.

And I had to change it to this

	{% raw %}
	---
	layout: post
	title:  "Powerful things you can do with the Markdown editor"
	author: tom
	categories: [ Jekyll, tutorial ]
	image: assets/images/11.jpg
	tags: [featured]
	---
	{% endraw %}

Some blog posts also contained images which used this syntax `{static}/images/`, and I had to change it to this:

	{% raw %}
	{ {site.baseurl} }/assets/images/
	{% endraw %}

This is what the Python script looks like, it's not the best but it worked. This can give you an idea on how to work with files and Python OS module.

	import os
	import shutil
	import random

	lines = ['---', 'layout: post', 'title: ', 'author: tom', 'categories: ', 'image: ', 'tags: ', '---']
	matches = ['Title: ', 'Date: ', 'Category: ', 'Tags: ', 'Slug: ', 'Author: ', 'Status: ', 'Summary: ']

	dest_dir = 'path to ../newblog/_posts/'

	# Extract data from old format
	for blogpost in os.listdir():

		# Only for markdown files
		if ".md" in blogpost:
			print(blogpost)

			# Extract the metadata data from blogpost, then remove the header
			with open(blogpost, 'r+') as fh:
				content = fh.readlines()

				if content[0].startswith('Title'):
					title = content[0].rstrip('\r\n').split(': ')[1]
				else:
					title = ''

				date_prefix = content[1].split()[1]

				if content[2].startswith('Category'):
					categories = content[2].rstrip('\r\n').split(': ')[1]
				else:
					categories = ''

				# Category in old format: 'Data Analytics', 'Analytics', 'Python', 'Coding', 
				# 'Linux', 'Android', 'Mobile Dev', 'Tableau', 'Data Analysis'
				# 'Sourcing', 'Cloud', 'Recruiting', 'Data Science'

				if any(match in categories for match in ['Data Analytics', 'Analytics', 'Data Analysis', 'Data Science', 'Tableau']):
					image = 'assets/images/'+str(random.randint(1, 12))+'.jpg'
					categories = 'Data Analytics'
				elif any(match in categories for match in ['Python', 'Coding', 'Cloud']):
					image = 'assets/images/'+str(random.randint(1, 12))+'.jpg'
					categories = 'Code'
				elif any(match in categories for match in ['Linux']):
					image = 'assets/images/'+str(random.randint(1, 12))+'.jpg'
				elif any(match in categories for match in ['Android', 'Mobile Dev']):
					image = 'assets/images/'+str(random.randint(1, 12))+'.jpg'
					categories = 'Mobile'
				elif any(match in categories for match in ['Sourcing', 'Recruiting']):
					image = 'assets/images/'+str(random.randint(1, 12))+'.jpg'
					categories = 'Recruiting'

				if content[3].startswith('Tags'):
					tags = content[3].rstrip('\r\n').split(': ')[1]
				else:
					tags = ''

				# Create the jekyll header
				header = lines[0] + '\n' + lines[1] + '\n' + lines[2] + f'"{title}"' + '\n' + lines[3] + '\n' + lines[4] 
					+ '[' + categories + ']' + '\n' + lines[5] + image + '\n' + lines[6] + '[' + tags + ']' + '\n' + lines[7]

				# Remove the old header
				for index in range(len(content)):
					if any(content[index].startswith(match) for match in matches):
						last_index = index

				del content[:last_index+1]

				# Capture the blogpost content after the header
				flat_content = ''.join(content)

				# Copy to a new file with format year-month-day-title.md
				new_name = date_prefix+'-'+blogpost
				dest = dest_dir + new_name
				print("Copying {}".format(new_name))
				shutil.copy2(blogpost, dest)

				# Concat and write the new header and the cleaned content
				with open(dest, 'r+') as fh:
					fh.seek(0, 0)
					fh.write(header + '\n' + flat_content)

				# Correct image syntax in content
				# From this syntax: ![Scraping]({static}/images/scraping.jpg)
				{% raw %}# To this:![Scraping]({{ site.baseurl }}/assets/images/scraping.jpg){% endraw %}
				with open(dest, 'r') as fh:
					filedata = fh.read()

				{% raw %}
				filedata = filedata.replace("{static}/images/", "{ {site.baseurl} }/assets/images/")
				{% endraw %}

				with open(dest, 'w') as fh:
					fh.write(filedata)