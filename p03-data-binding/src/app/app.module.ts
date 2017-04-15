import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  //Componentes, diretivas e pipes
  declarations: [AppComponent, DataBindingComponent, MeuPrimeiro2Component],
  //Outros módulos que serão utilizados nesse módulo ou em algum componente utilizado a esse módulo
  imports: [BrowserModule,FormsModule,HttpModule, CursosModule],
  //Escopo global -> Serviços que ficarão disponíveis para todos os componentes declarados nesse módulo (escopo para a aplicação)
  providers: [],
  //Apenas no módulo raiz da app - qual é o componente que será o container da aplicação
  //Aqui que serão configuradas as rotas, onde o menu da applicação será montado e chamado
  bootstrap: [AppComponent]
})
export class AppModule { }
