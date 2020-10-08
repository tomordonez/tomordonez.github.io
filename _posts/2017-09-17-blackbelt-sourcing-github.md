---
layout: post
title: "Blackbelt Sourcing on Github"
redirect_from:
  - /blackbelt-sourcing-github.html
categories: [Recruiting]
image: assets/images/5.jpg
tags: [sourcing, Github]
---

Are you a sourcer or recruiter looking for talent on Github?


## What is Github?

Github comes from Git + hub.

Git is a version control system for software development.

A comparison is Google Docs. If you are familiar with Google Docs you know that you can recover a previous version of a file.

If you are not familiar with Google Docs versioning, perhaps you are familiar with Sharing an Excel file. You make changes, someone else makes changes and so on. But what if one day someone makes a change and deletes some of your work? End of the world right?

What if you could recover a previous version of that Excel file? That would be like discovering fire right?

In software development we have a similar scenario. A lot of developers contribute to a project by writing a piece of code.

Git, also known as "version control" allows the project owner to revert to a previous version if necessary.

Git was created in 2005 by Linus Torvalds, the creator of Linux.

Github is not owned by Linus. Github is an independent company that wanted to create Git as software as a service. Github was launched in 2008 and was built in Ruby. It has around 15M users.

## The Anatomy of Github

I encourage you to open a Github account. Even if you are not a developer. To get an idea of what the product is about. Although you won't make much sense of it unless you create your own repository.

A repository is a project.

There are public and private repositories.

Most open source projects have a public repository that you can look at. For example <a href="https://github.com/rails/rails" target="_blank">Ruby on Rails</a>.

Just click around to see what is inside every menu and you will discover a lot of useful information.

## Batch sourcing

Let's say that you go to a project and find a few hundred members.

You could scrape the list of members and then the profiles.

You could scrape them using Bash or Python.

## Scraping and Regex

Ideally you are doing a scraping using Python and xpath. So that you can get only the nodes in the DOM that correspond to the data that you want.

You can use Bash which is not ideal but somehow does the job.

## Scraping Contributors

Either scrape the content from the source code. Or select the text and Copy Paste the contents into Sublime and use Regex to create a CSV.

## Scraping Members

The source code for this page reflects the same content that is loaded. You could use wget to scrape it or a Python script.

## Scraping Profiles

Use a bash script to get the source code.

Then use regular expressions to convert data to a CSV.

## Emails from Hex to ASCII

When you scrape these profiles you will see that the emails are encoded in Hex.

Each hex code has a `&#` followed by an `x` and 2 digits.

First you need to do a replacement:

Find:

    &#(x[0-9a-z]{2});

Replace with:

    \\$1

Now those emails should look like this:

    \x79\x61\x73

## Reviewing CSV

At this point it should be a good idea to open the CSV file in Excel.

The problem with CSV is that the encoding of characters is different. So for instance, accents or letters like ñ will not show up correctly.

Open the CSV in Sublime and also create a new Excel file.

Remove every column after the first comma, so that you can see only the content of one of the columns displayed. You can use this Regex:

Find:

    ,.*

Replace with:

    empty

Copy paste that column into excel

Go back to Sublime and UNDO. Now remove the column that you copied with this Regex:

Find:

    ^.*?,

Replace with:

    empty

Repeat the process with the rest of the columns.

## Decoding the emails

If you do this transformation:

    $ echo -e "\x79\x61\x73" | cat

You will be able to transform from hex to ASCII. `echo -e` supports the following escape sequence:

    \×HH

The eight-bit character whose value is the hexadecimal value HH (one or two hex digits)

If you add this to a script you will be able to batch convert all the emails into human readable text.