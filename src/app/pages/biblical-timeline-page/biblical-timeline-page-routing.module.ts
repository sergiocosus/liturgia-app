import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BiblicalTimelinePageComponent} from "./biblical-timeline-page.component";

const routes: Routes = [
  {
    path: '',
    component: BiblicalTimelinePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiblicalTimelinePageRoutingModule {
}
