import {Component, OnInit} from '@angular/core';
import {Constant} from '../Helper/constant';
import {InOfficeService} from './in-office.service';
import {Router} from '@angular/router';
import {AssignService} from '../assign-service-center/assign.service';
import {Vendor} from '../assign-service-center/vendor';
import {ModelInfoService} from '../model-info/model-info.service';
import {ServiceCenter} from '../request-service/service-center';
import {ApproveModel} from '../out-going/ApproveModel';
import {WaitingApproval} from '../out-going/WaitingApproval';

class issue {

  id: number;
  issue_details: string;
  issue_status: string;
  repair_cost: string;
  request_id: string;
  requester_id: string;

}


@Component({
  selector: 'app-in-office',
  templateUrl: './in-office.component.html',
  styleUrls: ['./in-office.component.scss']
})
export class InOfficeComponent implements OnInit {

  _waitingForServiceCenter = Constant.IN_OFFICE;
  _waitingModel: ApproveModel[] = [];
  _modelIMEI = Constant.MODEL_IMEI;
  _modelName = Constant.MODEL_NAME;
  _modelServiceCenter = Constant.MODEL_SERVICE_CENTER;
  _id = Constant.ISSUE_ID;
  _modelIssue = Constant.MODEL_ISSUE;
  _modelCost = Constant.MODEL_COST;
  _out = Constant.OUT;
  _inOfficeConfirmation = Constant.IN_OFFICE_CONFIRMATION;
  _cancel = Constant.CANCEL;
  _requestId;
  _serviceCenterText = Constant.SERVICE_CENTER_TEXT;
  _dashboard: string = Constant.DASHBOARD;
  _updateForOutRequest = {};
  private _vendorNameArray: Vendor[] = [];
  _print: string = Constant.PRINT;
  _printJobSheet: string = Constant.JOB_SHEET;
  _jobDescription: string = Constant.JOB_DESCRIPTION;
  private _jobSheetImei: number;
  _jobSheetArray: any[] = [];
  private _serviceCenterName: string = Constant.SERVICE_CENTER_NAME;
  private _serialNumber: string = Constant.SERIAL_NUMBER;
  private _jobDescriptionTable: string = Constant.JOB_DESCRIPTION_TABLE;
  private _total: string = Constant.TOTAL;
  private _costArray: number[] = [];
  _close: string = Constant.CLOSE;
  _displayCount: number = 0;
  _needApprovalModel: WaitingApproval[] = [];
  _modelImei: string;
  _modelNameIssue: string;
  _companyName: string = Constant.COMPANY_NAME;
  _selectedVendor: object[] = [];


  constructor(private inOfficeApi: InOfficeService,
              private _route: Router,
              private _vendor: AssignService,
              private _modelAPI: ModelInfoService,) {
  }

  ngOnInit() {
    this.inOfficeApi.getApprovalModel().subscribe(
      res => {
        this._waitingModel = res['res'];
      },
      err => {
        console.log(err);
      }
    );

    this._vendor.getVendorList().subscribe(
      res => {
        this._vendorNameArray = res['res'];
      },
      err => {
        console.log(err);
      }
    );
  }

  updateIssue() {
    this._updateForOutRequest[Constant.REQUESTED_ID] = this._requestId;
    this.inOfficeApi.updateForOut(this._updateForOutRequest).subscribe(
      res => {
        if (res['res'] === true) {
          window.location.reload();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  getRequestId(assignedModelElement: any) {
    this._requestId = assignedModelElement;
  }

  Dashboard() {
    this._route.navigate(['service-center']);
  }

  jobSheetImei(value) {
    this._jobSheetImei = value;
    this._modelAPI.getModelDetails().subscribe(
      res => {
        for (let i of res) {
          if (i['imei'] === this._jobSheetImei && i['request_status'] === '2') {
            this._jobSheetArray.push(i);
          }
        }
        this._costArray = this._jobSheetArray[0]['issues'];
        console.log(this._costArray);
      },
      err => {
        console.log(err);
      }
    );
  }

  getTotalCost() {
    let sum = 0;
    for (let i = 0; i < this._needApprovalModel.length; i++) {
      if (this._needApprovalModel[i].issue_status === '1') {
        sum += this._needApprovalModel[i].cost;
      }
    }
    return sum;
  }

  oneDisplayBlock(imei: string, model_name: string) {
    this._displayCount = 1;
    let url = Constant.APPROVAL_MODEL + '&imei=' + imei + '&is_request_details=1';
    this.inOfficeApi.needApprovalModel(url).subscribe(
      res => {
        this._needApprovalModel = res['res'];
        this._modelNameIssue = model_name;
        this._modelImei = imei;
        this.getServiceCenter();
        this.getTotalCost();
      },
      err => {
        console.log(err);
      }
    );
  }

  getServiceCenter() {
    let vendor = {};
    for (let sc of this._vendorNameArray) {
      if (this._needApprovalModel[0]['service_center_id'] === +sc.vendor_id) {
        vendor['first_name'] = sc.first_name;
        vendor['last_name'] = sc.last_name;
        vendor['address'] = sc.vendor_address;
        vendor['phone'] = sc.vendor_phone_number;
        this._requestId = this._needApprovalModel[0].id;
      }
    }
    this._selectedVendor.push(vendor);
  }
}
