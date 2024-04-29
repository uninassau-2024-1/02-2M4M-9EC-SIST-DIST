import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})
export class LoginComponent {
  Nome: String = '';
  sobreNome: String = '';
  Cep: any ;
  Email: String = '';
  errorMensage: String = '';


  onSubmit(){
    this.Nome = '';
    this.sobreNome = '';
    this.Cep = null;
    this.Email = '';

    if (!this.Cep || this.Cep.length === 0) {
      this.errorMensage = 'CEP inválido';
      return;
    }
  }
}
