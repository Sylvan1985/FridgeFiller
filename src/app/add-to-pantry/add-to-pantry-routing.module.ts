import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToPantryPage } from './add-to-pantry.page';

const routes: Routes = [
  {
    path: '',
    component: AddToPantryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToPantryPageRoutingModule {}
