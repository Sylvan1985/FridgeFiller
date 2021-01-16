import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpantryPage } from './viewpantry.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpantryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpantryPageRoutingModule {}
