import {Component, OnInit} from '@angular/core';
import {Constant} from '../Helper/constant';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private _api: LoginService) {
  }

  loginButton = Constant.LOGIN_BUTTON;
  loginPhoneNumber = Constant.LOGIN_PHONE_NUMBER;
  loginOTP = Constant.LOGIN_OTP;
  nextButton = Constant.NEXT_BUTTON;
  resendOtp = Constant.RESEND_OTP_BUTTON;
  _invalidPhoneNumber:string = Constant.INVALID_PHONE_NUMBER;
  _inValidOTP: string = Constant.INVALID_OTP;
  private phoneFullUrl: string;
  private phoneNoJson: {} = {};
  _isOTPError: boolean = false;
  private _verifyOtpUrl: string;
  private _id: number;
  _isPhoneError: boolean;

  valid = 1;
  isNumber;
  isNumberOTP;

  /**
   * Form group
   */

  PhoneNoForm = this.fb.group({
    PhoneNo: ['']
  });
  OtpForm = this.fb.group({
    otp: ['']
  });

  validationPhoneNumber() {
    this.isNumber = Number(this.PhoneNoForm.get('PhoneNo').value);

    if (!isNaN(this.isNumber) &&
      this.PhoneNoForm.get('PhoneNo').value !== '' &&
      this.PhoneNoForm.get('PhoneNo').value.toString().length === 10) {
      return true;
    }
  }

  validationOTP() {
    this.isNumberOTP = Number(this.OtpForm.get('otp').value);
    if (!isNaN(this.isNumberOTP) &&
      this.OtpForm.get('otp').value !== '' &&
      this.OtpForm.get('otp').value.toString().length === 4) {
      return true;
    }
  }

  PhoneNumber() {
    this.phoneFullUrl = Constant.GET_MOBILE_URL + this.PhoneNoForm.get('PhoneNo').value;
    this._api.getMobileNumber(this.phoneFullUrl).subscribe(
      res => {
        localStorage.setItem(Constant.REQUESTER_ID, res['res']['id']);
        this._id = Number(localStorage.getItem(Constant.REQUESTER_ID));
        if (this._id === res['res']['id']) {
          this.phoneNoJson[Constant.PHONE_NUMBER] = '+91' + this.PhoneNoForm.get('PhoneNo').value;
          this._api.getOTP(this.phoneNoJson).subscribe(
            res => {
              if (res['res'] === 'New OTP Send.') {
                this.valid = 2;
              } else {
                this._isOTPError = true;
              }
            },
            err => {
              console.error(err);
            }
          );
        } else {
          console.log('not found');
          this._isPhoneError = true;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  otp() {
    if (this.validationOTP()) {
      this._verifyOtpUrl = Constant.GET_OTP_URL + '&' + Constant.PHONE_NUMBER + '=%2B91' + this.PhoneNoForm.get('PhoneNo').value + '&otp=' +
        this.OtpForm.get('otp').value;
      this._api.verifyOTP(this._verifyOtpUrl).subscribe(
        res => {
          if (res['res'] === true) {
            this.router.navigate(['service-center']);
          } else {
            window.location.reload();
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      window.location.reload();
    }
  }

  resendOTP() {
    this.valid = 1;
  }

  ngOnInit() {
  }

}
