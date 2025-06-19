import {MassRoleType} from "./mass-role-type";
import {MassRole} from "./mass-role";
import {MassServiceInstruction} from "./mass-service-instruction";

export class MassService {
  constructor(massRole: MassRole, description: string = '', massServiceInstruction: MassServiceInstruction[] = []) {
    this.massRole = massRole;
    this.description = description;
    console.log(massServiceInstruction);
    this.instructions = massServiceInstruction;
    console.log("i", this.instructions);
  }

  massRole: MassRole;
  description: string;
  instructions: MassServiceInstruction[] | undefined;
}
