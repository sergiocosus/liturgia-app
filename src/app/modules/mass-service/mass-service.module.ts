import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {MassServiceIconComponent} from './components/mass-service-icon/mass-service-icon.component';
import {MassProcessionComponent} from './components/mass-procession/mass-procession.component';
import {MassServicesComponent} from './components/mass-services/mass-services.component';
import {MassServiceComponent} from "./components/mass-service/mass-service.component";


@NgModule({
  declarations: [
    MassServiceIconComponent,
    MassProcessionComponent,
    MassServicesComponent,
    MassServiceComponent
  ],
  exports: [
    MassServiceIconComponent,
    MassProcessionComponent,
    MassServiceComponent,
    MassServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MassServiceModule {
}
