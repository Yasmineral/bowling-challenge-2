'use strict';

describe("Frame", function() {

  describe("#roll", function() {
    it("Rolling adds to the frame score", function() {
      let frame = new Frame();
      frame.roll(7);
      expect(frame.getScore()).toBe(7);
    })
  })
})

