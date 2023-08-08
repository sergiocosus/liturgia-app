import {MassType} from "./mass-type";

export class MassRole {
  name: string = '';
  massType: string[] = [];
  icon?: string = '';

  constructor(name: string, massType: string[], icon?: string) {
    this.name = name;
    this.massType = massType;
    this.icon = icon;
  }

  static roles = {
    acolyte: new MassRole(
      'Acólito',
      [MassType.any],
      'acolyte.png'
    ),
    book: new MassRole(
      'Libro',
      [MassType.any],
      'book.png'
    ),
    highCross: new MassRole(
      'Cruz Alta',
      [MassType.solemn, MassType.pontifical],
      'highCross.png'
    ),
    candlestick: new MassRole(
      'Cirial',
      [MassType.solemn, MassType.pontifical],
      'candlestick.png'
    ),
    thuriferary: new MassRole(
      'Turiferario',
      [MassType.solemn, MassType.pontifical],
      'thuriferary.png'
    ),
    shuttle: new MassRole(
      'Naveta',
      [MassType.solemn, MassType.pontifical],
      'shuttle.png'
    ),
    crosier: new MassRole(
      'Báculo',
      [MassType.pontifical],
      'crosier.png'
    ),
    miter: new MassRole(
      'Mitra',
      [MassType.pontifical],
      'miter.png'
    ),
    ceremonialist: new MassRole(
      'Ceremoniero',
      [MassType.solemn, MassType.pontifical],
      'ceremonialist.png'
    ),
    familiar: new MassRole(
      'Familiar',
      [MassType.solemn, MassType.pontifical],
      'familiar.png'
    ),
    deacon: new MassRole(
      'Diácono',
      [MassType.any],
      'priest.png'
    ),
    evangelistary: new MassRole(
      'Evangeliario',
      [MassType.any],
      'priest.png'
    ),
    priest: new MassRole(
      'Sacerdote',
      [MassType.any],
      'priest.png'
    ),
    bishop: new MassRole(
      'Obispo',
      [MassType.pontifical],
      'bishop.png'
    ),
    monitor: new MassRole(
      'Monitor',
      [MassType.any],
      'monitor.svg'
    ),
    reading1: new MassRole(
      'Primera Lectura',
      [MassType.any],
      'reader1.svg'
    ),
    reading2: new MassRole(
      'Segunda Lectura',
      [MassType.any],
      'reader2.svg'
    ),
    psalm: new MassRole(
      'Salmo',
      [MassType.any],
      'psalm.svg'
    ),
  }
}
