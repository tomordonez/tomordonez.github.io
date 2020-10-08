var leftButton = document.getElementById("left-button")
var rightButton = document.getElementById("right-button")

var dogs = ["dog1.jpg", "dog2.jpg", "dog3.jpg", "dog4.jpg", "dog5.jpg"];
var cats = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"];

function randomPet(petArray) {
	var random = Math.floor(Math.random() * petArray.length);
	return petArray[random];
}

leftButton.addEventListener("click", function () {
	document.getElementById("pet-image__img").src = randomPet(cats);
});

rightButton.addEventListener("click", function () {
	document.getElementById("pet-image__img").src = randomPet(dogs);
});
