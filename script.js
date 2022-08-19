var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");/* */
var cajaResolucion = document.getElementById("seccionSinResolver");
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


/*function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter",]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        
    }
    return stringEncriptada;
}

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = textoEncriptado;
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");
}*/