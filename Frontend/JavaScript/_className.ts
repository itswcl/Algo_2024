function className(...args) {
  // iterate each element in arg and add to accoumulator
  return (
    args
      // get each arg out
      .flat(Infinity)
      // add all key to result
      .reduce((result, item) => {
        // if arg is null we just return empty
        if (item == null) return result;
        // check the type
        const type = typeof item;

        switch (type) {
          // type string and number add directly
          case "string":
          case "number":
            result.push(item);
            break;
          // type object can be either object or array both has key and value we get from entries
          case "object":
            for (let [key, value] of Object.entries(item)) {
              // if value valid we add the key into result
              if (!!value) {
                result.push(key);
              }
            }
            break;
        }
        return result;
      }, [])
      .join(" ")
  );
}
