$(function () {
	// ==========================Images lightbox ===================================
	$('[data-fancybox="gallery"]').fancybox();
	$('.fancybox').fancybox({
		beforeShow: function () {
			this.title = $(this.element).data("caption");
		}
	});
	//============================ Scroll button =======================================
	window.onscroll = function () { scrollFunction() };

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("myBtn").style.display = "block";
		} else {
			document.getElementById("myBtn").style.display = "none";
		}
	}
	/*==================================================================================*/

	$(window).scroll(function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 150;             
		// set to whatever you want it to be
	
		if(y_scroll_pos > scroll_pos_test) {
		   $(".bg-light").css("background-color","#FFF");
		   $('.navbar-light .navbar-nav .nav-link').css('color','#000');
		   $('.navbar-light .navbar-brand, .navbar-light .navbar-brand').css('color','#000');
		}
		else
		{
			$(".bg-light").css("background-color","transparent");
			$('.navbar-light .navbar-nav .nav-link').css('color','#FFF');
			$('.navbar-light .navbar-brand, .navbar-light .navbar-brand').css('color','#FFF');

		}
	});

	/*===================================================================================*/
	// When the user clicks on the button, scroll to the top of the document
	// SETTINGS PANEL

	$('.btn-settings').on('click', function () {
		$(this).parent().toggleClass('active');
	});

	$('.switch-handle').on('click', function () {
		$(this).toggleClass('active');
		$('.outer-wrapper').toggleClass('boxed');
		$('nav').toggleClass('bdcolor');
	});

	$('.bg-list div').on('click', function () {
		if ($(this).hasClass('active')) return false;
		if (!$('.switch-handle').hasClass('active')) $('.switch-handle').trigger('click');

		$(this).addClass('active').siblings().removeClass('active');
		var cl = $(this).attr('class');
		$('body').attr('class', cl);
	});

	$('.color-list div').on('click', function () {
		if ($(this).hasClass('active')) return false;

		$('link.color-scheme-link').remove();

		$(this).addClass('active').siblings().removeClass('active');
		var src = $(this).attr('data-src'),
			colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');

		colorScheme
			.attr('href', src)
			.appendTo('head');
	});



});
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();