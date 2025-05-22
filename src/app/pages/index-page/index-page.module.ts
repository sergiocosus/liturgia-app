import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexPageRoutingModule} from './index-page-routing.module';
import {IndexPageComponent} from './index-page.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    IndexPageComponent
  ],
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    MatButtonModule
  ]
})
export class IndexPageModule {
}
