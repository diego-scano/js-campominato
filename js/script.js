var bombNumbers = [];
var userNumbers;
var userArray = [];

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

while (bombNumbers.length < 16) {
  var replyNum = randomNumber(1, 100);
  if(!bombNumbers.includes(replyNum)) {
    bombNumbers.push(replyNum)
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

while (!bombsCheck(bombNumbers, userNumbers) && y < 84) {
  userNumbers = parseInt(prompt('Inserisci numero'));

  if (userNumberCheck(userNumbers, 1, 100)) {
    alert('Puoi inserire solo un numero tra 1 e 100');
  } else if (userArray.includes(userNumbers)) {
    alert('Non puoi inserire lo stesso numero');
  } else {
    userArray.push(userNumbers);

    console.log(userArray);
    if (bombsCheck(bombNumbers, userNumbers)) {
      alert('Hai beccato la bomba!');
    } else {
      if (userArray.length === 84) {
        alert('Hai vinto!')
      }
    }
  }
  y++;
}

console.log('Il tuo punteggio è: ' + (userArray.length - 1));
