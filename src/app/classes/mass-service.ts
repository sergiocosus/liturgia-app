import {MassRoleType} from "./mass-role-type";
import {MassRole} from "./mass-role";
import {MassServiceInstruction} from "./mass-service-instruction";

export class MassService {
  constructor(massRole: MassRole, description: string = '', massServiceInstruction: MassServiceInstruction[] = []) {
    this.massRole = massRole;
    this.description = description;
    this.instructions = massServiceInstruction;
  }

  massRole: MassRole;
  description: string;
  instructions: MassServiceInstruction[] | undefined;
}
