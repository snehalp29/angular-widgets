import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from '../../app-interfaces';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css'],
})
export class WidgetsListComponent implements OnInit {
  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectWidget(widget) {
    // console.log(widget);
    this.selected.emit(widget);
  }
}
