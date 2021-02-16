const TITLES = [
  'La petite maison des Buttes Chaumont',
  'Double/Twin Room, close to Opera and the Louvre',
  'Belle chambre en plein cœur de Paris',
  'Joli petit studio République',
  'Luxury Apartment Heart of Paris Bail Mobilité',
  'NEW Studio Rénové Calme Et Cosy',
];

const DESCRIPTIONS = [
  'Une petit maison au fond d\'une cour très calme à deux pas du parc des buttes Chaumont.',
  'The Daunou Opera enjoys a prestigious location in the heart of the right bank of Paris.',
  'L\'appartement est situé à quelle mètre de la gare de l\'est dans le 10e arrondissement de paris.',
  'Situé à quelques mètres de la place de la République et au bord du Marais, cet appartement est idéalement situé!',
  'Stay in a architect designed apartment located in one of the most prestigious address in the heart of Paris.',
  'Situé dans un lieu calme et résidentiel, proche du quartier de Montparnasse',
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
const MIN_PRICE = 1000;
const MAX_PRICE = 100000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 10;
const MIN_GUESTS = 1;
const MAX_GUESTS = 30;
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

// Случайный элемнт массива
const getRandomArrayElement = function (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
};

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