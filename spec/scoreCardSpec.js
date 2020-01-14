describe ("scoreCard", function() {
  beforeEach(function(){
    scoreCard = new scoreCard();
  }) 
  describe("#addScore", function() {
    var frame = {
      frameScore: [4,5]
    }
    it("adds an array of scores to the main allScores array", function() {
      scoreCard.addScore(frame)
      expect(scoreCard.allScores[0]).toEqual([4,5])
    })
  })
  // describe("#spareBonus", function() {
  //   var frame1 = {
  //     frameScore: [5,5]
  //   }
  //   var frame2 = {
  //     frameScore: [5, 0]
  //   }
  //   it("total from the next roll is added to the total from the last frame", function() {
  //     expect(scoreCard.getTotalScore()).toEqual(20)
  //   })
  // })
})