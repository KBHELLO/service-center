import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutGoingRoutingModule } from './out-going-routing.module';
import { OutGoingComponent } from './out-going.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    OutGoingComponent
  ],
  imports: [
    CommonModule,
    OutGoingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OutGoingModule { }
