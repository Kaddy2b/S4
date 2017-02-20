function chargerSelecteur () {
	var a = document.getElementById("base");
	var str = "";

	for (var i = 0; i < 10; i++) {
		str += '<option value="' + i + '">' + i + '</option>';
	};

	a.innerHTML = str;
}


function MAJ_Table() {
	var tab = document.getElementById("base");	//je recupere les deux options du select
	var choix = tab.selectedIndex;				//Je prend l'option selectionné par l'user
	var base = tab.options[choix].value;		//Je prend la valeur de cette option
	var aff = "Voici la table de " + base + " :<br>";

	for(i=0; i<=10; i++){
		var ligne = base + ' * ' + i + ' = ' + (base*i) + '<br>';
		var aff = aff + ligne;
	}

	var lala = document.getElementById("affichage");
	lala.innerHTML = aff;
}

function demarrer () {
	chargerSelecteur();
	MAJ_Table();
}

//VARIABLES
var b = document.body;
var selecteur = document.getElementById("base");
var active = document.getElementById('activateur');
var desactive = document.getElementById('desactivateur');

//ACTIONS
b.onload = demarrer;

selecteur.addEventListener('change', MAJ_Table);

active.addEventListener('click', function(){
	selecteur.addEventListener('change', MAJ_Table);
});
desactive.addEventListener('click', function(){
	selecteur.removeEventListener('change', MAJ_Table);
});