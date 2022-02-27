import { Component, OnInit } from '@angular/core';
import { Widget } from '../app-interfaces';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit {
  Widgets: Widget[] = [
    {
      id: '1',
      Title: 'Title_1',
      Description: 'Description_2',
      email: 'email_1@p.com',
    },
    {
      id: '2',
      Title: 'Title_2',
      Description: 'Description_2',
      email: 'email_2@p.com',
    },
  ];

  currentWidget: Widget = null;

  constructor() {}

  ngOnInit() {}
}
