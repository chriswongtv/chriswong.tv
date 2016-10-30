$(".collapse-card a i").click(function() {
    if ($(this).css( "transform" ) == 'none' || $(this).css( "transform" ) == 'matrix(1, 0, 0, 1, 0, 0)') {
        $(this).animate({  borderSpacing: 180 }, {
			step: function(now,fx) {
				$(this).css('-webkit-transform','rotate('+now+'deg)'); 
				$(this).css('-moz-transform','rotate('+now+'deg)');
				$(this).css('transform','rotate('+now+'deg)');
			},
			duration:'slow'
		},'linear');
    } else {
        $(this).animate({  borderSpacing: 0 }, {
			step: function(now,fx) {
				$(this).css('-webkit-transform','rotate('+now+'deg)'); 
				$(this).css('-moz-transform','rotate('+now+'deg)');
				$(this).css('transform','rotate('+now+'deg)');
			},
			duration:'slow'
		},'linear');
    }
});