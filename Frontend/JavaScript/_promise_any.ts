/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  // return new promise
  return new Promise((resolve, reject) => {
    // if it's empty we reject early
    if (iterable.length === 0) reject(new AggregateError([]));

    // initial pendings count and errors
    let pendings = iterable.length;
    let errors = new Array(iterable.length);

    // now we go thru iteratble with async function
    iterable.forEach(async (item, idx) => {
      // so we try and catch
      try {
        // in try we await the item and resolve
        const val = await item;
        resolve(val);
      } catch (err) {
        // if err we set to errors arr
        // decrease pendings
        errors[idx] = err;
        pendings--;

        // once pending hit zero we reject with errors arr
        if (pendings === 0) reject(new AggregateError(errors));
      }
    });
  });
}
