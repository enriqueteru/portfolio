import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceComponent } from './pages/resource/resource.component';
import { ResourcesComponent } from './pages/resources.component';
import { ResourceResolverService } from './resource.resolver';
import { ResourcesResolverService } from './resources.resolver';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    resolve: {
      proyects: ResourcesResolverService,
    },
  },
  {
    path: ':id',
    component: ResourceComponent,
    resolve: {
      proyect: ResourceResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
