export class Validate {

  static validateNumber(num) {
    return typeof (num) === 'number';
  }

  /**
   * return true if value  is string else return false.
   * @param value
   */
  static validateString(value) {
    return typeof (value) === 'string';
  }

  static validateUndefined(value){
    return typeof (value) !== 'undefined'
  }

  static validateBlankString(value){
    return value !== '';

  }
}
