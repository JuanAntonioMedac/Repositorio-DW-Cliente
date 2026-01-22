// Duplica un número si es válido
function doblarPositivo(n: number): number {
  if (n <= 0) throw new Error("El número no puede ser negativo o 0");
  return n * 2;
}

// Procesa un número y calcula su doble
function Ejercicio8(): void {
   (document.getElementById("outEj8") as HTMLElement).innerText ="";
  let entrada:string = (document.getElementById("ej8numero")as HTMLInputElement).value;
  let numero:number = Number(entrada);
  let output : string= "";
  try {
    output += `${numero} -> ` + doblarPositivo(numero) + "\n";
  } catch (error: any) {
    output += "Error: " + error.message;
  }

  (document.getElementById("outEj8") as HTMLElement).innerText = output;
}
