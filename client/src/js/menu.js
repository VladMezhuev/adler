/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

const iconMenu = document.getElementById('js-trigger')
const menu = document.getElementById('js-menu')
const menuLinks = [...document.getElementsByClassName('js-menu-link')]

function toggleMenu() {
  menu.classList.toggle('is-active')
  iconMenu.classList.toggle('is-active')
}

function closeMenu() {
  menu.classList.remove('is-active')
  iconMenu.classList.remove('is-active')
}

iconMenu.addEventListener('click', toggleMenu)

menuLinks.forEach(el => {
  if (el.href === document.location.href) {
    el.classList.add('is-active')
    el.style.cursor = 'default'
  }
  el.addEventListener('click', e => {
    if (document.location.href.includes(e.target.pathname)) {
      e.preventDefault();
      closeMenu()
    }
  })
})

document.addEventListener('scroll', closeMenu)

document.addEventListener('click', e => {
  if (!e.path.includes(menu) && !e.path.includes(iconMenu)) {
    closeMenu()
  }
})
