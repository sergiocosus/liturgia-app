import {Component, Input} from '@angular/core';
import {MassRole} from "../../../../classes/mass-role";

@Component({
  selector: 'app-mass-service-icon',
  templateUrl: './mass-service-icon.component.html',
  styleUrls: ['./mass-service-icon.component.scss']
})
export class MassServiceIconComponent {
  @Input() massRole!: MassRole;
}
