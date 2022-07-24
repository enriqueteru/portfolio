import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { TeamRoutingModule } from './team.routing.module';

@NgModule({
  declarations: [TeamPageComponent],
  imports: [CommonModule, TeamRoutingModule],
})
export class TeamModule {}
