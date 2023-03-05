import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleeptimesPageRoutingModule } from './sleeptimes-routing.module';

import { SleeptimesPage } from './sleeptimes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleeptimesPageRoutingModule
  ],
  declarations: [SleeptimesPage]
})
export class SleeptimesPageModule {}
