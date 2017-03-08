function choisir() {
	stop();

	//Selectionner la musique
	var selecteur = document.getElementById('selecteur');
	var choix = selecteur.selectedIndex;
	var son = selecteur.options[choix].value;

	//AudioPlayer
	var audioPlayer = document.getElementById('audioPlayer');

	//Définir la musique à jouer
	if(audioPlayer.canPlayType('audioPlayer/ogg')) {
		audioPlayer.setAttribute("src", son + ".ogg");
	}
	else {
		audioPlayer.setAttribute("src", son + ".mp3");
	}
}

function paused() {
	var audioPlayer = document.getElementById('audioPlayer');

	//Bouton Pause
	var button = document.getElementById('pause');
	if (button.value == "Play") {
		button.value = "Pause";
		audioPlayer.play();
	}
	else {
		button.value = "Play";
		audioPlayer.pause();
	}
}

function stop() {
	var audioPlayer = document.getElementById('audioPlayer');
	audioPlayer.currentTime = 0;
    audioPlayer.pause();

    //Bouton Pause
    var button = document.getElementById('pause');
    if (button.value == "Pause") {
		button.value = "Play";
	}
	jouer(1);
}

function jouer(choix) {
	var title = document.getElementById('title');
	var jeu = document.getElementById('jeu');

	if (choix == 0) { //acceder au jeu
		title.style.display = 'none';
		jeu.style.display = 'inline';
	}
	else { //acceder au menu
		title.style.display = 'inline';
		jeu.style.display = 'none';
	};
}
