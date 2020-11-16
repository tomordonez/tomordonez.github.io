---
layout: post
title: "D3 Convert String to Date"
description: "In D3 convert a string to date format after loading a CSV file."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

In D3 convert a string to date format after loading a CSV file.

When loading a `CSV` file in D3, the data is parsed as strings. [D3 Load a CSV file with Promises](../d3-load-a-csv-file-with-promises/)

If this is the data contained in the CSV:

    year,population
    1950,5
    1951,10
    1955,15
    1959,20

It will parse the years as strings and the population as strings. You need to convert these strings to the correct type in D3.

* `year`: From `string` to `date` format.
* `population`: From `string` to `integer` format.

## Convert string to date in D3

You can use this syntax and see the resources for more details:

    var parseTime = d3.timeParse("%Y");
    var formatTime = d3.timeFormat(specifier);

More details here:

* `%Y`: Parse year in decimal number such as `2020`.
* `specifier`: More details [here](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#locale_format)
* [d3.timeParse](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#timeParse)
* [d3.timeFormat](https://github.com/d3/d3-time-format/blob/v2.2.3/README.md#timeFormat)

Add this code to a `project.js` file. See [Setup D3 Step by Step](../setup-d3-step-by-step/):

    var parseTime = d3.timeParse("%Y");

Pass a function as a parameter when loading the `CSV`. First we need to create the function.

## A function to parse every row of the CSV file

This function is passed as a parameter of the `d3.csv` method. It takes every row as `d`. It parses the `year` from `parseTime(d.year)` and for `population`, it uses the `+` operator to force the string to numbers on `+d.population`. 

    var parseTime = d3.timeParse("%Y");

    var rowConverter = function(d) {
        return {
            year: parseTime(d.year),
            population: +d.population
        };
    }

Clear the console and reload the browser. See if there are any errors in the console or in the Python server.

## Loading a CSV file with rowConverter

Load the `csv` file and use `rowConverter`:

    d3.csv("file.csv", rowConverter).then(function(dataset) {
        console.log(dataset);
    });

Add this to `project.js` and reload the browser:


    var parseTime = d3.timeParse("%Y");

    var rowConverter = function(d) {
        return {
            year: parseTime(d.year),
            population: +d.population
        };
    }

    d3.csv("file.csv", rowConverter).then(function(dataset) {
        console.log(dataset);
    });

This is what the code does:

* It opens `file.csv` and passes the function `rowConverter` as a parameter. 
* It takes every row using the variable `d` of `file.csv`.
* Parses the `year` from a `string` to a `parseTime(d.year)` format.
* Parses the `population` from a `string` to an integer using the `+` operator `+d.population`.
* Then print the values in the console.

The console shows:

    (4) [{…}, {…}, {…}, {…}, columns: Array(2)]
        0: {year: Sun Jan 01 1950 00:00:00 GMT-0500 (Eastern Standard Time), population: 5}
        1: {year: Mon Jan 01 1951 00:00:00 GMT-0500 (Eastern Standard Time), population: 10}
        2: {year: Sat Jan 01 1955 00:00:00 GMT-0500 (Eastern Standard Time), population: 15}
        3: {year: Thu Jan 01 1959 00:00:00 GMT-0500 (Eastern Standard Time), population: 20}
        columns: (2) ["year", "population"]
        length: 4
        __proto__: Array(0)

Next: [D3 Bind data to DOM](../d3-bind-data-to-dom/)