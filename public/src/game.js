class Game {
  constructor() {
    this.totalScore = 0
    this.rolls = []
    this.currentRoll = 0
    this.maxPoints = 10
    this.maxRolls = 19
  }
 
  roll(pins) {
    this.rolls[this.currentRoll] = pins
    this.currentRoll += 1
  }

  score() {
    let frameIndex = 0
    let frame
    for (frame = 0; frame < 10; frame++) {
      if (this.isSpare(frameIndex)) {
        this.totalScore += this.maxPoints + this.spareBonus(frameIndex)
        frameIndex += 2
      } else if (this.isStrike(frameIndex)) {
        this.totalScore += this.maxPoints + this.strikeBonus(frameIndex)
        frameIndex += 1
      } else {
        this.totalScore += this.sumOfFrame(frameIndex)
        frameIndex += 2
      }
  }
    return this.totalScore
  }

  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
  }

  spareBonus(frameIndex) {
    return this.rolls[frameIndex + 2]
  }

  isStrike(frameIndex) {
    return this.rolls[frameIndex] === 10
  }
  
  strikeBonus(frameIndex) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]
  }

  sumOfFrame(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  }
}

