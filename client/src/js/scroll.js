export function scrollTo() {
  const smoothLinks = [...document.getElementsByClassName('js-scroll')];
  if (!smoothLinks) return
  smoothLinks.forEach(smoothLink => {
    smoothLink.addEventListener('click', e => {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  })
}
