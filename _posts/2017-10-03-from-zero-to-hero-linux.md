---
layout: post
title: "From Zero to Hero in Linux"
redirect_from:
  - /from-zero-to-hero-linux.html
categories: [Linux]
image: assets/images/8.jpg
tags: [linux, shell, CLI]
---

From zero to hero in Linux is a tutorial to learn the command line and basic Linux commands.

This is a great tutorial if you are:

* Learning a programming language
* Growing tech teams
* Interested in Linux

## Your computer setup

These commands are applicable if you are on Mac or Linux.

If you are on Windows. I recommend that you install Virtualbox and Linux.

Follow the setup details on <a href="https://www.tomordonez.com/sourcing-twitter-api.html" target="_blank">this</a> page if you are on Mac or Windows.



## Video Tutorial

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/CjlRWA6wqpI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>

## Open the Terminal

The Terminal is the interface to talk to the computer.

If you are on Mac. Open `iterm2`. If you are on Linux (Virtualbox on Windows). Search for `Terminal`.

The prompt will always show a dollar sign `$` with your username and computer name such as `user@computer:$`.

You can change this prompt to show just a dollar sign `$`. And doing this customization is helpful once you start typing long commands.

Let's look at some Linux commands.

## Print working directory:

    $ pwd

This command is used to show the full path of the current directory.

## List contents:

    $ ls

This one is used to show the contents of the current directory.

To know more about how to use a command put the word `man` before a commmand such as:

    $ man ls

This is called the `manual page` aka `man page`.

To navigate this window you can use the arrows up and down or navigate using the keyboard ala `vim style`.

`Vim` is a text editor that you can open within the Terminal. It has a big learning curve because you cannot use the mouse and only the keyboard.

If you want to navigate a `man page` using what I call is the `vim style`. Press the key `J` to go down and the key `K` to go up.

To quit this window just press the key `q`.

A command can have options denoted by a single dash `-` or two dashes `--`.

The two dashes are used for words and a single dash is used for single letters or numbers.

For example:

    $ ls -a

Is the same as:

    $ ls --all

If you look at the `man page` for `ls` you will see that `ls -a` is explained as "do not ignore entries starting with ." (...with a period)

Files that start with a period are hidden files.

Just like in Windows and Mac, some files are hidden from a folder. To view them you have to change the folder settings.

## Change directory

    $ cd

This one has to be used with a parameter. If you want to move up or down a directory tree structure you have to use a special character.

Let's say that I am in this directory:

    $ pwd
    /home/tom/Documents/sandbox

If I type this:

    $ ls
    pictures

It shows there is another directory called `pictures`.

To change to that directory I need to do this:

    $ cd pictures
    $ pwd
    /home/tom/Documents/sandbox/pictures

To go to the previous directory:

    $ cd ..

To see where you are:

    $ pwd

And the output is:

    /home/tom/Documents/sandbox

To go to your home directory:

    $ cd

That is with no paremeters. Check where you are:

    $pwd
    /home/tom

## Clear the screen

As you type many commands you want to go back to the top.

    $ clear

Or you can also use `Ctrl+L`.

## Create a directory

    $ mkdir name-of-directory

Let's see where we are:

    $ pwd
    /home/tom/Documents/sandbox

Let's create a directory called `videos`

    $ mkdir videos

List contents:

    $ ls
    pictures  videos

## Change the name of a directory

I want to change of a directory from `videos` to `data`.

    $ mv videos/ data

The formula is from old name to new name.

    $ ls
    data  pictures

## Create a file inside data

I want to create a new `csv` file inside the `data` directory.

    $ cd data/ && touch emails.csv

The characters `&&` are used like this:

Run B only if A works

    A && B

The `touch` command is used to create a file.

Let's see where we are:

    $ pwd
    /home/tom/Documents/sandbox

List the contents:

    $ ls
    data  pictures

Let's run that command:

    $ cd data/ && touch emails.csv

Let's see where we are now:

    $ pwd
    /home/tom/Documents/sandbox/data

List the contents:

    $ ls
    emails.csv

## List of computer processes

To see all the processes running in your computer you can use the `Task Manager`. In Mac you can use the `Activity Monitor`.

For Linux you can use the following:

    $ top

This will show all the processes running in real time.

To take a snapshot of the processes use:

    $ ps aux

## Input and Output

Whenever you type a command and it gives you a result on the screen, this is called the "standard output" aka `stdout`.

You can also redirect this output to a file.

The input is called the "standard input" aka `stdin`.

Let's see where we are:

    $ pwd
    /home/tom/Documents/sandbox/data

The second line above is displayed on the `stdout` of the Terminal.

I want this result to be sent to a file called `working_directory.txt`

    $ pwd > working_directory.txt

When you hit `Enter`. It will not show any result.

List the contents:

    $ ls
    emails.csv  working_directory.txt

## Add to a file

What happened?

Using the `greater than` sign. Sent the output to a new file called `working_directory.txt`.

The way it works is that if such file doesn't exist. Then create the file.

If you open this file, it will have this content:

    /home/tom/Documents/sandbox/data

The `greater than` sign adds to a file. But if you use it again on the same file it will replace the contents.

    $ ls > working_directory.txt

If you hit `Enter` here it will not send the result to `stdout`.

If you open the file again you will see that the content has been replaced:

    emails.csv
    working_directory.txt

I used `ls` to list the contents of the current directory and sent this output to the file `working_directory.txt`.

## Append to a file

If you don't want to overwrite the contents of a file using redirection. You should use `two greater than` signs such as:

    $ ls >> working_directory.txt

Since the file previously had this:

    emails.csv
    working_directory.txt

Running such command will result in this content:

    emails.csv
    working_directory.txt
    emails.csv
    working_directory.txt

It appended to the end of the file.

## Redirection with Pipe |

You can also redirect the output of one command to the input of another.

Previously we saw how to get a snapshot of processes:

    $ ps aux

But this shows a long list. To show fewer results you can use the `less` or `more` commands.

Run this command:

    $ ps aux | less

It will show the results in a way that you can navigate up and down either using the arrows or the "vim way" with J and K.

The pipe is used to sent the output of `ps aux` to the input of `less`.

## Send the contents of a file to stdout

    $ cat working_directory.txt

The `cat` concatenates a file and prints to `stdout`. What this means is that it opens the file and sends the content to the standard output.

## Add contents with echo

Let's see where we are:

    $ pwd
    /home/tom/Documents/sandbox/data

List the contents:

    $ ls
    emails.csv  working_directory.txt

Open the file `emails.csv` with Sublime.

Add this content:

    first,last,email
    elon,musk,elon@tesla.com
    tim,cook,tim@apple.com

Save and close the file. Then go back to the terminal.

Let's add another row to this file like this:

    $ echo "homer,simpson,homer@aol.com" >> emails.csv

Use `cat` to show the content of `emails.csv` in `stdout`.

    $ cat emails.csv
    first,last,email
    elon,musk,elon@tesla.com
    tim,cook,tim@apple.com
    homer,simpson,homer@aol.com

## Count the number of lines

Open the `man page` of the command `wc`.

Using the option `-l` (dash lowercase L). It prints the number of lines.

Let's use a combination of previous commands:

    $ cat emails.csv | wc -l
    4

I used `cat emails.csv` to open the file. Used the `|` pipe to send the output of that to the input of `wc -l` which is used to count the lines. In this case four lines.