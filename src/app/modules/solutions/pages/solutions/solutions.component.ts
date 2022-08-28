import { Component, OnInit } from '@angular/core';
import { solution } from 'src/app/core/schema/data';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  title: string = ' Soluciones para tu negocio';

  solutions: solution[] = [

    {
      name: 'css3',
      path: '/assets/solutions/css3.svg',
    },
    {
      name: 'html',
      path: '/assets/solutions/html-5.svg',
    },
    {
      name: 'javascript',
      path: '/assets/solutions/javascript.svg',
    },

    {
      name: 'node js',
      path: '/assets/solutions/node-js.svg',
    },
    {
      name: 'angular',
      path: '/assets/solutions/angularjs.svg',
    },
    {
      name: 'react',
      path: '/assets/solutions/react.svg',
    },
    {
      name: 'redux',
      path: '/assets/solutions/redux.svg',
    },
    {
      name: 'ionic',
      path: '/assets/solutions/ionic.svg',
    },
    {
      name: 'webpack',
      path: '/assets/solutions/webpack.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
