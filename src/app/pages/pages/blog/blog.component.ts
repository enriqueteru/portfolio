import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public title: string = "Blog"
  public description: string = "Aquí escribo sobre ideas y grandes avances en el sector ¿Qué somos más que ideas y sueños?"
  public background: string = "#FF9505"
  public fontColor: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
