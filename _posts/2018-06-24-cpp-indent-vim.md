---
layout: post
title: "Cpp Indent Vim"
redirect_from:
  - /cpp-indent-vim.html
categories: [Code]
image: assets/images/9.jpg
tags: [c++, vim]
---

Given `.vimrc`:

    filetype plugin indent on

To indent C++ files in Vim. Create this directory:

    ~/.vim/after/ftplugin/

Inside that directory create the file:

    ~/.vim/after/ftplugin/cpp.vim

Add the lines:

    set expandtab
    set shiftwidth=2
    set softtabstop=2

That's using 2 spaces for indentation like they do it at Google.

When you create a file:

    vim awesome.cpp

It will indent to 2 spaces:

    #include <iostream>
    using namespace std;

    int main()
    {
      cout << "2 spaces" << endl;
      return 0;
    }