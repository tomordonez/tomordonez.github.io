---
layout: post
title: "Create a CSV file from Linkedin Sent Invites"
redirect_from:
  - /create-csv-from-linkedin-sent-invites.html
categories: [Recruiting]
image: assets/images/11.jpg
tags: [sourcing, linkedin, automation, productivity]
---

Follow this process to create a CSV file from Linkedin sent invites.


## Objective

1. Connect with People
2. Get a list of sent invitations
3. Automate "view profile" on browser

## 1. Connect with People

Invite as Friend

## 2. Get a list of sent invitations

Go to [Linkedin People Invites](https://www.linkedin.com/people/invites?trk=tab_inv)

Scroll down the infinite scroll until the bottom.

Inspect HTML and copy element `<ul class="list-container invites">`

## Create a CSV list

Paste code into Sublime.

Go back to LI and get the name of the first person on top of the list and the last person on the bottom of the list.

Go to Sublime and search for these names to make sure you got all the HTML code.

Find:

    (<div class="entityblock">)

Replace with:

    \n$1

Find:

    ,

Replace with:

    ;

Remove the first row that starts with `<ul class="list-container invites">`

Find:

    ^.*value="

Replace with:

    empty

Find:

    " id="checkbox.*?a href="

Replace with:

    ,

Find:

    &amp;.*<span>

(pending to review if this is `&amp;` or `&`)

Replace with:

    ,

Find:

    </span.*subheader">

Replace with:

    ,

Find:

    </p>.*

Replace with:

    empty

A CSV list is born

## 3. Automate "view profiles" on browser

This part is going to be a little manual.

If you want to prioritize some invites then you need to add the date of the invite in the CSV.

Go back to LI sent invites and get the invite dates. Add them manually to your CSV (in Excel).

You can convert your CSV into XLS if you want.

You could also segment your list by priorities.

## Automating View Profiles with Bash

Note: This requires some coding skills.

This process is only half automated and requires some manual work. Perhaps 30min daily.

With LI logged in. The process is to open each URL on the browser and then close them.

With bash you can automate opening each URL but you have to close them manually.

The number of tabs that you can open in Chrome depends on your RAM. If you have 16GB of RAM you could have up to 80 tabs opened.

Perhaps you can have lists of 20 URLs for each file and run the script in batches.

The script should be something simple like:

    #!/usr/local/bin/bash
    while read -r line
    do
      open "$line"
      sleep 10
    done < "$1"

When you create a text file such as `input.txt` and add say...20 URLs to the file. Then 
you can run the script like this:

Save and name the script with whatever name you want but ending in `.sh`

Such as: `awesome-file.sh`

Now enable the file to be executable.

    $ chmod +x awesome-file.sh

Now you can execute the file like this:

    $ ./awesome-file.sh input.txt

This will open the URLs on the browser. Once they load, you need to manually close them.

## Automating View Profiles with Python

The problem with the Bash script is that you have to manually close the profiles.

If you want to automate opening and closing you need to use Python and Selenium.

You need to install Selenium:

    $ pip install selenium

You need to install ChromeDriver from <a href="https://sites.google.com/a/chromium.org/chromedriver/downloads" target="_blank">here</a>.

This downloads a zip file. Unzip. Take a note of where this is installed. You will need this location below.

**Note: This script is incomplete**

This Python script opens and closes the profiles but it's missing Linkedin authentication...to be continued.

    import os
    import time
    from selenium import webdriver
    
    chromedriver = "Path to where you downloaded the Chromedriver"
    os.environ["webdriver.chrome.driver"] = chromedriver
    dr = webdriver.Chrome(chromedriver)
    
    dr.get('URL of profile here')
    dr.execute_script("$(window.open('URL of next profile here'))")
    
    time.sleep(10)
    dr.close()
    dr.switch_to.window(dr.window_handles[-1])
    dr.close()

