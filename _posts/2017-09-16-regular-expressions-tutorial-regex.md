---
layout: post
title: "Regular Expressions Tutorial Regex Heaven"
redirect_from:
  - /regular-expressions-tutorial-regex.html
categories: [Code]
image: assets/images/6.jpg
tags: [regex]
---

This is a regular expressions tutorial...regex heaven.


Learning regular expressions will save you hours and hundreds of dollars.

## Problem 1: Cleaning a Massive Excel File

* You have a massive Excel file with user data.
* Maybe a product list or a contacts list.
* Perhaps you want to send an email to all your contacts.

To maximize your reach you might want to make sure all the email addresses are formatted correctly.

## I have seen this too many times:


    johndoe@gmailcom
    marysmithyahoo.com

(not real emails)

These emails will bounce because they have missing characters.


## Problem 2: Cleaning Up Data From Google Searches

Say that you want a list of all countries.

You could copy/paste from Wikipedia into Excel and spend 1-2 hrs cleaning up whatever you pasted. 

That is if Excel doesn't crash. Since Excel is not great at pasting things from the web.

OR

**You can learn Regular Expressions.**


## A Regular Expression (aka regex) is "a sequence of characters that define a search pattern"


* A sequence of characters.
* That define a search pattern.


A regex could find characters that make these patterns


## Example: marysmithyahoo.com


* **Find a sequence of characters**: any character up to "yahoo"
* **That make a search pattern**: any word before "yahoo" that doesn't have the "@".


## Requirements For Regex


* A (good) text editor (not word or google word)
* Attention to detail (a lot of attention)


## The Best Text Editors For Regex

* Sublime Text 2 (for Mac and Windows)
* Vim (if you dare to)


## Basics of Regular Expressions

Remember the concept:

* A sequence of characters.
* That define a search pattern.


## 1. Regex to match a text

Open sublime and copy/paste this:

    apple
    application
    This is an app
    another apple
    apple
    capptain

* Type Ctrl+H or CMD+H to open the Find and Replace
* Enable Regex with the button that has a period and star: .*
* Type: app
* It matches the pattern "app" everywhere.

Even if you don't have Regex enable it will do the same. So just wait for the magic...

## 2. Magic Spells of Regex


* **\d** Matches any digit
* **.** A period matches any character
* **\\.** Used to literally match a period
* **[A-Za-z0-9]** Match from A to Z, a to z, 0 to 9
* **+** Match one or more repetitions
* **\s** Match any whitespace
* **^** Match the start of a line
* **$** Match the end of a line


## 3. Please do not drop out yet

I know this sounds like "code". Might as well be in Martian.

**Believe me. Regular expressions will save you hours and hundreds of dollars.**

## 4. Get a list of countries from Wikipedia

Say that you need a list of all countries where Spanish is an official language.

Open <a href="https://en.wikipedia.org/wiki/List_of_countries_where_Spanish_is_an_official_language" target="_blank">this</a> website in Google Chrome.

I know this is a short list. But you could run into larger files to use Regex.

* Right click on the list and hit "Inspect Element"
* Click on the magnifying glass and click on a row on the table.
* On the bottom section that shows html code. Click on an element until you find one that encloses the whole table.
* Right click on that element.
* Copy/ Paste into Sublime


## 5. Use Regex To Clean Up This Code


* Go to Sublime and open Find and Replace
* Enable the Regex button

Looking at this code. We need to remove everything up to where the country is.

For example. To get "Mexico". We need to remove all the code until we get to the word "Mexico"

I also see that there are some HTML lines that can be easily removed with Find and Replace

* Find short HTML line
* Copy/Paste into Find
* Replace With: (leave blank)
* Replace All

The Find and Replace panels will close.

The best way is to learn the shortcuts. Go again to the top menu to see what the shortcuts are for Find and Replace.

## 6. Remove all code up to the Country

We now see that every line starts with: `td style`

And right before the country there is a: `title="`

We could use a Regex to remove all this

    ^.+title.+">

**Look how awesome this is**

It found the first match and it outlines all 21 matches.


## Here is how it works


* **^** goes to the start of the line
* **.** matches any character
* **+** one or more times
* **title** matches the word title
* **.** matches any character after the word title
* **"** matches quotes character
* **`>`** matches greater than character

**Replace With**: Leave empty

**Replace All.**

## We removed a lot of code. We are almost done.

Let's remove everything after the less than sign: `<`

    <.+


* **`<`** matches less than character
* **.** any character (after the `<`)
* **+** one or more times


## Now let's remove the empty lines manually.

**Wrong!**

Another Regex

    ^\s


* **^** goes to the start of the line
* **\s** matches any whitespace

**Replace With**: Leave empty
**Replace All**

## The final result is a neat list of countries

Using Regex for other things

* Clean up a list of emails
* Clean up a list of products
* Extract emails from a list
* Etc…

## Multiline Regex on Mac

I want to get all the urls from a file that are followed by a line that has an `img` tag.
For example:

    a href="some-url.html"
    img

On the Mac this doesn't work:

    $ grep 'a href=".*\n.*img'

This regular expression should find `a href` and any character until the end. Then find a new line and find any character on this line until `img`.

But `grep` doesn't work like that.

## Install pcregrep

By default this command tool is not installed on the Mac.

    $brew install pcre

You can read the man page by looking up:

    $man pcregrep

To search multiple lines use the option `-M`

Such as:

    $pcregrep -M

Now you can do something like:

    $ pcregrep -M 'a href=".*\n.*img'

