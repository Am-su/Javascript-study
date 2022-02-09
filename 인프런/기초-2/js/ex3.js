$(document).ready(function(){
  //배열로 입력받음
  var $images = $("#container1 img");

  $("#btnStart").click(function(){
    var length = $images.length;

    for(var i=0;i<length;i++){
      var $img = $images.eq(i);
      var x = 100+((i%3) * 200);
      var y = 100+(parseInt(i/3) * 200);

      $img.css({
        left:x,
        top:y
      })
    }
  })
})