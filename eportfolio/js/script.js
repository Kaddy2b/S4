/*function afficherRea(id) {
	var pRea = document.getElementById('pRea');
	var imgRea =document.getElementById('imgRea');

	if (id == 1) {
		pRea.innerHTML = "Le smartGate est un projet que j'ai réalisé en terminal. J'étais en groupe, suivant la méthode Agile je jouais le rôle de Scrum Master pour la 1ère fois. Le projet contenait chaque étape de la réalisation d'un projet cahier des charges, conception ,développement, présentation.. Le SmartGate est un portail équipé d'un microcontrôleur Arduino, carte GSM/RFID/NFC et Ethernet ayant pour objectif de pouvoir être ouvert via un simple SMS, un badge et aussi avec un téléphone utilisant la NFC.";
		imgRea.src = "../files/images/Arduino_Uno.jpg";
	}
	else if (id == 2) {
		pRea.innerHTML = "Il s'agit d'un projet en groupe dirigé par la méthode Agile, nous avons travaillé en groupe de 5 dans lequel je jouais le rôle de Scrum Master. Pour mener à bien le projet nous avons utilisé l’outil de Gestion de projet Trello ainsi que le CMS Joomla pour la création du site.";
		imgRea.src = "../files/images/screen-ecole.jpg";
	}
}*/


//VARIABLES
var page2 = document.getElementById('page2');
var imgRea1 = document.getElementById('imgRea1');
var imgRea2 = document.getElementById('imgRea2');
var alert = document.getElementById('alert');
var close = document.getElementById('close-alert');
var text = document.getElementById('text-alert');

//ACTIONS
imgRea1.onmouseover = function(){
	imgRea1.src = "../files/images/Arduino_Uno.jpg";
};
imgRea1.onmouseout = function(){
	imgRea1.src = "../files/images/arduino.png";
};
imgRea1.onclick = function(){
	page2.style.opacity = 0.5;
	text.innerHTML = "Le smartGate est un projet que j'ai réalisé en terminal. J'étais en groupe, suivant la méthode Agile je jouais le rôle de Scrum Master pour la 1ère fois. Le projet contenait chaque étape de la réalisation d'un projet cahier des charges, conception ,développement, présentation.. Le SmartGate est un portail équipé d'un microcontrôleur Arduino, carte GSM/RFID/NFC et Ethernet ayant pour objectif de pouvoir être ouvert via un simple SMS, un badge et aussi avec un téléphone utilisant la NFC.";
	alert.style.display = "inline";
};
imgRea2.onclick = function(){
	page2.style.opacity = 0.5;
	text.innerHTML = "Il s'agit d'un projet en groupe dirigé par la méthode Agile, nous avons travaillé en groupe de 5 dans lequel je jouais le rôle de Scrum Master. Pour mener à bien le projet nous avons utilisé l’outil de Gestion de projet Trello ainsi que le CMS Joomla pour la création du site.";
	alert.style.display = "inline";
}
close.onclick = function(){
	alert.style.display = "none";
	page2.style.opacity = 1.0;

}