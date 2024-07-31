/**
 * Examples

get(john, 'profile.name.firstName'); // 'John'
get(john, 'profile.gender'); // 'Male'
get(jane, 'profile.name.firstName'); // undefined
Arrays can also be accessed if numerical indices are provided.

get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3
 */

/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
  const paths = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let idx = 0;
  let object = objectParam;

  while (object != null && idx < paths.length) {
    const pathString = String(paths[idx]);
    object = object[pathString];
    idx++;
  }

  const value = idx && idx === paths.length ? object : undefined;
  return value !== undefined ? value : defaultValue;
}
