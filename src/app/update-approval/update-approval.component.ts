import {Component, OnInit} from '@angular/core';
import {UpdateApprovalService} from './update-approval.service';
import {Router} from '@angular/router';
import {Constant} from '../Helper/constant';
import {OutGoingService} from '../out-going/out-going.service';
import {AssignService} from '../assign-service-center/assign.service';
import {Vendor} from '../assign-service-center/vendor';

@Component({
  selector: 'app-update-approval',
  templateUrl: './update-approval.component.html',
  styleUrls: ['./update-approval.component.scss']
})
export class UpdateApprovalComponent implements OnInit {

  _updatedApprovalIssuesHeading: string = Constant.UPDATE_ISSUES_APPROVAL_HEADING;
  _serviceText: string = Constant.SERVICE_CENTER_TEXT;
  private _requestId: string = Constant.REQUEST_ID_TABLE_COL_NAME;
  private _modelImei: string = Constant.MODEL_IMEI;
  private _serviceCenter: string = Constant.SERVICE_CENTER_TABLE_COL_NAME;
  private _issuesId: string = Constant.ISSUE_ID;
  private _issuesDetails: string = Constant.ISSUES_DETAILS;
  private _repairCost: string = Constant.MODEL_COST;
  private _action: string = Constant.ACTION_BUTTON;
  private _confirm: string = Constant.CONFIRM;
  _print: string = Constant.JOB_SHEET;
  _deleteMessage: string = Constant.DELETE_MESSAGE;
  _cancel: string = Constant.CANCEL;
  _delete: string = Constant.DELETE;
  _printJobSheet: string = Constant.JOB_SHEET;
  _jobDescription: string = Constant.JOB_DESCRIPTION;
  private _modelIMEI = Constant.MODEL_IMEI;
  private _serviceCenterName: string = Constant.SERVICE_CENTER_NAME;
  private _serialNumber: string = Constant.SERIAL_NUMBER;
  private _jobDescriptionTable: string = Constant.JOB_DESCRIPTION_TABLE;
  _close: string = Constant.CLOSE;
  private _total: string = Constant.TOTAL;
  _updatedIssuesArray: string[] = [];
  private _issueIdArray: any[] = [];
  private _updateIssueStatus = {};
  _modelIssue: string = Constant.MODEL_ISSUE;
  _modelCost: string = Constant.MODEL_COST;
  action: string = Constant.ACTION_BUTTON;
  _confirmText: string = Constant.CONFIRM_TEXT;
  _confirmIssue: string[] = [];
  private _requestedId: string;
  _vendorNameArray: Vendor[] = [];
  requestJob = {};
  private _costArray: any[] = [];
  private count = Constant.count;


  constructor(private _api: UpdateApprovalService,
              private _route: Router,
              private _apiOutGoing: OutGoingService,
              private _vendor: AssignService) {
  }

  ngOnInit() {

    this._api.getModel().subscribe(
      res => {
        for (let i of res) {
          if (i['request_status'] === '8') {
            this._updatedIssuesArray.push(i);
          }
        }
        this._costArray = this._updatedIssuesArray[0]['issues'];
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
    this._route.navigate(['service-center']);
  }

  getRejectList(i: any) {
    this._issueIdArray = i;
  }

  updateIssue() {
    this._updateIssueStatus[Constant.ID] = this._issueIdArray['id'];
    this._updateIssueStatus[Constant.ISSUE_STATUS] = 2;

    this._apiOutGoing.updateIssueStatus(this._updateIssueStatus).subscribe(
      res => {
        if (res['res'] === true) {
          window.location.reload();
        }
      }, err => {
        console.log(err);
      }
    );
  }

  confirmRequest() {
    this.requestJob[Constant.ID] = this._requestedId;
    this.requestJob[Constant.REQUEST_STATUS] = '3';
    this.requestJob[Constant.IS_STATUS] = 1;

    this._apiOutGoing.updateConfirmRequest(this.requestJob).subscribe(
      res => {
        if (res['res'] === true) {
          window.location.reload();
        }
      }, err => {
        console.log(err);
      }
    );
  }

  confirmIssues(issues: any, requestId: any) {
    for (let i = 0; i < issues.length; i++) {
      if (issues[i]['issue_status'] === '1' || issues[i]['issue_status'] === '5') {
        this._confirmIssue.push(issues[i]);
      }
    }
    this._requestedId = requestId;
  }

  reload() {
    window.location.reload();
  }

  getTotalCost() {
    let sum = 0;
    for (let i = 0; i < this._costArray.length; i++) {
      if (this._costArray[i]['issue_status'] !== '2') {
        Constant.count ++;
        sum += this._costArray[i]['repair_cost'];
      }
    }
    return sum;
  }
}
