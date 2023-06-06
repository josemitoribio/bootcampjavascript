// LABORATORIO MÓDULO 06.2

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


var upText = document.getElementById("upText");
var downText = document.getElementById("downText");
var text;

var searchIndex = (str, value) => {
  for (var i=0; i < str.length; i++) {
    if (str[i] === value) return i;
    } return -1;
};

var encryptMessage = text => {
  var result = "";
  text = upText.value;

  for (var i =0; i<text.length; i++) {
    var letterIndex = searchIndex (plainAlphabet, text[i]);
    if (letterIndex > -1) {
      result = result + encryptedAlphabet[letterIndex];
    } else {
      result = result + text[i];
      }
  }
  downText.value = result;
  return result;
};


var decryptMessage = (text) => {
  text = downText.value;
  var result = "";
  for (var i =0; i<text.length; i++) {
  var letterIndex = searchIndex (encryptedAlphabet, text[i]);
  if (letterIndex > -1) {
    result = result + plainAlphabet[letterIndex];
  } else {
    result = result + text[i];
    }
  }
  upText.value = result;
  return result;
};


document.getElementById("buttonEncrypt").addEventListener("click", encryptMessage);
document.getElementById("buttonDecrypt").addEventListener("click", decryptMessage);





///Opcional


var randomPick = (n, min, max) => {
  var range = max - min + 1;
  var randomNumber = () => Math.floor(Math.random() * range) + min;
  var result = [];

  for (var i=0; i<n; i++) {
    result[i] = randomNumber();
  }
  for (var i = 0; i<n; i++) {
    if (result[i] === result[i+1]) {
      result[i] = randomNumber();
    }
  }
  return result;
}

console.log(randomPick(10, 1, 100));