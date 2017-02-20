$(".collapse-toggle").click(function() {
    if ($(this).find(".award-toggle").css( "transform" ) == 'none' || $(this).find(".award-toggle").css( "transform" ) == 'matrix(1, 0, 0, 1, 0, 0)') {
        $(this).animate({  borderSpacing: 180 }, {
			step: function(now,fx) {
				$(this).find(".award-toggle").css('-webkit-transform','rotate('+now+'deg)'); 
				$(this).find(".award-toggle").css('-moz-transform','rotate('+now+'deg)');
				$(this).find(".award-toggle").css('transform','rotate('+now+'deg)');
			},
			duration:'slow'
		},'linear');
    } else {
        $(this).animate({  borderSpacing: 0 }, {
			step: function(now,fx) {
				$(this).find(".award-toggle").css('-webkit-transform','rotate('+now+'deg)'); 
				$(this).find(".award-toggle").css('-moz-transform','rotate('+now+'deg)');
				$(this).find(".award-toggle").css('transform','rotate('+now+'deg)');
			},
			duration:'slow'
		},'linear');
    }
});