//store the value from weight input

function calculate () {
 	var weight = document.getElementById("yourWeight").value;
 	var planetValue = document.getElementById("selectAPlanet").value;
 	var index = document.getElementById("selectAPlanet").selectedIndex;
	var planetName = document.getElementById("selectAPlanet").options[index].text;
 	document.getElementById('message').innerHTML = "If you were on " + planetName + " you would weigh " + planetValue * weight + " pounds";
 }




//attempt to change image

function changeImage () {
	var image = document.getElementById("picture");
	var planetValue = document.getElementById("selectAPlanet").value
	if (planetValue = "1") {
		image.src = "earth.jpg";
	}
	else if (planetValue = "27.9") {
		image.src = "sun.jpg";
	}
}






// function calculate () {
// 	var index = document.getElementById("planet").selectedIndex;
// 	var planetName = document.getElementById("planet").options[index].text;
// 	alert(planetName);
// }


//store the value of the dropdown

//multiply the two

//display the answer


// getting name from the dropdown box to add to messsage 


