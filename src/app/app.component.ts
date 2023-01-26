import { Component, Input, Output } from '@angular/core';
import { PessoaService } from './pessoa-form/pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hexagon';
  @Input() usePessoaFilho!: { id: number, nome: string, idade: number, cpf: string, estadoCivil: number, cidade: string, estado: string };
  @Input() usePessoa!: { id: number, nome: string, idade: number, cpf: string, estadoCivil: number, cidade: string, estado: string };

  constructor(private pessoaService: PessoaService) {}
}
