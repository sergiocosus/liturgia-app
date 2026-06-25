import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {MassServiceIconComponent} from './components/mass-service-icon/mass-service-icon.component';
import { providePrimeNG } from "primeng/config";
import Aura from '@primeuix/themes/aura';

@NgModule({
  declarations: [
    AppComponent,
    MassServiceIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ],
  exports: [
    MassServiceIconComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
