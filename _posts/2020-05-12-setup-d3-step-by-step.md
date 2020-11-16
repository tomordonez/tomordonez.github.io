---
layout: post
title: "Setup D3 Step by Step"
description: "Setup D3 step by step. Creating HTML, CSS, JS files. Running a web server."
image: assets/images/2.jpg
tags: [data analytics, data visualization, D3, javascript]
---

Setup D3 step by step. Creating HTML, CSS, JS files. Running a web server.


## Setup up D3 project files

First create three files:

* `index.html`
* `main.css`
* `project.js`

Download the `D3.js` library from [D3 Website](https://d3js.org/) or use the external reference.

If you downloaded the D3 file into a `lib` folder, then add this to your `index.html`:

    <script type="text/javascript" src="lib/d3.min.js"></script>


If you want to use an external D3 reference use one of these, depending on the D3 version:

    <script type="text/javascript" src="https://d3js.org/d3.v4.min.js"></script>

    <script type="text/javascript" src="https://d3js.org/d3.v5.min.js"></script>


## Create the index HTML file

Here is an `index.html` example including the references to `main.css`, `project.js`, and `d3.v5.min.js`. 

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>D3 Canvas</title>
            <link rel="icon" type="image/png" href="icon.png">
            <script type="text/javascript" src="https://d3js.org/d3.v5.min.js"></script>
            <link rel="stylesheet" type="text/css" href="main.css">
        </head>
        <body>
            <script type="text/javascript" src="project.js"></script>
        </body>
    </html>


## Example of a D3.js file

This is an example of a D3 Javascript file. Save it into `project.js`.

    var w = 700;
    var h = 500;
    var barPadding = 3;
    var padding = 40;
    var parseTime = d3.timeParse("%Y");
    var formatTime = d3.timeFormat("%Y");

    var svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    var rowConverter = function(d) {
        return {
            year: parseTime(d.year),
            total: +d.running_total
        };
    }


## Run a web server with Python

In your D3 project folder, run the web server with Python.

Run it like this if you want the process to run in the background with `&.`:

    $ python -m http.server 8888 --bind 127.0.0.1 &.


Or like this if you want to see the output. With `--bind` to explicitly use localhost only:

    $ python -m http.server 8888 --bind 127.0.0.1

Then open the browser on `http://127.0.0.1:8888/` and browse to the `index.html` to see your D3 project:

    Serving HTTP on 127.0.0.1 port 8888 (http://127.0.0.1:8888/)
    127.0.0.1 - - [06/Jun/2020 08:24:06] "GET /index.html HTTP/1.1" 200 -
    127.0.0.1 - - [06/Jun/2020 08:24:06] "GET /main.css HTTP/1.1" 200 -
    127.0.0.1 - - [06/Jun/2020 08:24:06] "GET /project.js HTTP/1.1" 200 -

Or like this if you want to access localhost from your phone:

    $ python -m http.server 8888 --bind 0.0.0.0

Find the IP number of the laptop. Let's say it is `192.168.1.35`. Then from your mobile go to:

    192.168.1.35:8888

On the browser verify that you see the `<title>` tag from the `index.html`:

    <title>D3 Canvas</title>


Stop the server with `Ctrl C`.


## CDD or Console Driven Development

It's a good idea to follow a Console Driven Development approach as you make changes to your D3 files `html`, `js`, and `css`. When you interact with the visualization, you can see the result in the console and see if it works as expected.

Go to the browser, right click Inspect and find the Console.

For a detailed D3 tutorial go to [D3 Tutorial Data Visualization](../d3-tutorial-data-visualization/)

[![Ask me anything on Linkedin]({{ site.baseurl }}/assets/images/ama-linkedin-tomordonez.png)](https://www.linkedin.com/in/tomordonez/)