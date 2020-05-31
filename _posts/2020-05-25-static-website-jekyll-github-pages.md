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

Open the Gemfile to see what it has:

	source "https://rubygems.org"
	# Hello! This is where you manage which Jekyll version is used to run.
	# When you want to use a different version, change it below, save the
	# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
	#
	#     bundle exec jekyll serve
	#
	# This will help ensure the proper Jekyll version is running.
	# Happy Jekylling!
	gem "jekyll", "~> 4.0.1"
	# This is the default theme for new Jekyll sites. You may change this to anything you like.
	gem "minima", "~> 2.5"
	# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
	# uncomment the line below. To upgrade, run `bundle update github-pages`.
	# gem "github-pages", group: :jekyll_plugins
	# If you have any plugins, put them here!
	group :jekyll_plugins do
	  gem "jekyll-feed", "~> 0.12"
	end

	# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
	# and associated library.
	install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
	  gem "tzinfo", "~> 1.2"
	  gem "tzinfo-data"
	end

	# Performance-booster for watching directories on Windows
	gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

Run the blog:

	$ bundle exec jekyll serve

Open `http://localhost:4000` and Ctrl+C to stop


## Setup Github Pages

Look at Github pages dependency [versions](https://pages.github.com/versions/)

As of 5/24/20:

* jekyll: 3.8.5 (even though latest stable was 4.0.1)
* github pages: 204

Modify the Gemfile to use Github pages as shown.

* Comment this line: `gem "jekyll", "~> 4.0.1"`
* Uncomment this line: `gem "github-pages", group: :jekyll_plugins`


Upgrade:

	$ bundle update jekyll

Output was:

	Note: jekyll version regressed from 4.0.1 to 3.8.5

Run bundle:

	$ bundle install

Output:

	Bundle complete! 6 Gemfile dependencies, 85 gems now installed.
	Use `bundle info [gemname]` to see where a bundled gem is installed.

Test again:

	$ bundle exec jekyll serve

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


Add `A` records as seen here:

https://help.github.com/articles/setting-up-an-apex-domain/

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


## Troubleshooting dependency errors

When testing the site. For `jekyll-3.8.5` it says `warning: Using the last argument as keyword parameters is deprecated`.

* Also for `pathutil-0.16.2` it says the same.
* More [here](https://github.com/jekyll/jekyll/issues/7947)
* And [here](https://github.com/jekyll/jekyll/pull/7948)

Edit the `Gemfile`

	gem 'jekyll', github: 'jekyll/jekyll'

If you have `plugins` update them to this:

	group :jekyll_plugins do
	    gem 'jekyll-feed', github: 'jekyll/jekyll-feed'
	    gem 'jekyll-sitemap', github: 'jekyll/jekyll-sitemap'
	    gem 'jekyll-paginate', github: 'jekyll/jekyll-paginate'
	    gem 'jekyll-seo-tag', github: 'jekyll/jekyll-seo-tag'
	    gem 'jekyll-redirect-from', github: 'jekyll/jekyll-redirect-from'
	end

Then run `bundle install`


## Troubleshooting console log errors

*Uncaught SyntaxError: Invalid hexadecimal escape sequence*

This error pointed to `index.html:513`. I looked at the code and one of my blog posts talks about encoding/decoding hex. Also this error seemed to cause the search box to malfunction. I navigated to the blogpost and tried correcting the code block with the `raw/endraw` tag as shown on [curly braces with Markdown on Jekyll](../curly-braces-markdown-jekyll) but this didn't work. I removed the code block. The console didn't show the error anymore and the search box started working again.


*Uncaught ReferenceError: lunr_search is not defined at HTMLFormElement.onsubmit*

This error points to this file:

	_includes/search_lunr.html


To this code:

	{% raw %}
	function lunr_search(term) {
	    $('#lunrsearchresults').show( 1000 );
	    $( "body" ).addClass( "modal-open" );
	    
	    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
	    if(term) {
	        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
	        //put results on the screen.
	        var results = idx.search(term);
	        if(results.length>0){
	            //console.log(idx.search(term));
	            //if results
	            for (var i = 0; i < results.length; i++) {
	                // more statements
	                var ref = results[i]['ref'];
	                var url = documents[ref]['url'];
	                var title = documents[ref]['title'];
	                var body = documents[ref]['body'].substring(0,160)+'...';
	                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
	            }
	        } else {
	            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
	        }
	    }
	    return false;
	}
	</script>
	<style>
	    .lunrsearchresult .title {color: #d9230f;}
	    .lunrsearchresult .url {color: silver;}
	    .lunrsearchresult a {display: block; color: #777;}
	    .lunrsearchresult a:hover, .lunrsearchresult a:focus {text-decoration: none;}
	    .lunrsearchresult a:hover .title {text-decoration: underline;}
	</style>

	<form class="bd-search hidden-sm-down" onSubmit="return lunr_search(document.getElementById('lunrsearch').value);">
	<input type="text" class="form-control text-small"  id="lunrsearch" name="q" value="" placeholder="Type keyword and enter..."> 
	</form>
	{% endraw %}


Couldn't fix as shown [here](https://stackoverflow.com/questions/30803497/onsubmit-function-is-not-defined). However, the error went away when I corrected the previous error `Invalid hexadecimal escape sequence`.


Other issues not resolved yet:

	A cookie associated with a cross-site resource at http://disqus.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.

	[Violation] 'requestAnimationFrame' handler took 112ms

	[Violation] Forced reflow while executing JavaScript took 111ms

	[Violation] Avoid using document.write(). https://developers.google.com/web/updates/2016/08/removing-document-write

	GET https://c.disquscdn.com/get?url=&h=200 404

More issues:

* On mobile home or all stories, the images appear smaller, depending on the first paragraph of the blog post, this first paragraph is used as a preview of the content.
* On iPhone read view mode, the content is not displayed. Instead it shows some default Jekyll code.

## Setup Jekyll with a theme

I liked this theme that looked like [Medium](https://wowthemesnet.github.io/mundana-theme-jekyll/index.html)

Instead of installing Jekyll as shown above, do the following:

	$ git clone https://github.com/wowthemesnet/mundana-theme-jekyll.git blog
	$ cd blog
	$ bundle
	$ bundle exec jekyll serve

Make any changes to the following:

	404.html
	assets/
	_config.yml
	Gemfile
	_includes/
	index.html
	_layouts/
	_pages/
	_posts/

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
	permalink: /404.html
	---

Or just create a `404.md`

You can also use redirects if search engines are crawling bad URLs.


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

Can you imagine doing this manually? That would take a really long time.

Read more in [Python, Files, and OS Module](../python-files-os-module)