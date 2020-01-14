//'use strict';

describe ("Game", function() {
  beforeEach(function() {
    game = new Game()
  })
  it("when rolling zero 20 times, the total score is 0", function() {
    var i;
    for (i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.totalScore).toEqual(0)
  })
})
