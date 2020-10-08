---
layout: post
title: "Increase Boot Size in Linux Fedora"
redirect_from:
  - /increase-boot-size-linux.html
categories: [Linux]
image: assets/images/5.jpg
tags: [linux, fedora]
---

I keep having this issue on a local Linux server. When I want to update the system, after it downloads the updates and it's ready to install them, it says the boot size is too small.

Review the boot size:

    $ df -h
    Filesystem   Size  Used  Avail Use%  Mounted on
    /dev/sdb1    190M  151M  26M   86%   /boot

## Increase Boot Size

According to [this discussion](https://access.redhat.com/discussions/3060611) on the Redhat forum. Increasing the boot size is possible but it's not a supported method, as it might create instability in the disk.

The recommendation is backing up the system and choosing a larger partition with a fresh install. Redhat recommends at least **1GB for /boot**.

It is obviously a valid advice. But doing this could take hours.

These are the options to reduce the size of Used space.

## Remove Old Kernels

As seen [here](https://www.if-not-true-then-false.com/2012/delete-remove-old-kernels-on-fedora-centos-red-hat-rhel/)

Check kernels:

    $ dnf list kernel

This can take a few minutes. My output was:

	Installed Packages
	kernel.x86_64  5.3.8-200.fc30    @updates
	kernel.x86_64  5.3.11-300.fc31   @updates
	kernel.x86_64  5.3.14-300.fc31   @updates

	Available Packages
	kernel.x86_64  5.4.8-200.fc31    updates

Remove the number of kernels:

    $ sudo dnf remove $(dnf repoquery --installonly --latest-limit=-2 -q)

If this doesn't work. Try restarting. Then run again. Then try updating system again.

You can also try limiting the number of kernels to 1:

    $ sudo dnf remove $(dnf repoquery --installonly --latest-limit=-1 -q)

Now it shows:

    $ df -h
    Filesystem   Size  Used  Avail Use%  Mounted on
    /dev/sdb1    190M  114M  63M   65%   /boot