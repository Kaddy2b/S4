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

function myajax(url, callBack) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.open("GET", url, true);
	httpRequest.addEventListener("load", function () {
		callBack(httpRequest);
	});
	httpRequest.send(null);
}

function myCallBack(e) {
	var villes = JSON.parse(e.responseText);
	var tableau = [];
	for(var i=0; i<villes.length; i++) {
		tableau.push(villes[i].name);
	}
	afficheVilles(tableau);
}

myajax("http://infolimon.iutmontp.univ-montp2.fr/~graciag/S4/Web_js/td04/cityRequest.php?city=Montpe", myCallBack);