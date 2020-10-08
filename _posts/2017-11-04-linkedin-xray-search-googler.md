---
layout: post
title: "Linkedin X-Ray Search with Googler"
redirect_from:
  - /linkedin-xray-search-googler.html
categories: [Recruiting]
image: assets/images/3.jpg
tags: [linkedin, xray, googler, sourcing]
---

Linkedin XRay search with Googler. Or Google search anything in a programmatic way.


## Installation for Mac

Requires Python 3.3 or later

    $ git clone https://github.com/jarun/googler/
    $ sudo make install

## Installation for Linux

    $ git clone https://github.com/jarun/googler/
    $ cd googler



## Video Tutorial

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KVMYBM2-DOs?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

## Running googler

It runs as a standalone program:

    $ ./googler

If you run it with no options you will get this:

    Please initiate a query.
    googler (? for help)

To exit hit `Enter` twice.

## Options

To show the help documentation:

    $ ./googler -h

![Xray Linkedin search with Googler]({{ site.baseurl }}/assets/images/xray-linkedin-search-googler.gif)

<p>&nbsp;</p>
<p>&nbsp;</p>

This will show an output with all the options. Some are explained here...

## Show N results

Use the option `-n` to get a number of results like this:

    $ -n 50

## Show results from the News section

Many options are case sensitive. If you want to get results from the news section use this:

    $ -N

## Show country specific search

Use this option to get the results that are country specific using the top level domain (TLD).

For example if you want results from Canada:

    $ -c ca

Or results from Brazil:

    $ -c br

These are a few popular TLDs:

* Worldwide,com,google.com
* Brazil,br,google.com.br
* Canada,ca,google.ca
* Chile,cl,google.cl
* Colombia,co,google.com.co
* France,fr,google.fr
* Mexico,mx,google.com.mx
* Netherlands,nl,google.nl
* United Kingdom,uk,google.co.uk
* United States,us,google.us

## Show results in a specific language:

Use this option to show results in a language.

For example, Spanish:

    $ -l es

To get the correct syntax search "List of ISO 639-1 codes"

* English: en
* Spanish: es
* Portugues: pt

## Disable automatic spelling correction

Use this option:

    $ -x

## Disable color output

This will be helpful to save the results to a file. You don't have to understand what this is but just be aware that it's important.

    $ -C

## Search with a time limit

Use this option:

    $ -t

Using this syntax:

* h5 = 5 hours
* d5 = 5 days
* w5 = 5 weeks
* m5 = 5 months
* y5 = 5 years

## Search a specific site

Use the option:

    $ -w

Or also this one:

    $ --site

For example:

    $ ./googler --site linkedin.com/in 'data scientist'

![Xray Linkedin search data scientist]({{ site.baseurl }}/assets/images/xray-linkedin-search-data-scientist.gif)

<p>&nbsp;</p>
<p>&nbsp;</p>

The default number of results is 10. Let's change that to 20:

    $ ./googler --site linkedin.com/in -n 20 'data scientist'

## Disable user agent

This is important. The program uses the user agent to simulate Firefox on Ubuntu:

    USER_AGENT = ('Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:56.0) Gecko/20100101 Firefox/56.0')

If you want to disable it for any reason use this option:

    --noua

## To get output in JSON format

Use this option for JSON format

    --json

## Search and Exit

This is important when saving the output to a file. It will search and exit. It will not show the prompt.

    -np

## To search with filetype

This is the same as searching using Google:

    $./googler 'data science' filetype:pdf

## Saving the results to a file

To understand how saving works, you need to know some basic Linux commands.

Read my tutorial <a href="https://www.tomordonez.com/from-zero-to-hero-linux.html" target="_blank">from zero to hero in Linux</a>.

Save the results to a text file: 

    $./googler -C 'data science' filetype:pdf > dm.txt

When it's done, the prompt will move down twice. Hit `Enter` twice to exit.

The option `-C` disables color output. Otherwise you will get a mess of data. You don't have to understand what this means. Just use it :)

## Linkedin Xray Search

Ok Padawan. Now let's do a few more examples:

    $ ./googler -C -w linkedin.com/in -n 50 'machine learning' > ml_li.csv

Open the file with `Sublime Text`.

You can download Sublime from <a href="https://www.sublimetext.com/2" target="_blank">here</a>.

You could convert this "raw file" into a CSV file using a Regex macro.

Read my tutorial to <a href="https://www.tomordonez.com/create-a-regex-macro-in-sublime.html" target="_blank">create a regex macro in Sublime</a>.

You can use this macro to convert the Linkedin Xray search result to a CSV file.

![Xray Linkedin search sublime macro]({{ site.baseurl }}/assets/images/xray-linkedin-search-sublime-macro.gif)

<p>&nbsp;</p>
<p>&nbsp;</p>

For the `Rules-User`:

    {
        "format": "3.0",
        "replacements": {
            // replace comma with semicolon
            "linkedin_url_replace_comma": {
                "find": ",",
                "replace": ";",
                "greedy": true
            },
            // add 3 empty lines between profiles
            "linkedin_url_3_lines": {
                "find": "^\\n",
                "replace": "\\n\\n\\n",
                "greedy": true
            },
            // join url, city and description
            "linkedin_url_join_url_city": {
                "find": "^(http.*)\\n(.*)\\n(.*)",
                "replace": "\\1,\\2,\\3",
                "greedy": true
            },
            // join name with url
            "linkedin_url_join_name_url": {
                "find": " \\| Professional.*\\n",
                "replace": ",",
                "greedy": true
            },
            // remove leading number
            "linkedin_url_leading_number": {
                "find": "^ [0-9]{1,3} ",
                "replace": "",
                "greedy": true
            },
            // remove empty lines
            "linkedin_url_remove_empty_lines": {
                "find": "^\\n",
                "replace": "",
                "greedy": true
            },
            // remove last googler line
            "linkedin_url_remove_googler_line": {
                "find": "^googler.*",
                "replace": "",
                "greedy": true
            }
        }
    }

For the `Commands-User`

    [
        {
            "caption": "Reg Replace: Googler Linkedin CSV",
            "command": "reg_replace",
            "args": {"replacements": ["linkedin_url_replace_comma",
            "linkedin_url_3_lines","linkedin_url_join_url_city",
            "linkedin_url_join_name_url","linkedin_url_leading_number",
            "linkedin_url_remove_empty_lines",
            "linkedin_url_remove_googler_line"]}
        }
    ]

![Xray Linkedin search sublime macro]({{ site.baseurl }}/assets/images/linkedin-xray-search-csv-file.gif)

<p>&nbsp;</p>
<p>&nbsp;</p>

Activate the macro with the shortcut `Ctrl+Shift+P` and typing `Reg Replace: Googler Linkedin CSV`.

Then open the CSV file in Excel.

