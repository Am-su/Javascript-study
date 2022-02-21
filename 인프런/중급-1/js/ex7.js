var $menu = null;
var $menuName = null;
var $selectedItem = null;

$(document).ready(function(){
  init();
  initEvent();
})

function init(){
  $menu = $("ul.menu");
  $menuName = $("#menuName");
}

function initEvent(){
  $("#add").click(function(){
    addMenu();
  })
  $menu.on("click","li",function(){
    selectItem($(this));
  })
  $("#update").click(function(){
    updateMenuItem();
  })
  $("#remove").click(function(){
    removeMenuItem();
  })
  $("#up").click(function(){
    upMenuItem();
  })
  $("#down").click(function(){
    downMenuItem();
  })
  $("#removeAll").click(function(){
    removeAllMenuItem();
  })
}

function addMenu(){
  var menuName = $menuName.val();
  var newMenuItem = "<li>"+menuName+"</li>";

  if($selectedItem){
    $selectedItem.after(new newMenuItem);
  }
  else{
    $menu.append(newMenuItem);
  }
}

function selectItem($item){
  if($selectedItem != null){
    $selectedItem.removeClass("select");
  }
    $selectedItem = $item;
    $selectedItem.addClass("select");
}

function updateMenuItem(){
  if($selectedItem){
    var menuName = $menuName.val();
    $selectedItem.html(menuName);
    $selectedItem = null;
  }
  else{
    alert("선택메뉴가 존재하지 않습니다.");
  }
}

function removeMenuItem(){
  if($selectedItem){
    $selectedItem.remove();
    $selectedItem = null;
  }
  else{
    alert("선택메뉴가 존재하지 않습니다.");
  }
}

function upMenuItem(){
  if($selectedItem){
    var $prevItem = $selectedItem.prev();
    if($selectedItem){
      $selectedItem.insertBefore($prevItem);
    }
  }
  else{
    alert("선택메뉴가 존재하지 않습니다.");
  }
}

function downMenuItem(){
  if($selectedItem){
    var $nextItem = $selectedItem.next();
    if($selectedItem){
      $selectedItem.insertAfter($nextItem);
    }
  }
  else{
    alert("선택메뉴가 존재하지 않습니다.");
  }
}

function removeAllMenuItem(){
  $menu.html("");
}