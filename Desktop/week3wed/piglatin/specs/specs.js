describe('vowel', function(){
    it("adds 'ay' to the end of words that start with a vowel", function(){
      expect(vowel("apple")).to.equal("appleay");
    });
});
