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
    it("Rolling a second time adds a nother number to the scores array", function() {
      frame.roll(7)
      frame.roll(5)
      expect(frame.score).toEqual([7,5])
    })
  })
})

