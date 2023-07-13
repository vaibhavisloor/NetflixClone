const videoLinks = document.querySelectorAll('.video-link');
const videoOverlay = document.querySelector('.video-overlay');
const videoIframe = videoOverlay.querySelector('iframe');
const closeButton = videoOverlay.querySelector('.close-button');

videoLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const trailerUrl = link.getAttribute('data-trailer-url');
    videoIframe.setAttribute('src', trailerUrl);
    videoOverlay.classList.add('active');
  });
});

closeButton.addEventListener('click', () => {
  videoIframe.setAttribute('src', '');
  videoOverlay.classList.remove('active');
});
// Made by Vaibhav Isloor
