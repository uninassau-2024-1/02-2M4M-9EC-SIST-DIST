import { Component, OnInit } from '@angular/core';
import { CepService } from '../../cep.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  cep!: string;
  cepInfo: any;

  constructor(private cepService: CepService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  consultarCEP() {
    this.cepService.consultarCEP(this.cep).subscribe(
      (data) => {
        this.cepInfo = data;
      },
      (error) => {
        console.error('Erro ao consultar CEP:', error);
      }
    );
  }

}
