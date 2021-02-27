//Случайное число из диапазона включительно
const getRandomNumber = function (min, max) {
  if (min < 0 || min >= max) {
    throw new Error('Firt value cannot be less than zero and bigger than first');
  }
  const result = Math.random() * (max - min + 1) + min;
  return result > max ? max : result;
};

// Случайное целое число из диапазона включительно
const getRandomInteger = function (min, max) {
  const randomNumber = getRandomNumber(min, max);
  return randomNumber ? Math.floor(randomNumber) : null;
};

// Случайное число с плавающей запятой из диапазона включительно
const getCoordinate = function (min, max, digits) {
  const coordinate = getRandomNumber(min, max);
  return coordinate ? +coordinate.toFixed(digits) : null;
};

// Случайный элемент массива
const getRandomArrayElement = function (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
};

// Новый уникальный массив
const getNewUniqueArray = function (arr, length) {
  const newArray = [];
  for (let i = 0; i <= length; i++) {
    newArray.push(getRandomArrayElement(arr));
  }
  let newUniqueArray = new Set(newArray);
  return newUniqueArray;
};

export {getRandomNumber, getRandomInteger, getCoordinate, getRandomArrayElement, getNewUniqueArray};