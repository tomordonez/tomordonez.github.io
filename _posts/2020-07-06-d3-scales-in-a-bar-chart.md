---
layout: post
title: "D3 Scales in a Bar Chart"
description: "Applying D3 Scales scaleBand and scaleLinear in a bar chart."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

Applying D3 Scales scaleBand and scaleLinear in a bar chart.

Follow these to understand the code below:

* [Setup D3 Step by Step](../setup-d3-step-by-step/)
* [D3 Drawing SVG](../d3-drawing-svg/)
* [D3 Creating a Bar Chart](../d3-creating-a-bar-chart/)
* [D3 Using Scales](../d3-using-scales/)
* [D3 Linear Scale](../d3-linear-scale/)
* [D3 Band Scale](../d3-band-scale/)

Here is a summary:

* Set the width and height of the SVG canvas
* Set padding for the canvas
* Create a function to parse CSV dates from string to type date
* Use promises to load the CSV
* Scale the width and height of each rectangle of the bar chart
* Create rectangle elements and append the data to the DOM

## D3 Scales in a Bar Chart


    var w = 500;
    var h = 300;
    var barPadding = 3;
    var padding = 40;
    var svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    var parseTime = d3.timeParse("%Y");

    var rowConverter = function(d) {
        return {
            year: parseTime(d.year),
            population: +d.population
        }
    }

    d3.csv("file.csv", rowConverter).then(function(dataset) {

        xScale = d3.scaleBand()
                   .domain(d3.range(dataset.length))
                   .rangeRound([padding, w])
                   .paddingInner(0.1)
                   .paddingOuter(0.1);

        yScale = d3.scaleLinear()
                   .domain([0, d3.max(dataset, function(d) { return d.population; })])
                   .range([h - padding, padding]);

        svg.selectAll("rect")
           .data(dataset)
           .enter()
           .append("rect")
           .attr("x", function(d, i) {
               return xScale(i);
           })
           .attr("y", function(d) {
               return yScale(d.population);
           })
           .attr("width", xScale.bandwidth())
           .attr("height", function(d) {
               return h - padding - yScale(d.population);
           })
           .attr("fill", "teal");
    });


The result is this bar chart:

<div id="d3-barchart-vis"></div>

The `HTML` is this:

    <svg width="500" height="300">
        <rect x="52" y="205" width="101" height="55" fill="teal"></rect>
        <rect x="164" y="150" width="101" height="110" fill="teal"></rect>
        <rect x="276" y="95" width="101" height="165" fill="teal"></rect>
        <rect x="388" y="40" width="101" height="220" fill="teal"></rect>
    </svg>

You can use `console.log()` to test the output such as in here:

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", function(d, i) {

           console.log("x");
           console.log(d);
           console.log(xScale.domain());
           console.log(xScale.range());
           console.log(xScale.paddingInner());
           console.log(xScale.paddingOuter());
           console.log(xScale.bandwidth());
           console.log(xScale(i));

           return xScale(i);
       })

<script type="text/javascript" src="../assets/js/d3.min.js"></script>
<script type="text/javascript" src="../assets/js/d3-barchart-vis.js"></script>