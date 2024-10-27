function myExpect(input) {
  // we have 'not' reference for toBe
  const not = { toBe };

  // we create toBe function call which passing in a value
  function toBe(value) {
    // we check the input and value
    const isSame = Object.is(input, value);
    const res = this === not ? !isSame : isSame;

    if (!res) {
      throw Error();
    }
  }

  // return toBe and not callback
  return {
    toBe,
    not,
  };
}
