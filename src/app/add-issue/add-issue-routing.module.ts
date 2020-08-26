import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddIssueComponent} from './add-issue.component';


const routes: Routes = [
  {
    path: '',
    component: AddIssueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddIssueRoutingModule { }
