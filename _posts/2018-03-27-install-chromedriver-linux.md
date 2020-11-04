---
layout: post
title: "Install Chromedriver in Linux"
description: "A short tutorial to install Chromedriver in Linux"
redirect_from:
  - /install-chromedriver-linux.html
categories: [Code]
image: assets/images/3.jpg
tags: [linux, chromedriver]
---

Based on this [gist](https://gist.github.com/natritmeyer/6522446) about installing Chromedriver in Linux Fedora. And setting up the correct file location in your Python scripts.

    $ wget https://chromedriver.storage.googleapis.com/2.37/chromedriver_linux64.zip
    $ unzip chromedriver_linux64_2.3.zip
    $ sudo cp chromedriver /usr/bin/chromedriver
    $ sudo chown root /usr/bin/chromedriver
    $ sudo chmod +x /usr/bin/chromedriver
    $ sudo chmod 755 /usr/bin/chromedriver

Then setup Chromedriver using the right location.

    driver = webdriver.Chrome('/usr/bin/chromedriver')
