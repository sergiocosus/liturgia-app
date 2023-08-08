import {Component, Input} from '@angular/core';
import {MassRole} from "../../../../classes/mass-role";

@Component({
  selector: 'app-mass-procession',
  templateUrl: './mass-procession.component.html',
  styleUrls: ['./mass-procession.component.scss']
})
export class MassProcessionComponent {
  @Input() processionOrder: MassRole[][] | undefined = [];
}
