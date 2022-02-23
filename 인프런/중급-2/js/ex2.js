var $view = null;
var currentIndex=1;
var timer=0;

$(document).ready(function(){
  init();
  initEvent();
})

function init(){
  $view = $("#view");
}

function initEvent(){
  $("#play").click(function(){
    startAutoPlay();
  })
  $("#stop").click(function(){
    stopAutoPlay();
  })
  $("#prev").click(function(){
    prevImage();
  })
  $("#next").click(function(){
    nextImage();
  })
}

function startAutoPlay(){
  if(timer == 0){
    timer = setInterval(() => {
      nextImage();
    }, 50);
  }
}

function nextImage(){
  var index = currentIndex + 1;
  if(index>60){
    index=1;
  }
  showImage(index);
}

function showImage(index){
  $view.attr("src","images/"+index+".jpg");
  currentIndex=index;
  console.log(currentIndex);
}

function stopAutoPlay(){
  if(timer !=0){
    clearInterval(timer);
    timer=0;
  }
}

function prevImage(){
  var index = currentIndex -1;
  if(index<1){
    index=59;
  }
  showImage(index);
}
function nextImage(){
  var index = currentIndex +1;
  if(index>60){
    index=1;
  }
  showImage(index);
}