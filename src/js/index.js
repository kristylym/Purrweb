import "./import/modules";
let Swiper = require('./import/swiper.min.js')
let swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var scroll = new SmoothScroll('li>a[href*="#"]');

  

