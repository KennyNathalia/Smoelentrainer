const green = document.querySelector('.green');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

green.onclick = function() {
  const rndCol = '#008000';
  document.body.style.backgroundColor = rndCol;
}

const red = document.querySelector('.red');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

red.onclick = function() {
  const rndCol = '#FF0000';
  document.body.style.backgroundColor = rndCol;
}

const blue = document.querySelector('.blue');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

blue.onclick = function() {
  const rndCol = '#00BFFF';
  document.body.style.backgroundColor = rndCol;
}