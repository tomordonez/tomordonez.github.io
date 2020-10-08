var w = 500;
var h = 300;
var barPadding = 3;
var padding = 40;
var svg0 = d3.select("div#d3-barchart-vis")
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
			   .domain(d3.range(dataset.length))
			   .rangeRound([padding, w])
			   .paddingInner(0.1)
			   .paddingOuter(0.1);

	yScale = d3.scaleLinear()
			   .domain([0, d3.max(dataset, function(d) { return d.population; })])
			   .range([h - padding, padding]);

	svg0.selectAll("rect")
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