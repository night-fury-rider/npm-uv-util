var uvString = (function () {
  /**
   * @description Function to get random string with length 7
   * @returns random string with length 7
   */
  function getRandomString() {
    return Math.random().toString(30).substring(6);
  }

  /**
   * @description Function to know string is alphanumeric or not
   * @param {string} str - String to be checked for alphanumeric
   * @returns {boolean} true if alphanumeric else false.
   */
  function isAlphanumeric(str) {
    return /^[a-z0-9]+$/i.test(str);
  }

  /**
   * @description Function to know string is number or not
   * @param {string} str - String to be checked for number
   * @returns {boolean} true if is numeric string else false.
   */
  function isNumber(str) {
    return !isNaN(str);
  }

  /**
   * @description Function to know string is date or not
   * @param {string} str - String to be checked for date
   * @returns {boolean} true if is date string else false.
   */
  function isDate(str) {
    return !isNaN(new Date(str).getDate())
  }

  /**
   * @description Function to know string is number or not
   * @param {string} str - String to be checked for number
   * @returns {boolean} true if is numeric string else false.
   */
  function getAgeFromDate(dateString) {
    if(!isDate(dateString)) {
      return null;
    }
    var birthDate = new Date(dateString);
    var todayDate = new Date();
    var age = todayDate.getFullYear() - birthDate.getFullYear();
    var monthDifference = todayDate.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && todayDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return {
    getRandomString: getRandomString,
    isAlphanumeric: isAlphanumeric,
    isNumber: isNumber,
    isDate: isDate,
    getAgeFromDate: getAgeFromDate
  }
})();

export default uvString;