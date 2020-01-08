class Frame {
  constructor() {
    this.score = []
  }

  roll(totalPins) {
    this.score.push(totalPins)
  }

  getScore() {
    return this.score
  }
}