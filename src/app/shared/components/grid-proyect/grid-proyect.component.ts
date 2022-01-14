import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-proyect',
  templateUrl: './grid-proyect.component.html'
})
export class GridProyectComponent implements OnInit {
  tiles: Tile[] = [
    {text: '1', cols: 4, rows: 4, color: 'lightblue'},
    {text: '2', cols: 2, rows: 4, color: 'lightgreen'},
    {text: '4', cols: 2, rows: 4, color: 'lightpink'},
    {text: '4', cols: 2, rows: 4, color: '#DDBDF1'},
    {text: '5', cols: 2, rows: 4, color: '#DDBDF1'},
    {text: '6', cols: 4, rows: 4, color: '#blue'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
