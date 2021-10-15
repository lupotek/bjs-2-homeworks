// Задание 1

function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] < min) {
      min = arr[i]
      }
      if (arr[i] > max) {
      max = arr[i];
    }
      sum = sum + arr[i];
    }
avg = +(sum / arr.length).toFixed(2)
  return { min: min, max: max, avg: avg }
}

// Задание 2
function worker(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i+=1) {
    sum += arr[i]// Ваш код
  }
  return sum;
}

function makeWork(arrOfArr, func) {
      let max = 0;
        for (let i = 0; i < arrOfArr.length; i+=1) {
        let sum = func(arrOfArr[i]);
        if (sum > max) {
          max = sum;
      }
      }
      return max;
    }


// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i+=1) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min; 
  }