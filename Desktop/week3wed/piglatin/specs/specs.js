describe("vowel", function(){
    it("will detect if the word begins with a vowel and adds 'ay'", function(){
      expect(vowel("orange")).to.equal("orangeay");
    });
});
describe("pigLatin", function(){
    it("will detect a consonant before qu and moves the consonant and qu to the end and add 'ay'", function(){
      expect(pigLatin("slay")).to.equal("ayslay");
    });
});
describe("qu", function(){
    it("will detect if the word begins with qu and moves qu to the end and adds 'ay'", function(){
      expect(qu("Quit")).to.equal("itquay");
    });
});
describe("consonant", function(){
    it("will detect if the word begins with consonants moves them to the end and adds 'ay'", function(){
      expect(consonant("coffee")).to.equal("offeecay");
    });
    it("will detect if the word begins with consonants moves them to the end and adds 'ay'", function(){
      expect(consonant("pig")).to.equal("igpay");
    });
});
