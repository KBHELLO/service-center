import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompleteRoutingModule } from './complete-routing.module';
import { CompleteComponent } from './complete.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CompleteComponent],
  imports: [
    CommonModule,
    CompleteRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompleteModule { }
