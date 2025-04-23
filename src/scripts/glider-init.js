window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.glider');
  if (el) {
    new Glider(el, {
      slidesToShow: 1,           // Móvil por defecto
      slidesToScroll: 1,
      draggable: true,
      itemWidth: 385,            // Ancho fijo para modo móvil
      exactWidth: true,
      responsive: [
        {
          // lg: Tailwind = 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            itemWidth: undefined,
            exactWidth: false,
          },
        },
      ],
    });
  }
});
