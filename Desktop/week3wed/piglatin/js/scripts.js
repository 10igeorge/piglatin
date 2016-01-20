var vowelArray = ["a", "e", "i", "o", "u", "A", "I", "E", "O", "U"];
var emptyArray = [];
var vowel = function(word) {
  for (var i = 0; i < vowelArray.length; i++) {
    if (word.charAt(0) === vowelArray[i]) {
      return(word + "ay");
    }
  }
}

var consonant = function(word) {
  for (var i = 0; i < vowelArray.length; i++){
    for (var j = 0; j < word.length; j++){
      if (word.charAt([j]) !== vowelArray[i]) {
        emptyArray.push([j]);
      }else{
        return word.slice([j]) + word.slice(0,[(j)]) + "ay";
    }
    }
  }
}
