import {MassPart} from "./mass-part";
import {MassService} from "./mass-service";
import {MassRole} from "./mass-role";

export let MassStructure = [
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
        massServices: [
          new MassService(MassRole.roles.book, ""),
        ]
      },
      {
        name: 'Acto penitencial',
        massServices: [
          new MassService(MassRole.roles.book, ""),
        ]
      },
      {
        name: 'Señor, ten piedad',
      },
      {
        name: 'Gloria',
      },
      {
        name: 'Oración colecta',
        massServices: [
          new MassService(MassRole.roles.book, ""),
        ]
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
        massServices: [
          new MassService(MassRole.roles.candlestick, ""),
          new MassService(MassRole.roles.thuriferary, ""),
          new MassService(MassRole.roles.shuttle, ""),
        ]
      },
      {
        name: 'Evangelio',
        massServices: [
          new MassService(MassRole.roles.candlestick, ""),
          new MassService(MassRole.roles.thuriferary, ""),
        ]
      },
      {
        name: 'Homilia',
      },
      {
        name: 'Credo',
      },
      {
        name: 'Oración de los fieles',
        massServices: [
          new MassService(MassRole.roles.book, ""),
        ]
      },
    ]
  },
  {
    name: 'Liturgia de la Eucaristía',
    parts: [
      {
        name: 'Ofertorio',
        massServices: [
          new MassService(MassRole.roles.acolyte, ""),
        ]
      },
      {
        name: 'Oración sobre las ofrendas',
        massServices: [
          new MassService(MassRole.roles.acolyte, ""),
          new MassService(MassRole.roles.book, "Lleva el libro al altar, preparado en la página de la oración sobre las ofrendas"),
        ]
      },
      {
        name: 'Plegaria eucarística',
        parts: [
          {
            name: 'Prefacio',
          },
          {
            name: 'Santus',
            massServices: [
              new MassService(MassRole.roles.candlestick, ""),
            ]
          },
          {
            name: 'Epíclesis',
            massServices: [
              new MassService(MassRole.roles.candlestick, ""),
              new MassService(MassRole.roles.thuriferary, ""),
              new MassService(MassRole.roles.acolyte, ""),
            ]
          },
          {
            name: 'Consagración',
            massServices: [
              new MassService(MassRole.roles.candlestick, ""),
              new MassService(MassRole.roles.thuriferary, ""),
              new MassService(MassRole.roles.acolyte, ""),
            ]
          },
          {
            name: 'Anámnesis e Intercesiones',
            massServices: [
              new MassService(MassRole.roles.candlestick, ""),
            ]
          },
          {
            name: 'Doxología final',

            massServices: [
              new MassService(MassRole.roles.candlestick, ""),
            ]
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
            massServices: [
              new MassService(MassRole.roles.acolyte, ""),
            ]
          },
          {
            name: 'Purificación de los vasos sagrados',
            massServices: [
              new MassService(MassRole.roles.acolyte, ""),
            ]
          },
          {
            name: 'Oración después de la Sagrada Comunión',
            massServices: [
              new MassService(MassRole.roles.book, ""),
            ]
          },
        ]
      },
    ]
  },
  {
    name: 'Ritos de despedida',
    parts: [
      {
        name: 'Bendición',
        massServices: [
          new MassService(MassRole.roles.candlestick, ""),
          new MassService(MassRole.roles.highCross, ""),
        ]
      },
      {
        name: 'Procesión de salida'
      }
    ]
  }
];
