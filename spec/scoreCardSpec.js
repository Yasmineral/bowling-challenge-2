describe ("scoreCard", function() {
  beforeEach(function(){
    scoreCard = new scoreCard();
  }) 
  describe("#addScore", function() {
    var frame = {
      frameScore: [4,5]
    }
    it("adds the scores from both rolls of the frame", function() {
      scoreCard.addScore(frame)
      expect(scoreCard.allScores).toEqual([[4,5]])
    })
  })
})