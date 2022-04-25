'use strict';

let date = new Date();
let dateNow = new Date().getTime();
let day = date.getDay();
let localUserDate = new Date().toLocaleDateString(); // текущая дата пользователя
let localUserTime = new Date().toLocaleTimeString(); // текущее время пользователя
let nowHours = date.getHours();
let days;

const getTimeRemaning = (deadline) => {
  let dayNewYear = new Date(deadline).getTime();
  let timeRemaning = (dayNewYear - dateNow) / 1000;
  days = Math.floor(timeRemaning / 60 / 60 / 24);

  return { days };
}

const getDate = () => {
  if (nowHours <= 10 && nowHours > 4) {
    nowHours = 'Доброе утро';
  } else if (nowHours > 10 && nowHours < 17) {
    nowHours = 'Добрый день';
  } else if (nowHours > 17 && nowHours < 23) {
    nowHours = 'Добрый вечер';
  } else if (nowHours > 23 && nowHours < 4) {
    nowHours = 'Доброй ночи';
  }

  if (day === 0) {
    day = 'Воскресенье';
  } else if (day === 1) {
    day = 'Понедельник';
  } else if (day === 2) {
    day = 'Вторник';
  } else if (day === 3) {
    day = 'Среда';
  } else if (day === 4) {
    day = 'Четверг';
  } else if (day === 5) {
    day = 'Пятница';
  } else if (day === 6) {
    day = 'Суббота';
  }
}

getDate();
getTimeRemaning('31 december 2022');

console.log(` ${nowHours}, сегодня ${day}`);
console.log(` Текущее время: ${localUserTime}`);
console.log(` До нового года осталось : ${days} дней`);
