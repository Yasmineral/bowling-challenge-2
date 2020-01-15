class Frame {
  constructor() {
  }
}

// class Game {
//   constructor() {
//     this.totalScore = 0
//     this.rolls = []
//     this.currentRoll = 0
//     this.maxPoints = 10
//   }
 
//   roll(pins) {
//     this.rolls[this.currentRoll] = pins
//     this.currentRoll += 1
//   }

//   score() {
//     let frameIndex
//     for (frameIndex = 0; frameIndex < 20;) {
//       if (this.isSpare(frameIndex)) {
//         this.totalScore += this.rolls[frameIndex + 2] + this.rolls[frameIndex] + this.rolls[frameIndex + 1]
//         frameIndex += 2
//       } else if (this.isStrike(frameIndex)) {
//         this.totalScore += this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2] + this.maxPoints
//         frameIndex += 1
//       } else {
//         this.totalScore += this.rolls[frameIndex] + this.rolls[frameIndex + 1]
//         frameIndex += 2
//       }
//     }
//     return this.totalScore
//   }

//   isSpare(frameIndex) {
//     return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
//   }

//   isStrike(frameIndex) {
//     return this.rolls[frameIndex] === 10
//   }
// }


