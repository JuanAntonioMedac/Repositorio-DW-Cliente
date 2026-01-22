// Estructura para datos estudiantiles
interface Alumno {
  id: number;
  nombre: string;
  notas: number[];
}

// Gestión de información académica
class AlumnoApp implements Alumno {
  constructor(
    public id: number,
    public nombre: string,
    public notas: number[]
  ) {}

  notaMedia(): number {
    const suma = this.notas.reduce((a, b) => a + b, 0);
    return suma / this.notas.length;
  }

  resumen(): string {
    let output:string = `${this.nombre} ||Notas:`;

    this.notas.forEach( nota=> {
      output += ` ${nota}`;
    });


    output+= `||Media: ${this.notaMedia().toFixed(2)}`;
    return output;
  }
}

// Ejecuta cálculos y muestra resultados
function Ejercicio10(): void {
  (document.getElementById("outEj10") as HTMLElement).innerText ="";
  const alumnos = [
    new AlumnoApp(1, "María", [8, 9, 7]),
    new AlumnoApp(2, "Pedro", [6, 7, 5]),
    new AlumnoApp(3, "Lucía", [9, 10, 8])
  ];

  let output:string = "";
  alumnos.forEach(a => output += a.resumen() + "\n");

  const mediaGlobal:number = alumnos.reduce((acc, media) => acc + media.notaMedia(), 0) / alumnos.length;
  output += "\nMedia global: " + mediaGlobal.toFixed(2);

  (document.getElementById("outEj10") as HTMLElement).innerText = output;
}
