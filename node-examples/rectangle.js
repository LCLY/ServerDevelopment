module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    setTimeout(
      () =>
        // for error object, 1st argument is for error while 2nd argument is for function or expected actions
        // so if theres error, 2nd argument is null, if theres result, 1st argument is null
        callback(
          new Error(
            'dimensions should be greater than zero, x = ' + x + ' y = ' + y,
            null
          )
        ),
      2000
    );
  } else {
    setTimeout(
      () =>
        callback(null, {
          perimeter: () => 2 * (x + y),
          area: () => x * y,
        }),
      2000
    );
  }
};
