
var vowel = function(word) {
  // var vowels = ["a", "e", "i", "o", "u"]
  if(word[0] ==="a" || word[0] ==="e" || word[0] ==="i" || word[0] ==="o" || word[0] ==="u") {
    return (word + "ay");
  };
};

var consonant = function(word) {
  // var firstLetter = word.charAt(0);
  // var secondLetter = word.charAt(1)
  if ((word[0] !== "a" || word[0] !=="e" || word[0] !=="i" || word[0] !=="o" || word[0] !=="u") && (word[1] !=="a" || word[1] !=="e" || word[1] !=="i" || word[1] !=="o" || word[1] !=="u")) {
    return word.slice(2) + word.slice(0,2) + "ay";
  };
};
