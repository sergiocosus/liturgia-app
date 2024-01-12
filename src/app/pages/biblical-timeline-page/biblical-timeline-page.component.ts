import {Component} from '@angular/core';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  content?: string;
}

@Component({
  selector: 'app-biblical-timeline-page',
  templateUrl: './biblical-timeline-page.component.html',
  styleUrls: ['./biblical-timeline-page.component.scss']
})
export class BiblicalTimelinePageComponent {
  events: EventItem[];

  constructor() {
    this.events = [
      {
        status: 'Los cananaeos',
        date: '3100 - 2100 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/cananeos.jpg',
        content: `Palestina: época del Bronce Antiguo, 3100 a 2100. Los cananeos.
Antepasados de Abrahán, nómadas en Mesopotamia.`,
      },
      {
        status: 'Egipto: Imperio Medio',
        date: '2100 a 1550 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/abraham-canan.jpg',
        content: `Llegada de ABRAHÁN a Canaán, Gn 12`,
      },
      {
        status: 'Abraham',
        date: '1850 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/abraham.jpg',
        content: ``,
      },
      {
        status: 'Isaac',
        date: '1800 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/isaac.jpg',
        content: ``,
      },
      {
        status: 'Jacob (Israel)',
        date: '1750 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/Jacob.jpg',
        content: ``,
      },
      {
        status: 'Los Patriarcas en Egipto.',
        date: '1700 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/patriarcas.webp',
        content: ``,
      },
      {
        status: 'Época del Bronce nuevo',
        date: '1550 a 1200 a. C. ',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/hurritas.jpg',
        content: `Hurritas en Palestina`,
      },
      {
        status: 'Los hebreos en trabajos forzados para construir Pi-Ramsés',
        date: '1300 a. C. ',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/esclavos.jpg',
        content: `Ex 1 11.`,
      },
      {
        status: 'Moisés',
        date: '1250 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/moises.jpg',
        content: `Ex 1 11.`,
      },
      {
        status: 'JOSUÉ invade Palestina',
        date: '1220 - 1200 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/conquista-palestina.jpg',
        content: `En los recintos excavados (p. ej. Jasor, Jos 11 10), nivel arqueológico correspondiente señalado por estratos de ruinas y empobrecimiento de habitat y de los utensilios`,
      },
      {
        status: 'Los JUECES',
        date: '1200 a 1025 apr. a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/sanson-y-dalila-anthonis-van-dyck-1628.webp',
        content: `Hacia el 1125: Débora y Barac vencen a los cananeos en Tanac.`,
      },
      {
        status: 'Victoria de los filisteos en Afec y muerte de Elí.',
        date: '1050 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/arca-alianza.jpg',
        content: ``,
      },
      {
        status: 'SAMUEL',
        date: '1040 a. C. ',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/eli-samuel.jpeg',
        content: `Comienzos de SAMUEL. Santuario de Siló.`,
      },
      {
        status: 'SAÚL',
        date: '1030 a 1010 a. C. ',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/saul.jpg',
        content: `Reside en Guibeá. Victorias sobre los amonitas y los filisteos. Derrota en Gelboé y muerte de Saúl.`,
      },
      {
        status: 'DAVID',
        date: '1010-970 a. C. ',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/David-y-Goliat-4.avif',
        content: `Toma de Jerusalén hacia el 1000. Victorias sobre los filisteos, moabitas, el rey de Soba, arameos de Damasco, amonitas, amalecitas, edomitas; alianza con Jamat, 2 S 8.`,
      },
      {
        status: 'SALOMÓN',
        date: '970 - 931 a. C. ',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/salomon.jpg',
        content: `Se casa con la hija del faraón. Año 4.º: construcción del Templo, 1 R 6 1. Comercio con Fenicia y Arabia. Actividad literaria: proverbios, historiografía (2 S 9 - 1 R 2).`,
      },
      {
        status: 'Reino del Norte',
        date: '931 - 722 a. C. ',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'assets/reino-del-norte.png',
        content: `
  <table>
    <tr>
      <th>Política Interior</th>
      <td>
        Ausencia de una monarquía estable
        - 9 intentos de dinastía
      </td>
    </tr>
    <tr>
      <th>Política Exterior</th>
      <td>
        Alianzas continuas con diferentes países
      </td>
    </tr>
    <tr>
      <th>Política Religiosa</th>
      <td>
        1. Idolatría
        2. Culto en un lugar fuera de Jerusalén
      </td>
    </tr>
    <tr>
      <th>Profetas</th>
      <td>
        Elías, Eliseo, Miqueas, Oseas
      </td>
    </tr>
    <tr>
      <th>Aportación literaria</th>
      <td>
        Tradiciones que tuvieron importancia en la biblia
      </td>
    </tr>
    <tr>
      <th>Aportación teológica</th>
      <td>
        - Llamada a la conversión
        - Shemá
      </td>
    </tr>
  </table>
`,
      },
      {
        status: 'Reino del Sur',
        date: '931 - 586 a. C. ',
        icon: 'pi pi-cog',
        color: '#673AB7',
        image: 'assets/reino-del-sur.png',
        content: `
<table>
  <tr>
    <th>Política Interior</th>
    <td>
      Monarquía estable
    </td>
  </tr>
  <tr>
    <th>Política Exterior</th>
    <td>
      Luchas contra
      1. Israel
      2. Asiria
      3. Egipto
      4. Babilonia
    </td>
  </tr>
  <tr>
    <th>Política Religiosa</th>
    <td>
      Religiosidad adecuada por dar culto en Jerusalén
    </td>
  </tr>
  <tr>
    <th>Profetas</th>
    <td>
      Isaías, Hulda (profetiza)
    </td>
  </tr>
  <tr>
    <th>Aportación literaria</th>
    <td>
      Tradiciones sobre los reyes judíos, la historia deuteronomista
    </td>
  </tr>
  <tr>
    <th>Aportación teológica</th>
    <td>
      Elección divina de Jerusalén y David
    </td>
  </tr>
</table>
`,
      },
      {
        status: 'Imperio Neobabilónico',
        date: '587-538 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/babilonico-jerusalen.jpeg',
        content: `Tres deportaciones 597, 587, 582`,
      },
      {
        status: 'LA RESTAURACIÓN EN LA ÉPOCA PERSA',
        date: '538-333 a. C.',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/segundo-templo.jpg',
        content: `
        <ul>
            <li>
                538: Edicto de Ciro. Regreso del Destierro, SESBASAR alto comisario, Esd 5 14.
            </li>
            <li>
                Otoño del 538: restauración del altar de los holocaustos, Esd 3 3.
            </li>
            <li>
                Primavera del 537: primera piedra del segundo Templo, Esd 3 8; 5 16.
            </li>
            <li>
                520-515: construcción del segundo Templo, Esd 6 15; Ag 2 15. El alto comisario ZOROBABEL y el Sumo Sacerdote Josué. Los profetas Ageo y Zacarías.
            </li>
        </ul>
        `,
      },
      {
        status: '1.ª misión de NEHEMÍAS',
        date: '445-443 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/nehemias.jpg',
        content: `, Ne 2 1; 5 14, y restauración de las murallas. Oposición de Sambal.lat (gobernador de Samaría según una carta de Elefantina), de Tobías el amonita y de Guesen el árabe.
        Bajo Jerjes y Artajerjes, Malaquías. Quizá Job, Proverbios, Cantar y Rut. Numerosos Salmos.`,
      },
      {
        status: 'Misión de Esdras',
        date: '428 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/Esdras.webp',
        content: ``,
      },
      {
        status: 'Judea forma un estado teocrático con moneda autónoma',
        date: '350-333 a. C. ',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/sumo-sacerdote.webp',
        content: `Antes de Alejandro, el profeta Joel y sin duda la obra del Cronista: libros de las Crónicas y de Esdras-Nehemías. En tiempo de Alejandro, Za 9-14.

Fin de la época persa o comienzo de la época helenística: Jonás, Tobías.`,
      },
      {
        status: 'ÉPOCA HELENÍSTICA.',
        date: '333-250 a. C. ',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/epoca-helenistica.webp',
        content: `Judea sometida a los Lágidas hasta el 200.

Tolomeo I establece judíos en Egipto y Seleuco I en Antioquía (Josefo).

Tolomeo II manda traducir al griego la Ley por los Setenta (carta apócrifa de Aristeas).

Tobías, gobernador de Amanítida (sus construcciones en Araq el-Emir). Archivos de Zenón. Activa helenización en Palestina.`,
      },
      {
        status: '',
        date: '250-200 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        content: `Posiblemente Eclesiástés y Ester.

Tolomeo III y Tolomeo IV victoriosos ofrecen sacrificios en Jerusalén (Josefo y 3 M).`,
      },
      {
        status: 'Judea sometida a los Seléucidas',
        date: '200-142 a. C. ',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/300px-Stattler-Machabeusze.jpg',
        content: `La constitución de Antíoco III aprueba el estatuto teocrático de los judíos, ver 2 M 4 11.

SIMÓN II el Justo, Sumo Sacerdote: obras en Jerusalén, Si 50. Jesús ben Sirá compone el Eclesiástico (Sirácida). ONÍAS III, Sumo Sacerdote: episodio de Heliodoro, Dn 11 20; 2 M 3.`,
      },
      {
        status: 'PALESTINA ROMANA HASTA ADRIANO',
        date: '63 a. C. - 135 d. C.',
      },
      {
        status: 'Pompeyo toma Jerusalén',
        date: 'Verano u otoño del 63 a. C. ',
        icon: 'pi pi-sun',

        color: '#9C27B0',
        image: 'assets/romanos.jpg',
        content: `Nombra a Hircano Sumo Sacerdote y lleva a Aristóbulo y a su hijo Antígono a Roma.
El idumeo ANTÍPATRO, ministro de Hircano, gobierna de hecho en Judea. Sublevaciones de los últimos Asmoneos`,
      },
      {
        status: 'La Sabiduría',
        date: 'Hacia el 50 a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        content: `En Alejandría`,
      },
      {
        status: 'HERODES EL GRANDE',
        date: '37 a 4 a.C.',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        image: 'assets/herodes-el-grande.jpg',
      },
      {
        status: 'Nacimiento de JESÚS',
        date: 'hacia el 7-6 (?) a. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
      },
      {
        status: 'Inicio de la predicación de JUAN EL BAUTISTA',
        date: '1 - 50 d. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
        content: `
        Entre el 1 y el 5: nacimiento de Pablo en Tarso. Discípulo de Gamaliel el Viejo, Hch 22 3, ver 5 34.`,
      },
      {
        status: 'Inicio de la predicación de JUAN EL BAUTISTA',
        date: '27-28 d. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
      },
      {
        status: 'Jesús en Jerusalén',
        date: 'Pascua del 28 d. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
      },
      {
        status: 'Muerte de Jesús',
        date: 'Pascua del 30 d. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
      },
      {
        status: 'Efusión del Espíritu sobre la Iglesia, Hch 2. La primera comunidad, Hch 2 42, etc.',
        date: 'Pentecostés del 30 d. C. ',
        icon: 'pi pi-sun',
        color: '#9C27B0',
      }
    ];
  }
}
