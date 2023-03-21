
const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');
const tabs = document.querySelector('#tabs1');

tabs.addEventListener('click', (e) => {
    if (e.target.closest('.tab'))
      activeContent(e.target, tab, tabContent);
  });

function activeContent(e, arr1, arr2) {
    arr1.forEach((element) => element.classList.remove('tab_active'));
    arr2.forEach((element) => element.classList.remove('tab__content_active'));
    e.classList.add('tab_active');
    arr2[Array.from(arr1).indexOf(e)].classList.add('tab__content_active');
  }