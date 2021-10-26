let countBits = (n) => {
  const baseTwoArray = calculateBaseTwoNumbersRequired(n);
  const binaryArray = createBinaryArray(n, baseTwoArray);
  return binaryArray.join('');
};

const calculateBaseTwoNumbersRequired = (n) => {
  let highestBaseNumber = getHighestBaseNumber(n);
  return generateBaseArray(highestBaseNumber);
};

const getHighestBaseNumber = (n) => {
  let highestNumber = 1;
  let number = 2;
  while (number <= n) {
    highestNumber = number;
    number *= 2;
  }
  return highestNumber;
};

const generateBaseArray = (highestNumber) => {
  let baseArray = [];
  let number = highestNumber;
  while (number >= 2) {
    baseArray.push(number);
    number /= 2;
  }
  baseArray.push(1);
  return baseArray;
};

const createBinaryArray = (n, baseTwoArray) => {
  const binaryArray = baseTwoArray.map((baseTwoNumber) => {
    if (isCurrentNumberEqualToBase(n, baseTwoNumber) && !isBaseNumberOne()) {
      n = 0;
      return 1;
    }
    if (isCurrentNumberGreaterThanBase(n, baseTwoNumber)) {
      n = n - baseTwoNumber;
      return 1;
    }
    return 0;
  });
  return binaryArray;
};

const isCurrentNumberEqualToBase = (number, baseNumber) => {
  return number - baseNumber === 0;
};

const isBaseNumberOne = (baseNumber) => {
  return baseNumber === 1;
};

const isCurrentNumberGreaterThanBase = (number, baseNumber) => {
  return number > baseNumber;
};

const countNumberOf1 = (array) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return array.reduce(reducer);
};
