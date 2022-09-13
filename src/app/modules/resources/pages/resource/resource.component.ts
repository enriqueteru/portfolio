import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { resApiResourcesgallery } from 'src/app/core/schema/data';
import { ServerService } from 'src/app/core/service/server.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent implements OnInit {
  resProyect: any;
  proyect: any;
  backgroundImg: string = '';
  gallery: any;
  params: any;
  constructor(private route: ActivatedRoute, private _ss: ServerService) {}

  ngOnInit(): void {
    this.resProyect = this.route.snapshot.data['proyect'];
    this.proyect = this.resProyect!.proyect;
    this.backgroundImg = `url(${this.proyect.coverImg})`;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.params = params.get('id');
    });
    console.log(this.params);
    this._ss.getProyectImages(this.params).subscribe((response) => {
      const _response = response.images;
      this.gallery = _response.filter((response) => response.image).map(ele=>ele.image);
      console.log(this.gallery);
    });
  }
}
