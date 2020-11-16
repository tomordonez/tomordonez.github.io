---
layout: post
title: "Embedding D3 in a Website"
description: "How to embed a D3 visualization in a website."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

How to embed a D3 visualization in a website or a blog post.

My blog follows this directory structure:

    assets/
      csv/
        file.csv
      js/
        d3.min.js
        d3-barchart-vis.js
    _posts/
      this-blog-post.md


Add a `div` with a descriptive `id` to the section of your blog post where you want to add your visualization:

    <div id="d3-barchart-vis"></div>


In the `d3-barchart-vis.js`, the `svg` selects this `<div id`:

    var svg = d3.select("#d3-barchart-vis")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 " + w + " " + h);


The `csv` file is called like this so it points at the correct directory:

    d3.csv("../assets/csv/file.csv", rowConverter).then(function(dataset) {


At the end of the blog post, after all content, add a reference to the JavaScript files:

    {% raw %}
    <script type="text/javascript" src="../assets/js/d3.min.js"></script>
    <script type="text/javascript" src="../assets/js/d3-barchart-vis.js"></script>
    {% endraw %}

## D3 visualization in this blog post

<div id="d3-barchart-vis-final"></div>

[![Ask me anything on Linkedin]({{ site.baseurl }}/assets/images/ama-linkedin-tomordonez.png)](https://www.linkedin.com/in/tomordonez/)

<script type="text/javascript" src="../assets/js/d3.min.js"></script>
<script type="text/javascript" src="../assets/js/d3-barchart-vis-final.js"></script>