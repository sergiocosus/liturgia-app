import {Component, Input} from '@angular/core';
import {MassService} from "../../../../classes/mass-service";

@Component({
  selector: 'app-mass-service',
  templateUrl: './mass-service.component.html',
  styleUrls: ['./mass-service.component.scss']
})
export class MassServiceComponent {
  @Input() massService?: MassService;
}
