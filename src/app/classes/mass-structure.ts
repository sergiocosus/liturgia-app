import {MassPart} from "./mass-part";
import {MassService} from "./mass-service";
import {MassRole} from "./mass-role";


/**
 * -- Fuentes --
 * Acolitar con obispo
 * https://www.buenastareas.com/ensayos/Pasos-Para-Acolitar-Con-Obispo/6857552.html
 */
export let MassStructure = [
  {
    name: 'Ritos iniciales',
    description: 'Nos ponemos en la presencia de Dios',
    parts: [
      {
        name: 'Canto de entrada',
        description: '"El fin e este canto es abrir la celebración, fomentar la unión de quienes se han reunido, elevar sus pensamientos a la contemplación del misterio litúrgico o de la fiesta" (I.G.M.R., n.25)',
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
        ],
        processionOrder: [
          [new MassRole('', []), MassRole.roles.ceremonialist],
          [MassRole.roles.thuriferary, MassRole.roles.shuttle],
          [MassRole.roles.highCross],
          [MassRole.roles.candlestick, MassRole.roles.candlestick],
          [MassRole.roles.reading1, MassRole.roles.reading2],
          [MassRole.roles.psalm],
          [MassRole.roles.acolyte],
          [MassRole.roles.deacon],
          [MassRole.roles.evangelistary],
          [MassRole.roles.priest],
          [MassRole.roles.bishop, MassRole.roles.deacon],
          [MassRole.roles.crosier, MassRole.roles.miter]
        ]
      },
      {
        name: 'Saludo inicial',
        description: '"Con este saludo y con al respuesta del pueblo fiel, queda de manifiesto el misterio de la Iglesia congregada" (Ibid., n. 28)',
        massServices: [
          new MassService(MassRole.roles.book, "Colocar el libro en la página de los ritos iniciales"),
        ]
      },
      {
        name: 'Acto penitencial',
        description: '"Un momento de silencio, Vemos clara nuestra indignidad. Viene a la cabeza el recuerdo -no vago y genérico- de lso pecados y faltas en concreto" (Arce Gargollo, 2010)',
        massServices: [
          new MassService(MassRole.roles.book, "Al terminar el acto penitencial, se retira"),
        ]
      },
      {
        name: 'Invocaciones (Señor, ten piedad)',
        description: '"Las dirigimos a cada una de las persona divina: Dios Padre, Dios Hijo, Dios Espíritu Santo: Un solo Dios." (Arce Gargollo, 2010)',
      },
      {
        name: 'Gloria',
        description: '"El Gloria es un antiquísimo y venerable himno con el que la Iglesia congregada en el Espíritu Santo glorifica a Dios Padre y al Cordero y le presenta su súplicas..."  (I.G.M.R., n.25)  \n "Al recitar este himno, nos unimos a todos lso coros celestiales, en un canto de adoración maravilloso" (Arce Gargollo, 2010)',
      },
      {
        name: 'Oración colecta',
        description: '"Permanecen un rato de silencio para hacerse concientes de estar en la presencia de Dios y formular interiormente sus súplicas"  (I.G.M.R., n.32)  \n "Al decir "oremos" se nos invita a pedir" (Arce Gargollo, 2010)',
        massServices: [
          new MassService(MassRole.roles.book, "Presenta el misal en la oración colecta correspondiente"),
        ]
      },
    ]
  },
  {
    name: 'Liturgia de la Palabra',
    description: 'Dios nos habla',
    parts: [
      {
        name: 'Primera Lectura',
        massServices: [
          new MassService(MassRole.roles.miter, "Se le da la mitra"),
        ]
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
          new MassService(MassRole.roles.miter,
            "Se le recoge la mitra una vez que el sacerdote o diácono ha pedido la bendición al obispo para proclamar el evangelio "
          ),
          new MassService(MassRole.roles.crosier,
            "Se le da el báculo una vez que el sacerdote o diácono ha pedido la bendición al obispo para proclamar el evangelio"
          ),
        ],
      },
      {
        name: 'Evangelio',
        massServices: [
          new MassService(MassRole.roles.candlestick, "Se mantienen "),
          new MassService(MassRole.roles.thuriferary, ""),
          new MassService(MassRole.roles.miter,
            "Una vez que besó el evangeliario se le da la mitra."
          ),
          new MassService(MassRole.roles.crosier,
            "Una vez proclamado el evangelio, antes de que el sacerdote o diácono llegue hacia el obispo para que éste bese el evangeliario o el leccionario, se le quita el báculo. "
          ),
        ]
      },
      {
        name: 'Homilia',
      },
      {
        name: 'Credo',
      },
      {
        name: 'Oración de los fieles (universal)',
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
        description: 'Damos a Dios nuestros dones',
        massServices: [
          new MassService(MassRole.roles.acolyte, ""),
          new MassService(MassRole.roles.crosier,
            "Una vez terminado el diácono o sacerdote de preparar los dones, éste invita al obispo para hacer oración sobre los dones, en este momento se le da el báculo y se le recoge cuando llegue al altar (es un movimiento rápido por ser a veces breves la distancia)"
          ),
          new MassService(MassRole.roles.miter,
            "Una vez recogido el báculo se le recoge también la mitra."
          ),
          new MassService(MassRole.roles.book,
            "Lleva el libro al altar, en el momento que se hace el lavatorio de las manos del sacerdote, preparado en la página de la oración sobre las ofrendas"
          ),
        ]
      },
      {
        name: 'Oración sobre las ofrendas',
        massServices: [
          new MassService(MassRole.roles.acolyte, ""),
          new MassService(MassRole.roles.miter,
            "Después de la oración sobre las ofrendas, se le quita el solideo (esto lo realiza un sacerdote o díácono, pero quien tiene la mitra resguarda el solideo)"
          ),

        ]
      },
      {
        name: 'Plegaria eucarística',
        parts: [
          {
            name: 'Prefacio',
            description: 'Reconocemos la Bondad y Santidad de Dios. Peticiones a Dios',
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
            description: 'Conversión del pan y el vieno en el cuerpo y la Sangre de Cristo',
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
        description: 'Padre nuestro (oración que Cristo no enseñó), Cristo se nos da en alimento para nuestra alma si estamos en gracia.',
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
    description: 'Oración de petición. Bendición del sacerdote',
    parts: [
      {
        name: 'Breves anuncios',
        massServices: [
          new MassService(MassRole.roles.candlestick, ""),
          new MassService(MassRole.roles.highCross, ""),
        ]
      },
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
