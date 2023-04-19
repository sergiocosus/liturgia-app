import {MassService} from "./mass-service";

export class MassPart {
  name: string = "";
  description?: string = "";
  parts?: MassPart[];
  massServices?: MassService[];
}
