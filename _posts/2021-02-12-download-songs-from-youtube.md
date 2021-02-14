---
layout: post
title: "Download Songs From Youtube"
description: "Download songs from Youtube."
author: tom
image: assets/images/1.jpg
tags: [linux]
---

Download songs from Youtube using Linux, Windows, or Mac.

Use at your own risk.

Tool: Youtube-dl [doc here](https://ytdl-org.github.io/youtube-dl/index.html)

Follow the download instructions for Linux, Windows, or Mac.

To update use:

	$ sudo pip install --upgrade youtube-dl

Find the Youtube link to download. Say the link is `awesome-link`. Then download:

	$ youtube-dl -x --audio-format mp3 --audio-quality 0 --no-cache-dir "awesome-link"

If you want to download a playlist. Make a directory and download the files. Let's say the playlist is `awesome-playlist`:

	$ mkdir playlist
	youtube-dl -i -o '%(playlist_index)s.%(ext)s' -x 
	--audio-format mp3 --audio-quality 0 --no-cache-dir "awesome-playlist"

The files will download like this:

	01.mp3  03.mp3  05.mp3
	02.mp3  04.mp3  06.mp3

If you want to merge the files into one big file, then correct the metadata:

	$ cat *.mp3 > big.mp3
	$ ffmpeg -i big.mp3 big_fixed.mp3