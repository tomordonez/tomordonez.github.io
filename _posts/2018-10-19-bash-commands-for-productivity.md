---
layout: post
title: "Bash Commands for Productivity"
redirect_from:
  - /bash-commands-for-productivity.html
categories: [Code]
image: assets/images/1.jpg
tags: [linux, bash, productivity]
---

Here are some interesting bash commands to run from the shell for productivity.


## Make changes to many directories

If you want to create the same file in multiple directories.

For example. I have these directories:

    $ pwd
    ~/languages/

    $ ls
    python java cpp

I wanted to create an `index.rst` inside each directory:

    $ for i in */; do touch "$i"/index.rst; done

Now these directories have that file:

* `~/languages/python/index.rst`
* `~/languages/java/index.rst`
* `~/languages/cpp/index.rst`

I moved one level up on my directory:

    $ cd ..
    $ ls
    languages books tools frameworks

Inside these directories I also have an `index.rst` such as:

* `~/languages/index.rst`
* `~/books/index.rst`
* `~/tools/index.rst`
* `~/frameworks/index.rst`

Ooops I forgot to add a title inside the `index.rst` for the directories inside `languages`:

    $ for in in */; do echo "Title" >> "$i"/index.rst; done

Oh wait. I made a mistake.

I am still inside my main directory:

    $ pwd
    ~/
    $ ls
    languages books tools frameworks

I only wanted to add "Title" inside `index.rst` for the subdirectories of `languages`:

* `~/languages/python/index.rst`
* `~/languages/java/index.rst`
* `~/languages/cpp/index.rst`

And NOT for the directories of home:

* `~/languages/index.rst`
* `~/books/index.rst`
* `~/tools/index.rst`
* `~/frameworks/index.rst`

If I open this: `~/languages/index.rst`

Now I have my index content and the last line is `Title`. This sucks. How do I remove the last line of multiple files now?

## Remove the last line of multiple files

Let me see where I am:

    $ pwd
    ~/
    $ ls
    languages books tools frameworks

As seen <a href="https://stackoverflow.com/questions/4881930/remove-the-last-line-from-a-file-in-bash" target="_blank">here</a>. This is a solution to remove the last line from a file:

    sed -i '$ d' foo.txt

Applied to many files:

    $ for i in */index.rst; do sed -i '$ d' "$i"; done

Now the last line is gone.

Let's go to the correct directory:

    $ cd languages/
    $ for in in */; do echo "Title" >> "$i"/index.rst; doneone.
