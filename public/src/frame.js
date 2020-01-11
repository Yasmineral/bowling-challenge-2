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

  isSpare() {
    if ((this.getScore() === 10) && this.frameScore[0] !== 10) {
      return true;
    }
    return false;
  }
}
