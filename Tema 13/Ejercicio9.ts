// Convierte texto a mayúsculas con validaciones
function toUpperSeguro(valor: unknown): string {
  if (typeof valor === "string"  && valor.trim()!="") {
    if (!isNaN(Number(valor))) {
      throw new Error("No es texto");
    }
    return valor.toUpperCase();

  }else {
    throw new Error("El texto no puede estar vacio");
  }
  
}

// Procesa entrada de texto con conversión
function Ejercicio9(): void {
  (document.getElementById("outEj9") as HTMLElement).textContent ="";
  let output:string = "";
  const entrada:unknown = (document.getElementById("ej9element")as HTMLInputElement).value;
  try {
    output = toUpperSeguro(entrada) + "\n";
    
  } catch (error) {
    if (error instanceof Error) {
      output = "Error: " + error.message;
    }
  }

  (document.getElementById("outEj9") as HTMLElement).textContent = output;
}
