import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalComponent } from './components/legal/legal.component';
import { PoliticaDeCookiesComponent } from './components/politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './components/politica-de-privacidad/politica-de-privacidad.component';

const routes: Routes = [
  {
    path: '',
    component: PoliticaDePrivacidadComponent,
  },
  {
    path: 'aviso-legal',
    component: LegalComponent,
  },
  {
    path: 'politica-de-privacidad',
    component: PoliticaDePrivacidadComponent,
  },
  {
    path: 'politica-de-cookies',
    component: PoliticaDeCookiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalRoutingModule {}
