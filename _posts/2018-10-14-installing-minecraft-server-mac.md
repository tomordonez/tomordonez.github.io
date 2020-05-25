---
layout: post
title: "Installing a Minecraft Server on Mac"
author: tom
categories: [Code]
image: assets/images/5.jpg
tags: [coding, minecraft, python, mac, JDK, spigot]
---

Awesome tutorial for installing a Minecraft server on Mac.

![Installing a Minecraft Server on Mac]({{ site.baseurl }}/assets/images/installing-minecraft-server-mac.jpg)

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

It will open the terminal with this long output:

    /Users/tomordonez/Documents/minecraft-python/Minecraft_Tools_Mac/
    server/start.command ; exit; 
    $/Users/tomordonez/Documents/minecraft-python/Minecraft_Tools_Mac/
    server/start.command ; exit;    
    Java HotSpot(TM) 64-Bit Server VM warning: Ignoring option 
    MaxPermSize; support was removed in 8.0    
    --- Error, this build is outdated ---    
    --- Please download a new build as per instructions from 
    https://www.spigotmc.org/ ---   
    --- Server will start in 15 seconds ---    
    Loading libraries, please wait...    
    [15:33:41 INFO]: Starting minecraft server version 1.11.2    
    [15:33:41 INFO]: Loading properties    
    [15:33:42 INFO]: Default game type: CREATIVE    
    [15:33:42 INFO]: This server is running CraftBukkit version 
    git-Spigot-6de2fbc-c1aa859 (MC: 1.11.2) (Implementing API version
     1.11.2-R0.1-SNAPSHOT)    
    [15:33:42 INFO]: Debug logging is disabled
    [15:33:42 INFO]: Server Ping Player Sample Count: 12
    [15:33:42 INFO]: Using 4 threads for Netty based IO
    [15:33:42 INFO]: Generating keypair
    [15:33:43 INFO]: Starting Minecraft server on :25565
    [15:33:43 INFO]: Using default channel type
    >WARNING: An illegal reflective access operation has occurred
    WARNING: Illegal reflective access by 
    io.netty.util.internal.PlatformDependent0 
    (file:/Users/tomordonez/Documents/minecraft-python/Minecraft_Tools_Mac/server/
    	spigot.jar) to field java.nio.Buffer.address
    WARNING: Please consider reporting this to the maintainers of 
    io.netty.util.internal.PlatformDependent0
    WARNING: Use --illegal-access=warn to enable warnings of further 
    illegal reflective access operations
    WARNING: All illegal access operations will be denied in a future 
    release
    [15:33:43 INFO]: Your platform does not provide complete low-level 
    API for accessing direct buffers reliably. Unless explicitly 
    requested, heap buffer will always be preferred to avoid potential 
    system unstability.
    [15:33:43 INFO]: Set PluginClassLoader as parallel capable
    [15:33:43 INFO]: [SetSpawn] Loading SetSpawn v2.1
    [15:33:43 INFO]: [RaspberryJuice] Loading RaspberryJuice v1.7
    [15:33:43 INFO]: --- Beginning UUID conversion, this may 
    take A LONG time ---
    [15:33:43 INFO]: Preparing level "world"
    [15:33:43 INFO]: -------- World Settings For [world] --------
    [15:33:43 INFO]: Allow Zombie Pigmen to spawn from 
    portal blocks: true
    [15:33:43 INFO]: View Distance: 10
    [15:33:43 INFO]: Experience Merge Radius: 3.0
    [15:33:43 INFO]: Arrow Despawn Rate: 1200
    [15:33:43 INFO]: Zombie Aggressive Towards Villager: true
    [15:33:43 INFO]: Nerfing mobs spawned from spawners: false
    [15:33:43 INFO]: Item Despawn Rate: 6000
    [15:33:43 INFO]: Item Merge Radius: 2.5
    [15:33:43 INFO]: Mob Spawn Range: 4
    [15:33:43 INFO]: Cactus Growth Modifier: 100%
    [15:33:43 INFO]: Cane Growth Modifier: 100%
    [15:33:43 INFO]: Melon Growth Modifier: 100%
    [15:33:43 INFO]: Mushroom Growth Modifier: 100%
    [15:33:43 INFO]: Pumpkin Growth Modifier: 100%
    [15:33:43 INFO]: Sapling Growth Modifier: 100%
    [15:33:43 INFO]: Wheat Growth Modifier: 100%
    [15:33:43 INFO]: NetherWart Growth Modifier: 100%
    [15:33:43 INFO]: Vine Growth Modifier: 100%
    [15:33:43 INFO]: Cocoa Growth Modifier: 100%
    [15:33:43 INFO]: Entity Activation Range: An 32 / Mo 32 / Mi 16
    [15:33:43 INFO]: Entity Tracking Range: 
    Pl 48 / An 48 / Mo 48 / Mi 32 / Other 64
    [15:33:43 INFO]: Hopper Transfer: 8 Hopper Check: 8 Hopper Amount: 1
    [15:33:43 INFO]: Random Lighting Updates: false
    [15:33:43 INFO]: Structure Info Saving: true
    [15:33:43 INFO]: Custom Map Seeds:  
    Village: 10387312 Feature: 14357617Monument: 10387313 Slime: 987234911
    [15:33:43 INFO]: Max TNT Explosions: 100
    [15:33:43 INFO]: Tile Max Tick Time: 50ms Entity max Tick Time: 50ms
    [15:33:46 INFO]: -------- World Settings For [world_nether] --------
    [15:33:46 INFO]: Allow Zombie Pigmen to spawn 
    from portal blocks: true
    [15:33:46 INFO]: View Distance: 10
    [15:33:46 INFO]: Experience Merge Radius: 3.0
    [15:33:46 INFO]: Arrow Despawn Rate: 1200
    [15:33:46 INFO]: Zombie Aggressive Towards Villager: true
    [15:33:46 INFO]: Nerfing mobs spawned from spawners: false
    [15:33:46 INFO]: Item Despawn Rate: 6000
    [15:33:46 INFO]: Item Merge Radius: 2.5
    [15:33:46 INFO]: Mob Spawn Range: 4
    [15:33:46 INFO]: Cactus Growth Modifier: 100%
    [15:33:46 INFO]: Cane Growth Modifier: 100%
    [15:33:46 INFO]: Melon Growth Modifier: 100%
    [15:33:46 INFO]: Mushroom Growth Modifier: 100%
    [15:33:46 INFO]: Pumpkin Growth Modifier: 100%
    [15:33:46 INFO]: Sapling Growth Modifier: 100%
    [15:33:46 INFO]: Wheat Growth Modifier: 100%
    [15:33:46 INFO]: NetherWart Growth Modifier: 100%
    [15:33:46 INFO]: Vine Growth Modifier: 100%
    [15:33:46 INFO]: Cocoa Growth Modifier: 100%
    [15:33:46 INFO]: Entity Activation Range: An 32 / Mo 32 / Mi 16
    [15:33:46 INFO]: Entity Tracking Range: 
    Pl 48 / An 48 / Mo 48 / Mi 32 / Other 64
    [15:33:46 INFO]: Hopper Transfer: 8 Hopper Check: 8 Hopper Amount: 1
    [15:33:46 INFO]: Random Lighting Updates: false
    [15:33:46 INFO]: Structure Info Saving: true
    [15:33:46 INFO]: Custom Map Seeds:  
    Village: 10387312 Feature: 14357617Monument: 10387313 Slime: 987234911
    [15:33:46 INFO]: Max TNT Explosions: 100
    [15:33:46 INFO]: Tile Max Tick Time: 50ms Entity max Tick Time: 50ms
    [15:33:47 INFO]: -------- World Settings For [world_the_end] --------
    [15:33:47 INFO]: Allow Zombie Pigmen to spawn from 
    portal blocks: true
    [15:33:47 INFO]: View Distance: 10
    [15:33:47 INFO]: Experience Merge Radius: 3.0
    [15:33:47 INFO]: Arrow Despawn Rate: 1200
    [15:33:47 INFO]: Zombie Aggressive Towards Villager: true
    [15:33:47 INFO]: Nerfing mobs spawned from spawners: false
    [15:33:47 INFO]: Item Despawn Rate: 6000
    [15:33:47 INFO]: Item Merge Radius: 2.5
    [15:33:47 INFO]: Mob Spawn Range: 4
    [15:33:47 INFO]: Cactus Growth Modifier: 100%
    [15:33:47 INFO]: Cane Growth Modifier: 100%
    [15:33:47 INFO]: Melon Growth Modifier: 100%
    [15:33:47 INFO]: Mushroom Growth Modifier: 100%
    [15:33:47 INFO]: Pumpkin Growth Modifier: 100%
    [15:33:47 INFO]: Sapling Growth Modifier: 100%
    [15:33:47 INFO]: Wheat Growth Modifier: 100%
    [15:33:47 INFO]: NetherWart Growth Modifier: 100%
    [15:33:47 INFO]: Vine Growth Modifier: 100%
    [15:33:47 INFO]: Cocoa Growth Modifier: 100%
    [15:33:47 INFO]: Entity Activation Range: An 32 / Mo 32 / Mi 16
    [15:33:47 INFO]: Entity Tracking Range: 
    Pl 48 / An 48 / Mo 48 / Mi 32 / Other 64
    [15:33:47 INFO]: Hopper Transfer: 8 Hopper Check: 8 Hopper Amount: 1
    [15:33:47 INFO]: Random Lighting Updates: false
    [15:33:47 INFO]: Structure Info Saving: true
    [15:33:47 INFO]: Custom Map Seeds:  
    Village: 10387312 Feature: 14357617
    Monument: 10387313 Slime: 987234911
    [15:33:47 INFO]: Max TNT Explosions: 100
    [15:33:47 INFO]: Tile Max Tick Time: 50ms Entity max Tick Time: 50ms
    [15:33:47 INFO]: Preparing start region for level 0 
    (Seed: -8729076498846554641)
    [15:33:48 INFO]: Preparing spawn area: 4%
    [15:33:49 INFO]: Preparing spawn area: 6%
    [15:33:50 INFO]: Preparing spawn area: 8%
    [15:33:51 INFO]: Preparing spawn area: 11%
    [15:33:52 INFO]: Preparing spawn area: 14%
    [15:33:53 INFO]: Preparing spawn area: 16%
    [15:33:54 INFO]: Preparing spawn area: 19%
    [15:33:55 INFO]: Preparing spawn area: 21%
    [15:33:56 INFO]: Preparing spawn area: 25%
    [15:33:57 INFO]: Preparing spawn area: 29%
    [15:33:58 INFO]: Preparing spawn area: 33%
    [15:33:59 INFO]: Preparing spawn area: 37%
    [15:34:00 INFO]: Preparing spawn area: 42%
    [15:34:01 INFO]: Preparing spawn area: 47%
    [15:34:02 INFO]: Preparing spawn area: 53%
    [15:34:03 INFO]: Preparing spawn area: 59%
    [15:34:04 INFO]: Preparing spawn area: 64%
    [15:34:05 INFO]: Preparing spawn area: 68%
    [15:34:06 INFO]: Preparing spawn area: 71%
    [15:34:07 INFO]: Preparing spawn area: 74%
    [15:34:09 INFO]: Preparing spawn area: 77%
    [15:34:10 INFO]: Preparing spawn area: 81%
    [15:34:11 INFO]: Preparing spawn area: 84%
    [15:34:12 INFO]: Preparing spawn area: 88%
    [15:34:13 INFO]: Preparing spawn area: 91%
    [15:34:14 INFO]: Preparing spawn area: 95%
    [15:34:15 INFO]: Preparing spawn area: 99%
    [15:34:15 INFO]: Preparing start region for level 1 
    (Seed: -8729076498846554641)
    [15:34:16 INFO]: Preparing spawn area: 5%
    [15:34:17 INFO]: Preparing spawn area: 10%
    [15:34:18 INFO]: Preparing spawn area: 12%
    [15:34:19 INFO]: Preparing spawn area: 16%
    [15:34:21 INFO]: Preparing spawn area: 19%
    [15:34:22 INFO]: Preparing spawn area: 24%
    [15:34:23 INFO]: Preparing spawn area: 29%
    [15:34:24 INFO]: Preparing spawn area: 34%
    [15:34:25 INFO]: Preparing spawn area: 39%
    [15:34:26 INFO]: Preparing spawn area: 49%
    [15:34:27 INFO]: Preparing spawn area: 58%
    [15:34:28 INFO]: Preparing spawn area: 64%
    [15:34:29 INFO]: Preparing spawn area: 72%
    [15:34:30 INFO]: Preparing spawn area: 76%
    [15:34:31 INFO]: Preparing spawn area: 82%
    [15:34:32 INFO]: Preparing spawn area: 88%
    [15:34:33 INFO]: Preparing spawn area: 94%
    [15:34:34 INFO]: Preparing start region for level 2 
    (Seed: -8729076498846554641)
    [15:34:35 INFO]: Preparing spawn area: 16%
    [15:34:36 INFO]: Preparing spawn area: 36%
    [15:34:37 INFO]: Preparing spawn area: 51%
    [15:34:38 INFO]: Preparing spawn area: 67%
    [15:34:39 INFO]: Preparing spawn area: 88%
    [15:34:39 INFO]: [SetSpawn] Enabling SetSpawn v2.1
    ===[ SetSpawn v2.1 by artur9010 ]===
    >Thanks for downloading SetSpawn!
    http://dev.bukkit.org/bukkit-plugins/setspawn
    =====================================
    [15:34:39 INFO]: [RaspberryJuice] Enabling RaspberryJuice v1.7
    [15:34:39 INFO]: [RaspberryJuice] ThreadListener Started
    [15:34:39 INFO]: Server permissions file permissions.yml is empty, 
    ignoring it
    [15:34:40 INFO]: Done (56.592s)! For help, type "help" or "?"

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

To get all the details. Get a copy of the book "Learn to Program with Minecraft" <a href="https://nostarch.com/programwithminecraft" target="_blank">here</a>.Program with Minecraft" <a href="https://nostarch.com/programwithminecraft" target="_blank">here</a>.