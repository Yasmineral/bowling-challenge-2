class Game {
  constructor() {
    this.totalScore = 0
    this.rolls = []
    this.currentRoll = 0
  }
 
  roll(pins) {
    this.rolls[this.currentRoll] = pins
    this.currentRoll += 1
  }

  score() {
    let frameIndex
    for (frameIndex = 0; frameIndex < 20;) {
      if (this.isSpare(frameIndex)) {
        this.totalScore += this.rolls[frameIndex + 2]
      }
      this.totalScore += this.rolls[frameIndex] + this.rolls[frameIndex + 1]
      frameIndex += 2
    }
    return this.totalScore
  }

  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
  }
}

