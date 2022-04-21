$(document).ready(function() {
  // 햄버거 버튼
  $('.menu-hamberger').click(function () {
    $('.mo-menu-hide').toggleClass('show');
    $('.menu-hamberger').toggleClass('active');
  });
  $('.mo-menu-hide > nav > ul > li > a').click(function () {
    $('.mo-menu-hide').removeClass('show');
    $('.menu-hamberger').removeClass('active');
  });

  // ablities
	$('.bar').each(function(){
		$(this).find('.bar-color').animate({
			width: $(this).attr('data-percent')
		}, 6000);
	});

});


// ui/ux 스와이퍼
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true
  }
});


