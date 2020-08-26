import {Component, OnInit} from '@angular/core';
import {AssignService} from './assign.service';
import {Constant} from '../Helper/constant';
import {Vendor} from './vendor';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceCenter} from '../request-service/service-center';
import {Router} from '@angular/router';
import {Validate} from '../Helper/Validator';
import {IssueMaster} from './issue-master';

@Component({
  selector: 'app-assign-service-center',
  templateUrl: './assign-service-center.component.html',
  styleUrls: ['./assign-service-center.component.scss']
})

export class AssignServiceCenterComponent implements OnInit {

  _heading = Constant.ASSIGN_SERVICE_CENTER_HEADING;
  _tableColNameIMEI = Constant.TABLE_COL_NAME_IMEI_1;
  _noPreviousIssues = Constant.NO_PREVIOUS_ISSUES;
  _tableColNameModelName = Constant.TABLE_COL_NAME_MODEL_NAME;
  _tableColNameRemark = Constant.TABLE_COL_NAME_REMARKS;
  _tableColNameAction = Constant.ACTION_BUTTON;
  _tableButtonNameVendor = Constant.MODEL_SERVICE_CENTER;
  _serviceCenterDetails = Constant.SERVICE_CENTER_DETAILS;
  _selectVendor = Constant.DROPDOWN_SELECT_VENDOR;
  _submitButton = Constant.SUBMIT_BUTTON;
  issue = Constant.ISSUE;
  costing = Constant.COST;
  addIssue = Constant.ADD_ROWS;
  addIssueSubmit = Constant.ADD_ISSUE_SUBMIT;
  _displayCount: number = 0;
  _isError = false;
  _vendors: Vendor[] = [];
  _unAssignedModels: ServiceCenter[] = [];
  issues = [];
  cost = [];
  vendorAssignJson = {};
  issuesJSON = {};
  _modelImei: string = '';
  _isSubmitted;
  _record = Constant.RECORD_ADDED_SUCCESSFULLY;
  _wrong = Constant.ERROR_MESSAGE;
  _ok = Constant.OK;
  _previousIssues: [] = [];
  _searchValue: string;
  private _updateIssueArray: [] = [];
  _searchByName: string = Constant.SEARCH_BY_NAME;
  _createIssue: string = Constant.CREATE_ISSUES;
  _dashboard: string = Constant.DASHBOARD;
  _addEstimate: string = Constant.ISSUES_DETAILS;
  _issueType: string = Constant.ISSUE_TYPE;
  _cosmetic: string = Constant.COSMETIC;
  _operation: string = Constant.OPERATION;
  _setIssueType: string = '';
  _close: string = Constant.CLOSE;
  _issueDetailsError: boolean = false;
  _validationMessage: string = Constant.VALIDATION_MESSAGE;
  _issueTypeError: boolean = false;
  _selectOneOption: string = Constant.SELECT_ONE_OPTION;
  _isIssueSubmitted: number = 0;
  _issueAddedSuccessfully: string = Constant.ISSUE_ADDED_SUCCESSFULLY;
  _masterIssueJson: {} = {};
  _errorMessage: string = Constant.ERROR_MESSAGE;
  _searchByImei: string = Constant.SEARCH_BY_IMEI;
  _searchImeiValue: string;
  _createSolution: string = Constant.CREATE_SOLUTION;
  _solutionIssue: string = Constant.SOLUTION_ISSUE;
  _masterIssueArray: IssueMaster[] = [];
  _issueDetails: string = Constant.ISSUE_DETAILS;
  _issueTypeText: string = Constant.ISSUE_TYPE_TEXT;
  _action: string = Constant.ACTION_BUTTON;
  _solution: string = Constant.SOLUTION;
  _issueSolutionCount: number = 0;
  _selectedIssue: string;
  _selectedIssueType: string;
  _searchByIssue: string = Constant.SEARCH_BY_ISSUE;
  _searchIssueValue: string;
  _sparePartsReturnRequired: string = Constant.SPARE_PARTS_RETURN_REQUIRED;
  _yes: string = Constant.YES;
  _no: string = Constant.NO;
  _nextButton: string = Constant.NEXT_BUTTON;
  _masterSolutionJson: {} = {};
  _masterIssueId: number;
  _isMasterSolutionError: number = 0;
  _isMusterSolutionSubmitError: boolean;

  constructor(private assignServiceCenter: AssignService,
              private fb: FormBuilder,
              private _router: Router) {
  }

  /**
   * Form group
   */

  vendorForm = this.fb.group({
    vendorName: ['', Validators.required]
  });

  createIssueForm = this.fb.group({
    issueDetails: [''],
  });

  createMasterSolution = this.fb.group({
    solution: [''],
    spareParts: ['']
  });

  ModelForm = this.fb.group({
    details: this.fb.array([this.addSkillFormGroup()])
  });

  masterSolutionVendorForm = this.fb.group({
    cost_details: this.fb.array([this.addSolutionVendor()])
  });


  addAlternateModels() {
    (this.ModelForm.get('details') as FormArray).push(this.addSkillFormGroup());
  }

  addAlternateVendor() {
    (this.masterSolutionVendorForm.get('cost_details') as FormArray).push(this.addSolutionVendor());
  }

