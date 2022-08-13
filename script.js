var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var asideCompleto = document.getElementById("asideCompleto");
var textoClave = document.getElementById("textoClave");
var mensaje = document.getElementById("mensaje");

function desaparecer() {
    asideCompleto.style.display = "none";
    textoClave.style.display = "";
    textoClave.innerHTML = mensaje.value;
}

function aparecer() {
    document.getElementById("asideCompleto").style.display = "";
    textoClave.style.display = "none";
}

btnEncriptar.onclick = desaparecer;
btnDesencriptar.onclick = aparecer;
