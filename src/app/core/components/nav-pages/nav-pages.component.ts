import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";

@Component({
  selector: 'app-nav-pages',
  templateUrl: './nav-pages.component.html',
  styleUrls: ['./nav-pages.component.scss']
})
export class NavPagesComponent implements OnInit {
  @Output() selected = new EventEmitter();

  constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon(
      'priest', 'assets/icons/priest.png'
    )
  }

  ngOnInit() {
  }

}
