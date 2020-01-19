import "./import/modules";
import Swiper from "./import/swiper.min";
let swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });