const tabs = document.querySelectorAll('.tab');
const deliveryTab = document.querySelector('[data-tab="delivery"]');
const pickupTab = document.querySelector('[data-tab="pickup"]');
const deliveryBlock = document.querySelector('.tabs-block__item-delivery');
const pickupBlock = document.querySelector('.tabs-block__pick-up');

deliveryBlock.style.display = 'none';

const toggleActiveFromClick = (evt) => {
  tabs.forEach((tab) => tab.classList.remove('active'));

  evt.currentTarget.classList.add('active');

  if (evt.currentTarget.dataset.tab === 'delivery') {
    pickupBlock.style.display = 'none';
    deliveryBlock.style.display = 'block';
  }

  if (evt.currentTarget.dataset.tab === 'pickup') {
    deliveryBlock.style.display = 'none';
    pickupBlock.style.display = 'block';
  }
};

const onDeliveryTabEnterPress = (evt) => {
  if (evt.key === 'Enter' && !deliveryTab.classList.contains('active')) {
    tabs.forEach((tab) => tab.classList.remove('active'));
    deliveryTab.classList.add('active');

    pickupBlock.style.display = 'none';
    deliveryBlock.style.display = 'block';
  }
};

const onPickupTabEnterPress = (evt) => {
  if (evt.key === 'Enter' && !pickupTab.classList.contains('active')) {
    tabs.forEach((tab) => tab.classList.remove('active'));
    pickupTab.classList.add('active');

    deliveryBlock.style.display = 'none';
    pickupBlock.style.display = 'block';
  }
};

pickupTab.addEventListener('focus', () => {
  document.addEventListener('keydown', onPickupTabEnterPress);
});

deliveryTab.addEventListener('focus', () => {
  document.addEventListener('keydown', onDeliveryTabEnterPress);
});

pickupTab.addEventListener('blur', () => {
  document.removeEventListener('keydown', onPickupTabEnterPress);
});

deliveryTab.addEventListener('blur', () => {
  document.removeEventListener('keydown', onDeliveryTabEnterPress);
});

tabs.forEach((tab) => {
  tab.addEventListener('click', (evt) => {
    toggleActiveFromClick(evt);
  });
});

