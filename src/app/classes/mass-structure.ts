import {MassPart} from "./mass-part";
import {MassService} from "./mass-service";
import {MassRole} from "./mass-role";
import {MassServiceInstruction} from "./mass-service-instruction";


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
            new MassService(MassRole.roles.thuriferary, "", [
              new MassServiceInstruction('Presentar el incensario al Sacerdote', '', 'turiferary/presentar-incensario-entrada.jpg'),
              new MassServiceInstruction('Tomar el lugar hasta en frente de la procesión',
                'Recuerda que durante naveta e incensario encabezan la procesión, delante de la cruz alta y la naveta debe ir a tu izquierda siempre', 'turiferary/turiferary-2.jpg'),
              new MassServiceInstruction('Presentar y dar el incensario al sacerdote',
                'Una vez hecha la reverencia al altar, esperar a que el celebrante bese el altar para entonces presentarle el incensario,' +
                ' una vez que el sacerdote ha puesto incienso en el incensario, entregarselo. Esperar a que el celebrante termine de incensar para tomar el incensario',
                'turiferary/poniendo-incienso_.jpg'),
            ]),
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
            new MassService(MassRole.roles.thuriferary, "", [
              new MassServiceInstruction('Presentar el incensario al Sacerdote', '', 'turiferary/poniendo-incienso_.jpg  '),
              new MassServiceInstruction('Al centro de los ciriales', 'Tomar el lugar en medio de los ciriales y esperar ahí hasta que hagan reverencia al altar',
                'turiferary/en-medio-ciriales.jpg'),

            ]),
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
            new MassService(MassRole.roles.thuriferary, "", [
              new MassServiceInstruction('Al lado del sacerdote', 'Una vez hecha la reverencia, permanecer al lado del sacerdote esperando el momento en que solicite el incensario para incensar' +
                ' el Evangeliario o Leccionario. Una vez incensado, permanecer ahí hasta que termine de proclamar el Evangelio, ' +
                'es decir, cuando diga "Palabra del Señor" y la asamblea conteste "Gloria a ti Señor Jesús"', 'turiferary/incensario-evangelio.jpg'),
              new MassServiceInstruction('De nuevo al centro de los ciriales', 'Tomar el lugar en medio de los ciriales y esperar ahí hasta que hagan reverencia al altar y volver a tu lugar', 'turiferary/en-medio-ciriales.jpg'),
            ]),
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
            new MassService(MassRole.roles.thuriferary, "",
              [
                new MassServiceInstruction('Encabezar procesión de ofrendas (si hay ofrendas)', 'Una vez hecha la reverencia, permanecer al lado del sacerdote esperando el momento en que solicite el incensario para incensar' +
                  ' el Evangeliario o Leccionario. Una vez incensado, permanecer ahí hasta que termine de proclamar el Evangelio, ' +
                  'es decir, cuando diga "Palabra del Señor" y la asamblea conteste "Gloria a ti Señor Jesús"',
                  'turiferary/procesion-de-ofrendas.jpg'),
                new MassServiceInstruction(
                  'Ofrecer el incensario al sacerdote',
                  'Antes después de darle al celebrante las vinajeras con el vino y antes de que se lave las manos se presenta el incensario al sacerdote para que incense las ofrendas, el altar y las imágenes',
                  'turiferary/poniendo-incienso_.jpg'
                ),
                new MassServiceInstruction(
                  'Incensar al celebrante',
                  'Una vez que el celebrante haya terminado de incensar, te dará el incensario para que ahora tu lo incenses a él: ' +
                  'Realizando una reverencia, 3 ductus y de nuevo haciendo otra reverencia',
                  'turiferary/incensando-al-celebrante.jpg'
                ),
                new MassServiceInstruction(
                  'Incensar a los concelebrantes (si es que hay)',
                  'Si es una misa concelebrada, es decir, con más de un sacerdote o con el obispo y otro sacerdote, incensar a los celebrandes.' +
                  'Si es sólo un concelebrante: incensarlo sólo a él directamente. Si es más de uno se puede ir el turiferario enfrente del altar ' +
                  'y volteando hacia él incensar a los celebrantes. De igual manera Realizando una reverencia, 3 ductus y de nuevo haciendo otra reverencia\n',
                  'turiferary/turiferary-2.jpg'
                ),
                new MassServiceInstruction(
                  'Incensar a la asamblea',
                  'Una vez incensados el celebrante  y los concelebrantes (si hay), dirigirse en frente del altar y viendo hacia la asamblea' +
                  ' hacer una reverencia, 3 ductus y finalmente hacer otra reverencia y volver a tu lugar',
                  'turiferary/incensando-a-la-asamblea.jpg'
                ),
              ],
            ),
            new MassService(MassRole.roles.miter,
              "Una vez que besó el evangeliario se le da la mitra."
            ),
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
          massServices:
            [
              new MassService(MassRole.roles.acolyte, ""),
              new MassService(MassRole.roles.miter,
                "Después de la oración sobre las ofrendas, se le quita el solideo (esto lo realiza un sacerdote o díácono, pero quien tiene la mitra resguarda el solideo)"
              )
            ]
        },
        {
          name: 'Plegaria eucarística',
          parts:
            [
              {
                name: 'Prefacio',
                description: 'Reconocemos la Bondad y Santidad de Dios. Peticiones a Dios',
              },
              {
                name: 'Santus',
                massServices: [
                  new MassService(MassRole.roles.candlestick, ""),
                  new MassService(MassRole.roles.thuriferary, "",
                    [
                      new MassServiceInstruction('Preparar incensario',
                        'Con ayuda de la naveta colocar incienso en el incensario poco antes de terminar el canto del Santo',
                        'turiferary/poniendo-incienso_.jpg'
                      ),
                    ],),
                ]
              },
              {
                name: 'Epíclesis',
                massServices: [
                  new MassService(MassRole.roles.candlestick, ""),
                  new MassService(MassRole.roles.thuriferary, "",
                    [
                      new MassServiceInstruction('En frente del altar',
                        'Llevar el incencario hasta enfrente del altar, en medio de los dos ciriales y ponerse de rodillas sin estar moviendo el incensario',
                        'turiferary/incensario-frente-al-altar-consagracion.jpg'),
                    ],),
                  new MassService(MassRole.roles.acolyte, ""),
                ]
              },
              {
                name: 'Consagración',
                description: 'Conversión del pan y el vino en el cuerpo y la Sangre de Cristo',
                massServices: [
                  new MassService(MassRole.roles.candlestick, ""),
                  new MassService(MassRole.roles.thuriferary, "",
                    [
                      new MassServiceInstruction(
                        'Incensar a la Hostia Consagrada',
                        'Cuando el celebrante eleve la hostia, que coincide cuando se tocan las campanas,' +
                        ' incensar con tres ductus a Jesús Sacramentado',
                        'turiferary/consagracion-cuerpo-de-cristo.jpg'),
                      new MassServiceInstruction(
                        'Incensar a la Sangre del Jesús',
                        'Cuando el celebrante eleve el caliz con la Sangre de Jesús, que coincide cuando se tocan las campanas,' +
                        ' incensar con tres ductus a Jesús Sacramentado',
                        'turiferary/consagracion-elevacion-sangre.jpg'),
                      new MassServiceInstruction(
                        'Reverencia previo a retirarse',
                        'Una vez que haya terminado la consagración, cuando todos se ponen de pie, ponerse de pie y hacer una reverencia y retirarse. ' +
                        'Ya no hará uso del incensario durante la misa, a excepción de cuando se expone el Santísimo al finalizarla' +
                        ' o si hay alguna procesión con el Santísimo',
                        'turiferary/incensario-consagracion.jpg'),
                    ],),
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
        }
        ,
        {
          name: 'Rito de la Comunión',
          description:
            'Padre nuestro (oración que Cristo no enseñó), Cristo se nos da en alimento para nuestra alma si estamos en gracia.',
          parts:
            [
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
        }
      ]
    },
    {
      name: 'Ritos de despedida',
      description:
        'Oración de petición. Bendición del sacerdote',
      parts:
        [
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
  ]
;
