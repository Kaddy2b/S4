function MAJecran (argument) {
	var ecran = document.getElementById('ecran');
	ecran.value += argument;
}

function correction (argument) {
	var ecran = document.getElementById('ecran');
	var str = ecran.value;
	ecran.value = str.substring(0, str.length-1);
}

function effacer (argument) {
	var ecran = document.getElementById('ecran');
	ecran.value = "";
}

function calculer (argument) {
	var ecran = document.getElementById('ecran');
	var str = ecran.value;
	ecran.value = eval(str);
}