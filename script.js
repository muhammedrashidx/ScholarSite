document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const readMoreLinks = document.querySelectorAll('.read-more');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeLightboxButton = document.querySelector('.lightbox .close');

  // Hamburger menu toggle
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });

  // Read More functionality
  readMoreLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const longDescription = this.previousElementSibling;
      if (longDescription.style.display === 'none' || longDescription.style.display === '') {
        longDescription.style.display = 'block';
        this.textContent = 'Read less';
      } else {
        longDescription.style.display = 'none';
        this.textContent = 'Read more';
      }
    });
  });

  // Lightbox functionality for research and gallery images
  window.openLightbox = function(imgElement) {
    lightboxImg.src = imgElement.src;
    if (imgElement.classList.contains('gallery-pic')) {
      const captionText = imgElement.nextElementSibling ? imgElement.nextElementSibling.textContent : '';
      lightboxCaption.textContent = captionText;
      lightboxCaption.style.display = 'block';
    } else {
      lightboxCaption.style.display = 'none';
    }
    lightbox.style.display = 'block';
  };

  // Close lightbox when clicking the close button
  closeLightboxButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });
});
