import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'twognation-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() linkButtons: { text: string; style?: string, route?: string}[];

  constructor() {}

  ngOnInit(): void {}
}
