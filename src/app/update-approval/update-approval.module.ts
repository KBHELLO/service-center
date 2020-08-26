import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateApprovalRoutingModule } from './update-approval-routing.module';
import { UpdateApprovalComponent } from './update-approval.component';


@NgModule({
  declarations: [UpdateApprovalComponent],
  imports: [
    CommonModule,
    UpdateApprovalRoutingModule
  ]
})
export class UpdateApprovalModule { }
