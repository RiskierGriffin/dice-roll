// Allan Tenenbaum
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max-min + 1)) + min;
}

function getOrdinalSuffix(number){

	mod100 = number % 100;
	mod10 = number % 10;
	if (mod10 == 1 && mod100 != 11){
		return "st";
	}
	if (mod10 == 2 && mod100 != 12){
		return "nd";
	}
	if(mod10 == 3 && mod100 != 13){
		return "rd";
	} else{
		return "th";
	}
}