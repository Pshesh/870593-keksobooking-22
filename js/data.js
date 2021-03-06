import {getRandomInteger, getCoordinate, getRandomArrayElement, getNewUniqueArray} from './util.js';

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


// Получаем х и у координаты
const getCoordinates = function () {
  return {
    X: getCoordinate(X_COORDINATE_MIN, X_COORDINATE_MAX, COORDINATE_DIGITS),
    Y: getCoordinate(Y_COORDINATE_MIN, Y_COORDINATE_MAX, COORDINATE_DIGITS),
  };
};

// Создаем объект
const createAdd = function () {
  const location = getCoordinates();
  const featuresLength = getRandomInteger(0, FEATURES.length);
  const photosLength = getRandomInteger(0, PHOTOS.length);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(AVATARS_MIN, AVATARS_MAX) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `location.${location.X}, location.${location.Y}`,
      price: getRandomInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomInteger(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomArrayElement(IN_OUT_TIME),
      checkout: getRandomArrayElement(IN_OUT_TIME),
      features: getNewUniqueArray(FEATURES, featuresLength),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getNewUniqueArray(PHOTOS, photosLength),
    },
    location: location,
  };
};

// Создаем массив
const createAdds = function (length) {
  const allAdds = [];
  for (let i = 0; i <= length; i++) {
    allAdds.push(createAdd());
  }
  return allAdds;
}

export {createAdds};