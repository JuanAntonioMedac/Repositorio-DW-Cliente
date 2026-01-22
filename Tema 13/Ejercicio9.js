function toUpperSeguro(valor) {
    if (typeof valor === "string" && valor.trim() != "") {
        if (!isNaN(Number(valor))) {
            throw new Error("No es texto");
        }
        return valor.toUpperCase();
    }
    else {
        throw new Error("El texto no puede estar vacio");
    }
}
function Ejercicio9() {
    document.getElementById("outEj9").textContent = "";
    var output = "";
    var entrada = document.getElementById("ej9element").value;
    try {
        output = toUpperSeguro(entrada) + "\n";
    }
    catch (error) {
        if (error instanceof Error) {
            output = "Error: " + error.message;
        }
    }
    document.getElementById("outEj9").textContent = output;
}
