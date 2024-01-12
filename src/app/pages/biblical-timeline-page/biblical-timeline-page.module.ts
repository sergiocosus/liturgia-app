import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiblicalTimelinePageRoutingModule } from './biblical-timeline-page-routing.module';
import { BiblicalTimelinePageComponent } from './biblical-timeline-page.component';
import {TimelineModule} from "primeng/timeline";
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    BiblicalTimelinePageComponent
  ],
  imports: [
    CommonModule,
    TimelineModule,
    CardModule,
    BiblicalTimelinePageRoutingModule,
  ]
})
export class BiblicalTimelinePageModule { }
