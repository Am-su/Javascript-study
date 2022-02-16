var mRect = document.querySelector("#rect");

mRect.addEventListener("mouseover",function(){
  mRect.style.background = "red";
  mRect.style.borderRadius = "50%";
})

mRect.addEventListener("mouseout",function(){
  mRect.style.background = "";
  mRect.style.borderRadius = "";
})