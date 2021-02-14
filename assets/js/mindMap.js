links = [
  {
    "source": "AI",
    "target": "Machine Learning",
    "value": 1
  },
  {
    "source": "AI",
    "target": "Computer Vision",
    "value": 0
  },
  {
    "source": "AI",
    "target": "Robotics",
    "value": 0
  },
  {
    "source": "Computer Vision",
    "target": "OpenCV",
    "value": 0
  },
  {
    "source": "Computer Vision",
    "target": "Image Processing",
    "value": 0
  },
  {
    "source": "Robotics",
    "target": "Teddy Bear Robot",
    "value": 0
  },
  {
    "source": "Machine Learning",
    "target": "Deep Learning",
    "value": 0
  },
  {
    "source": "Machine Learning",
    "target": "Statistical Learning",
    "value": 1
  },
  {
    "source": "Machine Learning",
    "target": "Speech Recognition",
    "value": 0
  },
  {
    "source": "Machine Learning",
    "target": "NLP",
    "value": 1
  },
  {
    "source": "Machine Learning",
    "target": "Linear Regression",
    "value": 1
  },
  {
    "source": "Cloud",
    "target": "GCP",
    "value": 1
  },
  {
    "source": "Cloud",
    "target": "Azure",
    "value": 1
  },
  {
    "source": "Cloud",
    "target": "AWS",
    "value": 1
  },
  {
    "source": "GCP",
    "target": "Compute Engine",
    "value": 1
  },
  {
    "source": "GCP",
    "target": "Cloud Storage",
    "value": 1
  },
  {
    "source": "GCP",
    "target": "BigQuery",
    "value": 1
  },
  {
    "source": "GCP",
    "target": "Big Table",
    "value": 0
  },
  {
    "source": "GCP",
    "target": "Cloud ML",
    "value": 0
  },
  {
    "source": "GCP",
    "target": "Cloud Vision",
    "value": 0
  },
  {
    "source": "GCP",
    "target": "Speech API",
    "value": 0
  },
  {
    "source": "Analytics",
    "target": "Data Engineering",
    "value": 1
  },
  {
    "source": "Analytics",
    "target": "Data Visualization",
    "value": 1
  },
  {
    "source": "Data Engineering",
    "target": "Hadoop",
    "value": 1
  },
  {
    "source": "Data Engineering",
    "target": "Spark",
    "value": 1
  },
  {
    "source": "Languages",
    "target": "Python",
    "value": 1
  },
  {
    "source": "Python",
    "target": "Spark",
    "value": 1
  },
  {
    "source": "Languages",
    "target": "Java",
    "value": 1
  },
  {
    "source": "Languages",
    "target": "Scala",
    "value": 1
  },
  {
    "source": "Java",
    "target": "Hadoop",
    "value": 1
  },
  {
    "source": "Scala",
    "target": "Spark",
    "value": 1
  },
  {
    "source": "Data Visualization",
    "target": "D3.js",
    "value": 1
  },
  {
    "source": "Data Visualization",
    "target": "Tableau",
    "value": 1
  },
  {
    "source": "Data Visualization",
    "target": "PowerBI",
    "value": 1
  },
  {
    "source": "Data Visualization",
    "target": "Google Data Studio",
    "value": 0
  },
  {
    "source": "Languages",
    "target": "JavaScript",
    "value": 1
  },
  {
    "source": "JavaScript",
    "target": "D3.js",
    "value": 1
  },
  {
    "source": "Python",
    "target": "Numpy",
    "value": 1
  },
  {
    "source": "Python",
    "target": "Pandas",
    "value": 1
  },
  {
    "source": "Python",
    "target": "Scikit Learn",
    "value": 1
  },
  {
    "source": "JavaScript",
    "target": "React",
    "value": 0
  },
  {
    "source": "JavaScript",
    "target": "Node",
    "value": 0
  },
  {
    "source": "JavaScript",
    "target": "React Native",
    "value": 0
  },
  {
    "source": "Machine Learning",
    "target": "Linear Algebra",
    "value": 1
  },
  {
    "source": "AI",
    "target": "Ethics of AI",
    "value": 1
  },
  {
    "source": "Tools",
    "target": "SublimeText",
    "value": 1
  },
  {
    "source": "Tools",
    "target": "Vim",
    "value": 1
  },
  {
    "source": "Tools",
    "target": "Linux",
    "value": 1
  },
  {
    "source": "Python",
    "target": "Vim",
    "value": 1
  },
  {
    "source": "Machine Learning",
    "target": "Logistic Regression",
    "value": 0
  },
  {
    "source": "Machine Learning",
    "target": "SVM",
    "value": 0
  },
  {
    "source": "Machine Learning",
    "target": "Random Forests",
    "value": 0
  },
  {
    "source": "Machine Learning",
    "target": "Data Engineering",
    "value": 1
  },
  {
    "source": "GCP",
    "target": "Data Engineering",
    "value": 1
  },
  {
    "source": "GCP",
    "target": "Machine Learning",
    "value": 0
  },
  {
    "source": "Computer Vision",
    "target": "Cloud Vision",
    "value": 0
  },
  {
    "source": "Speech Recognition",
    "target": "Speech API",
    "value": 0
  },
  {
    "source": "Linear Algebra",
    "target": "Numpy",
    "value": 1
  },
  {
    "source": "Linear Algebra",
    "target": "Pandas",
    "value": 1
  },
  {
    "source": "SublimeText",
    "target": "Python",
    "value": 1
  },
  {
    "source": "SublimeText",
    "target": "JavaScript",
    "value": 1
  },
  {
    "source": "Machine Learning",
    "target": "Scikit Learn",
    "value": 0
  },
  {
    "source": "BigQuery",
    "target": "PowerBI",
    "value": 0
  }
];

