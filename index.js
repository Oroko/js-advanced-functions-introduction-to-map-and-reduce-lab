// Your code here
// const mapToNegativize = (sourceArray) => {
//   return sourceArray.map(n => n * -1)
// }

const mapToNegativize = (sourceArray) => {
  let newValues = [];
  sourceArray.forEach((n) => {
    newValues.push(n * -1);
  });
  return newValues;
};
// const mapToNoChange = (arr) => {
//   return arr.map(n => n)
// }

const mapToNoChange = (arr) => {
  let sameValues = [];
  arr.forEach((n) => {
    sameValues.push(n);
  });
  return sameValues;
};
// const mapToDouble = (arr) => {
//   return arr.map(n => n * 2)
// }
const mapToDouble = (arr) => {
  let doubledValues = [];
  arr.forEach((n) => {
    doubledValues.push(n * 2);
  });
  return doubledValues;
};
// const mapToSquare = (arr) => {
//   return arr.map(n => n ** 2)
// }

const mapToSquare = (arr) => {
  let squaredValues = [];
  for (const n of arr) {
    squaredValues.push(n * n);
  }
  return squaredValues;
};

const reduceToTotal = (arr, startingPoint = 0) => {
  return arr.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, startingPoint);
};

const reduceToAllTrue = (arr) => {
  return arr.reduce((acc, currentValue) => {
    return acc && Boolean(currentValue);
  }, true);
};
const reduceToAnyTrue = (arr) => {
  return arr.reduce((acc, currentValue) => acc || Boolean(currentValue), false);
};
