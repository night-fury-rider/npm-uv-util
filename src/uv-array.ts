var uvArray = (function () {
  /**
   * @description Function to know passed array are equal or not
   * @param arr1 - Array 1
   * @param arr2 - Array 2
   * @returns true if arrays are equal otherwise return false.
   * Note: This method is not recommended if array is large
   */
  function areArraysEqual(arr1: [], arr2: []) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  /**
   * @description Function to get total of a property values from an array.
   * @param {array} items - Array of object whose sum need to be calculated.
   * @param {string} calculationProperty - Name of the property whose value need to be calcuated to get total.
   */
  function getTotal(items: [], calculationProperty: string) {
    if(Array.isArray(items) && calculationProperty) {
      return items.reduce(function(total, item) {
          return total + item[calculationProperty];
      }, 0);
    }
    return 0;
  }

  /**
   * @description Function to sort array with respect to property provided.
   * @param {array} arr - Array to be sorted.
   * @param {string} sortProperty - Property on which array will be sorted.
   * @param {string} order - 'ascending' if specified else 'descending'
   */
  function sort(arr: [], sortProperty: string, order: string) {
    if(!arr || !sortProperty || !sortProperty) {
      return null;
    }
    if(order === 'ascending') { //  Small to Large
      return arr.sort(function(a,b) {return (a[sortProperty] > b[sortProperty]) ? 1 : ((b[sortProperty] > a[sortProperty]) ? -1 : 0);} );
    }else {
      return arr.sort(function(a,b) {return (a[sortProperty] < b[sortProperty]) ? 1 : ((b[sortProperty] < a[sortProperty]) ? -1 : 0);} );
    }
  }

  /**
   * @description Function to get Object from Array.
   * @param {array} myArray - Array of Objects
   * @param {string} attrName - Name of the attribute.
   * @param {string} attrValue - Value of the attribute.
   * @returns {object} Matched object if any otherwise 'undefined'
   */
  function getObjFromArray(myArray: [], attrName: string, attrValue: string) {
    if(!myArray || !attrName || !attrValue) {
      return null;
    }
    return myArray.find(function(obj) {
      return obj[attrName] === attrValue;
    });
  }

  return {
    areArraysEqual: areArraysEqual,
    getTotal: getTotal,
    sort: sort,
    getObjFromArray: getObjFromArray
  }
})();

export default uvArray;
