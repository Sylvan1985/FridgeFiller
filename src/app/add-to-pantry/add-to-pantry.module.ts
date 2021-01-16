import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToPantryPageRoutingModule } from './add-to-pantry-routing.module';

import { AddToPantryPage } from './add-to-pantry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToPantryPageRoutingModule
  ],
  declarations: [AddToPantryPage]
})
export class AddToPantryPageModule {}
