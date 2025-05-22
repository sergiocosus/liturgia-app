import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-pages',
  templateUrl: './nav-pages.component.html',
  styleUrls: ['./nav-pages.component.scss']
})
export class NavPagesComponent implements OnInit {
  @Output() selected = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
