import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LiturgicalObjectsPageComponent} from "./liturgical-objects-page.component";

const routes: Routes = [
  {
    path: '',
    component: LiturgicalObjectsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiturgicalObjectsPageRoutingModule {
}
