import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup} from "@angular/forms";
import {MassStructure} from "./classes/mass-structure";
import {GoogleTagManager} from "./shared/services/google-tag-manager.service";
import {Router} from "@angular/router";
import {NavigationEnd} from "@angular/router";
declare var gtag:any;
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {

  title = 'liturgia-app';


  constructor(router: Router, fb: FormBuilder, protected gtm: GoogleTagManager) {
    this.gtm.init();

    const navEndEvent$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      gtm.pageView(e.urlAfterRedirects);
    });
  }

  ngOnInit(): void {
  }


}
