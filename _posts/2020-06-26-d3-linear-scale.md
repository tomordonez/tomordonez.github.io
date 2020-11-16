---
layout: post
title: "D3 Linear Scale"
description: "Create a linear scale in D3 with scaleLinear."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

Create a linear scale in D3 with scaleLinear.

Given this dataset:

    year     population
    1950        5
    1951        10
    1955        15
    1959        20

## D3 Linear Scale with scaleLinear()

Use this syntax:

    yScale = d3.scaleLinear()
               .domain([0, d3.max(dataset, function(d) { return d.population; })])
               .range([h - padding, padding]);

Mapping input domain to output range:

* Input domain: From `0` to the `max` value of the `population` column
* Output range: Limit the visualization to the padded limits of the `SVG` height.

With SVG the coordinates increase left to right, top to bottom.

For this:

    .range([h - padding, padding]);


* The height `h` is the height of the `SVG`, for example `var h = 300;`.
* `padding` can be set as `var padding = 40;`
* `h - padding` is `300 - 40` which is `260`

Then the range is:

    .range([260, 40])

The range is between the `y` coordinate `260` and the `y` coordinate `40`. Which is the padded region of the height of the SVG.

More about D3 and Scales:

* [D3 Drawing SVG](../d3-drawing-svg/)
* [D3 Creating a Bar Chart](../d3-creating-a-bar-chart/)
* [D3 Using Scales](../d3-using-scales/)
* [D3 Band Scale](../d3-band-scale/)
* [D3 Scales in a Bar Chart](../d3-scales-in-a-bar-chart/)