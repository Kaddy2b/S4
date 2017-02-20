function MAJ_Background () {
	var select = document.getElementById('couleurFond');
	var choix = select.selectedIndex;
	var couleur = select[choix].value;

	var body = document.body;
	body.style.backgroundColor = couleur;
}