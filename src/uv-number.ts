var uvNumber = (function () {
  /**
   * @description Function to get factorial of passed number
   * @returns number - Returns factorial of passed number
   */
  const getFactorial = (n: number): number => {
    return n > 1 ? n * getFactorial(n - 1) : n;
  };

  /**
   * @description Function to change format of passed number
   * @returns number - Returns converted string
   */
  const changeCurrencyFormat = (
    n: number,
    locale?: string,
    currency?: string
  ): string => {
    locale = locale ? locale : "en-IN";
    currency = currency ? currency : "INR";

    return new Intl.NumberFormat(locale, {
      currency: currency,
    }).format(n);
  };

  /**
   * @description Function to format contact number
   * @returns number - Returns converted string
   */
  const formatContactNumber = (n: string): string => {
    let result = "";

    // Remove unnecessary characters
    result = n.replace(/\ /g, "");

    // Reverse string
    result = result.split("").reverse().join("");

    const part1 = result.substring(0, 5); // Last 5 digits
    const part2 = result.substring(5, 10); // Second last 5 digits
    const part3 = result.substring(10); // All remaining digits

    result = `${part1} ${part2} ${part3}`;

    // Reverse string to make it in correct order.
    result = result.split("").reverse().join("");

    return result;
  };

  return {
    changeCurrencyFormat,
    formatContactNumber,
    getFactorial,
  };
})();

export default uvNumber;
