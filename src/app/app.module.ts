import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'pessoa-form', component: PessoaFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PessoaFormComponent,
    CadastroPessoaComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
