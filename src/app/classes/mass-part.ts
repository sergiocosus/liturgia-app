import {MassService} from "./mass-service";
import {MassRole} from "./mass-role";

export class MassPart {
  name: string = "";
  description?: string = "";
  parts?: MassPart[];
  massServices?: MassService[];
  processionOrder?: MassRole[][];
}
