import {Component, Input} from '@angular/core';
import {MassService} from "../../../../classes/mass-service";

@Component({
  selector: 'app-mass-service-icon',
  templateUrl: './mass-service-icon.component.html',
  styleUrls: ['./mass-service-icon.component.scss']
})
export class MassServiceIconComponent {
  @Input() massService!: MassService;
}
