import {Component, signal} from '@angular/core';
import {MatFormField, MatLabel, MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {SafePipe} from "../../../shared/pipe/safe.pipe";

@Component({
  selector: 'app-biblical-games',
  imports: [
    MatSelect,
    MatOption,
    FormsModule,
    MatFormField,
    SafePipe,
    MatLabel
  ],
  templateUrl: './biblical-games.component.html',
  styleUrl: './biblical-games.component.scss',
})
export class BiblicalGamesComponent {
  gameId = null;
}
