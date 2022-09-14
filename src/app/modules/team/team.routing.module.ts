import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamMemberPageComponent } from './pages/team-member-page/team-member-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { TeamResolverService } from './team.resolver';

const routes: Routes = [
  {
    path: '',
    component: TeamPageComponent,
    resolve: {
      users: TeamResolverService,
    },
  },
  {
    path: ':id',
    component: TeamMemberPageComponent,
    resolve: {
      users: TeamResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
