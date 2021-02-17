// Константы
const TITLES = [
  'Новый дизайнерская уютная комната возле Асакуса',
  'Современные апартаменты в японском стиле',
  'Кварира в Синдзюку',
  'Лофт рядом с ж/д вокзалом',
  'Дом в японском стиле рядом с Акихабара',
  'Tokyo Oshiage Вилла',
];

const DESCRIPTIONS = [
  'Комната со свежим ремонтом и простым дизайном.',
  'Почувствуйте себя в японско-токийской квартире.',
  'Мой дом расположен в Синдзюку, центре Токио, отличном месте для осмотра достопримечательностей и покупок.',
  'Лофт расположен в знаменитом туристическом месте Кагуразака.',
  'Дом удобно расположен в районе Таито, недалеко от многих достопримечательностей.',
  'Вилла расположена менее, чем в 30 минутах от популярных районов центральной части Токио.',
];

const TYPES = [
  'palace',
  'flat', 
  'house',
  'bungalow',
];

const IN_OUT_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher', 
  'parking', 
  'washer', 
  'elevator', 
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const AVATARS_MIN = 1;
const AVATARS_MAX = 8;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 100;
const MIN_GUESTS = 1;
const MAX_GUESTS = 100;
const X_COORDINATE_MIN = 35.65000;
const X_COORDINATE_MAX = 35.70000;
const Y_COORDINATE_MIN = 139.70000;
const Y_COORDINATE_MAX = 139.80000;
const COORDINATE_DIGITS = 5;
const ADDS_COUNT = 10;

//Случайное число из диапазона включительно
const getRandomNumber = function (min, max) {
  if (min > 0 && min < max) {
    const result = Math.random() * (max - min + 1) + min;
    return result > max ? max : result;
  }
  throw new Error('Firt value cannot be less than zero and bigger than first');
}

// Случайное целое число из диапазона включительно
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

// Случайный элемент массива
const getRandomArrayElement = function (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
};

// Получаем х и у координаты
const getCoordinates = function () {
  return {
    X: getCoordinate(X_COORDINATE_MIN, X_COORDINATE_MAX, COORDINATE_DIGITS),
    Y: getCoordinate(Y_COORDINATE_MIN, Y_COORDINATE_MAX, COORDINATE_DIGITS),
  }
}

// Создаем объект
const createAdd = function () {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(AVATARS_MIN, AVATARS_MAX) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: '',
      price: getRandomInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomInteger(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomArrayElement(IN_OUT_TIME),
      checkout: getRandomArrayElement(IN_OUT_TIME),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
    location: getCoordinates,
  }
}

// Создаем массив
const createAdds = new Array(ADDS_COUNT).fill(null).map(() => createAdd());

createAdds();
