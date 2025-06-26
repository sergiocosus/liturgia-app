import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {MassType} from "../../classes/mass-type";
import {MassRole} from "../../classes/mass-role";
import {MassPart} from "../../classes/mass-part";
import {MassStructure} from "../../classes/mass-structure";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatAccordion} from "@angular/material/expansion";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mass-page',
  templateUrl: './mass-page.component.html',
  styleUrls: ['./mass-page.component.scss']
})
export class MassPageComponent implements OnInit, AfterViewInit {
  @ViewChildren('accordions') accordions: MatAccordion[];

  title = 'liturgia-app';


  massTypes: MassType[] = [
    MassType.any,
    MassType.solemn,
    MassType.pontifical,
  ];

  massRoles = Object.values(MassRole.roles);

  massParts: MassPart[] = MassStructure;
  filterForm: FormGroup;
  route: ActivatedRoute;
  router: Router;


  constructor(fb: FormBuilder, route: ActivatedRoute, router: Router) {
    this.filterForm = fb.group({
      'role': [],
      'type': [],
      'showProcession': [],
    });

    this.route = route;
    this.router = router;

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

  ngOnInit() {
    this.filterForm.get('role')?.valueChanges.subscribe((role: MassRole) => {
      this.router.navigate(['mass', {role: role.name}])
      this.closeAll();
      this.openAll();
    });
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

  openAll() {
    this.accordions.forEach(accordion => accordion.openAll())
  }

  closeAll() {
    this.accordions.forEach(accordion => accordion.closeAll())
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      if (params['role']) {
        const role = this.massRoles.find(role => role.name == params['role']);
        if (role != this.filterForm.get('role')?.value) {
          this.filterForm.get('role')?.setValue(role);
        }
      }
    });
  }

}
