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
}
