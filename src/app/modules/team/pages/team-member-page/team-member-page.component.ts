import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { team } from 'src/app/core/schema/data';
import { ServerService } from 'src/app/core/service/server.service';

@Component({
  selector: 'app-team-member-page',
  templateUrl: './team-member-page.component.html',
  styleUrls: ['./team-member-page.component.scss'],
})
export class TeamMemberPageComponent implements OnInit {
  id?: any;
  user!: team;

  constructor(private _r: ActivatedRoute, private _ss: ServerService) {}

  ngOnInit(): void {
    this.id = this._r.snapshot.params['id'];
    this._ss.getUser(this.id).subscribe((user) => {
      if (user) {
        this.user = user.user;
      }
    });
  }

  setUrl(url: string): string {
    return `https://${url}`;
  }
  setEmail(email: string): string {
    return `mailto:${email}`;
  }
}
