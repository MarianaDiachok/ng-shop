import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PathNotFoundComponent} from './layout/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: {title: 'Product Manager'}
  },
  {
    path: '**',
    component: PathNotFoundComponent,
    data: { title: 'Path not found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
