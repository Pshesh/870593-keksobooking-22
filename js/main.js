//Случайное число из диапазона включительно
const getRandomNumber = function (min, max) {
  if (min > 0 && min < max) {
    const result = Math.random() * (max - min + 1) + min;
    return result > max ? max : result;
  }
  throw new Error('Firt value cannot be less than zero and bigger than first');
}

// Случайное целое число из диапазона включительно
// eslint-disable-next-line no-unused-vars
const getRandomInteger = function (min, max) {
  const randomNumber = getRandomNumber(min, max);
  return randomNumber ? Math.floor(randomNumber) : null;
}

// Случайное число с плавающей запятой из диапазона включительно
// eslint-disable-next-line no-unused-vars
const getCoordinate = function(min, max, digits) {
  const coordinate = getRandomNumber(min, max);
  return coordinate ? +coordinate.toFixed(digits) : null;
}
