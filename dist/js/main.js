// eslint-disable-next-line func-names
const tab = function () {
  const buttons = document.querySelectorAll('[data-tab]');
  const descriptions = document.querySelectorAll('[data-description]');
  const active = document.querySelectorAll('.active');

  buttons.forEach((element) => {
    element.addEventListener('click', (event) => {
      const curent = element.dataset.tab;
      tabController(curent);
    });
  });
  function tabController(curent) {
    buttons.forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelector(`[data-tab="${curent}"]`).classList.add('active');
    descriptions.forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelector(`[data-description="${curent}"]`).classList.add('active');
  }
};


tab();
