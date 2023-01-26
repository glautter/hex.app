import { Component, ErrorHandler, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { DisplayMessage, PessoaModel } from '../Models/pessoa.model';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {
  public pessoas: PessoaModel[] = [];

  @Input() usePessoa!: { id: number, nome: string, idade: number, cpf: string, estadoCivil: number, cidade: string, estado: string };

  constructor(private pessoaService: PessoaService) {
  }

  public modoInsercao = true;
  public displayMessage: DisplayMessage = {};

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas() {
    this.pessoaService.getAll().subscribe({
      next: (p) => this.pessoas.push(...p),
      error: (err) => new ErrorHandler,
      complete: () => console.log('completed')
    });
  }
  
  getPessoaById(id: number) {
    this.pessoaService.getById(id).subscribe((response) => {
      console.log("Aqui getId");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

      this.usePessoa.id = response.id;
      this.usePessoa.nome = response.nome;
      this.usePessoa.idade = response.idade;
      this.usePessoa.cpf = response.cpf;
      this.usePessoa.cidade = response.cidade;
      this.usePessoa.estado = response.estado;
    });
  }

  clear() {
    this._resetForm();
    this.displayMessage = {};
    this.modoInsercao = true;
  }

  private _resetForm() {
    // this.userForm.reset();
  }

  public submit(): void {

  }
}
