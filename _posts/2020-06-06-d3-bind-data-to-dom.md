---
layout: post
title: "D3 Bind data to DOM"
description: "Load a CSV in D3 and bind the data to elements in the DOM"
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

Load a CSV in D3 and bind the data to elements in the DOM.

## Steps to bind data to DOM in D3:

* Select `HTML` elements with `.select()`
* Add the data with `.data()`
* Bind the data to elements with `.enter()`
* Append elements to the DOM with `.append()`


More about `rowConverter` in [D3 Convert String to Date](../d3-convert-string-to-date/)

    d3.csv("file.csv", rowConverter).then(function(dataset) {

        d3.select("body").selectAll("p")
        .data(dataset)
        .enter()
        .append("p");
    });

Loading the CSV uses `then` syntax. More on [D3 Load a CSV file with Promises](../d3-load-a-csv-file-with-promises/)

This is how binding data to DOM works:

* It selects the element `body`.
* Then it selects all `p` elements. However, no `p` elements exist yet.
* Use the attribute `.data` to read `dataset`.
* Use `.enter()` to bind the `dataset` values with `p` elements
* Use `.append("p")` to append the `p` elements to the DOM.

Run the D3 server in Python as seen in [Setup D3 Step by Step](../setup-d3-step-by-step/)

Go to the `Elements` tab to see the `HTML` code. The `body` section has this now:

    <body>
        <script type="text/javascript" src="project.js"></script>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </body>

It created four `p` tags. In the console type `d3.selectAll("p");`:

    Pt {_groups: Array(1), _parents: Array(1)}
    _groups: [NodeList(4)]
    _parents: [html]
    __proto__: Object

Expand `groups`

    _groups: Array(1)
    0: NodeList(4) [p, p, p, p]
    length: 1

Expand `NodeList`

    0: NodeList(4)
        0: p
        1: p
        2: p
        3: p

Expand the first `0: p`. It's pretty long, scroll down to the bottom:

    __data__: {year: Sun Jan 01 1950 00:00:00 GMT-0500 (Eastern Standard Time), population: 5}
    __proto__: HTMLParagraphElement

Expand `data`:

    __data__:
    population: 5
    year: Sun Jan 01 1950 00:00:00 GMT-0500 (Eastern Standard Time) {}

Next: [D3 Drawing SVG](../d3-drawing-svg/)