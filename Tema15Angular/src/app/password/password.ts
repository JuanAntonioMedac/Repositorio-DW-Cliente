import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  imports: [FormsModule],
  templateUrl: './password.html',
  styleUrl: './password.css',
})
export class Password {
  length: number = 10;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;
  generatedPassword: string = '';
  showError: boolean = false;

  generatePassword(): void {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedChars = '';
    if (this.includeUppercase) allowedChars += uppercaseChars;
    if (this.includeLowercase) allowedChars += lowercaseChars;
    if (this.includeNumbers) allowedChars += numberChars;
    if (this.includeSymbols) allowedChars += symbolChars;

    if (allowedChars === '') {
      this.generatedPassword = '';
      this.showError = true;
      return;
    }
    this.showError = false;

    let password = '';
    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
    this.generatedPassword = password;
  }

  copyToClipboard(): void {
    if (this.generatedPassword) {
      navigator.clipboard.writeText(this.generatedPassword).then(() => {
        alert('Contraseña copiada al portapapeles');
      });
    }
  }
}
