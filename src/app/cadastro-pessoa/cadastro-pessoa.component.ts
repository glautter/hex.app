import { AfterViewInit, Component, Input } from '@angular/core';
import { PessoaModel } from '../Models/pessoa.model';
import { PessoaService } from '../pessoa-form/pessoa.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements AfterViewInit {
  @Input() usePessoaFilho!: { id: number, nome: string, idade: number, cpf: string, estadoCivil: number, cidade: string, estado: string };


  public pessoas: PessoaModel[] = [];
  public useForm: FormGroup;

  constructor(private pessoaService: PessoaService,
    private fb: FormBuilder) {

    this.useForm = this.fb.group({
      id: [0],
      nome: ['', [Validators.required]],
      idade: [0, [Validators.required, Validators.min(0)]],
      cpf: ['', [Validators.required]],
      estadoCivil: [0, [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });

  }

  ngAfterViewInit(): void {
    this.useForm.setValue(
      {
        id: this.usePessoaFilho.id,
        nome: this.usePessoaFilho.nome,
        idade: this.usePessoaFilho.idade,
        cpf: this.usePessoaFilho.cpf,
        estadoCivil: this.usePessoaFilho.estadoCivil,
        cidade: this.usePessoaFilho.cidade,
        estado: this.usePessoaFilho.estado
      }
    )
  }

  public onSubmit() {
    let data = this.useForm.value;
    
    if (data.id > 0) {
      this.pessoaService.update(data).subscribe();
    }
    else {
      this.pessoaService.add(data).subscribe();
    }
  }

  getPessoaById(id: number) {
    this.pessoaService.getById(id).subscribe((response) => {
      this.useForm.setValue(
        {
          id: response.id,
          nome: response.nome,
          idade: response.idade,
          cpf: response.cpf,
          estadoCivil: response.estadoCivil,
          cidade: response.cidade,
          estado: response.estado
        }
      )
    });
  }
}
