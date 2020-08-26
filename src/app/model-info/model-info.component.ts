import {Component, OnInit} from '@angular/core';
import {Constant} from '../Helper/constant';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModelInfoService} from './model-info.service';
import {ServiceCenter} from '../request-service/service-center';
import {AssignService} from '../assign-service-center/assign.service';
import {Vendor} from '../assign-service-center/vendor';

@Component({
  selector: 'app-model-info',
  templateUrl: './model-info.component.html',
  styleUrls: ['./model-info.component.scss']
})
export class ModelInfoComponent implements OnInit {
  _serviceCenterText: string = Constant.SERVICE_CENTER_TEXT;
  _modelInfoHeading: string = Constant.MODEL_INFO_HEADING;
  _imeiFormGroup: FormGroup;
  _enterImeiNumber: string = Constant.ENTER_IMEI_NUMBER;
  _submit: string = Constant.SUBMIT_BUTTON;
  _modelDetailsArray: ServiceCenter[] = [];
  _modelDetailsHeading: string = Constant.MODEL_DETAILS_HEADING;
  private _tableColNameImei: string = Constant.TABLE_COL_NAME_IMEI;
  private _serviceCenter: string = Constant.MODEL_SERVICE_CENTER;
  private _requestStatus: string = Constant.MODEL_STATUS;
  private _issuesDetails: string = Constant.ISSUES_DETAILS;
  private _requestId: string = Constant.MODEL_NAME;
  private _issueId: string = Constant.ISSUE_ID;
  private _issue: string = Constant.ISSUES;
  private _cost: string = Constant.COST;
  private _issueStatus = Constant.STATUS;
  private _waitingForApproval: string = Constant.WAITING_FOR_APPROVAL;
  private _rejectStatus: string = Constant.REJECT_STATUS;
  private _inServiceStatus: string = Constant.IN_SERVICE_CENTER_STATUS;
  private _completed: string = Constant.COMPLETED;
  private _notCompleted: string = Constant.NOT_COMPLETED;
  private _issueAccepted: string = Constant.ISSUE_ACCEPTED;
  private _issueReject: string = Constant.ISSUE_REJECT;
  private _notSolved: string = Constant.NOT_SOLVED;
  private _solved: string = Constant.SOLVED;
  private _solvedRequest: string = Constant.SOLVED_REQUEST;
  _displayCount: number = 0;
  _isError: boolean = false;
  private _validationMessage: string = Constant.VALIDATION_MESSAGE;
  _back: string = Constant.BACK;
  private _imeiValidation = Constant.IMEI_VALIDATION;
  _vendorNameArray: Vendor[] = [];
  private _stock: string = Constant.STOCK;

  constructor(private router: Router,
              private _fb: FormBuilder,
              private _api: ModelInfoService,
              private _vendor: AssignService) {
  }

  ngOnInit() {
    this._imeiFormGroup = this._fb.group({
      imei: ['', Validators.required]
    });

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


  getImei() {
    if (this._imeiFormGroup.get('imei').value === '' ||
      this._imeiFormGroup.get('imei').value === null) {
      this._isError = true;
    } else {
      this._displayCount = 1;
      this._api.getModelDetails().subscribe(
        res => {
          console.log(res);
          for (let i = 0; i < res.length; i++) {
            if (res[i]['imei'] === this._imeiFormGroup.get('imei').value) {
              this._modelDetailsArray.push(res[i]);
            }
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  back() {
    window.location.reload();
  }
}
