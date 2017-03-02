//var selecteur = document.getElementById('selecteur');

function lectureSon() {
	var selecteur = document.getElementById('selecteur');
	var choix = selecteur.selectedIndex;
	var son = selecteur.options[choix].value;

	var audioPlayer = document.getElementById('audioPlayer');
	var sourcePlayerOGG = document.getElementById('sourcePlayerOGG');
	var sourcePlayerMP3 = document.getElementById('sourcePlayerMP3');
	sourcePlayerOGG.src = son + ".ogg";
	sourcePlayerMP3.src = son + ".mp3";

	audioPlayer.play();
}

function paused() {
	var audioPlayer = document.getElementById('audioPlayer');
	audioPlayer.pause();
}

function stop() {
	var audioPlayer = document.getElementById('audioPlayer');
	audioPlayer.currentTime = 0;
    audioPlayer.pause();
}

audioPlayer.play();