import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  title: string = '¡Hablemos!';
  steps: any = [
    {
      title: 'title1',
      content: 'content1'
    },
    {
      title: 'title2',
      content: 'content2'
    },
    {
      title: 'title3',
      content: 'content3'
    }
  ]
}
