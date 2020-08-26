import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateApprovalComponent} from './update-approval.component';


const routes: Routes = [
  {
    path: '',
    component: UpdateApprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateApprovalRoutingModule { }
