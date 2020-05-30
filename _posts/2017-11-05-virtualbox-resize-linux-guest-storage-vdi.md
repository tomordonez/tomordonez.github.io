---
layout: post
title: "VirtualBox Resize Linux Guest Storage VDI"
redirect_from:
  - /virtualbox-resize-linux-guest-storage-vdi.html
categories: [Linux]
image: assets/images/10.jpg
tags: [virtualbox, linux]
---


This tutorial applies to Virtualbox when Windows is the host and Linux is the VM guest.


## Setup

* Windows 10 host
* Virtualbox
* Ubuntu Linux guest or
* Fedora Linux guest

You also need to download the `ISO` file from `Gparted`. You can download it from <a href="https://gparted.org/download.php" target="_blank">here</a>. This file is about 200MB. It should take 1-10m depending on your Internet speed.

The file might say `gparted live i686.iso`.

## Video Tutorial

<div class="videoWrapper">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/txcq0AAeGzQ?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

## Backup the VDI file

Open Virtualbox.

The Virtual Machine should NOT be running. If it's running just shut it down.

Right click the Virtual Machine. Then Settings.

Go to Storage.

Under `Controller: SATA`. Click on the `.vdi` file.

On the right there is a field that says `Location`. Copy/paste this somewhere (Sublime)

In my case this location is:

    C:\Users\neo\VirtualBox VMs\Ubuntu\Ubuntu.vdi

Open that folder.

Copy paste the `vdi` file to another location. Perhaps `Downloads`. You can use this as a backup in case you mess something up :)

## Resize the VDI file

Close VirtualBox

We are going to resize the current vdi file. NOT the backup.

Open the command prompt.

If you go to the Windows search and type `command` you should find it.

Go to this directory:

    cd C:\Program Files\Oracle\VirtualBox

You have to resize the file in MBs. Get your calculator.

Let's say that your current file is 10GBs.

You want to resize it to 20GBs?

Calculate 1024 * 20.

The result is 20480.

You are going to need this number and the location of your `vdi` file.

Go to the command prompt and follow this formula:

    VBoxManage modifyhd "Location" --resize RESULT

In my case:

* Location: C:\Users\neo\VirtualBox VMs\Ubuntu\Ubuntu.vdi
* Result: 20480

The command should be:

    VBoxManage modifyhd "C:\Users\neo\VirtualBox VMs\Ubuntu\Ubuntu.vdi" --resize 20480

It should show an output such as:

    0%...10%...20%...30%...

Then go back to the prompt. You can close the prompt for now.

Open VirtualBox. Select the VM but don't start it. On the Preview specs on the right side. Look at `Storage`. Under `Controller: SATA` it should have changed the size of the storage drive.

In my case it would say `20GB`. (It used to say 10GB).

## Load Gparted

Go back to VirtualBox. Right click on the VM. Then Settings.

Go to Storage.

Click on `Controller: IDE`.

If this is not listed. You could create one. There is a little Plus icon towards the bottom of this window. Actually there are 2 icons. The one closest to the right is a tilted square. Click on this. There is an option to `Add IDE Controller`.

Once you click on Controller: IDE.

Click on the Plus icon that is closest to the left. Click the option `Add Optical Drive`.

On the popup box, click on `Choose disk`.

Find the `Gparted` iso file that you downloaded previously.

Then click `Open`.

Click on this drive.

On the right side choose these options:

* Optical Drive: IDE Primary Master
* Live CD: Checked.

Click OK to save. And close the settings window.

## Resize the Partition with Gparted

Start the VM.

It should load `Gparted`.

There are a few options when it starts. Just hit `Enter` to everything until you login to what it looks like a Linux VM.

By default it starts `Gparted` automatically.

The screen should show 3 partitions:

* /dev/sda1: root
* /dev/sda2: swap
* unallocated

In my example my original storage drive was 10GB and I resized it to 20GB.

You will see that:

* /dev/sda1 size is 6GB
* /dev/sda2 size is 4GB

If you setup the VM with 4GB of RAM. Well this used by a `swap` partition. In this case `/dev/sda2`.

All your files should be in the `root` partition.

But you will see that the `unallocated` partition is on the opposite side of `root` with `swap` in the middle.

In other words. You need to resize `root` but `swap` is on the way.

We need to delete `swap`. Resize `root` to the `unallocated` side. Type in the `swap` size again. And build a new `swap` partition.

Follow these steps. Thanks to <a href="https://askubuntu.com/questions/101715/resizing-virtual-drive" target="_blank">this</a> source:

1. Right click the `swap` partition
2. Click on `Swapoff`. (if this option is not there, continue)
3. Right click the `swap` partition and Click on `Delete`
4. On the top menu. Click the `Apply`.
5. Right click on the `Extended` file system that had the swap partition and delete it.
6. Right click on the `root` partition `/dev/sda1`.
7. Use the mouse to drag and resize to take all the `unallocated` space.
8. Inside the field `Free space following` enter the size of the `swap` partition. In my example this is 4GB. So type `4096`.
9. Hit tab to see how it auto-resizes the total. Click Save or OK.

Let's create the `swap` partition again.

* Right click `unallocated`.
* Select `extended partition`. Click OK
* Right click on this new partition.
* In `File system`. Select `linux-swap`. Click OK
* On the top menu select Apply.
* Right click on the swap partition and hit `swapon`.

Quit Gparted. File, exit.

Then on the desktop, hit the red turn off button.

When shutting down, it might say to remove the CD and hit Enter. Do that.

It might take 5m for this to turn off.

## Change Gparted settings

Right click on the VM, then Settings.

Go to Storage.

Under `Controller: IDE` select gparted.

Set the `Optical Drive` to IDE Secondary Master or IDE Secondary Slave.

Uncheck `Live CD`.

Click OK.

## Start the VM

We should be good now.

Start the VM and it should start as usual. Verify that all files remain there.

