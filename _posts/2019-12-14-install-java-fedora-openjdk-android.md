---
layout: post
title: "Install Java on Fedora with OpenJDK"
redirect_from:
  - /install-java-fedora-openjdk-android.html
categories: [Linux]
image: assets/images/11.jpg
tags: [linux, fedora, java, openjdk, jshell]
---

How to install Java on Fedora with OpenJDK. Also how to setup Android and a review of JShell.

The Python shell has been a great learning tool and I wanted a similar experience in Java. There is a module called `JShell`, however, it's not available for the default `Java 8` installed on my Linux. I had to at least upgrade to `Java 9`.

## Versions for Fedora, Java, Android Studio

Fedora Version:

* Fedora 31

Java Version:

    $ java -version
    openjdk version "1.8.0_232"
    OpenJDK Runtime Environment (build 1.8.0_232-b09)
    OpenJDK 64-Bit Server VM (build 25.232-b09, mixed mode)

Which Java bin:

    $ which java
    /usr/bin/java

Android version:

* Android Studio 3.5

Android SDK Location:

* Open Android Project Structure: `Menu > File > Project Structure > SDK Location`
* Android SDK Location: `/home/tom/Android/Sdk`
* Android NDK Location: empty
* JDK Location: `/usr/local/android-studio/jre`

Testing Android JShell Console:

* `Menu > Tools > JShell console`
* Entered: `out.println("Hello world");`
* Hit Run
* An error shows: `JDK version is 8. JDK 9 or higher is needed to run JShell.`

## Installation Summary

* Download OpenJDK 13 from [here](https://jdk.java.net/13/) using `wget`...
* Following this tutorial [here](https://www.tecmint.com/install-java-on-centos-rhel-fedora/)
* Change the Android JDK location as seen [here](https://stackoverflow.com/questions/30631286/how-to-specify-the-jdk-version-in-android-studio)
* Test JShell on Android Studio and the command line as seen [here](http://cr.openjdk.java.net/~rfield/tutorial/JShellTutorial.html)

What could go wrong...right?

## Installing OpenJDK 13 on Fedora

Download OpenJDK 13 from [here](https://jdk.java.net/13/) and following [this](https://www.tecmint.com/install-java-on-centos-rhel-fedora/) tutorial.

    $ cd /opt/
    $ sudo wget https://download.java.net/java/GA/jdk13.0.1/cec27d702aa74d5a8630c65ae61e4305/9/GPL/openjdk-13.0.1_linux-x64_bin.tar.gz
    $ sudo tar -xvf openjdk-13.0.1_linux-x64_bin.tar.gz

Check the Java version

    $ /opt/jdk-13.0.1/bin/java -version
    openjdk version "13.0.1" 2019-10-15
    OpenJDK Runtime Environment (build 13.0.1+9)
    OpenJDK 64-Bit Server VM (build 13.0.1+9, mixed mode, sharing)

Setup environment by editing your `.bashrc`. Add these to the end of the file.

    # openjdk version "13.0.1"
    export JAVA_HOME=/opt/jdk-13.0.1/
    export PATH=/opt/jdk-13.0.1/bin:$PATH

Then run `$ source ~/.bashrc`. Restart the terminal.

I tested the Java version:

    $ java -version
    openjdk version "13.0.1" 2019-10-15
    OpenJDK Runtime Environment (build 13.0.1+9)
    OpenJDK 64-Bit Server VM (build 13.0.1+9, mixed mode, sharing)

    $ which java
    /opt/jdk-13.0.1/bin/java

### Alternative installation procedure

I tried the official Fedora docs as seen [here](https://docs.fedoraproject.org/en-US/quick-docs/installing-java/)

    $ sudo dnf search openjdk
    $ sudo dnf install java-latest-openjdk.x86_64
    $ sudo alternatives --config java
    Select option: 2
    $ export JAVA_HOME=/usr/lib/jvm/java-13-openjdk-13.0.1.9-2.rolling.fc31.x86_64
    $ export PATH=$JAVA_HOME/bin:$PATH

(Learned about the `alternatives` command [here](https://developers.redhat.com/blog/2018/11/05/migrating-from-oracle-jdk-to-openjdk-on-red-hat-enterprise-linux-what-you-need-to-know/))

However after multiple attempts I saw that the `jshell` module was missing and couldn't figure out how to install it. It was supposed to come with the JDK already.

### Troubleshooting your PATH

I struggled with this for hours, trying to edit the `PATH` variable. I previously added the `JDK 13` path to the end causing trouble. The system would check first the default Java installed in `/usr/bin` because this path was added before.

If you wish to edit your `PATH` variable. You can use [this](https://unix.stackexchange.com/questions/108873/removing-a-directory-from-path) code:

    PATH=$(echo "$PATH" | sed -e 's/\/usr\/bin:\/opt\/jdk-13.0.1\/bin$/\/opt\/jdk-13.0.1\/bin:\/usr\/bin/')

Following this syntax while escaping the forward slashes for the directories:

    PATH=$(echo "$PATH" | sed -e 's/replace_this/with_this/')


## Change the Android JDK Location

Here is where I learned the hard way that I couldn't change the version of JDK in Android Studio. 

Open Android Project Structure: `Menu > File > Project Structure > SDK Location`

* Current JDK Location: `/usr/local/android-studio/jre`

I tried to open this location:

    /opt/jdk-13.0.1/

However, I got this error:

    Please choose a valid JDK 8 directory

More details [here](https://stackoverflow.com/questions/56997930/how-to-use-jdk-12-with-android-project).

For now I just wanted to test `JShell`.

## Test JShell on Android Studio

In Android Studio: `Tools > JShell Console`.

An error says `JShell: JDK version is 8. JDK 9 or higher is needed to run JShell.`

I don't see how `JShell` can be used in Android Studio if it won't allow to choose a JDK other than version 8.

## Test JShell on the Command Line

The Command Line is what I've used for the Python shell. I am happy enough to use the CLI for this Java shell.

    $ jshell
    |  Welcome to JShell -- Version 13.0.1
    |  For an introduction type: /help intro

    jshell>

I like it already.

Exit with:

    jshell> /exit

The next few lines follow [this](http://cr.openjdk.java.net/~rfield/tutorial/JShellTutorial.html) tutorial.

Start `jshell` in verbose mode to provide feedback about what you typed.

    $ jshell -v

    jshell> int x = 45;
	x ==> 45
	|  created variable x : int

	jshell> String twice(String s) {
	   ...>     return s + s;
	   ...> }
	|  created method twice(String)

	jshell> twice("Ocean");
	$3 ==> "OceanOcean"
	|  created scratch variable $3 : String

	jshell> String x;
	x ==> null
	|  replaced variable x : String
	|    update overwrote variable x : int

Use `tab` to autocomplete or show available methods:

    jshell> System.c
	class  clearProperty(  console()  currentTimeMillis()

Use `tab` before entering a method's parameter:

    jshell> twice(
	$3       twice(   x        

	Signatures:
	String twice(String s)

	<press tab again to see documentation>

	String twice(String s)
	<no documentation found>

	<press tab again to see all possible completions;
	total possible completions: 542>

Use `vim` as an editor within `JShell`:

    jshell> /set editor vim
	|  Editor set to: vim

	jshell> /edit

It opens `vim`, which has everything I typed so far. I added a method, then saved, and closed the file:

    |  created method cube(double)

	jshell> cube(2);
	$6 ==> 8.0
	|  created scratch variable $6 : double