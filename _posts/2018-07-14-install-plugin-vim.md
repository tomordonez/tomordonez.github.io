---
layout: post
title: "Install a Plugin in Vim"
author: tom
categories: [Code]
image: assets/images/3.jpg
tags: [coding, linux, vim]
---

A short one on how to *install a plugin in Vim*.

Install `Vundle`. More details <a href="https://github.com/VundleVim/Vundle.vim" target="_blank">here</a>.

    git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim

Edit the `.vimrc` file and add these lines:

    set nocompatible
    filetype off
    " set the runtime path to include Vundle and initialize
    set rtp+=~/.vim/bundle/Vundle.vim
    call vundle#begin()

    " let Vundle manage Vundle, required
    Plugin 'VundleVim/Vundle.vim'

    " All of your Plugins must be added before the following line
    call vundle#end()            " required
    filetype plugin indent on    " required

This is how I **install Vim plugins**:

1. Go to a plugin that says you can install using `Vundle`.
2. For instance. This plugin auto saves when you are editing a file: <a href="https://github.com/907th/vim-auto-save" target="_blank">auto-save</a>.
3. The Github project should have a directory called `plugin`.
4. Add the `user/project` from Github to your `.vimrc` file. In the `auto-save` example. The user is `907th` and the project is `vim-auto-save`. I will add this line to my `.vimrc` file: `Plugin 907th/vim-auto-save` before a specific line as noted above.
5. Save `vimrc`. Source it with `:so %`.
6. List all `Vundle` plugins. Still inside Vim: `:PluginList`. Make sure the Plugin is listed. You can do `:q` to exit this view.
7. Inside Vim: `:PluginInstall`. This will install recently added Plugins.

This particular `Plugin` for `auto-save` had a few more lines that had to be added. Depending on the `Plugin` readme page, please follow those specific instructions.

For `auto-save`. You need to add these lines to the `.vimrc` file:

    let g:auto_save = 1
    let g:auto_save_in_insert_mode = 0

Here is a list of `Vim` plugins:

    http://vim-scripts.org/vim/scripts.html

Vim` plugins:

    http://vim-scripts.org/vim/scripts.html

