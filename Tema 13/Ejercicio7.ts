// Define las características de un empleado
interface Empleado {
  id: number;
  nombre: string;
  sueldoMensual: number;
}

// Implementación de un empleado empresarial
class EmpleadoEmpresa implements Empleado {
  constructor(
    public id: number,
    public nombre: string,
    public sueldoMensual: number
  ) {}

  sueldoAnual(): number {
    return this.sueldoMensual * 12;
  }
}

// Muestra información del sueldo anual
function Ejercicio7(): void {
  (document.getElementById("outEj7") as HTMLElement).innerText ="";
  const e = new EmpleadoEmpresa(1, "Ana", 2000);
 (document.getElementById("outEj7") as HTMLElement).innerText = "Sueldo anual: " + e.sueldoAnual();
 console.log("Sueldo anual: " + e.sueldoAnual());
}
