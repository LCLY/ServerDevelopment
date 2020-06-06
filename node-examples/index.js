var rect = require('./rectangle');

function solveRect(l, b) {
  console.log('solve rect with l = ' + l + ' and b = ' + b);

  if (l <= 0 || b <= 0) {
    console.log(
      'dimensions should be greater than zero, l = ' + l + ' b = ' + b
    );
  } else {
    console.log('area of rectangle is ' + rect.area(l, b));
    console.log('perimeter of rectangle is ' + rect.perimeter(l, b));
  }
}

solveRect(2, 4);
solveRect(0, -5);
