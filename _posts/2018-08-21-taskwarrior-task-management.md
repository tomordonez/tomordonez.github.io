---
layout: post
title: "TaskWarrior Task Management"
redirect_from:
  - /taskwarrior-task-management.html
categories: [Code]
image: assets/images/2.jpg
tags: [coding, linux, taskwarrior, task management]
---

I have been using a lot of task management over the years, including a lot of project management software.

I wanted something simple that I could open from the Terminal.

I am a big fan of CLI tools and found TaskWarrior. Which I have been using for the last few years.

Taskwarrior looks like this:

![Taskwarrior to conquer Data Science with Python]({{ site.baseurl }}/assets/images/taskwarrior-tomordonez.jpg)

You can install Taskwarrior on Windows, Mac or Linux.

For Ubuntu:

    $ sudo apt install taskwarrior

In Linux Fedora:

    $ dnf install taskwarrior

On Mac:

    $ brew install task
    $ brew install taskd
    $ brew install tasksh

For Windows. The easiest is to install first `Cygwin`, a Linux-like interface to simulate the Terminal. In one of the install steps it will ask you to choose which modules to install. Just select the one that says `task`.

Once installed, it is very easy to use if you know the commands.

## Using TaskWarrior

To add a task I use this:

    $ task add project:python Write awesome lesson learned due:today

To update a task I use this:

    $ task 1 modify due:monday

To get a list of tasks:

    $ task list

To complete a task:

    $ task 1 done

There are all sorts of combinations in the official doc <a href="https://taskwarrior.org/docs/" target="_blank">here</a>.

* Syntax
* Best practices
* Examples
* Searching
* Reports
* Filters
* Tags

## Bash Script

I saw that often I had to do this:

    $ clear
    $ task list

I wanted to see the task list dashboard with just one word.

Created a `bin` directory in my home folder:

    $ mkdir ~/bin/

Created a file called `work`

    $ cd ~/bin
    $ touch work
    $ chmod +x work

Inside the file I just added this:

    #!/usr/bin/bash
    clear && task list
