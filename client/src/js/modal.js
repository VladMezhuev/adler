const modalTriger = [...document.getElementsByClassName('modal-trigger')]
const modals = [...document.getElementsByClassName('modal')]
const modalClose = [...document.getElementsByClassName('js-modal-close')]

function openModal(modal) {
  modal.classList.add('is-active')
  document.body.style.overflow = 'hidden'
}

function closeModal(modal) {
  modal.classList.remove('is-active')
  document.body.style.overflow = 'auto'
}

modalTriger.forEach(trigger => {
  trigger.addEventListener('click', e => {
    if (e.path.includes(trigger)) {
      modals.forEach(modal => {
        if (modal.id === trigger.dataset.modal) {
          openModal(modal)
        }
      })
    }
  })
})

modalClose.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
})

// form

const [passForm] = document.getElementsByClassName('js-pass-form')
const [passFormToggle] = document.getElementsByClassName('js-toggle-pass')
const [openImage] = document.getElementsByClassName('js-pass-open')
const [closeImage] = document.getElementsByClassName('js-pass-close')

passFormToggle.addEventListener('click', () => {
  if (passForm.type === 'password') {
    passForm.type = 'text'
    openImage.classList.remove('is-active')
    closeImage.classList.add('is-active')
  } else {
    passForm.type = 'password'
    openImage.classList.add('is-active')
    closeImage.classList.remove('is-active')
  }
})
