/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
  // check if param is already array
  pathParam = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  // set current to object
  let cur = objectParam;

  // iterate the array
  for (let path of pathParam) {
    // check if it's null already
    if (cur == null) return defaultValue;
    // update current
    cur = cur[path];
  }

  // the last element could be null we need to check undefined
  if (cur === undefined) {
    // return default value
    return defaultValue;
  }

  // get current
  return cur;
}
