class scoreCard {
  constructor() {
    this.allScores = []
  }

  addScore(frame) {
    this.allScores.push(frame.frameScore)
  }
   
}