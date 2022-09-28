import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/contact/page/contact.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { PresupuestoComponent } from './modules/presupuesto/presupuesto/presupuesto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'equipo',
    loadChildren: () =>
      import('./modules/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'soluciones',
    loadChildren: () =>
      import('./modules/solutions/solutions.module').then(
        (m) => m.SolutionsModule
      ),
  },
  {
    path: 'proyectos',
    loadChildren: () =>
      import('./modules/resources/resources.module').then(
        (m) => m.ResourcesModule
      ),
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
  {
    path: 'presupuesto',
    loadChildren: () =>
    import('./modules/presupuesto/presupuesto.module').then(
      (m) => m.PresupuestoModule
    ),
  },
  {
    path: 'legal',
    loadChildren: () =>
    import('./modules/legal/legal.module').then(
      (m) => m.LegalModule
    ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
