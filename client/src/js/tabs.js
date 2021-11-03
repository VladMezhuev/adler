/* eslint-disable no-unused-expressions */

export function changeImage() {
  const triggers = [...document.getElementsByClassName('js-category')]
  const [image] = [...document.getElementsByClassName('js-image')]
  if (!triggers && !image) return
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      image.classList.add('fade')
      image.src = trigger.dataset.image
      setTimeout(() => {
        image.classList.remove('fade')
      }, 500)
      triggers.forEach(item => {
        item !== trigger ? item.classList.remove('is-active') : item.classList.add('is-active')
      })
    })
  })
}
