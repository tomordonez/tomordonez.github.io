---
layout: post
title: "Python Self"
redirect_from:
  - /python-self.html
categories: [Code]
image: assets/images/11.jpg
tags: [python, self]
---

Understanding **Python self**.

This answer from <a href="https://stackoverflow.com/a/21366809" target="_blank">StackOverflow</a> helped me understand this concept a bit better.

## The Simpsons, Self and Python

If you have a `class` called `list` with a method called `append`.

    >>> simpsons = list()
    >>> simpsons.append('homer')
    >>> simpsons
    ['homer']

The method is defined as this:

    def append(self, arg1, arg2):
        # do something

The `simpsons` object is an instance of the class `list`.

As the solution says, but using my example:

When `simpsons.append('homer')` is called, Python internally converts this to:

    list.append(simpsons, 'homer')

If I run this again with another argument:

    >>> list.append(simpsons, 'bart')
    >>> simpsons
    ['homer', 'bart']

Which means that these 2 do the same:

    >>> simpsons.append('bart')
    >>> list.append(simpsons, 'bart')

Looking at this again:

    def append(self, arg1)

The `self` variable refers to the object.

## Rock bands, Self and Python

This is another good answer about `self` and Python in <a href="https://www.quora.com/What-does-self-mean-in-python-class-Why-do-we-need-it" target="_blank">Quora</a>.

The first few paragraphs create a good context for understanding `self`.

* A class has methods
* A class can have multiple objects

Here is an interesting question.

"When an object calls a method of the class, how would the method know which object has called it?"

    class myBand:
        def __init__(self):
            self.instruments = []
            self.instruments.append('drums')

        def append(self):
            awesome append code

    muse = myBand()
    muse.append('bass')  # prints ['drums', 'bass']

    radiohead = myBand()
    radiohead.append('moog') # prints ['drums', 'moog']

Following the same example as the Simpsons

    >>> muse.append('bass')
    >>> myBand.append(muse, 'bass')
    >>> myBand.append(self, arg1)