
function solveEquation(a, b, c) {
  "use strict"
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x1;
  let x2;
  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    arr.push ( x1 = -b / ( 2 * a ) );
  } else if (d > 0) {
    arr.push ( x1 = (-b + Math.sqrt(d) )/(2*a));
    arr.push ( x2 = (-b - Math.sqrt(d) )/(2*a));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict"
  let totalAmount;
  let payment;
  
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "test"`
    } else if (isNaN(contribution)) {
      return `Параметр "Начальный взнос" содержит неправильное значение "test"`
    } else if (isNaN(amount)) {
      return `Параметр "Общая стоимость" содержит неправильное значение "test"`
    }

let loanBody = amount - contribution;
let currentDate = new Date();
let mounths = Math.floor((date - currentDate)/(1000 * 60 * 60 * 24 * 30));
let finalPercent = percent/100/12;
payment = loanBody * (finalPercent + finalPercent / (((1 + finalPercent) ** mounths) - 1));
totalAmount = (payment * mounths);

console.log(totalAmount.toFixed(2));

return totalAmount.toFixed(2);
}