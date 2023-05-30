import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    NgxMaskModule.forRoot()
  ]
})
export class ContatoModule { }
