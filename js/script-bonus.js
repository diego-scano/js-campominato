var difficulty = prompt('Scegli la difficoltà:  1. Facile  2. Normale  3. Difficile');

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

if(difficulty < 1 || difficulty > 3 || isNaN(difficulty)) {
  alert('Scegli la difficoltà inserendo esclusivamente 1, 2 o 3');
} else {
  switch(difficulty) {
    case '1':
      var maxRange = 100;
      break;
    case '2':
      var maxRange = 80;
      break;
    case '3':
      var maxRange = 50;
      break;
  }
}

var bombNumbers = [];
var maxBombs = 16;
var userNumbers;
var userArray = [];

while (bombNumbers.length < maxBombs) {
  var replyNum = randomNumber(1, maxRange);
  if(!bombNumbers.includes(replyNum)) {
    bombNumbers.push(replyNum);
  }
}

function userNumberCheck(userChoice, min, max) {
  var check = false;
  if (userChoice < min || userChoice > max || isNaN(userChoice)) {
    check = true;
  }
  return check;
}

function bombsCheck(list, number) {
  var find = false;
  for (var i = 0; i < list.length; i++) {
    if (list[i] === number) {
      find = true;
    }
  }
  return find;
}

console.log(bombNumbers);

var y = 0;

while (!bombsCheck(bombNumbers, userNumbers) && y < (maxRange - maxBombs)) {
  userNumbers = parseInt(prompt('Inserisci numero'));

  if (userNumberCheck(userNumbers, 1, maxRange)) {
    alert('Puoi inserire solo un numero tra 1 e ' + maxRange);
  } else if (userArray.includes(userNumbers)) {
    alert('Non puoi inserire lo stesso numero');
  } else {
    userArray.push(userNumbers);

    console.log(userArray);
    if (bombsCheck(bombNumbers, userNumbers)) {
      alert('Hai beccato la bomba!');
    } else {
      if (userArray.length === (maxRange - maxBombs)) {
        alert('Hai vinto!')
      }
    }
  }
  y++;
}

console.log('Il tuo punteggio è: ' + (userArray.length - 1));
