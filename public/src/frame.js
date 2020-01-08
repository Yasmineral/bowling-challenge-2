class Frame {
  constructor() {
    this.frameScore = [];
  }

  roll(totalPins) {
    this.frameScore.push(totalPins);
  }

  getScore() {
    return this.frameScore.reduce((a, b) => a + b);
  }
}
