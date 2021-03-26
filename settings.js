const button = document.querySelector('.submit');
button.onclick = submit

//gets data from the form and submits it
function submit(){
	var formValue = document.forms.form;
	var formData = new FormData(formValue);
	var time = formData.get("timer");
	var playersSet = formData.get("players");
	console.log(playersSet);
	//console.log(time);
	localStorage.setItem('gameTime', time);	
	localStorage.setItem('playersSet', playersSet);
	window.location.assign('smoelentrainer.html');
}

