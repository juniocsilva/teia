import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './view/cabecalho/cabecalho.component';
import { ConteudoComponent } from './view/conteudo/conteudo.component';
import { RodapeComponent } from './view/rodape/rodape.component';
import { LayoutComponent } from './view/layout/layout.component';
import { FotosComponent } from './fotos/fotos.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CabecalhoComponent,
    ConteudoComponent,
    RodapeComponent,
    LayoutComponent,
    FotosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DataTablesModule
  ],
  exports: [
    CabecalhoComponent,
    ConteudoComponent,
    RodapeComponent,
    LayoutComponent
  ]
})
export class ComponentesModule { }
