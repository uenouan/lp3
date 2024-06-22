// カルーセル
$('.voice__slick').slick({
  // autoplay: true,
  // autoplaySpeed: 5000,
  slidesToShow: 3,
  arrows: false,
  dots: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 975,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "5%",
      },
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "15%",
      },
    },
    {
      breakpoint: 450,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "8.5%",
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "5%",
      },
    },
  ],
});