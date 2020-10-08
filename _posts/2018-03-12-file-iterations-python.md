---
layout: post
title: "File Iterations in Python"
redirect_from:
  - /file-iterations-python.html
categories: [Code]
image: assets/images/1.jpg
tags: [python]
---

This is a short explanation on how file iterations work in Python.

Given a file `input.txt` that has content such as:

    Content-Type: text/plain; charset=UTF-8
    X-DSPAM-Result: Innocent
    X-DSPAM-Processed: Fri Jan  4 14:50:18 2017
    X-DSPAM-Confidence: 0.7556
    X-DSPAM-Probability: 0.0000

I wanted to check in the Python shell if a substring exists in a string like this:

    >>> fhandle = open('input.txt', 'r')
    >>> for line in fhandle:
    >>>    if 'DSPAM' in line:
    >>>        print(line)

The output is:

    X-DSPAM-Result: Innocent
    X-DSPAM-Processed: Fri Jan  4 14:50:18 2017
    X-DSPAM-Confidence: 0.7556
    X-DSPAM-Probability: 0.0000

If I run the for loop again in the same shell session. It doesn't return any output. It just goes back to the prompt `>>>`

I wanted to know why this happened.

My question on <a href="https://stackoverflow.com/questions/49235235/in-python-shell-checking-a-substring-in-string-using-a-for-loop-shows-a-differen" target="_blank">StackOverflow</a>, has an answer that says:

> File objects can only be iterated once unless you seek back to the beginning.

It was also marked as a duplicate question to <a href="https://stackoverflow.com/questions/10255273/iterating-on-a-file-using-python" target="_blank">this one</a>.

## File iterations in Python

Here is an answer from the duplicate question:

> The first time you read to the end of the file. You can't read it anymore unless you reset it.

To "reset it" you can do:

* Exit and start the shell again.
* Use `fhandle.seek(0)` to reposition to the start of the file.
* Close and open the file again.
* Use `with open() as`

None of these solutions have a real benefit in the Python shell.

The best thing to do is just to:

    >>> fhandle.close()

These are still good solutions to "reset" the iteration on the file:

## Use `fhandle.seek(0)`

Although this doesn't seem much different than `fhandle.close()`. Not sure which one uses less memory.

## `with open as` syntax

This syntax opens and closes the file for you:

    with open('input.txt', 'r') as fhandle:
        for line in fhandle:
            if 'SPAM' in line:
                print(line)

