---
layout: post
title: "Learning Github"
redirect_from:
  - /learning-github.html
categories: [Code]
image: assets/images/8.jpg
tags: [git, github]
---

**Updated Jan 11, 2020**

This is a setup to practice git and Github. It requires the following:

* Two Github accounts.
* Two computers in the same network or a computer and a remote server.
* A static website.


For a while I have been thinking of an interactive process to learn and improve skills in git and Github.

## Static Website Platform

For this Git/Github learning lab I am using a static website platform. Here is a tutorial to [install a static website with Python](https://www.tomordonez.com/make-static-website-python-github-pages.html).

The static website uses Github pages. The goal is to have an interaction with two github accounts. Use a development environment to write the blog posts and create pull requests. Then a server environment to approve requests and update the website.

## Two Github Accounts

For this setup I have two computers in the same network.

**Server**

* I use it as a server to approve requests and update the website.
* Setup with my Main Github account.
* It has the static website platform installed.

**Development**

* I use it as development to write the blog posts and create pull requests.
* Setup with my 2nd Github account.
* Forked repo from Main Github account.

## Writing blog posts in Development

I created a new branch called `newposts`.

* Write/update the blog posts
* Push to forked repo on the 2nd Github account.

First, check status:

    $ git status

If new changes were made on the server, then sync the forked repo. As seen on [installing a static website with Python](https://www.tomordonez.com/make-static-website-python-github-pages.html). Follow the section "Fork and sync a local with a remote repo."

    $ git fetch upstream
    $ git checkout master
    $ git merge upstream/master

As seen [here](https://stackoverflow.com/questions/16955980/git-merge-master-into-feature-branch). To merge `master` with `newposts`:

    $ git checkout newposts
    $ git merge master

Resolve conflicts then commit:

    $ git commit -m "merged master"

Then add and push the commits

    $ git add .
    $ git commit -m "new blog post draft"
    $ git push -u origin newposts

## Error on Git push

You might get this error if there are conflicts

    ! [rejected]        newposts -> newposts (fetch first)
    error: failed to push some refs to 'https://github.com/...
    hint: Updates were rejected because the remote contains work that you do
    hint: not have locally. This is usually caused by another repository pushing
    hint: to the same ref. You may want to first integrate the remote changes
    hint: (e.g., 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.

## Create a pull request (2nd Github account)

Login to the 2nd Github account:

* Navigate to the original repo on Main Github account.
* Create a pull request.

Using this format with no comments added:

    [newpost] name of the blog post


## Merge pull request (Main Github account)

Login to the Main Github account:

* Go to the repo.
* Review if a pull request was sent.
* If there are no conflicts, merge the commit into master.


## SSH to from Development to Server

This is how I [remote access Linux](https://www.tomordonez.com/remote-access-linux-fedora.html).

From my Local computer, I SSH into my LAN server using the server's IP address.

    $ ssh server-IP

I attach to my Server tmux environment:

    (server)$ tmuxinator tom

Using already a Local tmux, inside Server tmux I have to use the prefix twice `Ctrl+a Ctrl+a` before any binding.

Then I pull the changes and publish the blog.

    (server)$ git pull
    (server)$ make html && make publish

## Publishing the blog in Server

Once I generate the static pages, I just follow my usual process. Push the HTML output.

    (server)$ cd output
    (server)$ git add .
    (server)$ git commit -m "new post"
    (server)$ git push -u origin master

Then push the source.

    (server)$ cd ..
    (server)$ git add .
    (server)$ git commit -m "new post"
    (server)$ git push -u origin master

## Exit server

When the website is published into Github pages. Detach from tmux `Ctrl+a Ctrl+a + D`.

Then exit:

    (server)$ exit
    $