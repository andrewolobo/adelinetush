$(document).ready(function() {
    $('section#screenshots a').hover(function() {
        $('div#modal img').attr('src', $(this).attr('data-image-url') );
        $("#modal").modal("show");       
    });
    
    var nav = $('.navbar-fixed-top');
    var distance = $('.navbar-fixed-top').offset();
    
    if (distance.top >= 300) {
        nav.addClass ('effect');
    }
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        
        if (scroll >= 300) {
            nav.addClass('effect');
        
        } else {
            nav.removeClass('effect');
        
        }
    });
     
    $('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
    
    $('#about .redcircle').waypoint (function() {
        $('#about .redcircle').addClass('animated fadeInUp')
    }, {
        offset: '75%'
    }) ;
    
    $('#services .blue-circle').waypoint (function() {
        $('#services .blue-circle').addClass('animated fadeInUp')
    }, {
        offset: '80%'
    }) ;
    
    $('#screenshots .col-md-3').waypoint (function() {
        $(this.element).addClass('animated zoomIn')
        $(this.element).css({'opacity':1});
    }, {
        offset: '80%'
    }) ;
    
    
});

smoothScroll.init( {
    speed: 3000,
    easing: 'easeInOutQuad',
    offset: 10

});
