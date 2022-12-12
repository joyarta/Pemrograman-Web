function pilih_tema() {
  var	Tema = document.getElementById('tema').value;
  if (Tema == "hitam"){
    document.body.style.background = "black";
    document.body.style.color = "white";
  }else{
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
}