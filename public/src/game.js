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
      this.totalScore += this.rolls[frameIndex] + this.rolls[frameIndex + 1]
      if (this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10) {
        this.totalScore += this.rolls[frameIndex + 2]
      }
      frameIndex += 2
    }
    return this.totalScore
  }
}

