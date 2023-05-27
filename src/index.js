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
