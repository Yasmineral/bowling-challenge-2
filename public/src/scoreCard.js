class scoreCard {
  constructor() {
    this.allScores = []
    this.currentFrame = 1
  }
 
  getTotalScore() {
    var sum = 0;
    for (var i = 0; i < this.allScores.length; i++) {
      for (var j = 0; j < this.allScores[i].length; j++) {
        sum += this.allScores[i][j];
      }
    }
    return sum
  }

  addScore(frame) {
    return this.allScores.push(frame.frameScore)
  }
}