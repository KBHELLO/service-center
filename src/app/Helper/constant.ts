export class Constant {

  /**
   * Common use
   */

  static SERVICE_CENTER_TEXT = 'Service Center';
  static SUBMIT_BUTTON = 'SUBMIT';
  static ACTION_BUTTON = 'ACTION';
  static VENDOR_NAME = 'VENDOR NAME';
  static VIEW_ALL = 'All Info';
  static VALIDATION_MESSAGE = 'This Field is required.';
  static RECORD_ADDED_SUCCESSFULLY = 'Record submitted Successfully!';
  static ERROR_MESSAGE = 'Something Went Wrong!';
  static OK = 'OK';
  static WARNING = 'Warning';
  static CANCEL = 'cancel';
  static DELETE = 'delete';
  static CONFIRM_TEXT = 'Confirm';
  static DELETE_MESSAGE = 'Do you really want to delete these records? This process cannot be undone.';
  static BACK = 'BACK';
  static IMEI_VALIDATION = 'Invalid IMEI OR Not assigned to Service Center';
  static CONFIRMATION_MESSAGE = 'Are you sure to do this? This process cannot be undone.';
  static count = 1;
  static DASHBOARD = 'Dashboard';
  static SELECT_ONE_OPTION = 'Select One Option.';

  /**
   * API URLS
   */
  //static HOST_URL = 'http://www.hyperxchange.com/api/v1/';
  static HOST_URL = 'http://ec2-13-127-208-122.ap-south-1.compute.amazonaws.com/api/v1/';
  //static HOST_URL = 'http://192.168.5.89:7009/';
  static API_KEY = 'v15xbg5qscb7uy4e';
  static GET_SERVICE_CENTER = Constant.HOST_URL + 'inventory-state?key=' + Constant.API_KEY + '&state=service';
  static GET_VENDOR_LIST = Constant.HOST_URL + 'details?key=' + Constant.API_KEY + '&type=vendor';
  static INSERT_UNASSIGNED_MODEL = Constant.HOST_URL + 'service-request?key=' + Constant.API_KEY;
  static APPROVAL_MODEL = Constant.HOST_URL + 'service-request?key=' + Constant.API_KEY;
  static UPDATE_ISSUE_STATUS = Constant.HOST_URL + 'service-issue?key=' + Constant.API_KEY;
  static UPDATE_CONFIRM_REQUEST = Constant.HOST_URL + 'service-request?key=' + Constant.API_KEY;
  static IN_SERVICE_CENTER_URL = Constant.HOST_URL + 'service-issue?key=' + Constant.API_KEY;
  static GET_ISSUE_URL = Constant.HOST_URL + 'service-issue?key=' + Constant.API_KEY;
  static MAKE_STOCK_URL = Constant.HOST_URL + 'service-issue?key=' + Constant.API_KEY;
  static GET_MOBILE_URL = Constant.HOST_URL + 'log-check?key=' + Constant.API_KEY + '&mobileNumber=%2B91';
  static GET_OTP_URL = Constant.HOST_URL + 'otp?key=' + Constant.API_KEY;
  static UPDATE_ISSUES_URL = Constant.HOST_URL + 'service-request?key='+Constant.API_KEY;
  static MASTER_ISSUE_URL = Constant.HOST_URL + 'issue?key=' + Constant.API_KEY;
  static MASTER_SOLUTION_INSERT_URL = Constant.HOST_URL + 'solution?key=' + Constant.API_KEY;


  /**
   * login component
   */
  static LOGIN_BUTTON = 'Login';
  static LOGIN_PHONE_NUMBER = 'Phone Number';
  static LOGIN_OTP = 'OTP';
  static NEXT_BUTTON = 'Next';
  static RESEND_OTP_BUTTON = 'BACK';
  static INVALID_PHONE_NUMBER = 'Not a Registered Phone Number';
  static INVALID_OTP = 'Not a Valid OTP';

  /**
   * service center component
   */
  static SERVICE_CENTER = 'Dashboard -';
  static RASIED_REQUEST = 'Assign Service Center';
  static ASSIGN_SERVICE_CENTER = 'Not Complete';
  static MODEL_BILL = 'Complete';
  static MODEL_OUTGOING = 'Approval';
  static IN_SERVICE_CENTER = 'In Service Center';
  static TOTAL_MODEL = 'Total Models in Service Center';
  static MODEL_INFO = 'Model Info';
  static UPDATE_ISSUE_APPROVAL = 'Approval for Updated Issues';
  static SEARCH_BY_NAME = 'Search By Name ... ';
  static CREATE_ISSUES = 'Create Issue';
  static SEARCH_BY_IMEI = 'Search By IMEI...';
  static CREATE_SOLUTION = 'Create Solution';
  static SOLUTION_ISSUE = 'Solution for Issue';
  static SOLUTION = 'Solution';

  /**
   * service request component
   */

  static SERVICE_CENTER_HEADING = 'Service Center Model';
  static TABLE_COL_NAME_IMEI = 'IMEI';
  static TABLE_COL_NAME_MODEL = 'MODEL';
  static TABLE_COL_NAME_REMARK = 'REMARKS';
  static TABLE_COL_NAME_ACTION = 'ACTION';
  static ADD_ESTIMATE = 'ISSUE';
  static ISSUE = 'Issue';
  static COST = 'Cost';
  static ADD_ROWS = 'Add Issue';
  static ADD_ISSUE_SUBMIT = 'Submit';
  static MODAL_TITLE = 'ISSUES & COST';
  static ISSUES_DETAILS = 'ISSUES DETAILS';
  static NO_PREVIOUS_ISSUES = 'No Previous Issues';
  static SERVICE_CENTER_DETAILS = 'Details';
  static ISSUE_ADDED_SUCCESSFULLY = 'Issue Added Successfully.';

  /**
   * assign service center
   */

  static ASSIGN_SERVICE_CENTER_HEADING = 'Assign Service Center';
  static TABLE_COL_NAME_IMEI_1 = 'MODEL IMEI 1';
  static TABLE_COL_NAME_MODEL_NAME = 'MODEL NAME';
  static TABLE_COL_NAME_REMARKS = 'REMARKS';
  static TABLE_BUTTON_VENDOR = 'ASSIGN';
  static DROPDOWN_SELECT_VENDOR = 'Select Vendor';
  static ISSUE_TYPE  = 'Issue Type';
  static COSMETIC = 'COSMETIC';
  static OPERATION = 'OPERATIONAL';
  static ISSUE_DETAILS = 'Issue Details';
  static ISSUE_TYPE_TEXT = 'Issue Type';
  static SEARCH_BY_ISSUE = 'Search by Issue';
  static SPARE_PARTS_RETURN_REQUIRED = 'Spare Parts Return Required';
  static YES = 'Yes';
  static NO = 'No';

  /**
   * approval component
   */

  static OUT_GOING_HEADING = 'APPROVAL - SERVICE CENTER';
  static MODEL_IMEI = 'MODEL IMEI';
  static MODEL_NAME = 'REQUEST ID';
  static MODEL_SERVICE_CENTER = 'SERVICE CENTER';
  static MODEL_ISSUE = 'ISSUE';
  static MODEL_COST = 'COST';
  static REASON = 'Reject List';
  static REJECT_BUTTON = 'REJECT';
  static REMARKS_APPROVAL_REJECT = 'Remark for Approval or Reject';

  /**
   * Out going component
   */

  static InOffice = 'In Office';
  static ISSUE_ID = 'ISSUES ID';
  static CONFIRM = 'CONFIRM';
  static ISSUE_SOLUTION_VENDOR_COST = 'Issue Solution Vendor & Cost';
  static COLOR = 'Color';
  static STORAGE = 'Storage';
  static COST_MODEL = 'Cost';


  /**
   * In Office
   */

  static IN_OFFICE = 'Waiting for Service Center';
  static OUT = 'OUT';
  static IN_OFFICE_CONFIRMATION = 'Are you sure ? This process cannot be undone.';
  static PRINT = 'Print';
  static JOB_SHEET = 'Print Job Sheet';
  static JOB_DESCRIPTION = 'Job Description';
  static SERVICE_CENTER_NAME = 'Service Center';
  static SERIAL_NUMBER = 'SL No.';
  static JOB_DESCRIPTION_TABLE = 'Description';
  static TOTAL = 'Total';
  static COMPANY_NAME = 'HyperXchange';


  /**
   * In Service center
   */

  static IN_SERVICE_CENTER_HEADING = 'In Service Center - ';
  static IN_SERVICE_CENTER_CHECK = 'Check';

  /**
   * Not complete
   */

  static NOT_COMPLETE_MODEL = 'Not Complete Models';

  /**
   * complete
   */
  static COMPLETE_MODEL = 'Completed Model Issues';
  static STOCK = 'Stock';
  static ALL_ISSUES_SOLVED = 'All Issues Solved';
  static SAVE_CHANGES = 'Save changes';
  static CLOSE = 'Close';
  static NOT_FOUND = 'All Issues are not solved.';

  /**
   * Model  info
   */
  static MODEL_INFO_HEADING = 'Model Information';
  static ENTER_IMEI_NUMBER = 'IMEI Number';
  static MODEL_DETAILS_HEADING = 'Model Issues Details';
  static MODEL_STATUS = 'Request Status';
  static STATUS = 'STATUS';
  static SOLVED_REQUEST = 'Expired';

  /**
   * status Text
   */

  static WAITING_FOR_APPROVAL = 'Waiting for Approval';
  static REJECT_STATUS = 'In Office';
  static IN_SERVICE_CENTER_STATUS = 'In Service center';
  static COMPLETED = 'Complete';
  static NOT_COMPLETED = 'Not Complete';


  static ISSUE_ACCEPTED = 'Accepted';
  static ISSUE_REJECT = 'Reject';
  static NOT_SOLVED = 'Not Solved';
  static SOLVED = 'Solved';

  /**
   * updated issues approval
   */

  static UPDATE_ISSUES_APPROVAL_HEADING = 'Approve Updated Issues';
  static REQUEST_ID_TABLE_COL_NAME = 'REQUEST ID';
  static SERVICE_CENTER_TABLE_COL_NAME = 'SERVICE CENTER';


  /**
   * Add-issue
   */

  static ADD_ISSUE_HEADING = 'Add Issue';
  static NEW_ISSUE = 'New Issue';
  static SELECT_ISSUE = 'Select Issue';
  static NO_SOLUTION = 'No Solution Found. Add new Solution To Assign';
  static SELECT_SOLUTION = 'Select Solution';
  static ISSUE_AND_SOLUTION = 'Add Issue & Solution';
  static UPDATE = 'Update';
  static NO_ISSUE_SOLUTION = 'No Issues or Solutions Added.';
  static ADD_ISSUES_SOLUTION_VENDOR = 'Add Issues Solutions and Service Center';
  static TRY_AGAIN = 'Try Again';


  /**
   * JSON KEY
   */

  static RESPONSE = 'res';
  static ISSUE_STATUS = 'issue_status';
  static IMEI_JSON = 'imei';
  static REQUESTER_ID = 'requester_id';
  static REQUEST_STATUS = 'request_status';
  static SERVICE_CENTER_ID = 'service_center_id';
  static ISSUES = 'issues';
  static REQUEST_ID = 'request_id';
  static ID = 'id';
  static REQUESTED_ID = 'request_id';
  static ACCEPTED_ISSUE = 'accepted_issues';
  static PHONE_NUMBER = 'phoneNumber';
  static IS_STATUS = 'is_status';
  static ISSUE_DETAILS_JSON = 'issue_details';
  static ISSUE_TYPE_JSON = 'issue_type';
  static ISSUE_ID_JSON = 'issue_id';
  static SPARE_PARTS_RETURN_REQUIRED_JSON = 'spare_part_return_required';
  static SOLUTION_DETAILS_JSON = 'solution_details';
  static COST_DETAILS_JSON = 'cost_details';
  static SERVICE_CENTER_ID_JSON = 'service_center_id';
}


