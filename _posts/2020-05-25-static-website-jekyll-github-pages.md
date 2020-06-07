---
layout: post
title: "Static Website with Jekyll and Github Pages"
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

I moved from the Pelican Python static website generator back to a static website with Jekyll and Github Pages.

Sources:
* [Jekyll's blog](https://jekyllrb.com/)
* [Create a Github pages site with Jekyll](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll)
* [Adding content](https://help.github.com/en/github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll)
* [Adding a theme](https://help.github.com/en/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll)
* [Jekyll themes](https://jamstackthemes.dev/)
* [Jekyll tutorial](http://www.stephaniehicks.com/githubPages_tutorial/pages/githubpages-jekyll.html)
* [Medium-looking theme](https://bootstrapstarter.com/bootstrap-templates/mundana-theme-jekyll/)
* [Medium-looking theme demo](https://wowthemesnet.github.io/mundana-theme-jekyll/index.html)


## Install Ruby

Install RVM as seen [here](http://rvm.io/)

	$ gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
	$ \curl -sSL https://get.rvm.io | bash -s stable

If you are on Linux/Gnome. As seen [here](https://rvm.io/integration/gnome-terminal). Go to the Terminal preferences and find a checkbox that says `Run command as a login shell`. This must be checked.

Close the terminal and open it again.

    $ source ~/.rvm/scripts/rvm
    $ type rvm | head -n 1

This should say `rvm is a function`

Restart the shell and Install Ruby. Stable version on 5/24/20 is `2.7.1`

	$ rvm install 2.7.1
	$ rvm use 2.7.1 --default

Create a gemset for the blog

	$ rvm use 2.7.1@blog --create

List gemsets with:

    $ rvm gemset list

Switch gemsets with:

    $ rvm gemset use name-of-gemset


## Install Jekyll

Setup Jekyll:

	$ gem install bundler jekyll

Go to the root directory where you want to install. Then create a new jekyll blog.

	$ jekyll new blog
	$ cd blog

This creates the following:

	404.html
	about.markdown
	_config.yml
	Gemfile
	Gemfile.lock
	index.markdown
	_posts/


Run the blog:

	$ bundle exec jekyll serve

Open `http://localhost:4000` and Ctrl+C to stop


## Jekyll and Github Pages

Look at Github pages dependency [versions](https://pages.github.com/versions/)

As of 5/24/20:

* jekyll: 3.8.5 (even though latest stable was 4.0.1)
* github pages: 204

Modify the Gemfile to use Github pages as shown.

* Comment this line: `gem "jekyll", "~> 4.0.1"`
* Uncomment this line: `gem "github-pages", group: :jekyll_plugins`


Upgrade:

	$ bundle update

Output was:

	Note: jekyll version regressed from 4.0.1 to 3.8.5

Run bundle:

	$ bundle install

Output:

	Bundle complete! 6 Gemfile dependencies, 85 gems now installed.
	Use `bundle info [gemname]` to see where a bundled gem is installed.

Test again:

	$ bundle exec jekyll serve


## Troubleshooting dependency errors

When testing the site. For `jekyll-3.8.5` it says `warning: Using the last argument as keyword parameters is deprecated`.

* Also for `pathutil-0.16.2` it says the same.
* More [here](https://github.com/jekyll/jekyll/issues/7947)
* And [here](https://github.com/jekyll/jekyll/pull/7948)

Edit the `Gemfile` and comment this line again `gem "github-pages", group: :jekyll_plugins`. Then add this one:

	gem 'jekyll', github: 'jekyll/jekyll'

If you have `plugins` update them to this:

	group :jekyll_plugins do
	    gem 'jekyll-feed', github: 'jekyll/jekyll-feed'
	    gem 'jekyll-sitemap', github: 'jekyll/jekyll-sitemap'
	    gem 'jekyll-paginate', github: 'jekyll/jekyll-paginate'
	    gem 'jekyll-seo-tag', github: 'jekyll/jekyll-seo-tag'
	    gem 'jekyll-redirect-from', github: 'jekyll/jekyll-redirect-from'
	end

My `Gemfile` currently looks like this:

	source "https://rubygems.org"

	gem 'jekyll', github: 'jekyll/jekyll'

	gem "minima", "~> 2.5"

	group :jekyll_plugins do
	    gem 'jekyll-feed', github: 'jekyll/jekyll-feed'
	    gem 'jekyll-sitemap', github: 'jekyll/jekyll-sitemap'
	    gem 'jekyll-paginate', github: 'jekyll/jekyll-paginate'
	    gem 'jekyll-seo-tag', github: 'jekyll/jekyll-seo-tag'
	    gem 'jekyll-redirect-from', github: 'jekyll/jekyll-redirect-from'
	end

Then run `bundle install`


## Using a theme and edit `_config.yml`

The default theme is `minima`. The [docs](https://github.com/jekyll/minima) have good details on how to set it up.

It has instructions on how to set your `_config.yml`

Mine looks kinda like this:

	title: Name and Title of My Blog
	email: 
	description: >-
	  Some awesome description here
	baseurl: ""
	url: "https://www.mywebsite.com"
	twitter_username: mytwitter
	github_username:  mygithub
	permalink: /:title/
	favicon: 'assets/images/favicon.ico' #doesn't work yet

	# Build settings
	theme: minima
	minima:
	  skin: solarized #not seeing this skin yet

	header_pages:
	  - about.md

	disqus:
	    shortname: mydisqus_shortname

	author:
	  name: My Name

	show_excerpts: true

	minima:
	  social_links:
	    twitter: mytwitter
	    github: mygithub
	    linkedin: mylinkedin_shortname

	google_analytics: myGAcode

	plugins:
	  - jekyll-feed
	  - jekyll-feed
	  - jekyll-sitemap
	  - jekyll-paginate
	  - jekyll-seo-tag
	  - jekyll-redirect-from

	exclude:
	  - .sass-cache/
	  - .jekyll-cache/
	  - gemfiles/
	  - Gemfile


## Using a different theme

I tried a theme that looked [Medium](https://wowthemesnet.github.io/mundana-theme-jekyll/index.html)

Instead of installing Jekyll as shown above, do the following:

	$ git clone https://github.com/wowthemesnet/mundana-theme-jekyll.git blog
	$ cd blog
	$ bundle
	$ bundle exec jekyll serve

I liked it for a while but it had some weird bugs. I spent many hours trying to fix them but then I gave up and switched back to the default `minima` theme.


## Creating an `about` page

In your root blog create edit the default `about` and modify it as `about.md`:

	---
	layout: page
	title: "About"
	permalink: "/about.html"
	comments: false
	---

## Creating blog posts

These go in the `_posts` folder. I got a template that I follow for each new blog post:

	---
	layout: post
	title: "Title in Double Quotes"
	author: tom
	categories: [A category]
	tags: [some tags here]
	---

	file: YYYY-MM-DD-title.md (or it won't show up)
	title: Don't forget to update this
	{%raw%}Add images with: ![Image Name]({{ site.baseurl }}/assets/images/add_image.jpg){%endraw%}
	Add local URL with: [Local URL](../local-url)


## Creating redirects

Add this to the `Gemfile` in the `plugins` block:

	gem 'jekyll-redirect-from', github: 'jekyll/jekyll-redirect-from'

Then run `bundle install`.

As seen in the docs [here](https://github.com/jekyll/jekyll-redirect-from)

Add it to the `_config.yml` under `plugins`

	- jekyll-redirect-from

My problem was that for my previous website, the blog posts had this format:

	blog_post_name.html

This new website removes the `.html` and a lot of blog posts crawled by google are being sent to a `404 File not found page`.

I want to redirect `blog_post_name.html` to `blog_post_name/`

In the blog post the header should show something like this:

	title: "Blog Post Name"
	redirect_from:
	  - /blog_post_name.html


## 404 page

More about 404 pages [here](https://help.github.com/en/github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)

You can create a `404.md` file if you add this:

	---
	layout: page
	title: "Not Found"
	permalink: "/404.html"
	comments: false
	redirect_from:
	  - /index2.html
	---

Use the `redirect_from:` to redirect bad URLs from Google search results. Or use the same approach for blog posts. You can also try to fix them in your Google Search Console.


## Setup Github

Go to Github:

* Create a new repo with the format `username.github.io`

Setup the repo:

	$ git init
	$ git remote add origin link-to-repo


## CNAME, robots.txt and favicon.ico

If you have a custom domain, create a `CNAME` file, add a line with your website, and save it to your local blog root directory:

	www.yoursite.com

Create a `robots.txt` and add this line to the file:

    User-agent: *

You can also use `Disallow` for bad URLs.

	User-agent: *
	Disallow: /bad.html
	Allow: /

Go to `assets/images/` and add a `favicon.ico` image.


## Deploy to Github

If you want to cache your credentials

	$ git config --global credential.helper 'cache --timeout=3600'

Then deploy:

	$ git status
	$ git add .
	$ git commit -m "Awesome commit message here"
	$ git push -u origin master


## Change your DNS name server

Setup an account with Cloudflare if you don't have one. Find the DNS name server

In your DNS provider point it to Cloudflare.


## Cloudflare settings

Create these records in Cloudflare:

    Type    Name               Content
    ALIAS   yoursite.com       youruser.github.io
    CNAME   www.yoursite.com   youruser.github.io
    TXT     yoursite.com       youruser.github.io


Add `A` records as seen on [Setting up an Apex domain](https://help.github.com/articles/setting-up-an-apex-domain/)

Add `TXT` record to verify Google webmaster tools:

* Add property
* Add TXT google verification code


Setup these Page rules. As seen [here](https://www.jonathan-petitcolas.com/2017/01/13/using-https-with-custom-domain-name-on-github-pages.html)

    https://www.yoursite.com/*
    Cache Level: Cache Everything

    https://yoursite.com/*
    Forwarding URL: (Status Code: 301 - Permanent Redirect, URl: https://www.yoursite.com$1)

    http://www.yoursite.com/*
    Always Use HTTPS

In your Overview dashboard set these (if you are on the free plan)

* Security level: medium
* SSL: Full
* Caching level: Standard


## Migrating content

Here is where I was challenged.

With the Pelican Python static website generator the files were named as `title.md`. With Jekyll they need to be in the format `YYYY-MM-DD-title.md`.

For Pelican the header looks like this:

	Title: Powerful things you can do with the Markdown editor"
	Date: 2020-02-09 20:00
	Category: Jekyll, tutorial
	Tags: featured
	Slug: powerful-things
	Author: Tom Ordonez
	Status: published
	Summary: A blog post about Markdown editor.

For Jekyll it needs to look like this:

	---
	layout: post
	title:  "Powerful things you can do with the Markdown editor"
	author: tom
	categories: [ Jekyll, tutorial ]
	image: assets/images/11.jpg
	tags: [featured]
	---

How to make this change to about 100 blog posts?

I needed to extract the `Date` from the header and use it to rename the file. Then extract other content like the `Title`, `Category`, and `Tags`. Then replace this header with the new header.

Also the blog posts used this syntax to insert images in the content `{static}/images/` while Jekyll uses:

	{% raw %}
	{ {site.baseurl} }/assets/images/
	{% endraw %}

Read more in [Python, Files, and OS Module](../python-files-os-module)