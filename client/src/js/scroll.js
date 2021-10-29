const smoothLinks = document.querySelectorAll('a[href^="#"]');
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
