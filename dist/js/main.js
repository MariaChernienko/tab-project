// eslint-disable-next-line func-names
(function () {
  const buttons = document.querySelectorAll('[data-tab]');
  const tabContents = document.querySelectorAll('[data-content]');
  const active = document.querySelectorAll('.tab .active');

  buttons.forEach((element) => {
    element.addEventListener('click', (event) => {
      const tabName = element.dataset.tab;
      activeTab(tabName);
    });
  });
  function activeTab(tabName) {
    buttons.forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    tabContents.forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelector(`[data-content="${tabName}"]`).classList.add('active');
  }
}());
