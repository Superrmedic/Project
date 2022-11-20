'use strict';

const notice = document.querySelector('.notice'),
  li = notice.getElementsByTagName('li');

let tmp = li[0];

notice.addEventListener('click', function (e) {
  const list = e.target.parentNode;

  function tmpRemove() {
    tmp.classList.add('hidden');
  }

  if (list.classList.contains('service_list')) {
    tmpRemove();
    list.classList.remove('hidden');
    tmp = list;
  }
});

const menucategory = document.querySelector('.menucategory'),
  accordion = menucategory.querySelector('.accordion li');

accordion.addEventListener('click', function () {
  this.classList.remove('selected');
  this.classList.add('selected');
})