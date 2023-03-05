import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleeptimesPage } from './sleeptimes.page';

const routes: Routes = [
  {
    path: '',
    component: SleeptimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleeptimesPageRoutingModule {}
