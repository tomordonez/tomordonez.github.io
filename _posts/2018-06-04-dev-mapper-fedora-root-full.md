---
layout: post
title: "Dev Mapper Fedora Root is Full"
redirect_from:
  - /dev-mapper-fedora-root-full.html
categories: [Code]
image: assets/images/1.jpg
tags: [linux, fedora, dev mapper]
---

On Fedora Linux:

/dev/mapper/fedora-root is Full

    $ df -h

    /dev/mapper/fedora-root   50G   46G  971M  98% /


As seen on <a href="https://unix.stackexchange.com/questions/328758/fedora-24-increase-disk-space-on-dev-mapper-fedora-var" target="_blank">StackExchange</a>.

Check disk usage on /var as described in [Fedora Forum](http://forums.fedoraforum.org/showthread.php?t=301185)

    $ sudo du -hs /var
    36G     /var

    $ sudo du -m /var | sort -nr | head -30

    36061   /var
    31152   /var/cache
    30768   /var/cache/PackageKit

"Delete the cached data in this directory as described in Fedora 23 -- Can I safely delete files in /var/cache/PackageKit/metadata/updates/packages?"

    $ sudo pkcon refresh force -c -1

About `pkcon`:

* PackageKit console client pkcon
* refresh [force]: Refresh the cached information about available updates.
* -c, --cache-age AGE: Set the maximum acceptable age for cached metadata, in seconds. Use -1 for 'never'.

    Refreshing cache
    Loading cache
    Downloading repository information
    Loading cache
    Downloading repository information
    Loading cache
    Downloading repository information
    Finished

Check again:

    $ df -h
    /dev/mapper/fedora-root   50G   25G   23G  53% /