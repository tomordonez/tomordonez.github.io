---
layout: post
title: "Linux Cannot Format USB"
description: "In Linux I tried to format an Apple SSD USB drive using the Disks application. I got the error: usb failed to meet partition size."
author: tom
image: assets/images/1.jpg
tags: [linux]
---

In Linux I tried to format an Apple SSD USB drive using the Disks application. I got the error "usb failed to meet partition size".

Find the USB

	$ sudo fdisk -l

Output

	Disk /dev/sdb: 113 GiB, 121332826112 bytes, 236978176 sectors
	Disk model: Transcend
	Units: sectors of 1 * 512 = 512 bytes
	Sector size (logical/physical): 512 bytes / 512 bytes
	I/O size (minimum/optimal): 512 bytes / 33553920 bytes
	Disklabel type: gpt
	Disk identifier: 0000...
	                                           
	Device         Start       End   Sectors   Size Type
	/dev/sdb1         40    409639    409600   200M EFI System
	/dev/sdb2     409640 235708599 235298960 112.2G Apple HFS/HFS+
	/dev/sdb3  235708600 236978135   1269536 619.9M Apple boot

As seen in [unable to delete USB drive partitions](https://askubuntu.com/questions/675649/unable-to-delete-usb-drive-partitions-block-size-error)

Make sure to note the correct disk to format. Mine was `/dev/sdb`. Then run this:

	$ sudo dd if=/dev/zero of=/dev/sdb bs=2048 count=32

Open `Disks` and delete all partitions from the USB drive. If you only want to use it for Linux, format as `Ext4`, if you want to use it for Linux or Windows use `FAT`. Also, enter a name for the drive.

Try the same command:

	$ sudo fdisk -l

Output:

	Disk /dev/sdb: 113 GiB, 121332826112 bytes, 236978176 sectors
	Disk model: Transcend       
	Units: sectors of 1 * 512 = 512 bytes
	Sector size (logical/physical): 512 bytes / 512 bytes
	I/O size (minimum/optimal): 512 bytes / 33553920 bytes