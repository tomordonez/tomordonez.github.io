---
layout: post
title: "D3 and Asynchronous"
description: "D3 and JavaScript run asynchronous. You have to grok anonymous callback functions."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

D3 and JavaScript run asynchronous. You have to grok anonymous callback functions.


## D3 and Asynchronous

JavaScript runs asynchronous. Here is a good explanation on [StackOverflow](https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call).

The answer provides a great analogy for synchronous and asynchronous.

Synchronous is like making a phone call to tech support to fix your Internet. While they figure out the problem, you wait on the call, until the problem is solved then you end the call.

Asynchronous is making the same phone call. Instead of waiting on the call you ask them to call you back when they fix the problem. You end the call, go about your day, then wait for them to call back.

Asynchronous on an app means if you are loading a page, it will load the `html`, the `css`, the `js`. If there is a feature that is not working, only that feature won't load. If you change the data on a feature, then you won't have to reload the page, the feature changes as you interact with the features.


## D3 and Anonymous functions

If you know Python, this is like a `lambda` function.

This is what loading a `CSV` in `D3 v4` looks like. You can also load a file with `promises` as shown in [D3 Load a CSV file with Promises](../d3-load-a-csv-file-with-promises/).:


    d3.csv("file.csv", function(data) {
        somethingHappens(data);
    });
    console.log(data);


This is an anonymous callback function `function(data)`. It runs the code inside the curly braces and then it is called back to this function. More about [D3 and Incompatible Versions](../d3-and-incompatible-versions/)

The script will continue and execute `console.log(data)`, regardless if the data was not completely loaded. Then the console won't display any data.

You could hack this code and put some sort of timer but how much time do you pass to that function?


    d3.csv("file.csv", function(data) {
        somethingHappens(data);
    });

    someSortOfTimer(60);
    console.log(data);


Instead, within the callback function, write all the code that uses the `data` that is loaded:


    d3.csv("file.csv", function(data) {
        somethingHappens(data);
        console.log(data);
    });

Here is how to [Setup D3 Step by Step](../setup-d3-step-by-step/)