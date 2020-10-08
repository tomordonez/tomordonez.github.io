---
layout: post
title: "Automating Tasks with Crontab"
redirect_from:
  - /automating-tasks-crontab.html
categories: [Code]
image: assets/images/2.jpg
tags: [crontab, automation, bash]
---

Automating tasks with crontab can save you hours of work. This is a short tutorial about cron jobs.


## Automating tasks

These are a few tasks that need automating:

* Every day I have to launch Chrome and open the exact same 20 URLs.
* Every other day I have to empty my Recycle bin.
* Every Monday morning I have to send a tweet that says "Happy Monday".
* Some days I have to open a file. Filter the contents and send the result to another file.
* I also would like to tweet a random quote from a list of quotes every day at noon.
* I have my left Ctrl key remapped to my Caps Lock key. When I reboot, it goes back to the default setting. I need to change this every time.

These are repetitive tasks that have a formula:

* Start
* Step 1
* Step 2
* Step 3
* Finish

These tasks can be automated.



## Automating tasks with Crontab

As seen <a href="https://help.ubuntu.com/community/CronHowto" target="_blank">here</a>. Cron is a system daemon. Not a demon. A daemon is used to execute tasks in the background at specific times. Not in an evil way.

## Cron is like Wall-E

Cron is like having a robot do your routine tasks.

## Crontab is a text file

Cron is a daemon. A process that runs tasks. Which tasks?

Any task that you add to a text file call the `crontab`.

Each user has a crontab. You don't have to login as root to run this text file.

## Edit the Crontab

In a terminal run this:

    crontab -e

This will open the crontab. The file has a few comments to help you get started:

    1 # Edit this file to introduce tasks to be run by cron.
    2 # 
    3 # Each task to run has to be defined through a single line
    4 # indicating with different fields when the task will be run
    5 # and what command to run for the task
    6 # 
    7 # To define the time you can provide concrete values for
    8 # minute (m), hour (h), day of month (dom), month (mon),
    9 # and day of week (dow) or use '*' in these fields (for 'any').# 
    10 # Notice that tasks will be started based on the cron's system
    11 # daemon's notion of time and timezones.
    12 # 
    13 # Output of the crontab jobs (including errors) is sent through
    14 # email to the user the crontab file belongs to (unless redirected).
    15 # 
    16 # For example, you can run a backup of all your user accounts
    17 # at 5 a.m every week with:
    18 # 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
    19 # 
    20 # For more information see the manual pages of crontab(5) and cron(8)
    21 # 
    22 # m h  dom mon dow   command
    23 

## Crontab syntax

Follow this syntax:

    m h  dom mon dow   command

Where:

* m = minute (0-59)
* h = hour (0-23, 0=midnight)
* dom = day of month (1-31)
* mon = month (1-12)
* dow = day of week (0-6, 0=Sunday)

You can use a `*` for any minute or any hour or any day of month or any month or any day of week such as:

    * * * * *
Run at 7:45 am. any day of month, any month, any day of week:

    45 7 * * *
Run at 7:45 am. The 1st day of month, any month, on Monday:

    45 7 1 * 1

* 45 = minutes
* 7 = hour
* 1 = day of month
* \* = any month
* 1 = day of week (Monday)

It becomes more interesting...

Run at 7:45 am. Any day of the month, any month, on Monday, Wednesday and Friday:

    45 7 * * 1,3,5

Run at 7:45 am. From the 1st to the 15 of November and December:

    45 7 1-15 11,12 *

Run every 30 days at 8:30am:

    30 8 */30 * *

Fun right?

## Crontab command

I know what you are thinking...automate everything right?

Here are some guidelines:

* Use full paths to files
* Environment variables are not loaded
* Crontab doesn't behave like bash
* Leave a new (empty) line at the end of crontab
* Follow troubleshooting guidelines below
* Automate `E.V.E.R.Y.T.H.I.N.G`


## Remap Ctl key to Capslock at reboot

    @reboot setxkbmap -option caps:ctrl_modifier

OK so cron is not so greedy...got the joke?

...Cron has some special strings:

* @reboot: Run once at startup
* @daily: Run once a day aka 0 0 * * *
* @hourly: Ronceour...I made up that word. Run once an hour aka 0 * * * *
* @weekly: Run once a week aka 0 0 * * 0

You also have `@yearly` and `@monthly`

