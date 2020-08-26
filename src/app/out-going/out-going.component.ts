import {Component, OnInit} from '@angular/core';
import {Constant} from '../Helper/constant';
import {FormBuilder} from '@angular/forms';
import {OutGoingService} from './out-going.service';
import {Router} from '@angular/router';
import {AssignService} from '../assign-service-center/assign.service';
import {Vendor} from '../assign-service-center/vendor';
import {ApproveModel} from './ApproveModel';
import {WaitingApproval} from './WaitingApproval';

class issue {

  id: number;
  imei: string;
  issue_status: string;
  repair_cost: string;
  request_id: string;
  requester_id: string;

}

@Component({
  selector: 'app-out-going',
  templateUrl: './out-going.component.html',
  styleUrls: ['./out-going.component.scss']
})
export class OutGoingComponent implements OnInit {

  _outGoingServiceCenter: string = Constant.OUT_GOING_HEADING;
  _isError: boolean = false;
  _modelIMEI = Constant.MODEL_IMEI;
  _modelName = Constant.MODEL_NAME;
  _modelServiceCenter = Constant.MODEL_SERVICE_CENTER;
  _modelIssue = Constant.MODEL_ISSUE;
  _modelCost = Constant.MODEL_COST;
  _serviceCenterAssignedModel: ApproveModel[] = [];
  action = Constant.ACTION_BUTTON;
  _id = Constant.ISSUE_ID;
  _confirm = Constant.CONFIRM;
  _issueIdArray: string[] = [];
  _idValue = '';
  _isSelected = false;
  _warning = Constant.WARNING;
  _deleteMessage = Constant.DELETE_MESSAGE;
  _updateIssueStatus = {};
  _cancel = Constant.CANCEL;
  _delete = Constant.DELETE;
  _confirmText = Constant.CONFIRM_TEXT;
  _confirmIssue: string[] = [];
  _requestedId;
  requestJob = {};
  _next: string = Constant.NEXT_BUTTON;
  _dashboard: string = Constant.DASHBOARD;
  _issueSolutionVendorCost: string = Constant.ISSUE_SOLUTION_VENDOR_COST;
  _cost: string = Constant.COST_MODEL;
  _storage: string = Constant.STORAGE;
  _color: string = Constant.COLOR;
  _close: string = Constant.CLOSE;
  _submit: string = Constant.SUBMIT_BUTTON;
  _needApprovalModel: WaitingApproval[] = [];
  _selectedIssueId: number[] = [];
  _modalDisplayCount: number = 0;
  _back: string = Constant.BACK;
  _remarkApprovalReject: string = Constant.REMARKS_APPROVAL_REJECT;
  _isRemarkBlank: boolean = false;
  _validationMessage: string = Constant.VALIDATION_MESSAGE;
  _approveModel: object[] = [];
  _formIndex: number;
  _isPresent: boolean = false;
  _isEqual: boolean = true;
  _somethingWentWrong: string = Constant.ERROR_MESSAGE;
  _theFinalJson = {};

  private _vendorNameArray: Vendor[] = [];

  constructor(private _fb: FormBuilder,
              private _api: OutGoingService,
              private _route: Router,
              private _vendor: AssignService) {
  }

  remarkForm = this._fb.group({
    remarks: ['']
  });

  ngOnInit() {
    this._api.getApprovalModel().subscribe(
      res => {
        this._serviceCenterAssignedModel = res['res'];
      },
      err => {
        console.log(err);
      },
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

  updateIssue(issueId) {
    this._updateIssueStatus[Constant.ID] = issueId;
    this._updateIssueStatus[Constant.ISSUE_STATUS] = 2;
    this._api.updateIssueStatus(this._updateIssueStatus).subscribe(
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

  Dashboard() {
    this._route.navigate(['service-center']);
  }

  getApproveModel(imei: string) {
    let url = Constant.APPROVAL_MODEL + '&imei=' + imei + '&is_request_details=1';
    this._api.needApprovalModel(url).subscribe(
      res => {
        this._needApprovalModel = res['res'];
      },
      err => {
        console.log(err);
      }
    );
  }

  getSelectIssue(issue_id: number, index: number, status: string, solution_id) {
    if (this.remarkForm.get('remarks').value === '') {
      this._isRemarkBlank = true;
      this._formIndex = index;
    } else {
      let index: number;
      if (this._approveModel.length === 0) {
        this._approveModel.push(this.populateJson(issue_id, status, this.remarkForm.get('remarks').value));
      } else {
        for (let i = 0; i < this._approveModel.length; i++) {
          if (this._approveModel[i]['issue_id'] === issue_id) {
            this._isPresent = true;
            index = i;
            break;
          } else {
            this._approveModel.push(this.populateJson(issue_id, status, this.remarkForm.get('remarks').value));
          }
        }
        if (this._isPresent) {
          this._approveModel.splice(index, 1);
          this._approveModel.push(this.populateJson(issue_id, status, this.remarkForm.get('remarks').value));
        }
      }
    }
    this._theFinalJson['issue_details'] = this._approveModel;
    this._theFinalJson['is_service_center'] = false;
    this._theFinalJson['request_id'] = solution_id;
  }

  populateJson(id, status, remarks) {
    let _approveJson = {};
    _approveJson['issue_id'] = id;
    _approveJson['issue_status'] = status;
    _approveJson['remarks'] = remarks;
    return _approveJson;
  }

  submitModal() {
    if (this._needApprovalModel.length !== this._approveModel.length) {
      this._isEqual = false;
    } else {
      this._api.newRequestApproval(this._theFinalJson).subscribe(
        res => {
          if(res['res'] === true){
            window.location.reload();
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  modalClose() {
    this._selectedIssueId = [];
    this._approveModel = [];
    this._modalDisplayCount = 0;
    this.remarkForm.reset();
  }

  backModal() {
    this._modalDisplayCount = 0;
    this._selectedIssueId = [];
    this._approveModel = [];
    this._modalDisplayCount = 0;
    this.remarkForm.reset();
    this._isEqual = true;
  }

  submittedIssue() {

  }
}

