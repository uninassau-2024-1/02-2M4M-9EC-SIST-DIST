import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viacep',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [HttpClient],
  templateUrl: './viacep.component.html',
  styleUrls: ['./viacep.component.sass'],
})
export class ViacepComponent {
  cep: string = '';
  endereco: any;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.errorMessage = '';
    this.endereco = null; // Set endereco to null to clear previous data

    if (!this.cep || this.cep.length === 0) {
      this.errorMessage = 'CEP inválido';
      return;
    }

    this.http
      .get(`https://viacep.com.br/ws/${this.cep}/json/`)
      .subscribe((data: any) => {
        if (data.erro) {
          this.errorMessage = data.erro;
        } else {
          this.endereco = data;
        }
      });
  }
}
