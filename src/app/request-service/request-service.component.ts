import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Constant} from '../Helper/constant';
import {ServiceRequest} from './service-request.service';
import {ServiceCenter} from './service-center';
import {AssignService} from '../assign-service-center/assign.service';
import {Vendor} from '../assign-service-center/vendor';


@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.scss']
})
export class RequestServiceComponent implements OnInit {

  _notCompleteModel = Constant.NOT_COMPLETE_MODEL;
  _serviceCenterText = Constant.MODEL_SERVICE_CENTER;
  _modelImei = Constant.TABLE_COL_NAME_IMEI;
  _issue = Constant.ISSUES_DETAILS;
  private _issuesDetails = Constant.ADD_ESTIMATE;
  private _cost = Constant.COST;
  _notCompleteModelArray: ServiceCenter[] = [];
  private _vendorNameArray: Vendor[] = [];

  constructor(private router: Router,
              private _api: ServiceRequest,
              private _vendor: AssignService) {
  }

  ngOnInit() {
    this._api.getServiceCenterModel().subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          if(res[i]['request_status'] === '5'){
            this._notCompleteModelArray.push(res[i]);
          }
        }
        console.log(this._notCompleteModelArray);
      },
      err => {
        console.log(err);
      }
    );

    this._vendor.getVendorList().subscribe(
      res => {
        for (let i = 0; i < res['res'].length; i++) {
          this._vendorNameArray.push(res['res'][i]);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  Dashboard() {
    this.router.navigate(['service-center']);
  }
}
