import {MassRoleType} from "./mass-role-type";
import {MassRole} from "./mass-role";

export class MassService {
  constructor(massRole: MassRole, description: string = '') {
    this.massRole = massRole;
    this.description = description;
  }

  massRole: MassRole;
  description: string;
}
