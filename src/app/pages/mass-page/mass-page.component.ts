import { Component } from '@angular/core';
import {MassType} from "../../classes/mass-type";
import {MassRole} from "../../classes/mass-role";
import {MassPart} from "../../classes/mass-part";
import {MassStructure} from "../../classes/mass-structure";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-mass-page',
  templateUrl: './mass-page.component.html',
  styleUrls: ['./mass-page.component.scss']
})
export class MassPageComponent {

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
