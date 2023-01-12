import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'liturgia-app';
  massParts = [
    {
      name: 'Rito de entrada',
      parts: [
        {
          name: 'Procesión de entrada',
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
