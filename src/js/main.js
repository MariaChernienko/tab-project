const btnHome = document.querySelector('[data-tab = home]');
const btnProfile = document.querySelector('[data-tab = profile]');
const btnContact = document.querySelector('[data-tab = contact]');

const titleHome = document.querySelector('[data-item = home]');
const titleProfile = document.querySelector('[data-item = profile]');
const titleContact = document.querySelector('[data-item = contact]');

const items = document.querySelectorAll('.active-title');
const btn = document.querySelectorAll('[data-tab]');


btn.forEach((element) => {
  element.addEventListener('click', (event) => {
    items.forEach((element) => {
      element.classList.remove('active-title');
      element.classList.add('unactive-title');
    });
  });
});

btnHome.addEventListener('click', (event) => {
  titleHome.classList.remove('unactive-title');
  titleHome.classList.add('active-title');
});
btnProfile.addEventListener('click', (event) => {
  titleProfile.classList.remove('unactive-title');
  titleProfile.classList.add('active-title');
});
btnContact.addEventListener('click', (event) => {
  titleContact.classList.remove('unactive-title');
  titleContact.classList.add('active-title');
});
