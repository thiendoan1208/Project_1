
  // buy ticket button
  const buyBtns = document.querySelectorAll('.js-buy-ticket')
  const modal = document.querySelector('.modal')
  const modalClose = document.querySelector('.js-modal-close')
  const modalShutdown = document.querySelector('.js-modal-shutdown')

  function showBuytickets() {
    modal.classList.add('open')
  }

  function hideBuytickets() {
    modal.classList.remove('open')
}


  for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuytickets)
  }


  modalClose.addEventListener('click', hideBuytickets)
  modalShutdown.addEventListener('click', hideBuytickets)


// submit button
  const subBtns = document.querySelectorAll('.js-submit-button')
  const confirmm = document.querySelector('.confirm-modal')
  const modalOff = document.querySelector('.js-close-button-notice')

  function showSubticket() {
    confirmm.classList.add('open-confirm')
  }

  function offConfirm() {
    confirmm.classList.remove('open-confirm')
  }


  for (const subBtn of subBtns) {
    subBtn.addEventListener('click', showSubticket)
  }

  modalOff.addEventListener('click', offConfirm)


