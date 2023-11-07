import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavigationComponent} from "./core/components/navigation/navigation.component";

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/index-page/index-page.module').then(m => m.IndexPageModule)
      },
      {
        path: 'mass',
        loadChildren: () => import('./pages/mass-page/mass-page.module').then(m => m.MassPageModule)
      },
      {
        path: 'liturgical-objects',
        loadChildren: () => import('./pages/liturgical-objects-page/liturgical-objects-page.module').then(m => m.LiturgicalObjectsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
