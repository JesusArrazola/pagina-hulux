window.addEventListener('DOMContentLoaded', () => {
  const testimonial = document.querySelector(".testimonial");
  const test = document.querySelector(".testt");

  const residenciales = document.querySelector(".residenciales");

  if(residenciales){
    new Glider(residenciales, {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.sr-dots',
      arrows:{
        prev: ".sr-glider-prev",
        next: ".sr-glider-next"
      },
      responsive: [
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
        {
          // lg: Tailwind = 1024px
          breakpoint: 1210,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: undefined,
            exactWidth: false,
          },
        },
        {
          // lg: Tailwind = 1024px
          breakpoint: 1550,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            itemWidth: undefined,
            exactWidth: false,
          },
        },
      ]
    });
  }

  if(testimonial){
    new Glider(testimonial, {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.t-dots',
      responsive: [
        {
          // lg: Tailwind = 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: undefined,
            exactWidth: false,
          },
        },
      ]
    });
  }

  if(test){
    new Glider(test, {
      rewind: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.tst-dots',
      responsive: [
        {
          // lg: Tailwind = 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: undefined,
            exactWidth: false,
          },
        },
      ]
    });
  }
});
