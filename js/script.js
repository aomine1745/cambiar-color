/* cambio de color de navbar ------------------*/
$(window).scroll(function() {
	if ($("#navbar").offset().top > 300) {
		$("#navbar").addClass("bg-darks");
	} else {
		$("#navbar").removeClass("bg-darks");
	}
});
/* cambio de color de navbar ------------------*/
