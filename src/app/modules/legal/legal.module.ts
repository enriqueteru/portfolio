import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalComponent } from './components/legal/legal.component';
import { PoliticaDePrivacidadComponent } from './components/politica-de-privacidad/politica-de-privacidad.component';
import { PoliticaDeCookiesComponent } from './components/politica-de-cookies/politica-de-cookies.component';
import { LegalRoutingModule } from './legal-routing.module';



@NgModule({
  declarations: [
    LegalComponent,
    PoliticaDePrivacidadComponent,
    PoliticaDeCookiesComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule
  ]
})
export class LegalModule { }
