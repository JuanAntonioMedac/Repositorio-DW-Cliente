function Ejercicio2() {
    var a = document.getElementById("ej2num1").value;
    var b = document.getElementById("ej2num2").value;
    var html = media(Number(a), Number(b));
    try {
        var salida = document.getElementById("outEj2");
        if (salida) {
            salida.innerHTML = html.toString();
        }
    }
    catch (error) {
        alert(error);
    }
}
function media(a, b) {
    return (a + b) / 2;
}
