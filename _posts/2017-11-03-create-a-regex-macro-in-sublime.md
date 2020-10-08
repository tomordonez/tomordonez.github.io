---
layout: post
title: "Create a Regex Macro in Sublime"
redirect_from:
  - /create-a-regex-macro-in-sublime.html
categories: [Code]
image: assets/images/5.jpg
tags: [regex, macro, sublime, sublimetext]
---

Follow this tutorial to create a regex macro in Sublime.


## Install Sublime

You need to have Sublime right? Download from <a href="https://www.sublimetext.com/3" target="_blank"> here</a>.

## Learn some JSON

You need to be familiar with <a href="http://json.org/" target="_blank">JSON</a>.

## Install Sublime Package Control

You need to have Sublime Package Control installed.

On the top menu Preferences/Package Control. (It will install it by clicking on it the first time).

## Install RegReplace

You need to have RegReplace installed.

Use the shortcut `Ctrl+Shift+p`. This opens a sort of popup menu.

Then type `Package Control: Install Package` and hit Enter.

Type `RegReplace`. Then select it.

It will open a new file that says:

    # RegReplace
  
    Welcome to RegReplace!  For a quick start guide, please go to
    `Preferences->Package Settings->RegReplace->Quick Start Guide`.

## Learn Python re regex syntax

To build the Macros you must learn the `Python re` syntax. Which is slightly different from the default regex engine on Sublime.

This is the documentation for <a href="https://docs.python.org/3.4/library/re.html" target="_blank">Python re</a>.

## Learn which files to edit in Sublime

You need to edit 2 files:

* The JSON file with the Find and Replace pairs
* The JSON file with the Macro command


## JSON file with Find and Replace pairs

Go to the top menu Preferences/Package Settings/RegReplace/Rules-User.

Follow <a href="http://facelessuser.github.io/RegReplace/usage/" target="_blank">this syntax</a> to see what type of string and values you can create.

You can also read this file in Sublime. To see examples. Go to Preferences/Package Settings/RegReplace/Rules-Example.

This is an example I did, when I copy/paste a piece of HTML code into Sublime. It breaks lines at an specific element, removes the first line and replaces the "and" character.

    {
        "format": "3.0",
        "replacements": {
            // break into lines
            "break_lines": {
                "find": "(<li class=\"card card-user)",
                "replace": "\\n\\1",
                "greedy": true
            },
            // remove first ul line
            "remove_first_line": {
                "find": "^<ul class.*\\n",
                "replace": "",
                "greedy": true
            },
            // replace &amp; with and
            "replace_amp": {
                "find": "&amp;",
                "replace": "and",
                "greedy": true
            }
        }
    }

Each find and replace rule has this:

    // break into lines
    "break_lines": {
      "find": "(<li class=\"card card-user)",
      "replace": "\\n\\1",
      "greedy": true
    },

* A `// comment`.
* A command name `"break_lines"`.
* A pair for `find`.
* A pair for `replace`.

You can add more string/value pairs as seen in the official documentation.

Each rule is enclosed with open and close curly braces `{ rule }`.

Rules are separated by a comma.

The last rule doesn't have a comma.

Save the file.

## JSON file with the Macro command

Go to the top menu.

Preferences/Package Settings/RegReplace/Commands-User

This JSON file looks like this:

     [
      {
     	"caption": "Reg Replace: Clean HTML into something nice",
        "command": "reg_replace",
        "args": {"replacements": ["break_lines", "remove_first_line", "replace_amp"]}
     }
    ]

Following the previous example. The `caption` is how you can find the Macro.

Do `Ctrl+Shift+p`. Start typing the "caption" name and you will see it listed.

For example. I would type: `Reg Replace: Clean HTML...`

## Running the Macro

My workflow is like this:

* Open the raw HTML file.
* Do `Ctrl+Shift+p`.
* Find the Macro name.
 * Click on it and it runs.

## Building the Macro

There are 2 processes.

One is testing the regex in Sublime. Edit the JSON. Run the Macro. Test the next regex. Edit JSON. Run Macro and so on.

While this workflow works. It is kind of tedious having to go back and forth and run the whole Macro from the beginning every time you add something new to the JSON file.

The official documentation recommends another process <a href="http://facelessuser.github.io/RegReplace/usage/" target="_blank">here</a>.

It allows you to edit the regex rules in a Python panel with highlighted syntax.

## Github example

You don't have to understand what this does exactly but just follow the regex examples to see how you can apply them to your own macro.

Inside the Rules User:

    {
        "format": "3.0",
        "replacements": {
            "github_get_contributor_url_remove_comma": {
                "find": ",",
                "replace": "",
                "greedy": true
            },
            "github_get_contributor_url_join_lines": {
                "find": "(^#.*)\\n(.*)",
                "replace": "\\1,\\2",
                "greedy": true
            },
            "github_get_contributor_url_remove_lines": {
                "find": "^(?!.*#.*).+$\\n",
                "replace": "",
                "greedy": true
            },
            "github_get_contributor_url_remove_pound_sign": {
                "find": "^#",
                "replace": "",
                "greedy": true
            },
            "github_get_contributor_url_remove_commits_word": {
                "find": "commits /",
                "replace": ",",
                "greedy": true
            },
            "github_get_contributor_url_remove_plus_sign": {
                "find": "\\+\\+ /",
                "replace": ",",
                "greedy": true
            },
            "github_get_contributor_url_remove_minus_sign": {
                "find": "--",
                "replace": "",
                "greedy": true
            },
            "github_get_contributor_url_insert_github_url": {
                "find": "^",
                "replace": "https://github.com/",
                "greedy": true
            },
            "github_get_contributor_url_remove_dotcom_number": {
                "find": "(\\.com/)\\d{1,3}",
                "replace": "\\1",
                "greedy": true
            },
            "github_get_contributor_url_remove_spaces": {
                "find": " ",
                "replace": "",
                "greedy": true
            },
            "github_get_contributor_url_add_first_row_header": {
                "find": "^https://github.com/$",
                "replace": "user_url,commits,lines_added,lines_removed",
                "greedy": true
            },
            "github_get_contributor_url_remove_last_line": {
                "find": "https://github.com/&copy;.*",
                "replace": "",
                "greedy": true
            }
        }
    }

Go to the top menu Preferences/Package Settings/RegReplace/Commands-User

Add this to JSON file

     [
      {
        "caption": "Reg Replace: Github Get Contributor URL",
        "command": "reg_replace",
        "args": {"replacements": ["github_get_contributor_url_remove_comma", "github_get_contributor_url_join_lines", "github_get_contributor_url_remove_lines", "github_get_contributor_url_remove_pound_sign", "github_get_contributor_url_remove_commits_word", "github_get_contributor_url_remove_plus_sign", "github_get_contributor_url_remove_minus_sign", "github_get_contributor_url_insert_github_url", "github_get_contributor_url_remove_dotcom_number", "github_get_contributor_url_remove_spaces", "github_get_contributor_url_add_first_row_header", "github_get_contributor_url_remove_last_line"]}
     }
    ]

Run Macro by doing `Ctrl+Shift+P` and type "Github Get Contributor URL".