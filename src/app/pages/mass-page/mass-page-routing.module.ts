import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MassPageComponent} from "./mass-page.component";

const routes: Routes = [
  {
    path:'',
    component: MassPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MassPageRoutingModule { }