var nodes = {};

// compute the distinct nodes from the links.
links.forEach(function(link) {
    link.source = nodes[link.source] ||
        (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] ||
        (nodes[link.target] = {name: link.target});
});

var width = 700,
    height = 700
    padding = 20;

var force = d3.forceSimulation()
    .nodes(d3.values(nodes))
    .force("link", d3.forceLink(links).distance(100))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .force("charge", d3.forceManyBody().strength(-250))
    .alphaTarget(1)
    .on("tick", tick);

var svg = d3.select("#mindMap")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 " + width + " " + height);

// add the links and the arrows
var path = svg.append("g")
    .selectAll("path")
    .data(links)
    .enter()
    .append("path")
    .attr("class", function(d) { return "link " + d.type; })

// styling the edges

path
    .style("stroke", d => {
      if (d.value == 1) {
        return "blue";
      }
      else {
        return "black";
      }
    })
    .style("stroke-width", d => {
      if (d.value == 1) {
        return "3";
      }
    });

// Scale the node radius
var nodeRadius = d3.scaleLinear()
    .domain([d3.min(d3.values(nodes), d => d.index), d3.max(d3.values(nodes), d => d.index)])
    .range([1, 50]);

// define the nodes
var node = svg.selectAll(".node")
    .data(force.nodes())
    .enter().append("g");

// add the nodes
var nodeCircle = node.append("circle")
    .attr("class", "node")
    .attr("r", d => {
      d.weight = links.filter(function(l) {
        return l.source.index == d.index || l.target.index == d.index
      }).length;
      
      return nodeRadius(d.weight);
    });

let nodeWeights = d3.values(nodes).map(d => d.weight);
var maxWeight = d3.max(nodeWeights);
var minWeight = d3.min(nodeWeights);

var scaleColor = d3.scaleSequential()
      .domain([minWeight, maxWeight])
      .interpolator(d3.interpolateGreens);

nodeCircle
        .style("fill", d => scaleColor(d.weight));

//add the node source name
node.append("text")
    .text(d => d.name)
    .attr("text-anchor", "start")
    .attr("x", 6)
    .attr("y", 18);

nodeCircle
    .on("dblclick", pinNode)
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

// Double click to pin node
function pinNode(d) {
  if (d.fixed == true) {
    d3.select(this).classed("fixed", d.fixed = false)
    .style("fill", d => scaleColor(d.weight));
    d.fx = null;
    d.fy = null;
  }
  else {
    d3.select(this).classed("fixed", d.fixed = true)
    .style("fill", "red");
    d.fx = d.x;
    d.fy = d.y;
  }
}

// add the curvy lines
function tick() {
    path.attr("d", function(d) {
        var dx = d.target.x - d.source.x,
            dy = d.target.y - d.source.y,
            dr = Math.sqrt(dx * dx + dy * dy);
        return "M" +
            d.source.x + "," +
            d.source.y + "A" +
            dr + "," + dr + " 0 0,1 " +
            d.target.x + "," +
            d.target.y;
    });

    node
        .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")"; })
};

function dragstarted(d) {
    if (!d3.event.active) force.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
};

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
};

function dragended(d) {
    if (!d3.event.active) force.alphaTarget(0);
    if (d.fixed == true) {
        d.fx = d.x;
        d.fy = d.y;
    }
    else {
        d.fx = null;
        d.fy = null;
    }
};