window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.glider');
  const testimonial = document.querySelector(".testimonial");
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

  
  //Testimonial
  if(testimonial){
    new Glider(testimonial, {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.t-dots',
      responsive: [
        {
          // lg: Tailwind = 1024px
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: undefined,
            exactWidth: false,
          },
        },
        {
          // lg: Tailwind = 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            itemWidth: undefined,
            exactWidth: false,
          },
        },
      ]
    });
  }
});
