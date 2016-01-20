describe("vowel", function(){
    it("will detect if the word begins with a vowel and adds 'ay'", function(){
      expect(vowel("orange")).to.equal("orangeay");
    });
});
describe("qu", function(){
    it("will detect if the word begins with qu and moves qu to the end and adds 'ay'", function(){
      expect(qu("quit")).to.equal("itquay");
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
