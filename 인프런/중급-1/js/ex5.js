function newRegister(){
  var newP = document.createElement("p");
  var userName = document.querySelector("#userName");
  var text = document.createTextNode(userName.value);
  newP.appendChild(text);

  var nameList = document.querySelector("#nameList");
  nameList.appendChild(newP);
  userName.value = "";
}