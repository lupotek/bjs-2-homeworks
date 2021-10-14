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
      avg = +(sum / arr.length).toFixed(2);
  }
  return { min: min, max: max, avg: +avg.toFixed(2)};
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
    let sum = worker(arrOfArr[i]);

    if (sum > max) {
      max = sum;
  }
  }
  return max;
}
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
makeWork(arrOfArr, worker);

arrOfArr = [[10, 10, 11], [20, 10]];
makeWork(arrOfArr, worker);

arrOfArr = [[0, 0, 0], [-1, -100]];
makeWork(arrOfArr, worker);


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
    
    function makeWork(arrOfArr, worker2) {
      let max = 0;
        for (let i = 0; i < arrOfArr.length; i+=1) {
        let sum = worker2(arrOfArr[i]);
        if (sum > max) {
          max = sum;
      }
      }
      return max;
    }
    
    arrOfArr = [[-10, -20, -40], [10, 20, 30]];
    makeWork(arrOfArr, worker2); // 30
    // 98
    
    arrOfArr = [[0, 0, 0], [-1, -99]];
    makeWork(arrOfArr, worker2); 