  ngOnInit() {
    this.assignServiceCenter.getVendorList().subscribe(
      res => {
        this._vendors = res['res'];
      },
      err => {
        console.log(err);
      }
    );


    this.assignServiceCenter.getServiceCenterModel().subscribe(
      res => {
        this._unAssignedModels = res['res'];
      },
      err => {
        console.log(err);
      }
    );
  }


  private addSkillFormGroup(): FormGroup {
    return this.fb.group({
      issue_details: ['', Validators.required],
      repair_cost: ['', Validators.required]
    });
  }

  private addSolutionVendor(): FormGroup {
    return this.fb.group({
      vendor_id: [''],
      cost: ['']
    });
  }


  submitIssueAndCost() {
    this.vendorAssignJson[Constant.IMEI_JSON] = this._modelImei;
    this.vendorAssignJson[Constant.REQUESTER_ID] = localStorage.getItem(Constant.REQUESTER_ID);
    this.vendorAssignJson[Constant.SERVICE_CENTER_ID] = this.vendorForm.get('vendorName').value;
    this.vendorAssignJson[Constant.ISSUES] = this.ModelForm.value['details'];
    this.vendorAssignJson[Constant.REQUEST_STATUS] = 1;

    console.log(this.vendorAssignJson);

    this.assignServiceCenter.insertUnassignedModel(this.vendorAssignJson).subscribe(
      res => {
        if (res['res'] === true) {
          this._displayCount = 3;
          this._isSubmitted = 1;
        } else {
          this._isSubmitted = 0;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  open(unAssignModel: string) {
    this._modelImei = unAssignModel;
    localStorage.setItem('id', btoa(this._modelImei));
    this._router.navigate(['add-issue']);
  }

  okayGo() {
    window.location.reload();
  }

  Dashboard() {
    this._router.navigate(['service-center']);
  }

  setVendorName(vendor_id: any) {
    this._displayCount = 1;
    this.assignServiceCenter.getModelIssues(this._modelImei).subscribe(
      res => {
        this._previousIssues = res['res'];
      },
      err => {
        console.log(err);
      }
    );
  }

  getIssuesType(type: string) {
    this._setIssueType = type;
  }

  issueDetailsForm() {
    let issue = this.createIssueForm.get('issueDetails').value;
    if (!Validate.validateBlankString(issue) && this._setIssueType === '') {
      this._issueDetailsError = true;
      this._issueTypeError = true;
    } else {
      if (!Validate.validateBlankString(issue)) {
        this._issueDetailsError = true;
      } else {
        if (this._setIssueType === '') {
          this._issueTypeError = true;
        } else {
          this._masterIssueJson[Constant.ISSUE_DETAILS_JSON] = issue;
          this._masterIssueJson[Constant.ISSUE_TYPE_JSON] = this._setIssueType;
          this.assignServiceCenter.masterIssueSubmit(this._masterIssueJson).subscribe(
            res => {
              if (res['res'] === true) {
                this._isIssueSubmitted = 2;
              } else {
                this._isIssueSubmitted = 1;
              }
            },
            err => {
              console.log(err);
              this._isIssueSubmitted = 1;
            }
          );
        }
      }
    }
  }

  reload() {
    window.location.reload();
  }

  masterSolution() {
    this.assignServiceCenter.getMasterIssue().subscribe(
      res => {
        this._masterIssueArray = res['res'];
      },
      err => {
        console.log(err);
      }
    );
  }

  assignSolution(id: number, issue_details: string, issue_type: string) {
    this._selectedIssue = issue_details;
    this._selectedIssueType = issue_type;
    this._masterIssueId = id;
    this._issueSolutionCount = 1;
  }

  getMasterValue() {
    if (!Validate.validateBlankString(this.createMasterSolution.get('solution').value) &&
      !Validate.validateBlankString(this.createMasterSolution.get('spareParts').value)) {
      this._isMasterSolutionError = 1;
    } else {
      if (!Validate.validateBlankString(this.createMasterSolution.get('solution').value)) {
        this._isMasterSolutionError = 2;
      } else {
        if (!Validate.validateBlankString(this.createMasterSolution.get('spareParts').value)) {
          this._isMasterSolutionError = 3;
        } else {
          this._masterSolutionJson[Constant.SOLUTION_DETAILS_JSON] = this.createMasterSolution.get('solution').value;
          this._masterSolutionJson[Constant.ISSUE_ID_JSON] = this._masterIssueId;
          this._masterSolutionJson[Constant.SPARE_PARTS_RETURN_REQUIRED_JSON] = this.createMasterSolution.get('spareParts').value;
          this._issueSolutionCount = 2;
        }
      }
    }
  }

  getMasterSolution() {
    this._masterSolutionJson[Constant.COST_DETAILS_JSON] = this.masterSolutionVendorForm.get('cost_details').value;
    this.assignServiceCenter.insertMasterSolution(this._masterSolutionJson).subscribe(
      res => {
        if (res['res'] === true) {
          this._issueSolutionCount = 3;
          this._isMusterSolutionSubmitError = false;
        } else {
          this._isMusterSolutionSubmitError = true;
        }
      },
      err => {
        this._isMusterSolutionSubmitError = true;
      }
    );
  }

  removeItem(i: number) {
    (this.masterSolutionVendorForm.get('cost_details') as FormArray).removeAt(i);
  }
}
