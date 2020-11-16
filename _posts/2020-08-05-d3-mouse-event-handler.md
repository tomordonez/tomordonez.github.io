---
layout: post
title: "D3 Mouse Event Handler"
description: "Using mouse event handlers in D3"
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

Using mouse event handlers in D3.

## More about D3 Bar Charts

* [D3 Creating a Bar Chart](../d3-creating-a-bar-chart/)
* [D3 Scales in a Bar Chart](../d3-scales-in-a-bar-chart/)
* [D3 Adding Axes to Bar Chart](../d3-adding-axes-to-bar-chart/)
* [D3 Bar Chart Title and Labels](../d3-bar-chart-title-and-labels/)

I want the barchart to change colors when you mouse over a bin to highlight what you are pointing at.

Add two functions here:

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", d => xScale(d.year.getFullYear()))
       .attr("y", d => yScale(d.population))
       .attr("width", xScale.bandwidth())
       .attr("height", d => h - padding - yScale(d.population))
       .attr("fill", "teal")
       .on("mouseover", handleMouseOver)
       .on("mouseout", handleMouseOut);

Then add the functions to process each interaction at the end, before the closing of `d3.csv`:

    function handleMouseOver(d, i) {
        d3.select(this)
          .attr("fill", "red");
    }

    function handleMouseOut(d, i) {
        d3.select(this)
          .attr("fill", "teal");
    }

The barchart with mouse event handler looks like this:

<div id="d3-barchart-vis-final"></div>

<details>
    <summary>Click to see updated code</summary>
    <pre>

    var margin = {top: 20, right: 20, bottom: 20, left: 20},
            w = 500 - margin.left - margin.right,
            h = 300 - margin.top - margin.bottom;

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
                   .domain(dataset.map(d => d.year.getFullYear()))
                   .rangeRound([padding, w])
                   .paddingInner(0.1)
                   .paddingOuter(0.1);

        yScale = d3.scaleLinear()
                   .domain([0, d3.max(dataset, d => d.population)])
                   .range([h - padding, padding]);

        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale);

        svg.selectAll("rect")
           .data(dataset)
           .enter()
           .append("rect")
           .attr("x", d => xScale(d.year.getFullYear()))
           .attr("y", d => yScale(d.population))
           .attr("width", xScale.bandwidth())
           .attr("height", d => h - padding - yScale(d.population))
           .attr("fill", "teal")
           .on("mouseover", handleMouseOver)
           .on("mouseout", handleMouseOut);

        // Add the x Axis
        svg.append("g")
           .attr("class", "x axis")
           .attr("transform", "translate(0," + (h - padding) + ")")
           .call(xAxis);

        // Label for x Axis
        svg.append("text")
           .attr("transform", "translate(" + (w/2) + " ," + (h-10) + ")")
           .style("text-anchor", "middle")
           .style("font-size", "12px")
           .text("Year");

        // Add the y Axis
        svg.append("g")
           .attr("class", "y axis")
           .attr("transform", "translate(" + padding + ",0)")
           .call(yAxis);

        // Label for y Axis
        svg.append("text")
           .attr("transform", "rotate(-90)")
           .attr("x", -(h/2))
           .attr("y", 10)
           .style("text-anchor", "middle")
           .style("font-size", "12px")
           .text("Population");

        svg.append("text")
           .attr("x", w/2)
           .attr("y", padding)
           .attr("text-anchor", "middle")
           .style("font-size", "16px")
           .text("Awesome Barchart");

        function handleMouseOver(d, i) {
            d3.select(this)
              .attr("fill", "red");
        }

        function handleMouseOut(d, i) {
            d3.select(this)
              .attr("fill", "teal");
        }
    });
    </pre>

</details>

<script type="text/javascript" src="../assets/js/d3.min.js"></script>
<script type="text/javascript" src="../assets/js/d3-barchart-vis-final.js"></script>