## Launch Python Script with Selenium and Chromedriver

Follow this tutorial: <a href="https://www.tomordonez.com/crontab-selenium-chrome-driver.html">crontab with selenium and Chrome Driver</a> for all the geek details.

It runs a python script at 7:45am every day and send stdout and stderr to a log file.

    45 7 * * * export DISPLAY=:0 && cd /home/your-username/Documents/scripts/ && /usr/bin/python awesome.py > awesome.log 2>&1

See Troubleshooting guide below to read more about "stdout and stderr to a log file".

## Empty the Trash every day at 6pm

In Linux you can empty the trash using the command line.

    sudo apt install trash-cli

To read the manual page use:

    man trash-cli

To empty trash use:

    trash-empty

In the crontab use:

    0 18 * * * trash-empty

## Every Monday morning I have to send a tweet that says "Happy Monday".

I use a Ruby gem to connect to the Twitter API from the command line.

    15 8 * * 1 /usr/local/bin/t update "Happy Monday"

## Troubleshooting Cron

I use 2 steps to troubleshoot the cron jobs:

1. Review `/var/log/syslog`
2. Redirect stdout and stderr

## Review `/var/log/syslog`

Every time you edit your crontab you will see something like this in the `syslog` file:

    Dec  5 16:32:43 your-computer crontab[6475]: (your-user) BEGIN EDIT (your-user)

    Dec  5 16:33:59 your-computer crontab[6475]: (your-user) END EDIT (your-user)

For my `trash-empty` I will get something like:

    Dec  5 18:00:01 my-computer CRON[28030]: (my-user) CMD (trash-empty)

Inside `syslog` you can at least see if the cron job is running.

## Redirect stdout and stderr

It might happen that you schedule the cron job but it doesn't do anything. If you go to `syslog` you might see that the task ran but yet it didn't do anything.

Get more details of input/output redirection <a href="http://tldp.org/LDP/abs/html/io-redirection.html" target="_blank">here</a>.

You should know the basics:

One greater than sign `>`:

* Redirect stdout to a file
* If the file doesn't exist then create it. Otherwise overwrite current file

Two greater than signs `>>`

* Redirect stdout to a file
* If the file doesn't exist then create it. Otherwise append to current file


## Redirect stdout to a file

    1>file.txt

## Redirect stderr to a file

    2>file.txt

## Redirect stdout and stderr to a file

    &>file.txt

## Redirect stderr to stdout and add to a file

    2>&1

## Every Monday send a Tweet v2

If I want to troubleshoot this cron job. I need to add redirection of stdout and stderr to a file. Then I can open the file to see if the command generated an error.

Every Monday morning send a tweet that says "Happy Monday".

    15 8 * * 1 /usr/local/bin/t update "Happy Monday" >> /home/tom/Documents/crontom.log 2>&1

* 15 = minutes
* 8 = hour
* \* = any day of month
* \* = any month
* 1 = day of week (Monday)

I could open the file `crontom.log` and see if it redirected a correct stdout or if it generated a stderr.

## Backup your crontab

* Your crontab is located at `/var/spool/cron/crontabs/your-username`
* You can create a cron job to backup your crontab. Say that 3 times fast.
* You cannot just add this job to your crontab because this directory requires root access.

You need to add this job to your root crontab:

    sudo crontab -e

And then add a line such as backing up the file at 2:05am.

    5 2 * * * cat /var/spool/cron/crontabs/your-username > /home/your-username/Documents/crontab_backup.txt 2>&1

If you open the file `crontab_backup.txt`.

You will see that a new line is added at the top that says:

    # DO NOT EDIT THIS FILE - edit the master and reinstall.

If you look at the permissions of this file it will show:

    -rw-r--r-- 1 root root

Which means that the file is owned by root and it's set to read only to `your-username`

## How to kill a cron job

Find the PID with:


    ps aux

In this example I scheduled a cron job for 7:45 am to run Python


    tom      20979  0.0  0.0  43092 15168 ?        S    07:45   0:00 /usr/bin/python awesome.py

If you already knew the PID you could also do

    ps -p PID -f

Which would give something like:

    UID        PID  PPID  C STIME TTY          TIME CMD
    tom      20979 20978  0 07:45 ?        00:00:00 /usr/bin/python awesome.py

Then you can kill the cron job with:

    kill PID

In my case I would do: `kill 20979`