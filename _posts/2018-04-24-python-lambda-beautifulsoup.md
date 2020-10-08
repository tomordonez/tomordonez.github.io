---
layout: post
title: "Python Lambda and BeautifulSoup"
redirect_from:
  - /python-lambda-beautifulsoup.html
categories: [Code]
image: assets/images/9.jpg
tags: [python, lambda, beautifulsoup]
---

This Python Lambda is a very weird concept. I almost grok it.

I was trying to parse HTML comments using BeautifulSoup.

After a quick Google search I found this solution:

    commments = soup.find_all(text=lambda text:isinstance(text, Comment))

Say what?

You lost me at `lambda`.

## Here is an easier lambda example.

    def sum(x, y):
        return x + y

This is easy right? Just a simple function that takes `x` and `y` and returns the `sum`.

What if one day you say "I bet there is a one-liner for this".

And I am not talking about this:

    def sum(x, y): return x + y

I am talking about some mutant Python code skill that when you write it everybody in the room just faints.

## Python Lambda

    sum = lambda x,y: x + y

Did you see that?

From this:

    def sum(x, y):
        return x + y

To this:

    sum = lambda x,y: x + y

I read it like this:

"Invoke the powers of Lambda and take the parameters `x` and `y`. Add them together and return the value. Assign the value to `sum`".



## Python Lambda Details

A Lambda function is an anonymous function. A function defined without a name.

Your usual function is defined with `def`. While anonymous functions are defined with `lambda`.

The syntax of the lambda function is:

    lambda arguments: expression

* Any number of arguments
* One expression to rule them all
* The expression needs to return a value

## Calling Lambda Helloooo Lambda

This works:

    >>> lambda1 = lambda x: x**2
    >>> lambda1(3)
    9

## Lambda, BeautifulSoup and HTML Comments

This is where I was tripping a bit.

Given a `soup` object.

And an `HTML` such as:

    <!-- Python is awesome -->
    <!-- Lambda is confusing -->
    <!-- name="Homer Simpson" -->
    <title>I am grook</title>
    <h1>Homer groks Lambda</h1>
    <p>Lolcats</p>
    <a href="https://www.tomordonez.com">I grok Lambda too</a>
    <a href="https://twitter.com/tomordonez">I grok Twitter</a>

I wanted to extract the text from the `HTML` comments.

`BeautifulSoup` has a module called `Comment` that is used for this.

    from bs4 import Comment

The solution from StackOverflow says that to extract the comments to a list. You need `lambda` and the `isinstance` function.

    comments = soup.find_all(text=lambda text: isinstance(text, Comment))

## BeautifulSoup and Lambda

Keep as reference the short `HTML` example above.

The "find all HTML comments code" starts with `find_all`.

Some people keep using `findAll` too. But the new syntax is `find_all` to comply with `PEP8`. Using `underscores` and not `camelCase`.

In `BeautifulSoup`, the `find_all` method, searches for all `tags` in the `soup` object.

## Using `find_all()`

    >>> soup.find_all('a')
    [<a href="https://www.tomordonez.com">I grok Lambda too</a>,
    <a href="https://twitter.com/tomordonez">I grok Twitter</a>]

Will search for all `a` anchor tags and return a `list` of `tag` objects.

## Using `find`

    >>> soup.find('a')
    <a href="https://www.tomordonez.com">I grok Lambda too</a>

Will only search for one `a` anchor tag and return a `tag` object.

    <class 'bs4.element.Tag'>

The default search method of a `soup` object is `find_all` so you can also do this:

    >>> soup('a')
    [<a href="https://www.tomordonez.com">I grok Lambda too</a>,
    <a href="https://twitter.com/tomordonez">I grok Twitter</a>]

This will also return a `list` of `a` tags.

I guess the difference of using `find_all` and `find` is about returning a list of results or returning just one result.

In an `HTML` document there is only one `title` tag.

Why would you use `find_all`? You wouldn't.

    >>> soup.find('title')
    <title>I am grook</title>

If you use this:

    >>> soup('title')

It will default to using `find_all`.

## Anchor Tags and Attributes

In `BeautifulSoup` the attributes of an anchor tag can be accessed as a `dictionary`.

Using `find` will only return the 1st value it finds.:

    >>> anchor = soup.find('a')
    >>> anchor
    <a href="https://www.tomordonez.com">I grok Lambda too</a>

To get the `string` from `href`:

    >>> anchor['href']
    https://www.tomordonez.com

The attributes of the anchor tag are defined as a dictionary such as:

    {'href': 'https://www.tomordonez.com'}

Which means that you can find a specific tag that has attributes such as:

    soup.find('tag_name', attrs={'key': 'value'})

## Anchor Tags and Strings

By default `find_all` and `find` are looking for `HTML` tags.

What about `strings` such as:

    I grok Lambda too

Which is inside of:

    <a href="https://www.tomordonez.com">I grok Lambda too</a>

You can use the `string` argument.

In a previous version of `BeautifulSoup` it was called `text`. They changed it to `string`.

You could do this:

    >>> soup.find(string='I grok Lambda too')
    "I grok Lambda too"

For this example:

    <title>I am grook</title>

You can do this. Which uses `find` to search for the tag `title`:

    >>> soup.find('title').string
    "I am grook"

Or this also works. Which uses the argument `string` to search for strings instead of tags:

    >>> soup.find(string="I am grook")
    "I am grook"

## Weird Lambda code

