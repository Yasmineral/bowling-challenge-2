class Frame {
  constructor() {
    this.score = [];
  }

  roll(totalPins) {
    this.score.push(totalPins);
  }

  getScore() {
    return this.score.reduce((a, b) => a + b);
  }
}
