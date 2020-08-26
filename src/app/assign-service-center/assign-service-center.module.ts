import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignServiceCenterRoutingModule } from './assign-service-center-routing.module';
import { AssignServiceCenterComponent } from './assign-service-center.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataFilterPipe } from './data-filter.pipe';
import { ImeiSearchPipe } from './imei-search.pipe';
import { SearchIssuePipe } from './search-issue.pipe';

@NgModule({
  declarations: [
    AssignServiceCenterComponent,
    DataFilterPipe,
    ImeiSearchPipe,
    SearchIssuePipe
  ],
  imports: [
    CommonModule,
    AssignServiceCenterRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class AssignServiceCenterModule { }