Let's review that lambda code again to find `HTML` comments:

    comments = soup.find_all(text=lambda text: isinstance(text, Comment))

First of all `text=` is not used anymore. You should use `string=`.

Let's change that:

    comments = soup.find_all(string=lambda text: isinstance(text, Comment))

Now, `text` is just a variable. Which in this case is not a really good name. We are not looking for any text, we are looking for `HTML` comments. Let's change that:

    comments = soup.find_all(string=lambda html_comment: isinstance(html_comment, Comment))

## What is `Comment`?

`BeautifulSoup` has a module called `Comment` that helps you find `HTML` comments.

    from bs4 import Comment


## What is `isinstance`?

`isinstance` is a Python built-in function.

The syntax is:

    isinstance(object, classinfo)

It returns `True` if the object argument is an `instance` of the `classinfo` argument.

And you could test it like this:

    >>> isinstance('Homer', str)
    True
    >>> isinstance('Homer', int)
    False

Which means that this:

    isinstance(html_comment, Comment)

Returns `True` or `False`...

"Is `html_comment` an `instance` of the `Comment` object?"

The result will be either `True` or `False`.

## Lambda function

    lambda html_comment: isinstance(html_comment, Comment)

This is the same as doing this:

    def comments(html_comment):
        isinstance(html_comment, Comment)

Putting this together:

    soup.find_all(string=lambda html_comment: isinstance(html_comment, Comment))

This reads as:

* `find_all` strings
* Pass the `string` as an argument of the `lambda` function.
* The `string` uses the argument `html_comment`.
* `isinstance` says "Is `html_comment` an instance of `Comment`?"
* If it is then return that `string`.

## Finding HTML Comments in BeautifulSoup

To summarize.

Given this:

    from bs4 import BeautifulSoup, Comment

    html = '''
    <!-- Python is awesome -->
    <!-- Lambda is confusing -->
    <!-- name="Homer Simpson" -->
    <title>I am grook</title>
    <h1>Homer groks Lambda</h1>
    <p>Lolcats</p>
    <a href="https://www.tomordonez.com">I grok Lambda too</a>
    <a href="https://twitter.com/tomordonez">I grok Twitter</a>
    '''

We create a soup object:

    soup = BeautifulSoup(html, 'html.parser')

Using `find_all`, which is the default search method for `soup`:

    >>> soup.find_all('title')
    [<title>I am grook</title>]

Keep in mind that `find_all` will always return a `list` of tag objects.

And it's the same as using this:

    >>> soup('title')
    [<title>I am grook</title>]

Getting the string out of `title`. Remember that right now we have a `list` with one element.

If you do this. It won't work:

    >>> soup('title').string
    Traceback...
    ...
    Did you call find_all() when you
    meant to call find()?

This works:

    >>> soup('title')[0].string
    'I am grook'

But it's weird right?

If there is only one `title` on the `HTML` then just use `find`:

    >>> soup.find('title')
    <title>I am grook</title>

This doesn't return a `list`. But only searches for the 1st result it finds.

This is the same as using this:

    >>> soup.title
    <title>I am grook</title>

To get the `string`. These two do the same:

    >>> soup.find('title').string
    >>> soup.title.string

It will give you:

    'I am grook'

## To `find` or to `find_all`. That's the question

The shorthand of `find_all` is:

    >>> soup('title')

The shorthand of `find` is:

    >>> soup.title

It's easy to get confused by this optimization.

It's better to just use the name of the method.

## Finding attributes

The methods `find_all` and `find` search for tags.

Attributes can be accessed as dictionaries.

Given:

    <a href="https://twitter.com/tomordonez">I grok Twitter</a>
    <a href="https://www.tomordonez.com" name="Awesome">I grok Lambda too</a>

For the second `a` anchor, the attributes dictionary is:

    {'href': 'https://www.tomordonez.com', 'name': 'Awesome'}

Find an anchor tag with a specific attribute:

    >>> soup.find('a', attrs={'name': 'Awesome'})
    <a href="https://www.tomordonez.com" name="Awesome">I grok Lambda too</a>

Then to access the `href` you could do this:

    >>> anchor_tag = soup.find('a', attrs={'name': 'Awesome'})
    >>> anchor_tag
    <a href="https://www.tomordonez.com" name="Awesome">I grok Lambda too</a>

    >>> anchor['href']
    'https://www.tomordonez.com'

Or all in one:

    >>> soup.find('a', attrs={'name': 'Awesome'})['href']

## Finding Strings

Use the `string` argument:

    >>> soup.find(string="I grok Lambda")
    'I grok Lambda'

If you do this. It won't work:

    >>> soup.find(string="I ")

But you can use a regular expression:

    >>> soup.find(string = re.compile(r'^I'))
    'I grok Lambda'

You can also pass a function to the `string` argument

## Passing a Lambda function to the string argument

Given:

    <!-- Python is awesome -->
    <!-- Lambda is confusing -->
    <!-- name="Homer Simpson" -->

To get only the 1st comment you can use `find`:

    >>> soup.find(string = lambda html_comment: isinstance(html_comment, Comment))
    ' Python is awesome '

To get a `list` of comments then use `find_all`:

    >>> soup.find_all(string = lambda html_comment: isinstance(html_comment, Comment))
    [' Python is awesome ', ' Lambda is confusing ', ' name="Homer Simpson"']

But keep in mind in this case the `HTML` comments have leading and trailing whitespace. You can just use the `strip()` method.