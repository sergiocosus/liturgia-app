import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import { MassServiceIconComponent } from './components/mass-service-icon/mass-service-icon.component';



@NgModule({
  declarations: [
    MassServiceIconComponent
  ],
  exports: [
    MassServiceIconComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MassServiceModule { }
