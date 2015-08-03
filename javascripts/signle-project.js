 



 $(function ($) {
    

 	var vH = $(window).height();
    var vW = $(window).width();
    	$('#single-project').css('height',vH);



    var project_slider = $("#project-slider");
        project_slider.owlCarousel({
        items : 1, //10 items above 1000px browser width
        autoPlay : true,
        pagination : false,
        navigation : false,
        slideSpeed : 2000,
        autoHeight : true,
        transitionStyle:"goDown",
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [640,1],
        itemsMobile: [360,1]
        });



    // Custom Navigation Events
        $(".next").click(function(){
        project_slider.trigger('owl.next');
        })
        $(".prev").click(function(){
        project_slider.trigger('owl.prev');
        });

});







