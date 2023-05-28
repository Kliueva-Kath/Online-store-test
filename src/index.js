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
