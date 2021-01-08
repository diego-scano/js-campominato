var bombNumbers = [];
var num;
var userNumbers;
var pointCounter = 0;

for (var x = 0; x < 16; x++) {
  num = randomNumber(1, 100);
  bombNumbers.push(num);
}

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
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

var y;
while (bombsCheck(bombNumbers, userNumbers) || y < 84) {
  userNumbers = prompt('Inserisci numero');
  if (bombsCheck(bombNumbers, userNumbers)) {
    alert('Hai beccato la bomba!');
  } else {
    pointCounter += 1;
  }
  y++;
}

console.log(pointCounter);
