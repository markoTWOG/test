import { Component } from '@angular/core';

@Component({
  selector: 'twognation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'apptest';
  linkButtons: { text: string; style?: string, route?: string}[] = [
    {
      text: 'Go home',
      route: '/'
    },
    {
      text: 'About me',
      route: '/about-me'
    },
    {
      text: 'Contact',
      route: '/contact'
    },
  ];
}
