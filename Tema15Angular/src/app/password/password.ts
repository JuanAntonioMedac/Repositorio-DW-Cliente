import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  imports: [FormsModule],
  templateUrl: './password.html',
  styleUrl: './password.css',
})
export class Password {
  longitud: number = 10;
  incluirMayusculas: boolean = true;
  incluirMinusculas: boolean = true;
  incluirNumeros: boolean = true;
  incluirSimbolos: boolean = true;
  contrasenaGenerada: string = '';
  mostrarError: boolean = false;

  generarContrasena(): void {
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numerosChars = '0123456789';
    const simbolosChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let caracteresPermitidos = '';
    if (this.incluirMayusculas) caracteresPermitidos += mayusculas;
    if (this.incluirMinusculas) caracteresPermitidos += minusculas;
    if (this.incluirNumeros) caracteresPermitidos += numerosChars;
    if (this.incluirSimbolos) caracteresPermitidos += simbolosChars;

    if (caracteresPermitidos === '') {
      this.contrasenaGenerada = '';
      this.mostrarError = true;
      return;
    }
    this.mostrarError = false;

    let contrasena = '';
    for (let i = 0; i < this.longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
      contrasena += caracteresPermitidos[indiceAleatorio];
    }
    this.contrasenaGenerada = contrasena;
  }

  copiarAlPortapapeles(): void {
    if (this.contrasenaGenerada) {
      navigator.clipboard.writeText(this.contrasenaGenerada).then(() => {
        alert('Contraseña copiada al portapapeles');
      });
    }
  }
}
