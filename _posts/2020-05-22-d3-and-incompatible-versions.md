---
layout: post
title: "D3 and Incompatible Versions"
description: "Different versions of D3 don't play along well."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

Different versions of D3 don't play along well. If you are following a book or tutorials, make sure to check which version of D3 is used or some things won't work as expected.

Here is an example of loading a CSV file.

## D3 and Incompatible Versions/Syntax

Loading a CSV file in D3 changes with different versions of `D3` and this incompatibility is very confusing.

As shown in [this](http://datawanderings.com/2018/08/15/d3-js-v5-promise-syntax-examples/) blog post about `promises` syntax. There are differences in D3 loading a `CSV` in `D3.v4` and `D3.v5`.

For `D3.v4` you can use this syntax:

    d3.csv("file.csv", function(data) {
        somethingHappens(data);
        console.log(data);
    });


Create these files as shown in [Setup D3 Step by Step](../setup-d3-step-by-step/):

* `index.html`
* `main.css`
* `project.js`

Create a CSV file called `file.csv` that has `year` and `population` as shown:

    year,population
    1950,5
    1951,10
    1955,15
    1959,20

The `index.html` is using this source `https://d3js.org/d3.v5.min.js`.

Add this code to `project.js`:


    d3.csv("file.csv", function(data) {
        console.log(data);
    });


Reload the browser and look at the console:

    Navigated to http://127.0.0.1:8888/index.html
    project.js:2 {year: "1950", population: "5"}
    project.js:2 {year: "1951", population: "10"}
    project.js:2 {year: "1955", population: "15"}
    project.js:2 {year: "1959", population: "20"}


This works so far and we are using the source for `D3.v5` instead of `v4`.

Clear the console with `Ctrl + L` or type `clear()` (this won't clear if you set `Preserve log`).

This syntax from D3 `v4` won't work on `v5` as shown on [D3 API docs](https://github.com/d3/d3-fetch/blob/v1.1.2/README.md#csv). Actually this documentation is pretty confusing as it doesn't specify which D3 version is used in the examples:

    d3.csv("file.csv", function(data) {

    }).then(function(data) {
      console.log(data);
    });


The data is not loaded and the console shows this:

    Navigated to http://127.0.0.1:8888/index.html
    [columns: Array(2)]
     columns: Array(2)
         0: "year"
         1: "population"
         length: 2
         __proto__: Array(0)
         ...
         ...

This doesn't work either:

    var mydata = d3.csv("file.csv", function(data) {
    });

First it returns `undefined`. Then calling the variable:

    mydata

Shows this:

    Promise {<resolved>: Array(0)}
    __proto__: Promise
    [[PromiseStatus]]: "resolved"
    [[PromiseValue]]: Array(0)
    columns: (2) ["year", "population"]
    length: 0
    __proto__: Array(0)

Make sure to check which version of D3 is used since errors will drive you crazy. More about `promises` in [D3 Load a CSV file with Promises](../d3-load-a-csv-file-with-promises/)