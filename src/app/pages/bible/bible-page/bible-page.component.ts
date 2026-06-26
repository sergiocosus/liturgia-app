import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-bible-page',
  imports: [
    RouterLink,
    MatButton,
    MatIcon
  ],
  templateUrl: './bible-page.component.html',
  styleUrl: './bible-page.component.scss',
})
export class BiblePageComponent {

}
