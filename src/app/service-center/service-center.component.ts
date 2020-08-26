import {Component, OnInit} from '@angular/core';
import {Constant} from '../Helper/constant';
import {Router} from '@angular/router';
import {ServiceCenterService} from './service-center.service';
import {ServiceCenter} from '../request-service/service-center';

@Component({
  selector: 'app-service-center',
  templateUrl: './service-center.component.html',
  styleUrls: ['./service-center.component.scss']
})
export class ServiceCenterComponent implements OnInit {

  serviceCenter = Constant.SERVICE_CENTER;
  _assignServiceCenter = Constant.ASSIGN_SERVICE_CENTER;
  request = Constant.RASIED_REQUEST;
  _modelOutGoing = Constant.MODEL_OUTGOING;
  _inOffice: string = Constant.InOffice;
  _invoice: string = Constant.MODEL_BILL;
  models: ServiceCenter[] = [];
  _unAssignedModelCount: number;
  _assignModelCount: number;
  _assignModelArray: ServiceCenter[] = [];
  _unAssignedModelArray: ServiceCenter[] = [];
  _serviceCenterText = Constant.SERVICE_CENTER_TEXT;
  _approvedModelArray: ServiceCenter[] = [];
  _waitingModelArray: ServiceCenter[] = [];
  _waitingModelCount;
  _inServiceCenter = Constant.IN_SERVICE_CENTER;
  _inServiceCenterArray: ServiceCenter[] = [];
  _inServiceCenterCount;
  _notCompleteModelArray: ServiceCenter[] = [];
  _notCompleteModelCount;
  _completeModelArray: ServiceCenter[] = [];
  _completeModelCount;
  _totalModel: string = Constant.TOTAL_MODEL;
  _modelInfo: string = Constant.MODEL_INFO;
  _approvalForUpdatedIssues: string = Constant.UPDATE_ISSUE_APPROVAL;
  private _updateIssuesArray: string[] = [];
  _updateIssuesCount: number;

  constructor(private router: Router,
              private count: ServiceCenterService) {
  }

  wayToRequestService() {
    this.router.navigate(['/request-service']);
  }

  ngOnInit() {
    this.count.getUnAssignedModelCount().subscribe(
      res => {
        this.models = res['res'];
        if (this.models.length > 0) {
          for (let i of this.models) {
            if (i.service_center === 2 && i.service_stock === 3) {
              this._unAssignedModelArray.push(i);
            } else {
              this._assignModelArray.push(i);
            }
          }
          this._unAssignedModelCount = this._unAssignedModelArray.length;
        } else {
          this._unAssignedModelCount = 0;
        }
      }
    );

    /*get approval model*/
    this.count.getApprovalModel().subscribe(
      res => {
        for (let i of res['res']) {
          if (i['request_status'] === '5') {
            this._approvedModelArray.push(i);
            this._assignModelCount = this._approvedModelArray.length;
          } else {
            if (i['request_status'] === '2') {
              this._waitingModelArray.push(i);
              this._waitingModelCount = this._waitingModelArray.length;
            } else {
              if (i['request_status'] === '3') {
                this._inServiceCenterArray.push(i);
                this._inServiceCenterCount = this._inServiceCenterArray.length;
              } else {
                if (i['request_status'] === '5') {
                  this._notCompleteModelArray.push(i);
                  this._notCompleteModelCount = this._notCompleteModelArray.length;
                } else {
                  if (i['request_status'] === '4') {
                    this._completeModelArray.push(i);
                    this._completeModelCount = this._completeModelArray.length;
                  } else {
                    if (i['request_status'] === '8') {
                      this._updateIssuesArray.push(i);
                      this._updateIssuesCount = this._updateIssuesArray.length;
                    }
                  }
                }
              }
            }
          }
        }
      }, err => {
        console.log(err);
      }
    );

  }

  assignServiceCenter() {
    this.router.navigate(['/assign-center']);
  }

  wayToOutgoingModel() {
    this.router.navigate(['/out-going']);
  }

  wayToInOffice() {
    this.router.navigate(['/in-office']);
  }

  wayToInServiceCenter() {
    this.router.navigate(['/in-service-center']);
  }

  wayToComplete() {
    this.router.navigate(['/complete']);
  }

  wayToModelInfo() {
    this.router.navigate(['/model-info']);
  }

  logout() {
    localStorage.removeItem(Constant.REQUESTER_ID);
    if (localStorage.getItem(Constant.REQUESTER_ID) === null) {
      this.router.navigate(['/login']);
    } else {
      window.location.reload();
    }
  }

  wayToUpdateIssueApproval() {
    this.router.navigate(['/update-approval']);
  }
}
