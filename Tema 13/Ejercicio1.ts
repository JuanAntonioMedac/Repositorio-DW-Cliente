// Maneja información básica de estudiantes
function Ejercicio1(): void {
  const nombreCentro: string = "Medac";
  let nombreAlumno: string = "Juan Caballero";
  let edad: number = 26;
  let matriculado: boolean = true;
  let notas: number[] = [8.5, 7.2, 9.1, 8.8, 7.5];

  console.log("=== INFORMACIÓN DEL ALUMNO ===");
  console.log(`Centro educativo: ${nombreCentro}`);
  console.log(`Nombre: ${nombreAlumno}`);
  console.log(`Edad: ${edad} años`);
  console.log(`Matriculado: ${matriculado ? "Sí" : "No"}`);
  console.log(`Notas: [${notas.join(", ")}]`);
  console.log(`Promedio de notas: ${(notas.reduce((a, b) => a + b) / notas.length).toFixed(2)}`);
  (document.getElementById("outEj1") as HTMLElement).innerHTML ="";
  (document.getElementById("outEj1") as HTMLElement).innerHTML +=`
  === INFORMACIÓN DEL ALUMNO ===\n
  Centro educativo: ${nombreCentro}\n
  Nombre: ${nombreAlumno}\n
  Edad: ${edad} años\n
  Matriculado: ${matriculado ? "Sí" : "No"}\n
  Notas: [${notas.join(", ")}]\n
  Promedio de notas: ${(notas.reduce((a, b) => a + b) / notas.length).toFixed(2)}`;

}


