// 
//
// $(document).ready(function() {
//   $('button.btn').click(function() {
//     if () {
//   } else
//     alert("Please enter text to translate!")
//   })
//
//
//
//
// });

var vowelArray = ["a", "e", "i", "o", "u", "A", "I", "E", "O", "U"];
var vowel = function(word) {
  for (var i = 0; i < vowelArray.length; i++) {
    if (word.charAt(0) === vowelArray[i]) {
      return(word + "ay");
    }
  }
}
var consonantQu = function(word) {
  for (var i = 0; i < word.length; i++){
    for (var j = 0; j < vowelArray.length; j++){
      if (word.charAt([i]) !== vowelArray[j]) {
      } else {
        return word.slice([i]) + word.slice(0,[i]) + "ay";
      }
    }
  }
}

var qu = function(word) {
  if (word[0] === "q" || "Q") {
    return (word.slice(2) + word.slice(0,2) + "ay").toLowerCase();
  }
}
var consonant = function(word) {
  for (var i = 0; i < word.length; i++){
    for (var j = 0; j < vowelArray.length; j++){
      if (word.charAt([i]) !== vowelArray[j]) {
      } else {
        return word.slice([i]) + word.slice(0,[i]) + "ay";
      }
    }
  }
}
