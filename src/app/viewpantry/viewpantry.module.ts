import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpantryPageRoutingModule } from './viewpantry-routing.module';

import { ViewpantryPage } from './viewpantry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpantryPageRoutingModule
  ],
  declarations: [ViewpantryPage]
})
export class ViewpantryPageModule {}
