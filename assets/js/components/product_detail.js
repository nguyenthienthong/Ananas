$(document).ready(function () {
  $(".best-seller").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      '<button class="slide-arrow_seller prev-arrow_seller"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slide-arrow_seller next-arrow_seller"><i class="fas fa-chevron-right"></i></button>',
  });
});

let acc = document.getElementsByClassName("accordion");
let icon = document.getElementsByClassName("icon-row");

let i;
