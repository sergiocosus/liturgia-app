import {MassType} from "./mass-type";

export class MassRole {
  name: string = '';
  massType: string[] = [];

  constructor(name: string, massType: string[]) {
    this.name = name;
    this.massType = massType;
  }

  static roles = {
    acolyte: new MassRole('Acólito', [MassType.any]),
    book: new MassRole('Libro', [MassType.any]),
    highCross: new MassRole('Cruz Alta', [MassType.solemn, MassType.pontifical]),
    candlestick: new MassRole('Cirial', [MassType.solemn, MassType.pontifical]),
    thuriferary: new MassRole('Turiferario', [MassType.solemn, MassType.pontifical]),
    shuttle: new MassRole('Naveta', [MassType.solemn, MassType.pontifical]),
    crosier: new MassRole('Báculo', [MassType.pontifical]),
    miter: new MassRole('Naveta', [MassType.pontifical]),
    ceremonialist: new MassRole('Ceremoniero', [MassType.solemn, MassType.pontifical]),
    familiar: new MassRole('Familiar', [MassType.solemn, MassType.pontifical]),
    priest: new MassRole('Sacerdote', [MassType.any]),
    bishop: new MassRole('Obispo', [MassType.pontifical]),
  }
}
