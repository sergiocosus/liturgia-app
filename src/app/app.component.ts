import { Component } from '@angular/core';
import {MassPart} from "./classes/mass-part";
import {MassService} from "./classes/mass-service";
import {MassRoleType} from "./classes/mass-role-type";
import {MassRole} from "./classes/mass-role";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'liturgia-app';
  massParts: MassPart[] = [
    {
      name: 'Rito de entrada',
      parts: [
        {
          name: 'Procesión de entrada',
          massServices: [
            new MassService(MassRole.roles.ceremonialist, "Va al frente de la proseción"),
            new MassService(MassRole.roles.thuriferary, ""),
            new MassService(MassRole.roles.shuttle, ""),
            new MassService(MassRole.roles.highCross, ""),
            new MassService(MassRole.roles.candlestick, ""),
            new MassService(MassRole.roles.acolyte, ""),
            new MassService(MassRole.roles.book, ""),
            new MassService(MassRole.roles.miter, ""),
            new MassService(MassRole.roles.crosier, ""),
          ]
        },
        {
          name: 'Saludo inicial',
        },
        {
          name: 'Acto penitencial',
        },
        {
          name: 'Señor, ten piedad',
        },
        {
          name: 'Gloria',
        },
        {
          name: 'Oración colecta',
        },
      ]
    },
    {
      name: 'Liturgia de la Palabra',
      parts: [
        {
          name: 'Primera Lectura',
        },
        {
          name: 'Salmo responsorial',
        },
        {
          name: 'Segunda Lectura',
        },
        {
          name: 'Aleluya',
        },
        {
          name: 'Evangelio',
        },
        {
          name: 'Homilia',
        },
        {
          name: 'Credo',
        },
        {
          name: 'Oración de los fieles',
        },
      ]
    },
    {
      name: 'Liturgia de la Eucaristía',
      parts: [
        {
          name: 'Ofertorio',
        },
        {
          name: 'Oración sobre las ofrendas',
        },
        {
          name: 'Plegaria eucarística',
          parts: [
            {
              name: 'Prefacio',
            },
            {
              name: 'Santus',
            },
            {
              name: 'Epíclesis',
            },
            {
              name: 'Consagración',
            },
            {
              name: 'Anámnesis e Intercesiones',
            },
            {
              name: 'Doxología final',
            }
          ]
        },
        {
          name: 'Rito de la Comunión',
          parts: [
            {
              name: 'Padre Nuestro',
            },
            {
              name: 'Ad pacem (Rito de la paz)',
            },
            {
              name: 'Fracción del pan',
            },
            {
              name: 'Agnus Dei (Cordero de Dios)',
            },
            {
              name: 'Comunión',
            },
            {
              name: 'Purificación de los vasos sagrados',
            },
            {
              name: 'Oración después de la Sagrada Comunión',
            },
          ]
        },
      ]
    },
    {
      name: 'Ritos de despedida',
      parts: [
        {
          name: 'Bendición'
        },
        {
          name: 'Procesión de salida'
        }
      ]
    }
  ];
}
