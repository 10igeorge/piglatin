describe('vowel', function(){
    it("adds 'ay' to the end of words that start with a vowel", function(){
      expect(vowel("orange")).to.equal("orangeay");
    });
});

describe('consonant', function(){
    it("takes all consonants before the first vowel in the word and moves them to the back of the word and add ay subsequently", function(){
      expect(consonant("tray")).to.equal("aytray");
    });
});
