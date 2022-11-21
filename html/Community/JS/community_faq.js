'use strict';

const notice = document.querySelector('.c_noticed'),
  li = notice.getElementsByTagName('li');

let tmp = li[0];

notice.addEventListener('click', function (e) {
  const list = e.target.parentNode;

  function tmpRemove() {
    tmp.classList.add('c_hidden');
  }

  if (list.classList.contains('c_service_list')) {
    tmpRemove();
    list.classList.remove('c_hidden');
    tmp = list;
  }
});

const menucategory = document.querySelector('.c_menucategory'),
  accordion = menucategory.querySelector('.accordion li');

accordion.addEventListener('click', function () {
  this.classList.remove('selected');
  // this.classList.add('selected');
});