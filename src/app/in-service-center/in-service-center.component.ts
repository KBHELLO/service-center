import {Component, OnInit} from '@angular/core';
import {Constant} from '../Helper/constant';
import {InServiceCenterService} from './in-service-center.service';
import {ServiceCenter} from '../request-service/service-center';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AssignService} from '../assign-service-center/assign.service';

@Component({
  selector: 'app-in-service-center',
  templateUrl: './in-service-center.component.html',
  styleUrls: ['./in-service-center.component.scss']
})
export class InServiceCenterComponent implements OnInit {

  _serviceCenterHeading = Constant.IN_SERVICE_CENTER_HEADING;
  _serviceCenterText = Constant.SERVICE_CENTER_TEXT;
  _inServiceCenterModelArray: ServiceCenter[] = [];
  _imei = Constant.TABLE_COL_NAME_IMEI;
  _confirm = Constant.CONFIRM;
  _modelIssue = Constant.MODEL_ISSUE;
  _modelCost = Constant.MODEL_COST;
  _action = Constant.TABLE_COL_NAME_ACTION;
  _requestId = Constant.MODEL_NAME;
  _check = Constant.IN_SERVICE_CENTER_CHECK;
  _getIssuesArray: ServiceCenter[] = [];
  _cancel = Constant.CANCEL;
  _issuesIdArray: any[] = [];
  _acceptIssueJson: {} = {};
  _requestedId = Constant.REQUESTED_ID;
  _acceptedIssue = Constant.ACCEPTED_ISSUE;
  _confirmRequestId;
  ModelForm: FormGroup;
  issue = Constant.ISSUE;
  costing = Constant.COST;
  addIssue = Constant.ADD_ROWS;
  addIssueSubmit = Constant.ADD_ISSUE_SUBMIT;
  _record = Constant.RECORD_ADDED_SUCCESSFULLY;
  _wrong = Constant.ERROR_MESSAGE;
  _ok = Constant.OK;
  _isSubmitted: number;
  _displayCount: number;
  _previousIssues: string[] = [];
  private updateIssueJson: {} = {};
  private updateRequestId: number;


  constructor(private _inServiceApi: InServiceCenterService,
              private _fb: FormBuilder,
              private _route: Router,
              private _assign: AssignService) {
  }

  ngOnInit() {

    this.ModelForm = this._fb.group({
      details: this._fb.array([this.addSkillFormGroup()])
    });

    this._inServiceApi.getInServiceCenterModel().subscribe(
      res => {
        for (let i of res['res']) {
          if (i['request_status'] === '3') {
            this._inServiceCenterModelArray.push(i);
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  getIssueId(iElement: any) {
    this._confirmRequestId = iElement;
    for (let i in this._inServiceCenterModelArray) {
      if (this._inServiceCenterModelArray[i]['id'] === iElement) {
        this._getIssuesArray = this._inServiceCenterModelArray[i]['issues'];
      }
    }
    console.log(this._getIssuesArray);
  }

  getCheckBoxValue(id: number, checked: boolean) {
    if (checked) {
      this._issuesIdArray.push(id);
    } else {
      let idIndex = this._issuesIdArray.indexOf(id);
      this._issuesIdArray.splice(idIndex, 1);
    }
    console.log(this._issuesIdArray);
  }

  reload() {
    window.location.reload();
  }

  setAcceptIssue() {
    this._acceptIssueJson[this._requestedId] = this._confirmRequestId;
    this._acceptIssueJson[this._acceptedIssue] = this._issuesIdArray;
    console.log(this._acceptIssueJson);
    this._inServiceApi.confirmModel(this._acceptIssueJson).subscribe(
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

  okayGo() {
    window.location.reload();
  }

  submitIssueAndCost() {
    this.updateIssueJson[Constant.ISSUES] = this.ModelForm.get('details').value;
    this.updateIssueJson[Constant.REQUEST_ID] = this.updateRequestId;
    this.updateIssueJson[Constant.REQUESTER_ID] = localStorage.getItem(Constant.REQUESTER_ID);
    this._inServiceApi.updateIssues(this.updateIssueJson).subscribe(
      res => {
        if(res['res'] === true){
          window.location.reload();
        }
      },
      err => {
        console.log(err);
      }
    );

    console.log(this.updateIssueJson);
  }

  private addSkillFormGroup(): FormGroup {
    return this._fb.group({
      issue_details: ['', Validators.required],
      repair_cost: ['', Validators.required]
    });
  }

  addAlternateModels() {
    (this.ModelForm.get('details') as FormArray).push(this.addSkillFormGroup());
  }

  getModelIMEI(iElement: any, id: any) {
    this.updateRequestId = id;
    this._assign.getPerviousIssues(iElement).subscribe(
      res => {
        console.log(res['res'].length);
        for (let i of res['res']) {
          this._previousIssues.push(i);
        }
        console.log(this._previousIssues);
      },
      err => {
        console.log(err);
      }
    );
  }
}
