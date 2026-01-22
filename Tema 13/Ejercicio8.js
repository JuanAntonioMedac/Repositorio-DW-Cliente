function doblarPositivo(n) {
    if (n <= 0)
        throw new Error("El número no puede ser negativo o 0");
    return n * 2;
}
function Ejercicio8() {
    document.getElementById("outEj8").innerText = "";
    var entrada = document.getElementById("ej8numero").value;
    var numero = Number(entrada);
    var output = "";
    try {
        output += "".concat(numero, " -> ") + doblarPositivo(numero) + "\n";
    }
    catch (error) {
        output += "Error: " + error.message;
    }
    document.getElementById("outEj8").innerText = output;
}
