import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { proyect, resApiResources } from 'src/app/core/schema/data';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  resProyects?: resApiResources;
  proyects?: proyect[]

  constructor( private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.resProyects = this.route.snapshot.data['proyects'];
    this.proyects = this.resProyects!.proyects;

    console.log(this.proyects)
  }
}
