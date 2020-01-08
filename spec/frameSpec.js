'use strict';

describe("Frame", function() {
  let frame;
  beforeEach(function(){
     frame = new Frame();
  })
  describe("#roll", function() {
    it("Rolling adds to the frame score array", function() {
      frame.roll(7);
      expect(frame.score).toEqual([7]);
    })
    it("A second roll adds another number to the scores array", function() {
      frame.roll(7)
      frame.roll(5)
      expect(frame.score).toEqual([7,5])
    })
  })
  describe("#getScore", function() {
    it("returns the total score for the frame", function() {
      frame.roll(7)
      frame.roll(1)
      expect(frame.getScore()).toEqual(8)
    })
  })
})

