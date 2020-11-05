
// burger JQ **************************************************
jQuery(document).ready(function($) {
  $('.header__burger').click(function() {
  $('.header__burger, .header__inner').toggleClass('active');
  $('body').toggleClass('lock');
  });
let link = $('a[href]');
    $(link).click(function(){
    $('.header__burger, .header__inner').removeClass('active');
    $('body').removeClass('lock');
  });
});

// Form *******************************************************
jQuery(document).ready(function($) {
	// $('.butn-form').addClass('active');
	$('.butn-form').click(function(e) {
		$('.butn-form').toggleClass('active');
		if ($('.butn-form').hasClass('active')) {
			$('.form').slideUp();
		} else {
			$('.form').slideDown();
		}
	});
	$('.form__butn-close').click(function(e) {
		$('.form').slideUp();
		$('.butn-form').toggleClass('active');
	});
});