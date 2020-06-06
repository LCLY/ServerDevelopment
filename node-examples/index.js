var rect = require('./rectangle');

function solveRect(l, b) {
  console.log('solve rect with l = ' + l + ' and b = ' + b);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log('error: ' + err.message);
    } else {
      console.log(
        'area: ',
        rectangle.area(),
        ' perimeter: ',
        rectangle.perimeter()
      );
    }
  });
}

solveRect(2, 4);
solveRect(0, -5);
