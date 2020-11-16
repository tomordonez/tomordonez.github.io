---
layout: post
title: "D3 Load a CSV file with Promises"
description: "Loading a CSV file in D3 with Promises. Also load CSV, JSON, DSV, and TSV files in D3."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

Loading a CSV file in D3 with Promises. Also load CSV, JSON, DSV, and TSV files in D3.

More about [D3 and Incompatible Versions](../d3-and-incompatible-versions/).

D3 version 5 uses a feature called `Promises`. Use this syntax:

    d3.csv("file.csv").then(function(dataset) {
        console.log(dataset);
    });

The console shows this:

    Promise {<pending>}

    (4) [{…}, {…}, {…}, {…}, columns: Array(2)]
        0: {year: "1950", population: "5"}
        1: {year: "1951", population: "10"}
        2: {year: "1955", population: "15"}
        3: {year: "1959", population: "20"}
        columns: (2) ["year", "population"]
        length: 4
        __proto__: Array(0)

Or use this syntax, it shows the same console output:

    var mydata = d3.csv("file.csv")

    mydata.then(function(dataset) {
        console.log(dataset);
    });

Or you can load multiple datasets in D3 and Promises like this:

    var data1 = d3.csv("file1.csv")
    var data2 = d3.csv("file2.csv")

    Promise.all([data1, data2]).then(someFunction)

    function someFunction(values) {
        somethingFunHere(values);
    }


More about **D3 Promises** in the [Observable blog](https://observablehq.com/@observablehq/introduction-to-promises) and [this](https://datawanderings.com/2018/08/15/d3-js-v5-promise-syntax-examples/) blog post.


## Loading data with CSV, DSV, TSV or JSON

There are a few methods to load data in D3:

* `d3.dsv` this means `delimiter separated values`
* `d3.csv`
* `d3.tsv`
* `d3.json`

You can use `d3.dsv` like this and explicitly define the separator:

    d3.dsv(",", "file.csv").then(function(dataset) {
        console.log(dataset);
    });


Console shows:

    Promise {<pending>}
    
    (4) [{…}, {…}, {…}, {…}, columns: Array(2)]
        0: {year: "1950", population: "5"}
        1: {year: "1951", population: "10"}
        2: {year: "1955", population: "15"}
        3: {year: "1959", population: "20"}
        columns: (2) ["year", "population"]
        length: 4
        __proto__: Array(0)


Or use `d3.csv` as I have shown before:

    d3.csv("file.csv").then(function(dataset) {
        console.log(dataset);
    });


Or use `d3.json` like this. Let's create a `data.json` and add this:

    [
      {
        "year": 1950,
        "population": 5
      },
      {
        "year": 1951,
        "population": 10
      },
      {
        "year": 1955,
        "population": 15
      },
      {
        "year": 1959,
        "population": 20
      }
    ]


Then load the data:

    d3.json("data.json").then(function(dataset) {
        console.log(dataset);
    });


Console shows the same output:

    Promise {<pending>}

    (4) [{…}, {…}, {…}, {…}]
        0: {year: 1950, population: 5}
        1: {year: 1951, population: 10}
        2: {year: 1955, population: 15}
        3: {year: 1959, population: 20}
        length: 4
        __proto__: Array(0)

Next: [D3 Creating a Bar Chart](../d3-creating-a-bar-chart/)