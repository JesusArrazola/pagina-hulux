window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.glider');
  if (el) {
    new Glider(el, {
      slidesToShow: "auto",           // Móvil por defecto
      slidesToScroll: 1,
      itemWidth: 345,            // Ancho fijo para modo móvil
      exactWidth: true,
      draggable: true,
      responsive: [
        {
          // lg: Tailwind = 1024px
          breakpoint: 1280,
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
