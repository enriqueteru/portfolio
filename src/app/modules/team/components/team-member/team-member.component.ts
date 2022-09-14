import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { resApiUsers, team } from 'src/app/core/schema/data';
import { ServerService } from 'src/app/core/service/server.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent implements OnInit {
  resUsers?: resApiUsers;
  teamStaff: team[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.resUsers = this.route.snapshot.data['users'];
    this.teamStaff = this.resUsers!.users;
  }
}
