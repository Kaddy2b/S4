function afficheVilles (tab) {
	videVilles();
	var myac = document.getElementById('myac');
	var str = "";
	for (var i = 0; i < tab.length; i++) {
		str += "<p>" + tab[i] + "</p>";
	};
	myac.innerHTML = str;
}

function videVilles () {
	var myac = document.getElementById('myac');
	myac.innerHTML = "";
}

function init () {
	var tab = ["Bordeaux","Toulouse","Montpellier","Nice"];
	afficheVilles(tab);
}