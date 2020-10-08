---
layout: post
title: "Sublime Text Typewriter Autoscroll"
redirect_from:
  - /sublime-text-typewriter-auto-scroll.html
categories: [Linux]
image: assets/images/6.jpg
tags: [sublimetext]
---

How to set **Sublime text typewriter mode** and autoscroll in Sublime Text 3

![Sublime Text Typewriter Autoscroll]({{ site.baseurl }}/assets/images/sublime-text-typewriter-auto-scroll.gif)

Do you get that feeling that you are continually looking at the bottom of your screen?

I use Sublime Text to type almost everything. Keep notes, documents, and code.

Since I started studying human-computer interaction, I started noticing that I spend a lot of time focusing my attention towards the bottom of the screen, and spend a few seconds moving the mouse or the arrows to scroll up.

A few seconds is not much time from the keyboard to the mouse. However, doing this action over and over again throughout the day becomes very noticeable.

As seen <a href="https://github.com/alehandrof/Typewriter" target="_blank">here</a>. This is a **Sublime text typewriter mode** plugin. What it does is autoscroll in Sublime text to the middle of the screen.

Instead of keeping your attention to the bottom of the screen, it autoscrolls to the middle of the screen.

## Installing Sublime Text Typewriter mode

Go to Install Packages and search for **Typewriter**.

As easy as that.

There are two modes.

* `Typewriter scrolling`, to auto scroll to the middle of the screen.
* `Typewriter typing`, to remain at the end of the file.

Keep in mind that in `typewriter typing`, it disables mouse clicks, including selecting text.

Toggle between two modes by `Ctrl+Shift+P` and search `Typewriter`. Then toggle scrolling or typing.

The interface is not switching but toggling.

If you toggle scrolling and want to try typing, you have to untoggle scrolling. Then toggle typing.

## Changing scrolling offset

The middle of the screen is ambiguous depending on the size of your screen.

For my cheap improvised stand-up desk, the default setting is ideal.

However, for my two-monitor setup. The middle is more 2/3 towards the bottom.

To change the scrolling offset. Edit the file: `Typewriter Settings - User`. Under the menu: `Preferences > Package Settings > Typewriter`.

    {
    	"typewriter_mode_scrolling_offset": 10
    }

Where a positive number moves the cursor up, and a negative moves the cursor down.

You can try playing with this number to see how it works.

For more details about this plugin. Go <a href="https://github.com/alehandrof/Typewriter" target="_blank">here</a>