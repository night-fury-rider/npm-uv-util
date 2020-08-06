var uvDevice = (function () {
  /**
   * @description Function to check device is mobile or not
   * @returns boolean - Returns true if running on mobile else return false.
   */
  function isMobileDevice() {
    return navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ? true : false;
  }

  return {
    isMobileDevice: isMobileDevice
  }
})();

export default uvDevice;
