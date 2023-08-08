import {Component, Input} from '@angular/core';
import {MassService} from "../../../../classes/mass-service";

@Component({
  selector: 'app-mass-services',
  templateUrl: './mass-services.component.html',
  styleUrls: ['./mass-services.component.scss']
})
export class MassServicesComponent {
  @Input() massServices: MassService[] | undefined = [];
}
