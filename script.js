var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");/* */
var cajaResolucion = document.getElementById("seccionSinResolver");
var textoResuelto = document.getElementById("textoResuelto");
var seccionTextoResuelto = document.getElementById("seccionTextoResuelto");
var codigoBase = document.getElementById("codigoBase");

//Eventos
function fEncriptar() {

    //Valida que se muestre la imagen cuando sea necesario
    if(codigoBase.value != ""){

        //Encriptar y convertir a minuscula
        const textoEncriptado = encriptar(codigoBase.value);
        
        //Ocultar, mostrar y aplicar formato en cajas de texto
        textoResuelto.value = textoEncriptado;
        cajaResolucion.style.display = "none";
        seccionTextoResuelto.style.display = "";
        codigoBase.value = "";

    } else {

        cajaResolucion.style.display = "";
        seccionTextoResuelto.style.display = "none";

    }

}

function fDesencriptar() {

    //Valida que se muestre la imagen cuando sea necesario
    if(codigoBase.value == ""){

        cajaResolucion.style.display = "";
        seccionTextoResuelto.style.display = "none";

    }  else {

        //Encriptar y convertir a minuscula
        const textoDesencriptado = desencriptar(codigoBase.value);
        
        //Ocultar, mostrar y aplicar formato en cajas de texto
        textoResuelto.value = textoDesencriptado;
        cajaResolucion.style.display = "none";
        seccionTextoResuelto.style.display = "";
        codigoBase.value = "";

    }

}

function fCopiar() {

    textoResuelto.select();
    navigator.clipboard.writeText(textoResuelto.value);

}

//Calculo de cifrados

function encriptar(stringEncriptada) {

    var diccionario = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (var i = 0; i < diccionario.length; i++) {

        if (stringEncriptada.includes(diccionario[i][0])) {

            stringEncriptada = stringEncriptada.replaceAll(diccionario[i][0],diccionario[i][1]);

        }
        
    }

    return stringEncriptada;

}

function desencriptar(stringDesencriptada) {

    var diccionario = [["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (var i = 0; i < diccionario.length; i++) {

        if (stringDesencriptada.includes(diccionario[i][0])) {

            stringDesencriptada = stringDesencriptada.replaceAll(diccionario[i][0],diccionario[i][1]);

        }
        
    }

    return stringDesencriptada;

}

btnEncriptar.onclick = fEncriptar;
btnDesencriptar.onclick = fDesencriptar;
btnCopiar.onclick = fCopiar;