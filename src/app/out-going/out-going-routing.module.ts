import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OutGoingComponent} from './out-going.component';

const routes: Routes = [
  {
    path: '',
    component: OutGoingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutGoingRoutingModule { }
