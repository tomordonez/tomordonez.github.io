---
layout: post
title: "Linkedin Recruiter Bookmarklet"
redirect_from:
  - /linkedin-recruiter-bookmarklet.html
categories: [Recruiting]
image: assets/images/11.jpg
tags: [sourcing, linkedin recruiter, bookmarklet]
---

This is a sourcing trick that helps you in Linkedin recruiter.

This script comes from <a href="https://www.slideshare.net/gutmach/getting-started-in-custom-programming-for-talent-sourcing" target="_blank">Getting Started in Custom Programming for Sourcing Purposes"</a> from the 1st programmers track session ever at SourceCon in Austin in Sept 2017.

This is a presentation by my friends <a href="https://twitter.com/gutmach" target="_blank">Glenn</a> and <a href="https://twitter.com/kamoswin" target="_blank">Kameron</a>. Where they explain how to use Javascript bookmarklets to improve the Linkedin recruiter experience.

* Chrome
* Bookmark manager
* Add boomark
* For name enter the title
* For URL enter the code

## Linkedin JS Project List View

Go to a Linkedin recruiter project. It shows pagination with 10 results per page.

The original URL might have this format, followed by a number id:

    https://www.linkedin.com/recruiter/projects/12345678

To convert to a longer list. Use this bookmarklet.

    javascript:(function()
    {var loc=location.href;loc=loc.replace('linkedin.com/recruiter/projects/','linkedin.com/cap/project/savedProfiles/');loc=loc+'?max=500';location.replace(loc)})()

The output URL will change to this:

    https://www.linkedin.com/cap/project/savedProfiles/12345678?max=500

The Javascript bookmarklet will find and replace a piece of the URL and add a number of results.

It will find `linkedin.com/recruiter/projects/` and replace with `linkedin.com/cap/project/savedProfiles/`. Then at the end add `?max=500`.

You can modify the number of results if you have a project with more than 500 profiles. For instance if you have a project with `567` profiles. You can modify to `?max=567`

## Troubleshooting the bookmarklet

What if this doesn't work?

It's possible your "input URL" is different.

For the bookmarklet above we are assuming the input URL is: `linkedin.com/recruiter/projects/`.

But what if the URL is something like:
    
    https://linkedin.com/awesome/recruiter/projects/12345678

Or what if it has parameters at the end:

    ....awesome/recruiter/projects/12345678?trk=homepage_v2

Then the bookmarklet won't work and you need to modify it.

If it is just a different URL you can make the change here:

    loc.replace('YOUR INPUT URL','linkedin.com/cap/project/savedProfiles/')

If the Input URL has a question mark at the end with parameters:

    ...awesome/recruiter/projects/12345678?trk=homepage_v2

Then you need to use a regular expression to remove that part of the URL:

    replace(/\?.+/g,'')

You don't have to understand this too much. But this means: find a question mark, then at least 1 or more (any) character after. And replace with nothing.

Here is a modified bookmarklet if your input URL has `?` question mark parameters.

    javascript:(function()
    {var%20loc=location.href;loc=loc.replace(/\?.+/g,'');
    loc=loc.replace('linkedin.com/recruiter/projects/','linkedin.com/cap/project/savedProfiles/');loc=loc+'?max=500';location.replace(loc)})()

## Linkedin JS Results 250

This is a bookmarklet that might not work anymore. I remember the "list view" having a restriction of showing only up to 250 results and then paginating more results.

I am leaving this here for reference:

    javascript: (function()
    {var loc = location.href;loc = loc.replace('&page=1&start=0&count=25', '&page=1&start=0');loc = loc + '&count=250';location.replace(loc) })()