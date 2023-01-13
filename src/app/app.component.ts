import { Component } from '@angular/core';
import {MassPart} from "./classes/mass-part";
import {MassService} from "./classes/mass-service";
import {MassRole} from "./classes/mass-role";
import {MassType} from "./classes/mass-type";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MassStructure} from "./classes/mass-structure";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'liturgia-app';


  massTypes: MassType[] = [
    MassType.any,
    MassType.solemn,
    MassType.pontifical,
  ];

  massRoles = Object.values(MassRole.roles);

  massParts: MassPart[] = MassStructure;
  filterForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.filterForm = fb.group({
      'role' : [],
      'type' : [],
    })
    console.log(this.filterForm);
  }
}
