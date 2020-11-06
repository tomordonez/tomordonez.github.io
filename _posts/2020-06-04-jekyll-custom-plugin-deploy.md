---
layout: post
title: "Jekyll Custom Plugin Deploy"
description: "How to deploy a Jekyll custom plugin."
categories: [Code]
image: assets/images/5.jpg
tags: [jekyll, github pages]
---

How to deploy a Jekyll custom plugin.

As shown on the [Github Pages docs](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages-and-jekyll#plugins). Github Pages cannot build sites using unsupported plugins.

Here is the list of approved plugins. Go to [dependency versions](https://pages.github.com/versions/).

As shown in this blog post [Deploy Jekyll to Github Pages](https://www.yegor256.com/2014/06/24/jekyll-github-deploy.html). You can use a gem to setup deployment of Jekyll when you are using custom plugins.

Update your `Gemfile`:

	gem 'jgd'

Run `bundle`
	
	$ bundle

Output:

	Fetching trollop 2.9.9
	Installing trollop 2.9.9
	Fetching jgd 1.12
	Installing jgd 1.12

	Post-install message from trollop:
	!    The 'trollop' gem has been deprecated and has been replaced by 'optimist'.
	!    See: https://rubygems.org/gems/optimist
	!    And: https://github.com/ManageIQ/optimist

More about `trollop` in the [official doc](https://www.manageiq.org/optimist/) and this tutorial: [writing a Ruby CLI using Trollop](https://kundeveloper.com/blog/trollop/).

To deploy use this:

	$ JEKYLL_ENV=production jgd

### Change the source of your Github Pages

* Go to your Github repo
* Settings
* Options
* Scroll down to Github Pages
* Source
* Change your branch from `master` to `gh-pages`.
* Save

Then deploy again:

	$ JEKYLL_ENV=production jgd

<details>
	<summary>Some of the output:</summary>
	<pre>
	[DEPRECATION] This gem has been renamed to optimist 
	and will no longer be supported. Please switch to optimist 
	as soon as possible.
	+ set -e
	+ set -o pipefail
	+ URL=https://github.com/...git
	+ BRANCH=gh-pages
	+ BRANCH_FROM=master
	+ DEPLOY_CONFIG=_config-deploy.yml
	+ BUNDLE=
	+ DRAFTS=
	++ pwd
	+ SRC=/home/.../blog
	++ mktemp -d -t jgd-XXX
	+ TEMP=/tmp/jgd-NAn
	+ trap 'rm -rf /tmp/jgd-NAn' EXIT
	+ CLONE=/tmp/jgd-NAn/clone
	+ COPY=/tmp/jgd-NAn/copy
	+ echo -e 'Cloning Github repository:'
	
	Cloning Github repository:
	+ git clone -b master https://github.com/... /tmp/jgd-NAn/clone
	
	Cloning into '/tmp/jgd-NAn/clone'...
	remote: Enumerating objects: 3025, done.   
	remote: Counting objects: 100% (3025/3025), done.                                     
	remote: Compressing objects: 100% (1920/1920), done.                                  
	remote: Total 3025 (delta 1272), 
	  reused 2692 (delta 954), pack-reused 0               
	Receiving objects: 100% (3025/3025), 31.22 MiB 
	  | 13.20 MiB/s, done.
	Resolving deltas: 100% (1272/1272), done.
	+ cp -R /tmp/jgd-NAn/clone /tmp/jgd-NAn/copy
	+ cd /tmp/jgd-NAn/clone
	+ echo -e '\nBuilding Jekyll site:'
	
	Building Jekyll site:
	+ rm -rf _site
	+ '[' -r _config-deploy.yml ']'
	+ jekyll build
	Configuration file: /tmp/jgd-NAn/clone/_config.yml
	            Source: /tmp/jgd-NAn/clone
	       Destination: /tmp/jgd-NAn/clone/_site
	 Incremental build: disabled. Enable with --incremental
	      Generating... 
	       Jekyll Feed: Generating feed for posts
	                    done in 1.67 seconds.
	 Auto-regeneration: disabled. Use --watch to enable.
	+ '[' '!' -e _site ']'
	+ cp -R _site /tmp/jgd-NAn
	+ cd /tmp/jgd-NAn
	+ rm -rf /tmp/jgd-NAn/clone
	+ mv /tmp/jgd-NAn/copy /tmp/jgd-NAn/clone
	+ cd /tmp/jgd-NAn/clone
	+ echo -e '\nPreparing gh-pages branch:'

	Preparing gh-pages branch:
	++ git branch -a
	++ grep origin/gh-pages
	+ '[' -z '' ']'
	+ git checkout --orphan gh-pages
	
	Switched to a new branch 'gh-pages'
	+ echo -e '\nDeploying into gh-pages branch:'

	Deploying into gh-pages branch:
	+ rm -rf 404.md about.md assets CNAME _config.yml Gemfile 
	  Gemfile.lock _includes index.markdown _layouts _posts
	+ cp -R /tmp/jgd-NAn/_site/404.html /tmp/jgd-NAn/_site/about.html
	+ rm -f README.md
	+ git add .
	++ date
	+ git commit -am 'new version Thu 08 Oct 2020 
	  12:10:05 AM EDT' --allow-empty
	[gh-pages (root-commit) a36ecd2] new version 
	  Thu 08 Oct 2020 12:10:05 AM EDT
	 819 files changed, 61268 insertions(+)
	 create mode 100644 .github/FUNDING.yml
	 create mode 100644 .gitignore
	 create mode 100644 .jekyll-cache/Jekyll/Cache/Jekyll--Cache/b7
	 ...

    + git push origin gh-pages
	+ sed 's|https://github.com/...|[skipped]|g'
	remote: 
	remote: Create a pull request for 'gh-pages' on GitHub by visiting:        
	remote:      https://github.com/.../pull/new/gh-pages         
	remote: 
	To [skipped]
	 * [new branch]      gh-pages -> gh-pages
	+ echo -e '\nCleaning up:'

	Cleaning up:
	+ rm -rf /tmp/jgd-NAn/clone
	+ rm -rf ''
	+ rm -rf /tmp/jgd-NAn
	</pre>
</details>

See [Jekyll without Plugins](../jekyll-without-plugins/) for other customizations.