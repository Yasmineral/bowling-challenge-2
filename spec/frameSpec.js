'use strict';

describe("Frame", function() {
  let frame;
  beforeEach(function(){
     frame = new Frame();
  })
  describe("#roll", function() {
    it("Rolling adds to the frame score array", function() {
      frame.roll(7);
      expect(frame.frameScore).toEqual([7]);
    })
    it("second roll adds final number to the scores array", function() {
      frame.roll(7)
      frame.roll(5)
      expect(frame.frameScore).toEqual([7,5])
    })
  })
  describe("#getScore", function() {
    it("returns the total score for the frame", function() {
      frame.roll(7)
      frame.roll(1)
      expect(frame.getScore()).toEqual(8)
    })
  })
  describe("#isSpare", function() {
    it("returns true if total number of knocked pins accross two rolls equals 10", function() {
      frame.roll(5)
      frame.roll(5)
      expect(frame.isSpare()).toEqual(true)
    })
    it("returns false if the two rolls do not equal 10", function(){
      frame.roll(1)
      frame.roll(1)
      expect(frame.isSpare()).toEqual(false)
    })
  })
  describe("#isStrike", function() {
    it("returns true if the first roll scores 10 pins", function() {
      frame.roll(10)
      expect(frame.isStrike()).toEqual(true)
    })
  })
})

