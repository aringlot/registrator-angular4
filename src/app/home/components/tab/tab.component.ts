import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  title: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.title = 'default tab title';
  }

  ngOnInit() {
    this.activatedRoute.params.map(x => x.id).subscribe(data => this.title = data);
  }

}
