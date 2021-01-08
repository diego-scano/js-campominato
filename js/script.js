function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var bombNumbers = [];
var num;

for (var x = 0; x < 16; x++) {
  num = randomNumber(1, 100);
  bombNumbers.push(num);
}

console.log(bombNumbers);

var userNumbers;
var pointCounter = 0;

for (var y = 0; y < 84; y++) {
  userNumbers = prompt('Inserisci numero');
  if (userNumbers[y] === bombNumbers[x]) {
    alert('Hai beccato la bomba!');
  } else {
    pointCounter += 1;
  }
}

console.log(pointCounter);
