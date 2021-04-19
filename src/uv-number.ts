var uvNumber = (function () {
  /**
   * @description Function to get factorial of passed number
   * @returns number - Returns factorial of passed number
   */
  const getFactorial =  (n: number): number => {
    return ((n > 1) ? n * getFactorial(n-1) : n);
  }


  /**
   * @description Function to change format of passed number
   * @returns number - Returns converted string
   */
  const changeFormat =  (n: number, locale: string, currency: string): string => {
    locale = locale ? locale : 'en-IN';
    currency = currency ? currency: 'INR';

    return new Intl.NumberFormat(locale, {
      currency: currency
    }).format(n);
  }
  

  return {
    getFactorial: getFactorial,
    changeFormat: changeFormat
  }
})();

export default uvNumber;
