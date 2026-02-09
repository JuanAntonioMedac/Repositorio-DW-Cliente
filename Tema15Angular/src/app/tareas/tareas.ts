import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  imports: [FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  tareas: { texto: string, completada: boolean }[] = [{ texto: 'Comprar pan', completada: false }, { texto: 'Llamar a mamá', completada: false }, { texto: 'Estudiar Angular', completada: false }];

  get tareasCompletadas(): number {
    return this.tareas.filter(t => t.completada).length;
  }

  get tareasPendientes(): number {
    return this.tareas.filter(t => !t.completada).length;
  }

  nuevaTarea: string = '';
  agregarTarea(): void {
    if (this.nuevaTarea.trim().length > 0) {
      this.tareas.push({ texto: this.nuevaTarea.trim(), completada: false });
      this.guardarTareas();
      this.nuevaTarea = '';
    }
  }
  guardarTareas(): void {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
  cargarTareas(): void {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
    }
  }
  ngOnInit() {
    this.cargarTareas();
  }
  eliminarTarea(indice: number): void {
    this.tareas.splice(indice, 1);
    this.guardarTareas();
  }


}
