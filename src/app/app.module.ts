import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentesModule } from './componentes/componentes.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [

    ComponentesModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
