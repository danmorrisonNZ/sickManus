var manu = function(){
  $("#massive-manu").on("click", function(){
    $("#sick-manu").css("top", "-200px")
    for (i = 0; i < 700; i++ ){
      downwardManu(i)
    }
    var name = $("#name").val()
    $("#manu-alert").text("That was a sick manu " + name + "!")
  })

  function downwardManu(i){
    setTimeout(function(){
      $("#sick-manu").css("top", i+"px")
    },i * 1.5)
  }
}

$(document).ready(manu);
$(document).on('page:load',manu);
