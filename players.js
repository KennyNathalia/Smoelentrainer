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

var selectedImg;
var selectedName;
var checkImg;
var checkName;
var count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const player = document.querySelectorAll(".players");
const namePlayer = document.querySelectorAll(".namePlayer");


player.forEach(player => {
	player.onclick = function(){ selectIMG(player.id); }
});

namePlayer.forEach(namePlayer => {
	namePlayer.onclick = function(){ selectName(namePlayer.id); }
});

//gives border to the images
function selectIMG(id){
	if (selectedImg == undefined) {
		document.getElementById(id).classList.add("borders");
		selectedImg = id;
		checkImg = document.getElementById(id).src;
	}else{
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
	var random = count[Math.floor(Math.random() * count.length)];
	var countCheck = count.indexOf(random);
	count.splice(countCheck, 1);

	document.getElementById("img-"+i).src= players[random].img;
	document.getElementById("btn-"+i).innerHTML= players[random].name;
}


//checks if image matches with the name or if the name matches with the image
function checkMatch(){
	var checkNoMatch;

	if (checkImg != undefined && checkName != undefined) {
		for (var i=0; i < players.length; i++){
			if(players[i].img === checkImg && players[i].name === checkName){
				console.log("yea");
				checkNoMatch = false;
			}else{
				console.log("nah");
				checkNoMatch = true;
			}
		}
	}
	if (checkNoMatch = true){
		alert("test");
	}
}


//2 min timer
var timeleft = 120;
var width = 100;
var barAmount = Number(width/timeleft);
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  width = width - barAmount;
  document.getElementById("progressBar").value = 120 - timeleft;
  document.getElementById("timerBar").style.width = width + "%";
  timeleft -= 1;
}, 1000);
