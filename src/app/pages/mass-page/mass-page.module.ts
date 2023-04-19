import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MassPageRoutingModule } from './mass-page-routing.module';
import { MassPageComponent } from './mass-page.component';
import {SharedModule} from "../../shared/shared.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import { MassServiceComponent } from './mass-service/mass-service.component';
import {MassServiceModule} from "../../modules/mass-service/mass-service.module";


@NgModule({
  declarations: [
    MassPageComponent,
    MassServiceComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        MassPageRoutingModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSelectModule,
        MatToolbarModule,
        MassServiceModule,
    ]
})
export class MassPageModule { }
