/* функционал кнопки прокрутки наверх страницы */

const scrollButton = document.querySelector('.scroll-top-btn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}

scrollButton.addEventListener('click', () => {
  scrollToTop();
});

/* открытие формы при клике на кнопку покупки */

const buyButtons = document.querySelectorAll('.item__button');
const popup = document.querySelector('.buy-form');
const itemFormName = document.querySelector('.buy-form__item-name');

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    popup.classList.add('open');
    const item = button.closest('.category__item');
    const itemName = item.querySelector('.item__name').textContent;
    itemFormName.textContent = itemName;
    console.log(itemName);
  });
});

/* отправка формы */

const buyForm = document.querySelector('.buy-form__form');

function formSubmitHandler(evt) {
  evt.preventDefault();
  popup.classList.remove('open');
  buyForm.reset();
  alert('Покупка совершена успешно!');
}

buyForm.addEventListener('submit', formSubmitHandler);

const exitFormButton = document.querySelector('.buy-form__close-button');
exitFormButton.addEventListener('click', () => {
  popup.classList.remove('open');
  buyForm.reset();
});

/* Переключение темы */

const themeSwitch = document.querySelector('.header__theme-switch');
const header = document.querySelector('.header');
const headerTexts = document.querySelectorAll('.header__nav-link');
const body = document.querySelector('.body');
const itemCard = document.querySelectorAll('.category__item');
const formContainer = document.querySelector('.buy-form__container');

themeSwitch.addEventListener('click', () => {
  header.classList.toggle('dark-theme');
  headerTexts.forEach((text) => {
    text.classList.toggle('dark-theme');
  });
  body.classList.toggle('dark-theme');
  itemCard.forEach((card) => {
    card.classList.toggle('dark-theme');
  });
  formContainer.classList.toggle('dark-theme');
});

/* преобразование даты */

function formatDate(inputDate) {
  // Разделение даты на день, месяц и год
  var parts = inputDate.split('.');
  var day = parseInt(parts[0]);
  var month = parseInt(parts[1]);
  var year = parseInt(parts[2]);

  // Создание объекта даты
  var dateObj = new Date(year, month - 1, day);

  // Получение дня недели в виде числа (0 - Воскресенье, 1 - Понедельник, и так далее)
  var weekday = dateObj.getDay();

  // Массив с названиями дней недели
  var weekdays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  // Получение названия дня недели
  var formattedWeekday = weekdays[weekday];

  // Массив с названиями месяцев
  var months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  // Получение названия месяца
  var formattedMonth = months[month - 1];

  // Получение порядкового номера недели в году
  var weekNumber = Math.ceil((day + 6 - weekday) / 7);

  // Форматирование строки с датой
  var formattedDate =
    formattedWeekday +
    ', ' +
    weekNumber +
    ' неделя ' +
    formattedMonth +
    ' ' +
    year +
    ' года';

  return formattedDate;
}

// Пример использования функции
var inputDate = '01.01.2022';
var formattedDate = formatDate('01.02.2023');
console.log(formattedDate); // Выводит: "Суббота, 1 неделя Января 2022 года"

const items = document.querySelectorAll('.category__item');

items.forEach((item) => {
  item.querySelector('.item__date').textContent = formatDate('01.02.2023');
});
