import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { TeamRoutingModule } from './team.routing.module';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamMemberPageComponent } from './pages/team-member-page/team-member-page.component';

@NgModule({
  declarations: [
    TeamPageComponent,
    TeamMemberComponent,
    TeamMemberPageComponent,
  ],
  imports: [CommonModule, TeamRoutingModule, SharedModule, HttpClientModule],
})
export class TeamModule {}
