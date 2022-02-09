$(document).ready(function(){
  var $earth = $("#earth");
  
  $("#btnStart").click(function(){
    var x = parseInt($("#txtX").val());
    var y = parseInt($("#txtY").val());

    if((x>=0 && x<=500) && (y>=0 && y<=400)){
      $earth.css({
        left:x,
        top:y
      })
    }
    else{
      alert("입력된 값이 범위를 벗어났습니다.");
    }
  })
})