import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddIssueRoutingModule } from './add-issue-routing.module';
import { AddIssueComponent } from './add-issue.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddIssueComponent],
  imports: [
    CommonModule,
    AddIssueRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddIssueModule { }
