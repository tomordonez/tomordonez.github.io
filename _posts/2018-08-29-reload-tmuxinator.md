---
layout: post
title: "How to Reload Tmuxinator"
redirect_from:
  - /reload-tmuxinator.html
categories: [Code]
image: assets/images/1.jpg
tags: [tmux, tmuxinator]
---

This is how I reload Tmuxinator if I want to change my dashboard without having to exit all the panes.

Edit the `yml` Tmuxinator config project file:

    $ tmuxinator open your-project

Save the config file and close.

Stop the project session:

    $ tmuxinator stop your-project

Then start the project again:

    $ tmuxinator your-project

Now the session is reloaded with the new config changes.