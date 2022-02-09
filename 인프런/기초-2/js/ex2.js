var $earth = null;

$(document).ready(function(){
  initialize();
  getXY();
},5000)

//초기화
function initialize(){
  $earth = $("#earth");
}

//clickevent
function getXY(){
  $("#btnStart").click(function(){
    var x = parseInt($("#txtX").val());
    var y = parseInt($("#txtY").val());
    moveEarth(x,y);
  })
}

//move img
function moveEarth(x,y){
  if((x>=0 && x<=500) && (y>=0 && y<=400)){
    $earth.css({
      left:x,
      top:y
    })
  }
  else{
    alert("입력된 값이 범위를 벗어났습니다.");
  }
}