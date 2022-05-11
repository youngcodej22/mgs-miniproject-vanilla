window.addEventListener("DOMContentLoaded", () => {
  const popupContainer = document.querySelector('.popup-container');
  // 이체 버튼
  const btnAccountTexts = document.querySelectorAll('.account__text');
  // chart icon
  const chartLinks = document.querySelectorAll('.limit > a');
  // btn-close
  const btnClose = popupContainer.querySelector('.btn-close');

  btnAccountTexts.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.target);

      // popupContainer.classList.remove('hidden');
      console.log(popupContainer);
    })
  });

  // chart button click
  chartLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      popupContainer.classList.remove('hidden');
    })
  });

  // btn-close
  btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    popupContainer.classList.add('hidden');
  })

})


