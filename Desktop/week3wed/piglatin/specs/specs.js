
describe("pigLatin", function(){
    it("will detect if the word begins with a vowel and adds 'ay'", function(){
      expect(pigLatin("orange")).to.equal("orangeay");
    });
    it("will detect if the word begins with qu and moves qu to the end and adds 'ay'", function(){
      expect(pigLatin("quit")).to.equal("itquay");
    });
    it("will detect if the word begins with consonants moves them to the end and adds 'ay'", function(){
      expect(pigLatin("coffee")).to.equal("offeecay");
    });
    it("will detect if the word begins with consonants moves them to the end and adds 'ay'", function(){
      expect(pigLatin("pig")).to.equal("igpay");
    });
});
