const tabs = document.querySelectorAll('.tab');
const tabContainer = document.querySelector('.tabs-blocks__tabs');

const toggleActive = (evt) => {
  tabs.forEach((tab) => tab.classList.remove('active'));

  evt.target.classList.add('active');
};

