import {Component} from '@angular/core';
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
      'role': [],
      'type': [],
    });
    /* this.filterForm.get("role")?.valueChanges.subscribe(value =>{
       this.massParts = MassStructure.clon.filter(massPart => {
         if (value) {
           return massPart.parts.filter(
             massPart2 => this.hasMassServices(massPart2, value)
           );
         } else {
           return MassStructure;
         }
       });
       console.log(this.massParts);
     })*/
  }

  hasMassServices(massPart: MassPart): boolean {
    const selectedRole = this.filterForm.get('role')?.value;
    if (!selectedRole) {
      return true;
    }

    return !!massPart.massServices?.find(massService =>
      massService.massRole.name == selectedRole.name
    ) || !!massPart.parts?.find(part => this.hasMassServices(part));
  }
}
