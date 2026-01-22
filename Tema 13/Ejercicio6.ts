// Clase que representa a una persona
class Persona {
  public nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse(): string {
    return `${this.nombre} tiene ${this.edad} años`;
  }
}

// Presenta información de una persona
function Ejercicio6(): void {
   (document.getElementById("outEj6") as HTMLElement).innerHTML ="";
  const p = new Persona("Juan", 25);
  const out = p.presentarse();

  (document.getElementById("outEj6") as HTMLElement).innerHTML = out;
  // console.log(p.edad); // Error: La propiedad 'edad' es privada y solo es accesible dentro de la clase 'Persona'.
}
