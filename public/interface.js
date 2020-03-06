$(document).ready(function(){
  var game = new Game()

  $('select#frameOne_roll_1').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameOne_roll_2').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameTwo_roll_1').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameTwo_roll_2').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameThree_roll_1').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameThree_roll_2').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameFour_roll_1').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameFour_roll_2').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameFive_roll_1').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameFive_roll_2').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameSix_roll_1').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameSix_roll_2').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameSeven_roll_1').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameSeven_roll_2').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameEight_roll_1').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameEight_roll_2').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameNine_roll_1').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameNine_roll_2').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameTen_roll_1').change(function(e){
    game.roll(parseInt(e.target.value))
    // if (parseInt(e.target.value) === 10) {
    //   game.score()
    //   $('#total h1').append(game.totalScore)
    // }
  })

  $('select#frameTen_roll_2').change(function(e){
    game.roll(parseInt(e.target.value))
  })

  $('select#frameTen_roll_3').change(function(e){
    game.roll(parseInt(e.target.value))
    game.score()
    $('#total h1').append(game.totalScore)
  })
})
