---
layout: post
title: "D3 Arrow Functions"
description: "Using arrow functions in D3 to simplify the syntax."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

Using arrow functions in D3 to simplify the syntax.

More about [arrow functions on Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Given this example:

    elements.map(function(element) {
        return element.length;
    });


This can be simplified to:

    elements.map((element) => {
        return element.length;
    });


If there is only one parameter and the only statement is `return` then it can be simplified to this:

    elements.map(element => element.length);

Follow [D3 Scales in a Bar Chart](../d3-scales-in-a-bar-chart/) to review this code in detail.

This code was used to create the rectangles of the bar chart:

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

This can be refactored using arrow functions:

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