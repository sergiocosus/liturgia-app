import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LiturgicalObjectsPageRoutingModule} from './liturgical-objects-page-routing.module';
import { LiturgicalObjectsPageComponent } from './liturgical-objects-page.component';


@NgModule({
  declarations: [
    LiturgicalObjectsPageComponent
  ],
  imports: [
    CommonModule,
    LiturgicalObjectsPageRoutingModule
  ]
})
export class LiturgicalObjectsPageModule { }
