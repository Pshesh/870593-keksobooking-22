//Первое задание. Возвращает случайное целое число

// Распишу как я поняла эту функцию, потому что долго не могла понять вот эти действия (max - min + 1) ) + min
// Math.random возвращает число с плавающей запятой
// Поэтому округляемм получаемое значение
// max - min + 1  - задаем диапазон
//  + min - указываем с какого числа диапазон начинается

// https://schoolsw3.com/js/js_random.php
const getRandomNumber1 = function (min, max) {
  if (min < 0) {
    return ('Error. First value cannot be less than zero')
  }
  if (max <= min) {
    return ('Error. Second value cannot be less than first');
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

getRandomNumber1(3, 10);

const getRandomNumber2 = function (min, max) {
  return (min < 0 || max <= min) ? 'Error. First value cannot be less than zero and bigger than first' : Math.floor(Math.random() * (max - min + 1) ) + min;
}

getRandomNumber2(6, 13);

const getRandomNumber3 = function (min, max) {
  return (min < 0) ? 'Error. First value cannot be less than zero' :
    (max <= min) ? 'Error. Second value cannot be less than first' :
      Math.floor(Math.random() * (max - min + 1) ) + min;
}

getRandomNumber3(-5, 3);

//Пример с https://dev-gang.ru/article/generacija-sluczainyh-czisel-s-vanilnym-js-9xozvi8tsm/
// не понимаю почему последняя скобка закрывается в разных местах в первом примере и тут. Или во втором ошибка?

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

randomNumber(2, 9)

// Второе задание. Случайное число с плавающей запятой

const getCoordinate = function(min, max, digits) {
  return (min < 0) ? 'Error. First value cannot be less than zero' :
    (max <= min) ? 'Error. Second value cannot be less than first' :
      (Math.random() * (max - min + 1) + min).toFixed(digits);
}

getCoordinate(17, 19, 4);
