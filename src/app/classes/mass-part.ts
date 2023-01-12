import {MassService} from "./mass-service";

export class MassPart {
  name: string = "";
  parts?: MassPart[];
  massServices?: MassService[];
}
