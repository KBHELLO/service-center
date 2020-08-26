import {Component, OnInit} from '@angular/core';
import {CompleteService} from './complete.service';
import {Constant} from '../Helper/constant';
import {Router} from '@angular/router';
import {ServiceCenter} from '../request-service/service-center';
import {AssignService} from '../assign-service-center/assign.service';
import {Vendor} from '../assign-service-center/vendor';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModelInfoService} from '../model-info/model-info.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {
  _serviceCenterText: string = Constant.SERVICE_CENTER_TEXT;
  _completedModel: string = Constant.COMPLETE_MODEL;
  _completeModelArray: ServiceCenter[] = [];
  _imei: string = Constant.TABLE_COL_NAME_IMEI;
  _serviceCenter: string = Constant.MODEL_SERVICE_CENTER;
  _issuesDetails: string = Constant.ISSUES_DETAILS;
  private _issue: string = Constant.ISSUES;
  private _cost: string = Constant.COST;
  _action: string = Constant.ACTION_BUTTON;
  private _stock: string = Constant.STOCK;
  _vendorNameArray: Vendor[] = [];
  _confirmationMessage: string = Constant.CONFIRMATION_MESSAGE;
  _isChecked: boolean;
  _validationMessage: string = Constant.VALIDATION_MESSAGE;
  private _modelImei: number;
  _imeiForm: FormGroup;
  _allIssueSolved: string = Constant.ALL_ISSUES_SOLVED;
  _saveChange: string = Constant.SAVE_CHANGES;
  _close: string = Constant.CLOSE;
  _notFound: string = Constant.NOT_FOUND;
  _isFound: boolean = true;
  private _makeStockJson: {} = {};
  private _isTrue: boolean = false;
  private _makeStockFullUrl: string;
  private requestId: number;


  constructor(private _api: CompleteService,
              private router: Router,
              private _vendor: AssignService,
              private _fb: FormBuilder,
              private _modelApi: ModelInfoService) {
  }

  ngOnInit() {

    this._imeiForm = this._fb.group({
      checkValue: [false, Validators.requiredTrue]
    });

    this._api.getCompleteModel().subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i]['request_status'] === '4') {
            this._completeModelArray.push(res[i]);
          }
        }
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

  getCheckBoxValue(checked: boolean) {
    this._isChecked = checked !== true;
  }

  makeStock() {
    if (this._isChecked === undefined) {
      this._isChecked = true;
    } else {
      this._modelApi.getModelDetails().subscribe(
        res => {
          for (let i of res) {
            if (i['imei'] === this._modelImei && i['request_status'] === '4') {
              for (let j of i['issues']) {
                if (j['issue_status'] === '4') {
                  this._isTrue = true;
                } else {
                  this._isFound = false;
                }
              }
            }
          }
          if (this._isTrue) {
            this._makeStockJson[Constant.IMEI_JSON] = this._modelImei;
            console.log(this._makeStockJson);
            this._makeStockFullUrl = Constant.MAKE_STOCK_URL +
              '&imei=' + this._modelImei + '&request_id=' + this.requestId;
            this._api.makeModelStock(this._makeStockFullUrl).subscribe(
              res => {
                if (res['res'] === true) {
                  window.location.reload();
                } else {
                  console.log('Something went wrong..');
                }
              },
              err => {
                console.log(err);
              }
            );
            console.log(this._makeStockFullUrl);
          } else {
            this._isFound = false;
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  getImei(imei: number, id: number) {
    this._modelImei = imei;
    this.requestId = id;
  }

  reload() {
    window.location.reload();
  }
}

