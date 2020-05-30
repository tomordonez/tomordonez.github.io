---
layout: post
title: "My vimrc config file"
redirect_from:
  - /my-vimrc-config.html
categories: [Linux]
image: assets/images/10.jpg
tags: [linux, vim, vimrc]
---

Relevant articles:

* [Install a plugin in Vim](https://www.tomordonez.com/install-plugin-vim.html)
* [Vim stuck in insert mode](https://www.tomordonez.com/vim-stuck-insert-mode.html)
* [Go to the previous directory in Vim](https://www.tomordonez.com/previous-directory-vim-commands.html)

A short description of my vimrc config file.

Edit with:

    vim ~/.vimrc

I want to see the line number always:

    set number

Show the line number, the column number, and the relative position of the cursor in the file, as a percentage. More details <a href="https://codeyarns.com/2010/11/28/vim-ruler-and-default-ruler-format/" target="_blank">here</a>.

    set ruler

Show the current static always.

    set laststatus=2

I like writing blog posts with lines wrapped at 80 characters without creating a new line.

    set wrap
    set columns=80
    set linebreak

I also have a few Plugins. Read this [tutorial to install a plugin in Vim](https://www.tomordonez.com/install-plugin-vim.html).

* Markdown with correct code highlight
* A better JSON for Vim
* Color schemes

And my favorite: **Autosave in Vim**.

More details:

    set number
    set ruler
    
    " See the current static always
    set laststatus=2
    
    " Wrap at 80 characters, don't create a new line
    set wrap
    set columns=80
    set linebreak " breaks by word instead of character
    
    set nocompatible
    filetype off
    set rtp+=~/.vim/bundle/Vundle.vim
    call vundle#begin()
    
    " let Vundle manage Vundle, required
    Plugin 'VundleVim/Vundle.vim'
    
    " Plugins
    " To install plugins launch vim and :PluginInstall
    " To list plugins launch vim and :PluginList
    Plugin 'godlygeek/tabular'
    
    " Markdown with correct code highlight
    " and spell check disabled as seen on:
    " https://github.com/gabrielelana/vim-markdown/issues/49
    au FileType markdown setlocal nospell
    Plugin 'gabrielelana/vim-markdown'
    
    " A better JSON for Vim as seen on:
    " https://github.com/elzr/vim-json
    Plugin 'elzr/vim-json'
    
    " Color schemes
    Plugin 'tomasr/molokai'
    Plugin 'flazz/vim-colorschemes'
    
    " Autosave
    Plugin '907th/vim-auto-save'
    let g:auto_save = 1
    let g:auto_save_in_insert_mode = 0
    
    call vundle#end()
    filetype plugin indent on
    " To ignore plugin indent changes, instead use:
    " filetype plugin on