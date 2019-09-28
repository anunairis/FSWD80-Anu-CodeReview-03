// For Austria : insurance = horse_power x 100 / age   + 50;

// For Hungary: insurance = horse_power x 120 / age  + 100;

// For Greece: insurance = horse_power x 150 / (age+3)  + 50;

function calculateInsurancePerCountry() {
	const name = document.getElementById("name1").value;
	const age = Number(document.getElementById("age1").value);
	const country = document.getElementById("country1").value;
	const horse_power = Number(document.getElementById("horse1").value);
	//console.log(name, age, country, horse_power);
	let insurance = "";

	if (country === "austria") {
		insurance = horse_power * 100 / age  + 50;
	} else if (country === "hungary") {
		insurance = horse_power * 120 / age  + 100;
	} else if (country === "greece") {
		insurance = horse_power * 150 / (age+3)  + 50;
	}
	// If they are not empty values
	if (name, age, country, horse_power) {
		insurance = Math.floor(insurance);
		document.getElementById("button_output").innerHTML = name + ", your insurance costs " + insurance + " euros.";
		document.getElementById("button_output").style = "display:flex; font-size:2em; font-weight:bold; padding-top:15px;";
	} else {
		document.getElementById("button_output").innerHTML = "Please fill in all the fields!";
		document.getElementById("button_output").style = "display:flex; font-size:2em; font-weight:bold; padding-top:15px; border: 2px solid #8E1616; margin: auto";
		
	}
};

document.getElementById("button1").addEventListener("click", calculateInsurancePerCountry);
