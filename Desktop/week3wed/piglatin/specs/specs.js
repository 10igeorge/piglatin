describe("vowel", function(){
    it("will detect if the word begins with a vowel and adds 'ay'", function(){
      expect(vowel("orange")).to.equal("orangeay");
    });
});
describe("consonant", function(){
    it("will detect if the word begins with consonants moves them to the end and adds 'ay'", function(){
      expect(consonant("strawberry")).to.equal("awberrystray");
    });
    it("will detect if the word begins with consonants moves them to the end and adds 'ay'", function(){
      expect(consonant("pig")).to.equal("igpay");
    });
});
