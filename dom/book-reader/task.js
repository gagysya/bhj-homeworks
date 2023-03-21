
const fontSize = Array.from(document.querySelectorAll('.font-size'));
const bookСontent = document.querySelector('.book__content');

fontSize.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    fontSize.forEach((fontSizeA) => fontSizeA.classList.remove('font-size_active'));
    if (e.target.dataset.size === 'small') {
      e.target.classList.add('font-size_active');
      bookСontent.classList.remove('book_fs-big');
      bookСontent.classList.add('book_fs-small');
    } else if (e.target.dataset.size === 'big') {
      e.target.classList.add('font-size_active');
      bookСontent.classList.remove('book_fs-small');
      bookСontent.classList.add('book_fs-big');
    } else {
      e.target.classList.add('font-size_active');
      bookСontent.classList.remove('book_fs-small');
      bookСontent.classList.remove('book_fs-big');
    }
  });
});