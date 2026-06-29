import { Component } from '@angular/core';

@Component({
  selector: 'app-liturgical-postures',
  imports: [],
  templateUrl: './liturgical-postures.component.html',
  styleUrl: './liturgical-postures.component.scss',
})
export class LiturgicalPosturesComponent {
    postures = [
      {
        title: 'De pie',
        meanings: [
          'La libertad de los hijos de Dios, liberados del pecado',
          'El cristiano puede estar de pie delante de Dios, porque es su Padre. La parresía de los griegos: "nos atrevemos a decir: Padre nuestro"',
          'Signo de alegría',
          'Respeto y de la espera del retorno definitivo del Señor y de la eterna bienaventuranza',
          'Actitud característica del ministro que sirve en el altar'
        ],
        history: 'Algunos testimonios se remontan a la época apostólica y subapostólica demuestran que los primeros cristianos usaron esta actitud en la liturgia. Ejemplo: Pinturas de las catacumbas.',
      },
      {
        title: 'De rodillas',
        meanings: [
          'Actitud de carácter penitencial, era propia de los días de ayuno',
          'Signo de postración, de humildad,, de arrepentimiento',
          'En ocasiones es signo e adoración. Por eso la piedad occidental la introducjo para adorar la Sagrada Eucaristía y recibir la comunión',
        ],
        history: '',
      },
      {
        title: 'Sentados',
        meanings: [
          'Actitud que adopta el maestro que enseña o el jefe que preside. De ahí que el obispo tenga una cathedra o sede desde donde preside y enseña',
          'Para los fieles, simboliza la actitud del discípulo que escucha lo que Dios le dice. Durante las lecturas, los cantos meditativos',
          'En el obispo o sacerdote, cuando se sienta para predicar es signo de la autoridad magisterial que éste tiene y ejerce en nombre de Cristo, Supremo Maestro',
          'A veces, no tiene simbolismo y es simplemente una actitud de comodidad o sirve para guardar un silencia meditativo',
        ],
        history: 'En los fieles se encuentra desde la época apostólica, Jesucristo, cuando se quedó en el Templo, estaba sentado delante de los doctores (Lc 2, 46). La actitud de María de Betania cuando estaba pendiente d elo que decía el Señor (Lc 10, 39). En los primeros siglos, los fieles, obedeciendo una indicación del obispo, se sentaban para escuchar su predicación',
      }
    ];
}
