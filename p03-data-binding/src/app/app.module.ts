import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, MeuPrimeiro2Component],
  imports: [BrowserModule,FormsModule,HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
