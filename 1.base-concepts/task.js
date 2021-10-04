
function solveEquation(a, b, c) {
  let arr;
  "use strict"
  let d = b ** 2 - 4 * a * c;
  let x1;
  if (d < 0) {
    arr = []
  } else if (d = 0) {
    arr.push ( x1 = -b / ( 2 * a ) );
  } else if (d > 0) {
    arr.push ( x1 = (-b + Math.sqrt(d) )/(2a));
    arr.push ( x2 = (-b - Math.sqrt(d) )/(2a));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
