const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const weekday = days[ new Date().getDay() ];
const thisMonth = months[ new Date().getMonth() ];
const todaysDate = new Date().getDate();

const displayWeekday = document.querySelector('[data-weekday]');
const displayMonth = document.querySelector('[data-month]');
const displayDay = document.querySelector('[data-day]');

displayWeekday.innerHTML = weekday;
displayMonth.innerHTML = thisMonth;
displayDay.innerHTML = todaysDate;