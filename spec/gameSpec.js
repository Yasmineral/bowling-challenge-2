//'use strict';

describe ("Game", function() {
  beforeEach(function() {
    game = new Game()
  })
  it("when rolling all zeros, the total score is 0", function() {
    var i;
    for (i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.totalScore).toEqual(0)
  })
  it("when rolling all ones, the total score is 20", function() {
    var i;
    for (i = 0; i < 20; i++) {
      game.roll(1)
    }
    expect(game.totalScore).toEqual(20)
  })
})
