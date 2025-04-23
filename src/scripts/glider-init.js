window.addEventListener('DOMContentLoaded', () => {
  const testimonial = document.querySelector(".testimonial");
  const test = document.querySelector(".testt");
  //Testimonial
  if(test){
    new Glider(test, {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.t2-dots',
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

  if(test){
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
