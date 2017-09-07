import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

const Items: Item[] = [
  { id: 1, name: 'Item #1'},
  { id: 2, name: 'Item #2'},
  { id: 3, name: 'Item #3'},
  { id: 4, name: 'Item #4'},
  { id: 5, name: 'Item #5'}
];

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  changedName: string;
  items = Items;

  constructor() { }

  ngOnInit() {
    this.changedName = 'nothing was changed';
  }

  changeName(event) {
    this.changedName = event;
  }
}
