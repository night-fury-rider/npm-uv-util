var uvNumber = (function () {
  /**
   * @description Function to get factorial of passed number
   * @returns number - Returns factorial of passed number
   */
  const getFactorial =  (n: number): number => {
    return ((n > 1) ? n * getFactorial(n-1) : n)
  }

  return {
    getFactorial: getFactorial
  }
})();

export default uvNumber;
