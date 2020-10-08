---
layout: post
title: "D3 Troubleshooting"
redirect_from:
  - /d3-troubleshooting.html
categories: [Data Analytics]
image: assets/images/1.jpg
tags: [analytics, data visualization, D3, javascript]
---


D3 is a great JavaScript library for data visualization. However, like every technology, it can be annoying when you don't know why things don't work as expected.

A good way for troubleshooting D3 is by using the browser console.

Let's run a small project as shown on the D3 tutorial above. It can be as simple as creating an `index.html` and linking to the `D3.js` library.

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8">
	    <script type="text/javascript" src="https://d3js.org/d3.v5.min.js"></script>
	  </head>
	  <body>
	  </body>
	</html>

Then run the webserver like this:

	$ python -m http.server 8888 --bind 127.0.0.1

Open the browser on: `http://127.0.0.1:8888/`. For this test I used Firefox 72.

Open the console on the browser. (You can use `clear()` to clear the output)


## D3 Methods

On the console, type `d3`. Then expand the result, which shows all these methods. Now you can investigate which methods are available:

	{…}
	​
	__esModule: true
	​
	active: function active()​
	arc: function arc()​
	area: function ry()​
	areaRadial: function ly()​
	ascending: function n()​
	axisBottom: function axisBottom()​
	axisLeft: function axisLeft()​
	axisRight: function axisRight()​
	...
	...
	it has about 500 methods...

For example, two useful methods are `d3.min` and `d3.max`.

Let's create an array:

	numbers = [3, 9, 1, 0, 2, 8, 2];


It shows this output:

	Array(7) [ 3, 9, 1, 0, 2, 8, 2 ]


Then the min and max can be easily calculated:

	d3.min(numbers)
	0

	d3.max(numbers)
	9

This can be helpful when using `scales` to define the input domain.


## Array methods

Type the name of the array we created

	numbers


Expand the result to see the values of the array and the array methods

	(7) […]
	​0: 3
	​1: 9
	​2: 1
	​3: 0
	​4: 2
	​5: 8
	​6: 2
	​length: 7
	​
	<prototype>: []
	​​concat: function concat()
	​​constructor: function Array()
	​​copyWithin: function copyWithin()
	​​entries: function entries()
	​​every: function every()
	​​fill: function fill()
	​​filter: function filter()
	​​find: function find()
	​​findIndex: function findIndex()
	​​flat: function flat()
	​​flatMap: function flatMap()
	​​forEach: function forEach()
	​​includes: function includes()
	​​indexOf: function indexOf()
	​​join: function join()
	​​keys: function keys()
	​​lastIndexOf: function lastIndexOf()
	​​length: 0
	​​map: function map()
	​​pop: function pop()
	​​push: function push()
	​​reduce: function reduce()
	​​reduceRight: function reduceRight()
	​​reverse: function reverse()
	​​shift: function shift()
	​​slice: function slice()
	​​some: function some()
	​​sort: function sort()
	​​splice: function splice()
	​​toLocaleString: function toLocaleString()
	​​toSource: function toSource()
	​​toString: function toString()
	​​unshift: function unshift()
	​​values: function values()
	​​Symbol(Symbol.iterator): function values()
	​​Symbol(Symbol.unscopables): Object { copyWithin: true, entries: true, fill: true, … }
	​​<prototype>: Object { … }
​

There is a `sort` function.

	numbers.sort()
	Array(7) [ 0, 1, 2, 2, 3, 8, 9 ]

There is also `length`.

	numbers.length
	7

## Object Methods

Let's create an object.

	simpsons = { name: "Homer", age: 40, city: "Springfield"};

Type `simpsons`

	Object { name: "Homer", age: 40, city: "Springfield" }


Create an array from this object:

	simpsonsArray = d3.values(simpsons)
	Array(3) [ "Homer", 40, "Springfield" ]


To see methods available for `Object` simpsons, type `simpsons` and expand the output.

	{…}
	​age: 40
	​city: "Springfield"
	​name: "Homer"
	​
	<prototype>: {…}
	​​__defineGetter__: function __defineGetter__()
	​​__defineSetter__: function __defineSetter__()
	​​__lookupGetter__: function __lookupGetter__()
	​​__lookupSetter__: function __lookupSetter__()
	​​__proto__: 
	​​constructor: function Object()
	​​hasOwnProperty: function hasOwnProperty()
	​​isPrototypeOf: function isPrototypeOf()
	​​propertyIsEnumerable: function propertyIsEnumerable()
	​​toLocaleString: function toLocaleString()
	​​toSource: function toSource()
	​​toString: function toString()
	​​valueOf: function valueOf()
	​​<get __proto__()>: function __proto__()
	​​<set __proto__()>: function __proto__()


## Console.log on callback function

On your D3 script, use `console.log` on a callback function to see the data before and after such as:

	var someFunction (d) {
		console.log("Before something happens");
		console.log(d);
		somethingHappens(d);
		console.log("After something happens");
		console.log(d);
		}

## d3.nest reformats a Date object to string

As seen [here](https://stackoverflow.com/questions/25576853/d3-nest-formatting-date-incorrectly) and [here](https://github.com/d3/d3-collection/issues/19).

If you are using `d3.nest()` to group data that has a `Date`. Nest will force the value into a string.

Given a dataset where you parse the year:

	const parseTime = d3.timeParse("%Y");

After loading `dataset`, then creating an array of objects:

	const data = dataset.map(d => {
		return {
		  year: parseTime(d.year),
		  count: +d.sale
		};
	})

The parsed `d.year` stored into `year` should be like this:

	Date Sat Jan 01 2011 00:00:00 GMT-0500 (Eastern Standard Time)

If you want to summarize the data and calculate amount per year:

	const salesYear = d3.nest()
	.key(d => d.year)
	.rollup(amount => d3.sum(amount, d => d.sale))
	.entries(data);

However, `.key(d => d.year)` forces the `Date` object to `String` like this:

	"Sat Jan 01 2011 00:00:00 GMT-0500 (Eastern Standard Time)"

If you were to plot `Sales Amount vs Year` by using a scale that maps `Year` to `Date` objects. You will get a `NaN`. Because now `Year` is not a `Date` object, but a `String`.

	const line = d3.line()
	   .x(d => xScale(d.year))
	   .y(d => yScale(d.amount));

You need to convert the `Date string` back to `Date object`.

	const line = d3.line()
		.x(d => xScale(new Date(d.year)))
		.y(d => yScale(d.amount));


## D3 examples

There are two websites that have a lot of examples. However, keep in mind some use different versions of D3, and the syntax might change in different versions:

* [Blocks](https://bl.ocks.org/)
* [Observable](https://observablehq.com/)
* [Docs](https://github.com/d3/d3/wiki)