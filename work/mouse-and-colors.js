var columns = document.getElementsByClassName("column")

var mouseEnterColor = "red";

for (var i = 0; i < columns.length; i++) {
	columns[i].addEventListener("mouseenter", function(e) {
		e.target.style.backgroundColor = mouseEnterColor;
	});
	columns[i].addEventListener("mouseleave", function(e) {
		e.target.style.backgroundColor = "inherit";
	});
	columns[i].addEventListener("click", function(e) {
		if (e.target.style.backgroundColor === mouseEnterColor) {
			e.target.style.backgroundColor = "inherit";
		}
		else {
			e.target.style.backgroundColor = mouseEnterColor;
		}
	});
}

var middleCell = parseInt(columns.length / 2);

columns[middleCell].addEventListener("dblclick", function(e) {
	e.target.style.backgroundColor = "green";
	alert("You found the secret cell!");
})