$(document).ready(function(){
  
  $('select#roll_1').change(function(e){
    if(e.target.value > 5) {
      alert(e.target.value + ", fab!");
    } else {
      alert(e.target.value + ", rubbish!")
    }
  })
  $('select#roll_2').change(function(e){
    if(e.target.value > 5) {
      alert(e.target.value + ", fab!");
    } else {
      alert(e.target.value + ", rubbish!")
    }
  })
})
