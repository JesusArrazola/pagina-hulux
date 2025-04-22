import Glider from 'glider-js';

window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.glider');
  if (el) {
    new Glider(el, {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: "auto",
            slidesToScroll: 1,
            itemWidth: 385,
          },
        },
      ],
    });
  }
});