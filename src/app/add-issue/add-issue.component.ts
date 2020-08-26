import {Component, OnInit} from '@angular/core';
import {Constant} from '../Helper/constant';
import {IssueDetail} from './issue-detail';
import {AddIssueService} from './add-issue.service';
import {FormBuilder} from '@angular/forms';
import {Solution} from './solution';
import {Vendor} from '../assign-service-center/vendor';
import {AssignService} from '../assign-service-center/assign.service';
import {IssueSolution} from './issueSolution';
import {Router} from '@angular/router';
import {VendorCost} from './vendorCost';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {

  _addIssueHeading: string = Constant.ADD_ISSUE_HEADING;
  _selectIssue: string = Constant.SELECT_ISSUE;
  _next: string = Constant.NEXT_BUTTON;
  _validationMessage: string = Constant.VALIDATION_MESSAGE;
  _getMasterIssues: IssueDetail[] = [];
  _getSolutionOfIssue: Solution[] = [];
  _isIssueError: boolean = false;
  _selectSolution: string = Constant.SELECT_SOLUTION;
  _submit: string = Constant.SUBMIT_BUTTON;
  _remarks: string = Constant.TABLE_COL_NAME_REMARK;
  _isSolutionError: boolean = false;
  _isRemarksError: boolean = false;
  _submitAddedSuccessful: string = Constant.RECORD_ADDED_SUCCESSFULLY;
  _somethingWentWrong: string = Constant.ERROR_MESSAGE;
  _vendors: Vendor[] = [];
  _displayCount: number = 0;
  _back: string = Constant.BACK;
  _addIssueAndSolution: string = Constant.ISSUE_AND_SOLUTION;
  _issueDetails: IssueSolution[] = [];
  _issueDetailsText: string = Constant.ISSUE_DETAILS;
  _solution: string = Constant.SOLUTION;
  _remarksText: string = Constant.TABLE_COL_NAME_REMARK;
  _action: string = Constant.ACTION_BUTTON;
  _masterSolutionArray: Solution [] = [];
  _modelUniqueNumber: string;
  _confirm: string = Constant.CONFIRM;
  _noIssueSolution: string = Constant.NO_ISSUE_SOLUTION;
  _addIssueSolutionDisplayCount: number = 0;
  _perv: string = Constant.BACK;
  _dashboard: string = Constant.DASHBOARD;
  _addIssueSolutionsVendor: string = Constant.ADD_ISSUES_SOLUTION_VENDOR;
  solution_ids: object[] = [];
  solution_id: {} = {};
  json_id = {};
  serviceCenter: VendorCost[] = [];
  _tableVendorButton: string = Constant.TABLE_BUTTON_VENDOR;
  _close: string = Constant.CLOSE;
  serviceRequestJson = {};
  tryAgain: string = Constant.TRY_AGAIN;
  _isServiceRequestError: boolean;
  _solutionSelectedValue: number;

  constructor(private _api: AddIssueService,
              private _fb: FormBuilder,
              private assignServiceCenter: AssignService,
              private _route: Router) {
  }

  /**
   * Form group
   */

  solutionForm = this._fb.group({
    id: [''],
    solution_id: [],
    remarks: []
  });

  ngOnInit() {
    this._api.getMasterIssues().subscribe(
      res => {
        this._getMasterIssues = res['res'];
      },
      err => {
        console.log(err);
      }
    );
    /**
     * get vendor list.
     */
    this.assignServiceCenter.getVendorList().subscribe(
      res => {
        this._vendors = res['res'];
      },
      err => {
        console.log(err);
      }
    );

    /**
     * get Solution
     */

    this._api.getSolutionsOfIssue(Constant.MASTER_SOLUTION_INSERT_URL).subscribe(
      res => {
        this._masterSolutionArray = res['res'];
      },
      err => {
        console.log(err);
      }
    );

    this._modelUniqueNumber = atob(localStorage.getItem('id'));

  }

  reload() {
    window.location.reload();
  }

  setMaterIssue() {
    if (this.solutionForm.get('id').value === '' || this.solutionForm.get('id').value === null) {
      this._isIssueError = true;
    } else {
      let url = Constant.MASTER_SOLUTION_INSERT_URL + '&issue_id=' + this.solutionForm.get('id').value;
      this._api.getSolutionsOfIssue(url).subscribe(
        res => {
          this._getSolutionOfIssue = res['res'];
          if (this._getSolutionOfIssue.length !== 0) {
            this._displayCount = 1;
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  previousPage() {
    this._displayCount = 0;
    this._getSolutionOfIssue = [];
    this.solutionForm.reset();
    this._isIssueError = false;
    this._isSolutionError = false;
    this._isRemarksError = false;
  }

  submitSolution() {
    if ((this.solutionForm.get('solution_id').value === '' || this.solutionForm.get('solution_id').value === null)
      && this.solutionForm.get('remarks').value === '') {
      this._isSolutionError = true;
      this._isRemarksError = true;
    } else {
      if (this.solutionForm.get('solution_id').value === '' || this.solutionForm.get('solution_id').value === null) {
        this._isSolutionError = true;
      } else {
        if (this.solutionForm.get('remarks').value === '') {
          this._isRemarksError = true;
        } else {
          this._issueDetails.push(this.solutionForm.value);
        }
      }
    }
  }

  modalStatus() {
    this._displayCount = 0;
    this.solutionForm.reset();
    this._getSolutionOfIssue = [];
    this._isSolutionError = false;
    this._isRemarksError = false;
    this._isIssueError = false;
  }

  removeElement(index: number) {
    this._issueDetails.splice(index, 1);
  }

  goDashboard() {
    this._route.navigate(['assign-center']);
  }

  confirmIssueAndSolution() {
    let isPresent: boolean = false;
    for (let i = 0; i < this._issueDetails.length; i++) {
      let ids = {};
      if (this.solution_ids.length === 0) {
        ids['solution_id'] = this._issueDetails[i].solution_id;
        this.solution_ids.push(ids);
      } else {
        for (let j = 0; j < this.solution_ids.length; j++) {
          if (this.solution_ids[j]['solution_id'] !== this._issueDetails[i].solution_id) {
            isPresent = true;
            break;
          }else {
            console.log('present not push');
          }
        }
        if (isPresent) {
          ids['solution_id'] = this._issueDetails[i].solution_id;
          this.solution_ids.push(ids);
        }
      }
    }
    this.json_id['solution_ids'] = this.solution_ids;
    console.log(this.json_id);
    this._api.getVendorOnSolution(this.json_id).subscribe(
      res => {
        this.serviceCenter = res['res'];
        console.log(this.serviceCenter);
        this._addIssueSolutionDisplayCount = 1;
      },
      err => {
        console.log(err);
      }
    );
  }

  prev() {
    this._addIssueSolutionDisplayCount = 0;
    this.solution_ids = [];
  }

  serviceRequest(vendor_id: number) {
    this.serviceRequestJson[Constant.IMEI_JSON] = atob(localStorage.getItem('id'));
    this.serviceRequestJson[Constant.ISSUE_DETAILS_JSON] = this._issueDetails;
    this.serviceRequestJson[Constant.REQUESTER_ID] = +localStorage.getItem('requester_id');
    this.serviceRequestJson[Constant.SERVICE_CENTER_ID_JSON] = vendor_id;

    this._api.newServiceRequest(this.serviceRequestJson).subscribe(
      res => {
        if(res['res'] === true){
          this._addIssueSolutionDisplayCount = 2;
          this._isServiceRequestError = true;
        }else {
          this._isServiceRequestError = false;
        }
      },
      err => {
        console.log(err);
      }
    );
    this._isServiceRequestError = false;
  }

  back() {
    this._route.navigate(['assign-center']);
  }

  wrong() {
    this._addIssueSolutionDisplayCount = 0;
    this.solution_ids = [];
  }
}
