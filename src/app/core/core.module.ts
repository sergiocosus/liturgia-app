import { NgModule } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavPagesComponent } from './components/nav-pages/nav-pages.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    NavigationComponent,
    NavPagesComponent,
  ],
  imports: [
    SharedModule,
    MatExpansionModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
