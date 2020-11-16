---
layout: post
title: "D3 Responsive Visualization"
description: "How to make a D3 visualization responsive."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

How to make a D3 visualization responsive.

Follow this [Setup D3 Step by Step](../setup-d3-step-by-step/) and [D3 Scales in a Bar Chart](../d3-scales-in-a-bar-chart/) to set the examples below.

Add`<div id="d3-barchart-vis"></div>` to `index.html`:

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>D3 Canvas</title>
            <link rel="icon" type="image/png" href="icon.png">
            <script type="text/javascript" src="assets/js/d3.min.js"></script>
            <link rel="stylesheet" type="text/css" href="main.css">
        </head>
        <body>
            <div id="d3-barchart-vis"></div>
            <script type="text/javascript" src="project.js"></script>
        </body>
    </html>


The `project.js` needs to be modified when creating the `svg`. It has to select `div id="d3-barchart-vis"`.

It needs to use `preserveAspectRatio` and `viewBox` for responsive. The `viewBox` follows this syntax `"min-x min-y width height"`. I concatenated the numbers and the spaces:

    var svg = d3.select("#d3-barchart-vis")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 " + w + " " + h);


The code for `project.js` looks like this:

    var w = 500;
    var h = 300;
    var barPadding = 3;
    var padding = 40;
    var svg = d3.select("#d3-barchart-vis")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 " + w + " " + h);

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

<script type="text/javascript" src="../assets/js/d3.min.js"></script>
<script type="text/javascript" src="../assets/js/d3-barchart-vis.js"></script>