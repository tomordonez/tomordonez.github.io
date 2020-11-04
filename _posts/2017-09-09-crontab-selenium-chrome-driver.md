---
layout: post
title: "Crontab with Selenium and Chrome Driver"
description: "Create a crontab with Selenium and Chrome Driver"
redirect_from:
  - /crontab-selenium-chrome-driver.html
categories: [Code]
image: assets/images/7.jpg
tags: [crontab, selenium, chromedriver, bash]
---

This is how to setup a crontab with Selenium and Chrome Driver


If you are here I assume you have some knowledge of `cron`. Otherwise read this <a href="https://www.tomordonez.com/automating-tasks-crontab.html">cronjob tutorial</a>.

Let's pretend that we have a Python script in this directory:

    ~/Documents/scripts/awesome.py

## Just for reference. You should use this for troubleshooting purposes:

Review the system log file here: `/var/log/syslog`

Send the stderr and stdout to a file like this. Right after the last crontab command:

    > awesome.log 2>&1

Read more about the redirection syntax <a href="http://tldp.org/LDP/abs/html/io-redirection.html" target="_blank">here</a>.

## Edit your crontab

Edit your crontab with `crontab -e`

In this example you run a job every day at 7:45am.

    45 7 * * * export DISPLAY=:0 && cd /home/your-username/Documents/scripts/ && /usr/bin/python awesome.py > awesome.log 2>&1

To learn what `45 7 * * *` means. Go to this tutorial about <a href="https://www.tomordonez.com/automating-tasks-crontab.html">automating tasks with crontab</a>.

Since `cron` runs with a limited number of environment variables. You need to set the `DISPLAY` variable.

<a href="http://askubuntu.com/questions/432255/what-is-display-environment-variable" target="_blank">This</a> explains more about the `DISPLAY` variable.

`DISPLAY` consists of a keyboard, a mouse and a screen. The display is managed by the `X server`.

If I want to open Sublime in Linux. X server is the framework that helps me display the program into a window. If I move the mouse then it helps me go to an exact pixel in the screen.

Lookup more details on Wikipedia as `X Window System`.

"The X server receives input from the keyboard and mouse and displays to a screen. A web browser and a terminal run on the user's workstation."

If you do this on your terminal:

    echo $DISPLAY

Most likely you will get:

    :0

Which means that `DISPLAY` variable is set to `:0`.

If you do this on your terminal:

    env | grep 'DISPLAY'

You will get:

    DISPLAY:=0
    
Other examples of DISPLAY could be:

* DISPLAY=localhost:4
* DISPLAY=google.com:0

The syntax for `DISPLAY` is `hostname:D.S` which means screen `S` on display `D` of host `hostname`.

    hostname:D.S

* `hostname` is the computer name where the X server is running. If there is no hostname then it means the `localhost`.
* `D` is a sequence number. Usually 0. It can be different if the computer has many displays connected.
* `S` is the screen number. 0 is the default.

When you `echo $DISPLAY`. The hostname is omitted and it shows only the default `DISPLAY` number: `:0`.

## Crontab and DISPLAY

Selenium opens the browser if you are using the Chromedriver.

Cron doesn't have the `DISPLAY` environment variable set.

You need to set the `DISPLAY` variable inside the crontab such as:

    export DISPLAY=:0

Going back the example where you run a job every day at 7:45am.

    45 7 * * * export DISPLAY=:0 && cd /home/your-username/Documents/scripts/ && /usr/bin/python awesome.py > awesome.log 2>&1

You are setting the `DISPLAY` variable before executing any command.

You are using the full path to where the files are.

And you are sending stdout and stderr to a log file for troubleshooting.