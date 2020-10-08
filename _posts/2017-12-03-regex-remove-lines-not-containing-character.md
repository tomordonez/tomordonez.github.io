---
layout: post
title: "Regex Remove Lines Not Containing a Character"
redirect_from:
  - /regex-remove-lines-not-containing-character.html
categories: [Code]
image: assets/images/10.jpg
tags: [regex]
---

Use this regex pattern to remove lines not containing a character.

I want to remove lines that don't contain a space.
    
    ^(?!.* .*).+$

Or remove lines that don't contain numbers.
    
    ^(?!.*[0-9].*).+$

Or remove lines that don't contain UPPER CASE.
    
    ^(?!.*[A-Z].*).+$

Or remove lines that don't contain letters
    
    ^(?!.*[A-Za-z].*).+$

Or remove lines that don't contain an email
    
    ^(?!.*@.*).+$

