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
  el.addEventListener('click', closeMenu)
})

document.addEventListener('scroll', closeMenu)

document.addEventListener('click', e => {
  if (!e.path.includes(menu) && !e.path.includes(iconMenu)) {
    closeMenu()
  }
})
