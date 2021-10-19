const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]);

const advancedFilter = (arr) => arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10);

