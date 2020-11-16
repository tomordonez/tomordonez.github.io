---
layout: post
title: "D3 Bar Chart Title and Labels"
description: "Add a title and labels to a bar chart in D3."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

Add a title and labels to a bar chart in D3.

## D3 Bar Chart Title

Use `append("text")` to append a title to the graph:

    svg.append("text")
       .attr("x", w/2)
       .attr("y", padding)
       .attr("text-anchor", "middle")
       .style("font-size", "16px")
       .text("Awesome Barchart");

Follow:

* [D3 Creating a Bar Chart](../d3-creating-a-bar-chart/)
* [D3 Scales in a Bar Chart](../d3-scales-in-a-bar-chart/)

## Add a label for the x Axis

A label can be added to the x Axis by appending a `text` and using the `transform` and `translate` to position the text.

The function `translate` uses a string concatenation to get to `translate(w/2, h-10)` which is calculated to `translate(500/2, 300-10)` or `translate(250, 290)`. Where `x` is in the middle of the SVG and `y` is `10px` from the bottom (or `290px` from the top).

    svg.append("text")
       .attr("transform", "translate(" + (w/2) + " ," + (h-10) + ")")
       .style("text-anchor", "middle")
       .text("Year");


## Add a label for the y Axis

The label for the y Axis is a bit different. First we need to rotate the label vertically with a negative `-90` degrees. Then the point of reference for `(0,0)` changes. If I am not mistaken it's now on the top right relative to the rotated text.

To center the text vertically. Move it half way to the left at an `x` distance of `-(h/2)`. The `y` is set relative to the rotated position. If you move it down (to the right) it will be a positive number (towards the y Axis). If you move it up (to the left) it will be a negative number (away from the y Axis).

    svg.append("text")
       .attr("transform", "rotate(-90)")
       .attr("x", -(h/2))
       .attr("y", 15)
       .style("text-anchor", "middle")
       .text("Population");

The barchart looks like this:

![D3 barchart with Axes and Labels]({{ site.baseurl }}/assets/images/d3-rect5.jpg)

<details>
    <summary>Click to see updated code</summary>
    <pre>
        
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

        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale);

        svg.selectAll("rect")
           .data(dataset)
           .enter()
           .append("rect")
           .attr("x", function(d, i) {
               return xScale(i);
           })
           .attr("y", d => yScale(d.population))
           .attr("width", xScale.bandwidth())
           .attr("height", d => h - padding - yScale(d.population))
           .attr("fill", "teal");

        // Add the x Axis
        svg.append("g")
           .attr("class", "x axis")
           .attr("transform", "translate(0," + (h - padding) + ")")
           .call(xAxis);

        // Label for x Axis
        svg.append("text")
           .attr("transform", "translate(" + (w/2) + " ," + (h-10) + ")")
           .style("text-anchor", "middle")
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
           .attr("y", 15)
           .style("text-anchor", "middle")
           .text("Population");

        svg.append("text")
           .attr("x", w/2)
           .attr("y", padding)
           .attr("text-anchor", "middle")
           .style("font-size", "16px")
           .text("Awesome Barchart");
    });
    </pre>

</details>