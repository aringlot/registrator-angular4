import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-container-item',
  templateUrl: './container-item.component.html',
  styleUrls: ['./container-item.component.css']
})
export class ContainerItemComponent implements OnInit {
  @Output() onChangeName: EventEmitter<string> = new EventEmitter<string>();
  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

  changeName(event) {
    this.item.name = event.target.value;
    this.onChangeName.emit(this.item.name);
  }
}
