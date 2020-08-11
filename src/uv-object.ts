var uvObject = (function () {

   /**
    * @description Function to get inner object from source object
    * @param sourceObj {object} - Object from which inner object is retrieved.
    * @param objPath {string} - Inner object path
    * @param objKey {string} - Key of inner object
    * @param pathSeperator {string} path seperator. By default it is '.'
    * @returns {object} Inner object if found else null
    */
  function getObjectByPath(sourceObj: object, objPath: string, objKey:string,
                            pathSeperator='.') {
    const keys = objPath.split(pathSeperator);
    let obj = JSON.parse(JSON.stringify(sourceObj));  // Cloned to avoid source object update
    for (const key of keys) {
      if (!obj[key]) {
        return null;
      }
      obj = obj[key];   // Assign deeper object for further check
    }
    return obj[objKey] ? obj[objKey] : null;
  }

  return {
    getObjectByPath: getObjectByPath
  }
})();

export default uvObject;
