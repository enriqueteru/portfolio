import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  today: any = new Date().getFullYear();
  avisoLegal : string = 'legal/aviso-legal';
  cookies : string = 'legal/politica-de-cookies';
  politicaPrivacidad : string = 'legal/politica-de-privacidad';
  constructor() {}

  ngOnInit(): void {}
}
