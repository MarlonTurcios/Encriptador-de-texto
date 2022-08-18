var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");/* */
var cajaResolucion = document.getElementById("cajaResolucion");
var textoResuelto = document.getElementById("textoResuelto");
var seccionTextoResuelto = document.getElementById("seccionTextoResuelto");
var codigoBase = document.getElementById("codigoBase");

function desaparecer() {
    cajaResolucion.style.display = "none";
    seccionTextoResuelto.style.display = "";
    textoResuelto.value = codigoBase.value;
}

function aparecer() {
    cajaResolucion.style.display = "";
    seccionTextoResuelto.style.display = "none";
}

btnEncriptar.onclick = desaparecer;
btnDesencriptar.onclick = aparecer;
