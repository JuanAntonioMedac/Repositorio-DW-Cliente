function Ejercicio3() {
    document.getElementById("outEj3").innerHTML = "";
    var a = document.getElementById("ej3nombre").value;
    if (a === "") {
        saludar();
    }
    else {
        saludar(a);
    }
}
function saludar(a) {
    document.getElementById("outEj3").innerHTML += "Hola " + (a !== null && a !== void 0 ? a : "invitado");
}
