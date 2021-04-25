var uvDevice = (function () {
  /**
   * @description Function to check device is mobile or not
   * @returns boolean - Returns true if running on mobile else return false.
   */
  function isMobileDevice() {
    return navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ? true : false;
  }

  /**
   * @description Function to scroll to passed element smoothly
   * @param elementId - Element Id
   * @param behavior  - Defines the transition animation.
   * @param block     - Defines vertical alignment.
   * @param inline    - Defines horizontal alignment.
   */
  function scrollSmoothly(elementId:string, behavior?:any, block?:any, inline?:any) {

    behavior = behavior ? behavior : 'smooth';
    block = block ? block : 'start';
    inline = inline ? inline : 'nearest';

    let targetElement;

    if(elementId) {
      targetElement = document.getElementById(elementId);
    }

    targetElement && targetElement.scrollIntoView({
      behavior: behavior,
      block: block,
      inline: inline
    });
  }

  return {
    isMobileDevice: isMobileDevice,
    scrollSmoothly: scrollSmoothly
  }
})();

export default uvDevice;
