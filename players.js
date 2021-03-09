var players = [{
	"name": "Bart",
	"img": "img/bart.jpg"
},

{
	"name": "Christian",
	"img": "img/christian.jpg"
},

{
	"name": "Eric",
	"img": "img/eric.jpg"
},

{
	"name": "Jens",
	"img": "img/jens.jpg"
},

{
	"name": "Justin",
	"img": "img/justin.jpg"
},

{
	"name": "Mark",
	"img": "img/mark.jpg"
},

{
	"name": "Marcos",
	"img": "img/marcos.jpg"
},

{
	"name": "Nicolai",
	"img": "img/nicolai.jpg"
},

{
	"name": "Steven",
	"img": "img/steven.jpg"
},

{
	"name": "Tyrell",
	"img": "img/tyrell.jpg"
},

{
	"name": "Uros",
	"img": "img/uros.jpg"
},
];

var playersSet = localStorage.getItem('playersSet');
let playerAmount = [];

var selectedImg;
var selectedName;
var checkImg;
var checkName;
var countImg = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var countName = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const player = document.querySelectorAll(".players");
const namePlayer = document.querySelectorAll(".namePlayer");


player.forEach(player => {
	//onclick for player
	player.onclick = function(){ selectIMG(player.id); }
});

namePlayer.forEach(namePlayer => {
	//onclick for player name
	namePlayer.onclick = function(){ selectName(namePlayer.id); }
});

//gives border to the images
function selectIMG(id){
	if (selectedImg == undefined) {
		//gives white border to selected player
		document.getElementById(id).classList.add("borders");
		selectedImg = id;
		checkImg = document.getElementById(id).src;
	}else{
		//removes border when another player or name is selected
		document.getElementById(selectedImg).classList.remove("borders");
		document.getElementById(id).classList.add("borders");
		selectedImg = id;
		checkImg = document.getElementById(id).src;
	}
	checkImg = checkImg.substring(checkImg.indexOf("img"));
	console.log(checkImg);
	checkMatch();
}


//gives border to the names
function selectName(id){
	if (selectedName == undefined) {
		document.getElementById(id).classList.add("bordersName");
		selectedName = id;
	}else{
		document.getElementById(selectedName).classList.remove("bordersName");
		document.getElementById(id).classList.add("bordersName");
		selectedName = id;
	}
	checkName = document.getElementById(id).innerHTML;
	console.log(checkName);
	checkMatch();
}


//Randomizes the position of the players and names
for (var i=0; i<players.length; i++){
	//images
	var random = countImg[Math.floor(Math.random() * countImg.length)];
	var countCheck = countImg.indexOf(random);
	countImg.splice(countCheck, 1);

	document.getElementById("img-"+i).src= players[random].img;
}

for (var i=0; i<players.length; i++){
	//names
	var random = countName[Math.floor(Math.random() * countName.length)];
	var countCheck = countName.indexOf(random);
	countName.splice(countCheck, 1);

	document.getElementById("btn-"+i).innerHTML= players[random].name;
}


//checks if image matches with the name or if the name matches with the image
var score = 0;
var tries = 0;
function checkMatch(){
	var checkNoMatch;

	if (checkImg != undefined && checkName != undefined) {

		tries++;
		document.getElementById("tries").innerHTML = tries;

		for (var i=0; i < players.length; i++){
			if(players[i].img === checkImg && players[i].name === checkName){
				//gives green border when matched
				//also makes the image and name fade away
				checkNoMatch = false;
				document.getElementById(selectedImg).classList.add("goodBorder");
				document.getElementById(selectedImg).onclick = null;


				document.getElementById(selectedName).classList.add("goodBorder");
				document.getElementById(selectedName).onclick = null;
				
				score++;
				document.getElementById("score").innerHTML = score;

				checkImg = undefined;
				checkName = undefined;
				return;
			}else{
				checkNoMatch = true;
			}
		}
	}
	if (checkNoMatch == true){
		//gives red border when wrong
		document.getElementById(selectedImg).classList.add("wrongBorder");
		document.getElementById(selectedName).classList.add("wrongBorder");
		document.getElementById(selectedImg).classList.remove("borders");
		document.getElementById(selectedName).classList.remove("bordersName");
		//alert("You got it wrong fam");
	}
}


//2 min timer
var timeleft = 120;
var gameTime = localStorage.getItem('gameTime');

if(gameTime != null){
	timeleft = gameTime;
}

var width = 100;
var barAmount = Number(width/timeleft);
var downloadTimer = setInterval(function(){
	document.getElementById("countdown").innerHTML = timeleft;
  if(timeleft <= 0){
  	alert("You lose");
    clearInterval(downloadTimer);
    document.getElementById("progressBar").style.display = "none";
  }
  width = width - barAmount;
  document.getElementById("progressBar").value = 120 - timeleft;
  document.getElementById("timerBar").style.width = width + "%";
  timeleft -= 1;
}, 1000);
