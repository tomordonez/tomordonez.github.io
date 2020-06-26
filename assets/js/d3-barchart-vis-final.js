var margin = {top: 20, right: 20, bottom: 20, left: 20},
	    w = 500 - margin.left - margin.right,
	    h = 300 - margin.top - margin.bottom;

var barPadding = 3;
var padding = 40;
var svg = d3.select("div#d3-barchart-vis-final")
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

d3.csv("../assets/csv/file.csv", rowConverter).then(function(dataset) {

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