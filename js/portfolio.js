var showFoto = document.getElementById("hoofdAfbeelding")

var eersteFoto = document.querySelector(".eersteFoto")
var tweedeFoto = document.querySelector(".tweedeFoto")
var derdeFoto = document.querySelector(".derdeFoto")

eersteFoto.addEventListener("click", toggleFotoStandaard)

function toggleFotoStandaard(){
  showFoto.src = "images/ik.jpeg";
}

tweedeFoto.addEventListener("click", toggleFoto1)

function toggleFoto1(){
  showFoto.src = "images/joep.jpeg";
}

derdeFoto.addEventListener("click", toggleFoto2)

function toggleFoto2(){
  showFoto.src = "images/vliegtuig.jpeg";
}
