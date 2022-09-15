const btnDay = document.querySelector('.day');
const btnWeek = document.querySelector('.week');
const btnMonth = document.querySelector('.month');

const boxDay = document.querySelectorAll('.box-day');
const boxWeek = document.querySelectorAll('.box-week');
const boxMonth = document.querySelectorAll('.box-month');


btnDay.addEventListener('click', () => {
     btnDay.classList.add('active');
     btnWeek.classList.remove('active');
     btnMonth.classList.remove('active');
     boxDay.forEach(day => {
          day.classList.remove('hide');
     });
     boxWeek.forEach(week => {
          week.classList.add('hide');
     });
     boxMonth.forEach(month => {
          month.classList.add('hide');
     });
});

btnWeek.addEventListener('click', () => {
     btnWeek.classList.add('active');
     btnDay.classList.remove('active');
     btnMonth.classList.remove('active');
     boxDay.forEach(day => {
          day.classList.add('hide');
     });
     boxWeek.forEach(week => {
          week.classList.remove('hide');
     });
     boxMonth.forEach(month => {
          month.classList.add('hide');
     });
});

btnMonth.addEventListener('click', () => {
     btnMonth.classList.add('active');
     btnDay.classList.remove('active');
     btnWeek.classList.remove('active');
     boxDay.forEach(day => {
          day.classList.add('hide');
     });
     boxWeek.forEach(week => {
          week.classList.add('hide');
     });
     boxMonth.forEach(month => {
          month.classList.remove('hide');
     });
});


