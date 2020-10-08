---
layout: post
title: "Installing a Minecraft Server on Mac"
redirect_from:
  - /installing-minecraft-server-mac.html
categories: [Code]
image: assets/images/5.jpg
tags: [minecraft, python, mac, JDK]
---

Awesome tutorial for installing a Minecraft server on Mac.

I am reading a book to apply Python to Minecraft. The book is called <a href="https://nostarch.com/programwithminecraft" target="_blank">"Learn to Program with Minecraft"</a> by Craig Richardson.

This blog post was inspired by the procedure explained on the book.

## Starting the server

Used for reference. Don't start here:

1. Right click > Open the file `Start_Server`
2. Open Minecraft
3. Play > drop down > 1.11.2
4. Multiplayer
5. Select `pycraft-server`. Join Server.

## Setup a Mac environment

Start here. We need to install 5 components:

* Minecraft
* Python3
* JDK
* Minecraft Python API
* Spigot Minecraft Server

## Minecraft

You need to get an account and buy Minecraft. Installing is really easy.

Open the program and login. Click Play.

Go to Single Player > Create New World. I called it `pycraft`.

## Python 3

There are a lot of tutorials about this.

I haven't used the Mac for a long time so I had some issues. This is what I did:

    $ sudo pip3 install --upgrade pip

## JDK

I thought I previously had this installed. To check if you have it. Go to System Preferences and there should be an icon that says `Java`.

But later in the process when I ran the Minecraft server it said:

    No Java runtime present

Go to: `https://www.oracle.com/technetwork/java/javase/downloads/index.html`

Click the button: `Java Download`. It's just a square and it is easy to miss.

Scroll down and choose the radio button to accept the license.

Then download the `dmg` for macOS.

Follow the GUI install process.

## Install the API

Here is a summary of the process from the book:

* `https://nostarch.com/programwithminecraft/`
* Download setup files for MAC: `https://sourceforge.net/projects/program-with-minecraft-mac/`
* Download
* The file downloaded is: `Minecraft_Tools_Mac.zip`.
* Extract the content: `Minecraft Tools Mac`.

This folder has these:

* Directory: `py3minepi-master`
* Directory: `server`
* File: `Start_Server`
* File: `Install_API.command`

Install the API by running this file: `Install_API.command`. This opens the terminal and might ask for the admin password.

If this doesn't work. Go to the terminal and locate the file:

    $ sudo ./Install_API.command

The output was this:

    The directory '/Users/tomordonez/Library/Caches/pip/http' or its 
    parent directory is not owned by the current user and the cache has 
    been disabled. Please check the permissions and owner of that 
    directory. If executing pip with sudo, you may want sudo's -H flag.

    The directory '/Users/tomordonez/Library/Caches/pip' or its parent 
    directory is not owned by the current user and caching wheels has 
    been disabled. check the permissions and owner of that directory. If
     executing pip with sudo, you may want sudo's -H flag.

    Processing ./py3minepi-master
    Installing collected packages: py3minepi
    Running setup.py install for py3minepi ... done
    Successfully installed py3minepi-0.0.1

I tried this:

    sudo chown -R $USER /Users/$USER/Library/Caches/pip

But it said the file didn't exist. I checked this. Not sure how to solve this for now.

## Run the server

`Spigot` is a single-player Minecraft server.

Inside your `Minecraft Tools Mac` directory. Right click > Open the file `Start_Server`.


## Minecraft launch options

The book says to find the server version:

    Starting minecraft server version 1.11.2

Launch Minecraft.

Go to Menu > Launch Options > Add New.

Enter a name. I entered: `pycraft`.

Select the version: `1.11.2`.

Save and close the Launch Options. Click the logo to go to the main screen.

Go to `PLAY`, drop down now has the option: `pycraft 1.11.2`.

It will start downloading this version.

## Add the server to Minecraft

When Minecraft opens. Go to Multiplayer.

Then `Add Server`.

For server name I put: `pycraft-server`.

For server address: `localhost`.

Then Done.

The added server will show up. Click on it and `Join Server`.

Minecraft will launch the world.

The server output shows:

    [15:51:17 INFO]: UUID of player my-username is 3b1c5...
    [15:51:18 INFO]: my-username[/127.0.0.1:51952] 
    logged in with entity id 1633 at 
    ([world]-49.5, 61.0, -154.5)

## Navigating the world

I am not an expert in Minecraft. I only played it a few times.

To leave the window. Click `ESC`.

It says that the world is set to `Creative Mode`.

* Fly: Tap space twice
* Up: Press space
* Down: Shift
* Stop Flying: Tap space twice again.

## Create a new world

The book has some tips about creating a new world.

* In Minecraft, leave the game to go back to the menu.
* Close the server shell.
* Create a copy of the folder `Minecraft Tools Mac`.
* Go to the server folder
* Delete the folders: world, world_nether, world_the_end
* Start the server on the new copy.

## Play offline

Close the server by typing 'stop'. Then close the shell.

Inside the server folder:

* Open the file `server.properties`.
* Change this `online-mode=true`
* To this `online-mode=false`.

## Switch from Creative to Survival

The book says that it is a good idea to test Python programs in Survival mode. By default the config is in Creative mode.

Open `server.properties`.

Change `gamemode=1` to `gamemode=0`.

* `gamemode=1` is Creative mode.
* `gamemode=0` is Survival mode.

## Test your setup

1. Start the server
2. Start Minecraft in multiplayer mode and selecting the server.
3. Open another shell
4. Open the python shell: `$ python3`
5. Import the module: `>>> from mcpi.minecraft import Minecraft`.
6. Create a Minecraft object: `>>> mc = Minecraft.create()`

## Minecraft class methods

The Minecraft class has these methods:

    ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', 
    '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', 
    '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', 
    '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', 
    '__repr__', '__setattr__', '__sizeof__', '__str__', 
    '__subclasshook__', '__weakref__', 'create', 'getBlock', 
    'getBlockWithData', 'getBlocks', 'getHeight', 'getPlayerEntityIds', 
    'postToChat', 'restoreCheckpoint', 'saveCheckpoint', 'setBlock', 
    'setBlocks', 'setting']

## Minecraft object methods

The Minecraft object `mc` has these methods:

    ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', 
    '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', 
    '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', 
    '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', 
    '__repr__', '__setattr__', '__sizeof__', '__str__', 
    '__subclasshook__', '__weakref__', 'camera', 'conn', 'create', 
    'entity', 'events', 'getBlock', 'getBlockWithData', 'getBlocks', 
    'getHeight', 'getPlayerEntityIds', 'player', 'postToChat', 
    'restoreCheckpoint', 'saveCheckpoint', 'setBlock', 'setBlocks', 
    'setting']
