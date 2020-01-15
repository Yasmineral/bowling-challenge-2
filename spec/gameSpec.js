//'use strict';

describe ("Game", function() {
  beforeEach(function() {
    game = new Game()
  })

  // it("when rolling all zeros, the total score is 0", function() {
  //   var i;
  //   for (i = 0; i < 20; i++) {
  //     game.roll(0)
  //   }
  //   expect(game.score()).toEqual(0)
  // })
  // it("when rolling all ones, the total score is 20", function() {
  //   var i;
  //   for (i = 0; i < 20; i++) {
  //     game.roll(1)
  //   }
  //   expect(game.score()).toEqual(20)
  // })
  // it("when rolling a spare, the next roll is added as a bonus to the overall score", function() {
  //   game.roll(5)
  //   game.roll(5)
  //   game.roll(3)
  //   var i;
  //   for (i = 0; i < 17; i++) {
  //     game.roll(0)
  //   }
  //   expect(game.score()).toEqual(16)
  // })
  it("when rolling a strike, the next two rolls are added as a bonus to the overall score", function() {
    game.roll(10)
    game.roll(3)
    game.roll(4)
    var i;
    for (i = 0; i < 18; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(24)
  })
})
