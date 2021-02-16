var players = [{
	"name": "bart",
	"img": "img/bart.jpg"
},

{
	"name": "christian",
	"img": "img/christian.jpg"
},

{
	"name": "eric",
	"img": "img/eric.jpg"
},

{
	"name": "jens",
	"img": "img/jens.jpg"
},

{
	"name": "justin",
	"img": "img/justin.jpg"
},

{
	"name": "mark",
	"img": "img/mark.jpg"
},

{
	"name": "marcos",
	"img": "img/marcos.jpg"
},

{
	"name": "nicolai",
	"img": "img/nicolai.jpg"
},

{
	"name": "steven",
	"img": "img/steven.jpg"
},

{
	"name": "tyrell",
	"img": "img/tyrell.jpg"
},

{
	"name": "uros",
	"img": "img/uros.jpg"
},
];

var selectedImgId;
var selectedName;

const player = document.querySelectorAll(".players");
const namePlayer = document.querySelectorAll(".namePlayer")

player.forEach(player => {
	player.onclick = function(){ selectIMG(player.id); }
	console.log(player.id);
});

//gives border to the images
function selectIMG(id){
	if (selectedImgId == undefined) {
		document.getElementById(id).classList.add("borders");
		selectedImgId = id;
	}else{
		document.getElementById(selectedImgId).classList.remove("borders");
		document.getElementById(id).classList.add("borders");
		selectedImgId = id;
	}
}

namePlayer.forEach(namePlayer => {
	namePlayer.onclick = function(){ selectIMG(namePlayer.id); }
	console.log(namePlayer.id);
});

//gives border to the names
function selectedName(id){
	if (selectedName == undefined) {
		document.getElementById(id).classList.add("bordersName");
		selectedName = id;
	}else{
		document.getElementById(selectedName).classList.remove("bordersName");
		document.getElementById(id).classList.add("bordersName");
		selectedName = id;
	}
}

var count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i=0; i<players.length; i++){
	var random = count[Math.floor(Math.random() * count.length)];
	var countCheck = count.indexOf(random);
	count.splice(countCheck, 1);

	document.getElementById("img-"+i).src= players[random].img;
}

 

