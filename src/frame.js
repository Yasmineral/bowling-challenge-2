class Frame {
  constructor() {
    this.score = 0
  }

  roll(totalPins) {
    this.score += totalPins
  }

  getScore() {
    return this.score
  }
}