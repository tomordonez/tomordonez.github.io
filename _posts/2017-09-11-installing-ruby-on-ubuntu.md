---
layout: post
title: "Installing Ruby on Ubuntu"
redirect_from:
  - /installing-ruby-on-ubuntu.html
categories: [Code]
image: assets/images/1.jpg
tags: [ruby, ubuntu]
---

Follow this process to install Ruby on Ubuntu Linux


## Installing Ruby on Ubuntu

As seen on <a href="http://rvm.io/" target="_blank">RVM</a>

Go to the terminal in Ubuntu.

On the Terminal go to the `Menu/Edit/Profile Preferences/Title` and Command.

Check `Run command as a login shell`.

Close the Terminal and start a new one.

Add the public key from RVM

    $ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3

Then run this command to install RVM

    $ \curl -sSL https://get.rvm.io | bash -s stable

If the result says "GPG signature verification failed". It says to "try to install GPG v2 and then fetch the public key":

    $ gpg2 --recv-keys string-letters-numbers

Above copy/paste the corresponding string that is shown on your terminal.

If that still doesn't work it will say:

    gpg: keyserver receive failed: No keyserver available

The next troubleshooting is to enter this:

    $ command curl -sSL https://rvm.io/mpapis.asc | gpg2 --import -

If that works it should say something like:

    gpg: starting migration...
    gpg: porting secret keys
    gpg: migration succeeded
    gpg: key...public key...
    gpg: Total number processed: 1
    gpg: ....imported: 1

Then run the command again to install RVM:

    $ \curl -sSL https://get.rvm.io | bash -s stable

If it works it should say something like:

    Installing RVM to /home...
    Adding RVM PATH line to ...
    Adding rvm loading line to ...
    * To start using RVM you need...

Close the terminal and open it again.

    $ source ~/.rvm/scripts/rvm

    $ type rvm | head -n 1

This should now say `rvm is a function`

Install Ruby. As of this writing the stable version was `2.4.2`

    $ rvm install 2.4.2
    $ rvm use 2.4.2 --default

## Use Gemsets

To work on different projects <a href="http://rvm.io/gemsets/creating" target="_blank">create a Gemset</a>.

    $ rvm use 2.4.2@name-of-project --create

List gemsets with:

    $ rvm gemset list

Switch gemsets with:

    $ rvm gemset use name-of-gemset

